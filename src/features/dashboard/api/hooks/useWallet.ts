import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getWallet } from '@/features/dashboard/api/services/getWallet'
import type { WalletResponse } from '@/features/dashboard/types/wallet'

export const useWallet = () => {
  return useQuery<WalletResponse>({
    queryKey: ['wallet'],
    queryFn: async () => {
      const response = await getWallet()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response.data
    },
  })
}

