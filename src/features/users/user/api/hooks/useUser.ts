import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

import { getUser } from '@/features/users/user/api/services/getUser'

export const useUser = () => {
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const response = await getUser()
      if (!response.success) {
        toast.error(response.message)
        throw new Error(response.message)
      }
      return response
    },
  })
}
