import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Plans</h1>
            <p className="text-xl text-gray-300">
              Choose the plan that best fits your trading goals and experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:border-amber-400 transition-all">
              <CardContent className="p-0">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-gray-500 mt-2">Perfect for beginners</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold">$250</span>
                    <span className="text-gray-500 ml-2">minimum</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Access to 50+ trading instruments",
                      "Basic charting tools",
                      "Standard customer support",
                      "1:10 leverage",
                      "Mobile trading app",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-navy-800 hover:bg-navy-900">Get Started</Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-amber-400 relative">
              <div className="absolute top-0 right-0 bg-amber-400 text-navy-900 px-4 py-1 text-sm font-bold rounded-bl-lg">
                POPULAR
              </div>
              <CardContent className="p-0">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-gray-500 mt-2">For serious traders</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold">$1,000</span>
                    <span className="text-gray-500 ml-2">minimum</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Access to 100+ trading instruments",
                      "Advanced charting tools",
                      "Priority customer support",
                      "1:50 leverage",
                      "Mobile trading app",
                      "Trading signals",
                      "Weekly market analysis",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-navy-900">Get Started</Button>
                </div>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="border-2 border-gray-200 hover:border-amber-400 transition-all">
              <CardContent className="p-0">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold">VIP</h3>
                  <p className="text-gray-500 mt-2">For professional traders</p>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold">$10,000</span>
                    <span className="text-gray-500 ml-2">minimum</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Access to all trading instruments",
                      "Premium charting tools",
                      "24/7 dedicated account manager",
                      "1:100 leverage",
                      "Mobile trading app",
                      "Premium trading signals",
                      "Daily market analysis",
                      "VIP events and webinars",
                      "Reduced spreads",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-navy-800 hover:bg-navy-900">Get Started</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Features Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center bg-amber-400 text-navy-900">Pro</th>
                  <th className="p-4 text-center">VIP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Minimum Deposit", starter: "$250", pro: "$1,000", vip: "$10,000" },
                  { feature: "Trading Instruments", starter: "50+", pro: "100+", vip: "All" },
                  { feature: "Leverage", starter: "1:10", pro: "1:50", vip: "1:100" },
                  { feature: "Spreads", starter: "Standard", pro: "Reduced", vip: "Ultra-low" },
                  { feature: "Customer Support", starter: "Standard", pro: "Priority", vip: "Dedicated Manager" },
                  { feature: "Trading Signals", starter: "❌", pro: "✅", vip: "Premium" },
                  { feature: "Market Analysis", starter: "❌", pro: "Weekly", vip: "Daily" },
                  { feature: "Educational Resources", starter: "Basic", pro: "Advanced", vip: "Complete" },
                  { feature: "Withdrawal Processing", starter: "48 hours", pro: "24 hours", vip: "Same day" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 border font-medium">{row.feature}</td>
                    <td className="p-4 border text-center">{row.starter}</td>
                    <td className="p-4 border text-center bg-amber-50">{row.pro}</td>
                    <td className="p-4 border text-center">{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "David K.",
                role: "Pro Trader",
                quote:
                  "The Pro plan has everything I need for my daily trading activities. The platform is intuitive and the customer support is excellent.",
              },
              {
                name: "Sarah M.",
                role: "Beginner Trader",
                quote:
                  "I started with the Starter plan and it's perfect for learning. The educational resources have helped me understand trading fundamentals.",
              },
              {
                name: "Robert J.",
                role: "VIP Trader",
                quote:
                  "As a professional trader, the VIP plan gives me the edge I need. The dedicated account manager and ultra-low spreads make a significant difference.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-8 w-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 flex-grow mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-amber-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the plan that suits your needs and begin your trading journey today.
          </p>
          <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold px-8">
            Open Account
          </Button>
        </div>
      </section>
    </div>
  )
}
