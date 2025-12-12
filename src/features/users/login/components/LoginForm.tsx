// components/SignInForm.tsx
'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { useLogin } from '@/features/users/login/api/hooks/useLogin'
import {
  LoginSchema,
  LoginSchemaType,
} from '@/features/users/login/types/login-schema'
import { GoogleIcon } from '@/shared/components/icons'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Spinner } from '@/shared/components/ui/spinner'
import { cn } from '@/shared/utils/cn'

export default function LoginForm() {
  const { login, isLoading } = useLogin()
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async (values: LoginSchemaType) => {
    await login(values)
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form
  return (
    <Card className="border-0 p-0 shadow-none">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 p-0">
          <div>
            <Label htmlFor="email" className="p-2.5 pl-0 text-midnight-blue">
              Email
            </Label>
            <Input
              className={cn(
                `
                  h-12 text-neutral-gray
                  focus-visible:ring-0
                `,
                errors.email && 'border-destructive',
              )}
              id="email"
              placeholder="example@gmail.com"
              type="email"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="p-2.5 pl-0 text-midnight-blue">
              Password
            </Label>
            <Input
              className={cn(
                `
                  h-12 text-neutral-gray
                  focus-visible:ring-0
                `,
                errors.email && 'border-destructive',
              )}
              id="password"
              disabled={isLoading}
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
            className={`
              h-12 w-full cursor-pointer bg-lime-green text-midnight-blue
              hover:text-white
            `}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Sign In'}
          </Button>

          <div>
            <Button
              type="button"
              variant="outline"
              className="h-12 w-full cursor-pointer text-neutral-gray"
            >
              <GoogleIcon />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
