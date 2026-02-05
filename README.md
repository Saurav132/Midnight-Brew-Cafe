# Midnight Brew Cafe

## 🎨 Premium Cafe & Restaurant Website

A production-quality, fully responsive cafe website built with **Next.js 14**, **Tailwind CSS**, and **Sanity Headless CMS**.

### ✨ Features

- 🏠 **7 Complete Pages**: Home, Menu, Blog, Blog Detail, About, Contact, Gallery
- 🎯 **Dynamic Content**: Powered by Sanity CMS
- 🌙 **Dark Theme**: Premium dark + warm amber aesthetic
- 📱 **Fully Responsive**: Mobile-first design
- ⚡ **Fast Performance**: Next.js 14 App Router with server components
- 🎨 **Beautiful UI**: shadcn/ui components + Tailwind CSS
- 🔍 **SEO Friendly**: Optimized meta tags and structure

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Sanity Headless CMS
- **Icons**: Lucide React
- **Language**: JavaScript

---

## 📦 Installation

### 1. Install Dependencies

```bash
yarn install
```

### 2. Environment Variables

The `.env` file is already configured with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=2jdsy0ey
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Set Up Sanity Schemas

1. Go to [Sanity Studio](https://www.sanity.io/manage/personal/project/2jdsy0ey)
2. Follow the instructions in `/sanity/SCHEMAS.md` to create:
   - MenuItem schema
   - BlogPost schema
   - SiteSettings schema
   - Testimonial schema

### 4. Add Sample Content

Refer to `/sanity/SCHEMAS.md` for sample data to populate your CMS.

### 5. Run Development Server

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📄 Pages

### Homepage (`/`)
- Hero section with CTA buttons
- About section with values
- Featured menu items (from CMS)
- Customer testimonials (from CMS)
- Latest blog posts (from CMS)
- Newsletter signup
- Weekend special offer banner

### Menu (`/menu`)
- All menu items from CMS
- Category filtering (Coffee, Snacks, Desserts, Meals)
- Interactive tabs
- Item cards with badges (new/popular/chef special)

### Blog (`/blog`)
- Blog post listing
- Post cards with cover images
- Author and date information

### Blog Detail (`/blog/[slug]`)
- Dynamic blog post pages
- Portable Text rendering
- Full post content
- Author and publish date
- Tags

### About (`/about`)
- Cafe story and mission
- Core values
- Team highlights

### Contact (`/contact`)
- Contact form
- Address, phone, email
- Opening hours
- Interactive information cards

### Gallery (`/gallery`)
- Image grid layout
- Lightbox view
- Responsive masonry grid

---

## 🎨 Design System

### Colors
- **Background**: Zinc-950 (deep black)
- **Primary**: Amber-600 (warm gold)
- **Text**: Amber-50 (light cream)
- **Accents**: Amber-900/20 (subtle warm tones)
- **Borders**: Amber-900/20 (subtle dividers)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Regular, readable sizes

### Components
- shadcn/ui components
- Custom themed with dark + warm aesthetic
- Smooth hover transitions
- Elegant borders and shadows

---

## 📁 Project Structure

```
/app
├── app/
│   ├── layout.js              # Root layout with Navbar/Footer
│   ├── page.js                # Homepage
│   ├── menu/page.js           # Menu page
│   ├── blog/
│   │   ├── page.js            # Blog listing
│   │   └── [slug]/page.js     # Dynamic blog post
│   ├── about/page.js          # About page
│   ├── contact/page.js        # Contact page
│   ├── gallery/page.js        # Gallery page
│   └── api/[[...path]]/route.js
├── components/
│   ├── Navbar.js              # Navigation bar
│   ├── Footer.js              # Footer
│   ├── Hero.js                # Hero section
│   ├── MenuCard.js            # Menu item card
│   ├── BlogCard.js            # Blog post card
│   ├── OfferBanner.js         # Promotional banner
│   └── Newsletter.js          # Newsletter signup
├── sanity/
│   ├── lib/
│   │   ├── client.js          # Sanity client setup
│   │   └── queries.js         # GROQ queries
│   └── SCHEMAS.md             # Schema documentation
├── .env                       # Environment variables
└── package.json
```

---

## 🔌 Sanity CMS Integration

### GROQ Queries

All queries are defined in `/sanity/lib/queries.js`:

- `MENU_ITEMS_QUERY` - All menu items
- `MENU_ITEMS_BY_CATEGORY_QUERY` - Filter by category
- `FEATURED_MENU_ITEMS_QUERY` - Featured items for homepage
- `BLOG_POSTS_QUERY` - All blog posts
- `BLOG_POST_BY_SLUG_QUERY` - Single post by slug
- `LATEST_BLOG_POSTS_QUERY` - Latest 3 posts
- `TESTIMONIALS_QUERY` - All testimonials
- `SITE_SETTINGS_QUERY` - Global settings

### Client Setup

The Sanity client (`/sanity/lib/client.js`) is configured with:
- Project ID from environment
- Dataset (production)
- API token for authenticated requests
- Image URL builder for optimized images

---

## 🎯 Key Features Implementation

### Menu Category Filter
- Client-side filtering with React state
- Tab-based UI using shadcn/ui Tabs
- Smooth transitions

### Dynamic Blog Routes
- Next.js App Router dynamic segments
- Portable Text rendering for rich content
- Server-side data fetching

### Image Optimization
- Next.js Image component
- Sanity CDN for fast delivery
- Responsive images with proper sizing

### SEO
- Meta tags in layout.js
- Semantic HTML structure
- Proper heading hierarchy

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy

### Other Platforms

The app works on any platform supporting Next.js 14:
- Netlify
- Railway
- Digital Ocean
- AWS Amplify

---

## 📝 Content Management

### Adding Menu Items
1. Go to Sanity Studio
2. Create new "Menu Item" document
3. Fill in name, category, price, description
4. Upload image
5. Set badge (optional) and featured status
6. Publish

### Adding Blog Posts
1. Create new "Blog Post" document
2. Add title, slug, cover image
3. Write content using Portable Text editor
4. Set author and publish date
5. Add tags (optional)
6. Publish

### Managing Testimonials
1. Create new "Testimonial" document
2. Add customer name and quote
3. Set rating (1-5 stars)
4. Publish

---

## 🎨 Customization

### Changing Colors

Edit Tailwind classes in components:
- Replace `amber-*` with your color
- Update `zinc-*` for background tones

### Adding New Pages

1. Create new file in `/app/your-page/page.js`
2. Add route to Navbar component
3. Create Sanity schema if needed
4. Add GROQ query

---

## 📞 Support

For issues or questions:
1. Check `/sanity/SCHEMAS.md` for CMS setup
2. Review environment variables in `.env`
3. Ensure Sanity credentials are correct

---

## 📄 License

This is a demo project for portfolio and client presentations.

---

## 🙏 Credits

- **Design**: Modern cafe aesthetic
- **Images**: Unsplash (sample images)
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

---

**Built with ❤️ for coffee lovers and night owls.**