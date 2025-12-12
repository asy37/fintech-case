import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { postLogin } from '@/features/users/login/api/services/postLogin'

export const useLogin = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      router.push('/dashboard')
      toast.success('You have logged in successfully.')
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error)

      const errorMessage =
        error.response?.data?.message || error.message || 'Bir hata oluştu'
      toast.error(errorMessage)
    },
  })

  return {
    login: mutateAsync,
    isLoading: isPending,
  }
}
