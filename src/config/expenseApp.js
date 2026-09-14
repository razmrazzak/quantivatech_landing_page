/**
 * Expense - AI Tracker backend & Firebase Auth config.
 * Set values in `.env` (see `.env.example`). Never commit secrets.
 */
export const expenseAppConfig = {
  appId: 'expense',
  appName: 'Expense - AI Tracker',
  /** Backend API base — e.g. https://expense-ai-api.onrender.com */
  apiBaseUrl: (import.meta.env.VITE_EXPENSE_API_BASE_URL || '').replace(/\/$/, ''),
  deleteAccountPath: '/user/account',
  firebase: {
    apiKey: import.meta.env.VITE_EXPENSE_FIREBASE_API_KEY || '',
    authDomain: import.meta.env.VITE_EXPENSE_FIREBASE_AUTH_DOMAIN || '',
    projectId: import.meta.env.VITE_EXPENSE_FIREBASE_PROJECT_ID || '',
    storageBucket: import.meta.env.VITE_EXPENSE_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: import.meta.env.VITE_EXPENSE_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: import.meta.env.VITE_EXPENSE_FIREBASE_APP_ID || '',
  },
};

export function isExpenseFirebaseConfigured() {
  const f = expenseAppConfig.firebase;
  return Boolean(f.apiKey && f.authDomain && f.projectId && f.appId);
}

export function isExpenseApiConfigured() {
  return Boolean(expenseAppConfig.apiBaseUrl);
}
