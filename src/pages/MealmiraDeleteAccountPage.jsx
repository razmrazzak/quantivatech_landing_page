import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import LegalLayout from '../components/LegalLayout';
import {
  mealmiraAppConfig,
  isMealmiraApiConfigured,
  isMealmiraFirebaseConfigured,
} from '../config/mealmiraApp';
import { getMealmiraAuth } from '../lib/mealmiraFirebase';
import { deleteMealmiraAccount } from '../lib/mealmiraAccountApi';

const CONFIRM_WORD = 'DELETE';

const COPY = {
  en: {
    appName: 'MealMira',
    back: 'Back to',
    title: 'Delete account',
    subtitle: 'Google Play account deletion — permanently remove your account and data.',
    notConfigured: (
      <>
        This page is not configured yet. Set{' '}
        <code className="rounded bg-ivory-alt px-1 text-ink">VITE_MEALMIRA_API_BASE_URL</code> and{' '}
        <code className="rounded bg-ivory-alt px-1 text-ink">VITE_MEALMIRA_FIREBASE_*</code> in your
        environment (see <code className="rounded bg-ivory-alt px-1 text-ink">.env.example</code>),
        then rebuild.
      </>
    ),
    deletedTitle: 'Account deleted',
    deletedBody: (appName) =>
      `Your ${appName} account and associated data have been permanently removed. This cannot be undone.`,
    returnHome: 'Return home',
    warningTitle: 'Warning — permanent deletion',
    warnings: [
      'All meals, photos, diary entries, and plans will be deleted',
      'Your account cannot be recovered after confirmation',
      'You will need to create a new account to use the app again',
    ],
    loading: 'Loading…',
    signInHint: (appName) =>
      `Sign in with the same Firebase account you use in ${appName}.`,
    email: 'Email',
    password: 'Password',
    signingIn: 'Signing in…',
    signIn: 'Sign in',
    signedInAs: 'Signed in as',
    signOut: 'Sign out',
    acknowledge:
      'I understand this will permanently delete my account, all meals, photos, and related data. This cannot be undone.',
    typeConfirm: `Type ${CONFIRM_WORD} to confirm`,
    deleting: 'Deleting…',
    deleteButton: 'Permanently delete my account',
    needHelp: 'Need help?',
    signInFailed: 'Sign-in failed. Check your email and password.',
    confirmError: `Type ${CONFIRM_WORD} and confirm the checkbox to continue.`,
    deleteFailed: 'Something went wrong while deleting your account.',
  },
  de: {
    appName: 'MealMira',
    back: 'Zurück zu',
    title: 'Konto löschen',
    subtitle:
      'Kontolöschung für Google Play — Ihr Konto und Ihre Daten werden dauerhaft entfernt.',
    notConfigured: (
      <>
        Diese Seite ist noch nicht konfiguriert. Setzen Sie{' '}
        <code className="rounded bg-ivory-alt px-1 text-ink">VITE_MEALMIRA_API_BASE_URL</code> und{' '}
        <code className="rounded bg-ivory-alt px-1 text-ink">VITE_MEALMIRA_FIREBASE_*</code> in Ihrer
        Umgebung (siehe <code className="rounded bg-ivory-alt px-1 text-ink">.env.example</code>) und
        bauen Sie neu.
      </>
    ),
    deletedTitle: 'Konto gelöscht',
    deletedBody: (appName) =>
      `Ihr ${appName}-Konto und die zugehörigen Daten wurden dauerhaft entfernt. Dies kann nicht rückgängig gemacht werden.`,
    returnHome: 'Zur Startseite',
    warningTitle: 'Warnung — dauerhafte Löschung',
    warnings: [
      'Alle Mahlzeiten, Fotos, Tagebucheinträge und Pläne werden gelöscht',
      'Ihr Konto kann nach der Bestätigung nicht wiederhergestellt werden',
      'Sie müssen ein neues Konto erstellen, um die App erneut zu nutzen',
    ],
    loading: 'Wird geladen…',
    signInHint: (appName) =>
      `Melden Sie sich mit demselben Firebase-Konto an, das Sie in ${appName} verwenden.`,
    email: 'E-Mail',
    password: 'Passwort',
    signingIn: 'Anmeldung…',
    signIn: 'Anmelden',
    signedInAs: 'Angemeldet als',
    signOut: 'Abmelden',
    acknowledge:
      'Ich verstehe, dass damit mein Konto, alle Mahlzeiten, Fotos und zugehörigen Daten dauerhaft gelöscht werden. Dies kann nicht rückgängig gemacht werden.',
    typeConfirm: `Geben Sie ${CONFIRM_WORD} zur Bestätigung ein`,
    deleting: 'Wird gelöscht…',
    deleteButton: 'Mein Konto dauerhaft löschen',
    needHelp: 'Hilfe benötigt?',
    signInFailed: 'Anmeldung fehlgeschlagen. Prüfen Sie E-Mail und Passwort.',
    confirmError: `Geben Sie ${CONFIRM_WORD} ein und bestätigen Sie das Kontrollkästchen.`,
    deleteFailed: 'Beim Löschen Ihres Kontos ist ein Fehler aufgetreten.',
  },
};

export default function MealmiraDeleteAccountPage({ lang = 'en' }) {
  const t = COPY[lang] ?? COPY.en;
  const appName = t.appName || mealmiraAppConfig.appName;
  const isGerman = lang === 'de';

  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const configured = isMealmiraFirebaseConfigured() && isMealmiraApiConfigured();

  useEffect(() => {
    if (!isMealmiraFirebaseConfigured()) {
      setAuthReady(true);
      return undefined;
    }

    const auth = getMealmiraAuth();
    const unsub = onAuthStateChanged(auth, (next) => {
      setUser(next);
      setAuthReady(true);
    });
    return unsub;
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await signInWithEmailAndPassword(getMealmiraAuth(), email.trim(), password);
    } catch (err) {
      setError(err?.message || t.signInFailed);
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    setError('');
    await signOut(getMealmiraAuth());
    setConfirmText('');
    setAcknowledged(false);
  }

  async function handleDelete() {
    setError('');
    if (!acknowledged || confirmText !== CONFIRM_WORD) {
      setError(t.confirmError);
      return;
    }

    setBusy(true);
    try {
      const idToken = await user.getIdToken(true);
      const result = await deleteMealmiraAccount(idToken);

      if (!result.ok) {
        setError(result.message + (result.code ? ` (${result.code})` : ''));
        return;
      }

      try {
        await signOut(getMealmiraAuth());
      } catch {
        // account may already be removed server-side
      }

      setDone(true);
      setUser(null);
      setConfirmText('');
      setAcknowledged(false);
    } catch (err) {
      setError(err?.message || t.deleteFailed);
    } finally {
      setBusy(false);
    }
  }

  return (
    <LegalLayout>
      <article className="container-narrow mx-auto max-w-lg px-4 py-12 sm:px-6 lg:py-16">
        <Link
          to="/apps/mealmira"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.back} {appName}
        </Link>

        <header className="mb-8 flex items-start gap-4 border-b border-card-border pb-8">
          <img
            src="/images/mealmira/app-icon.png"
            alt=""
            className="h-14 w-14 rounded-xl ring-1 ring-card-border"
            width={56}
            height={56}
          />
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gold">{appName}</p>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink">
              {t.title}
            </h1>
            <p className="mt-2 text-sm text-muted">{t.subtitle}</p>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Language">
          <Link
            to="/apps/mealmira/delete-account"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              !isGerman
                ? 'bg-ink text-white'
                : 'text-muted hover:bg-ivory-alt hover:text-ink'
            }`}
          >
            English
          </Link>
          <Link
            to="/apps/mealmira/konto-loeschen"
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isGerman
                ? 'bg-ink text-white'
                : 'text-muted hover:bg-ivory-alt hover:text-ink'
            }`}
          >
            Deutsch
          </Link>
        </div>

        {!configured && (
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            {t.notConfigured}
          </div>
        )}

        {configured && done && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <p className="text-lg font-semibold text-emerald-800">{t.deletedTitle}</p>
            <p className="mt-2 text-sm text-emerald-900/70">{t.deletedBody(appName)}</p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              {t.returnHome}
            </Link>
          </div>
        )}

        {configured && !done && (
          <>
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
              <p className="font-semibold">{t.warningTitle}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-red-900/80">
                {t.warnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {!authReady ? (
              <p className="text-sm text-muted">{t.loading}</p>
            ) : !user ? (
              <form onSubmit={handleLogin} className="card space-y-4 p-6">
                <p className="text-sm text-muted">{t.signInHint(appName)}</p>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                    {t.email}
                  </span>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-card-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                    {t.password}
                  </span>
                  <input
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-card-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
                  />
                </label>
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {busy ? t.signingIn : t.signIn}
                </button>
              </form>
            ) : (
              <div className="card space-y-5 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{t.signedInAs}</p>
                    <p className="mt-1 text-sm font-medium text-ink">{user.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-xs text-muted hover:text-ink"
                  >
                    {t.signOut}
                  </button>
                </div>

                <label className="flex items-start gap-3 text-sm text-muted">
                  <input
                    type="checkbox"
                    checked={acknowledged}
                    onChange={(e) => setAcknowledged(e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-ink/80">{t.acknowledge}</span>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                    {t.typeConfirm}
                  </span>
                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder={CONFIRM_WORD}
                    className="w-full rounded-xl border border-card-border bg-white px-4 py-3 text-sm text-ink outline-none focus:border-red-400"
                  />
                </label>

                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={busy || !acknowledged || confirmText !== CONFIRM_WORD}
                  className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-opacity hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {busy ? t.deleting : t.deleteButton}
                </button>
              </div>
            )}
          </>
        )}

        {error && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            {error}
          </p>
        )}

        <p className="mt-8 text-center text-xs text-muted">
          {t.needHelp}{' '}
          <a href="mailto:razmyrazzak@outlook.com" className="text-gold hover:underline">
            razmyrazzak@outlook.com
          </a>
        </p>
      </article>
    </LegalLayout>
  );
}
