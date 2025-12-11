'use client'

import { WorkingCapital } from '../components/WorkingCapital'
import { FinancialSummary } from '../components/FinancialSummary'
import { RecentTransaction } from '../components/RecentTransaction'
import { Wallet } from '../components/Wallet'
import { ScheduledTransfers } from '../components/ScheduledTransfers'
import { useFinancialSummary } from '../api/hooks/useFinancialSummary'
import { useWorkingCapital } from '../api/hooks/useWorkingCapital'
import { useWallet } from '../api/hooks/useWallet'
import { useTransactionRecent } from '../api/hooks/useTransactionRecent'
import { useTransfersScheduled } from '../api/hooks/useTransfersScheduled'

export const DashboardView = () => {
  const { data: summary } = useFinancialSummary()
  const { data: workingCapital } = useWorkingCapital()
  const { data: wallet } = useWallet()
  const { data: transactions } = useTransactionRecent(3)
  const { data: transfers } = useTransfersScheduled()
  return (
    <div className="item-center flex w-full flex-col gap-10 lg:h-[749px] lg:flex-row lg:justify-between">
      <div className="flex w-full flex-col gap-[30px] lg:min-w-[717px]">
        <FinancialSummary data={summary?.data} />
        <WorkingCapital data={workingCapital?.data} />
        <RecentTransaction data={transactions?.data} />
      </div>

      <div className="flex w-full flex-col items-center space-y-7 lg:w-[354px]">
        <Wallet data={wallet?.data} />
        <ScheduledTransfers data={transfers?.data} />
      </div>
    </div>
  )
}
