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
  const { data: transactions } = useTransactionRecent()
  const { data: transfers } = useTransfersScheduled()


  if (!summary || !workingCapital || !transactions || !wallet || !transfers) {
    return (
      <div className="item-center flex flex-col gap-10 md:flex-row">
        <div className="flex w-full flex-col gap-[30px] md:h-[749px] md:w-[717px]">
          <div className="h-[105px] w-full animate-pulse rounded-lg bg-gray-200" />
          <div className="h-[400px] w-full animate-pulse rounded-lg bg-gray-200" />
          <div className="h-[300px] w-full animate-pulse rounded-lg bg-gray-200" />
        </div>
        <div className="w-full space-y-7 md:h-[749px] md:w-[354px]">
          <div className="h-[359px] w-full animate-pulse rounded-lg bg-gray-200" />
          <div className="h-[200px] w-full animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    )
  }

  return (
    <div className="item-center flex flex-col gap-10 md:flex-row">
      <div className="flex w-full flex-col gap-[30px] md:h-[749px] md:w-[717px]">
        <FinancialSummary data={summary} />
        <WorkingCapital data={workingCapital} />
        <RecentTransaction data={transactions} />
      </div>

      <div className="w-full space-y-7 md:h-[749px] md:w-[354px]">
        <Wallet data={wallet} />
        <ScheduledTransfers data={transfers} />
      </div>
    </div>
  )
}
