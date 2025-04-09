"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Bitcoin, CreditCard, DollarSign } from "lucide-react"
import { useState } from "react"

export default function DepositPage() {
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
      <DashboardHeader heading="Deposit Funds" text="Add funds to your trading account" />

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Tabs defaultValue="bank" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
              <TabsTrigger value="card">Credit Card</TabsTrigger>
              <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
            </TabsList>
            <TabsContent value="bank">
              <Card>
                <CardHeader>
                  <CardTitle>Bank Transfer</CardTitle>
                  <CardDescription>Deposit funds via bank transfer (ACH or Wire)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                    </div>
                    <RadioGroup defaultValue="ach" className="space-y-3">
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="ach" id="ach" />
                        <Label htmlFor="ach" className="flex-1 cursor-pointer">
                          ACH Transfer (1-3 business days)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="wire" id="wire" />
                        <Label htmlFor="wire" className="flex-1 cursor-pointer">
                          Wire Transfer (Same day)
                        </Label>
                      </div>
                    </RadioGroup>
                    <Button
                      type="submit"
                      className="w-full bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Continue"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="card">
              <Card>
                <CardHeader>
                  <CardTitle>Credit Card</CardTitle>
                  <CardDescription>Deposit funds using your credit or debit card</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-amount">Amount (USD)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="card-amount"
                          placeholder="0.00"
                          className="pl-10"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input id="card-number" placeholder="1234 5678 9012 3456" className="pl-10" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Pay Now"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="crypto">
              <Card>
                <CardHeader>
                  <CardTitle>Cryptocurrency</CardTitle>
                  <CardDescription>Deposit funds using Bitcoin, Ethereum, or other cryptocurrencies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="crypto-amount">Amount (USD)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="crypto-amount"
                          placeholder="0.00"
                          className="pl-10"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <RadioGroup defaultValue="btc" className="space-y-3">
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="btc" id="btc" />
                        <Label htmlFor="btc" className="flex-1 cursor-pointer flex items-center">
                          <Bitcoin className="h-5 w-5 mr-2 text-amber-400" />
                          Bitcoin (BTC)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="eth" id="eth" />
                        <Label htmlFor="eth" className="flex-1 cursor-pointer flex items-center">
                          <svg
                            className="h-5 w-5 mr-2 text-blue-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2L3 12L12 16L21 12L12 2Z" fill="currentColor" />
                            <path d="M12 16V22L21 12L12 16Z" fill="currentColor" />
                            <path d="M12 16L3 12L12 22V16Z" fill="currentColor" />
                          </svg>
                          Ethereum (ETH)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="usdt" id="usdt" />
                        <Label htmlFor="usdt" className="flex-1 cursor-pointer flex items-center">
                          <svg
                            className="h-5 w-5 mr-2 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" fill="currentColor" />
                            <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" />
                          </svg>
                          Tether (USDT)
                        </Label>
                      </div>
                    </RadioGroup>
                    <Button
                      type="submit"
                      className="w-full bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Generate Deposit Address"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Deposit Information</CardTitle>
              <CardDescription>Important details about depositing funds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Processing Times</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Bank Transfer (ACH): 1-3 business days</li>
                  <li>Bank Transfer (Wire): Same day if received before 2 PM EST</li>
                  <li>Credit/Debit Card: Instant</li>
                  <li>Cryptocurrency: 1-6 confirmations (varies by currency)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Deposit Limits</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Minimum Deposit: $250</li>
                  <li>Maximum ACH Transfer: $5,000 per day</li>
                  <li>Maximum Wire Transfer: No limit</li>
                  <li>Maximum Credit Card: $10,000 per day</li>
                  <li>Maximum Cryptocurrency: No limit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fees</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>ACH Transfer: Free</li>
                  <li>Wire Transfer: $25 fee</li>
                  <li>Credit/Debit Card: 3% processing fee</li>
                  <li>Cryptocurrency: No fee (network fees may apply)</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Need help with your deposit? Contact our support team at{" "}
                <a href="mailto:support@nexvest.com" className="text-amber-600 hover:underline">
                  support@nexvest.com
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
