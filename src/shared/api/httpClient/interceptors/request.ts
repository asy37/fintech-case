/**
 * Request Interceptor
 * Handles authorization token injection
 */

import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

/**
 * Sets up request interceptor to add authorization token
 * @param instance - Axios instance to configure
 * @param getToken - Function to retrieve access token (can be async for server-side)
 */
export const setupRequestInterceptor = (
  instance: AxiosInstance,
  getToken: () => string | null | Promise<string | null>,
): void => {
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = await Promise.resolve(getToken())

      if (token) {
        config.headers = config.headers ?? {}
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }

      return config
    },
  )
}

