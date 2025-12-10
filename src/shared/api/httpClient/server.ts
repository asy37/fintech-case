/**
 * Server-side HTTP Client
 * Axios instance configured for Next.js server environment
 */

import { AxiosInstance } from 'axios'
import { createAxiosInstance } from './factory'
import { setupRequestInterceptor } from './interceptors/request'

/**
 * Creates a server-side axios instance
 * Token is read from cookies on each request
 * @returns Promise resolving to configured axios instance
 */
export const createServerApi = async (): Promise<AxiosInstance> => {
  const { cookies } = await import('next/headers')

  const serverApi = createAxiosInstance()

  setupRequestInterceptor(serverApi, async () => {
    const cookieStore = await cookies()
    return cookieStore?.get('accessToken')?.value ?? null
  })

  // Server-side doesn't need response interceptor for refresh token
  serverApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  )

  return serverApi
}

