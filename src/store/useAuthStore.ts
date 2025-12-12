'use client'

import { create } from 'zustand'

import { deleteCookie } from '@/shared/utils/cookie'

type AuthState = {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  clearAuth: () => void
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
