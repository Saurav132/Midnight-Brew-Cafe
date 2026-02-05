import Hero from '@/components/Hero'
import OfferBanner from '@/components/OfferBanner'
import MenuCard from '@/components/MenuCard'
import BlogCard from '@/components/BlogCard'
import Newsletter from '@/components/Newsletter'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Coffee, Award, Clock, Heart, Star } from 'lucide-react'
import { sanityFetch } from '@/sanity/lib/client'
import { FEATURED_MENU_ITEMS_QUERY, LATEST_BLOG_POSTS_QUERY, TESTIMONIALS_QUERY } from '@/sanity/lib/queries'

export default async function HomePage() {
  const featuredItems = await sanityFetch(FEATURED_MENU_ITEMS_QUERY) || []
  const latestPosts = await sanityFetch(LATEST_BLOG_POSTS_QUERY) || []
  const testimonials = await sanityFetch(TESTIMONIALS_QUERY) || []

  return (
    <div>
      <Hero />
      <OfferBanner />

      {/* About Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">About Midnight Brew</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-lg text-amber-50/70 leading-relaxed">
                Midnight Brew Cafe is a modern artisan cafe focused on specialty coffee, signature desserts, and a cozy late-night workspace vibe. Built for creators, thinkers, and night owls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                  <Coffee className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-50 mb-2">Artisan Coffee</h3>
                <p className="text-amber-50/60 text-sm">Slow-brewed perfection in every cup</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                  <Award className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-50 mb-2">Quality Ingredients</h3>
                <p className="text-amber-50/60 text-sm">Handpicked, ethically sourced beans</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-700/30">
                  <Clock className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-amber-50 mb-2">Late Night Vibes</h3>
                <p className="text-amber-50/60 text-sm">Open till 1am on weekends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section id="featured" className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Customer Favorites This Week</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-amber-50/70">Handpicked selections loved by our community</p>
          </div>

          {featuredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredItems.map((item) => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center text-amber-50/60 py-12">
              <p>Featured items will appear here once added to Sanity CMS.</p>
            </div>
          )}

          <div className="text-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">What Our Customers Say</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <Card key={testimonial._id} className="bg-zinc-950 border-amber-900/20">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-amber-50/80 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="text-amber-500 font-semibold">{testimonial.customerName}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">From Our Blog</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-amber-50/70">Stories, tips, and coffee culture</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {latestPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="border-amber-700 text-amber-50 hover:bg-amber-900/20">
                <Link href="/blog">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </div>
  )
}