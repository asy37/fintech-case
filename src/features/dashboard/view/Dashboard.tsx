import { RecentTransaction } from '../components/RecentTransaction'
import { ScheduledTransfers } from '../components/ScheduledTransfers'
import { FinancialSummary } from '../components/FinancialSummary'
import { Wallet } from '../components/Wallet'
import { WorkingCapital } from '../components/WorkingCapital'
import { FinancialMock } from '../mock-data/financial'

export const DashboardView = () => {
  const FinancialSummaryData = FinancialMock
  return (
    <div className='flex item-center gap-10'>
      <div className='w-[717px] h-[749px] flex flex-col gap-[30px]'>
        <FinancialSummary data={FinancialSummaryData} />
        <WorkingCapital />
        <RecentTransaction />
      </div>
      <div className='w-[354px] h-[749px]'>
        <Wallet />
        <ScheduledTransfers />
      </div>
    </div>
  )
}
