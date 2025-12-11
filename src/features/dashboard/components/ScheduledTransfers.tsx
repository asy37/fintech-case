import Link from 'next/link'
import { ArrowIcon } from '@/shared/components/icons'

import { formatCurrency } from '@/shared/utils/currency-format'
import { formatFullDate } from '@/shared/utils/date-format'
import { ScheduledTransfersResponse } from '@/features/dashboard/types/scheduled-transfers'
import Avatar from '@/shared/components/ui/avatar/avatar'
import { cn } from '@/shared/utils/cn'
import { ScheduledTransfersSkeleton } from './skeletons/ScheduledTransfersSkeleton'

type Props = {
  data: ScheduledTransfersResponse | undefined
}

export const ScheduledTransfers = ({ data }: Props) => {
  if (data === undefined) {
    return <ScheduledTransfersSkeleton />
  }
  const transfers = data.transfers
  return (
    <div className='w-full'>
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-lg font-semibold">Scheduled Transfers</h1>
        <Link
          href={'/transactions'}
          className="flex items-center transition-all duration-200 hover:scale-105"
        >
          <span className="text-jungle-green text-sm font-semibold">
            View All
          </span>
          <ArrowIcon />
        </Link>
      </div>
      {transfers.map((item) => {
        const formattedAmount = formatCurrency(item.amount, item.currency)
        const formattedDate = formatFullDate(item.date)
        return (
          <div key={item.id} className="space-y-4">
            <div className={cn("flex w-full items-center justify-between pb-2.5 pt-1.5",
              item.id === transfers.at(-1)?.id ? '' : 'border-b border-border' 
            )}>
              <div className="flex items-center gap-4">
                <Avatar
                  src={item.image}
                  alt={item.name}
                  width={33}
                  height={33}
                />
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="text"
                    className="text-midnight-blue text-sm font-semibold"
                  >
                    {item.name}
                  </label>
                  <label
                    htmlFor="date"
                    className="text-cadet-blue text-xs font-medium"
                  >
                    {formattedDate}
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="text-base font-semibold text-black"
                >
                  {formattedAmount}
                </label>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
