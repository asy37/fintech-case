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
  const { data: transactions } = useTransactionRecent(5)
  const { data: transfers } = useTransfersScheduled(5)
  return (
    <div className="item-center flex flex-col gap-10 lg:flex-row">
      <div className="flex w-full flex-col gap-[30px] lg:h-[749px] lg:w-[717px]">
        <FinancialSummary data={summary?.data} />
        <WorkingCapital data={workingCapital?.data} />
        <RecentTransaction data={transactions?.data} />
      </div>

      <div className="w-full flex items-center flex-col space-y-7 lg:h-[749px] lg:w-[354px]">
        <Wallet data={wallet?.data} />
        <ScheduledTransfers data={transfers?.data} />
      </div>
    </div>
  )
}
