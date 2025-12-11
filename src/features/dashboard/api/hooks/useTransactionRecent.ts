import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getTransactionRecent } from '@/features/dashboard/api/services/getTransactionRecent'

export const useTransactionRecent = (limit?: number) => {
  return useQuery({
    queryKey: ['transaction-recent'],
    queryFn: async () => {
      const response = await getTransactionRecent(limit)
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}
