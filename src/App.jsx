import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppDetailPage from './pages/AppDetailPage';
import LegalDocumentPage from './pages/LegalDocumentPage';
import ExpenseDeleteAccountPage from './pages/ExpenseDeleteAccountPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* App Detail Pages */}
        <Route path="/apps/:slug" element={<AppDetailPage />} />
        
        {/* Legal Pages */}
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
      </Routes>
    </BrowserRouter>
  );
}
