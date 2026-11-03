export const MEALMIRA_APP_NAME = 'MealMira';

const LANDING = 'https://quantivatech-landing-page.onrender.com';
const DELETE_URL = `${LANDING}/apps/mealmira/delete-account`;
const PRIVACY_URL = `${LANDING}/apps/mealmira/privacy`;

export const mealmiraPrivacySections = [
  {
    title: '1. Introduction',
    body: `${MEALMIRA_APP_NAME} ("MealMira", "we", "us", or "our") is a meal logging and food organization application that helps users set goals, plan daily nutrition targets, photograph meals, keep a food diary, and review gentle progress over time.

This Privacy Policy explains what personal data we collect, how we use it, with whom it may be shared, how we protect it, and the choices and rights available to you.

By using ${MEALMIRA_APP_NAME}, you acknowledge the practices described in this Privacy Policy.`,
  },
  {
    title: '2. Data Controller',
    body: `The data controller responsible for the processing of your personal data is:

Mohamed Razmy Abdul Razzak
Quantiva Tech (personal brand)
Email: razmyrazzak@outlook.com
Location: Frankfurt am Main, Germany

For privacy-related questions or requests, contact: razmyrazzak@outlook.com`,
  },
  {
    title: '3. Information We Collect',
    body: `Depending on how you use ${MEALMIRA_APP_NAME}, we may process the following categories of information.`,
    subsections: [
      {
        title: '3.1 Account and authentication information',
        body: 'When you create or sign in to an account, we may process:',
        list: [
          'Email address',
          'Firebase user/account identifier',
          'Authentication information necessary to provide secure sign-in',
          'Information provided through supported authentication providers such as Google or Apple',
        ],
        bodyAfterList:
          'Passwords are handled by our authentication provider and are not stored by us in plain text. MealMira uses a Firebase project separate from our other apps.',
      },
      {
        title: '3.2 Goals, plans, and meal information',
        body: 'When you use the application, we may process information that you enter or that is generated for you, including:',
        list: [
          'Goals you select (for example weight, maintenance, muscle, or GLP-1-related mode)',
          'Daily calorie and macro targets',
          'Meals, meal photos, items, portions, and timestamps',
          'Food diary notes, location tags, and hunger/fullness inputs you choose to save',
          'Progress, “good day” markers, and weekly summaries',
          'Favorites and preferences you voluntarily provide',
        ],
        bodyAfterList:
          'This information is used to provide meal logging, organization, insights, and related features of the application.',
      },
      {
        title: '3.3 Uploaded photos',
        body: 'If you use the snap feature, you may upload meal photographs. These photos may contain personal information. We process them only as necessary to identify food items and provide calorie/macro suggestions you can review and edit.',
      },
      {
        title: '3.4 AI-assisted extraction',
        body: 'When you snap a meal, AI processing may suggest food items, portions, and nutrition estimates. Results are shown for your review and may be incomplete or inaccurate. You remain responsible for decisions about food, diet, and health. MealMira does not provide medical advice.',
      },
      {
        title: '3.5 Technical and usage information',
        body: 'We may process limited technical information required to operate, secure and maintain the application, such as device or application information, app version, operating system, IP address, security and authentication information, error/diagnostic data where applicable, and usage information needed for security and abuse prevention. We do not use this information to create advertising profiles.',
      },
      {
        title: '3.6 Subscription information',
        body: `If you purchase a subscription, subscription and purchase-related information may be processed by the relevant app store and subscription service providers. ${MEALMIRA_APP_NAME} may use subscription services to manage paid plans. We do not receive or store your full payment card number.`,
      },
    ],
  },
  {
    title: '4. How We Use Your Information',
    body: 'We use personal information to:',
    list: [
      'Provide the application (account, meals, diary, progress, AI-assisted snap features, sync, support)',
      'Protect accounts and prevent abuse (including trial or usage limits where applicable)',
      'Maintain and improve reliability and security',
    ],
    bodyAfterList:
      'We do not sell your personal meal or account data. We do not use your meal data to serve third-party advertisements.',
  },
  {
    title: '5. AI Processing',
    body: `${MEALMIRA_APP_NAME} may use artificial intelligence to help identify foods in photos or generate structured meal suggestions from content you provide.

When you request an AI feature, relevant images or text may be securely transmitted to an AI provider (such as OpenAI) for processing. We configure our AI API usage so that we do not intentionally enable sharing of MealMira user content for model training.`,
  },
  {
    title: '6. Service Providers',
    body: `To operate ${MEALMIRA_APP_NAME}, we may use trusted third-party providers:`,
    table: {
      headers: ['Provider', 'Purpose'],
      rows: [
        ['Firebase / Google', 'Authentication and account management (MealMira Firebase project)'],
        ['MongoDB Atlas', 'Storage of user profiles and meal-related data'],
        ['Render', 'Hosting of backend services'],
        ['OpenAI', 'AI-assisted meal photo and suggestion features'],
        ['RevenueCat', 'Subscriptions, entitlements, and subscription status'],
        ['Apple / Google Play', 'App distribution, purchases, and payments'],
      ],
    },
    bodyAfterList:
      'We provide third parties only the information reasonably necessary for them to perform their services.',
  },
  {
    title: '7. Data Security',
    body: 'We take reasonable technical and organizational measures to protect your personal information, including encrypted connections (HTTPS/TLS), secure authentication via Firebase, access controls, and protected database access. No internet-based service can guarantee absolute security. You should also protect your credentials and device.',
  },
  {
    title: '8. Data Storage and Retention',
    body: `We store your account and meal-related information while needed to provide the application. When you delete your account, we delete personal and meal-related data associated with your account from our active systems, including your account, profile, meals, photos, diary entries, and AI-related data linked to your account, where applicable.

Certain information may be retained where required by law or for legitimate security, fraud-prevention, or legal purposes.`,
  },
  {
    title: '9. Free Trial and Fraud Prevention',
    body: `${MEALMIRA_APP_NAME} may offer a limited free trial or limited AI usage. To prevent repeated trial abuse, we may create a cryptographic identifier linked to an account identifier (for example a normalized email). This identifier is created with a one-way process. The original email cannot be recovered from it.

If an account is deleted, we may retain this limited fraud-prevention identifier for up to 12 months where needed for abuse prevention, then delete it.`,
  },
  {
    title: '10. Account Deletion',
    body: `You can request deletion of your ${MEALMIRA_APP_NAME} account:

• Directly in the MealMira app via account/settings
• Through our web account-deletion page: ${DELETE_URL}

Deleting your MealMira account does not automatically cancel an active subscription purchased through Apple, Google Play, or another provider. Cancel subscriptions in the relevant store settings.`,
  },
  {
    title: '11. Your Privacy Rights',
    body: 'If you are in the EEA, UK, or another region with similar privacy rights, you may have rights including access, correction, deletion, restriction, objection, portability, withdrawal of consent where applicable, and the right to lodge a complaint with a supervisory authority. Contact: razmyrazzak@outlook.com. We may ask you to verify your identity before processing certain requests.',
  },
  {
    title: '12. Legal Bases for Processing',
    body: 'Where GDPR applies, we process personal data on bases including contract performance, legitimate interests (security and reliability), legal obligations, and consent where required.',
  },
  {
    title: '13. International Data Transfers',
    body: 'Some providers may process personal data outside the EEA. When transfers occur, we take appropriate measures under applicable privacy laws, such as adequacy decisions or standard contractual clauses.',
  },
  {
    title: '14. Children',
    body: `${MEALMIRA_APP_NAME} is not directed at children below the age at which they may independently use such services under applicable law. We do not knowingly collect personal data from children in violation of applicable law. Contact: razmyrazzak@outlook.com if you believe a child has provided personal data improperly.`,
  },
  {
    title: '15. Payments and Subscriptions',
    body: `${MEALMIRA_APP_NAME} may offer optional paid subscriptions. Payments are handled by the applicable app store or payment provider. We do not store full credit or debit card numbers.`,
  },
  {
    title: '16. No Sale of Personal Data',
    body: 'We do not sell, rent, or trade your personal meal or account data. We do not use your meal photos or diary entries to build advertising profiles for third parties.',
  },
  {
    title: '17. Changes to This Privacy Policy',
    body: 'We may update this Privacy Policy from time to time. For material changes, we may notify you through the application or another appropriate method. The "Last updated" date indicates when this policy was most recently updated.',
  },
  {
    title: '18. Contact',
    body: `${MEALMIRA_APP_NAME}
Quantiva Tech (personal brand)
Mohamed Razmy Abdul Razzak
Email: razmyrazzak@outlook.com
Location: Frankfurt am Main, Germany`,
  },
];

export const mealmiraTermsSections = [
  {
    title: '1. Introduction',
    body: `These Terms of Use ("Terms") govern your access to and use of ${MEALMIRA_APP_NAME} ("MealMira", "the App", "we", "us", or "our").

By creating an account, accessing, or using the App, you agree to these Terms. If you do not agree, please do not use the App.`,
  },
  {
    title: '2. The Service',
    body: `${MEALMIRA_APP_NAME} is a meal logging and organization application that may allow you to:`,
    list: [
      'Set goals and daily nutrition targets',
      'Photograph meals and review suggested items and macros',
      'Keep a food diary with notes and how you felt',
      'View progress and weekly summaries',
      'Use optional modes such as GLP-1 mode',
    ],
    bodyAfterList: 'Features available may change over time as we improve the App.',
  },
  {
    title: '3. AI-Generated Information',
    body: `The App may use artificial intelligence to suggest foods and nutrition estimates from photos or other inputs.

AI-generated results may be incomplete, inaccurate, or incorrect. You are responsible for reviewing results before relying on them.

${MEALMIRA_APP_NAME} does not guarantee that AI-generated information is accurate, complete, or suitable for medical, nutritional, allergy, dietary, or other professional purposes.`,
  },
  {
    title: '4. Not Medical or Nutritional Advice',
    body: `${MEALMIRA_APP_NAME} is an organizational and informational tool. The App does not provide:`,
    list: [
      'Medical advice',
      'Clinical nutrition advice',
      'Diagnosis or treatment',
      'Allergy or food-safety guarantees',
      'Professional dietary counseling',
    ],
    bodyAfterList:
      'Always consider your own health needs and consult a qualified professional when appropriate, especially if you use GLP-1 medications or have medical conditions.',
  },
  {
    title: '5. User Accounts',
    body: 'Some features require an account. You are responsible for accurate information, secure credentials, account security, and activity on your account. You must not use the App unlawfully or attempt to compromise the App or its services.',
  },
  {
    title: '6. User Content',
    body: `You may upload meal photos, notes, and other content. You retain ownership of content you provide. By uploading, you grant us the limited rights necessary to process, store, transmit, and display that content solely to provide the App, including AI-assisted features. You are responsible for ensuring you have the right to upload content you provide.`,
  },
  {
    title: '7. Subscriptions and Billing',
    body: `Subscriptions purchased through the Apple App Store or Google Play are billed by the applicable platform. Prices, trials, and renewal terms are shown before purchase. Unless otherwise stated by the store, subscriptions renew automatically until cancelled. Manage or cancel in Apple or Google account settings. Refunds follow Apple or Google policies.`,
  },
  {
    title: '8. Free Trials and Usage Limits',
    body: 'The App may offer a limited free trial or limited AI usage. We may restrict or terminate trial access where we reasonably determine abuse is occurring.',
  },
  {
    title: '9. Availability of the Service',
    body: 'We aim to keep the App available and reliable but do not guarantee uninterrupted availability. We may modify, suspend, or discontinue features when reasonably necessary.',
  },
  {
    title: '10. Prohibited Use',
    body: 'You agree not to use the App unlawfully, attempt unauthorized access, circumvent limits, abuse trials, introduce malware, reverse engineer the App, or interfere with its security or operation.',
  },
  {
    title: '11. Intellectual Property',
    body: `The App and its original materials are owned by Mohamed Razmy Abdul Razzak (published under the Quantiva Tech brand) or licensors and protected by applicable intellectual property laws.`,
  },
  {
    title: '12. Data and Privacy',
    body: `Your use of the App is also subject to our Privacy Policy at ${PRIVACY_URL}, which forms part of these Terms.`,
  },
  {
    title: '13. Disclaimer',
    body: `To the maximum extent permitted by law, ${MEALMIRA_APP_NAME} is provided "as is" and "as available". We do not guarantee accurate AI suggestions, correct nutrition information, or uninterrupted availability.`,
  },
  {
    title: '14. Limitation of Liability',
    body: 'To the maximum extent permitted by law, we are not responsible for indirect or consequential losses arising from your use of the App. Nothing excludes liability where not permitted by law, including mandatory consumer rights.',
  },
  {
    title: '15. Termination',
    body: `You may stop using the App and delete your account via the app or at ${DELETE_URL}. We may suspend or terminate access for serious violations, fraud, abuse, unlawful use, or security risks. Deleting your account does not cancel store subscriptions — cancel those in the store settings.`,
  },
  {
    title: '16. Changes to These Terms',
    body: 'We may update these Terms from time to time. For material changes, we may provide notice through the App or another appropriate method.',
  },
  {
    title: '17. Governing Law',
    body: 'These Terms are governed by the laws applicable in Germany, without prejudice to mandatory consumer protection rights in your country of residence.',
  },
  {
    title: '18. Contact',
    body: `${MEALMIRA_APP_NAME}
Developer: Mohamed Razmy Abdul Razzak
Quantiva Tech (personal brand)
Location: Frankfurt am Main, Germany
Email: razmyrazzak@outlook.com`,
  },
];
