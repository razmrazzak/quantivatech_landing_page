import { Link, useParams, Navigate } from 'react-router-dom';
import { getLegalApp } from '../data/legal';
import LegalLayout from '../components/LegalLayout';
import LegalSection from '../components/LegalSection';

const DOC_META = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated',
    effectiveDateLabel: 'Effective date',
    backHome: 'Back to home',
    contactLabel: 'Contact',
    questions: 'Questions? Contact',
    viewTerms: (name) => `View ${name} Terms`,
    viewPrivacy: (name) => `View ${name} Privacy`,
    homeLink: 'Quantiva Tech home',
  },
  privacyDe: {
    title: 'Datenschutzerklärung',
    lastUpdatedLabel: 'Letzte Aktualisierung',
    effectiveDateLabel: 'Gültig ab',
    backHome: 'Zurück zur Startseite',
    contactLabel: 'Kontakt',
    questions: 'Fragen? Kontaktieren Sie',
    viewTerms: () => 'Nutzungsbedingungen',
    viewPrivacy: () => 'Datenschutzerklärung',
    homeLink: 'Quantiva Tech Startseite',
  },
  terms: {
    title: 'Terms & Conditions',
    lastUpdatedLabel: 'Last updated',
    effectiveDateLabel: 'Effective date',
    backHome: 'Back to home',
    contactLabel: 'Contact',
    questions: 'Questions? Contact',
    viewTerms: (name) => `View ${name} Terms`,
    viewPrivacy: (name) => `View ${name} Privacy`,
    homeLink: 'Quantiva Tech home',
  },
  termsDe: {
    title: 'Nutzungsbedingungen',
    lastUpdatedLabel: 'Zuletzt aktualisiert',
    effectiveDateLabel: 'Gültig ab',
    backHome: 'Zurück zur Startseite',
    contactLabel: 'Kontakt',
    questions: 'Fragen? Kontaktieren Sie',
    viewTerms: () => 'Nutzungsbedingungen',
    viewPrivacy: () => 'Datenschutzerklärung',
    homeLink: 'Quantiva Tech Startseite',
  },
};

export default function LegalDocumentPage({ appId: appIdProp, docType: docTypeProp }) {
  const params = useParams();
  const appId = appIdProp ?? params.appId;
  const docType = docTypeProp ?? params.docType;
  const app = getLegalApp(appId);

  if (!app || !DOC_META[docType] || !app[docType]) {
    return <Navigate to="/" replace />;
  }

  const document = app[docType];
  const meta = DOC_META[docType];
  const title = meta.title;
  const hasGermanPrivacy = Boolean(app.privacyDe);
  const hasGermanTerms = Boolean(app.termsDe);
  const isPrivacyFamily = docType === 'privacy' || docType === 'privacyDe';
  const isTermsFamily = docType === 'terms' || docType === 'termsDe';
  const isGerman = docType === 'privacyDe' || docType === 'termsDe';

  const privacyPath = isGerman && hasGermanPrivacy
    ? `/apps/${appId}/datenschutz`
    : `/apps/${appId}/privacy`;
  const termsPath = isGerman && hasGermanTerms
    ? `/apps/${appId}/nutzungsbedingungen`
    : `/apps/${appId}/terms`;

  return (
    <LegalLayout>
      <article className="container-narrow mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {meta.backHome}
        </Link>

        <header className="mb-10 border-b border-card-border pb-8">
          <div className="flex items-start gap-4">
            {app.appIcon && (
              <img
                src={app.appIcon}
                alt=""
                className="h-14 w-14 rounded-xl ring-1 ring-card-border"
                width={56}
                height={56}
              />
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {app.name}
              </p>
              <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h1>
              {app.tagline && (
                <p className="mt-2 text-sm text-muted">{app.tagline}</p>
              )}
            </div>
          </div>

          {((hasGermanPrivacy && isPrivacyFamily) || (hasGermanTerms && isTermsFamily)) && (
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Language">
              <Link
                to={isPrivacyFamily ? `/apps/${appId}/privacy` : `/apps/${appId}/terms`}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  !isGerman
                    ? 'bg-gold/20 text-gold'
                    : 'text-muted hover:bg-card-border/50 hover:text-ink'
                }`}
              >
                English
              </Link>
              <Link
                to={
                  isPrivacyFamily
                    ? `/apps/${appId}/datenschutz`
                    : `/apps/${appId}/nutzungsbedingungen`
                }
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isGerman
                    ? 'bg-gold/20 text-gold'
                    : 'text-muted hover:bg-card-border/50 hover:text-ink'
                }`}
              >
                Deutsch
              </Link>
            </div>
          )}

          <p className="mt-6 text-sm text-muted/70">
            {document.effectiveDate && (
              <>
                {meta.effectiveDateLabel}: {document.effectiveDate}
              </>
            )}
            {document.effectiveDate && document.lastUpdated && <br />}
            {document.lastUpdated ? (
              <>
                {meta.lastUpdatedLabel}: {document.lastUpdated}
              </>
            ) : (
              !document.effectiveDate && (
                <>
                  {meta.lastUpdatedLabel}:{' '}
                  {new Date(app.lastUpdated).toLocaleDateString(isGerman ? 'de-DE' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </>
              )
            )}
          </p>
          {app.contactEmail && (
            <p className="mt-2 text-sm text-muted">
              {meta.contactLabel}:{' '}
              <a href={`mailto:${app.contactEmail}`} className="text-gold hover:underline">
                {app.contactEmail}
              </a>
            </p>
          )}
          {document.externalUrl && (
            <a
              href={document.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
            >
              View full document on official site
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </header>

        <div className="prose-legal space-y-10">
          {document.sections.map((section) => (
            <LegalSection key={section.title} section={section} />
          ))}
        </div>

        <footer className="mt-12 border-t border-card-border pt-8">
          <p className="text-sm text-muted">
            {meta.questions}{' '}
            <a
              href={`mailto:${app.contactEmail}`}
              className="text-gold hover:underline"
            >
              {app.contactEmail}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            {isPrivacyFamily ? (
              <Link to={termsPath} className="text-muted hover:text-ink">
                {meta.viewTerms(app.name)}
              </Link>
            ) : (
              <Link to={privacyPath} className="text-muted hover:text-ink">
                {meta.viewPrivacy(app.name)}
              </Link>
            )}
            <Link to="/" className="text-muted hover:text-ink">
              {meta.homeLink}
            </Link>
          </div>
        </footer>
      </article>
    </LegalLayout>
  );
}
