import React from 'react';
import { motion } from 'motion/react';
import { Building2, LayoutGrid, ArrowRight, Calendar, Users, Settings, Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FeatureTiersPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    const email = 'jenna@opulmkt.com';
    const subject = 'RugVision™ Consultation Request';
    const body = 'I would like to schedule a consultation to discuss RugVision™ infrastructure for my organization.';
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 bg-black/10 text-black rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-black/20">
          Infrastructure for Design
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-8 leading-[1.1] tracking-tight">
          Custom AI Systems for <br />
          <span className="text-black">Design & Manufacturing</span>
        </h1>
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-xl font-bold text-black/40 italic">This is not a tool</p>
          <p className="text-xl font-bold text-black/40 italic">This is infrastructure</p>
        </div>
        <p className="text-lg md:text-xl text-black/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          RugVision™ is deployed based on your workflow, product category, and production needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {[
          { icon: <Users className="w-6 h-6" />, title: "Design Studios" },
          { icon: <Building2 className="w-6 h-6" />, title: "Brands" },
          { icon: <Factory className="w-6 h-6" />, title: "Manufacturers" },
          { icon: <LayoutGrid className="w-6 h-6" />, title: "Procurement Teams" }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-[2.5rem] border border-black/5 bg-black/[0.02] flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center text-black">
              {item.icon}
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="relative -mx-6 sm:-mx-12 px-6 sm:px-12 py-24 overflow-hidden border-y border-black/5 bg-[#F0F7FF] text-black">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to deploy?</h2>
            <button 
              onClick={handleConsultation}
              className="btn-primary px-12 py-6 text-xl shadow-2xl hover:scale-105 transition-transform"
            >
              Schedule a Consultation <Calendar className="w-6 h-6" />
            </button>
          </div>

          <div className="pt-12 border-t border-black/10 space-y-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black bg-black/5 px-3 py-1 inline-block">We'll understand:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Your product category",
                "Your design workflow",
                "Your production requirements"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-black/60">
                  <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                  {text}
                </div>
              ))}
            </div>
            <p className="text-sm text-black/40 font-medium italic">...and tailor a system for your needs.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
