import { WorkingCapitalType } from '@/shared/types/capital-type'
import { FinancialSummaryType } from '@/shared/types/financial-type'
import { ScheduledType } from '@/shared/types/scheduled-type'
import { TransactionsResponse } from '@/shared/types/transaction-type'
import { WalletType } from '@/shared/types/wallet-type'
import { path } from './path'
import { createServerApi } from '@/shared/api/axios-interceptor'

export const getFinancialSummary = async (): Promise<FinancialSummaryType> => {
  const api = await createServerApi()
  const { data } = await api.get<FinancialSummaryType>(path.summary)
  return data
}

export const getWorkingCapital = async (): Promise<WorkingCapitalType> => {
  const api = await createServerApi()
  const { data } = await api.get<WorkingCapitalType>(path.capital)
  return data
}

export const getWallet = async (): Promise<WalletType> => {
  const api = await createServerApi()
  const { data } = await api.get<WalletType>(path.wallet)
  return data
}

export const getTransactionRecent = async (): Promise<TransactionsResponse> => {
  const api = await createServerApi()
  const { data } = await api.get<TransactionsResponse>(path.transactions)
  return data
}

export const getTransfersScheduled = async (): Promise<ScheduledType> => {
  const api = await createServerApi()
  const { data } = await api.get<ScheduledType>(path.transfer)
  return data
}
