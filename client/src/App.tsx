import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import ServicesShow from './components/ServicesShow';
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';

function App() {
  return (
    /* scroll-smooth जोड़ने से स्क्रॉलिंग एकदम मक्खन जैसी स्मूथ चलेगी */
    <div className="min-h-screen bg-slate-50/30 font-sans antialiased scroll-smooth">

      {/** Header part 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣ */}
      <Navbar />
      
      {/** Main content 2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣ */}
      <main>
        <HeroSection />
        <ServiceCards/>
        <ServicesShow/>
        <AboutCompany />
      </main>

      {/** Footer part 3️⃣3️⃣3️⃣3️⃣3️⃣3️⃣3️⃣3️⃣ */}
      <Footer />

    </div>
  );
}

export default App;