import { QueryClient } from '@tanstack/react-query'

let client: QueryClient | null = null

export default function getQueryClient() {
  client ??= new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  })

  return client
}
