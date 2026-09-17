export const EXPENSE_APP_NAME = 'Expense - AI Tracker';

export const expensePrivacySections = [
  {
    title: '1. Introduction',
    body: `${EXPENSE_APP_NAME} ("Expense", "we", "us", or "our") is an expense and income tracking application that helps users organize personal and business finances by manually entering transactions or using AI-powered scanning of receipts, invoices, bills, bank statements, and other financial documents.

This Privacy Policy explains what personal data we collect, how we use it, with whom it may be shared, how we protect it, and the choices and rights available to you.

By using ${EXPENSE_APP_NAME}, you acknowledge the practices described in this Privacy Policy.`,
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
    body: 'Depending on how you use Expense - AI Tracker, we may process the following categories of information.',
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
          'Passwords are handled by our authentication provider and are not stored by us in plain text.',
      },
      {
        title: '3.2 Financial and transaction information',
        body: 'When you use the application, we may process information that you enter or that is extracted from documents, including:',
        list: [
          'Expense and income amounts',
          'Currency',
          'Transaction date',
          'Merchant or business name',
          'Expense or income category',
          'VAT/tax amount where available',
          'Line items where available',
          'Personal or business classification',
          'Notes or descriptions',
          'Other transaction information you choose to enter',
        ],
        bodyAfterList:
          'This information is used to provide the expense tracking, categorization, reporting and export features of the application.',
      },
      {
        title: '3.3 Uploaded documents and images',
        body: 'If you choose to use AI scanning, you may upload receipt photographs, bills, invoices, bank statement PDFs, and other financial documents. These documents may contain financial and personal information. We process these documents only as necessary to provide the scanning and financial organization features you request.',
      },
      {
        title: '3.4 AI-extracted information',
        body: 'When you scan a financial document, our AI processing may extract information such as merchant, date, amount, currency, VAT, line items, expense or income type, category, and personal or business classification. AI-generated information is presented to you for review. You can edit the extracted information before saving it as a transaction. AI-generated information may not always be accurate, and you remain responsible for reviewing your financial records.',
      },
      {
        title: '3.5 Technical and usage information',
        body: 'We may process limited technical information required to operate, secure and maintain the application, such as:',
        list: [
          'Device or application information',
          'Application version',
          'Operating system information',
          'IP address',
          'Security and authentication information',
          'Error and diagnostic information where applicable',
          'Information about application usage necessary for security, abuse prevention and service operation',
        ],
        bodyAfterList: 'We do not use this information to create advertising profiles.',
      },
      {
        title: '3.6 Subscription information',
        body: 'If you purchase a subscription, subscription and purchase-related information may be processed by the relevant app store and subscription service providers. Expense - AI Tracker uses subscription services to manage paid plans and access to premium features. We do not receive or store your full payment card number. Payment processing is handled by the relevant platform or payment provider.',
      },
    ],
  },
  {
    title: '4. How We Use Your Information',
    body: 'We use personal information for the following purposes.',
    list: [
      'Providing the application: create and manage your account, authenticate you, store transactions, process receipts and financial documents, extract financial information using AI, categorize transactions, provide dashboards and reports, personal and business expense tracking, PDF/CSV exports, sync across supported devices, and customer support',
      'Security and abuse prevention: protect accounts, detect abuse, prevent fraudulent use of free trials, enforce AI scanning limits, and protect our systems and services',
      'Service improvement: maintain, troubleshoot and improve the reliability and security of the application',
    ],
    bodyAfterList:
      'We do not sell your personal financial information. We do not use your financial information to serve third-party advertisements.',
  },
  {
    title: '5. AI Document Processing',
    body: `Expense - AI Tracker uses artificial intelligence to extract financial information from documents that you choose to scan.

When you request an AI scan, the relevant document or image may be securely transmitted to OpenAI for AI-powered processing. The AI service may process information contained in the document, including financial information, in order to return structured information such as merchant, date, amount, currency, VAT, line items, category and transaction type.

The extracted information is returned to our application so that you can review and edit it before saving.

We use OpenAI's API for this functionality. According to OpenAI's current API data policy, API inputs and outputs are not used to train OpenAI models by default unless the API customer explicitly enables applicable data-sharing settings. We configure our OpenAI API usage accordingly and do not intentionally enable sharing of Expense user document data for model training.`,
  },
  {
    title: '6. Service Providers',
    body: 'To operate Expense - AI Tracker, we may use trusted third-party service providers. Depending on the functionality you use, these may include:',
    table: {
      headers: ['Provider', 'Purpose'],
      rows: [
        ['Firebase / Google', 'Authentication and account management'],
        ['MongoDB Atlas', 'Storage of user profiles and financial transactions'],
        ['Render', 'Hosting of application backend services'],
        ['OpenAI', 'AI-powered document and receipt extraction'],
        ['RevenueCat', 'Subscriptions, entitlements and subscription status'],
        ['Apple / Google Play', 'App distribution, purchases and payments'],
      ],
    },
    bodyAfterList:
      'We only provide third-party service providers with the information reasonably necessary for them to provide their services.',
  },
  {
    title: '7. Data Security',
    body: 'We take reasonable technical and organizational measures to protect your personal and financial information against unauthorized access, alteration, disclosure or destruction. These measures may include:',
    list: [
      'Encrypted connections using HTTPS/TLS',
      'Secure authentication through Firebase',
      'Access controls',
      'Server-side authentication and authorization',
      'Protected database access',
      'Secure API credentials',
      'Restricted access to production systems',
      'Security monitoring and abuse-prevention controls',
    ],
    bodyAfterList:
      'However, no internet-based service can guarantee absolute security. You should also protect your account credentials and device from unauthorized access.',
  },
  {
    title: '8. Data Storage and Retention',
    body: `We retain your account and financial information for as long as necessary to provide the application and maintain your account. Your financial records remain available while your account is active unless you delete them yourself.

If you delete your account, we will delete the personal data and financial information associated with your account from our active application systems, including, where applicable: your application account, user profile information, transactions, uploaded financial documents, stored receipt information, and AI extraction records associated with your account.

Some information may need to be retained where required by law or where necessary for legitimate security, fraud-prevention or legal purposes.`,
  },
  {
    title: '9. Free Trial and Fraud Prevention',
    body: `Expense - AI Tracker may provide a limited AI scanning trial. To help prevent repeated abuse of the trial, we may create a cryptographic identifier associated with an account identifier such as the user's normalized email address.

This identifier is generated using a one-way cryptographic process and is used only for purposes such as determining whether a trial has previously been used, preventing repeated trial abuse, and protecting the service from fraudulent or automated use.

The cryptographic identifier does not allow us to recover the original email address from the identifier. If an account is deleted, we may retain this limited fraud-prevention identifier for up to 12 months, where necessary for abuse prevention. After this retention period, it will be deleted.

This limited retention does not mean that your financial transactions, uploaded documents or account profile are retained after account deletion.`,
  },
  {
    title: '10. Account Deletion',
    body: `You can request deletion of your Expense - AI Tracker account.

Account deletion is available:
• Inside the Expense - AI Tracker application, through the account/settings area; and
• Through our web account-deletion page: https://quantivatech-landing-page.onrender.com/apps/expense/delete-account

When your account is deleted, we will delete the personal and financial information associated with your account from our active systems, subject to any limited retention described in this Privacy Policy or required by law. This may include deletion of your Firebase authentication account, application user profile, transactions, uploaded receipts and documents, AI scan information, and other application data associated with your account.

If certain information must be retained by a third-party provider for legal, billing, security or fraud-prevention purposes, that information may be retained according to that provider's applicable policies.

Deleting your Expense account does not necessarily cancel an active subscription purchased through Apple, Google Play or another subscription provider. You should cancel an active subscription through the relevant app-store subscription management settings.

Google Play requires apps that allow account creation to provide both an in-app account deletion path and a web resource for requesting account deletion.`,
  },
  {
    title: '11. Your Privacy Rights',
    body: 'If you are located in the European Economic Area, the United Kingdom or another jurisdiction providing similar rights, you may have rights including:',
    list: [
      'The right to access your personal data',
      'The right to correct inaccurate information',
      'The right to request deletion of your personal data',
      'The right to request restriction of processing',
      'The right to object to certain processing',
      'The right to data portability',
      'The right to withdraw consent where processing is based on consent',
      'The right to lodge a complaint with a supervisory authority',
    ],
    bodyAfterList:
      'These rights are subject to applicable legal requirements and exceptions. To exercise your rights, contact razmyrazzak@outlook.com. We may need to verify your identity before processing certain requests.',
  },
  {
    title: '12. Legal Bases for Processing',
    body: 'Where the GDPR applies, we process personal data on one or more of the following legal bases, depending on the specific processing activity:',
    list: [
      'Contract — necessary to provide the service you request (account, transactions, AI scanning)',
      'Legitimate interests — fraud and abuse prevention, system protection, security, troubleshooting and reliability (balanced against your rights)',
      'Legal obligations — where necessary to comply with applicable law',
      'Consent — where required by applicable law; you may withdraw consent where processing is based on consent',
    ],
  },
  {
    title: '13. International Data Transfers',
    body: 'Some of our service providers may process personal data outside the European Economic Area (EEA). Where personal data is transferred outside the EEA, we take appropriate measures required by applicable data-protection law, which may include relying on an adequacy decision or appropriate contractual safeguards such as Standard Contractual Clauses. The specific location and transfer mechanisms may depend on the services and infrastructure used at the time.',
  },
  {
    title: '14. Children',
    body: 'Expense - AI Tracker is not intended for children under the age required by applicable law to independently use such services. We do not knowingly collect personal information from children in violation of applicable law. If you believe that a child has provided personal information to us improperly, please contact us at razmyrazzak@outlook.com.',
  },
  {
    title: '15. Payments and Subscriptions',
    body: 'Expense - AI Tracker offers optional paid subscriptions. Current subscription plans may include Plus and Pro. Subscription payments are processed through the relevant app store or subscription payment provider. We do not store your complete credit or debit card number.',
    list: [
      'Subscription providers may process subscription status, product purchased, purchase date, renewal information, transaction identifiers, and app-store account information',
      'Subscription and purchase information may be retained by Apple, Google or the relevant payment/subscription provider according to their respective policies and legal obligations',
    ],
  },
  {
    title: '16. No Sale of Personal Financial Information',
    body: 'We do not sell, rent or trade your personal financial information. We do not use your receipt, invoice, bank statement or transaction information to create advertising profiles for third parties. Your financial information is processed to provide the features of Expense - AI Tracker, including transaction tracking, AI extraction, categorization and reporting.',
  },
  {
    title: '17. Changes to This Privacy Policy',
    body: 'We may update this Privacy Policy from time to time to reflect changes to the application, service providers, data-processing practices, or applicable laws. When we make material changes, we may provide an appropriate notice through the application or other reasonable means. The "Last updated" date at the top of this Privacy Policy indicates when the policy was most recently updated.',
  },
  {
    title: '18. Contact Us',
    body: `If you have questions about this Privacy Policy, your personal data, or your privacy rights, please contact us:

Expense - AI Tracker
Quantiva Tech (personal brand)
Mohamed Razmy Abdul Razzak
Email: razmyrazzak@outlook.com
Location: Frankfurt am Main, Germany`,
  },
];

export const expenseTermsSections = [
  {
    title: '1. Introduction',
    body: `These Terms of Use ("Terms") govern your access to and use of ${EXPENSE_APP_NAME} ("Expense", "the App", "we", "us", or "our").

By creating an account, accessing, or using the App, you agree to these Terms. If you do not agree with these Terms, please do not use the App.`,
  },
  {
    title: '2. The Service',
    body: 'Expense - AI Tracker is a personal organization and expense-tracking application that allows you to:',
    list: [
      'Record expenses and income manually',
      'Scan receipts, invoices, bills, bank statements, and other financial documents',
      'Use AI-assisted extraction to identify financial information',
      'Categorize and organize transactions',
      'Track personal and business expenses',
      'Generate financial reports and exports',
    ],
    bodyAfterList: 'The features available may change over time as we improve the App.',
  },
  {
    title: '3. AI-Generated Information',
    body: `The App uses artificial intelligence to extract and categorize information from financial documents.

AI-generated results may be incomplete, inaccurate, or incorrect. You are responsible for reviewing the extracted information before saving or relying on it.

Expense - AI Tracker does not guarantee that AI-generated information is accurate, complete, or suitable for accounting, tax, legal, or other professional purposes.

You should verify important financial information against your original documents.`,
  },
  {
    title: '4. Not Financial, Accounting, or Tax Advice',
    body: 'Expense - AI Tracker is an organizational and record-keeping tool. The App does not provide:',
    list: [
      'Financial advice',
      'Investment advice',
      'Accounting advice',
      'Tax advice',
      'Legal advice',
      'Professional bookkeeping services',
    ],
    bodyAfterList:
      'Reports, categories, calculations, and other information provided by the App are for organizational purposes only. You are responsible for determining whether your records are sufficient for your personal, business, accounting, or tax requirements.',
  },
  {
    title: '5. User Accounts',
    body: 'Some features require you to create an account. You are responsible for:',
    list: [
      'Providing accurate information',
      'Keeping your login credentials secure',
      'Maintaining the security of your account',
      'All activity performed through your account',
    ],
    bodyAfterList:
      'You must not use the App for unlawful purposes or attempt to interfere with or compromise the App or its underlying services.',
  },
  {
    title: '6. User Content',
    body: `You may upload receipts, invoices, bills, bank statements, and other financial documents to the App.

You retain ownership of the content and information you provide.

By uploading content, you grant us the limited rights necessary to process, store, transmit, and display that content solely to provide the features of the App, including AI-assisted document extraction.

You are responsible for ensuring that you have the right to upload and process any documents or information you provide.`,
  },
  {
    title: '7. Subscriptions and Billing',
    body: `Expense - AI Tracker may offer optional paid subscriptions, including monthly and annual plans.

Subscriptions purchased through the Apple App Store or Google Play are billed by the applicable platform. Subscription prices, billing periods, trials, renewal terms, and available plans are displayed before purchase.

Unless otherwise stated by the applicable store, subscriptions automatically renew unless cancelled before the renewal date.

You can manage or cancel subscriptions through the relevant Apple App Store or Google Play account settings. Refunds are handled according to the applicable Apple or Google policies.

We do not control the payment processing systems operated by Apple or Google.`,
  },
  {
    title: '8. Free Trials and Usage Limits',
    body: `The App may offer a limited free trial or limited AI scanning allowance.

Trial eligibility and AI usage limits may be subject to reasonable restrictions designed to prevent abuse, fraud, automated use, or repeated creation of trial accounts.

We may restrict or terminate access to trial functionality where we reasonably determine that the trial is being abused.`,
  },
  {
    title: '9. Availability of the Service',
    body: 'We aim to keep Expense - AI Tracker available and reliable, but we do not guarantee that the App will always be available or uninterrupted. The App may occasionally be unavailable because of:',
    list: [
      'Maintenance',
      'Updates',
      'Technical problems',
      'Third-party service outages',
      'Network problems',
      'Events outside our reasonable control',
    ],
    bodyAfterList:
      'We may modify, suspend, or discontinue features of the App when reasonably necessary.',
  },
  {
    title: '10. Prohibited Use',
    body: 'You agree not to:',
    list: [
      'Use the App for unlawful activities',
      'Attempt to gain unauthorized access to the App or its systems',
      'Circumvent subscription or AI usage limits',
      'Abuse free trials or scanning functionality',
      'Introduce malicious software or code',
      'Reverse engineer or attempt to compromise the App',
      'Use automated systems to abuse the service',
      'Interfere with the operation or security of the App',
    ],
  },
  {
    title: '11. Intellectual Property',
    body: `The App, including its software, design, branding, logos, text, and other original materials, is owned by Mohamed Razmy Abdul Razzak (published under the Quantiva Tech brand) or licensors and is protected by applicable intellectual property laws.

Except as permitted by law, you may not copy, modify, distribute, sell, or commercially exploit the App or its proprietary materials without prior written permission.`,
  },
  {
    title: '12. Data and Privacy',
    body: 'Your use of the App is also subject to our Privacy Policy, which explains how we collect, use, store, and protect personal and financial information. The Privacy Policy forms part of these Terms and is available at https://quantivatech-landing-page.onrender.com/apps/expense/privacy.',
  },
  {
    title: '13. Disclaimer',
    body: 'To the maximum extent permitted by applicable law, Expense - AI Tracker is provided on an "as is" and "as available" basis. We do not guarantee that:',
    list: [
      'AI extraction will always be accurate',
      'Categorization will always be correct',
      'Reports will always be error-free',
      'The App will meet every individual accounting or tax requirement',
      'The service will always be available without interruption',
    ],
    bodyAfterList:
      'You should maintain your own copies of important financial documents and records.',
  },
  {
    title: '14. Limitation of Liability',
    body: `To the maximum extent permitted by applicable law, we will not be responsible for indirect, incidental, special, consequential, or similar losses arising from your use of the App.

Nothing in these Terms excludes or limits liability where such exclusion or limitation is not permitted under applicable law.

In particular, nothing in these Terms limits any mandatory consumer rights or statutory rights that cannot legally be excluded.`,
  },
  {
    title: '15. Termination',
    body: `You may stop using the App and delete your account at any time via the app or at https://quantivatech-landing-page.onrender.com/apps/expense/delete-account.

We may suspend or terminate access to the App where reasonably necessary, including in cases of serious violation of these Terms, fraud or abuse, attempts to compromise the service, unlawful use, or security risks.

Where appropriate, we will provide reasonable notice before terminating access.

Deleting your account does not necessarily cancel a subscription purchased through Apple or Google Play. You must cancel the subscription through the applicable store.`,
  },
  {
    title: '16. Changes to These Terms',
    body: `We may update these Terms from time to time to reflect changes to the App, our services, or applicable legal requirements.

When material changes are made, we may provide notice through the App or another appropriate method.

The "Last updated" date at the top of these Terms indicates when they were most recently updated.`,
  },
  {
    title: '17. Governing Law',
    body: `These Terms are governed by the laws applicable in Germany, without prejudice to any mandatory consumer protection rights that apply to you under the laws of your country of residence.

If you are a consumer in the European Union, nothing in these Terms is intended to deprive you of mandatory rights provided by applicable consumer-protection law.`,
  },
  {
    title: '18. Contact',
    body: `Expense - AI Tracker
Developer: Mohamed Razmy Abdul Razzak
Quantiva Tech (personal brand)
Location: Frankfurt am Main, Germany
Email: razmyrazzak@outlook.com

For questions regarding these Terms, please contact: razmyrazzak@outlook.com`,
  },
];
