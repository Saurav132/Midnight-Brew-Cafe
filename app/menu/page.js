'use client'

import { useState, useEffect } from 'react'
import MenuCard from '@/components/MenuCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Coffee, Sandwich, Cake, UtensilsCrossed } from 'lucide-react'
import { sanityFetch } from '@/sanity/lib/client'
import { MENU_ITEMS_QUERY } from '@/sanity/lib/queries'

export default function MenuPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const fetchItems = async () => {
      const data = await sanityFetch(MENU_ITEMS_QUERY)
      setItems(data || [])
      setLoading(false)
    }
    fetchItems()
  }, [])

  const categories = [
    { value: 'all', label: 'All Items', icon: UtensilsCrossed },
    { value: 'coffee', label: 'Coffee', icon: Coffee },
    { value: 'snacks', label: 'Snacks', icon: Sandwich },
    { value: 'desserts', label: 'Desserts', icon: Cake },
    { value: 'meals', label: 'Meals', icon: UtensilsCrossed },
  ]

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">Our Menu</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-50/70">Handcrafted with passion, served with love</p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-2xl">
            <TabsList className="grid grid-cols-5 bg-zinc-900 border border-amber-900/20">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <TabsTrigger 
                    key={category.value} 
                    value={category.value}
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Menu Items */}
        {loading ? (
          <div className="text-center text-amber-50/60 py-20">
            <Coffee className="h-12 w-12 animate-spin mx-auto mb-4 text-amber-500" />
            <p>Loading menu items...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-amber-50/60 py-20">
            <p className="text-lg mb-4">No items found in this category.</p>
            <p className="text-sm">Menu items will appear here once added to Sanity CMS.</p>
          </div>
        )}
      </div>
    </div>
  )
}