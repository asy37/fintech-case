import { ScheduledTransfersResponse } from '@/features/dashboard/types/scheduled-transfers'
import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'

export const getTransfersScheduled = async (): Promise<
  BaseResponse<ScheduledTransfersResponse>
> => {
  const api = await createServerApi()
  const { data } = await api.get<BaseResponse<ScheduledTransfersResponse>>(
    '/financial/transfers/scheduled',
  )
  return data
}
