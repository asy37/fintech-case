'use client'

import { MaindHeader } from '@/shared/components/main-layout/MainHeader'
import { AppSidebar } from '@/shared/components/sidebar/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/shared/components/ui/sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full space-y-8 px-[40px] py-[30px]">
          <header>
            <SidebarTrigger className="block md:hidden" />
            <MaindHeader />
          </header>
          {children}
        </main>
      </SidebarProvider>
    </div>
  )
}
