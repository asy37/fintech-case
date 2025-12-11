import { RecentTransactionsResponse } from '@/features/dashboard/types/recent-transactions'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { formatCurrency } from '@/shared/utils/currency-format'
import Avatar from '../ui/avatar/avatar'

type Props = {
  data: RecentTransactionsResponse
}

export const TransactionTable = ({ data }: Props) => {
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
        {data.transactions.map((item) => {
          const formattedAmount = formatCurrency(item.amount, item.currency)

          return (
            <TableRow key={item.id}>
              <TableCell className="flex items-center gap-3.5">
                <Avatar
                  shape="square"
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
        })}
      </TableBody>
    </Table>
  )
}
