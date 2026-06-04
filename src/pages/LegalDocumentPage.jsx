import { Link, useParams, Navigate } from 'react-router-dom';
import { getLegalApp } from '../data/legal';
import LegalLayout from '../components/LegalLayout';
import LegalSection from '../components/LegalSection';

const DOC_TITLES = {
  privacy: 'Privacy Policy',
  terms: 'Terms & Conditions',
};

export default function LegalDocumentPage({ appId: appIdProp, docType: docTypeProp }) {
  const params = useParams();
  const appId = appIdProp ?? params.appId;
  const docType = docTypeProp ?? params.docType;
  const app = getLegalApp(appId);

  if (!app || !DOC_TITLES[docType]) {
    return <Navigate to="/" replace />;
  }

  const document = app[docType];
  const title = DOC_TITLES[docType];

  return (
    <LegalLayout>
      <article className="container-narrow mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <header className="mb-10 border-b border-white/10 pb-8">
          <div className="flex items-start gap-4">
            {app.appIcon && (
              <img
                src={app.appIcon}
                alt=""
                className="h-14 w-14 rounded-xl ring-1 ring-white/10"
                width={56}
                height={56}
              />
            )}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent-blue">
                {app.name}
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h1>
              {app.tagline && (
                <p className="mt-2 text-sm text-white/50">{app.tagline}</p>
              )}
            </div>
          </div>
          <p className="mt-6 text-sm text-white/40">
            {document.effectiveDate && <>Effective date: {document.effectiveDate}</>}
            {document.effectiveDate && document.lastUpdated && <br />}
            {document.lastUpdated ? (
              <>Last updated: {document.lastUpdated}</>
            ) : (
              !document.effectiveDate && (
                <>
                  Last updated:{' '}
                  {new Date(app.lastUpdated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </>
              )
            )}
          </p>
          {app.contactEmail && (
            <p className="mt-2 text-sm text-white/50">
              Contact:{' '}
              <a href={`mailto:${app.contactEmail}`} className="text-accent-blue hover:underline">
                {app.contactEmail}
              </a>
            </p>
          )}
          {document.externalUrl && (
            <a
              href={document.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple transition-colors hover:bg-accent-purple/20"
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

        <footer className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            Questions? Contact{' '}
            <a
              href={`mailto:${app.contactEmail}`}
              className="text-accent-blue hover:underline"
            >
              {app.contactEmail}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            {docType === 'privacy' ? (
              <Link
                to={`/apps/${appId}/terms`}
                className="text-white/50 hover:text-white"
              >
                View {app.name} Terms
              </Link>
            ) : (
              <Link
                to={`/apps/${appId}/privacy`}
                className="text-white/50 hover:text-white"
              >
                View {app.name} Privacy
              </Link>
            )}
            <Link to="/" className="text-white/50 hover:text-white">
              Quantiva Tech home
            </Link>
          </div>
        </footer>
      </article>
    </LegalLayout>
  );
}
