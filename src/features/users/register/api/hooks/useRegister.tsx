import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postRegister } from '@/features/users/register/api/services/postRegister'

export const useRegister = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postRegister,
    onSuccess: () => {
      router.push('/login')
    },
  })

  return {
    register: mutateAsync,
    isLoading: isPending,
  }
}
