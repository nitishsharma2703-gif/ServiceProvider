import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const allBusinessData = [
  { id: 1, category: "Cleaning", title: "Full House Cleaning", name: "Jenny Wilson", address: "255 Grand Park Ave, New York", imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop" },
  { id: 2, category: "Cleaning", title: "Professional Laundry", name: "Emma Potter", address: "525 N Tyron Street, New York", imageUrl: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500&auto=format&fit=crop" },
  { id: 4, category: "Cleaning", title: "Deep Bathroom Cleaning", name: "Henny Wilson", address: "525 N Tyron Street, NC", imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop" },
  { id: 5, category: "Cleaning", title: "Office & Floor Cleaning", name: "Harry Will", address: "Kallie Loop, NC", imageUrl: "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?q=80&w=500&auto=format&fit=crop" },
  { id: 3, category: "Repair", title: "Home Furniture Repair", name: "Ronaldo Epric", address: "412 N Tryon Street, New York", imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop" },
  { id: 10, category: "Repair", title: "AC & Refrigerator Repair", name: "Marcus Stoinis", address: "89 King Road, Los Angeles", imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=500&auto=format&fit=crop" },
  { id: 11, category: "Repair", title: "Washing Machine Fix", name: "David Warner", address: "747 Sunset Blvd, California", imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=500&auto=format&fit=crop" },
  { id: 6, category: "Painting", title: "Interior Home Painting", name: "Albert Flores", address: "164 Sam Street Road, Chicago", imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=500&auto=format&fit=crop" },
  { id: 7, category: "Painting", title: "Wall Texture & Design", name: "Brook Shawn", address: "4747 N South Street, Chicago", imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500&auto=format&fit=crop" },
  { id: 12, category: "Shifting", title: "Packers & Movers", name: "John Logistics", address: "102 Cargo Hub, Houston", imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=500&auto=format&fit=crop" },
  { id: 13, category: "Plumbing", title: "Kitchen & Pipe Leakage Fix", name: "Alex Pandian", address: "12 Water Tank Road, Miami", imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=500&auto=format&fit=crop" },
  { id: 14, category: "Electric", title: "Short Circuit & Wiring", name: "Tesla Electricians", address: "99 Power Grid, New York", imageUrl: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?q=80&w=500&auto=format&fit=crop" }
];

export default function ServiceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  
  
  const service = location.state?.serviceData;


  const activeService = service || allBusinessData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeService]);

 
  const similarBusinesses = allBusinessData.filter(
    (item) => item.category === activeService.category && item.id !== activeService.id
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-12 py-10 space-y-12 bg-white min-h-[80vh]">
        
       
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-slate-100 pb-10 relative">
          
          
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-purple-50 shadow-sm shrink-0 bg-slate-50">
            <img 
              src={activeService.imageUrl} 
              alt={activeService.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          
          <div className="flex-1 space-y-3.5 text-center md:text-left">
            <div>
              <span className="bg-purple-50 text-purple-600 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
                {activeService.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {activeService.title}
            </h1>

            <div className="space-y-2 text-slate-500 font-medium text-sm md:text-base">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-slate-400">📍</span> {activeService.address}
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-purple-600 font-semibold">
                <span className="text-purple-400">✉️</span> accounts@tubeguruji.com
              </p>
            </div>
          </div>

         
          <div className="md:text-right space-y-4 w-full md:w-auto flex flex-col items-center md:items-end">
            <button className="p-2.5 bg-slate-50 hover:bg-purple-50 hover:text-purple-600 text-slate-500 rounded-xl border border-slate-200/60 transition-all cursor-pointer">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.664-2.332m0 7.17l-4.664-2.332M21 12a3 3 0 11-6 0 3 3 0 016 0zM9 6a3 3 0 11-6 0 3 3 0 016 0zm0 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            
            <div className="space-y-1 text-center md:text-right">
              <p className="text-purple-600 font-bold text-base md:text-lg flex items-center justify-center md:justify-end gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                {activeService.name}
              </p>
              <p className="text-slate-400 font-medium text-xs md:text-sm flex items-center justify-center md:justify-end gap-1.5">
                <span>🕒</span> Available 8:00 AM to 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                Description
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>

           
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-100">
                  <img src={activeService.imageUrl} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </div>
                <div className="h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500" alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </div>
                <div className="h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500" alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-1 space-y-6">
            
           
            <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm md:text-base active:scale-[0.99] cursor-pointer">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </button>

          
            <div className="space-y-4">
              <h3 className="text-base font-black text-slate-900 tracking-tight">
                Similar Business
              </h3>
              
              <div className="space-y-3.5">
                {similarBusinesses.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => navigate(`/services/${item.id}`, { state: { serviceData: item } })}
                    className="flex gap-3.5 p-2 bg-white border border-slate-100/70 rounded-xl hover:border-purple-200 hover:shadow-xs transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-50">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-purple-600 font-semibold text-xs mt-0.5">
                        {item.name}
                      </p>
                      <p className="text-slate-400 text-[11px] truncate mt-0.5">
                        {item.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}