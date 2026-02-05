'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Coffee } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/coffee-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-900/20 px-4 py-2 rounded-full mb-6 border border-amber-700/30">
            <Coffee className="h-4 w-4 text-amber-500" />
            <span className="text-amber-300 text-sm font-medium">Premium Artisan Coffee</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-50 mb-6 leading-tight">
            Midnight Brew Cafe
            <span className="block text-amber-500 mt-2">Where Every Cup Tells a Story</span>
          </h1>

          <p className="text-lg md:text-xl text-amber-50/70 mb-8 max-w-2xl mx-auto">
            Artisan coffee, handcrafted snacks, and late-night vibes. Freshly brewed experiences, every single day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white group">
              <Link href="/menu">
                View Menu
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-amber-700 text-amber-50 hover:bg-amber-900/20">
              <Link href="#featured">Order Special Brew</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  )
}

export default Hero