import { sanityFetch } from '@/sanity/lib/client'
import { MENU_ITEMS_QUERY } from '@/sanity/lib/queries'
import MenuClient from '@/components/MenuClient'

export default async function MenuPage() {
  const items = await sanityFetch(MENU_ITEMS_QUERY) || []

  return (
    <div className="min-h-screen bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-50 mb-10 text-center">
          Our Menu
        </h1>

        <MenuClient items={items} />
      </div>
    </div>
  )
}
