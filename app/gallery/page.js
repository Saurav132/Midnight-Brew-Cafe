'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Sample gallery images - in production, these would come from Sanity CMS
  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', alt: 'Coffee brewing' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800', alt: 'Coffee art' },
    { id: 3, url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', alt: 'Coffee beans' },
    { id: 4, url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Cafe interior' },
    { id: 5, url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800', alt: 'Pastries' },
    { id: 6, url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', alt: 'Coffee cup' },
    { id: 7, url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800', alt: 'Breakfast' },
    { id: 8, url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', alt: 'Cold brew' },
    { id: 9, url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800', alt: 'Cafe atmosphere' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-50/70">A glimpse into our world of coffee and craft</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-amber-50 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-zinc-900 border-amber-900/20">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}