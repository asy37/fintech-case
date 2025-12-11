import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'
import { UserResponse } from '../../types/user'

export const getUser = async (): Promise<BaseResponse<UserResponse>> => {
  const api = await createServerApi()
  const { data } = await api.get<BaseResponse<UserResponse>>('/users/profile')
  return data
}
