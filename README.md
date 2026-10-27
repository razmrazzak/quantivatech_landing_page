# Quantiva Tech Landing Page

Landing page for **Quantiva Tech** — a personal brand by independent developer **Mohamed Razmy Abdul Razzak** (not a registered company).

## Tech Stack

- React 18
- Tailwind CSS 3 (Premium Light theme)
- Vite (static build)
- react-helmet-async (SEO)
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

## App Detail Pages

Each app has a dedicated page at `/apps/{slug}` (e.g., `/apps/expense`, `/apps/habitica`, `/apps/capgen`).

### Adding YouTube Video IDs

To add a demo video to an app detail page:

1. Open `src/data/appPages.js`
2. Find the app object (e.g., `expense`, `habitica`, `capgen`)
3. Set the `youtubeId` field to your YouTube video ID:

```js
expense: {
  // ...
  youtubeId: 'dQw4w9WgXcQ', // Replace with your actual YouTube video ID
  // ...
}
```

**How to get a YouTube video ID:**
- From URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → the ID is `dQw4w9WgXcQ`
- From share link `https://youtu.be/dQw4w9WgXcQ` → the ID is `dQw4w9WgXcQ`

If `youtubeId` is empty or missing, a placeholder will be shown instead.

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
  pages/        HomePage, AppDetailPage, LegalDocumentPage, ExpenseDeleteAccountPage
  components/   Navbar, ProductCard, AppShowcase, Footer, LegalLayout, etc.
  sections/     Hero, FeaturedProducts, BuildingInPublic, About, Contact, etc.
  data/         products.js, appPages.js, legal.js, company.js, *Showcase.js
```

## Routes

- `/` — Home page
- `/apps/{slug}` — App detail pages (expense, habitica, capgen, ai-trip-planner, food-delivery, autoflow, voicenotes)
- `/apps/{appId}/privacy` — Privacy policy per app
- `/apps/{appId}/terms` — Terms & Conditions per app
- `/apps/expense/delete-account` — Account deletion for Expense app

## License

Private — Quantiva Tech.
