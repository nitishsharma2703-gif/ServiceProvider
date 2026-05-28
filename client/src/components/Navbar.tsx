import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsOpen(false); // मोबाइल मेनू बंद करने के लिए
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 flex flex-col justify-center items-center space-y-0.5">
            <span className="w-4 h-0.5 bg-white rounded"></span>
            <span className="w-4 h-0.5 bg-white rounded"></span>
            <span className="w-4 h-0.5 bg-white rounded"></span>
          </div>
          <span className="font-bold text-base md:text-xl text-slate-800 tracking-tight max-w-[180px] sm:max-w-none truncate">
            VIZOVY INNOVATIONS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#services-show" className="hover:text-purple-600 transition-colors">Services</a>
          <a href="#about-company" className="hover:text-purple-600 transition-colors">About Us</a>
        </nav>

        {/* Right Actions (Profile & Hamburger) */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-teal-800 flex items-center justify-center text-white font-semibold cursor-pointer shadow-sm hover:opacity-90 text-sm md:text-base">
            G
          </div>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 shadow-inner animate-fadeIn">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-all"
          >
            Home
          </a>
          <button 
            onClick={() => handleScroll("services-show")} 
            className="w-full text-left block px-3 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-all"
          >
            Services
          </button>
          <button 
            onClick={() => handleScroll("about-company")} 
            className="w-full text-left block px-3 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-all"
          >
            About Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;