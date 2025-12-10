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

export function formatFullDate(dateString: string) {
  const date = new Date(dateString);

  const formatted = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // "April 28, 2022, 11:00" → "April 28, 2022 at 11:00"
  return formatted.replace(",", " at");
}