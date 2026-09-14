import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import LegalLayout from '../components/LegalLayout';
import {
  expenseAppConfig,
  isExpenseApiConfigured,
  isExpenseFirebaseConfigured,
} from '../config/expenseApp';
import { getExpenseAuth } from '../lib/expenseFirebase';
import { deleteExpenseAccount } from '../lib/expenseAccountApi';

const CONFIRM_WORD = 'DELETE';

export default function ExpenseDeleteAccountPage() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const configured = isExpenseFirebaseConfigured() && isExpenseApiConfigured();

  useEffect(() => {
    if (!isExpenseFirebaseConfigured()) {
      setAuthReady(true);
      return undefined;
    }

    const auth = getExpenseAuth();
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
      await signInWithEmailAndPassword(getExpenseAuth(), email.trim(), password);
    } catch (err) {
      setError(err?.message || 'Sign-in failed. Check your email and password.');
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    setError('');
    await signOut(getExpenseAuth());
    setConfirmText('');
    setAcknowledged(false);
  }

  async function handleDelete() {
    setError('');
    if (!acknowledged || confirmText !== CONFIRM_WORD) {
      setError(`Type ${CONFIRM_WORD} and confirm the checkbox to continue.`);
      return;
    }

    setBusy(true);
    try {
      const idToken = await user.getIdToken(true);
      const result = await deleteExpenseAccount(idToken);

      if (!result.ok) {
        setError(result.message + (result.code ? ` (${result.code})` : ''));
        return;
      }

      try {
        await signOut(getExpenseAuth());
      } catch {
        // account may already be removed server-side
      }

      setDone(true);
      setUser(null);
      setConfirmText('');
      setAcknowledged(false);
    } catch (err) {
      setError(err?.message || 'Something went wrong while deleting your account.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <LegalLayout>
      <article className="container-narrow mx-auto max-w-lg px-4 py-12 sm:px-6 lg:py-16">
        <Link
          to="/#expense"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {expenseAppConfig.appName}
        </Link>

        <header className="mb-8 flex items-start gap-4 border-b border-white/10 pb-8">
          <img
            src="/images/expense/app-icon.jpg"
            alt=""
            className="h-14 w-14 rounded-xl ring-1 ring-white/10"
            width={56}
            height={56}
          />
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-accent-cyan">
              {expenseAppConfig.appName}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
              Delete account
            </h1>
            <p className="mt-2 text-sm text-white/50">
              Google Play account deletion — permanently remove your account and data.
            </p>
          </div>
        </header>

        {!configured && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            This page is not configured yet. Set{' '}
            <code className="text-amber-100">VITE_EXPENSE_API_BASE_URL</code> and{' '}
            <code className="text-amber-100">VITE_EXPENSE_FIREBASE_*</code> in your environment
            (see <code className="text-amber-100">.env.example</code>), then rebuild.
          </div>
        )}

        {configured && done && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
            <p className="text-lg font-semibold text-emerald-300">Account deleted</p>
            <p className="mt-2 text-sm text-white/60">
              Your {expenseAppConfig.appName} account and associated data have been permanently
              removed. This cannot be undone.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15"
            >
              Return home
            </Link>
          </div>
        )}

        {configured && !done && (
          <>
            <div className="mb-6 rounded-xl border border-red-500/25 bg-red-500/10 p-4 text-sm text-red-200/90">
              <p className="font-semibold text-red-200">Warning — permanent deletion</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-red-200/80">
                <li>All transactions, scans, and reports will be deleted</li>
                <li>Your account cannot be recovered after confirmation</li>
                <li>You will need to create a new account to use the app again</li>
              </ul>
            </div>

            {!authReady ? (
              <p className="text-sm text-white/50">Loading…</p>
            ) : !user ? (
              <form onSubmit={handleLogin} className="space-y-4 rounded-2xl glass-strong p-6">
                <p className="text-sm text-white/60">
                  Sign in with the same Firebase account you use in {expenseAppConfig.appName}.
                </p>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Email
                  </span>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Password
                  </span>
                  <input
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50"
                  />
                </label>
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {busy ? 'Signing in…' : 'Sign in'}
                </button>
              </form>
            ) : (
              <div className="space-y-5 rounded-2xl glass-strong p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">Signed in as</p>
                    <p className="mt-1 text-sm font-medium text-white">{user.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-xs text-white/50 hover:text-white"
                  >
                    Sign out
                  </button>
                </div>

                <label className="flex items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={acknowledged}
                    onChange={(e) => setAcknowledged(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I understand this will permanently delete my account, all transactions, and
                    related data. This cannot be undone.
                  </span>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/40">
                    Type {CONFIRM_WORD} to confirm
                  </span>
                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder={CONFIRM_WORD}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-red-500/50"
                  />
                </label>

                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={busy || !acknowledged || confirmText !== CONFIRM_WORD}
                  className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-opacity hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {busy ? 'Deleting…' : 'Permanently delete my account'}
                </button>
              </div>
            )}
          </>
        )}

        {error && (
          <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        )}

        <p className="mt-8 text-center text-xs text-white/40">
          Need help?{' '}
          <a href="mailto:razmyrazzak@outlook.com" className="text-accent-cyan hover:underline">
            razmyrazzak@outlook.com
          </a>
        </p>
      </article>
    </LegalLayout>
  );
}
