import React from 'react'

import { FinancialSummaryData } from '@/features/dashboard/types/financial-summary'
import { Card, CardContent } from '@/shared/components/ui/card'
import { formatCurrency } from '@/shared/utils/currency-format'

interface Props {
  data: FinancialSummaryData
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
export const SummaryCard: React.FC<Props> = ({ data, Icon, title }) => {
  const formattedAmount = formatCurrency(data.amount, data.currency)

  return (
    <Card className={`
      group flex h-[105px] w-full flex-row items-center justify-center
      bg-light-snow px-5 py-6 transition-colors duration-200
      hover:bg-charcoal
      md:w-[222px]
    `}>
      <CardContent className={`
        flex w-full items-center justify-center gap-2 p-0
        md:justify-start
      `}>
        <span className={`
          flex h-10 w-10 shrink-0 items-center justify-center rounded-full
          bg-snow
          group-hover:bg-gray-600
        `}>
          <Icon className={`
            text-midnight-blue
            group-hover:text-lime-green
          `} />
        </span>
        <div className="flex flex-col">
          <span className="font-normal text-cadet-blue">{title}</span>
          <h1 className={`
            text-2xl font-bold text-midnight-blue
            group-hover:text-white
          `}>
            {formattedAmount}
          </h1>
        </div>
      </CardContent>
    </Card>
  )
}
