import Image from 'next/image'
import SignInForm from '../components/SignUpForm'
import AuthHero from '@/components/auth-hero/AuthHero'

export const SingUpView = () => {
  return (
    <>
      {/* Left column: form */}
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="relative flex min-h-screen items-center">
          <header className="absolute top-10">
            <div className="flex items-center gap-10">
              {/* Logo placeholder */}
              <Image src="/Logo.svg" alt="logo" height={30} width={107} />
            </div>
          </header>

          <div className="w-[404px] max-w-md space-y-6">
            <h1 className="text-smidnight-blue text-3xl font-semibold">
              Create new account
            </h1>
            <p className="text-neutral-gray text-sm">
              Welcome back! Please enter your details{' '}
            </p>

            <SignInForm />

            <div className="text-neutral-gray flex items-start justify-center gap-1 text-center text-sm">
              Already have an account?{' '}
              <a
                className="text-midnight-blue flex flex-col items-center font-medium"
                href="/sign-in"
              >
                Sign in
                <Image src="/vector.svg" alt="vector" width={43} height={5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: hero image */}
      <div className="hidden md:block">
        <AuthHero />
      </div>
    </>
  )
}
