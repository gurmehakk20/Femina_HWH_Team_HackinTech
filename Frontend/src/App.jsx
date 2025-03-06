// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorConsultationPage from './Pages/DoctorConsultationPage';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import GeneralFitness from './Components/GeneralFitness';
import CycleTracker from './Pages/PeriodTracker';
import BlogFAQ from './Pages/BlogFAQ';
import AmbulanceBooking from './Pages/AmbulanceBooking';
import Resources from './Pages/Resources';
import Signup from './Pages/Signup';
import { useState, useEffect } from 'react';
import { fetchResources } from './api'; // Import the API utility

function App() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the fetchResources function to fetch data from the backend
    fetchResources()
      .then((data) => {
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/book-appointment" element={<DoctorConsultationPage />} />
        <Route path="/general-fitness" element={<GeneralFitness />} />
        <Route path="/cycle-tracker" element={<CycleTracker />} />
        <Route path="/ambulance" element={<AmbulanceBooking />} />
        <Route path="/resources" element={<Resources resources={resources} loading={loading} error={error} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
