import Image from 'next/image'

import { useUser } from '@/features/users/user/api/hooks/useUser'
import {
  DropdownIcon,
  NotificationIcon,
  SearchIcon,
} from '@/shared/components/icons'
import { Avatar } from '@/shared/components/ui/avatar/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'

import { capitalizeWords } from './utils'

export const MaindHeader = ({ pageTitle }: { pageTitle: string }) => {
  const { data: user } = useUser()
  const { fullName } = user?.data || {}
  const formattedFullName = capitalizeWords(fullName)

  return (
    <div className="flex h-12 w-full items-center justify-between">
      <h1 className={`
        hidden text-2xl font-semibold text-midnight-blue
        md:block
      `}>
        {pageTitle}
      </h1>
      <Image
        src="/icons/logo.svg"
        alt="logo"
        height={30}
        width={107}
        className={`
          block
          md:hidden
        `}
      />
      <div className={`
        flex w-fit items-center justify-between
        md:w-[353px]
      `}>
        <div className={`
          flex items-center justify-center gap-2
          md:gap-10
        `}>
          <SearchIcon className={`
            cursor-pointer rounded-full fill-white text-neutral-gray
            transition-all duration-100
            hover:scale-105
          `} />
          <NotificationIcon className={`
            cursor-pointer rounded-full text-neutral-gray transition-all
            duration-100
            hover:scale-105
          `} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className={`
            flex w-fit items-center gap-4 rounded-full bg-snow p-2
            transition-all duration-100
            hover:bg-slate-dark/10
            md:w-[215px]
          `}>
            <Avatar shape="circle" alt={formattedFullName} />
            <div className="flex items-center gap-6">
              <span className={`
                hidden text-sm font-semibold text-midnight-blue
                md:inline
              `}>
                {formattedFullName}
              </span>
              <DropdownIcon />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
