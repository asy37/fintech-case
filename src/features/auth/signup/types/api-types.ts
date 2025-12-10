export type RegisterPayload = {
  fullName: string
  email: string
  password: string
}

export type AuthResponse = {
  accessToken?: string
  data?: {
    accessToken?: string
  }
}
