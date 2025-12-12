import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { getFinancialSummary } from '@/features/dashboard/api/services/getFinancialSummary'

export const useFinancialSummary = () => {
  return useQuery({
    queryKey: ['financial-summary'],
    queryFn: async () => {
      const response = await getFinancialSummary()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}
