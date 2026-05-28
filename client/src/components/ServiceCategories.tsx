import React from "react";
import { useNavigate } from "react-router-dom";

// Interface for type safety
interface Service {
  id: number;
  name: string;
  color: string;
  icon: React.ReactNode;
}

const servicesData: Service[] = [
  { id: 1, name: 'Cleaning', color: 'text-purple-600', icon: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/></svg> },
  { id: 2, name: 'Repair', color: 'text-amber-500', icon: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
  { id: 3, name: 'Painting', color: 'text-teal-500', icon: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M21 3l-9 9M21 3v5M21 3h-5"/></svg> },
  { id: 4, name: 'Shifting', color: 'text-red-500', icon: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> },
  { id: 5, name: 'Plumbing', color: 'text-orange-500', icon: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { id: 6, name: 'Electric', color: 'text-blue-600', icon: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
];

export default function ServiceCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate("/services", { state: { selectedCategory: categoryName } });
  };

  return (
    <section className="px-4 py-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            onClick={() => handleCategoryClick(service.name)}
            className="group flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-purple-100 hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <div className={`mb-2 p-2 rounded-full bg-slate-50 ${service.color} group-hover:bg-purple-50 transition-colors`}>
              {service.icon}
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-700 tracking-tight text-center truncate w-full">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}