'use client'

import { MaindHeader } from '@/components/main-layout/MainHeader'
import { AppSidebar } from '@/components/sidebar/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full px-[40px] py-[30px] space-y-8">
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
