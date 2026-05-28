export default function Footer() {
  return (
    <footer className="bg-[#FF6A13] text-white w-full">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Affiliations */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-b border-white/20 pb-2 uppercase tracking-wider">
            Affiliations
          </h3>
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                <span className="text-[10px]">Logo</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Follow Us */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-b border-white/20 pb-2 uppercase tracking-wider">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-3">
            {['FB', 'TW', 'IG', 'YT', 'LN'].map((social) => (
              <a 
                key={social} 
                href={`#${social}`} 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-[#FF6A13] flex items-center justify-center text-xs font-bold transition-all duration-300 transform hover:scale-110 border border-white/20"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold border-b border-white/20 pb-2 uppercase tracking-wider">
            Get In Touch
          </h3>
          <div className="text-sm text-orange-50 space-y-3">
            <p className="leading-relaxed">
              <span className="block font-bold text-white mb-1">📍 Office Address</span>
              Office C-85, Sector 2, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301.
            </p>
            <div className="space-y-1.5 pt-2">
              <p className="flex items-center gap-2 font-medium">📞 155330</p>
              <p className="flex items-center gap-2 font-medium">📞 1800-890-0718</p>
              <p className="flex items-center gap-2 font-medium">✉️ Vizovy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#D9530D] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[11px] md:text-xs text-orange-100">
          <p>© 2026 <span className="font-bold text-white">SewaMitra</span>. All Rights Reserved.</p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 opacity-80">
            <p>Last Updated: 28-05-2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}