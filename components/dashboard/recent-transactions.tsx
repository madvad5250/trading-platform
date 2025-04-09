import { Avatar } from "@/components/ui/avatar"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      type: "deposit",
      amount: "+$1,000.00",
      date: "2023-04-09",
      status: "completed",
      method: "Bank Transfer",
    },
    {
      id: "2",
      type: "withdrawal",
      amount: "-$250.00",
      date: "2023-04-05",
      status: "completed",
      method: "Bank Transfer",
    },
    {
      id: "3",
      type: "deposit",
      amount: "+$500.00",
      date: "2023-04-01",
      status: "completed",
      method: "Credit Card",
    },
    {
      id: "4",
      type: "deposit",
      amount: "+$2,000.00",
      date: "2023-03-28",
      status: "completed",
      method: "Bitcoin",
    },
    {
      id: "5",
      type: "withdrawal",
      amount: "-$750.00",
      date: "2023-03-20",
      status: "completed",
      method: "Bank Transfer",
    },
  ]

  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9 mr-4">
            {transaction.type === "deposit" ? (
              <div className="bg-green-100 h-full w-full flex items-center justify-center rounded-full">
                <ArrowDownIcon className="h-4 w-4 text-green-600" />
              </div>
            ) : (
              <div className="bg-red-100 h-full w-full flex items-center justify-center rounded-full">
                <ArrowUpIcon className="h-4 w-4 text-red-600" />
              </div>
            )}
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.type === "deposit" ? "Deposit" : "Withdrawal"}
            </p>
            <p className="text-sm text-muted-foreground">
              {transaction.date} • {transaction.method}
            </p>
          </div>
          <div className={transaction.type === "deposit" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  )
}
