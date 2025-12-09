'use client'
import TotalWalletIcon from '@/assets/icons/TotalWallet.svg'
import SavedWalletIcon from '@/assets/icons/SavedWallet.svg'
import { FinancialSummaryType } from '../types/financial-type'
import { SummaryCards } from '@/components/financial-summary/SummaryCard'

type FinancialSummaryProps = { rawData: FinancialSummaryType }

export const FinancialSummary = ({ rawData }: FinancialSummaryProps) => {
    const balance = rawData.data.totalBalance
    const expense = rawData.data.totalExpense
    const savings = rawData.data.totalSavings
    console.log(rawData);
    
  return (
    <div className="flex h-[105px] w-full items-center justify-between">
        <SummaryCards data={balance} Icon={TotalWalletIcon} title={'Total balance'} loading={rawData.success} />
        <SummaryCards data={expense} Icon={TotalWalletIcon} title={'Total spending'} loading={rawData.success}/>
        <SummaryCards data={savings} Icon={SavedWalletIcon} title={'Total saved'} loading={rawData.success}/>
    </div>
  )
}
