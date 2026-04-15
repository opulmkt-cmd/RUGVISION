import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Calendar, Building2, LayoutGrid, Factory, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CreditsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    const email = 'jenna@opulmkt.com';
    const subject = 'RugVision™ Infrastructure Inquiry';
    const body = 'I would like to inquire about RugVision™ infrastructure for my organization.';
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-black/40 hover:text-black transition-colors group mb-12"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
      </button>

      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 bg-black/10 text-black rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-black/20">
          No Public Pricing
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-black mb-8">
          Custom AI Systems for <br />
          <span className="text-black">Design & Manufacturing</span>
        </h1>
        
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-xl font-bold text-black/40 italic">This is not a tool</p>
          <p className="text-xl font-bold text-black/40 italic">This is infrastructure</p>
        </div>

        <p className="text-lg text-black/60 max-w-2xl mx-auto leading-relaxed">
          RugVision™ is deployed based on your workflow, product category, and production needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { icon: <Users className="w-5 h-5" />, title: "Design Studios" },
          { icon: <Building2 className="w-5 h-5" />, title: "Brands" },
          { icon: <Factory className="w-5 h-5" />, title: "Manufacturers" },
          { icon: <LayoutGrid className="w-5 h-5" />, title: "Procurement Teams" }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-[2rem] border border-black/5 bg-white shadow-sm flex flex-col items-center text-center gap-4">
            <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center text-black">
              {item.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="relative -mx-6 sm:-mx-12 px-6 sm:px-12 py-24 overflow-hidden border-y border-black/5 bg-[#F0F7FF] text-black">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Tailored for your needs</h2>
            <p className="text-black/60 text-lg max-w-lg mx-auto">We'll understand your product category, design workflow, and production requirements to tailor a system for you.</p>
          </div>

          <button 
            onClick={handleConsultation}
            className="btn-primary px-12 py-5 text-lg shadow-xl hover:scale-105 transition-transform mx-auto"
          >
            Schedule a Consultation <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
