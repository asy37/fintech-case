import { clearAuth, setAccessToken } from '@/store/useAuthStore'
import { apiClient, extractAccessToken } from '@/shared/api/httpClient'
import { setCookie, deleteCookie } from '@/shared/utils/cookie'
import { LoginPayload, LoginResponse } from '@/features/users/login/types/login'
import { BaseResponse } from '@/shared/types/base-response-type'

export const postLogin = async (payload: LoginPayload) => {
  const response = await apiClient.post<BaseResponse<LoginResponse>>(
    '/users/login',
    payload,
  )
  const token = extractAccessToken(response.data)

  if (token) {
    setAccessToken(token)
    setCookie('accessToken', token)
  }

  return response.data
}

export const postLogout = async () => {
  await apiClient.post('/users/logout')
  clearAuth()
  deleteCookie('accessToken')
}
