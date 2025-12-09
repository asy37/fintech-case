import DashboardIcon from "@/assets/icons/Dashboard.svg";
import TransactionsIcon from "@/assets/icons/Transactions.svg";
import InvoicesIcon from "@/assets/icons/Invoices.svg";
import WalletsIcon from "@/assets/icons/My-Wallets.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";

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
      icon: WalletsIcon,
    },
    {
      id: 5,
      title: "Settings",
      href: "/settings",
      icon: SettingsIcon,
    },
  ];