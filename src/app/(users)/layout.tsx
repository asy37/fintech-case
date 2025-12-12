import AuthHero from '@/shared/components/auth-hero/AuthHero'
import Image from 'next/image'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative min-h-screen">
      <header className="absolute top-10 z-10 w-1/2">
        <div className="w-full flex items-center justify-start p-4 md:pl-[140px]">
          <Image src="/icons/logo.svg" alt="logo" height={30} width={107} />
        </div>
      </header>
      <main className="flex min-h-screen">
        {children}
        <div className="relative hidden md:block">
          <AuthHero />
        </div>
      </main>
    </div>
  )
}
