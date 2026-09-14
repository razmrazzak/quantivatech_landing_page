const base = '/images/expense';

export const expenseShowcase = {
  id: 'expense',
  name: 'Expense - AI Tracker',
  tagline: 'AI Expense & Income Tracking',
  status: 'Launching Soon',
  progress: 95,
  theme: 'cyan',
  badge: 'Latest Project',
  description:
    'Scan receipts, invoices, and bank statements — AI extracts merchant, date, amount, and more. Track personal and business finances, then export PDF or CSV when you need it.',
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
  appIcon: `${base}/app-icon.jpg`,
  gallerySubtitle:
    'Welcome, tracking mode, AI tour, reports, past months, and settings',
  screenshots: [
    {
      src: `${base}/screen-welcome.png`,
      alt: 'Expense - AI Tracker welcome screen',
      label: 'Welcome',
      theme: 'light',
    },
    {
      src: `${base}/screen-mode.png`,
      alt: 'Choose personal, business, or both tracking modes',
      label: 'Modes',
      theme: 'light',
    },
    {
      src: `${base}/screen-tour.png`,
      alt: 'How it helps — AI scan, statements, categories, and export',
      label: 'Tour',
      theme: 'light',
    },
    {
      src: `${base}/screen-reports.png`,
      alt: 'Reports — daily spending and spending by category',
      label: 'Reports',
      theme: 'light',
    },
    {
      src: `${base}/screen-past-months.png`,
      alt: 'Past months — expenses, income, and category charts',
      label: 'History',
      theme: 'light',
    },
    {
      src: `${base}/screen-settings.png`,
      alt: 'Settings — subscription, language, currency, and tracking mode',
      label: 'Settings',
      theme: 'light',
    },
  ],
  iosUrl: '',
  androidUrl: '',
  websiteUrl: '',
  floatingScreenshots: [0, 3, 5],
};
