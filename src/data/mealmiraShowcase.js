const base = '/images/mealmira';

export const mealmiraShowcase = {
  id: 'mealmira',
  name: 'MealMira',
  tagline: 'Snap meals. Feel good.',
  status: 'Launching Soon',
  progress: 85,
  theme: 'orange',
  badge: 'New Project',
  description:
    'Pick a goal, snap your plate, and see your day clearly — calories, protein, and gentle progress without the guilt.',
  features: [
    { icon: '🎯', title: 'Your Goal', description: 'Lose, maintain, build, or GLP-1' },
    { icon: '📷', title: 'Snap Plate', description: 'Food logged from a photo' },
    { icon: '📅', title: 'Today View', description: 'Meals and macros at a glance' },
    { icon: '💛', title: 'Good Days', description: 'Progress without perfection' },
  ],
  highlights: [
    {
      title: 'Snap your plate',
      body: 'Point the camera, tap, and review calories and protein — edit anything before you save.',
    },
    {
      title: 'Your day, calmly',
      body: 'Breakfast through dinner in one place, with protein progress and what’s left for today.',
    },
    {
      title: 'Good days, not perfect days',
      body: 'Track a gentle rhythm with golden rings — no red marks, no guilt.',
    },
  ],
  heroBanner: '',
  heroAlt: '',
  appIcon: `${base}/app-icon.png`,
  gallerySubtitle: 'Onboarding, snap, today, diary, progress, GLP-1, and eat-out invites',
  screenshots: [
    {
      src: `${base}/01-onboarding-goal.png`,
      alt: 'MealMira onboarding — pick your goal',
      label: 'Goal',
      theme: 'light',
    },
    {
      src: `${base}/02-onboarding-plan.png`,
      alt: 'MealMira daily plan with calories and macros',
      label: 'Plan',
      theme: 'light',
    },
    {
      src: `${base}/03-camera-snap.png`,
      alt: 'MealMira camera — snap your meal',
      label: 'Snap',
      theme: 'light',
    },
    {
      src: `${base}/04-snap-result.png`,
      alt: 'MealMira snap result with items and calories',
      label: 'Result',
      theme: 'light',
    },
    {
      src: `${base}/05-today.png`,
      alt: 'MealMira today view with meals and protein',
      label: 'Today',
      theme: 'light',
    },
    {
      src: `${base}/08-progress.png`,
      alt: 'MealMira progress — good days calendar',
      label: 'Progress',
      theme: 'light',
    },
    {
      src: `${base}/10-glp1.png`,
      alt: 'MealMira GLP-1 mode — protein first, injection log, and how you feel',
      label: 'GLP-1',
      theme: 'light',
    },
    {
      src: `${base}/15-eatout-invite-rsvp.png`,
      alt: 'MealMira eat-out invitation — venue, map, and who’s going',
      label: 'Eat out',
      theme: 'light',
    },
    {
      src: `${base}/16-eatout-going.png`,
      alt: 'MealMira eat-out RSVP — you’re going confirmation',
      label: 'RSVP',
      theme: 'light',
    },
  ],
  iosUrl: '',
  androidUrl: '',
  websiteUrl: '',
  floatingScreenshots: [0, 2, 4],
};
