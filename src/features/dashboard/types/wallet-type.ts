export type WalletDataType = {
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
export type WalletType = {
  success: boolean
  message: string
  data: {
    cards: WalletDataType[]
  }
}
