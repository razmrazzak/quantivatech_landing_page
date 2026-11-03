/**
 * MealMira backend & Firebase Auth config (separate Firebase project from Expense).
 * Set values in `.env` (see `.env.example`). Never commit secrets.
 */
export const mealmiraAppConfig = {
  appId: 'mealmira',
  appName: 'MealMira',
  apiBaseUrl: (import.meta.env.VITE_MEALMIRA_API_BASE_URL || '').replace(/\/$/, ''),
  deleteAccountPath: '/user/account',
  firebase: {
    apiKey: import.meta.env.VITE_MEALMIRA_FIREBASE_API_KEY || '',
    authDomain: import.meta.env.VITE_MEALMIRA_FIREBASE_AUTH_DOMAIN || '',
    projectId: import.meta.env.VITE_MEALMIRA_FIREBASE_PROJECT_ID || '',
    storageBucket: import.meta.env.VITE_MEALMIRA_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: import.meta.env.VITE_MEALMIRA_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: import.meta.env.VITE_MEALMIRA_FIREBASE_APP_ID || '',
  },
};

export function isMealmiraFirebaseConfigured() {
  const f = mealmiraAppConfig.firebase;
  return Boolean(f.apiKey && f.authDomain && f.projectId && f.appId);
}

export function isMealmiraApiConfigured() {
  return Boolean(mealmiraAppConfig.apiBaseUrl);
}
