import Link from 'next/link'

import { RecentTransactionsResponse } from '@/features/dashboard/types/recent-transactions'
import { ArrowIcon } from '@/shared/components/icons'
import { Card, CardContent } from '@/shared/components/ui/card'

import { TransactionTable } from './_components/TransactionTable'
import { RecentTransactionSkeleton } from './RecentTransactionSkeleton'

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
            href={'/#'}
            className={`
              flex items-center transition-all duration-200
              hover:scale-105
            `}
          >
            <span className="text-sm font-semibold text-jungle-green">
              View All
            </span>
            <ArrowIcon className="text-jungle-green" />
          </Link>
        </div>
        <TransactionTable data={data} />
      </CardContent>
    </Card>
  )
}
