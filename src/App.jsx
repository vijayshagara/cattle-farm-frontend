import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import CowListPage from './features/cows/CowListPage';
import CowFormPage from './features/cows/CowFormPage';
import CowDetails from './features/cows/CowDetails';
import HealthPage from './features/health/HealthPage';
import HeatCyclePage from './features/heatCycles/HeatCyclePage';

import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';

export default function App() {
  const auth = useSelector(state => state.auth);

  return (
    <BrowserRouter>
      {auth?.user && <Navbar />}
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 🔐 Protected Routes */}
          <Route
            path="/"
            element={
              // <ProtectedRoute>
                <CowListPage />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/cows/:id"
            element={
              <ProtectedRoute>
                <CowDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cows/add"
            element={
              <ProtectedRoute roles={['admin']}>
                <CowFormPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cows/edit/:id"
            element={
              <ProtectedRoute roles={['admin']}>
                <CowFormPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/health"
            element={
              <ProtectedRoute>
                <HealthPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/heat-cycles"
            element={
              <ProtectedRoute>
                <HeatCyclePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
