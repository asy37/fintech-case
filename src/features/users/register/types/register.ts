export type RegisterPayload = {
  fullName: string
  email: string
  password: string
}

export type RegisterResponse = {
  id: string
  fullName: string
  email: string
}
