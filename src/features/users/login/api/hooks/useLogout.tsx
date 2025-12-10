import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postLogout } from '@/features/users/login/api/services/postLogin'

export const useLogout = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      router.push('/login')
    },
  })

  return {
    logout: mutateAsync,
    isLoading: isPending,
  }
}
