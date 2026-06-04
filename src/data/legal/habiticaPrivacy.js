export const HABITICA_APP_NAME = 'Habitica Habits';

export const habiticaPrivacySections = [
  {
    title: '1. Overview',
    body: `${HABITICA_APP_NAME} is a habit tracking application designed to help users build consistency, maintain streaks, and achieve personal goals.

${HABITICA_APP_NAME} is a local-first application. No account is required, and your habit data is stored primarily on your device. We do not operate a cloud synchronization service for your habits.

This Privacy Policy explains what information the app handles, how it is stored, when third parties may receive data, and your rights regarding that information.`,
  },
  {
    title: '2. Information We Collect',
    body: '',
    subsections: [
      {
        title: '2.1 Information Stored Locally on Your Device',
        body: 'When you use the app, you may create and store habit names, descriptions, icons, colors, difficulty settings, schedules, completion history, daily check-ins, time-based and amount-based progress, reminder settings, app preferences, language preferences, theme selections, and onboarding preferences.',
        list: [
          'This information is stored locally on your device using SQLite and local device storage.',
          'We do not upload your habit data to our own servers.',
        ],
      },
      {
        title: '2.2 Information We Do Not Collect',
        body: `${HABITICA_APP_NAME} does not:`,
        list: [
          'Require account registration or sign-in',
          'Maintain user profiles on our servers',
          'Upload habit content to our servers',
          'Operate cloud synchronization',
          'Display third-party advertisements',
          'Sell personal information',
          'Integrate Apple Health or Google Fit',
          'Use dedicated analytics or crash reporting services unless stated otherwise in future updates',
        ],
      },
      {
        title: '2.3 Device Permissions',
        body: 'Notifications (optional): used to deliver local habit reminders you configure. You may disable notifications at any time through your device settings.\n\nFiles and Storage (optional): used only when importing or exporting backup files. Exported files remain under your control and are stored wherever you choose to save them.',
      },
    ],
  },
  {
    title: '3. Premium Subscriptions and Purchases',
    body: `${HABITICA_APP_NAME} offers optional Premium subscriptions and lifetime purchases. Payments are processed entirely by the Apple App Store and Google Play Store.`,
    list: [
      'We do not receive or store credit card, debit card, banking, or payment credentials.',
      'To manage subscriptions and Premium access, we use RevenueCat, which may process anonymous or pseudonymous app user identifiers, subscription status, product identifiers, purchase metadata, device platform information, and app version information.',
      'RevenueCat Privacy Policy: https://www.revenuecat.com/privacy',
      'Apple and Google maintain their own privacy policies regarding payment processing.',
    ],
  },
  {
    title: '4. Ratings and Reviews',
    body: `${HABITICA_APP_NAME} may occasionally display a prompt asking you to rate the app using Apple's or Google's review systems. We do not receive or store your ratings or reviews through our own servers. The app may locally store information about how often review prompts have been shown.`,
  },
  {
    title: '5. Support Communications',
    body: 'If you contact us by email, we may receive information you choose to provide, including your email address, device information, app version, screenshots, and problem descriptions. We use this information solely to provide support, troubleshoot issues, and improve the app.',
  },
  {
    title: '6. How We Use Information',
    body: 'Information handled by the app is used only to provide habit tracking functionality, maintain streaks and statistics, deliver reminders, store preferences, manage Premium subscriptions, restore purchases, respond to support requests, and comply with legal obligations. We do not sell personal information.',
  },
  {
    title: '7. Export, Import, and Deletion',
    body: 'Premium users may export habit data as a JSON backup file. You choose where the exported file is stored or shared. You may import previously exported JSON backup files and are responsible for any files you import.',
    list: [
      'Delete All Data permanently removes locally stored habits and completion history from your device.',
      'Uninstalling the app generally removes locally stored application data, subject to your device operating system and backup settings.',
    ],
  },
  {
    title: '8. Data Retention',
    body: 'Habit data is stored on your device until you delete it, overwrite it through import, use Delete All Data, or uninstall the application. Purchase records are maintained by Apple, Google, and RevenueCat according to their respective retention policies. Support emails may be retained as long as necessary to provide support and meet legal obligations.',
  },
  {
    title: '9. Children\'s Privacy',
    body: `${HABITICA_APP_NAME} is not directed toward children under the age of 13 or the minimum age required by local law. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us so we can address the issue.`,
  },
  {
    title: '10. International Users and GDPR',
    body: 'Users in the European Economic Area (EEA), United Kingdom, and Switzerland may have rights under applicable privacy laws, including access, correction, deletion, restriction, objection, and data portability. Because habit data is stored locally on your device, most information can be controlled or deleted directly through the app.',
    list: [
      'Where GDPR applies, our legal basis for processing includes performance of a contract, legitimate interests, compliance with legal obligations, and consent where required.',
    ],
  },
  {
    title: '11. Security',
    body: 'We use reasonable technical and organizational measures appropriate for a local-first application. However, no method of electronic storage or transmission is completely secure. You are responsible for protecting your device, device backups, and exported backup files.',
  },
  {
    title: '12. Third-Party Services',
    body: `${HABITICA_APP_NAME} relies on the following third-party services:`,
    table: {
      headers: ['Service', 'Purpose'],
      rows: [
        ['Apple App Store', 'App distribution and payments'],
        ['Google Play Store', 'App distribution and payments'],
        ['RevenueCat', 'Subscription management'],
        ['Apple Notification Services', 'Local notification delivery'],
        ['Android Notification Services', 'Local notification delivery'],
      ],
    },
  },
  {
    title: '13. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any updates will be posted with a revised Effective Date. Where required, users will be notified through the application or app store listing.',
  },
  {
    title: '14. Contact Us',
    body: 'If you have questions about this Privacy Policy or your privacy rights, please contact:\n\nMohamed Razmy Abdul Razzak (developer of Habitica Habits, published under the Quantiva Tech brand)\nEmail: razmyrazzak@outlook.com\nLocation: Frankfurt am Main, Germany',
  },
];
