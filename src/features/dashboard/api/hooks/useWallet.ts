import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getWallet } from '@/features/dashboard/api/services/getWallet'

export const useWallet = () => {
  return useQuery({
    queryKey: ['wallet'],
    queryFn: async () => {
      const response = await getWallet()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}
