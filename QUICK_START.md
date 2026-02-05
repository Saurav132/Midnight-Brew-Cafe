# 🚀 Quick Start - Get Content Showing in 5 Minutes!

## What You Need To Do

Your website is **100% complete and running**, but it needs content from Sanity CMS to display menu items, blog posts, and testimonials.

---

## ⚡ 5-Minute Setup

### Step 1: Go to Sanity Studio (1 min)
1. Visit: https://www.sanity.io/manage/personal/project/2jdsy0ey
2. Log in to your Sanity account

### Step 2: Create Schemas (2 min)
You need to create 4 content types. In Sanity Studio:

1. Click **"Schema"** in the left sidebar
2. Click **"+ Add schema type"**
3. Copy the schema code from `/app/sanity/SCHEMAS.md`
4. Create these 4 schemas:
   - `menuItem`
   - `blogPost`
   - `testimonial`
   - `siteSettings`

### Step 3: Add Content (2 min)
Once schemas are created:

1. Click **"Content"** in the left sidebar
2. Click **"+ New document"**
3. Select a document type
4. Fill in the fields (see sample data below)
5. Click **"Publish"**

---

## 📝 Sample Content to Add

### Menu Item Example
```
Name: Midnight Cold Brew
Category: coffee
Price: 4.50
Description: Slow-steeped 18-hour cold brew with chocolate notes.
Badge: popular
Featured: ✓ (checked)
```

### Blog Post Example
```
Title: How We Brew the Perfect Cold Brew
Slug: perfect-cold-brew-method
Author: Sarah Mitchell
Publish Date: Today's date
Excerpt: Cold brew is not just iced coffee — it is a patience game...
Content: [Write your blog content in the editor]
```

### Testimonial Example
```
Customer Name: Alex Johnson
Quote: "Best coffee in town! The midnight cold brew is absolutely phenomenal."
Rating: 5
```

---

## ✅ Verify It's Working

1. **Add at least one item to each content type**
2. **Click "Publish"** on each item
3. **Refresh your website**: https://midnight-brew.preview.emergentagent.com
4. **You should see your content appear!**

---

## 🎯 Where Content Appears

| Content Type | Where It Shows |
|-------------|----------------|
| Menu Items (featured) | Homepage → "Customer Favorites" |
| Menu Items (all) | Menu Page |
| Blog Posts (latest 3) | Homepage → "From Our Blog" |
| Blog Posts (all) | Blog Page |
| Testimonials | Homepage → "What Customers Say" |

---

## 🆘 Quick Troubleshooting

**Q: Content not showing?**
- Make sure you clicked **"Publish"** (not just save as draft)
- Refresh the website page
- Check that the schema was created correctly

**Q: How do I add images?**
- In the content editor, click the image field
- Upload an image from your computer
- Sanity will handle the rest!

**Q: Where are the full instructions?**
- See `/app/sanity/SCHEMAS.md` for complete schema code
- See `/app/SETUP_GUIDE.md` for detailed documentation
- See `/app/README.md` for project overview

---

## 🎨 What's Already Built

✅ Beautiful dark + warm theme
✅ Fully responsive design
✅ 7 complete pages (Home, Menu, Blog, About, Contact, Gallery)
✅ Navigation and footer
✅ Hero section with CTAs
✅ Contact form
✅ Newsletter signup
✅ Category filtering on menu
✅ Dynamic blog post pages
✅ SEO optimization

**All you need is content!** 🎉

---

## 📚 Full Documentation

- **Complete Setup**: `/app/SETUP_GUIDE.md`
- **Schema Definitions**: `/app/sanity/SCHEMAS.md`
- **Project README**: `/app/README.md`

---

**Get started now and see your cafe website come to life!** ☕✨
