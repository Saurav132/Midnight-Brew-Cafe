'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const MenuCard = ({ item }) => {
  const getBadgeVariant = (badge) => {
    if (badge === 'popular') return 'default'
    if (badge === 'new') return 'secondary'
    return 'outline'
  }

  return (
    <Card className="bg-zinc-900 border-amber-900/20 overflow-hidden group hover:border-amber-600/40 transition-all duration-300">
      {item.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {item.badge && (
            <div className="absolute top-2 right-2">
              <Badge variant={getBadgeVariant(item.badge)} className="capitalize">
                {item.badge}
              </Badge>
            </div>
          )}
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-amber-50">{item.name}</h3>
          <span className="text-amber-500 font-bold text-lg">${item.price?.toFixed(2)}</span>
        </div>
        <p className="text-amber-50/60 text-sm mb-2 capitalize">{item.category}</p>
        <p className="text-amber-50/70 text-sm">{item.description}</p>
      </CardContent>
    </Card>
  )
}

export default MenuCard