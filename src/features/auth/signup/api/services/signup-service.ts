import { setAccessToken } from '@/store/auth-store'
import { AuthResponse, RegisterPayload } from '../../types/api-types'
import { apiClient, extractAccessToken } from '@/shared/api/httpClient'

export const signUp = async (payload: RegisterPayload) => {
  const response = await apiClient.post<AuthResponse>(
    '/users/register',
    payload
  )
  const token = extractAccessToken(response.data)

  if (token) {
    setAccessToken(token)
  }

  return response.data
}