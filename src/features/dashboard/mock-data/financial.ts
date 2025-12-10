import { FinancialSummaryType } from '../../../shared/types/financial-type'

export const FinancialMock: FinancialSummaryType = {
  success: true,
  message: 'Financial summary retrieved successfully.',
  data: {
    totalBalance: {
      amount: 125750.5,
      currency: 'TRY',
      change: {
        percentage: 12.5,
        trend: 'up',
      },
    },
    totalExpense: {
      amount: 45320.75,
      currency: 'TRY',
      change: {
        percentage: -8.3,
        trend: 'down',
      },
    },
    totalSavings: {
      amount: 80429.75,
      currency: 'TRY',
      change: {
        percentage: 15.2,
        trend: 'up',
      },
    },
    lastUpdated: '2025-10-06T10:30:00.000Z',
  },
}
