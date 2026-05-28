import { Shield, Users, MapPin, Calendar, CreditCard, Award } from "lucide-react";

export default function AboutCompany() {
  const companyDetails = [
    { icon: <Shield className="w-5 h-5 text-purple-600" />, label: "CIN", value: "U46109UP2025PTC225394" },
    { icon: <Calendar className="w-5 h-5 text-purple-600" />, label: "Incorporation", value: "4th June, 2025" },
    { icon: <Award className="w-5 h-5 text-purple-600" />, label: "Reg. No.", value: "225394" },
    { icon: <CreditCard className="w-5 h-5 text-purple-600" />, label: "Paid-up Capital", value: "₹10,000" },
  ];

  return (
    <section className="px-4 py-8 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
              Private Non-Govt Company
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              VIZOVY INNOVATIONS PRIVATE LIMITED
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              VIZOVY INNOVATIONS PRIVATE LIMITED is an established private company incorporated with MCA, 
              currently operating for over 11 months. Registered at RoC-Uttar Pradesh II.
            </p>
          </div>

          {/* Key Management */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" /> Key Management
            </h4>
            <div className="flex flex-wrap gap-2">
              {['HARIOM', 'CHANDAN DUBEY'].map((name) => (
                <span key={name} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-sm font-semibold text-slate-700">
                  👤 {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Cards) */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" /> Registered Office
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Office C-85, Sector 2, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301.
            </p>
            <button className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 rounded-xl text-sm font-semibold transition">
              Find Contact Details
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-3">
            {companyDetails.map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="mb-2">{item.icon}</div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                <p className="text-xs font-semibold text-slate-800 mt-0.5 truncate">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}