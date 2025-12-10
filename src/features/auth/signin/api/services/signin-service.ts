import { clearAuth, setAccessToken } from '@/store/auth-store'
import { apiClient, extractAccessToken } from '@/shared/api/httpClient'
import { AuthResponse, SignInPayload } from '../../types/api-types'

const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

export const signin = async (payload: SignInPayload) => {
  const response = await apiClient.post<AuthResponse>('/users/login', payload)
  const token = extractAccessToken(response.data)

  if (token) {
    setAccessToken(token)
    setCookie('accessToken', token)
  }

  return response.data
}

const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}

export const logout = async () => {
  await apiClient.post('/users/logout')
  clearAuth()
  deleteCookie('accessToken')
}
