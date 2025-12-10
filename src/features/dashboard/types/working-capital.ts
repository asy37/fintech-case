type WorkingCapitalData = {
  month: string
  income: number
  expense: number
  net: number
}
type WorkingCapitalSummary = {
  totalIncome: number
  totalExpense: number
  netBalance: number
}

export type WorkingCapitalResponse = {
  period: string
  currency: string
  data: WorkingCapitalData[]
  summary: WorkingCapitalSummary
}
