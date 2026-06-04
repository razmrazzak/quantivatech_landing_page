const base = '/images/capgen';

const APP_STORE_URL =
  'https://apps.apple.com/us/app/capgen-ai-caption-generator/id6762161529';

export const capgenShowcase = {
  id: 'capgen',
  name: 'CapGen',
  tagline: 'AI Caption Generator',
  status: 'Live',
  progress: 100,
  theme: 'purple',
  badge: 'Live on App Store',
  description:
    'Studio-grade AI captions for Instagram, TikTok, LinkedIn, and X — choose your tone, platform, and language, then copy scroll-stopping captions in seconds.',
  features: [
    { icon: '✨', title: 'AI-Powered', description: '2 unique caption ideas in seconds' },
    { icon: '✏️', title: 'Tailored to You', description: 'Topic, tone & platform matched' },
    { icon: '🚀', title: 'Boost Engagement', description: 'Hooks, hashtags & CTAs built in' },
    { icon: '🌐', title: 'Multi-Language', description: 'English, Spanish, Chinese & more' },
  ],
  heroBanner: `${base}/hero-impact.png`,
  heroAlt: `${base}/hero-flow.png`,
  appIcon: `${base}/app-icon.png`,
  gallerySubtitle:
    'Splash, home, style picker, generated captions, premium plans, and settings',
  iosUrl: APP_STORE_URL,
  androidUrl: '',
  websiteUrl: '',
  screenshots: [
    {
      src: `${base}/screen-splash.png`,
      alt: 'CapGen splash screen — Caption intelligence for creators',
      label: 'Welcome',
      theme: 'dark',
    },
    {
      src: `${base}/screen-home.png`,
      alt: 'CapGen home — enter topic and select platform',
      label: 'Create',
      theme: 'dark',
    },
    {
      src: `${base}/screen-style.png`,
      alt: 'CapGen style and platform picker — Instagram, TikTok, tone, language',
      label: 'Customize',
      theme: 'dark',
    },
    {
      src: `${base}/screen-captions.png`,
      alt: 'CapGen generated captions with hashtags ready to copy',
      label: 'Captions',
      theme: 'dark',
    },
    {
      src: `${base}/screen-premium.png`,
      alt: 'CapGen premium subscription plans',
      label: 'Premium',
      theme: 'dark',
    },
    {
      src: `${base}/screen-settings.png`,
      alt: 'CapGen settings and subscription management',
      label: 'Settings',
      theme: 'dark',
    },
  ],
  floatingScreenshots: [0, 2, 4],
};
