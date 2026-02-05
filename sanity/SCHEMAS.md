# Midnight Brew Cafe - Sanity CMS Schemas

This document contains all the Sanity schema definitions for the Midnight Brew Cafe website.

## Setup Instructions

1. Go to your Sanity Studio: https://www.sanity.io/manage/personal/project/2jdsy0ey
2. Navigate to the "Schema" section
3. Create the following document types

---

## Schema 1: MenuItem

```javascript
export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Coffee', value: 'coffee' },
          { title: 'Snacks', value: 'snacks' },
          { title: 'Desserts', value: 'desserts' },
          { title: 'Meals', value: 'meals' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Popular', value: 'popular' },
          { title: 'Chef Special', value: 'chef special' }
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured Item',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false
    }
  ]
}
```

---

## Schema 2: BlogPost

```javascript
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short preview shown in blog listing'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [
        { field: 'publishDate', direction: 'desc' }
      ]
    }
  ]
}
```

---

## Schema 3: SiteSettings

```javascript
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'cafeName',
      title: 'Cafe Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'text',
      rows: 4
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' }
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
}
```

---

## Schema 4: Testimonial

```javascript
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      initialValue: 5
    }
  ]
}
```

---

## Sample Data

After creating the schemas, add sample content:

### Menu Items (Coffee)

1. **Midnight Cold Brew**
   - Category: coffee
   - Price: 4.50
   - Description: Slow-steeped 18-hour cold brew with chocolate notes.
   - Badge: popular
   - Featured: true

2. **Hazelnut Latte**
   - Category: coffee
   - Price: 5.20
   - Description: Smooth espresso with roasted hazelnut cream.
   - Badge: new
   - Featured: true

3. **Double Shot Espresso**
   - Category: coffee
   - Price: 3.00
   - Description: Strong, bold, no nonsense.
   - Featured: false

### Menu Items (Snacks)

4. **Truffle Grilled Sandwich**
   - Category: snacks
   - Price: 6.80
   - Description: Melted cheese, herbs, truffle butter.
   - Badge: chef special
   - Featured: true

5. **Spicy Paneer Wrap**
   - Category: snacks
   - Price: 5.90
   - Description: Cottage cheese, spicy sauce, greens.
   - Featured: false

### Menu Items (Desserts)

6. **Dark Chocolate Brownie**
   - Category: desserts
   - Price: 3.80
   - Description: Warm, gooey, rich cocoa.
   - Badge: popular
   - Featured: true

7. **Classic Tiramisu Jar**
   - Category: desserts
   - Price: 4.90
   - Description: Coffee soaked layers with mascarpone cream.
   - Featured: true

### Blog Posts

1. **How We Brew the Perfect Cold Brew**
   - Slug: perfect-cold-brew-method
   - Author: Sarah Mitchell
   - Excerpt: Cold brew is not just iced coffee — it is a patience game...
   - Content: Cold brew is not just iced coffee — it is a patience game. We steep our beans for 18 hours to extract smooth flavor without bitterness. The grind size, water temperature, and timing all matter.

2. **5 Cafe Drinks Every Night Owl Should Try**
   - Slug: drinks-for-night-owls
   - Author: Mike Chen
   - Excerpt: If you love late nights, these drinks are your best companions...
   - Content: If you love late nights, these drinks are your best companions: cold brew, espresso tonic, mocha, hazelnut latte, and affogato.

3. **From Bean to Cup — Our Sourcing Story**
   - Slug: bean-to-cup-story
   - Author: Emma Rodriguez
   - Excerpt: We work with ethical farms and small roasters...
   - Content: We work with ethical farms and small roasters to ensure every cup supports quality and sustainability.

### Testimonials

1. **Alex Johnson**
   - Quote: "Best coffee in town! The midnight cold brew is absolutely phenomenal. Perfect spot for late-night work sessions."
   - Rating: 5

2. **Maria Garcia**
   - Quote: "Love the cozy atmosphere and amazing pastries. The staff is incredibly friendly and knowledgeable about their coffee."
   - Rating: 5

3. **David Kim**
   - Quote: "This place has become my second home. Great wifi, comfortable seating, and the best lattes I've ever had."
   - Rating: 5

---

## How to Add Content

1. Visit your Sanity Studio at: https://www.sanity.io/manage
2. Select your project (2jdsy0ey)
3. Click on "Content" in the left sidebar
4. Click "+ New document" and select the schema type
5. Fill in the fields and click "Publish"

## Viewing Your Data

Once you've added content to Sanity, it will automatically appear on your website:
- Menu items → Home page (if featured) and Menu page
- Blog posts → Home page (latest 3) and Blog page
- Testimonials → Home page
- Site settings → Can be used globally

## Image Recommendations

- Menu items: 800x600px, high quality food photography
- Blog covers: 1200x600px, relevant coffee/cafe images
- Use Unsplash for free high-quality images: https://unsplash.com/s/photos/coffee