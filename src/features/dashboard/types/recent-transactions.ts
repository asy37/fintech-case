type RecentTransactions = {
  id: string
  name: string
  business: string
  image: string
  type: string
  amount: number
  currency: string
  date: string
  status: string
}

type RecentTransactionsSummary = {
  totalIncome: number
  totalExpense: number
  count: number
}

export type RecentTransactionsResponse = {
  transactions: RecentTransactions[]
  summary: RecentTransactionsSummary
}
