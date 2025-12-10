import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { logout } from '../services/signin-service'

export const useLogout = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.push('/sign-in')
    },
  })

  return {
    logout: mutateAsync,
    isLoading: isPending,
  }
}
