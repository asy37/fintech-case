import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { signin } from '../services/signin-service'

export const useSignIn = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signin,
    onSuccess: () => {
      router.push('/dashboard')
    },
  })

  return {
    signin: mutateAsync,
    isLoading: isPending,
  }
}
