import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postLogin } from '@/features/users/login/api/services/postLogin'

export const useLogin = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      router.push('/dashboard')
    },
  })

  return {
    login: mutateAsync,
    isLoading: isPending,
  }
}
