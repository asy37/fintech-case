'use client'

import { useQuery } from '@tanstack/react-query'
import {
  getFinancialSummary,
  getWorkingCapital,
  getTransactionRecent,
  getWallet,
  getTransfersScheduled,
} from '@/app/api/dashboard/dashboardFetch'
import { WorkingCapital } from '../components/WorkingCapital'
import { FinancialSummary } from '../components/FinancialSummary'
import { RecentTransaction } from '../components/RecentTransaction'
import { Wallet } from '../components/Wallet'
import { ScheduledTransfers } from '../components/ScheduledTransfers'

export const DashboardView = () => {
  const { data: summary } = useQuery({
    queryKey: ['financial-summary'],
    queryFn: getFinancialSummary,
  })

  const { data: workingCapital } = useQuery({
    queryKey: ['working-capital'],
    queryFn: getWorkingCapital,
  })

  const { data: wallet } = useQuery({
    queryKey: ['wallet'],
    queryFn: getWallet,
  })

  const { data: transactions } = useQuery({
    queryKey: ['transaction-recent'],
    queryFn: getTransactionRecent,
  })

  const { data: transfers } = useQuery({
    queryKey: ['transfers-scheduled'],
    queryFn: getTransfersScheduled,
  })
  console.log(transfers)

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
        <FinancialSummary rawData={summary} />
        <WorkingCapital rawData={workingCapital} />
        <RecentTransaction rawData={transactions} />
      </div>

      <div className="w-full space-y-7 md:h-[749px] md:w-[354px]">
        <Wallet rawData={wallet} />
        <ScheduledTransfers rawData={transfers} />
      </div>
    </div>
  )
}
