'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-zinc-900/95 backdrop-blur-sm border-b border-amber-900/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold text-amber-50">Midnight Brew</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-amber-50/80 hover:text-amber-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-amber-50/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white">
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar