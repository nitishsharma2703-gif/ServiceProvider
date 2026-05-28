import { useNavigate } from "react-router-dom";

// 1. Data Type Interface
interface Business {
  id: number;
  category: string;
  title: string;
  name: string;
  address: string;
  imageUrl: string;
}

// 2. Data Array
const businessData: Business[] = [
  { id: 1, category: "Cleaning", title: "Full House Cleaning", name: "Jenny Wilson", address: "255 Grand Park Ave, New York", imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop" },
  { id: 2, category: "Cleaning", title: "Professional Laundry", name: "Emma Potter", address: "525 N Tyron Street, New York", imageUrl: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500&auto=format&fit=crop" },
  { id: 3, category: "Repair", title: "Home Furniture Repair", name: "Ronaldo Epric", address: "412 N Tryon Street, New York", imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop" },
  { id: 4, category: "Cleaning", title: "Deep Bathroom Cleaning", name: "Henny Wilson", address: "525 N Tyron Street, NC", imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop" },
  { id: 5, category: "Cleaning", title: "Office & Floor Cleaning", name: "Harry Will", address: "Kallie Loop, NC", imageUrl: "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?q=80&w=500&auto=format&fit=crop" },
  { id: 6, category: "Painting", title: "Interior Home Painting", name: "Albert Flores", address: "164 Sam Street Road, Chicago", imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=500&auto=format&fit=crop" }
];

export default function AllServices() {
  const navigate = useNavigate();

  // 3. Typed Function
  const handleCardClick = (service: Business) => {
    navigate(`/services/${service.id}`, { state: { serviceData: service } });
  };

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-slate-900">All Services</h1>
        <p className="text-slate-500 text-sm mt-2">Explore all professional home care services.</p>
      </div>

      {/* Grid: Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessData.map((business) => (
          <div 
            key={business.id} 
            onClick={() => handleCardClick(business)}
            className="group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-row sm:flex-col p-3 gap-4 sm:gap-0"
          >
            {/* Image Section */}
            <div className="w-24 h-24 sm:w-full sm:h-48 rounded-xl overflow-hidden shrink-0">
              <img 
                src={business.imageUrl} 
                alt={business.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center sm:p-4">
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 leading-tight group-hover:text-purple-700">
                {business.title}
              </h3>
              <p className="text-slate-400 text-[11px] sm:text-xs mt-1 font-medium">{business.name}</p>
              
              <button className="hidden sm:flex mt-4 w-full bg-slate-900 hover:bg-purple-600 text-white text-xs font-bold py-2.5 rounded-xl transition-all items-center justify-center">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}