import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getTransfersScheduled } from '@/features/dashboard/api/services/getTransferScheduled'
import type { ScheduledTransfersResponse } from '@/features/dashboard/types/scheduled-transfers'

export const useTransfersScheduled = () => {
  return useQuery<ScheduledTransfersResponse>({
    queryKey: ['transfers-scheduled'],
    queryFn: async () => {
      const response = await getTransfersScheduled()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response.data
    },
  })
}

