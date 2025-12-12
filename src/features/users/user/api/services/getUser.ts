import { UserResponse } from '@/features/users/user/types/user'
import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'

export const getUser = async (): Promise<BaseResponse<UserResponse>> => {
  const api = await createServerApi()
  const { data } = await api.get<BaseResponse<UserResponse>>('/users/profile')
  return data
}
