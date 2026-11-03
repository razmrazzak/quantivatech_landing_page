import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { mealmiraAppConfig, isMealmiraFirebaseConfigured } from '../config/mealmiraApp';

let auth = null;

export function getMealmiraAuth() {
  if (!isMealmiraFirebaseConfigured()) {
    throw new Error(
      'Firebase is not configured for MealMira. Add VITE_MEALMIRA_FIREBASE_* env vars.'
    );
  }

  if (!auth) {
    const app =
      getApps().find((a) => a.name === 'mealmira') ||
      initializeApp(mealmiraAppConfig.firebase, 'mealmira');
    auth = getAuth(app);
  }

  return auth;
}
