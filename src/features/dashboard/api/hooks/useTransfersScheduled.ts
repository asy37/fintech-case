import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getTransfersScheduled } from '@/features/dashboard/api/services/getTransferScheduled'

export const useTransfersScheduled = () => {
  return useQuery({
    queryKey: ['transfers-scheduled'],
    queryFn: async () => {
      const response = await getTransfersScheduled()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}

