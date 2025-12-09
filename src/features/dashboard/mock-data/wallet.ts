import { WalletType } from '../types/wallet-type'

export const WalletMock: WalletType = {
  "success": true,
  "message": "Wallet data retrieved successfully.",
  "data": {
    "cards": [
      {
        "id": "card_001",
        "name": "Commercial Bank Platinum",
        "type": "credit",
        "cardNumber": "8595 2548 ****",
        "bank": "Maglo | Commercial Bank",
        "network": "Master Card",
        "expiryMonth": 9,
        "expiryYear": 2025,
        "color": "#FFFFFF",
        "isDefault": false
      },
      {
        "id": "card_002",
        "name": "Maglo Gold Card",
        "type": "credit",
        "cardNumber": "5495 7381 3759 2321",
        "bank": "Maglo | Universal Bank",
        "network": "Master Card",
        "expiryMonth": 12,
        "expiryYear": 2027,
        "color": "#000000",
        "isDefault": true
      },

      {
        "id": "card_003",
        "name": "Commercial Bank Platinum",
        "type": "credit",
        "cardNumber": "8595 2548 ****",
        "bank": "Maglo | Commercial Bank",
        "network": "Visa",
        "expiryMonth": 9,
        "expiryYear": 2025,
        "color": "#FFFFFF",
        "isDefault": false
      }
    ]
  }
}
