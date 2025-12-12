import Image from 'next/image'

import AuthHero from '@/shared/components/auth-hero/AuthHero'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative min-h-screen">
      <header className="absolute top-10 z-10 w-1/2">
        <div className={`
          flex w-full items-center justify-start p-4
          md:pl-[140px]
        `}>
          <Image src="/icons/logo.svg" alt="logo" height={30} width={107} />
        </div>
      </header>
      <main className="flex min-h-screen">
        {children}
        <div className={`
          relative hidden
          md:block
        `}>
          <AuthHero />
        </div>
      </main>
    </div>
  )
}
