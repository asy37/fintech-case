import { FinancialSummaryResponse } from '@/features/dashboard/types/financial-summary'
import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'

export const getFinancialSummary = async (): Promise<
  BaseResponse<FinancialSummaryResponse>
> => {
  const api = await createServerApi()
  const { data } =
    await api.get<BaseResponse<FinancialSummaryResponse>>('/financial/summary')
  return data
}
