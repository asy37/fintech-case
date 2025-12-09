import Link from 'next/link'
import RightArrowIcon from '@/assets/icons/Arrow'
import Image from 'next/image'
import { ScheduledType } from '../types/scheduled-type'
import { formatCurrency, formatFullDate } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

export const ScheduledTransfers = ({ rawData }: { rawData: ScheduledType }) => {
  const data = rawData.data.transfers
  return (
    <div>
      <div className="flex w-full items-center justify-between mb-6">
        <h1 className="text-lg font-semibold">Scheduled Transfers</h1>
        <Link
          href={'/transactions'}
          className="flex items-center transition-all duration-200 hover:scale-105"
        >
          <span className="text-jungle-green text-sm font-semibold">
            View All
          </span>
          <RightArrowIcon />
        </Link>
      </div>
      {data.map((item) => {
        const formattedAmount = formatCurrency(item.amount, item.currency)
        const formattedDate = formatFullDate(item.date)
        return (
          <div key={item.id} className='space-y-4'>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={33}
                  height={33}
                  className="rounded-full"
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
            <Separator />
          </div>
        )
      })}
    </div>
  )
}
