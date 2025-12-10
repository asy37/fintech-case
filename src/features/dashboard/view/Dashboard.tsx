import { RecentTransaction } from '../components/RecentTransaction'
import { ScheduledTransfers } from '../components/ScheduledTransfers'
import { FinancialSummary } from '../components/FinancialSummary'
import { Wallet } from '../components/Wallet'
import { WorkingCapital } from '../components/WorkingCapital'
import { FinancialMock } from '../mock-data/financial'
import { capitalMock } from '../mock-data/workingcapital'
import { TransactionsMock } from '../mock-data/transaction'
import { WalletMock } from '../mock-data/wallet'
import { TransfersMock } from '../mock-data/scheduled'

export const DashboardView = () => {
  return (
    <div className="item-center flex flex-col gap-10 md:flex-row">
      <div className="flex w-full flex-col gap-[30px] md:h-[749px] md:w-[717px]">
        <FinancialSummary rawData={FinancialMock} />
        <WorkingCapital rawData={capitalMock} />
        <RecentTransaction rawData={TransactionsMock} />
      </div>
      <div className="w-full space-y-7 md:h-[749px] md:w-[354px]">
        <Wallet rawData={WalletMock} />
        <ScheduledTransfers rawData={TransfersMock} />
      </div>
    </div>
  )
}
