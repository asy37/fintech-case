'use client'

import { create } from 'zustand'

type AuthState = {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  clearAuth: () => void
}

// Hafızada access token tutuyoruz; refresh token httpOnly cookie tarafında.
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  clearAuth: () => set({ accessToken: null }),
}))

export const getAccessToken = () => useAuthStore.getState().accessToken
export const setAccessToken = (token: string | null) =>
  useAuthStore.getState().setAccessToken(token)
export const clearAuth = () => useAuthStore.getState().clearAuth()

