import { WorkingCapitalResponse } from '@/features/dashboard/types/working-capital'
import LineChart from '@/shared/components/chart/LineChart'
import { Card, CardContent } from '@/shared/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'

import { WorkingCapitalSkeleton } from './WorkingCapitalSkeleton'

type Props = {
  data: WorkingCapitalResponse | undefined
}

export const WorkingCapital = ({ data }: Props) => {
  if (data === undefined) {
    return <WorkingCapitalSkeleton />
  }
  const xData = data.data.map((item) => item.month)
  const incomeSeries = data.data.map((item) => item.income)
  const expenseSeries = data.data.map((item) => item.expense)
  return (
    <Card className="h-[291px] p-6">
      <CardContent className="p-0">
        <div className={`
          flex w-full flex-col items-center justify-between px-2
          md:h-[30px] md:flex-row md:py-4
        `}>
          <h1 className="text-lg font-semibold">Working Capital</h1>
          <div className={`
            flex w-[338px] items-center justify-center
            md:h-[30px] md:justify-between
          `}>
            <div className="flex h-4 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-jungle-green" />
                <label className="text-xs font-normal" htmlFor="label">
                  Income
                </label>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-lime-green" />
                <label className="text-xs font-normal" htmlFor="label">
                  Expenses
                </label>
              </div>
            </div>
            <Select value={data.period}>
              <SelectTrigger className={`
                h-[30px] min-w-[107px] border-0 bg-light-snow text-xs
                font-normal
              `}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-xs font-normal" value="last7Days">
                  Last 7 days
                </SelectItem>
                <SelectItem className="text-xs font-normal" value="last2Weeks">
                  Last 2 weeks
                </SelectItem>
                <SelectItem className="text-xs font-normal" value="last1Month">
                  Last 1 months
                </SelectItem>
                <SelectItem className="text-xs font-normal" value="last6Months">
                  Last 6 months
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <LineChart
          height={200}
          xData={xData}
          incomeSeries={incomeSeries}
          expenseSeries={expenseSeries}
          currency={data.currency}
        />
      </CardContent>
    </Card>
  )
}
