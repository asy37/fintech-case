import { AxiosInstance } from 'axios'
import { createAxiosInstance } from './factory'
import { setupRequestInterceptor } from './interceptors/request'

export const createServerApi = async (): Promise<AxiosInstance> => {
  const { cookies } = await import('next/headers')

  const serverApi = createAxiosInstance()

  setupRequestInterceptor(serverApi, async () => {
    const cookieStore = await cookies()
    return cookieStore?.get('accessToken')?.value ?? null
  })

  serverApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  )

  return serverApi
}
