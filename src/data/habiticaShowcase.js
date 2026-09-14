const base = '/images/habitica';

const APP_STORE_URL = 'https://apps.apple.com/us/app/habitica-habits/id6774765632';

export const habiticaShowcase = {
  id: 'habitica',
  name: 'Habitica Habits',
  tagline: 'Habit Tracker',
  status: 'Live',
  progress: 100,
  theme: 'orange',
  badge: 'Live on App Store',
  gallerySubtitle:
    'Light & dark themes — dashboard, stats, calendar, and weekly insights',
  description:
    'Build better habits, track streaks, and see your progress at a glance — with a beautiful mobile experience in light and dark mode. Local-first: your data stays on your device.',
  features: [
    { icon: '🔥', title: 'Streaks', description: 'Stay on track with visual streak lines' },
    { icon: '📊', title: 'Stats & Insights', description: 'Powerful analytics and completion rates' },
    { icon: '📅', title: 'Daily Habits', description: 'Calendar heatmaps and weekly views' },
    { icon: '🏆', title: 'Consistency', description: 'Top performers and momentum at a glance' },
  ],
  heroBanner: `${base}/hero-transform.png`,
  heroAlt: `${base}/hero-promises.png`,
  appIcon: `${base}/app-icon.png`,
  screenshots: [
    {
      src: `${base}/screen-dashboard-light.png`,
      alt: 'Habitica Habits dashboard — light mode with today\'s habits and streak counter',
      label: 'Dashboard',
      theme: 'light',
    },
    {
      src: `${base}/screen-stats-light.png`,
      alt: 'Habitica Habits stats screen — light mode calendar and completion rings',
      label: 'Stats',
      theme: 'light',
    },
    {
      src: `${base}/screen-dashboard-dark.png`,
      alt: 'Habitica Habits dashboard — dark mode habit cards',
      label: 'Dashboard',
      theme: 'dark',
    },
    {
      src: `${base}/screen-stats-dark.png`,
      alt: 'Habitica Habits stats — dark mode with teal accent calendar',
      label: 'Stats',
      theme: 'dark',
    },
    {
      src: `${base}/screen-calendar-dark.png`,
      alt: 'Habitica Habits calendar view — streak visualization and metrics',
      label: 'Calendar',
      theme: 'dark',
    },
    {
      src: `${base}/screen-stats-weekly.png`,
      alt: 'Habitica Habits weekly activity and top performers',
      label: 'Weekly',
      theme: 'dark',
    },
    {
      src: `${base}/screen-calendar-light.png`,
      alt: 'Habitica Habits calendar — light mode progress rings',
      label: 'Calendar',
      theme: 'light',
    },
  ],
  iosUrl: APP_STORE_URL,
  androidUrl: '',
  websiteUrl: '',
  floatingScreenshots: [0, 3, 5],
};
