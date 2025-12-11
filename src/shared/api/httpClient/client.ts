import { getAccessToken } from '@/store/useAuthStore'
import { createAxiosInstance } from './factory'
import { setupRequestInterceptor } from './interceptors/request'
import { setupResponseInterceptor } from './interceptors/response'

const clientApi = createAxiosInstance()

setupRequestInterceptor(clientApi, getAccessToken)
setupResponseInterceptor(clientApi)

export { clientApi }
