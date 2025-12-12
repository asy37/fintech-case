import {
  dehydrate,
  HydrationBoundary,
  queryOptions,
} from '@tanstack/react-query'

import { getUser } from '@/features/users/user/api/services/getUser'
import getQueryClient from '@/shared/api/getQueryClient'

import { LayoutClient } from './layout.client'

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
