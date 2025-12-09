import LineChart from '@/components/chart/LineChart'
import { capitalMock } from '../mock-data/workingcapital'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
export const WorkingCapital = () => {
  const xData = capitalMock.data.data.map((item) => item.month)
  const incomeSeries = capitalMock.data.data.map((item) => item.income)
  const expenseSeries = capitalMock.data.data.map((item) => item.expense)

  return (
    <Card>
      <CardContent>
        <div className="flex h-[30px] w-full items-center justify-between px-2 py-4">
          <h1 className="text-lg font-semibold">Working Capital</h1>
          <div className="flex h-[30px] w-[338px] items-center justify-between">
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
    </Card>
  )
}
