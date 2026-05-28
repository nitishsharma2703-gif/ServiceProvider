import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleScroll = (id: string) => {
    setIsOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 max-w-7xl mx-auto">
        
        {/* Left Side: Hamburger + Logo */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div 
            className="flex items-center space-x-2.5 cursor-pointer select-none group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-purple-200 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 14l3 3 4-4" className="text-teal-300 stroke-[3]" />
              </svg>
            </div>
            
            <span className="font-extrabold text-base md:text-xl text-slate-800 tracking-tight max-w-[150px] sm:max-w-none truncate group-hover:text-purple-600 transition-colors">
              VIZOVY INNOVATIONS
              <span className="hidden sm:inline text-slate-400 font-normal text-xs md:text-sm ml-1.5 tracking-normal">PVT. LTD.</span>
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links (बदलाव: यहाँ <button> और handleScroll जोड़ दिया है) */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-purple-600 transition-colors cursor-pointer font-medium">
            Home
          </button>
          <button onClick={() => handleScroll("services-show")} className="hover:text-purple-600 transition-colors cursor-pointer font-medium">
            Services
          </button>
          <button onClick={() => handleScroll("about-company")} className="hover:text-purple-600 transition-colors cursor-pointer font-medium">
            About Us
          </button>
        </nav>

        {/* Right Side: Login Button */}
        <div className="flex items-center">
          <Link 
            to="/auth" 
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-4 py-2 md:px-6 md:py-2.5 rounded-xl transition-all duration-200 shadow-sm active:scale-95 text-xs md:text-sm whitespace-nowrap text-center block"
          >
            Login/Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 shadow-inner animate-fadeIn">
          <button 
            onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="w-full text-left block px-3 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-all"
          >
            Home
          </button>
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