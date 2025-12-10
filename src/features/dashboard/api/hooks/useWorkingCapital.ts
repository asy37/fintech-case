import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getWorkingCapital } from '@/features/dashboard/api/services/getWorkingCapital'
import type { WorkingCapitalResponse } from '@/features/dashboard/types/working-capital'

export const useWorkingCapital = () => {
  return useQuery<WorkingCapitalResponse>({
    queryKey: ['working-capital'],
    queryFn: async () => {
      const response = await getWorkingCapital()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response.data
    },
  })
}

