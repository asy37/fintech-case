/**
 * Client-side HTTP Client
 * Axios instance configured for browser environment with refresh token support
 */

import { getAccessToken } from '@/store/useAuthStore'
import { createAxiosInstance } from './factory'
import { setupRequestInterceptor } from './interceptors/request'
import { setupResponseInterceptor } from './interceptors/response'

/**
 * Client-side axios instance with refresh token support
 * Token is read from auth store
 */
const clientApi = createAxiosInstance()

setupRequestInterceptor(clientApi, getAccessToken)
setupResponseInterceptor(clientApi)

export { clientApi }

