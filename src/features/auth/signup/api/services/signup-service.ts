import { setAccessToken } from '@/store/auth-store'
import { AuthResponse, RegisterPayload } from '../../types/api-types'
import { apiClient, extractAccessToken } from '@/shared/api/httpClient'

const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

export const signUp = async (payload: RegisterPayload) => {
  const response = await apiClient.post<AuthResponse>(
    '/users/register',
    payload,
  )
  const token = extractAccessToken(response.data)

  if (token) {
    setAccessToken(token)
    setCookie('accessToken', token)
  }

  return response.data
}
