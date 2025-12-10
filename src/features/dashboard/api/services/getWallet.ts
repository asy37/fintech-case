
import { createServerApi } from '@/shared/api/httpClient'
import { BaseResponse } from '@/shared/types/base-response-type'
import { WalletResponse } from '@/features/dashboard/types/wallet'



export const getWallet = async (): Promise<BaseResponse<WalletResponse>> => {
  const api = await createServerApi()
  const { data } = await api.get<BaseResponse<WalletResponse>>('/financial/wallet')
  return data
}
