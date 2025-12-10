export type FinancialSummaryData = {
  amount: number
  currency: string
  change: {
    percentage: number
    trend: string
  }
}
export type FinancialSummaryResponse = {
  totalBalance: FinancialSummaryData
  totalExpense: FinancialSummaryData
  totalSavings: FinancialSummaryData
  lastUpdated: string
}
