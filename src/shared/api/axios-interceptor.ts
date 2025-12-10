import axios from 'axios'
import { getAccessToken } from '@/store/auth-store'

// Server-side için axios instance
export const createServerApi = async () => {
  const { cookies } = await import('next/headers')

  const serverApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
    timeout: 15000,
  })

  serverApi.interceptors.request.use(async (config) => {
    // Her request'te cookie'den token oku (cookie her request'te güncellenebilir)
    const cookieStore = await cookies()
    const token = cookieStore?.get('accessToken')?.value

    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  serverApi.interceptors.response.use(
    (res) => res,
    (error) => {
      return Promise.reject(error)
    },
  )

  return serverApi
}

// Client-side için axios instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
})

api.interceptors.request.use(async (config) => {
  // Client-side: store'dan token oku
  const token = getAccessToken()

  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error)
  },
)
