import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getTransactionRecent } from '@/features/dashboard/api/services/getTransactionRecent'

export const useTransactionRecent = () => {
  return useQuery({
    queryKey: ['transaction-recent'],
    queryFn: async () => {
      const response = await getTransactionRecent()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}

