'use client'

import { useState, useEffect } from 'react'
import BlogCard from '@/components/BlogCard'
import { BookOpen } from 'lucide-react'
import { sanityFetch } from '@/sanity/lib/client'
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await sanityFetch(BLOG_POSTS_QUERY)
      setPosts(data || [])
      setLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">Our Blog</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-50/70">Stories, tips, and coffee culture</p>
        </div>

        {loading ? (
          <div className="text-center text-amber-50/60 py-20">
            <BookOpen className="h-12 w-12 animate-pulse mx-auto mb-4 text-amber-500" />
            <p>Loading blog posts...</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-amber-50/60 py-20">
            <p className="text-lg mb-4">No blog posts yet.</p>
            <p className="text-sm">Blog posts will appear here once added to Sanity CMS.</p>
          </div>
        )}
      </div>
    </div>
  )
}