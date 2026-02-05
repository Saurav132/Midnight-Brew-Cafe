export const MENU_ITEMS_QUERY = `*[_type == "menuItem"] | order(category asc, name asc) {
  _id,
  name,
  slug,
  category,
  price,
  description,
  "imageUrl": image.asset->url,
  badge,
  featured
}`

export const MENU_ITEMS_BY_CATEGORY_QUERY = `*[_type == "menuItem" && category == $category] | order(name asc) {
  _id,
  name,
  slug,
  category,
  price,
  description,
  "imageUrl": image.asset->url,
  badge,
  featured
}`

export const FEATURED_MENU_ITEMS_QUERY = `*[_type == "menuItem" && featured == true] | order(name asc) [0...6] {
  _id,
  name,
  slug,
  category,
  price,
  description,
  "imageUrl": image.asset->url,
  badge,
  featured
}`

export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishDate desc) {
  _id,
  title,
  slug,
  "coverImageUrl": coverImage.asset->url,
  excerpt,
  author,
  publishDate,
  tags
}`

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  "coverImageUrl": coverImage.asset->url,
  content,
  author,
  publishDate,
  tags
}`

export const LATEST_BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishDate desc) [0...3] {
  _id,
  title,
  slug,
  "coverImageUrl": coverImage.asset->url,
  excerpt,
  author,
  publishDate,
  tags
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  cafeName,
  "logoUrl": logo.asset->url,
  heroTitle,
  heroSubtitle,
  address,
  phone,
  email,
  openingHours,
  socialLinks
}`

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  customerName,
  quote,
  rating
}`