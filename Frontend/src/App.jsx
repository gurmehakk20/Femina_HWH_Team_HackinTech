// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorConsultationPage from './Pages/DoctorConsultationPage';
import HeroSection from './Components/HeroSection'; // Ensure this is where your HeroSection component is
import Navbar from './Components/Navbar' // Ensure this is where your Navbar component is
import GeneralFitness from './Components/GeneralFitness'
import CycleTracker from './Pages/PeriodTracker';
import BlogFAQ from './Pages/BlogFAQ';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HeroSection />} />

        <Route path="/doctor-consultation" element={<DoctorConsultationPage />} />
        <Route path="/general-fitness" element={<GeneralFitness />} />
        <Route path="/cycle-tracker" element={<CycleTracker />} />
        {/* <Route path="/faqs" element={<BlogFAQ />} /> */}
        
        
      </Routes>
    </Router>
  );
}

export default App;
