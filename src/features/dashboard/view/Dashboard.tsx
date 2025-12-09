import { RecentTransaction } from '../components/RecentTransaction'
import { ScheduledTransfers } from '../components/ScheduledTransfers'
import { FinancialSummary } from '../components/FinancialSummary'
import { Wallet } from '../components/Wallet'
import { WorkingCapital } from '../components/WorkingCapital'
import { FinancialMock } from '../mock-data/financial'
import { capitalMock } from '../mock-data/workingcapital'
import { TransactionsMock } from '../mock-data/transaction'
import { WalletMock } from '../mock-data/wallet'

export const DashboardView = () => {
  const FinancialSummaryData = FinancialMock
  const CapitalData = capitalMock
  const TransactionData = TransactionsMock
  const WalletData = WalletMock
  return (
    <div className="item-center flex gap-10">
      <div className="flex h-[749px] w-[717px] flex-col gap-[30px]">
        <FinancialSummary rawData={FinancialSummaryData} />
        <WorkingCapital rawData={CapitalData} />
        <RecentTransaction rawData={TransactionData} />
      </div>
      <div className="h-[749px] w-[354px]">
        <Wallet rawData={WalletData} />
        <ScheduledTransfers />
      </div>
    </div>
  )
}
