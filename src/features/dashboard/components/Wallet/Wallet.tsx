import { WalletResponse } from '@/features/dashboard/types/wallet'
import {
  ChipIcon,
  MasterCardIcon,
  MoreIcon,
  VisaIcon,
  WifiIcon,
} from '@/shared/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { cn } from '@/shared/utils/cn'

import { WalletSkeleton } from './WalletSkeleton'

type Props = {
  data: WalletResponse | undefined
}

export const Wallet = ({ data }: Props) => {
  if (data === undefined) {
    return <WalletSkeleton />
  }
  return (
    <div className="relative h-[359px] w-full">
      <div className="flex w-full items-center justify-between p-1.5">
        <h1 className="text-lg font-semibold text-midnight-blue">Wallet</h1>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <MoreIcon className={`
              text-midnight-blue transition-all duration-100
              hover:scale-105 hover:text-lime-green
            `} />
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
      {data.cards.slice(-2).map((item, index) => {
        const isFirst = index === 0
        const isSecond = index === 1
        return (
          <div
            key={item.id}
            className={cn(
              'flex flex-col items-start rounded-2xl',
              isFirst &&
                `
                  h-[210px] w-full bg-linear-to-br from-slate-dark to-onyx
                  p-[30px]
                  md:w-[354px]
                `,
              isSecond &&
                `
                  absolute top-44 left-4 z-10 h-[172px] w-[90%]
                  bg-neutral-gray/10 p-4 backdrop-blur-sm
                  md:w-[324px]
                `,
            )}
          >
            {(() => {
              const [brand, bank] = item.bank
                .split('|')
                .map((str) => str.trim())
              return (
                <div className="flex items-center gap-2">
                  <span className="text-base font-normal text-white">
                    {brand}
                  </span>
                  <span
                    className={cn(
                      'text-base font-medium',
                      isFirst ? 'text-light-grey' : 'text-white',
                    )}
                  >
                    |
                  </span>
                  <span
                    className={cn(
                      'text-xs font-medium',
                      isFirst ? 'text-light-grey' : 'text-white',
                    )}
                  >
                    {bank}
                  </span>
                </div>
              )
            })()}
            <div
              className={cn(
                'flex w-full items-center justify-between',
                isFirst ? 'mt-[30px]' : 'mt-4',
              )}
            >
              <ChipIcon />
              <WifiIcon />
            </div>
            <div className="mt-5 flex w-full flex-col">
              <span
                className={cn(
                  'text-lg font-bold',
                  isFirst ? 'text-white' : 'text-midnight-blue',
                )}
              >
                {item.cardNumber}
              </span>
              <div className="flex w-full items-center justify-between">
                <span
                  className={cn(
                    'text-lg font-bold',
                    isFirst ? 'text-white' : 'text-cadet-blue',
                  )}
                >
                  {item.expiryMonth}/{item.expiryYear}
                </span>
                {item.network === 'Visa' ? (
                  <span className="rounded bg-white">
                    <VisaIcon />
                  </span>
                ) : (
                  <MasterCardIcon />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
