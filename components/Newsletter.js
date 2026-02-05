'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
    alert('Thanks for subscribing!')
  }

  return (
    <section className="bg-gradient-to-r from-amber-900/20 to-amber-950/20 border-y border-amber-900/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-amber-50 mb-4">Join Our Brew Letter</h2>
          <p className="text-amber-50/70 mb-8">
            Get the latest on new drinks, weekend offers, and brewing tips delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-zinc-900 border-amber-900/20 text-amber-50 placeholder:text-amber-50/40 flex-1"
            />
            <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter