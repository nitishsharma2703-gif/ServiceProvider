interface Business {
  id: number;
  category: string;
  title: string;
  name: string;
  address: string;
  imageUrl: string;
}

const businessData: Business[] = [
  { id: 1, category: "Cleaning", title: "House Cleaning", name: "Jenny Wilson", address: "255 Grand Park Ave, New York", imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop" },
  { id: 2, category: "Cleaning", title: "Washing Cloths", name: "Emma Potter", address: "525 N Tyron Street, New York", imageUrl: "https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=500&auto=format&fit=crop" },
  { id: 3, category: "Repair", title: "House Repairing", name: "Ronaldo Epric", address: "412 N Tryon Street, New York", imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop" },
  { id: 4, category: "Cleaning", title: "Bathroom Cleaning", name: "Henny Wilson", address: "525 N Tyron Street, NC", imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop" },
  { id: 5, category: "Cleaning", title: "Floor Cleaning", name: "Harry Will", address: "Kallie Loop, NC", imageUrl: "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?q=80&w=500&auto=format&fit=crop" },
  { id: 6, category: "Cleaning", title: "Garage Cleaning", name: "Harry Brook", address: "164 Sam Street Road, Chicago", imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=500&auto=format&fit=crop" },
  { id: 7, category: "Cleaning", title: "Bathroom Cleaning", name: "Brook Shawn", address: "4747 N South Street, Chicago", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop" }
];

export default function PopularBusiness() {
  return (
    <section id="services-show" className="px-4 md:px-12 py-8 md:py-12 max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-6 md:mb-8 tracking-tight">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {businessData.map((business) => (
          <div 
            key={business.id} 
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            <div className="h-44 sm:h-48 overflow-hidden bg-slate-100 relative">
              <img 
                src={business.imageUrl} 
                alt={business.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-4 md:p-5 flex flex-col flex-grow">
              <div>
                <span className="inline-block text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full mb-2 bg-purple-50 text-purple-600">
                  {business.category}
                </span>
              </div>

              <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-1 group-hover:text-purple-600 transition-colors">
                {business.title}
              </h3>

              <p className="text-purple-600 font-medium text-xs md:text-sm mb-2">
                {business.name}
              </p>

              <p className="text-slate-400 text-[11px] md:text-xs mt-auto font-normal">
                {business.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}