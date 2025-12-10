import { RecentTransactionsResponse } from '@/features/dashboard/types/recent-transactions'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import Image from 'next/image'
import { Skeleton } from '../ui/skeleton'
import { formatCurrency } from '@/shared/utils/currency-format'

type Props = {
  data: RecentTransactionsResponse
}

export const TransactionTable = ({ data }: Props) => {
  const isLoading = true

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-cadet-blue w-[100px] text-sm font-semibold">
            NAME/BUSINESS
          </TableHead>
          <TableHead className="text-cadet-blue text-center text-sm font-semibold">
            TYPE
          </TableHead>
          <TableHead className="text-cadet-blue text-center text-sm font-semibold">
            AMOUNT
          </TableHead>
          <TableHead className="text-cadet-blue text-center text-sm font-semibold">
            DATE
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          data.transactions.map((item) => {
            const formattedAmount = formatCurrency(item.amount, item.currency)

            return (
              <TableRow key={item.id}>
                <TableCell className="flex items-center gap-3.5">
                  <Image
                    src={item.image}
                    alt={item.business}
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col items-center justify-center font-medium">
                    <label
                      htmlFor="text"
                      className="text-midnight-blue text-center text-sm font-medium"
                    >
                      {item.name}
                    </label>
                    <label
                      htmlFor="text"
                      className="text-cadet-blue text-xs font-normal"
                    >
                      {item.business}
                    </label>
                  </div>
                </TableCell>
                <TableCell className="text-cadet-blue text-center font-medium">
                  {item.type}
                </TableCell>
                <TableCell className="text-midnight-blue text-center text-sm font-semibold">
                  {formattedAmount}
                </TableCell>
                <TableCell className="text-cadet-blue text-center text-sm font-semibold">
                  {new Date(item.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </TableCell>
              </TableRow>
            )
          })
        ) : (
          <TableRow>
            <TableCell>
              <Skeleton className="h-4 max-w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 max-w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 max-w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 max-w-40" />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
