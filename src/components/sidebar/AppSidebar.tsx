'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Image from 'next/image'
import { mockSidebar } from './utils'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import HelpIcon from '@/assets/icons/Help.svg'
import LogoutIcon from '@/assets/icons/Logout.svg'

export const AppSidebar = () => {
  const path = usePathname()

  return (
    <Sidebar className="bg-snow px-6 pt-[30px] pb-[100px]">
      <SidebarHeader className='md:p-2 p-12'>
        <Image src="/Logo.svg" alt="logo" height={30} width={107} />
      </SidebarHeader>
      <div className="flex flex-col h-full items-center md:justify-between">
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
                  <Link href="/help">
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
                    onClick={() => console.log('logout')}
                    className="text-neutral-gray h-12 w-[200px] cursor-pointer rounded-md p-3.5 text-sm"
                  >
                    <span className="h-5 w-5">
                      <LogoutIcon className="fill-neutral-gray" />
                    </span>
                    <span>Logout</span>
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
