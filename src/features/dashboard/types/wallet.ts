type WalletCards = {
  id: string
  name: string
  type: string
  cardNumber: string
  bank: string
  network: string
  expiryMonth: number
  expiryYear: number
  color: string
  isDefault: boolean
}
export type WalletResponse = {
  cards: WalletCards[]
}
