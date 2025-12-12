import { LoginPayload, LoginResponse } from '@/features/users/login/types/login'
import { apiClient, extractAccessToken } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'
import { deleteCookie,setCookie } from '@/shared/utils/cookie'
import { clearAuth, setAccessToken } from '@/store/useAuthStore'

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
