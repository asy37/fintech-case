'use client'

import { create } from 'zustand'

type AuthState = {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  clearAuth: () => void
}

const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  clearAuth: () => {
    set({ accessToken: null })
    deleteCookie('accessToken')
  },
}))

export const getAccessToken = () => useAuthStore.getState().accessToken
export const setAccessToken = (token: string | null) =>
  useAuthStore.getState().setAccessToken(token)
export const clearAuth = () => useAuthStore.getState().clearAuth()
