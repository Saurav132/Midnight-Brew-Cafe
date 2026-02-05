'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { format } from 'date-fns'

const BlogCard = ({ post }) => {
  return (
    <Card className="bg-zinc-900 border-amber-900/20 overflow-hidden group hover:border-amber-600/40 transition-all duration-300">
      {post.coverImageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-amber-50 mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-amber-50/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-amber-50/60">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
          {post.publishDate && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{format(new Date(post.publishDate), 'MMM dd, yyyy')}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="ghost" className="text-amber-500 hover:text-amber-400 hover:bg-amber-900/20 w-full">
          <Link href={`/blog/${post.slug.current}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default BlogCard