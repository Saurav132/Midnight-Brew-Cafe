import { Coffee, Target, Users, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">About Us</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-50/70">Our Story, Our Passion</p>
          </div>

          <div className="mb-16">
            <Card className="bg-zinc-900 border-amber-900/20">
              <CardContent className="p-8">
                <p className="text-lg text-amber-50/80 leading-relaxed mb-6">
                  Midnight Brew Cafe started as a late-night creative space for people who love deep work and great coffee. Our beans are carefully selected and roasted in small batches. Every drink is crafted, not rushed.
                </p>
                <p className="text-lg text-amber-50/80 leading-relaxed">
                  We believe that coffee is more than just a beverage—it's an experience, a ritual, and a moment of connection. Whether you're here to fuel your late-night work session, catch up with friends, or simply enjoy a perfectly brewed cup, we're here to make your visit memorable.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-zinc-900 border-amber-900/20">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                  <Target className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-50 mb-3">Our Mission</h3>
                <p className="text-amber-50/70">
                  To create a welcoming space where quality coffee meets creative energy, fostering a community of night owls, dreamers, and doers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-amber-900/20">
              <CardContent className="p-8 text-center">
                <div className="bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                  <Award className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-50 mb-3">Our Values</h3>
                <p className="text-amber-50/70">
                  Quality over quantity, sustainability in sourcing, and creating moments of genuine connection through exceptional coffee.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                <Coffee className="h-10 w-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-amber-50 mb-2">Artisan Quality</h3>
              <p className="text-amber-50/60 text-sm">Small-batch roasting for maximum flavor</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                <Users className="h-10 w-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-amber-50 mb-2">Community Focus</h3>
              <p className="text-amber-50/60 text-sm">A space built for connection and creativity</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                <Award className="h-10 w-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-amber-50 mb-2">Ethical Sourcing</h3>
              <p className="text-amber-50/60 text-sm">Direct trade with sustainable farms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}