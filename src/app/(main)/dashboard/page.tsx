import {
  dehydrate,
  HydrationBoundary,
  queryOptions,
} from '@tanstack/react-query'

import { getFinancialSummary } from '@/features/dashboard/api/services/getFinancialSummary'
import { getTransactionRecent } from '@/features/dashboard/api/services/getTransactionRecent'
import { getTransfersScheduled } from '@/features/dashboard/api/services/getTransferScheduled'
import { getWallet } from '@/features/dashboard/api/services/getWallet'
import { getWorkingCapital } from '@/features/dashboard/api/services/getWorkingCapital'
import { DashboardView } from '@/features/dashboard/view'
import getQueryClient from '@/shared/api/getQueryClient'

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
      queryFn: () => getTransactionRecent(3),
    }),
    queryOptions({
      queryKey: ['transfers-scheduled'],
      queryFn: () => getTransfersScheduled(),
    }),
  ]

  await Promise.allSettled(
    queries.map((query) =>
      queryClient
        .prefetchQuery(query as Parameters<typeof queryClient.prefetchQuery>[0])
        .then(() => {
          console.log(`${query.queryKey[0]} fetched`)
        })
        .catch((error) => {
          console.error(`${query.queryKey[0]} error`, error)
        }),
    ),
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardView />
    </HydrationBoundary>
  )
}
