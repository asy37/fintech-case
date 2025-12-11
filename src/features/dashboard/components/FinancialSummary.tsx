'use client'
import { TotalWalletIcon, SavedWalletIcon } from '@/shared/components/icons'
import { FinancialSummaryResponse } from '../types/financial-summary'
import { SummaryCards } from '@/features/dashboard/components/SummaryCard'
import { SummaryCardSkeleton } from './skeletons/SummaryCardSkeleton'

type Props = {
  data: FinancialSummaryResponse | undefined
}

export const FinancialSummary = ({ data }: Props) => {
  if (data === undefined) {
    return <SummaryCardSkeleton />
  }
  const balance = data.totalBalance
  const expense = data.totalExpense
  const savings = data.totalSavings
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 md:h-[105px] md:flex-row md:gap-0">
      <SummaryCards
        data={balance}
        Icon={TotalWalletIcon}
        title={'Total balance'}
      />
      <SummaryCards
        data={expense}
        Icon={TotalWalletIcon}
        title={'Total spending'}
      />
      <SummaryCards
        data={savings}
        Icon={SavedWalletIcon}
        title={'Total saved'}
      />
    </div>
  )
}
