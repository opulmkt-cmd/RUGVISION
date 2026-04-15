import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Palette, Ruler, Layers, ShieldCheck, Globe, Zap, Mail, ExternalLink, Copy, X, Factory, Box, Package, Sofa, Lamp, RectangleHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../lib/storage';
import { useFirebase } from '../components/FirebaseProvider';
import { auth, googleProvider, signInWithPopup } from '../firebase';
import { RugConfig } from '../types';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, profile } = useFirebase();
  const [prompt, setPrompt] = React.useState('');
  const [showContactModal, setShowContactModal] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const email = 'jenna@opulmkt.com';
  const subject = 'Inquiry from RugVision™ Platform';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`, '_blank');
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleStartDesigning = async () => {
    if (!prompt.trim()) return;

    // Create a default config for immediate visualization
    const defaultConfig: RugConfig = {
      prompt: prompt,
      colors: ['#EFBB76'],
      materialTypes: ['nz-wool'],
      preset: 'custom',
      width: 8,
      length: 10,
      construction: 'knotted-40',
      pileType: 'cut',
      pileHeight: 'standard',
      surfaceFinishes: ['tip-shear', 'sculpted'],
      seed: Math.floor(Math.random() * 1000000),
      midjourneyMode: false,
      shape: 'rectangle'
    };

    await storage.setLarge('rug_current_config', defaultConfig);
    await storage.remove('rug_generated_images');
    await storage.remove('rug_selected_variation');
    
    // Initialize guest credits if not set
    if (!storage.getSmall('guest_credits')) {
      storage.setSmall('guest_credits', '5');
    }
    
    navigate('/visualizer');
  };

  const handleCustomizeDesign = () => {
    if (prompt.trim()) {
      storage.setSmall('rug_initial_prompt', prompt);
    }
    // Initialize guest credits if not set
    if (!storage.getSmall('guest_credits')) {
      storage.setSmall('guest_credits', '5');
    }
    navigate('/design');
  };

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
          <img 
            src="https://picsum.photos/seed/rug-luxury/1920/1080?blur=2" 
            alt="Luxury Rug Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif font-bold text-black mb-8 leading-[0.9] tracking-tighter"
            >
              AI for Custom <br />
              Product Design.
            </motion.h1>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              RugVision™ is a modular AI system that transforms design concepts into production-ready products. 
              From rugs to future categories, we bridge digital creativity with real-world manufacturing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button 
                onClick={() => setShowContactModal(true)}
                className="btn-secondary px-10 py-5 text-lg"
              >
                Request a Demo
              </button>
            </div>

          </motion.div>
        </div>

        {/* Scrolling Headline - Full Width */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden whitespace-nowrap border-y border-black/5 py-10 bg-white/50 backdrop-blur-sm">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="inline-block text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-black"
          >
            Digital design meets real-world production. &nbsp;&nbsp;&nbsp;&nbsp;
            Digital design meets real-world production. &nbsp;&nbsp;&nbsp;&nbsp;
            Digital design meets real-world production. &nbsp;&nbsp;&nbsp;&nbsp;
            Digital design meets real-world production. &nbsp;&nbsp;&nbsp;&nbsp;
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="p-4 bg-[#F0F7FF] backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl rotate-[-6deg]">
            <Factory className="w-8 h-8 text-blue-600" />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 hidden lg:block"
        >
          <div className="p-4 bg-[#F0F7FF] backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl rotate-[12deg]">
            <Box className="w-8 h-8 text-blue-600" />
          </div>
        </motion.div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 px-6 border-b border-black/5 bg-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Built for Professionals", desc: "Built for designers, brands, and manufacturers who demand precision." },
              { title: "Production-Aware", desc: "Designed for production — not just visuals. Every pixel is a specification." },
              { title: "Modular System", desc: "A modular system designed to scale across multiple product categories." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-8 h-1 bg-blue-600" />
                <h3 className="text-xl font-bold uppercase tracking-widest text-black">{item.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Product Modules</h2>
            <p className="text-black/40 max-w-xl mx-auto font-medium">Our AI ecosystem is expanding to cover every facet of custom interior design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "RugVision™", 
                main: "RUG",
                suffix: "vision",
                desc: "AI-powered rug design and production system.", 
                status: "Active", 
                icon: RectangleHorizontal 
              },
              { 
                title: "Furniture Vision", 
                main: "FURNI",
                suffix: "ture vision",
                desc: "Custom furniture design and structural engineering.", 
                status: "Coming Soon", 
                icon: Sofa 
              },
              { 
                title: "Lighting Vision", 
                main: "LIGHT",
                suffix: "ing vision",
                desc: "Intelligent lighting design and technical specs.", 
                status: "Coming Soon", 
                icon: Lamp 
              }
            ].map((module, i) => (
              <div key={i} className={`p-10 rounded-[40px] border ${module.status === 'Active' ? 'border-blue-200 bg-[#F0F7FF]' : 'border-black/5 bg-black/[0.02] opacity-60'} transition-all`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${module.status === 'Active' ? 'bg-blue-600 text-white' : 'bg-black/10 text-black/40'}`}>
                  <module.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold tracking-tighter flex items-baseline gap-2">
                    <span className="text-4xl leading-none">{module.main}</span>
                    <span className="text-sm opacity-40">{module.suffix}</span>
                  </h3>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${module.status === 'Active' ? 'bg-[#F0F7FF] text-blue-600' : 'bg-black/10 text-black/40'}`}>
                    {module.status}
                  </span>
                </div>
                <p className="text-black/50 font-medium leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-black/40" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-black mb-2">Contact Our Team</h3>
                <p className="text-sm text-black/40">Choose your preferred way to reach out to Jenna.</p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={openGmail}
                  className="w-full flex items-center justify-between p-5 bg-black/[0.02] hover:bg-black/[0.05] border border-black/5 rounded-2xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-black/5">
                      <img src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" alt="Gmail" className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-black">Open in Gmail</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-black/20 group-hover:text-black/40 transition-colors" />
                </button>

                <div className="pt-4">
                  <div className="flex items-center gap-2 p-4 bg-black/5 rounded-2xl border border-dashed border-black/10">
                    <div className="flex-grow truncate text-xs font-mono text-black/60">
                      {email}
                    </div>
                    <button 
                      onClick={handleCopyEmail}
                      className="shrink-0 p-2 bg-white hover:bg-black/5 rounded-lg border border-black/5 transition-all flex items-center gap-2"
                    >
                      {copied ? (
                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4 text-black/40" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
