import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Database, Package } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light theme

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all duration-700 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 ${darkMode ? 'bg-zinc-950 text-zinc-300' : 'bg-white text-zinc-800'
      }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />

        {/* Animated Banner with Paper Stats */}
        <div className={`py-12 overflow-hidden border-y whitespace-nowrap transition-colors duration-700 ${darkMode ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-black/5 shadow-sm'
          }`}>
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-20 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex gap-6 items-center flex-shrink-0">
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>GSM CONSISTENCY</span>
                <Settings className="w-8 h-8 text-emerald-500/20" />
                <Database className="w-8 h-8 text-emerald-500/20" />
                <Package className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>C2S (Art Paper)</span>
                <Settings className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>C1S (Cromo Paper)</span>
                <Database className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>FBB</span>
                <Package className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>SBS Board</span>
                <Settings className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>Copier (Xerox) Paper</span>
                <Database className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>Maplitho</span>
                <Package className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>Ruled Paper (Notebook Sector)</span>
                <Settings className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>Colour Paper</span>
                <Database className="w-8 h-8 text-emerald-500/20" />
                <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>Colour Card</span>
                <Package className="w-8 h-8 text-emerald-500/20" />
              </div>
            ))}
          </motion.div>
        </div>

        <Products darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/916353469211?text=Hello%2C%20I%20am%20interested%20in%20your%20paper%20products."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer group"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-20 bg-white text-zinc-800 text-sm font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');
        
        :root {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#09090b' : '#f4f4f5'};
        }
        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 5px;
        }
        
        html {
          scroll-behavior: smooth;
        }

        .dark {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}