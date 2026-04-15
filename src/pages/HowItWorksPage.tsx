import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Ruler, Truck, ShieldCheck, ArrowRight, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorksPage: React.FC = () => {
  const sections = [
    {
      title: "Step 1 — Input",
      icon: <Sparkles className="w-6 h-6 text-black" />,
      content: [
        "Users provide prompts, sketches, or references"
      ],
      image: "https://cdn.shopify.com/s/files/1/0718/2712/8409/files/Input.png?v=1776156662",
      accent: "bg-black/5"
    },
    {
      title: "Step 2 — AI Generation",
      icon: <Zap className="w-6 h-6 text-black" />,
      content: [
        "RugVision™ generates structured, production-aware designs"
      ],
      image: "https://cdn.shopify.com/s/files/1/0718/2712/8409/files/AI_generation.png?v=1776156661",
      accent: "bg-black/5"
    },
    {
      title: "Step 3 — Design Intelligence Layer",
      icon: <Layers className="w-6 h-6 text-black" />,
      content: [
        "The system aligns:",
        "• materials",
        "• textures",
        "• construction techniques"
      ],
      image: "https://cdn.shopify.com/s/files/1/0718/2712/8409/files/3_8fea4f2c-c804-40ab-b1a1-a7138d778a7e.png?v=1776156661",
      accent: "bg-black/5"
    },
    {
      title: "Step 4 — Production Integration",
      icon: <Truck className="w-6 h-6 text-black" />,
      content: [
        "Designs are converted into specifications for manufacturing"
      ],
      image: "https://cdn.shopify.com/s/files/1/0718/2712/8409/files/4_21eb5bec-1299-4253-98a1-07c0f67765c2.png?v=1776156661",
      accent: "bg-black/5"
    }
  ];

  const keyLine = "RugVision™ is not an image generator. It is a production-aware design system.";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-6 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black mb-2 block">
              The Journey
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tighter leading-[1.1] mb-6 whitespace-nowrap">
              From Vision to <span className="italic text-black">Masterpiece.</span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed">
              Discover how we combine cutting-edge AI technology with centuries-old 
              artisan craftsmanship to create rugs that are as unique as your imagination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-4">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className={`w-16 h-16 ${section.accent} rounded-2xl flex items-center justify-center`}>
                  {section.icon}
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold tracking-tight text-black">
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.content.map((line, i) => (
                    <p 
                      key={i} 
                      className={`text-lg ${line.includes('RugVision™') ? 'font-bold text-black' : 'text-black/60'} leading-tight`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-black/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500" />
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="relative w-full aspect-[4/3] object-cover rounded-[1.5rem] shadow-2xl transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Key Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4 text-center"
          >
            <p className="text-2xl md:text-3xl font-serif font-bold text-black italic">
              {keyLine}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F0F7FF] text-black overflow-hidden relative border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight">
              Ready to start your <span className="italic text-black">design journey?</span>
            </h2>
            <p className="text-black/60 text-lg">
              Join thousands of designers and homeowners who are redefining 
              luxury interiors with RugVision™.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link 
                to="/design" 
                className="btn-primary px-12 py-5 text-sm w-full sm:w-64 flex items-center justify-center gap-3"
              >
                Start Designing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/tiers" 
                className="btn-secondary px-12 py-5 text-sm w-full sm:w-64 flex items-center justify-center gap-3"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
