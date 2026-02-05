'use client'

import { useState } from 'react'
import MenuCard from '@/components/MenuCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Coffee, Sandwich, Cake, UtensilsCrossed } from 'lucide-react'

export default function MenuClient({ items }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'All Items', icon: UtensilsCrossed },
    { value: 'coffee', label: 'Coffee', icon: Coffee },
    { value: 'snacks', label: 'Snacks', icon: Sandwich },
    { value: 'desserts', label: 'Desserts', icon: Cake },
    { value: 'meals', label: 'Meals', icon: UtensilsCrossed },
  ]

  const filtered =
    activeCategory === 'all'
      ? items
      : items.filter(i => i.category === activeCategory)

  return (
    <>
      {/* Tabs */}
      <div className="mb-12 flex justify-center">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-5 bg-zinc-900 border border-amber-900/20">
            {categories.map(c => {
              const Icon = c.icon
              return (
                <TabsTrigger key={c.value} value={c.value}>
                  <Icon className="h-4 w-4 mr-1" />
                  {c.label}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(item => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
    </>
  )
}
