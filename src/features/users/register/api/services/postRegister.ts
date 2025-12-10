import {
  RegisterPayload,
  RegisterResponse,
} from '@/features/users/register/types/register'
import { apiClient } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'

export const postRegister = async (payload: RegisterPayload) => {
  const response = await apiClient.post<BaseResponse<RegisterResponse>>(
    '/users/register',
    payload,
  )

  return response.data
}
