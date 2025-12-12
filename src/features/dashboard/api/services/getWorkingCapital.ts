import { WorkingCapitalResponse } from '@/features/dashboard/types/working-capital'
import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'

export const getWorkingCapital = async (): Promise<
  BaseResponse<WorkingCapitalResponse>
> => {
  const api = await createServerApi()
  const { data } = await api.get<BaseResponse<WorkingCapitalResponse>>(
    '/financial/working-capital',
  )
  return data
}
