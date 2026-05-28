import { Shield, Users, MapPin, Calendar, CreditCard, Award } from "lucide-react";

export default function AboutCompany() {
  const companyDetails = [
    { icon: <Shield className="w-5 h-5 text-purple-600" />, label: "CIN", value: "U46109UP2025PTC225394" },
    { icon: <Calendar className="w-5 h-5 text-purple-600" />, label: "Incorporation Date", value: "4th June, 2025" },
    { icon: <Award className="w-5 h-5 text-purple-600" />, label: "Registration No.", value: "225394" },
    { icon: <CreditCard className="w-5 h-5 text-purple-600" />, label: "Paid-up Capital", value: "₹10,000" },
  ];

  return (
    <section id="about-company" className="mx-4 md:mx-auto px-4 md:px-12 py-10 md:py-16 max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-xs border border-slate-100 my-8 md:my-12 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        {/* Left Column: Text content */}
        <div className="lg:col-span-2 space-y-5 md:space-y-6">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="bg-purple-50 text-purple-700 text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full">
              Private Non-Govt Company
            </span>
            <span className="text-slate-400 text-[10px] md:text-xs">
              Last Updated: 27-04-2026
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            VIZOVY INNOVATIONS PRIVATE LIMITED
          </h2>
          
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            VIZOVY INNOVATIONS PRIVATE LIMITED is an established private company incorporated with MCA, currently operating for over 11 months. Listed as a Non-govt company, it is registered at the Registrar of Companies (ROC), RoC-Uttar Pradesh II.
          </p>

          <div className="p-4 md:p-5 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm md:text-base mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-600" /> Key Management / Directors
            </h4>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs md:text-sm font-semibold text-slate-700 mt-3">
              <span className="bg-white px-3 py-2 rounded-lg shadow-2xs border border-slate-200/60 block sm:inline">👤 HARIOM</span>
              <span className="bg-white px-3 py-2 rounded-lg shadow-2xs border border-slate-200/60 block sm:inline">👤 CHANDAN DUBEY</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-800 text-sm md:text-base">Nature of Business</h4>
            <p className="text-xs md:text-sm text-slate-500 bg-purple-50/30 p-3 md:p-4 rounded-xl border border-purple-100/30">
              Activities of other commission agents n.e.c. (including commission agents working in emerging areas for wholesale trade).
            </p>
          </div>
        </div>

        {/* Right Column: Quick Stats Cards */}
        <div className="space-y-4 md:space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-400" /> Registered Office
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Office C-85, Sector 2, Noida, Gautam Buddha Nagar, Noida, Uttar Pradesh, India, 201301.
            </p>
            <button className="mt-4 md:mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors">
              Find Contact Details
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {companyDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50/60 rounded-xl border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-2xs flex-shrink-0">{item.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium truncate">{item.label}</p>
                  <p className="text-xs md:text-sm font-bold text-slate-800 truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}