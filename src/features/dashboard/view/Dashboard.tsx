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
    <div className="item-center flex gap-10 md:flex-row flex-col">
      <div className="flex md:h-[749px] w-full md:w-[717px] flex-col gap-[30px]">
        <FinancialSummary rawData={FinancialMock} />
        <WorkingCapital rawData={capitalMock} />
        <RecentTransaction rawData={TransactionsMock} />
      </div>
      {/* <div className="h-[749px] w-[354px] space-y-7">
        <Wallet rawData={WalletMock} />
        <ScheduledTransfers rawData={TransfersMock} />
      </div> */}
    </div>
  )
}
