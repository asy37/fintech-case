import Image from 'next/image'
import RegisterForm from '@/features/users/register/components/RegisterForm'
import AuthHero from '@/shared/components/auth-hero/AuthHero'
import Link from 'next/link'
import { HoverUnderlineIcon } from '@/shared/components/icons'

export const RegisterView = () => {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="relative flex min-h-screen items-center">
          <header className="absolute top-10">
            <div className="flex items-center gap-10">
              <Image src="/icons/logo.svg" alt="logo" height={30} width={107} />
            </div>
          </header>

          <div className="w-full space-y-6 md:w-[404px]">
            <h1 className="text-smidnight-blue text-3xl font-semibold">
              Create new account
            </h1>
            <p className="text-neutral-gray text-sm">
              Welcome back! Please enter your details{' '}
            </p>

            <RegisterForm />

            <div className="text-neutral-gray flex items-start justify-center gap-1 text-center text-sm">
              Already have an account?{' '}
              <Link
                prefetch={false}
                className="text-midnight-blue flex flex-col items-center font-medium transition-all duration-100 hover:scale-105"
                href="login"
              >
                Sign in
                <HoverUnderlineIcon className="text-lime-green" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <AuthHero />
      </div>
    </>
  )
}
