export type FinancialSummaryDataType = {
  amount: number
  currency: string
  change: {
    percentage: number
    trend: string
  }
}
export type FinancialSummaryType = {
  success: boolean
  message: string
  data: {
    totalBalance: FinancialSummaryDataType
    totalExpense: FinancialSummaryDataType
    totalSavings: FinancialSummaryDataType
    lastUpdated: string
  }
}
