import { TransactionsResponse } from '../types/transaction-type'

export const TransactionsMock: TransactionsResponse = {
  success: true,
  message: 'Recent transactions retrieved successfully.',
  data: {
    transactions: [
      {
        id: 'trx_001',
        name: 'iPhone 13 Pro MAX',
        business: 'Apple Inc.',
        image: 'https://i.ibb.co/Apple-Logo.png',
        type: 'Mobile',
        amount: -420.84,
        currency: 'TRY',
        date: '2025-10-06T10:30:00.000Z',
        status: 'completed',
      },
      {
        id: 'trx_002',
        name: 'Netflix Subscription',
        business: 'Netflix',
        image: 'https://i.ibb.co/Netflix-Logo.png',
        type: 'Entertainment',
        amount: -100,
        currency: 'TRY',
        date: '2025-10-06T04:30:00.000Z',
        status: 'completed',
      },
      {
        id: 'trx_003',
        name: 'Figma Subscription',
        business: 'Figma Inc.',
        image: 'https://i.ibb.co/Figma-Logo.png',
        type: 'Software',
        amount: -244.2,
        currency: 'TRY',
        date: '2025-10-05T22:30:00.000Z',
        status: 'completed',
      },
      {
        id: 'trx_004',
        name: 'Monthly Salary',
        business: 'Tech Corp Ltd.',
        image: 'https://i.ibb.co/Company-Logo.png',
        type: 'Salary',
        amount: 45000,
        currency: 'TRY',
        date: '2025-10-05T16:30:00.000Z',
        status: 'completed',
      },
    ],
    summary: {
      totalIncome: 45000,
      totalExpense: 765.04,
      count: 4,
    },
  },
}
