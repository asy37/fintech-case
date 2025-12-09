'use client'

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
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>{' '}
    </div>
  )
}
