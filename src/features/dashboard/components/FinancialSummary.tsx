'use client'
import { TotalWalletIcon, SavedWalletIcon } from '@/shared/components/icons'
import { FinancialSummaryResponse } from '../types/financial-summary'
import { SummaryCards } from '@/shared/components/financial-summary/SummaryCard'

type Props = {
  data: FinancialSummaryResponse
}

export const FinancialSummary = ({ data }: Props) => {
 
  const balance = data.totalBalance
  const expense = data.totalExpense
  const savings = data.totalSavings

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 md:h-[105px] md:flex-row md:gap-0">
      <SummaryCards
        data={balance}
        Icon={TotalWalletIcon}
        title={'Total balance'}
        loading={true}
      />
      <SummaryCards
        data={expense}
        Icon={TotalWalletIcon}
        title={'Total spending'}
        loading={true}
      />
      <SummaryCards
        data={savings}
        Icon={SavedWalletIcon}
        title={'Total saved'}
        loading={true}
      />
    </div>
  )
}
