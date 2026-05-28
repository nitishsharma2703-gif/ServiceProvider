import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categoriesData = [
  { id: 'Cleaning', name: 'Cleaning', color: 'text-purple-600', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/></svg> },
  { id: 'Repair', name: 'Repair', color: 'text-amber-500', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
  { id: 'Painting', name: 'Painting', color: 'text-teal-500', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M21 3l-9 9M21 3v5M21 3h-5"/></svg> },
  { id: 'Shifting', name: 'Shifting', color: 'text-red-500', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
  { id: 'Plumbing', name: 'Plumbing', color: 'text-orange-500', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { id: 'Electric', name: 'Electric', color: 'text-blue-600', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
];

const businessData = [
  // ================= CLEANING SERVICES =================
  { id: 1, category: "Cleaning", title: "Full House Cleaning", name: "Jenny Wilson", address: "255 Grand Park Ave, New York", imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop" },
  { id: 2, category: "Cleaning", title: "Professional Laundry", name: "Emma Potter", address: "525 N Tyron Street, New York", imageUrl: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500&auto=format&fit=crop" },
  { id: 4, category: "Cleaning", title: "Deep Bathroom Cleaning", name: "Henny Wilson", address: "525 N Tyron Street, NC", imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop" },
  { id: 5, category: "Cleaning", title: "Office & Floor Cleaning", name: "Harry Will", address: "Kallie Loop, NC", imageUrl: "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?q=80&w=500&auto=format&fit=crop" },
  // ================= REPAIR SERVICES =================
  { id: 3, category: "Repair", title: "Home Furniture Repair", name: "Ronaldo Epric", address: "412 N Tryon Street, New York", imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop" },
  { id: 10, category: "Repair", title: "AC & Refrigerator Repair", name: "Marcus Stoinis", address: "89 King Road, Los Angeles", imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=500&auto=format&fit=crop" },
  { id: 11, category: "Repair", title: "Washing Machine Fix", name: "David Warner", address: "747 Sunset Blvd, California", imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=500&auto=format&fit=crop" },
  // ================= PAINTING SERVICES =================
  { id: 6, category: "Painting", title: "Interior Home Painting", name: "Albert Flores", address: "164 Sam Street Road, Chicago", imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=500&auto=format&fit=crop" },
  { id: 7, category: "Painting", title: "Wall Texture & Design", name: "Brook Shawn", address: "4747 N South Street, Chicago", imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500&auto=format&fit=crop" },
  // ================= SHIFTING SERVICES =================
  { id: 12, category: "Shifting", title: "Packers & Movers", name: "John Logistics", address: "102 Cargo Hub, Houston", imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=500&auto=format&fit=crop" },
  // ================= PLUMBING SERVICES =================
  { id: 13, category: "Plumbing", title: "Kitchen & Pipe Leakage Fix", name: "Alex Pandian", address: "12 Water Tank Road, Miami", imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=500&auto=format&fit=crop" },
  // ================= ELECTRIC SERVICES =================
  { id: 14, category: "Electric", title: "Short Circuit & Wiring", name: "Tesla Electricians", address: "99 Power Grid, New York", imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=500&auto=format&fit=crop" }
];

export default function ServicesPage() {
  const location = useLocation();
  const navigate = useNavigate(); // हुक को इनिशियलाइज़ किया

  const [activeCategory, setActiveCategory] = useState(() => {
    return location.state?.selectedCategory || "Cleaning";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = businessData.filter(
    (item) => item.category === activeCategory
  );

  // कार्ड पर क्लिक होने पर डिटेल पेज पर नेविगेट करने का फंक्शन
  const handleCardClick = (service: typeof businessData[0]) => {
    navigate(`/services/${service.id}`, { state: { serviceData: service } });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] bg-white px-4 md:px-12 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="md:col-span-1 space-y-3">
            <h3 className="text-sm font-black text-slate-800 tracking-wider uppercase mb-4 pl-1">
              Categories
            </h3>
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none snap-x">
              {categoriesData.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center space-x-3.5 px-4 py-3.5 rounded-xl border text-sm font-bold transition-all duration-200 whitespace-nowrap snap-center w-full min-w-37.5 text-left cursor-pointer
                      ${isSelected 
                        ? "bg-purple-50 border-purple-300 text-purple-700 shadow-xs" 
                        : "bg-white border-gray-100 text-slate-600 hover:bg-slate-50 hover:border-gray-200"
                      }`}
                  >
                    <div className={`${isSelected ? "text-purple-600" : cat.color}`}>
                      {cat.icon}
                    </div>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT CARDS GRID ================= */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {activeCategory} Services
            </h2>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((business) => (
                  <div 
                    key={business.id} 
                    onClick={() => handleCardClick(business)} 
                    className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col group cursor-pointer"
                  >
                    <div className="h-44 sm:h-48 overflow-hidden bg-slate-50 relative">
                      <img 
                        src={business.imageUrl} 
                        alt={business.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-4 md:p-5 flex flex-col grow">
                      <div>
                        <span className="inline-block text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full mb-2 bg-purple-50 text-purple-600">
                          {business.category}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-1 group-hover:text-purple-600 transition-colors">
                        {business.title}
                      </h3>

                      <p className="text-purple-600 font-medium text-xs md:text-sm mb-1.5">
                        {business.name}
                      </p>

                      <p className="text-slate-400 text-[11px] md:text-xs font-normal mb-5">
                        {business.address}
                      </p>

                      <button className="mt-auto w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-xs active:scale-[0.98]">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-slate-400 text-sm font-medium">No services found in this category.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}