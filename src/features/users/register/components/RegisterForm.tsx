'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Label } from '@/shared/components/ui/label'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Spinner } from '@/shared/components/ui/spinner'
import {
  RegisterSchema,
  type RegisterSchemaType,
} from '@/features/users/register/types/register-schema'
import { useRegister } from '@/features/users/register/api/hooks/useRegister'
import { GoogleIcon } from '@/shared/components/icons'
import { cn } from '@/shared/utils/cn'

export default function RegisterForm() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const { register: registerMutation, isLoading } = useRegister()

  const onSubmit = async (values: RegisterSchemaType) => {
    await registerMutation(values)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <Card className="border-0 p-0 shadow-none">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 p-0">
          <div>
            <Label htmlFor="fullName" className="text-midnight-blue p-2.5 pl-0">
              Full Name
            </Label>
            <Input
              className={cn(
                'text-neutral-gray h-12 focus-visible:ring-0',
                errors.email && 'border-destructive',
              )}
              id="fullName"
              placeholder="Joe Doe"
              type="text"
              {...register('fullName')}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-midnight-blue p-2.5 pl-0">
              Email
            </Label>
            <Input
              className={cn(
                'text-neutral-gray h-12 focus-visible:ring-0',
                errors.email && 'border-destructive',
              )}
              id="email"
              placeholder="example@gmail.com"
              type="email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="text-midnight-blue p-2.5 pl-0">
              Password
            </Label>
            <Input
              className={cn(
                'text-neutral-gray h-12 focus-visible:ring-0',
                errors.email && 'border-destructive',
              )}
              id="password"
              placeholder="********"
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-lime-green text-midnight-blue h-12 w-full cursor-pointer hover:text-white"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Create Account'}
          </Button>

          <div>
            <Button
              type="button"
              variant="outline"
              className="text-neutral-gray h-12 w-full cursor-pointer"
            >
              <GoogleIcon />
              Sign up with Google
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
