'use client'

import { usePathname } from 'next/navigation'

import { MaindHeader } from '@/shared/components/main-layout/MainHeader'
import { formatPath } from '@/shared/components/main-layout/utils'
import { AppSidebar } from '@/shared/components/sidebar/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/shared/components/ui/sidebar'

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const pageTitle = formatPath(path)
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className={`
          w-full space-y-8 p-4
          md:px-[40px] md:py-[30px]
        `}>
          <header className="flex flex-col">
            <div className={`
              flex w-full items-center justify-between gap-4 overflow-hidden
            `}>
              <SidebarTrigger className={`
                block
                md:hidden
              `} />
              <MaindHeader pageTitle={pageTitle} />
            </div>
            <h1 className={`
              block text-2xl font-semibold text-midnight-blue
              md:hidden
            `}>
              {pageTitle}
            </h1>
          </header>
          {children}
        </main>
      </SidebarProvider>
    </div>
  )
}
