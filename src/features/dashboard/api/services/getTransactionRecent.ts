
import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'
import { RecentTransactionsResponse } from '@/features/dashboard/types/recent-transactions'

export const getTransactionRecent = async (
  limit?: number,
): Promise<BaseResponse<RecentTransactionsResponse>> => {
  const api = await createServerApi()
  const params = limit ? { limit } : {}
  const { data } = await api.get<BaseResponse<RecentTransactionsResponse>>(
    '/financial/transactions/recent',
    { params },
  )
  return data
}
