export type WorkingCapitalDataType = {
    month: string,
    income: number,
    expense: number,
    net: number,
  }
export type WorkingCapitalSummaryType = {
    totalIncome: number,
    totalExpense: number,
    netBalance: number,
  }

  export type WorkingCapitalType = {
    success: boolean
    message: string
    data: {
        period: string,
        currency: string
        data: WorkingCapitalDataType[],
        summary: WorkingCapitalSummaryType
    }
  }
  