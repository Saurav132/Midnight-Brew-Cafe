'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("https://formspree.io/f/xwvneoep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Midnight Brew Cafe Contact Message"
        }),
      })

      if (res.ok) {
        alert("✅ Message sent successfully!")
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert("❌ Failed to send message. Try again.")
      }
    } catch (err) {
      alert("⚠️ Network error. Please try again.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-50/70">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-amber-50 mb-6">Get in Touch</h2>

              <div className="space-y-6">

                <Card className="bg-zinc-900 border-amber-900/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-amber-900/20 p-3 rounded-full border border-amber-700/30">
                      <MapPin className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-50 mb-1">Address</h3>
                      <p className="text-amber-50/70">21 Market Street, Downtown</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-amber-900/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-amber-900/20 p-3 rounded-full border border-amber-700/30">
                      <Phone className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-50 mb-1">Phone</h3>
                      <p className="text-amber-50/70">+1 202 555 0147</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-amber-900/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-amber-900/20 p-3 rounded-full border border-amber-700/30">
                      <Mail className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-50 mb-1">Email</h3>
                      <p className="text-amber-50/70">hello@midnightbrew.demo</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-amber-900/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-amber-900/20 p-3 rounded-full border border-amber-700/30">
                      <Clock className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-50 mb-1">Hours</h3>
                      <p className="text-amber-50/70">Mon–Fri: 8am – 11pm</p>
                      <p className="text-amber-50/70">Sat–Sun: 9am – 1am</p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-zinc-900 border-amber-900/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-amber-50 mb-6">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                      <label className="block text-amber-50 mb-2 font-medium">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-zinc-950 border-amber-900/20 text-amber-50"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-50 mb-2 font-medium">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-zinc-950 border-amber-900/20 text-amber-50"
                      />
                    </div>

                    <div>
                      <label className="block text-amber-50 mb-2 font-medium">Message</label>
                      <Textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-zinc-950 border-amber-900/20 text-amber-50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
