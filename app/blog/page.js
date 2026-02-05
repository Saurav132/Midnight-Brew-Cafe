import { sanityFetch } from '@/sanity/lib/client'
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await sanityFetch(BLOG_POSTS_QUERY) || []

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-50 mb-12 text-center">
          Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <div className="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 transition">
                <img
                  src={post.coverImageUrl}
                  className="rounded mb-4"
                />
                <h2 className="text-xl text-amber-50 font-semibold mb-2">
                  {post.title}
                </h2>
                <p className="text-amber-50/70 text-sm">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
