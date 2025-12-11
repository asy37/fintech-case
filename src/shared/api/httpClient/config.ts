export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const REQUEST_TIMEOUT = 15000
export const HTTP_UNAUTHORIZED = 401
export const REFRESH_TOKEN_ENDPOINT = '/users/refresh-token'

export type AccessTokenShape = {
  accessToken?: string
  data?: {
    accessToken?: string
  }
}

export type AxiosRequestConfigWithRetry = {
  _retry?: boolean
}
