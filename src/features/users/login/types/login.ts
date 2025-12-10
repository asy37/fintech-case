export type User = {
  id: string
  fullName: string
  email: string
  role: string
  isActive: boolean
  lastLoginAt: string
  lastLoginIP: string
  createdAt: string
  updatedAt: string
}
export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  user: User
  accessToken: string
}
