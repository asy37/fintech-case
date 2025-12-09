import { FinancialSummaryDataType } from '@/features/dashboard/types/financial-type'
import React from 'react'
import { Card } from '../ui/card'
import { formatCurrency } from './utils'

interface Props {
  data: FinancialSummaryDataType
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
export const SummaryCards: React.FC<Props> = ({ data, Icon, title }) => {
  const formattedAmount = formatCurrency(data.amount, data.currency)

  return (
    <Card className="hover:bg-charcoal bg-light-snow group flex h-[105px] w-[222px] flex-row items-center px-5 py-6 transition-colors duration-200">
      <span className="bg-snow shrink-0 flex h-10 w-10 items-center justify-center rounded-full group-hover:bg-gray-600">
        <Icon className="group-hover:fill-lime-green" />
      </span>
      <div className="flex flex-col">
        <span className="text-cadet-blue font-normal ">{title}</span>
        <h1 className="text-midnight-blue text-2xl font-bold group-hover:text-white">
          {formattedAmount}
        </h1>
      </div>
    </Card>
  )
}
