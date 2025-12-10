import { WorkingCapitalType } from "../../../shared/types/capital-type";

export const capitalMock: WorkingCapitalType = {
  success: true,
  message: 'Working capital data retrieved successfully.',
  data: {
    period: 'last6Months',
    currency: 'TRY',
    data: [
        { month: "Ocak", income: 65000, expense: 42000, net: 23000 },
        { month: "Şubat", income: 70000, expense: 30000, net: 40000 },
        { month: "Mart", income: 62000, expense: 35000, net: 27000 }
      ],
    summary: {
      totalIncome: 390000,
      totalExpense: 252000,
      netBalance: 138000,
    },
  },
}
