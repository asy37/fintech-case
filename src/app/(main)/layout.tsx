import {
  HydrationBoundary,
  dehydrate,
  queryOptions,
} from '@tanstack/react-query'
import { LayoutClient } from './layout.client'
import getQueryClient from '@/shared/api/getQueryClient'
import { getUser } from '@/features/users/user/api/services/getUser'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(
    queryOptions({
      queryKey: ['user-profile'],
      queryFn: getUser,
    }),
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutClient>{children}</LayoutClient>
    </HydrationBoundary>
  )
}
