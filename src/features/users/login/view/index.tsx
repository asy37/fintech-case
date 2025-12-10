import Image from 'next/image'
import SignInForm from '../components/LoginForm'
import AuthHero from '@/shared/components/auth-hero/AuthHero'

export const LoginView = () => {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="relative flex min-h-screen items-center">
          <header className="absolute top-10">
            <div className="flex items-center gap-10">
              <Image src="/Logo.svg" alt="logo" height={30} width={107} />
            </div>
          </header>

          <div className="w-[404px] max-w-md space-y-6">
            <h1 className="text-smidnight-blue text-3xl font-semibold">
              Sign In
            </h1>
            <p className="text-neutral-gray text-sm">
              Welcome back! Please enter your details
            </p>

            <SignInForm />

            <div className="text-neutral-gray flex items-start justify-center gap-1 text-center text-sm">
              Don&apos;t have an account?{' '}
              <a
                className="text-midnight-blue flex flex-col items-center font-medium"
                href="/sign-up"
              >
                Sign up
                <Image src="/vector.svg" alt="vector" width={43} height={5} />
              </a>
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
