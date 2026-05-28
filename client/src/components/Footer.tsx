export default function Footer() {
  return (
    <footer className="bg-[#FF6A13] text-white w-full">
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* Column 1: Affiliations */}
        <div>
          <h3 className="text-lg md:text-xl font-bold border-b border-white/30 pb-2 mb-4 md:mb-6 tracking-wide">
            Affiliations
          </h3>
          <div className="flex flex-wrap gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-xs">
            <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-1"></div>
            <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-1"></div>
            <div className="w-16 h-12 bg-white rounded flex items-center justify-center p-1"></div>
          </div>
        </div>

        {/* Column 2: Follow Us */}
        <div>
          <h3 className="text-lg md:text-xl font-bold border-b border-white/30 pb-2 mb-4 md:mb-6 tracking-wide">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {['FB', 'TW', 'IG', 'YT', 'LN'].map((social) => (
              <a 
                key={social} 
                href={`#${social}`} 
                className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white text-white hover:text-[#FF6A13] font-bold text-xs flex items-center justify-center border border-white/10 transition-all duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="sm:col-span-2 md:col-span-1 space-y-3">
          <h3 className="text-lg md:text-xl font-bold border-b border-white/30 pb-2 mb-4 md:mb-6 tracking-wide">
            Get In Touch
          </h3>
          <p className="text-xs md:text-sm font-light text-orange-50 leading-relaxed">
            📍Office C-85, Sector 2, Noida, Gautam Buddha Nagar, Noida, Uttar Pradesh, India, 201301.
          </p>
          <div className="space-y-1.5 text-xs md:text-sm font-semibold pt-1">
            <p className="flex items-center gap-2">📞 155330</p>
            <p className="flex items-center gap-2">📞 18008900718</p>
            <p className="flex items-center gap-2">✉️ Vizovy@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#D9530D] py-4 px-4 md:px-12 border-t border-white/5 text-[11px] md:text-xs text-orange-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p>© 2026 <span className="font-bold">SewaMitra</span>. All Rights Reserved.</p>
          <p className="font-mono opacity-80 text-[10px] md:text-xs">Last Updated On : 28-05-2026 11:46</p>
        </div>
      </div>
    </footer>
  );
}