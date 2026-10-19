/**
 * Products Data - Single source of truth for all QuantivaTech products
 * 
 * To add a new product:
 * 1. Add an entry to this file with all required fields
 * 2. Create a folder: public/images/products/{slug}/
 * 3. Add screenshots: public/images/products/{slug}/screen-*.png
 * 4. Add app icon: public/images/products/{slug}/app-icon.png (or .jpg)
 * 5. (Optional) Add hero images: public/images/products/{slug}/hero-*.png
 * 
 * Recommended screenshot size: 1170x2532 (iPhone 14 Pro) or similar 19.5:9 aspect ratio
 */

// Status options: 'Released', 'Ongoing', 'In Planning'
export const STATUS = {
  RELEASED: 'Released',
  ONGOING: 'Ongoing',
  IN_PLANNING: 'In Planning',
};

const base = '/images/products';

export const productsData = [
  {
    id: 'expense',
    name: 'Expense - AI Tracker',
    slug: 'expense',
    category: 'AI Finance · Mobile App',
    tagline: 'AI Expense & Income Tracking',
    shortDescription:
      'Scan receipts with AI, track expenses & income, and export PDF/CSV — personal and business finances in one place.',
    description:
      'Scan receipts, invoices, and bank statements — AI extracts merchant, date, amount, and more. Track personal and business finances, then export PDF or CSV when you need it.',
    status: STATUS.ONGOING,
    progress: 95,
    platforms: ['iOS', 'Android'],
    logo: '/images/expense/app-icon.jpg',
    logoType: 'image',
    theme: 'cyan',
    badge: 'Latest Project',
    lastUpdated: '2026-09-14',
    iosUrl: '',
    androidUrl: '',
    websiteUrl: '',
    features: [
      {
        icon: '📸',
        title: 'AI Scan',
        description: 'Receipts, invoices & bank statements',
      },
      {
        icon: '💰',
        title: 'Track Finances',
        description: 'Expenses, income & auto-categories',
      },
      {
        icon: '📊',
        title: 'Insights',
        description: 'Monthly balance & spending trends',
      },
      {
        icon: '📄',
        title: 'Reports',
        description: 'Export PDF or CSV anytime',
      },
    ],
    highlights: [
      {
        title: 'Scan with AI',
        body: 'Camera or file upload — AI pulls merchant, date, amount, currency, VAT, and line items. Review before you save.',
      },
      {
        title: 'Personal & business',
        body: 'One place for household and business transactions, with AI suggestions for personal vs business.',
      },
      {
        title: 'Your data, your way',
        body: 'Secure sign-in, EN/DE, preferred currency, and offline manual entries when you need them.',
      },
    ],
    heroBanner: '',
    heroAlt: '',
    gallerySubtitle:
      'Welcome, tracking mode, AI tour, reports, past months, and settings',
    screenshots: [
      {
        src: '/images/expense/screen-welcome.png',
        alt: 'Expense - AI Tracker welcome screen',
        label: 'Welcome',
        theme: 'light',
      },
      {
        src: '/images/expense/screen-mode.png',
        alt: 'Choose personal, business, or both tracking modes',
        label: 'Modes',
        theme: 'light',
      },
      {
        src: '/images/expense/screen-tour.png',
        alt: 'How it helps — AI scan, statements, categories, and export',
        label: 'Tour',
        theme: 'light',
      },
      {
        src: '/images/expense/screen-reports.png',
        alt: 'Reports — daily spending and spending by category',
        label: 'Reports',
        theme: 'light',
      },
      {
        src: '/images/expense/screen-past-months.png',
        alt: 'Past months — expenses, income, and category charts',
        label: 'History',
        theme: 'light',
      },
      {
        src: '/images/expense/screen-settings.png',
        alt: 'Settings — subscription, language, currency, and tracking mode',
        label: 'Settings',
        theme: 'light',
      },
    ],
    floatingScreenshots: [0, 3, 5],
    privacyUrl: '/apps/expense/privacy',
    termsUrl: '/apps/expense/terms',
  },
  {
    id: 'habitizen',
    name: 'HabitZen',
    slug: 'habitizen',
    category: 'Habit Tracker · Mobile App',
    tagline: 'Privacy-First Habit Tracking',
    shortDescription:
      'Build lasting habits with time tracking, streaks, and reminders — your data stays on your device.',
    description:
      'Transform your daily routines into lasting habits. Track time-based activities, tick-list habits, or quantity goals like water intake. Set up to 10 reminders per habit and watch your streaks grow. Privacy-first: all data stays on your phone.',
    status: STATUS.ONGOING, // TODO: Confirm with owner - update to Released when live
    progress: 85, // TODO: Update progress percentage
    platforms: ['iOS', 'Android'],
    logo: `${base}/habitizen/app-icon.png`,
    logoType: 'image',
    theme: 'purple',
    badge: 'Coming Soon',
    lastUpdated: '2026-10-19',
    iosUrl: '', // TODO: Add App Store link when released
    androidUrl: '', // TODO: Add Play Store link when released
    websiteUrl: '',
    features: [
      {
        icon: '⏱️',
        title: 'Time Tracking',
        description: 'Track duration-based activities',
      },
      {
        icon: '✅',
        title: 'Daily Habits',
        description: 'One-time-per-day tick-list habits',
      },
      {
        icon: '💧',
        title: 'Quantity Goals',
        description: 'Volume tracking like water intake',
      },
      {
        icon: '🔔',
        title: 'Smart Reminders',
        description: 'Up to 10 reminders per habit',
      },
      {
        icon: '🔥',
        title: 'Streak Counter',
        description: 'Stay motivated with visual streaks',
      },
      {
        icon: '🔒',
        title: 'Privacy First',
        description: 'All data stored locally on your device',
      },
    ],
    highlights: [
      {
        title: 'Three tracking modes',
        body: 'Choose time tracking for activities like meditation, tick-list for daily habits, or volume tracking for goals like drinking 8 glasses of water.',
      },
      {
        title: 'Never miss a habit',
        body: 'Set up to 10 customizable reminders for each habit. Perfect for building consistency throughout your day.',
      },
      {
        title: 'Your data, your device',
        body: 'Privacy-first architecture means all your habit data stays on your phone. No cloud sync, no tracking, no data collection.',
      },
    ],
    heroBanner: '',
    heroAlt: '',
    gallerySubtitle:
      'Dashboard, habit creation, time tracking, streaks, and settings (placeholder images)',
    screenshots: [
      {
        src: `${base}/habitizen/screen-dashboard.png`,
        alt: 'HabitZen dashboard with today\'s habits',
        label: 'Dashboard',
        theme: 'light',
      },
      {
        src: `${base}/habitizen/screen-create.png`,
        alt: 'Create new habit with tracking type selection',
        label: 'Create',
        theme: 'light',
      },
      {
        src: `${base}/habitizen/screen-tracking.png`,
        alt: 'Time tracking for meditation habit',
        label: 'Tracking',
        theme: 'light',
      },
      {
        src: `${base}/habitizen/screen-streaks.png`,
        alt: 'Streak visualization and progress',
        label: 'Streaks',
        theme: 'light',
      },
      {
        src: `${base}/habitizen/screen-reminders.png`,
        alt: 'Reminder settings with up to 10 notifications',
        label: 'Reminders',
        theme: 'light',
      },
      {
        src: `${base}/habitizen/screen-settings.png`,
        alt: 'App settings and preferences',
        label: 'Settings',
        theme: 'light',
      },
    ],
    floatingScreenshots: [0, 2, 3],
  },
  {
    id: 'habitica',
    name: 'Habitica Habits',
    slug: 'habitica',
    category: 'Habit Tracker · iOS',
    tagline: 'Habit Tracker',
    shortDescription:
      'Track habits, streaks, and goals privately on your device. Live on the App Store.',
    description:
      'Build better habits, track streaks, and see your progress at a glance — with a beautiful mobile experience in light and dark mode. Local-first: your data stays on your device.',
    status: STATUS.RELEASED,
    progress: 100,
    platforms: ['iOS'],
    logo: '/images/habitica/app-icon.png',
    logoType: 'image',
    theme: 'orange',
    badge: 'Live on App Store',
    lastUpdated: '2026-09-14',
    iosUrl: 'https://apps.apple.com/us/app/habitica-habits/id6774765632',
    androidUrl: '',
    websiteUrl: '',
    features: [
      { icon: '🔥', title: 'Streaks', description: 'Stay on track with visual streak lines' },
      { icon: '📊', title: 'Stats & Insights', description: 'Powerful analytics and completion rates' },
      { icon: '📅', title: 'Daily Habits', description: 'Calendar heatmaps and weekly views' },
      { icon: '🏆', title: 'Consistency', description: 'Top performers and momentum at a glance' },
    ],
    highlights: [],
    heroBanner: '/images/habitica/hero-transform.png',
    heroAlt: '/images/habitica/hero-promises.png',
    gallerySubtitle:
      'Light & dark themes — dashboard, stats, calendar, and weekly insights',
    screenshots: [
      {
        src: '/images/habitica/screen-dashboard-light.png',
        alt: 'Habitica Habits dashboard — light mode with today\'s habits and streak counter',
        label: 'Dashboard',
        theme: 'light',
      },
      {
        src: '/images/habitica/screen-stats-light.png',
        alt: 'Habitica Habits stats screen — light mode calendar and completion rings',
        label: 'Stats',
        theme: 'light',
      },
      {
        src: '/images/habitica/screen-dashboard-dark.png',
        alt: 'Habitica Habits dashboard — dark mode habit cards',
        label: 'Dashboard',
        theme: 'dark',
      },
      {
        src: '/images/habitica/screen-stats-dark.png',
        alt: 'Habitica Habits stats — dark mode with teal accent calendar',
        label: 'Stats',
        theme: 'dark',
      },
      {
        src: '/images/habitica/screen-calendar-dark.png',
        alt: 'Habitica Habits calendar view — streak visualization and metrics',
        label: 'Calendar',
        theme: 'dark',
      },
      {
        src: '/images/habitica/screen-stats-weekly.png',
        alt: 'Habitica Habits weekly activity and top performers',
        label: 'Weekly',
        theme: 'dark',
      },
      {
        src: '/images/habitica/screen-calendar-light.png',
        alt: 'Habitica Habits calendar — light mode progress rings',
        label: 'Calendar',
        theme: 'light',
      },
    ],
    floatingScreenshots: [0, 3, 5],
    privacyUrl: '/apps/habitica/privacy',
    termsUrl: '/apps/habitica/terms',
  },
  {
    id: 'capgen',
    name: 'CapGen',
    slug: 'capgen',
    category: 'AI Caption Generator · iOS',
    tagline: 'AI Caption Generator',
    shortDescription:
      'AI-powered social captions for Instagram, TikTok, LinkedIn & X — multiple tones, languages, and instant copy.',
    description:
      'Studio-grade AI captions for Instagram, TikTok, LinkedIn, and X — choose your tone, platform, and language, then copy scroll-stopping captions in seconds.',
    status: STATUS.RELEASED,
    progress: 100,
    platforms: ['iOS'],
    logo: '/images/capgen/app-icon.png',
    logoType: 'image',
    theme: 'purple',
    badge: 'Live on App Store',
    lastUpdated: '2026-06-04',
    iosUrl: 'https://apps.apple.com/us/app/capgen-ai-caption-generator/id6762161529',
    androidUrl: '',
    websiteUrl: '',
    features: [
      { icon: '✨', title: 'AI-Powered', description: '2 unique caption ideas in seconds' },
      { icon: '✏️', title: 'Tailored to You', description: 'Topic, tone & platform matched' },
      { icon: '🚀', title: 'Boost Engagement', description: 'Hooks, hashtags & CTAs built in' },
      { icon: '🌐', title: 'Multi-Language', description: 'English, Spanish, Chinese & more' },
    ],
    highlights: [],
    heroBanner: '/images/capgen/hero-impact.png',
    heroAlt: '/images/capgen/hero-flow.png',
    gallerySubtitle:
      'Splash, home, style picker, generated captions, premium plans, and settings',
    screenshots: [
      {
        src: '/images/capgen/screen-splash.png',
        alt: 'CapGen splash screen — Caption intelligence for creators',
        label: 'Welcome',
        theme: 'dark',
      },
      {
        src: '/images/capgen/screen-home.png',
        alt: 'CapGen home — enter topic and select platform',
        label: 'Create',
        theme: 'dark',
      },
      {
        src: '/images/capgen/screen-style.png',
        alt: 'CapGen style and platform picker — Instagram, TikTok, tone, language',
        label: 'Customize',
        theme: 'dark',
      },
      {
        src: '/images/capgen/screen-captions.png',
        alt: 'CapGen generated captions with hashtags ready to copy',
        label: 'Captions',
        theme: 'dark',
      },
      {
        src: '/images/capgen/screen-premium.png',
        alt: 'CapGen premium subscription plans',
        label: 'Premium',
        theme: 'dark',
      },
      {
        src: '/images/capgen/screen-settings.png',
        alt: 'CapGen settings and subscription management',
        label: 'Settings',
        theme: 'dark',
      },
    ],
    floatingScreenshots: [0, 2, 4],
    privacyUrl: '/apps/capgen/privacy',
    termsUrl: '/apps/capgen/terms',
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug) {
  return productsData.find((p) => p.slug === slug);
}

// Helper function to group products by status
export function getProductsByStatus() {
  const grouped = {
    [STATUS.RELEASED]: [],
    [STATUS.ONGOING]: [],
    [STATUS.IN_PLANNING]: [],
  };
  
  productsData.forEach((product) => {
    if (grouped[product.status]) {
      grouped[product.status].push(product);
    }
  });
  
  return grouped;
}

// Maintain backward compatibility with old products.js format
export const products = productsData.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category,
  description: p.shortDescription,
  status: p.status === STATUS.RELEASED ? 'Live' : p.status === STATUS.ONGOING ? 'Launching Soon' : 'Planning',
  progress: p.progress,
  platforms: p.platforms,
  logo: p.logo,
  logoType: p.logoType,
  showcaseId: p.slug,
  iosUrl: p.iosUrl,
  androidUrl: p.androidUrl,
  websiteUrl: p.websiteUrl,
  lastUpdated: p.lastUpdated,
}));
