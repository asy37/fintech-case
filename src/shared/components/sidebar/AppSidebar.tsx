'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/components/ui/sidebar'
import Image from 'next/image'
import { mockSidebar } from './utils'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { HelpIcon, LogoutIcon } from '@/shared/components/icons'
import { useLogout } from '@/features/users/login/api/hooks/useLogout'
import { Spinner } from '../ui/spinner'
import { cn } from '@/shared/utils/cn'

export const AppSidebar = () => {
  const path = usePathname()
  const { logout, isLoading } = useLogout()
  return (
    <Sidebar className="bg-snow px-6 pt-[30px] pb-[100px]">
      <SidebarHeader className="p-12 md:p-2">
        <Image src="/icons/logo.svg" alt="logo" height={30} width={107} />
      </SidebarHeader>
      <div className="flex h-full flex-col items-center gap-24 sm:gap-80 md:justify-between md:gap-0">
        <div>
          <SidebarGroup>
            <SidebarMenu>
              {mockSidebar.map((item) => {
                const isActive = item.href === path
                return (
                  <SidebarMenuItem key={item.id}>
                    <Link href={item.href}>
                      <SidebarMenuButton
                        className={cn(
                          'text-neutral-gray h-12 w-[200px] cursor-pointer rounded-md p-3.5 text-sm',
                          isActive &&
                            'bg-lime-green text-midnight-blue font-semibold',
                        )}
                      >
                        <span className="h-5 w-5">
                          <item.icon
                            className={cn(
                              'stroke-neutral-gray fill-neutral-gray',
                              isActive && 'fill-midnight-blue',
                            )}
                          />
                        </span>
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        </div>
        <div>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="#">
                    <SidebarMenuButton
                      className={cn(
                        'text-neutral-gray h-12 w-[200px] cursor-pointer rounded-md p-3.5 text-sm',
                        path === '/help' &&
                          'bg-lime-green text-midnight-blue font-semibold',
                      )}
                    >
                      <span className="h-5 w-5">
                        <HelpIcon
                          className={cn(
                            'stroke-neutral-gray fill-neutral-gray',
                            path === '/help' && 'fill-midnight-blue',
                          )}
                        />
                      </span>
                      <span>Help</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    disabled={false}
                    onClick={() => logout()}
                    className="text-neutral-gray h-12 w-[200px] cursor-pointer rounded-md p-3.5 text-sm"
                  >
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <>
                        <span className="h-5 w-5">
                          <LogoutIcon className="fill-neutral-gray" />
                        </span>
                        <span>Logout</span>
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </div>
      </div>
    </Sidebar>
  )
}
