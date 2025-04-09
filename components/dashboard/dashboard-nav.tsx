"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, CreditCard, DollarSign, Home, LineChart, LogOut, Settings, Users } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: Home,
    },
    {
      href: "/dashboard/deposit",
      label: "Deposit",
      icon: DollarSign,
    },
    {
      href: "/dashboard/withdraw",
      label: "Withdraw",
      icon: CreditCard,
    },
    {
      href: "/dashboard/transactions",
      label: "Transactions",
      icon: BarChart3,
    },
    {
      href: "/dashboard/investments",
      label: "Investments",
      icon: LineChart,
    },
    {
      href: "/dashboard/referrals",
      label: "Referrals",
      icon: Users,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  return (
    <nav className="grid items-start gap-2 py-4">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <Button
            variant={pathname === route.href ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === route.href ? "bg-amber-400 hover:bg-amber-500 text-navy-900" : "",
            )}
          >
            <route.icon className="mr-2 h-4 w-4" />
            {route.label}
          </Button>
        </Link>
      ))}
      <Link href="/">
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </Link>
    </nav>
  )
}
