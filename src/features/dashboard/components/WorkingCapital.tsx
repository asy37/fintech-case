import LineChart from '@/shared/components/chart/LineChart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { WorkingCapitalType } from '../../../shared/types/capital-type'

export const WorkingCapital = ({
  rawData,
}: {
  rawData: WorkingCapitalType
}) => {
  const xData = rawData.data.data.map((item) => item.month)
  const incomeSeries = rawData.data.data.map((item) => item.income)
  const expenseSeries = rawData.data.data.map((item) => item.expense)
  const isLoading = rawData.success
  return (
    <Card>
      {isLoading ? (
        <CardContent>
          <div className="flex w-full flex-col items-center justify-between px-2 md:h-[30px] md:flex-row md:py-4">
            <h1 className="text-lg font-semibold">Working Capital</h1>
            <div className="flex w-[338px] items-center justify-center md:h-[30px] md:justify-between">
              <div className="flex h-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="bg-jungle-green h-2 w-2 rounded-full" />
                  <label className="text-xs font-normal" htmlFor="label">
                    Income
                  </label>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="bg-lime-green h-2 w-2 rounded-full" />
                  <label className="text-xs font-normal" htmlFor="label">
                    Expenses
                  </label>
                </div>
              </div>
              <Select>
                <SelectTrigger className="bg-light-snow h-[30px] min-w-[107px] border-0 text-xs font-normal">
                  <SelectValue placeholder="Last 7 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-xs font-normal" value="sevendays">
                    Last 7 days
                  </SelectItem>
                  <SelectItem className="text-xs font-normal" value="twoweeks">
                    Last 2 weeks
                  </SelectItem>
                  <SelectItem className="text-xs font-normal" value="onemount">
                    Last 1 mounts
                  </SelectItem>
                  <SelectItem className="text-xs font-normal" value="sixmount">
                    Last 6 mounts
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <LineChart
            xData={xData}
            incomeSeries={incomeSeries}
            expenseSeries={expenseSeries}
          />
        </CardContent>
      ) : (
        <CardContent className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </CardContent>
      )}
    </Card>
  )
}
