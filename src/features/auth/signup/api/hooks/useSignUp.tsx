import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { signUp } from '../services/signup-service'

export const useSignUp = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      router.push('/dashboard')
    },
  })

  return {
    signup: mutateAsync,
    isLoading: isPending,
  }
}
