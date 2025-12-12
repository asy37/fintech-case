import Link from 'next/link'

import RegisterForm from '@/features/users/register/components/RegisterForm'
import { HoverUnderlineIcon } from '@/shared/components/icons'

export const RegisterView = () => {
  return (
    <div className={`
      flex min-h-screen w-full items-center p-4
      md:pl-[140px]
    `}>
      <div className={`
        w-full space-y-6
        md:w-[404px]
      `}>
        <h1 className="text-3xl font-semibold text-midnight-blue">
          Create new account
        </h1>
        <p className="text-sm text-neutral-gray">
          Welcome back! Please enter your details{' '}
        </p>

        <RegisterForm />

        <div className={`
          flex items-start justify-center gap-1 text-center text-sm
          text-neutral-gray
        `}>
          Already have an account?{' '}
          <Link
            prefetch={false}
            className={`
              flex flex-col items-center font-medium text-midnight-blue
              transition-all duration-100
              hover:scale-105
            `}
            href="login"
          >
            Sign in
            <HoverUnderlineIcon className="text-lime-green" />
          </Link>
        </div>
      </div>
    </div>
  )
}
