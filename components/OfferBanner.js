'use client'

import { Badge } from '@/components/ui/badge'
import { Gift } from 'lucide-react'

const OfferBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-900/40 via-amber-800/40 to-amber-900/40 border-y border-amber-700/30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-center flex-wrap">
          <Gift className="h-5 w-5 text-amber-500" />
          <span className="text-amber-50 font-semibold">Weekend Special:</span>
          <span className="text-amber-50/80">Buy 1 Signature Cold Brew — Get 1 Free</span>
          <Badge className="bg-amber-600 text-white">This Weekend Only</Badge>
        </div>
      </div>
    </div>
  )
}

export default OfferBanner