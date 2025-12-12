import { RecentTransactionsResponse } from '@/features/dashboard/types/recent-transactions'
import Avatar from '@/shared/components/ui/avatar/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { formatCurrency } from '@/shared/utils/currency-format'

type Props = {
  data: RecentTransactionsResponse
}

export const TransactionTable = ({ data }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-sm font-semibold text-cadet-blue">
            NAME/BUSINESS
          </TableHead>
          <TableHead
            className={`text-center text-sm font-semibold text-cadet-blue`}
          >
            TYPE
          </TableHead>
          <TableHead
            className={`text-center text-sm font-semibold text-cadet-blue`}
          >
            AMOUNT
          </TableHead>
          <TableHead
            className={`text-center text-sm font-semibold text-cadet-blue`}
          >
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
                <div
                  className={`
                    flex flex-col items-center justify-center font-medium
                  `}
                >
                  <label
                    htmlFor="text"
                    className={`
                      text-center text-sm font-medium text-midnight-blue
                    `}
                  >
                    {item.name}
                  </label>
                  <label
                    htmlFor="text"
                    className="text-xs font-normal text-cadet-blue"
                  >
                    {item.business}
                  </label>
                </div>
              </TableCell>
              <TableCell className="text-center font-medium text-cadet-blue">
                {item.type}
              </TableCell>
              <TableCell
                className={`
                  text-center text-sm font-semibold text-midnight-blue
                `}
              >
                {formattedAmount}
              </TableCell>
              <TableCell
                className={`text-center text-sm font-semibold text-cadet-blue`}
              >
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
