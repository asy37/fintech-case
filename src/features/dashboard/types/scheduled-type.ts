export type TransfersDataType = {
  id: string
  name: string
  image: string
  date: string
  amount: number
  currency: string
  status: string
}
export type ScheduledSummaryType = {
  totalScheduledAmount: number
  count: number
}

export type ScheduledType = {
  success: boolean
  message: string
  data: {
    transfers: TransfersDataType[]
    summary: ScheduledSummaryType
  }
}
