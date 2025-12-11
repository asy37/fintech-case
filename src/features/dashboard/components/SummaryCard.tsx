import React from 'react'
import { formatCurrency } from '@/shared/utils/currency-format'
import { FinancialSummaryData } from '@/features/dashboard/types/financial-summary'
import { Card, CardContent } from '@/shared/components/ui/card'

interface Props {
  data: FinancialSummaryData
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
export const SummaryCards: React.FC<Props> = ({ data, Icon, title }) => {
  const formattedAmount = formatCurrency(data.amount, data.currency)

  return (
    <Card className="hover:bg-charcoal bg-light-snow group flex h-[105px] w-full flex-row items-center justify-center px-5 py-6 transition-colors duration-200 md:w-[222px]">
      <CardContent className="flex w-full items-center justify-center gap-2 p-0 md:justify-start">
        <span className="bg-snow flex h-10 w-10 shrink-0 items-center justify-center rounded-full group-hover:bg-gray-600">
          <Icon className="text-midnight-blue group-hover:text-lime-green" />
        </span>
        <div className="flex flex-col">
          <span className="text-cadet-blue font-normal">{title}</span>
          <h1 className="text-midnight-blue text-2xl font-bold group-hover:text-white">
            {formattedAmount}
          </h1>
        </div>
      </CardContent>
    </Card>
  )
}
