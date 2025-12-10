import { Card, CardContent } from '@/shared/components/ui/card'
import RightArrowIcon from '@/assets/icons/Arrow'
import Link from 'next/link'
import { TransactionsResponse } from '../../../shared/types/transaction-type'
import { TransactionTable } from '@/shared/components/transaction/TransactionTable'

export const RecentTransaction = ({
  rawData,
}: {
  rawData: TransactionsResponse
}) => {
  return (
    <Card>
      <CardContent>
        <div className="flex w-full items-center justify-between">
          <h1 className="text-lg font-semibold">Recent Transaction</h1>
          <Link
            href={'/transactions'}
            className="flex items-center transition-all duration-200 hover:scale-105"
          >
            <span className="text-jungle-green text-sm font-semibold">
              View All
            </span>
            <RightArrowIcon />
          </Link>
        </div>
        <TransactionTable rawData={rawData} />
      </CardContent>
    </Card>
  )
}
