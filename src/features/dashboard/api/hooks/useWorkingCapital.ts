import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getWorkingCapital } from '@/features/dashboard/api/services/getWorkingCapital'

export const useWorkingCapital = () => {
  return useQuery({
    queryKey: ['working-capital'],
    queryFn: async () => {
      const response = await getWorkingCapital()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}
