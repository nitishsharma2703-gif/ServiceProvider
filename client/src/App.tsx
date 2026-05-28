import {  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection';
import ServiceCategories from './components/ServiceCategories'; 
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';
import Gmail from './routes/gmail'; 
import ServicesPage from './components/ServicesShow'; 
import AllServices from './components/AlllServices'; 
import ServiceDetail from './routes/ServicesDetail'; // 1. डिटेल पेज कंपोनेंट को इम्पोर्ट किया

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceCategories /> 
        <AllServices />
        <AboutCompany />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
   
      <div className="min-h-screen bg-slate-50/30 font-sans antialiased scroll-smooth">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} /> 
          
          
          <Route path="/services/:id" element={<ServiceDetail />} /> 
          
          <Route path="/auth" element={<Gmail />} />
        </Routes>
      </div>
  
  );
}

export default App;