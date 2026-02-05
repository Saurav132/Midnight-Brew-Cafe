'use client'

import Link from 'next/link'
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-amber-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6 text-amber-500" />
              <span className="text-lg font-bold text-amber-50">Midnight Brew</span>
            </div>
            <p className="text-amber-50/60 text-sm">
              Brewed Slow. Served Bold.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-50 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-amber-50/60 hover:text-amber-500 text-sm transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-amber-50/60 hover:text-amber-500 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-50/60 hover:text-amber-500 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-50/60 hover:text-amber-500 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-50 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-amber-50/60">
              <li>21 Market Street, Downtown</li>
              <li>+1 202 555 0147</li>
              <li>hello@midnightbrew.demo</li>
              <li className="mt-4">
                <span className="font-semibold text-amber-50">Hours</span>
                <br />
                Mon–Fri: 8am – 11pm
                <br />
                Sat–Sun: 9am – 1am
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-amber-50 font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-50/60 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-50/60 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-50/60 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/20 mt-8 pt-8 text-center text-amber-50/40 text-sm">
          <p>© {new Date().getFullYear()} Midnight Brew Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer