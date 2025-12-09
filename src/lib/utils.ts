import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import currency from 'currency.js'

export const formatCurrency = (amount: number, code: string) => {
  return currency(amount, {
    precision: 0,
    symbol:
      code === 'USD'
        ? '$'
        : code === 'EUR'
          ? '€'
          : code === 'TRY'
            ? '₺'
            : code + ' ',
    separator: ',',
    decimal: '.',
  }).format()
}
