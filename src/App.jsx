import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HealthPage from './features/health/HealthPage';
import HeatCyclePage from './features/heatCycles/HeatCyclePage';
import CowListPage from './features/cows/CowListPage';
import CowFormPage from './features/cows/CowFormPage';
import CowDetails from './features/cows/CowDetails';



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<CowListPage />} />
          <Route path="/cows/:id" element={<CowDetails />} />
          <Route path="/cows/add" element={<CowFormPage />} />
          <Route path="/cows/edit/:id" element={<CowFormPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/heat-cycles" element={<HeatCyclePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
