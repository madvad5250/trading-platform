import Image from "next/image"
import { ArrowRight, BarChart3, Bitcoin, Globe, Lock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                A Trading Platform That Empowers You to Go Big
              </h1>
              <p className="text-lg text-gray-300">
                Creating Trading Conditions That Let You Utilize Your Maximum Trading Potential
              </p>
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold px-8">
                Get Started
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://www.fibovest.com/Media/Image/img-slide01.png"
                  alt="Trading Dashboard"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute top-0 right-0 -mr-4 mt-4 z-20">
                <div className="bg-amber-400 rounded-full p-6 shadow-lg">
                  <Bitcoin className="w-12 h-12 text-navy-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trading Has Never Been Easier</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-navy-700 border-none text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-8">STEP 1</h3>
                <div className="flex justify-center mb-6">
                  <div className="bg-green-400 rounded-lg p-4">
                    <TrendingUp className="w-10 h-10 text-navy-900" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Sign up and create your account on our intuitive platform
                </h4>
              </CardContent>
            </Card>
            <Card className="bg-navy-700 border-none text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-8">STEP 2</h3>
                <div className="flex justify-center mb-6">
                  <div className="bg-amber-400 rounded-lg p-4">
                    <Bitcoin className="w-10 h-10 text-navy-900" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4">Make an initial investment, starting as low as $250</h4>
              </CardContent>
            </Card>
            <Card className="bg-navy-700 border-none text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-8">STEP 3</h3>
                <div className="flex justify-center mb-6">
                  <div className="bg-amber-400 rounded-lg p-4">
                    <BarChart3 className="w-10 h-10 text-navy-900" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4">Learn trading basics and practice in real time.</h4>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Nexvest Makes a Difference</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nexvest isn't just another online trading platform; we're here to redefine the trading experience.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "High Leverage",
                description: "Amplify returns and reach goals faster with high leverage options.",
                color: "bg-amber-400",
              },
              {
                title: "Competitive Spreads",
                description: "Maximize profits with tight spreads on every trade.",
                color: "bg-amber-400",
              },
              {
                title: "Trade Anywhere",
                description: "Seamlessly trade on mobile and desktop.",
                color: "bg-amber-400",
              },
              {
                title: "Top Security",
                description: "Secure trading with account monitoring, 2FA, and encryption.",
                color: "bg-amber-400",
              },
            ].map((feature, index) => (
              <Card key={index} className={`${feature.color} border-none text-navy-900`}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Platform */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Highly Advanced Platform</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access powerful, sophisticated features to enhance your trading. Customize layouts, calculate potential
              profits, and receive live updates on market movements to stay ahead.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-navy-800 text-white border-none">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-amber-400 rounded-full p-4">
                    <Bitcoin className="w-8 h-8 text-navy-900" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Diverse Investment Options</h3>
                <p className="text-center">
                  Choose from hundreds of instruments to diversify your portfolio, including stocks, commodities,
                  indices, cryptocurrencies, and forex pairs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-navy-800 text-white border-none">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-400 rounded-full p-4">
                    <BarChart3 className="w-8 h-8 text-navy-900" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Enhanced Portfolio Experience</h3>
                <p className="text-center">
                  Make the most of an expansive asset index designed to elevate your trading experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Trading */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security with No Compromise</h2>
              <p className="text-gray-600 mb-8">
                Trade confidently with top-tier security. Our platform uses two-factor authentication (2FA) for secure
                logins, encrypted data, and segregated accounts for your protection.
              </p>
              <Button className="bg-navy-800 hover:bg-navy-900">Learn More</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="Mobile Trading"
                width={300}
                height={600}
                className="mx-auto"
              />
              <div className="absolute -top-8 -left-8">
                <div className="bg-amber-400 rounded-full p-4 shadow-lg">
                  <Bitcoin className="w-8 h-8 text-navy-900" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8">
                <div className="bg-green-400 rounded-full p-4 shadow-lg">
                  <Lock className="w-8 h-8 text-navy-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extensive Trading */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/https://www.fibovest.com/Media/Image/img-slide01.png?height=600&width=300"
                alt="Trading App"
                width={300}
                height={600}
                className="mx-auto"
              />
              <div className="absolute -top-8 -right-8">
                <div className="bg-amber-400 rounded-full p-4 shadow-lg">
                  <Bitcoin className="w-8 h-8 text-navy-900" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="bg-blue-500 rounded-full p-4 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Extensive Trading Instruments</h2>
              <p className="text-gray-600 mb-8">
                Broaden your trading portfolio with access to a vast asset index. Trade CFDs on stocks, commodities,
                indices, cryptocurrencies, and forex pairs for a dynamic trading experience.
              </p>
              <Button className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold">Start Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of traders who have already discovered the Nexvest advantage.
          </p>
          <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold px-8">
            Create Account <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
