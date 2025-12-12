import LoginForm from '../components/LoginForm'
import Link from 'next/link'
import { HoverUnderlineIcon } from '@/shared/components/icons'

export const LoginView = () => {
  return (
    <div className="flex min-h-screen w-full items-center md:pl-[140px] p-4">
      <div className="w-full max-w-md space-y-6 md:w-[404px]">
        <h1 className="text-smidnight-blue text-3xl font-semibold">Sign In</h1>
        <p className="text-neutral-gray text-sm">
          Welcome back! Please enter your details
        </p>

        <LoginForm />

        <div className="text-neutral-gray flex items-start justify-center gap-1 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link
            prefetch={false}
            className="text-midnight-blue flex flex-col items-center font-medium transition-all duration-100 hover:scale-105"
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
