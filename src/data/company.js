import { legalAppList } from './legal';

export const metrics = [
  { label: 'Products Built', value: '12+' },
  { label: 'Active Users', value: '5K+' },
  { label: 'Apps Launched', value: '8' },
  { label: 'Years Experience', value: '6+' },
];

export const techStack = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  Backend: ['Node.js', 'Express'],
  Database: ['MongoDB', 'Firebase'],
  Cloud: ['AWS', 'Render', 'Docker', 'Kubernetes'],
  AI: ['OpenAI', 'Claude', 'Gemini'],
};

export const buildingInPublic = [
  {
    id: 4,
    name: 'Expense - AI Tracker',
    estimatedLaunch: 'Q4 2026',
    progress: 95,
    milestones: [
      { name: 'Idea', completed: true, date: 'Mar 2026' },
      { name: 'Design', completed: true, date: 'May 2026' },
      { name: 'Development', completed: true, date: 'Aug 2026' },
      { name: 'Testing', completed: true, date: 'Sep 2026' },
      { name: 'Launch', completed: false, date: 'Oct 2026' },
    ],
  },
  {
    id: 1,
    name: 'Habitica Habits',
    estimatedLaunch: 'Live on iOS',
    progress: 100,
    milestones: [
      { name: 'Idea', completed: true, date: 'Jan 2025' },
      { name: 'Design', completed: true, date: 'Mar 2025' },
      { name: 'Development', completed: true, date: 'Aug 2025' },
      { name: 'Testing', completed: true, date: 'Jun 2026' },
      { name: 'Launch', completed: true, date: 'Sep 2026' },
    ],
  },
  {
    id: 2,
    name: 'AI Trip Planner',
    estimatedLaunch: 'Q4 2026',
    progress: 60,
    milestones: [
      { name: 'Idea', completed: true, date: 'Feb 2026' },
      { name: 'Design', completed: true, date: 'Apr 2026' },
      { name: 'Development', completed: false, date: 'Sep 2026' },
      { name: 'Testing', completed: false, date: 'Nov 2026' },
      { name: 'Launch', completed: false, date: 'Dec 2026' },
    ],
  },
  {
    id: 3,
    name: 'Food Delivery Platform',
    estimatedLaunch: 'Q1 2027',
    progress: 40,
    milestones: [
      { name: 'Idea', completed: true, date: 'Nov 2025' },
      { name: 'Design', completed: false, date: 'Jul 2026' },
      { name: 'Development', completed: false, date: 'Dec 2026' },
      { name: 'Testing', completed: false, date: 'Feb 2027' },
      { name: 'Launch', completed: false, date: 'Mar 2027' },
    ],
  },
];

export const founder = {
  name: 'Mohamed Razmy Abdul Razzak',
  role: 'Independent Developer · Quantiva Tech brand',
  expertise: [
    'Technical Lead',
    'Mobility Engineering',
    'Cloud & DevOps',
    'AI Product Builder',
  ],
  bio: 'I publish apps and software under the Quantiva Tech brand — combining mobile engineering, cloud infrastructure, and AI to ship products that solve real problems.',
};

export const contact = {
  email: 'razmyrazzak@outlook.com',
  linkedin: 'https://linkedin.com/in/mohamed-razmy-abdul-razzak',
  github: 'https://github.com/quantivatech',
  upwork: 'https://upwork.com/freelancers/quantivatech',
};

export const navLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'Expense', href: '/#expense' },
  { label: 'Habitica', href: '/#habitica' },
  { label: 'CapGen', href: '/#capgen' },
  { label: 'Roadmap', href: '/#building-in-public' },
  { label: 'Stack', href: '/#tech-stack' },
  { label: 'About', href: '/#about' },
];

/** Full labels for mobile menu */
export const mobileNavLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'Expense - AI Tracker', href: '/#expense' },
  { label: 'Habitica Habits', href: '/#habitica' },
  { label: 'CapGen', href: '/#capgen' },
  { label: 'Building in Public', href: '/#building-in-public' },
  { label: 'Tech Stack', href: '/#tech-stack' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const footerLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

/** Per-app legal links for footer */
export const footerLegalApps = legalAppList
  .filter((app) => app.id !== 'quantivatech')
  .map((app) => ({
    id: app.id,
    name: app.name,
    privacyHref: `/apps/${app.id}/privacy`,
    termsHref: `/apps/${app.id}/terms`,
  }));
