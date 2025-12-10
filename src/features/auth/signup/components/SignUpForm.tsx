'use client'

import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Label } from '@/shared/components/ui/label'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Spinner } from '@/shared/components/ui/spinner'
import { SignupSchema, type SignupType } from '../types/SingUpSchema'
import { useSignUp } from '../api/hooks/useSignUp'

export default function SignUpForm() {
  const form = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const { signup, isLoading } = useSignUp()

  const onSubmit = async (values: SignupType) => {
    await signup(values)
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
              className="text-neutral-gray h-12"
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
            {isLoading ? <Spinner /> : 'Create Account'}
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
              Sign up with Google
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
