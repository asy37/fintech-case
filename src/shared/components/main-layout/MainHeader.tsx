import NotificationIcon from '@/assets/icons/Notification.svg'
import SearchIcon from '@/assets/icons/Search.svg'
import DropdownIcon from '@/assets/icons/Dropdown.svg'
import { Avatar, AvatarImage } from '@/shared/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { usePathname } from 'next/navigation'
import { formatPath } from './utils'
export const MaindHeader = () => {
  const path = usePathname()
  const pageTitle = formatPath(path)
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
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div className="flex items-center gap-6">
                <span className="text-midnight-blue hidden text-sm font-semibold md:inline">
                  Ahmet Yılmaz
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
