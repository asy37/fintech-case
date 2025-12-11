import {
  DashboardIcon,
  TransactionsIcon,
  InvoicesIcon,
  MyWalletsIcon,
  SettingsIcon,
} from "@/shared/components/icons";

type MockSidebarType = {
  id: number,
  title: string,
  href: string,
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>}

export const mockSidebar: MockSidebarType[] = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    id: 2,
    title: "Transactions",
    href: "/transactions",
    icon: TransactionsIcon,
  },
  {
    id: 3,
    title: "Invoices",
    href: "/invoices",
    icon: InvoicesIcon,
  },
  {
    id: 4,
    title: "My Wallets",
    href: "/my-wallets",
    icon: MyWalletsIcon,
  },
  {
    id: 5,
    title: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];