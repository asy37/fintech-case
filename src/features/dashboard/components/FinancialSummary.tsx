'use client'
import TotalWalletIcon from '@/assets/icons/TotalWallet.svg'
import SavedWalletIcon from '@/assets/icons/SavedWallet.svg'
import { FinancialSummaryType } from '../../../shared/types/financial-type'
import { SummaryCards } from '@/shared/components/financial-summary/SummaryCard'

type FinancialSummaryProps = { rawData: FinancialSummaryType }

export const FinancialSummary = ({ rawData }: FinancialSummaryProps) => {
  const balance = rawData.data.totalBalance
  const expense = rawData.data.totalExpense
  const savings = rawData.data.totalSavings

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 md:h-[105px] md:flex-row md:gap-0">
      <SummaryCards
        data={balance}
        Icon={TotalWalletIcon}
        title={'Total balance'}
        loading={rawData.success}
      />
      <SummaryCards
        data={expense}
        Icon={TotalWalletIcon}
        title={'Total spending'}
        loading={rawData.success}
      />
      <SummaryCards
        data={savings}
        Icon={SavedWalletIcon}
        title={'Total saved'}
        loading={rawData.success}
      />
    </div>
  )
}
