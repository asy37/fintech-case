'use client'
import { FinancialSummaryResponse } from '@/features/dashboard/types/financial-summary'
import { SavedWalletIcon,TotalWalletIcon } from '@/shared/components/icons'

import { SummaryCard } from './_components/SummaryCard'
import { SummaryCardSkeleton } from './_components/SummaryCardSkeleton'

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
    <div className={`
      flex w-full items-center justify-between gap-4 overflow-x-scroll
      md:h-[105px] md:gap-0
    `}>
      <SummaryCard
        data={balance}
        Icon={TotalWalletIcon}
        title={'Total balance'}
      />
      <SummaryCard
        data={expense}
        Icon={TotalWalletIcon}
        title={'Total spending'}
      />
      <SummaryCard
        data={savings}
        Icon={SavedWalletIcon}
        title={'Total saved'}
      />
    </div>
  )
}
