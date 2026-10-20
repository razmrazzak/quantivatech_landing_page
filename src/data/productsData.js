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
    /** Marketing layout: workflow = Easy Expense–style explainable page */
    layout: 'workflow',
    heroHeadline: 'Never lose another receipt',
    heroSupport:
      'Snap a receipt, invoice, or statement. AI fills in the details — then track personal and business spending in one place.',
    /**
     * YouTube video ID for hero autoplay (muted). Example: 'dQw4w9WgXcQ'
     * Leave empty until you have a demo video — hero falls back to screenshots.
     */
    youtubeVideoId: '',
    youtubeTitle: 'See how Expense - AI Tracker works',
    workflowIntroTitle: "It's fast and simple",
    workflowIntroBody: 'Four steps from receipt to report — no spreadsheet chaos.',
    ctaTitle: 'Ready to track with Expense - AI Tracker?',
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
    workflowSteps: [
      {
        step: '01',
        title: 'Scan',
        body: 'Photograph a receipt or upload a PDF statement. Smart capture keeps the document clear and ready for AI.',
      },
      {
        step: '02',
        title: 'Extract',
        body: 'AI reads merchant, date, amount, currency, VAT, and line items — then shows you everything to review.',
      },
      {
        step: '03',
        title: 'Organize',
        body: 'Save as personal or business, auto-categorize, and keep income and expenses in one timeline.',
      },
      {
        step: '04',
        title: 'Export',
        body: 'Need records for taxes or reimbursement? Download PDF or CSV reports whenever you need them.',
      },
    ],
    featureSections: [
      {
        title: 'Receipt tracking made simple',
        body: 'Turn paper and PDF documents into structured transactions in seconds.',
        bullets: [
          'AI labels merchant, total, tax, date, and currency',
          'Review and edit before you save',
          'Works with receipts, invoices, and bank statements',
        ],
        image: '/images/expense/screen-tour.png',
        imageAlt: 'AI scan tour in Expense - AI Tracker',
      },
      {
        title: 'Personal & business in one app',
        body: 'Keep household and business finances separate without juggling multiple tools.',
        bullets: [
          'Choose personal, business, or both tracking modes',
          'AI suggests personal vs business when you scan',
          'Switch views when you need a clear picture',
        ],
        image: '/images/expense/screen-mode.png',
        imageAlt: 'Tracking mode selection',
        reverse: true,
      },
      {
        title: 'See where money goes',
        body: 'Dashboards and category charts make spending patterns obvious at a glance.',
        bullets: [
          'Daily and monthly spending views',
          'Category breakdowns that update as you add entries',
          'Past months available when you need history',
        ],
        image: '/images/expense/screen-reports.png',
        imageAlt: 'Reports and spending by category',
      },
      {
        title: 'Export when you need proof',
        body: 'Share clean reports for taxes, clients, or your own records.',
        bullets: [
          'PDF expense reports',
          'CSV export for spreadsheets',
          'Your data stays under your control',
        ],
        image: '/images/expense/screen-past-months.png',
        imageAlt: 'Past months history view',
        reverse: true,
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
    id: 'habitzen',
    name: 'HabitZen',
    slug: 'habitzen',
    category: 'Habit Tracker · Mobile App',
    tagline: 'Privacy-First Habit Tracking',
    shortDescription:
      'Build lasting habits with time tracking, streaks, and reminders — your data stays on your device.',
    description:
      'Transform your daily routines into lasting habits. Track time-based activities, tick-list habits, or quantity goals like water intake. Set up to 10 reminders per habit and watch your streaks grow. Privacy-first: all data stays on your phone.',
    status: STATUS.ONGOING, // TODO: Confirm with owner - update to Released when live
    progress: 85, // TODO: Update progress percentage
    platforms: ['iOS', 'Android'],
    logo: `${base}/habitzen/app-icon.png`,
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
        src: `${base}/habitzen/screen-dashboard.png`,
        alt: 'HabitZen dashboard with today\'s habits',
        label: 'Dashboard',
        theme: 'light',
      },
      {
        src: `${base}/habitzen/screen-create.png`,
        alt: 'Create new habit with tracking type selection',
        label: 'Create',
        theme: 'light',
      },
      {
        src: `${base}/habitzen/screen-tracking.png`,
        alt: 'Time tracking for meditation habit',
        label: 'Tracking',
        theme: 'light',
      },
      {
        src: `${base}/habitzen/screen-streaks.png`,
        alt: 'Streak visualization and progress',
        label: 'Streaks',
        theme: 'light',
      },
      {
        src: `${base}/habitzen/screen-reminders.png`,
        alt: 'Reminder settings with up to 10 notifications',
        label: 'Reminders',
        theme: 'light',
      },
      {
        src: `${base}/habitzen/screen-settings.png`,
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
    layout: 'workflow',
    heroHeadline: 'Build habits that actually stick',
    heroSupport:
      'Track daily habits, grow your streaks, and see your progress clearly — privately on your device, in light or dark mode.',
    youtubeVideoId: '',
    youtubeTitle: 'See how Habitica Habits works',
    workflowIntroTitle: "It's fast and simple",
    workflowIntroBody: 'Four clear steps from today’s list to lasting consistency.',
    ctaTitle: 'Ready to build better habits?',
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
    workflowSteps: [
      {
        step: '01',
        title: 'Add',
        body: 'Create the habits you care about — morning routines, workouts, reading, or anything you want to keep.',
      },
      {
        step: '02',
        title: 'Check in',
        body: 'Mark habits done as you go. Your dashboard keeps today clear and focused.',
      },
      {
        step: '03',
        title: 'Streak',
        body: 'Watch streaks grow and stay motivated with visual progress that rewards consistency.',
      },
      {
        step: '04',
        title: 'Review',
        body: 'Open stats, calendars, and weekly insights to see what’s working — and what needs attention.',
      },
    ],
    featureSections: [
      {
        title: 'Your day, organized',
        body: 'A clean dashboard shows today’s habits so you always know what matters right now.',
        bullets: [
          'Today’s habit list at a glance',
          'Quick check-ins that stay out of your way',
          'Beautiful light and dark themes',
        ],
        image: '/images/habitica/screen-dashboard-light.png',
        imageAlt: 'Habitica Habits dashboard in light mode',
      },
      {
        title: 'Streaks that keep you going',
        body: 'Visual streak lines and progress make consistency feel rewarding — not forced.',
        bullets: [
          'See streaks grow day by day',
          'Spot momentum before it fades',
          'Celebrate consistency without noise',
        ],
        image: '/images/habitica/screen-dashboard-dark.png',
        imageAlt: 'Habitica Habits dashboard in dark mode',
        reverse: true,
      },
      {
        title: 'Stats & insights that make sense',
        body: 'Completion rates, calendars, and rings help you understand your habits — not just count them.',
        bullets: [
          'Calendar heatmaps for the big picture',
          'Completion rings and clear metrics',
          'Weekly activity when you want a deeper look',
        ],
        image: '/images/habitica/screen-stats-light.png',
        imageAlt: 'Habitica Habits stats and calendar',
      },
      {
        title: 'Private by design',
        body: 'Local-first tracking means your habit data stays on your device — no account required for your progress.',
        bullets: [
          'Your data stays on your phone',
          'No cloud profile needed to track habits',
          'Focus on building habits, not sharing them',
        ],
        image: '/images/habitica/screen-calendar-dark.png',
        imageAlt: 'Habitica Habits calendar and streak view',
        reverse: true,
      },
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
