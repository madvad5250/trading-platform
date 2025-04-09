import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Creating an account is simple. Click on the 'Sign Up' button, fill in your personal details, verify your email address, and complete the KYC process. Once approved, you can fund your account and start trading.",
    },
    {
      question: "What is the minimum deposit?",
      answer:
        "The minimum deposit varies depending on the account type. For Starter accounts, the minimum deposit is $250. Pro accounts require a minimum of $1,000, while VIP accounts start at $10,000.",
    },
    {
      question: "How can I deposit funds?",
      answer:
        "We offer multiple deposit methods including bank transfer, credit/debit cards, and various e-wallets. Cryptocurrency deposits are also supported. All deposits are processed securely and typically reflect in your account within 24 hours.",
    },
    {
      question: "What trading instruments are available?",
      answer:
        "We offer a wide range of trading instruments including forex pairs, cryptocurrencies, stocks, indices, and commodities. The specific instruments available depend on your account type, with higher-tier accounts having access to more instruments.",
    },
    {
      question: "How do I withdraw my funds?",
      answer:
        "Withdrawals can be made through your dashboard. Select the 'Withdraw' option, choose your preferred withdrawal method, enter the amount, and confirm. Withdrawal processing times vary depending on your account level and the withdrawal method chosen.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take security very seriously. We use industry-standard encryption and security protocols to protect your personal and financial information. We also implement two-factor authentication (2FA) for an additional layer of security.",
    },
    {
      question: "What leverage do you offer?",
      answer:
        "Leverage varies by account type and the instruments you're trading. Starter accounts offer up to 1:10 leverage, Pro accounts up to 1:50, and VIP accounts up to 1:100. Remember that while leverage can amplify profits, it also increases risk.",
    },
    {
      question: "Do you offer a demo account?",
      answer:
        "Yes, we offer a free demo account with virtual funds so you can practice trading without risking real money. This is a great way to familiarize yourself with our platform and test your trading strategies.",
    },
    {
      question: "What educational resources do you provide?",
      answer:
        "We offer a comprehensive range of educational resources including video tutorials, webinars, e-books, and a trading glossary. Higher-tier accounts also get access to exclusive educational content and one-on-one training sessions.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available via live chat, email, and phone. Starter accounts have standard support during business hours, Pro accounts get priority support, and VIP accounts have a dedicated account manager available 24/7.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">Find answers to common questions about our platform and services.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <Button className="bg-navy-800 hover:bg-navy-900">Contact Support</Button>
        </div>
      </section>
    </div>
  )
}
