/**
 * Response Interceptor
 * Handles error responses and token refresh (client-side only)
 */

import { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { clearAuth, setAccessToken } from '@/store/useAuthStore'
import { deleteCookie, setCookie } from '@/shared/utils/cookie'
import { HTTP_UNAUTHORIZED, REFRESH_TOKEN_ENDPOINT } from '../config'
import type { AccessTokenShape, AxiosRequestConfigWithRetry } from '../config'
import { createAxiosInstance } from '../factory'
import { extractAccessToken } from '../utils'

/**
 * Sets up response interceptor for error handling (client-side only)
 * @param instance - Axios instance to configure
 */
export const setupResponseInterceptor = (instance: AxiosInstance): void => {
  let refreshPromise: Promise<string | null> | null = null

  const refreshAccessToken = async (): Promise<string | null> => {
    try {
      const refreshClient = createAxiosInstance()
      const response = await refreshClient.post<AccessTokenShape>(
        REFRESH_TOKEN_ENDPOINT,
      )
      const newToken = extractAccessToken(response.data)

      if (newToken) {
        setAccessToken(newToken)
        setCookie('accessToken', newToken)
        return newToken
      }

      clearAuth()
      deleteCookie('accessToken')
      return null
    } catch (error) {
      console.error('Failed to refresh access token:', error)
      clearAuth()
      deleteCookie('accessToken')
      return null
    }
  }

  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const { response, config } = error
      const originalRequest = config as InternalAxiosRequestConfig &
        AxiosRequestConfigWithRetry

      const isUnauthorized = response?.status === HTTP_UNAUTHORIZED

      if (isUnauthorized && originalRequest && !originalRequest._retry) {
        originalRequest._retry = true

        refreshPromise ??= refreshAccessToken().finally(() => {
          refreshPromise = null
        })

        const newToken = await refreshPromise

        if (newToken && originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`
          return instance(originalRequest)
        }
      }

      throw error
    },
  )
}

