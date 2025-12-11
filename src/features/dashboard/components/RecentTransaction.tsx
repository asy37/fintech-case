import { Card, CardContent } from '@/shared/components/ui/card'
import { ArrowIcon } from '@/shared/components/icons'
import Link from 'next/link'
import { RecentTransactionsResponse } from '../types/recent-transactions'
import { TransactionTable } from '@/shared/components/transaction/TransactionTable'
import { RecentTransactionSkeleton } from './skeletons/RecentTransactionSkeleton'

type Props = {
  data: RecentTransactionsResponse | undefined
}

export const RecentTransaction = ({ data }: Props) => {
  if (data === undefined) return <RecentTransactionSkeleton />

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
            <ArrowIcon />
          </Link>
        </div>
        <TransactionTable data={data} />
      </CardContent>
    </Card>
  )
}
