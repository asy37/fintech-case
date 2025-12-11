import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { postRegister } from '@/features/users/register/api/services/postRegister'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

export const useRegister = () => {
  const router = useRouter()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: postRegister,
    onSuccess: () => {
      router.push('/login')
      toast.success('You have registered successfully.')
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error)

      const errorMessage =
        error.response?.data?.message || error.message || 'Bir hata oluştu'
      toast.error(errorMessage)
    },
  })

  return {
    register: mutateAsync,
    isLoading: isPending,
  }
}
