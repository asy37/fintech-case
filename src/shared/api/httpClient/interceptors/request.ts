import { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

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
