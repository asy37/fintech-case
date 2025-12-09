import { RecentTransaction } from '../components/RecentTransaction'
import { ScheduledTransfers } from '../components/ScheduledTransfers'
import { TotalBudget } from '../components/TotalBudget'
import { Wallet } from '../components/Wallet'
import { WorkingCapital } from '../components/WorkingCapital'

export const DashboardView = () => {
  return (
    <div className='flex item-center gap-10'>
      <div className='w-[717px] h-[749px]'>
        <TotalBudget />
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
