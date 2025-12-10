type ScheduledTransfers = {
  id: string
  name: string
  image: string
  date: string
  amount: number
  currency: string
  status: string
}
type ScheduledTransfersSummary = {
  totalScheduledAmount: number
  count: number
}

export type ScheduledTransfersResponse = {
  transfers: ScheduledTransfers[]
  summary: ScheduledTransfersSummary
}
