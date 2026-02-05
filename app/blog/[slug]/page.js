import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { sanityFetch } from '@/sanity/lib/client'
import { BLOG_POST_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

export default async function BlogPostPage({ params }) {
  const post = await sanityFetch(BLOG_POST_BY_SLUG_QUERY, { slug: params.slug })

  if (!post) {
    notFound()
  }

  const components = {
    block: {
      normal: ({ children }) => <p className="text-amber-50/80 mb-4 leading-relaxed">{children}</p>,
      h2: ({ children }) => <h2 className="text-3xl font-bold text-amber-50 mt-8 mb-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-semibold text-amber-50 mt-6 mb-3">{children}</h3>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-amber-600 pl-4 italic text-amber-50/70 my-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside text-amber-50/80 mb-4 space-y-2">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside text-amber-50/80 mb-4 space-y-2">{children}</ol>,
    },
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <article className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 text-amber-500 hover:text-amber-400 hover:bg-amber-900/20">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {post.coverImageUrl && (
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">{post.title}</h1>

        <div className="flex items-center gap-6 text-amber-50/60 mb-8 pb-8 border-b border-amber-900/20">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          {post.publishDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.publishDate), 'MMMM dd, yyyy')}</span>
            </div>
          )}
        </div>

        <div className="prose prose-invert prose-amber max-w-none">
          {post.content && Array.isArray(post.content) ? (
            <PortableText value={post.content} components={components} />
          ) : (
            <p className="text-amber-50/80">Content not available.</p>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-amber-900/20">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-900/20 text-amber-500 rounded-full text-sm border border-amber-700/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}