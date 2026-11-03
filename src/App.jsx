import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppDetailPage from './pages/AppDetailPage';
import LegalDocumentPage from './pages/LegalDocumentPage';
import ExpenseDeleteAccountPage from './pages/ExpenseDeleteAccountPage';
import MealmiraDeleteAccountPage from './pages/MealmiraDeleteAccountPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Legal & account pages before /apps/:slug */}
        <Route path="/apps/:appId/privacy" element={<LegalDocumentPage docType="privacy" />} />
        <Route path="/apps/:appId/terms" element={<LegalDocumentPage docType="terms" />} />
        <Route
          path="/apps/expense/datenschutz"
          element={<LegalDocumentPage appId="expense" docType="privacyDe" />}
        />
        <Route
          path="/apps/expense/privacy/de"
          element={<Navigate to="/apps/expense/datenschutz" replace />}
        />
        <Route
          path="/apps/expense/nutzungsbedingungen"
          element={<LegalDocumentPage appId="expense" docType="termsDe" />}
        />
        <Route
          path="/apps/expense/terms/de"
          element={<Navigate to="/apps/expense/nutzungsbedingungen" replace />}
        />
        <Route path="/apps/expense/delete-account" element={<ExpenseDeleteAccountPage lang="en" />} />
        <Route
          path="/apps/expense/konto-loeschen"
          element={<ExpenseDeleteAccountPage lang="de" />}
        />
        <Route
          path="/apps/expense/delete-account/de"
          element={<Navigate to="/apps/expense/konto-loeschen" replace />}
        />
        <Route
          path="/apps/mealmira/datenschutz"
          element={<LegalDocumentPage appId="mealmira" docType="privacyDe" />}
        />
        <Route
          path="/apps/mealmira/privacy/de"
          element={<Navigate to="/apps/mealmira/datenschutz" replace />}
        />
        <Route
          path="/apps/mealmira/nutzungsbedingungen"
          element={<LegalDocumentPage appId="mealmira" docType="termsDe" />}
        />
        <Route
          path="/apps/mealmira/terms/de"
          element={<Navigate to="/apps/mealmira/nutzungsbedingungen" replace />}
        />
        <Route
          path="/apps/mealmira/delete-account"
          element={<MealmiraDeleteAccountPage lang="en" />}
        />
        <Route
          path="/apps/mealmira/konto-loeschen"
          element={<MealmiraDeleteAccountPage lang="de" />}
        />
        <Route
          path="/apps/mealmira/delete-account/de"
          element={<Navigate to="/apps/mealmira/konto-loeschen" replace />}
        />
        <Route path="/apps/habitflow/privacy" element={<Navigate to="/apps/habitica/privacy" replace />} />
        <Route path="/apps/habitflow/terms" element={<Navigate to="/apps/habitica/terms" replace />} />
        <Route
          path="/privacy"
          element={<LegalDocumentPage appId="quantivatech" docType="privacy" />}
        />
        <Route
          path="/terms"
          element={<LegalDocumentPage appId="quantivatech" docType="terms" />}
        />

        {/* App detail pages */}
        <Route path="/apps/:slug" element={<AppDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
