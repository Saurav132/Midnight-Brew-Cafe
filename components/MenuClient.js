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

  { value: 'drinks', label: 'Drinks', icon: Coffee },
  { value: 'combos', label: 'Combos', icon: UtensilsCrossed },
  { value: 'seasonal', label: 'Seasonal', icon: Cake },
  { value: 'specials', label: 'Specials', icon: UtensilsCrossed },
  ]

  const filtered =
    activeCategory === 'all'
      ? items
      : items.filter(i => i.category === activeCategory)

  return (
    <>
      {/* Tabs */}
     <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
  {categories.map((cat) => {
    const Icon = cat.icon
    const active = activeCategory === cat.value

    return (
      <button
        key={cat.value}
        onClick={() => setActiveCategory(cat.value)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition
          ${active
            ? "bg-amber-600 text-white border-amber-500"
            : "bg-zinc-900 text-amber-100 border-amber-900/30 hover:bg-zinc-800"
          }`}
      >
        <Icon className="h-4 w-4" />
        {cat.label}
      </button>
    )
  })}
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
