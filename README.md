# Quantiva Tech Landing Page

Landing page for **Quantiva Tech** — a personal brand by independent developer **Mohamed Razmy Abdul Razzak** (not a registered company).

## Tech Stack

- React 18
- Tailwind CSS 3
- Vite (static build)
- No backend, database, or API calls

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Adding Products

Products are now data-driven with individual detail pages. To add a new product:

### 1. Edit `src/data/productsData.js`

Add a new product object to the `productsData` array:

```js
{
  id: 'your-product',
  name: 'Your Product Name',
  slug: 'your-product',  // Used in URL: /products/your-product
  category: 'Category · Platform',
  tagline: 'Short tagline',
  shortDescription: 'Brief description for the card (1-2 sentences)',
  description: 'Longer description for the detail page (2-3 sentences)',
  status: STATUS.ONGOING,  // STATUS.RELEASED, STATUS.ONGOING, or STATUS.IN_PLANNING
  progress: 75,  // 0-100
  platforms: ['iOS', 'Android', 'Web'],
  logo: '/images/products/your-product/app-icon.png',
  logoType: 'image',  // or 'emoji' for text logos
  theme: 'cyan',  // 'cyan', 'purple', or 'orange'
  badge: 'Coming Soon',
  lastUpdated: '2026-10-19',
  iosUrl: '',  // App Store link (optional)
  androidUrl: '',  // Play Store link (optional)
  websiteUrl: '',  // Product website (optional)
  features: [
    { icon: '🚀', title: 'Feature 1', description: 'Description' },
    { icon: '✨', title: 'Feature 2', description: 'Description' },
    // Add 4-6 features
  ],
  highlights: [
    { title: 'Highlight Title', body: 'Detailed explanation of this highlight.' },
    // Optional: add 2-3 highlights
  ],
  gallerySubtitle: 'Brief description of screenshots',
  screenshots: [
    {
      src: '/images/products/your-product/screen-1.png',
      alt: 'Description of screenshot',
      label: 'Dashboard',
      theme: 'light',  // or 'dark'
    },
    // Add 4-8 screenshots
  ],
  floatingScreenshots: [0, 2, 4],  // Indices for desktop showcase
  privacyUrl: '/apps/your-product/privacy',  // Optional
  termsUrl: '/apps/your-product/terms',  // Optional
}
```

### 2. Add Screenshots

Create a folder for your product images:

```
public/images/products/your-product/
  ├── app-icon.png (512x512 recommended)
  ├── screen-1.png (1170x2532 or 19.5:9 aspect ratio)
  ├── screen-2.png
  └── ...
```

**Recommended screenshot size:** 1170x2532 pixels (iPhone 14 Pro) or similar 19.5:9 aspect ratio.

### 3. (Optional) Add Hero Images

For large promotional banners, add:

```
public/images/products/your-product/
  ├── hero-main.png
  └── hero-alt.png
```

Then reference them in `productsData.js`:

```js
heroBanner: '/images/products/your-product/hero-main.png',
heroAlt: '/images/products/your-product/hero-alt.png',
```

### Status Values

- `STATUS.RELEASED` — Live, publicly available
- `STATUS.ONGOING` — In development, launching soon
- `STATUS.IN_PLANNING` — Planned, not yet started

Products are automatically grouped by status on the home page.

## Legal routes (per app)

| Route | Description |
|-------|-------------|
| `/privacy` | Quantiva Tech website privacy |
| `/terms` | Quantiva Tech website terms |
| `/apps/capgen/privacy` | CapGen privacy |
| `/apps/capgen/terms` | CapGen terms |
| `/apps/habitica/privacy` | Habitica Habits privacy |
| `/apps/habitica/terms` | Habitica Habits terms |
| `/apps/expense/privacy` | Expense - AI Tracker privacy |
| `/apps/expense/terms` | Expense - AI Tracker terms |
| `/apps/expense/delete-account` | Expense account deletion (Google Play) |

### Expense account deletion (env)

Copy `.env.example` → `.env` and set:

- `VITE_EXPENSE_API_BASE_URL` — e.g. `https://your-api.onrender.com`
- `VITE_EXPENSE_FIREBASE_*` — Firebase web config for Expense - AI Tracker

Then rebuild. The page signs in with Firebase, then calls `DELETE /user/account` with `Authorization: Bearer <idToken>`.


Edit content in `src/data/legal.js`. CapGen links to canonical policies on caption-gen-api.onrender.com.

## Project Structure

```
src/
  pages/        HomePage, LegalDocumentPage
  components/   Navbar, ProductCard, AppShowcase, Footer, etc.
  sections/     Hero, FeaturedProducts, BuildingInPublic, About, Contact, etc.
  data/         products.js, legal.js, company.js, *Showcase.js
```

## License

Private — Quantiva Tech.
