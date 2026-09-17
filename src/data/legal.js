import { brand } from './brand';
import { habiticaPrivacySections, HABITICA_APP_NAME } from './legal/habiticaPrivacy';
import { habiticaTermsSections } from './legal/habiticaTerms';
import {
  EXPENSE_APP_NAME,
  expensePrivacySections,
  expenseTermsSections,
} from './legal/expenseLegal';

const { name: brandName, developerName, legalNotice, websiteContactEmail } = brand;

/**
 * Legal documents per app. Add new apps here when shipping products.
 * externalUrl: canonical policy hosted by the app (optional)
 */
export const legalApps = {
  quantivatech: {
    id: 'quantivatech',
    name: brandName,
    tagline: 'Brand website · Independent developer',
    appIcon: null,
    contactEmail: websiteContactEmail,
    lastUpdated: '2026-06-04',
    privacy: {
      externalUrl: null,
      sections: [
        {
          title: 'Introduction',
          body: `${legalNotice} This policy explains how ${developerName} ("I", "me") handles information when you visit this marketing website or contact me through the ${brandName} brand.`,
        },
        {
          title: 'Information We Collect',
          body: 'We may collect information you voluntarily provide (such as name and email when you contact us). This static site does not require account registration. Hosting providers may collect standard server logs (IP address, browser type, pages visited).',
        },
        {
          title: 'How We Use Information',
          body: 'We use contact details only to respond to inquiries, discuss projects, and improve our services. We do not sell your personal information.',
        },
        {
          title: 'Cookies & Analytics',
          body: 'We minimize tracking. If analytics are enabled at deploy time (e.g. privacy-friendly analytics), you may opt out via your browser settings or Do Not Track where supported.',
        },
        {
          title: 'Third-Party Links',
          body: 'Our site links to external services (App Store, LinkedIn, GitHub, Upwork, and individual app policy pages). Those services have their own privacy practices.',
        },
        {
          title: 'Contact',
          body: `For privacy questions, email ${websiteContactEmail}.`,
        },
      ],
    },
    terms: {
      externalUrl: null,
      sections: [
        {
          title: 'Agreement',
          body: `By using this ${brandName} website, you agree to these Terms. If you do not agree, please do not use the site.`,
        },
        {
          title: 'Brand & Developer',
          body: legalNotice,
        },
        {
          title: 'Website Content',
          body: 'Product descriptions, roadmaps, timelines, and metrics on this site are for informational purposes and may change without notice. Nothing on this site constitutes a binding offer unless agreed in a separate written contract between you and the developer.',
        },
        {
          title: 'Intellectual Property',
          body: `Site content, branding, and product names are owned by ${developerName} (operating as ${brandName}) or respective rights holders. You may not copy or redistribute materials without permission.`,
        },
        {
          title: 'Limitation of Liability',
          body: `The site is provided "as is". ${developerName} is not liable for indirect damages arising from use of this website or reliance on published information, to the maximum extent permitted by law.`,
        },
        {
          title: 'App-Specific Terms',
          body: 'Each mobile or SaaS product published under this brand has its own Terms and Privacy Policy. See the Legal section in the footer for app-specific documents.',
        },
        {
          title: 'Contact',
          body: `Questions about these Terms: ${websiteContactEmail}.`,
        },
      ],
    },
  },
  capgen: {
    id: 'capgen',
    name: 'CapGen',
    tagline: 'AI Caption Generator',
    appIcon: '/images/capgen/app-icon.png',
    contactEmail: websiteContactEmail,
    lastUpdated: '2026-06-04',
    privacy: {
      externalUrl: 'https://caption-gen-api.onrender.com/privacy',
      sections: [
        {
          title: 'Overview',
          body: `CapGen: AI Caption Generator is developed by ${developerName} under the ${brandName} brand. This summary describes how the CapGen mobile app handles your information.`,
        },
        {
          title: 'Data We Collect',
          body: 'The app may collect user content you submit to generate captions (topics, preferences) and diagnostic data (crash logs, performance) to improve stability. Data collected for app functionality is not linked to your identity for advertising purposes, as described in the App Store privacy label.',
        },
        {
          title: 'How We Use Data',
          body: 'Submitted topics and settings are used to generate AI captions. Diagnostics help us fix bugs and improve performance. We do not sell personal data.',
        },
        {
          title: 'AI-Generated Content',
          body: 'Captions are produced by AI models. You are responsible for reviewing content before publishing to social platforms.',
        },
        {
          title: 'Subscriptions',
          body: 'Premium purchases are processed by Apple. Payment and subscription management follow Apple\'s terms and privacy policy.',
        },
        {
          title: 'Full Policy',
          body: 'The canonical privacy policy for CapGen is maintained at the link below and may be updated independently of this summary.',
        },
      ],
    },
    terms: {
      externalUrl: 'https://caption-gen-api.onrender.com/terms',
      sections: [
        {
          title: 'Acceptance',
          body: 'By downloading or using CapGen, you agree to these Terms. If you disagree, do not use the app.',
        },
        {
          title: 'Service Description',
          body: 'CapGen provides AI-assisted caption suggestions for social media. Generated text may vary and should be reviewed before you post.',
        },
        {
          title: 'Subscriptions & Billing',
          body: 'Premium features are available via in-app purchase (Daily, Weekly, Monthly, Annual plans). Billing is handled by Apple. Refunds follow Apple App Store policies.',
        },
        {
          title: 'Acceptable Use',
          body: 'You agree not to misuse the app, attempt unauthorized access, or use generated content for unlawful purposes.',
        },
        {
          title: 'Disclaimer',
          body: 'CapGen is provided "as is" without warranties. We are not liable for engagement outcomes or platform policy violations resulting from your posts.',
        },
        {
          title: 'Full Terms',
          body: 'The canonical terms of service for CapGen are maintained at the link below.',
        },
      ],
    },
  },
  habitica: {
    id: 'habitica',
    name: HABITICA_APP_NAME,
    tagline: 'Habit Tracker',
    appIcon: '/images/habitica/app-icon.png',
    contactEmail: 'razmyrazzak@outlook.com',
    lastUpdated: '2026-06-01',
    privacy: {
      externalUrl: null,
      effectiveDate: 'June 2026',
      sections: habiticaPrivacySections,
    },
    terms: {
      externalUrl: null,
      effectiveDate: 'June 2026',
      lastUpdated: 'June 2026',
      sections: habiticaTermsSections,
    },
  },
  expense: {
    id: 'expense',
    name: EXPENSE_APP_NAME,
    tagline: 'AI Expense & Income Tracking',
    appIcon: '/images/expense/app-icon.jpg',
    contactEmail: websiteContactEmail,
    lastUpdated: '2026-09-18',
    privacy: {
      externalUrl: null,
      effectiveDate: '18 September 2026',
      lastUpdated: '18 September 2026',
      sections: expensePrivacySections,
    },
    terms: {
      externalUrl: null,
      effectiveDate: '18 September 2026',
      lastUpdated: '18 September 2026',
      sections: expenseTermsSections,
    },
  },
};

export const legalAppList = Object.values(legalApps);

export function getLegalApp(appId) {
  return legalApps[appId] ?? null;
}
