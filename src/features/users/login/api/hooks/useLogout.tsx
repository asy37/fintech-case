import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postLogout } from '@/features/users/login/api/services/postLogin'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

export const useLogout = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      router.push('/login')
      toast.success('You have logged out successfully.')
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error)

      const errorMessage =
        error.response?.data?.message || error.message || 'Bir hata oluştu'
      toast.error(errorMessage)
    },
  })

  return {
    logout: mutateAsync,
    isLoading: isPending,
  }
}
