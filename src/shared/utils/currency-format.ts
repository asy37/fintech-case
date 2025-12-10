import currency from 'currency.js'

const getCurrencySymbol = (code: string): string => {
  switch (code) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'TRY':
      return '₺'
    default:
      return `${code} `
  }
}

export const formatCurrency = (amount: number, code: string) => {
  return currency(amount, {
    precision: 0,
    symbol: getCurrencySymbol(code),
    separator: ',',
    decimal: '.',
  }).format()
}
