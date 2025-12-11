import { NotificationIcon, SearchIcon, DropdownIcon } from '@/shared/components/icons'
import { Avatar } from '@/shared/components/ui/avatar/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { usePathname } from 'next/navigation'
import { capitalizeWords, formatPath } from './utils'
import { useUser } from '@/features/users/user/api/hooks/useUser'

export const MaindHeader = () => {
  const path = usePathname()
  const pageTitle = formatPath(path)
  const { data: user } = useUser()
  const { fullName } = user?.data || {}
  const formattedFullName = capitalizeWords(fullName)

  return (
    <div className="flex h-12 min-w-full items-center justify-between">
      <h1 className="text-midnight-blue text-2xl font-semibold">{pageTitle}</h1>
      <div className="flex w-fit items-center justify-between md:w-[353px]">
        <div className="flex items-center justify-center gap-2 md:gap-10">
          <SearchIcon className="cursor-pointer rounded-full transition-all duration-100 hover:scale-105" />
          <NotificationIcon className="cursor-pointer rounded-full transition-all duration-100 hover:scale-105" />
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-snow hover:bg-slate-dark/10 flex w-fit items-center gap-4 rounded-full px-2 py-4 transition-all duration-100 md:w-[215px]">
              <Avatar shape="circle" alt={formattedFullName} />
              <div className="flex items-center gap-6">
                <span className="text-midnight-blue hidden text-sm font-semibold md:inline">
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
    </div>
  )
}
