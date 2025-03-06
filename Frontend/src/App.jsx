import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorConsultationPage from './Pages/DoctorConsultationPage';
import HeroSection from './Components/HeroSection';
import Hero2 from './Components/Hero2';  // Assuming Hero2 is another component
import Navbar from './Components/Navbar';
import GeneralFitness from './Components/GeneralFitness';
import CycleTracker from './Pages/PeriodTracker';
import BlogFAQ from './Pages/BlogFAQ';
import AmbulanceBooking from './Pages/AmbulanceBooking';
import Resources from './Pages/Resources';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
        <HeroSection />
        <Hero2 />
        </>} />
        <Route path="/book-appointment" element={<DoctorConsultationPage />} />
        <Route path="/general-fitness" element={<GeneralFitness />} />
        <Route path="/cycle-tracker" element={<CycleTracker />} />
        <Route path="/ambulance" element={<AmbulanceBooking />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
