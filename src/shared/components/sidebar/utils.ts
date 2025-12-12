import {
  DashboardIcon,
  InvoicesIcon,
  MyWalletsIcon,
  SettingsIcon,
  TransactionsIcon,
} from '@/shared/components/icons'

type MockSidebarType = {
  id: number
  title: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const mockSidebar: MockSidebarType[] = [
  {
    id: 1,
    title: 'Dashboard',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    id: 2,
    title: 'Transactions',
    href: '/#',
    icon: TransactionsIcon,
  },
  {
    id: 3,
    title: 'Invoices',
    href: '/#',
    icon: InvoicesIcon,
  },
  {
    id: 4,
    title: 'My Wallets',
    href: '/#',
    icon: MyWalletsIcon,
  },
  {
    id: 5,
    title: 'Settings',
    href: '/#',
    icon: SettingsIcon,
  },
]
