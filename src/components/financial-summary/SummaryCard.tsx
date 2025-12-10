import { FinancialSummaryDataType } from '@/features/dashboard/types/financial-type'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'
import { formatCurrency } from '@/lib/utils'

interface Props {
  data: FinancialSummaryDataType
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  loading: boolean
}
export const SummaryCards: React.FC<Props> = ({
  data,
  Icon,
  title,
  loading,
}) => {
  const formattedAmount = formatCurrency(data.amount, data.currency)

  return (
    <Card className="hover:bg-charcoal bg-light-snow group flex h-[105px] w-full md:w-[222px] flex-row items-center justify-center px-5 py-6 transition-colors duration-200">
      {loading ? (
        <CardContent className="flex w-full items-center justify-center md:justify-start gap-2 p-0">
          <span className="bg-snow flex h-10 w-10 shrink-0 items-center justify-center rounded-full group-hover:bg-gray-600">
            <Icon className="group-hover:fill-lime-green" />
          </span>
          <div className="flex flex-col">
            <span className="text-cadet-blue font-normal">{title}</span>
            <h1 className="text-midnight-blue text-2xl font-bold group-hover:text-white">
              {formattedAmount}
            </h1>
          </div>
        </CardContent>
      ) : (
        <CardContent className="flex items-center space-x-4">
          <Skeleton className="bg-neutral-gray h-12 w-12 rounded-full" />
          <div className="w-12 space-y-2">
            <Skeleton className="bg-neutral-gray h-4 max-w-12" />
            <Skeleton className="bg-neutral-gray h-4 max-w-12" />
          </div>
        </CardContent>
      )}
    </Card>
  )
}
