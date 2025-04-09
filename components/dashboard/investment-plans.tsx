import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight } from "lucide-react"

export function InvestmentPlans() {
  const plans = [
    {
      id: "1",
      name: "Conservative Growth",
      invested: 1000,
      currentValue: 1120,
      change: "+12%",
      status: "active",
      duration: "3 months",
      progress: 66,
    },
    {
      id: "2",
      name: "Balanced Portfolio",
      invested: 2500,
      currentValue: 2875,
      change: "+15%",
      status: "active",
      duration: "6 months",
      progress: 50,
    },
    {
      id: "3",
      name: "Aggressive Growth",
      invested: 1500,
      currentValue: 1785,
      change: "+19%",
      status: "active",
      duration: "12 months",
      progress: 25,
    },
  ]

  return (
    <div className="space-y-4">
      {plans.map((plan) => (
        <Card key={plan.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{plan.name}</h3>
                <span className="text-green-600 font-medium">{plan.change}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <span>Invested: ${plan.invested}</span>
                <span>Current: ${plan.currentValue}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Duration: {plan.duration}</span>
                  <span>{plan.progress}% complete</span>
                </div>
                <Progress value={plan.progress} className="h-2" />
              </div>
            </div>
            <div className="bg-muted p-2 flex justify-end">
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                View Details <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="w-full bg-amber-400 hover:bg-amber-500 text-navy-900">Explore More Investment Plans</Button>
    </div>
  )
}
