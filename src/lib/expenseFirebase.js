import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { expenseAppConfig, isExpenseFirebaseConfigured } from '../config/expenseApp';

let auth = null;

export function getExpenseAuth() {
  if (!isExpenseFirebaseConfigured()) {
    throw new Error('Firebase is not configured for Expense - AI Tracker. Add VITE_EXPENSE_FIREBASE_* env vars.');
  }

  if (!auth) {
    const app =
      getApps().find((a) => a.name === 'expense-ai-tracker') ||
      initializeApp(expenseAppConfig.firebase, 'expense-ai-tracker');
    auth = getAuth(app);
  }

  return auth;
}
