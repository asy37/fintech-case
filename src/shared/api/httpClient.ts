import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { clearAuth, getAccessToken, setAccessToken } from '@/store/auth-store'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

type AccessTokenShape = {
  accessToken?: string
  data?: {
    accessToken?: string
  }
}

type AxiosRequestConfigWithRetry = InternalAxiosRequestConfig & {
  _retry?: boolean
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

const refreshClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

const extractAccessToken = (payload: AccessTokenShape): string | null => {
  return payload?.accessToken ?? payload?.data?.accessToken ?? null
}

const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}

let refreshPromise: Promise<string | null> | null = null

const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const response = await refreshClient.post<AccessTokenShape>(
      '/users/refresh-token',
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
    clearAuth()
    deleteCookie('accessToken')
    return null
  }
}

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken()

  if (token) {
    config.headers = config.headers ?? {}
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response, config } = error
    const originalRequest = config as AxiosRequestConfigWithRetry

    const isUnauthorized = response?.status === 401

    if (isUnauthorized && !originalRequest?._retry) {
      originalRequest._retry = true

      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null
        })
      }

      const newToken = await refreshPromise

      if (newToken) {
        originalRequest.headers = originalRequest.headers ?? {}
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return apiClient(originalRequest)
      }
    }

    return Promise.reject(error)
  },
)

export { apiClient, API_BASE_URL, extractAccessToken }
