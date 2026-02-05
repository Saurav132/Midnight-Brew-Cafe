import { sanityFetch } from '@/sanity/lib/client'
import { BLOG_POST_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'

export default async function BlogDetail({ params }) {
  const post = await sanityFetch(
    BLOG_POST_BY_SLUG_QUERY,
    { slug: params.slug }
  )

  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <img src={post.coverImageUrl} className="rounded mb-8" />

        <h1 className="text-4xl text-amber-50 font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-amber-50/60 mb-10">
          By {post.author}
        </p>

        <div className="prose prose-invert">
          {post.content?.map((block, i) => (
            <p key={i}>{block.children?.[0]?.text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
