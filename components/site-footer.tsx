import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">
              NEXVEST
            </h3>
            <p className="text-gray-300 mb-4">The complete platform for building your financial future.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-amber-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-amber-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/risk" className="text-gray-300 hover:text-amber-400">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-amber-400">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Trading Street, Financial District</li>
              <li className="text-gray-300">New York, NY 10001</li>
              <li>
                <Link href="mailto:support@nexvest.com" className="text-gray-300 hover:text-amber-400">
                  support@nexvest.com
                </Link>
              </li>
              <li>
                <Link href="tel:+1234567890" className="text-gray-300 hover:text-amber-400">
                  +1 (234) 567-890
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nexvest. All rights reserved.</p>
          <p className="mt-2">Trading involves risk. Past performance is not indicative of future results.</p>
        </div>
      </div>
    </footer>
  )
}
