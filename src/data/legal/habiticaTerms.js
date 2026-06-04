import { HABITICA_APP_NAME } from './habiticaPrivacy';

export const habiticaTermsSections = [
  {
    title: '1. Introduction',
    body: `These Terms and Conditions ("Terms") govern your use of the ${HABITICA_APP_NAME} mobile application ("App") and related services provided by the App Developer ("we", "us", or "our").

By downloading, installing, accessing, or using the App, you agree to these Terms. If you do not agree to these Terms, do not use the App.

Developer: Mohamed Razmy Abdul Razzak
Email: razmyrazzak@outlook.com`,
  },
  {
    title: '2. About the App',
    body: `${HABITICA_APP_NAME} is a habit tracking application designed to help users build routines and stay consistent through:`,
    list: [
      'Check habits (once-per-day completion tracking)',
      'Time goals with built-in timers',
      'Amount goals with daily targets',
      'Streaks, statistics, insights, and progress tracking',
      'Custom schedules and rest days',
      'Local reminders and notifications',
      'Habit archiving and restoration',
      'Data export and import (Premium feature)',
      'Light and dark themes',
      'English and German language support',
    ],
    bodyAfterList:
      'The App is designed to work primarily on your device. No account is required and there is currently no cloud synchronization service.',
  },
  {
    title: '3. Eligibility',
    body: 'You must be at least 13 years old (or the minimum age required in your jurisdiction) to use the App. If you are under the age of majority where you live, you may use the App only with permission from a parent or legal guardian. You are responsible for ensuring your use of the App complies with applicable laws.',
  },
  {
    title: '4. License and Acceptable Use',
    subsections: [
      {
        title: '4.1 License',
        body: 'We grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App for personal, non-commercial use on devices you own or control.',
      },
      {
        title: '4.2 Restrictions',
        body: 'You agree not to:',
        list: [
          'Copy, modify, distribute, sell, or lease any part of the App except as permitted by law.',
          'Reverse engineer, decompile, or attempt to extract source code except where permitted by law.',
          'Use the App for unlawful, harmful, fraudulent, or abusive purposes.',
          'Interfere with the operation or security of the App.',
        ],
      },
      {
        title: '4.3 User Content',
        body: 'You may enter habit names, notes, goals, descriptions, and related information ("User Content"). You retain ownership of your User Content and are solely responsible for it.',
      },
    ],
  },
  {
    title: '5. Not Medical, Health, Legal, or Professional Advice',
    body: `${HABITICA_APP_NAME} is not a medical device and does not provide medical, health, legal, financial, or professional advice. The App is intended solely for personal organization, habit tracking, productivity, and self-improvement purposes.`,
    list: [
      'Do not rely on the App for medication dosing, medical treatment, emergency alerts, health monitoring, legal compliance, or safety-critical notifications.',
      'Always consult qualified professionals regarding health-related decisions.',
      'The App does not monitor, diagnose, treat, cure, or prevent any medical condition.',
      'You use the App and its reminders at your own risk.',
    ],
  },
  {
    title: '6. Free and Premium Services',
    subsections: [
      {
        title: '6.1 Free Plan',
        body: 'The free version may include:',
        list: [
          'Up to 3 active habits',
          'Core habit tracking functionality',
          'Basic reminders',
          'Basic statistics',
          'Ember theme',
        ],
        bodyAfterList: 'Features available in the free version may change over time.',
      },
      {
        title: '6.2 Premium',
        body: 'Premium may be offered as Monthly Subscription, Yearly Subscription, or Lifetime Purchase. Prices and availability are displayed at purchase time through Apple App Store or Google Play Store. Premium features may include:',
        list: [
          'Unlimited habits',
          'All premium themes',
          'Export and import functionality',
          'Advanced reminders',
          'Additional premium features introduced in future updates',
        ],
      },
      {
        title: '6.3 Billing and Renewals',
        body: 'Payments are processed exclusively through Apple App Store or Google Play Store. Subscriptions automatically renew unless canceled before the renewal date according to the applicable store\'s policies. You may manage or cancel subscriptions through your Apple ID or Google Play account settings. Refunds are handled exclusively by Apple or Google according to their policies. We use RevenueCat to validate subscription status and unlock Premium features. RevenueCat does not process your payment card information.',
      },
    ],
  },
  {
    title: '7. Data Stored on Your Device',
    body: 'Habit data, completion history, settings, preferences, and related information are stored locally on your device. You are responsible for maintaining backups of your data. We are not responsible for data loss caused by device failure, uninstalling the App, operating system issues, importing data, user error, or hardware damage. Deleting data through the App may permanently remove information stored locally on your device. For information about privacy practices, please review our Privacy Policy.',
  },
  {
    title: '8. Notifications and Reminders',
    body: 'If enabled, the App may schedule local notifications on your device. Notification delivery depends on device settings, operating system behavior, battery optimization settings, notification permissions, and Do Not Disturb settings. We do not guarantee that reminders will always be delivered or delivered at the exact scheduled time. Habitica Habits should not be relied upon for critical, emergency, medical, legal, or safety-related notifications.',
  },
  {
    title: '9. Intellectual Property',
    body: 'The App, including its software, design, graphics, text, branding, logos, and other content (excluding User Content), is owned by Mohamed Razmy Abdul Razzak (published under the Quantiva Tech brand) or licensors and protected by applicable intellectual property laws. You may not use trademarks, branding, logos, or intellectual property without prior written permission.',
  },
  {
    title: '10. Third-Party Services',
    body: 'The App may rely on third-party services including Apple App Store, Google Play Store, and RevenueCat. Your use of these services may also be governed by their respective terms and privacy policies.',
  },
  {
    title: '11. Disclaimer of Warranties',
    body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR COMPLETELY ACCURATE. WE DO NOT GUARANTEE THE ACCURACY OF STREAKS, INSIGHTS, STATISTICS, CALCULATIONS, OR REMINDERS. Some jurisdictions do not allow certain warranty exclusions. In such cases, these exclusions apply only to the maximum extent permitted by law.',
  },
  {
    title: '12. Limitation of Liability',
    body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW: WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES. THIS INCLUDES LOSS OF DATA, PROFITS, REVENUE, GOODWILL, OR BUSINESS OPPORTUNITIES. OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE APP SHALL NOT EXCEED THE GREATER OF: (a) THE AMOUNT YOU PAID FOR THE APP OR PREMIUM FEATURES DURING THE PREVIOUS 12 MONTHS; OR (b) EUR €50. Nothing in these Terms excludes liability that cannot be excluded under applicable law.',
  },
  {
    title: '13. Indemnification',
    body: 'You agree to indemnify and hold harmless Mohamed Razmy Abdul Razzak from any claims, damages, liabilities, losses, and expenses arising from your misuse of the App, your User Content, or your violation of these Terms.',
  },
  {
    title: '14. Termination',
    body: 'You may stop using the App at any time by uninstalling it. We may suspend, modify, discontinue, or remove the App or any feature at any time where permitted by law. Sections relating to intellectual property, warranties, liability limitations, and dispute resolution will survive termination.',
  },
  {
    title: '15. Apple App Store and Google Play',
    body: 'If you downloaded the App from Apple App Store: These Terms are between you and Mohamed Razmy Abdul Razzak (developer of Habitica Habits under the Quantiva Tech brand), not Apple. Apple has no obligation to provide support or maintenance. Apple is not responsible for claims relating to the App. Apple and its subsidiaries are third-party beneficiaries of these Terms. If you downloaded the App from Google Play, you also agree to applicable Google Play terms and policies.',
  },
  {
    title: '16. Changes to These Terms',
    body: 'We may update these Terms from time to time. Updated versions will be posted with a revised Last Updated date. Continued use of the App after changes become effective constitutes acceptance of the updated Terms.',
  },
  {
    title: '17. Governing Law',
    body: 'These Terms are governed by the laws of the Federal Republic of Germany. Any disputes arising from these Terms or use of the App shall be subject to the jurisdiction of the courts of Frankfurt am Main, Germany, unless mandatory consumer protection laws provide otherwise.',
  },
  {
    title: '18. Severability',
    body: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
  },
  {
    title: '19. Entire Agreement',
    body: 'These Terms, together with our Privacy Policy and any applicable store-specific purchase terms, constitute the entire agreement between you and Mohamed Razmy Abdul Razzak regarding the App.',
  },
  {
    title: '20. Contact',
    body: 'If you have questions regarding these Terms and Conditions, please contact:\n\nApp Developer\nLocation: Frankfurt am Main, Germany\nEmail: razmyrazzak@outlook.com',
  },
];
