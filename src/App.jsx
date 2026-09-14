import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LegalDocumentPage from './pages/LegalDocumentPage';
import ExpenseDeleteAccountPage from './pages/ExpenseDeleteAccountPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps/:appId/privacy" element={<LegalDocumentPage docType="privacy" />} />
        <Route path="/apps/:appId/terms" element={<LegalDocumentPage docType="terms" />} />
        <Route path="/apps/expense/delete-account" element={<ExpenseDeleteAccountPage />} />
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
