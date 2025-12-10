import { clearAuth, setAccessToken } from '@/store/auth-store'
import { apiClient, extractAccessToken } from '@/shared/api/httpClient'
import { AuthResponse, SignInPayload } from '../../types/api-types'

export const signin = async (payload: SignInPayload) => {
  const response = await apiClient.post<AuthResponse>('/users/login', payload)
  const token = extractAccessToken(response.data)

  if (token) {
    setAccessToken(token)
  }

  return response.data
}

export const logout = async () => {
  await apiClient.post('/users/logout')
  clearAuth()
}
