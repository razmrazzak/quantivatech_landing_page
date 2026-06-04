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

Edit `src/data/products.js` — add objects to the `products` array:

```js
{
  id: 7,
  name: "Your Product",
  category: "SaaS",
  description: "Short description.",
  status: "Development",
  progress: 50,
  platforms: ["Web"],
  logo: "🚀",
  iosUrl: "",
  androidUrl: "",
  websiteUrl: "https://example.com",
  lastUpdated: "2026-06-04",
}
```

Status options: `Planning`, `Design`, `Development`, `Beta Testing`, `Launching Soon`, `Live`.

## Legal routes (per app)

| Route | Description |
|-------|-------------|
| `/privacy` | Quantiva Tech website privacy |
| `/terms` | Quantiva Tech website terms |
| `/apps/capgen/privacy` | CapGen privacy |
| `/apps/capgen/terms` | CapGen terms |
| `/apps/habitica/privacy` | Habitica Habits privacy |
| `/apps/habitica/terms` | Habitica Habits terms |

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
