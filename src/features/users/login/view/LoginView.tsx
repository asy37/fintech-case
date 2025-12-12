import Link from 'next/link'

import { HoverUnderlineIcon } from '@/shared/components/icons'

import LoginForm from '../components/LoginForm'

export const LoginView = () => {
  return (
    <div className={`
      flex min-h-screen w-full items-center p-4
      md:pl-[140px]
    `}>
      <div className={`
        w-full max-w-md space-y-6
        md:w-[404px]
      `}>
        <h1 className="text-3xl font-semibold text-midnight-blue">Sign In</h1>
        <p className="text-sm text-neutral-gray">
          Welcome back! Please enter your details
        </p>

        <LoginForm />

        <div className={`
          flex items-start justify-center gap-1 text-center text-sm
          text-neutral-gray
        `}>
          Don&apos;t have an account?{' '}
          <Link
            prefetch={false}
            className={`
              flex flex-col items-center font-medium text-midnight-blue
              transition-all duration-100
              hover:scale-105
            `}
            href="/register"
          >
            Sign up
            <HoverUnderlineIcon className="text-lime-green" />
          </Link>
        </div>
      </div>
    </div>
  )
}
