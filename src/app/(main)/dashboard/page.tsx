import { HydrationBoundary, dehydrate, queryOptions } from '@tanstack/react-query'

import { DashboardView } from '@/features/dashboard/view'
import getQueryClient from '@/shared/api/getQueryClient'
import { getFinancialSummary } from '@/features/dashboard/api/services/getFinancialSummary'
import { getWorkingCapital } from '@/features/dashboard/api/services/getWorkingCapital'
import { getWallet } from '@/features/dashboard/api/services/getWallet'
import { getTransactionRecent } from '@/features/dashboard/api/services/getTransactionRecent'
import { getTransfersScheduled } from '@/features/dashboard/api/services/getTransferScheduled'

export default async function Dashboard() {
  const queryClient = getQueryClient()

  const queries = [
    queryOptions({
      queryKey: ['financial-summary'],
      queryFn: getFinancialSummary,
    }),
    queryOptions({
      queryKey: ['working-capital'],
      queryFn: getWorkingCapital,
    }),
    queryOptions({
      queryKey: ['wallet'],
      queryFn: getWallet,
    }),
    queryOptions({
      queryKey: ['transaction-recent'],
      queryFn: getTransactionRecent,
    }),
    queryOptions({
      queryKey: ['transfers-scheduled'],
      queryFn: getTransfersScheduled,
    }),
  ]

  await Promise.all(
    queries.map((query) =>
      queryClient.prefetchQuery(query as Parameters<typeof queryClient.prefetchQuery>[0])
    )
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardView />
    </HydrationBoundary>
  )
}
