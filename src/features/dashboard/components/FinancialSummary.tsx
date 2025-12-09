'use client'
import TotalWalletIcon from '@/assets/icons/TotalWallet.svg'
import SavedWalletIcon from '@/assets/icons/SavedWallet.svg'
import { FinancialSummaryType } from '../types/financial-type'
import { SummaryCards } from '@/components/financial-summary/SummaryCard'

type FinancialSummaryProps = { data: FinancialSummaryType }

export const FinancialSummary = ({ data }: FinancialSummaryProps) => {
    const balance = data.data.totalBalance
    const expense = data.data.totalExpense
    const savings = data.data.totalSavings
  return (
    <div className="flex h-[105px] w-full items-center justify-between">
        <SummaryCards data={balance} Icon={TotalWalletIcon} title={'Total balance'} />
        <SummaryCards data={expense} Icon={TotalWalletIcon} title={'Total spending'} />
        <SummaryCards data={savings} Icon={SavedWalletIcon} title={'Total saved'}/>
    </div>
  )
}
