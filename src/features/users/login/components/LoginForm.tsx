// components/SignInForm.tsx
'use client'
import React from 'react'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Label } from '@/shared/components/ui/label'
import { Card, CardContent } from '@/shared/components/ui/card'
import Image from 'next/image'
import { Spinner } from '@/shared/components/ui/spinner'

import { LoginSchema, LoginSchemaType } from '@/features/users/login/types/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLogin } from '@/features/users/login/api/hooks/useLogin'

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
            <Label htmlFor="email" className="text-midnight-blue p-2.5 pl-0">
              Email
            </Label>
            <Input
              className="text-neutral-gray h-12"
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
              className="text-neutral-gray h-12"
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
            className="bg-lime-green text-midnight-blue h-12 w-full"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Sign In'}
          </Button>

          <div>
            <Button
              type="button"
              variant="outline"
              className="text-neutral-gray h-12 w-full"
              onClick={() => {
                globalThis.location.href = '/api/auth/google'
              }}
            >
              <Image src="/Google.svg" alt="google" height={24} width={24} />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
