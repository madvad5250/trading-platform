"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AlertCircle, DollarSign } from "lucide-react"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect or show success message
    }, 1500)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Withdraw Funds" text="Withdraw funds from your trading account" />

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Funds</CardTitle>
              <CardDescription>Choose your withdrawal method and amount</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-amber-50 text-amber-800 border-amber-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Verification Required</AlertTitle>
                <AlertDescription>
                  All withdrawals require identity verification and may take 1-3 business days to process.
                </AlertDescription>
              </Alert>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input
                      id="amount"
                      placeholder="0.00"
                      className="pl-10"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Available balance: $5,231.89</p>
                </div>

                <div className="space-y-2">
                  <Label>Withdrawal Method</Label>
                  <RadioGroup defaultValue="bank" className="space-y-3">
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex-1 cursor-pointer">
                        Bank Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="crypto" id="crypto" />
                      <Label htmlFor="crypto" className="flex-1 cursor-pointer">
                        Cryptocurrency
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bank-account">Bank Account</Label>
                  <Select>
                    <SelectTrigger id="bank-account">
                      <SelectValue placeholder="Select bank account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chase">Chase Bank (...4567)</SelectItem>
                      <SelectItem value="boa">Bank of America (...7890)</SelectItem>
                      <SelectItem value="new">Add New Bank Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Input id="description" placeholder="e.g., Monthly withdrawal" />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Request Withdrawal"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Withdrawal Information</CardTitle>
              <CardDescription>Important details about withdrawing funds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Processing Times</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Bank Transfer: 1-3 business days</li>
                  <li>Cryptocurrency: 1-24 hours after approval</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Withdrawal Limits</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Minimum Withdrawal: $100</li>
                  <li>Maximum Bank Transfer: $10,000 per day</li>
                  <li>Maximum Cryptocurrency: $50,000 per day</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fees</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Bank Transfer: $25 fee</li>
                  <li>Cryptocurrency: 0.1% fee (network fees may apply)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Withdrawals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">Mar 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$750.00</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">Cryptocurrency (BTC)</p>
                    <p className="text-sm text-muted-foreground">Feb 28, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$1,200.00</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">Jan 10, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$500.00</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button variant="outline" className="w-full">
                View All Transactions
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
