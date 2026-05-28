const HeroSection = () => {
  return (
    <section id="home" className="relative text-center py-16 md:py-24 px-4 max-w-3xl mx-auto scroll-mt-20">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-100/60 rounded-full blur-3xl -z-10" />

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
        Find Professional <br className="hidden sm:block" />
        <span className="text-purple-600">Service & Repair</span>
        <br />
        Near You
      </h1>
      
      {/* Subheading */}
      <p className="text-slate-500 text-sm md:text-lg mb-10 max-w-md mx-auto px-2">
        Trusted experts for all your home maintenance needs. Fast, reliable, and just a click away.
      </p>

      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-2 shadow-xl shadow-purple-500/10 transition-all focus-within:ring-2 focus-within:ring-purple-500/20">
        <div className="pl-3 text-slate-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Search cleaning, plumbing, repairs..." 
          className="w-full text-slate-700 placeholder-slate-400 focus:outline-none text-sm md:text-base bg-transparent px-3 py-2"
        />
        <button className="hidden sm:block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all">
          Search
        </button>
        {/* Mobile Search Button (Icon only) */}
        <button className="sm:hidden bg-purple-600 text-white p-3 rounded-xl">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Quick Tags */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {['Plumbing', 'Cleaning', 'Electrical', 'Painting', 'Repair'].map(tag => (
          <span 
            key={tag} 
            className="text-[10px] md:text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-purple-100 hover:text-purple-700 px-4 py-1.5 rounded-full cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;