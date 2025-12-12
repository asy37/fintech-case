'use client'

import { useFinancialSummary } from '@/features/dashboard/api/hooks/useFinancialSummary'
import { useTransactionRecent } from '@/features/dashboard/api/hooks/useTransactionRecent'
import { useTransfersScheduled } from '@/features/dashboard/api/hooks/useTransfersScheduled'
import { useWallet } from '@/features/dashboard/api/hooks/useWallet'
import { useWorkingCapital } from '@/features/dashboard/api/hooks/useWorkingCapital'
import { FinancialSummary } from '@/features/dashboard/components/FinancialSummary'
import { RecentTransaction } from '@/features/dashboard/components/RecentTransaction'
import { ScheduledTransfers } from '@/features/dashboard/components/ScheduledTransfers'
import { Wallet } from '@/features/dashboard/components/Wallet'
import { WorkingCapital } from '@/features/dashboard/components/WorkingCapital'

export const DashboardView = () => {
  const { data: summary } = useFinancialSummary()
  const { data: workingCapital } = useWorkingCapital()
  const { data: wallet } = useWallet()
  const { data: transactions } = useTransactionRecent(3)
  const { data: transfers } = useTransfersScheduled()
  return (
    <div className={`
      flex w-full flex-col items-center gap-10
      lg:h-[749px] lg:flex-row lg:justify-between
    `}>
      <div className={`
        flex w-full flex-col gap-[30px]
        lg:min-w-[717px]
      `}>
        <FinancialSummary data={summary?.data} />
        <WorkingCapital data={workingCapital?.data} />
        <RecentTransaction data={transactions?.data} />
      </div>

      <div className={`
        flex w-full flex-col items-center space-y-7
        lg:w-[354px]
      `}>
        <Wallet data={wallet?.data} />
        <ScheduledTransfers data={transfers?.data} />
      </div>
    </div>
  )
}
