import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getTransactionRecent } from '@/features/dashboard/api/services/getTransactionRecent'
import type { RecentTransactionsResponse } from '@/features/dashboard/types/recent-transactions'

export const useTransactionRecent = () => {
  return useQuery<RecentTransactionsResponse>({
    queryKey: ['transaction-recent'],
    queryFn: async () => {
      const response = await getTransactionRecent()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response.data
    },
  })
}

