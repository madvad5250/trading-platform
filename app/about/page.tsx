import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nexvest</h1>
            <p className="text-xl text-gray-300">
              We're on a mission to make trading accessible, secure, and profitable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, Nexvest was born from a simple idea: trading should be accessible to everyone, not just
                financial experts.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, experienced traders themselves, were frustrated with the complexity and high barriers to
                entry in traditional trading platforms. They set out to create a solution that would democratize trading
                while maintaining professional-grade tools and security.
              </p>
              <p className="text-gray-600">
                Today, Nexvest serves thousands of traders across the globe, from beginners taking their first steps to
                seasoned professionals managing complex portfolios.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">
              To empower individuals to take control of their financial future through accessible, secure, and
              innovative trading solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                description:
                  "Breaking down barriers to entry in the trading world with intuitive interfaces and educational resources.",
              },
              {
                title: "Innovation",
                description:
                  "Constantly evolving our platform with cutting-edge technology to provide the best trading experience.",
              },
              {
                title: "Security",
                description: "Maintaining the highest standards of security to protect our users' assets and data.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the experienced professionals driving Nexvest's vision forward.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Chief Executive Officer",
                bio: "Former Wall Street trader with 15+ years of experience in financial markets.",
              },
              {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                bio: "Tech innovator with a background in fintech and blockchain solutions.",
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Operating Officer",
                bio: "Operations expert specializing in scaling financial service platforms.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 mx-auto rounded-full overflow-hidden w-32 h-32 bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-amber-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-gray-300">Our commitment to excellence has been recognized by industry leaders.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="bg-white/10 p-6 rounded-full mb-4">
                  <Image src="/placeholder.svg?height=80&width=80" alt={`Award ${item}`} width={80} height={80} />
                </div>
                <h3 className="text-lg font-semibold text-center">Best Trading Platform {2020 + item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the Nexvest revolution and take control of your financial future today.
          </p>
          <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-semibold px-8">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )
}
