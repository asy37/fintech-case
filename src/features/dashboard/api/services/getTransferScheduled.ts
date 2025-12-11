import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'
import { ScheduledTransfersResponse } from '@/features/dashboard/types/scheduled-transfers'

export const getTransfersScheduled = async (
  limit?: number,
): Promise<BaseResponse<ScheduledTransfersResponse>> => {
  const api = await createServerApi()
  const params = limit ? { limit } : {}
  const { data } = await api.get<BaseResponse<ScheduledTransfersResponse>>(
    '/financial/transfers/scheduled',
    { params },
  )
  return data
}
