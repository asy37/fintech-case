import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import {
  getFinancialSummary,
  getTransactionRecent,
  getTransfersScheduled,
  getWallet,
  getWorkingCapital,
} from '@/app/api/dashboard/dashboardFetch'
import { DashboardView } from '@/features/dashboard/view/Dashboard'
import getQueryClient from '@/shared/api/getQueryClient'

export default async function Dashboard() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['financial-summary'],
    queryFn: getFinancialSummary,
  })

  await queryClient.prefetchQuery({
    queryKey: ['working-capital'],
    queryFn: getWorkingCapital,
  })

  await queryClient.prefetchQuery({
    queryKey: ['wallet'],
    queryFn: getWallet,
  })

  await queryClient.prefetchQuery({
    queryKey: ['transaction-recent'],
    queryFn: getTransactionRecent,
  })

  await queryClient.prefetchQuery({
    queryKey: ['transfers-scheduled'],
    queryFn: getTransfersScheduled,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardView />
    </HydrationBoundary>
  )
}
