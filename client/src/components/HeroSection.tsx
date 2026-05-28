const HeroSection = () => {
  return (
    <section id="home" className="text-center py-12 md:py-16 px-4 max-w-4xl mx-auto scroll-mt-20">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-tight">
        Find Home <span className="text-purple-600">Service/Repair</span>
        <br />
        Near You
      </h1>
      
      {/* Subheading */}
      <p className="text-gray-400 mt-3 md:mt-4 text-sm sm:text-base md:text-lg font-normal px-2">
        Explore Best Home Service & Repair near you
      </p>

      {/* Search Bar */}
      <div className="mt-6 md:mt-8 flex items-center max-w-xl mx-auto bg-white border border-gray-200 rounded-full py-1 pl-4 pr-1 shadow-xs focus-within:ring-2 focus-within:ring-purple-400 focus-within:border-transparent transition-all">
        <input 
          type="text" 
          placeholder="Search Services..." 
          className="w-full text-gray-700 placeholder-gray-400 focus:outline-none text-xs sm:text-sm md:text-base bg-transparent pl-1"
        />
        <button className="bg-purple-600 text-white p-2.5 md:p-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center shadow-md flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;