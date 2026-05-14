import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { COLORS } from '../constants';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About US', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact US', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Small timeout to allow the menu close state to initiate
    setTimeout(() => {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // approximate height of fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        const link = navLinks.find(l => l.href === href);
        if (link) setActiveTab(link.name);
      }
    }, 10);
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled
      ? (darkMode ? 'bg-zinc-950/80 backdrop-blur-2xl border-b border-emerald-500/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-white/80 backdrop-blur-2xl border-b border-black/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]')
      : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-4 group cursor-pointer"
          >
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 border-2 flex-shrink-0 bg-white flex items-center justify-center p-1.5 
              ${isScrolled ? 'shadow-green-500/20 border-emerald-500/30' : 'shadow-green-500/40 border-emerald-500/50 group-hover:scale-105'}`}>
              <img src="/logo.jpeg" alt="Varsha Paper Products" className="w-full h-full object-contain" />
            </div>
            <span className={`font-black tracking-tighter transition-all duration-300 ${isScrolled ? 'text-sm sm:text-lg md:text-xl' : 'text-base sm:text-xl md:text-2xl'} ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
              Varsha <span className="text-emerald-500">Paper Products</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className={`hidden lg:flex items-center space-x-2 p-1.5 rounded-full backdrop-blur-md border ${darkMode ? 'bg-black/20 border-white/10 shadow-inner' : 'bg-white/50 border-black/5 shadow-inner'}`}>
            {navLinks.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer
                  ${activeTab === link.name
                    ? 'text-white bg-emerald-500 shadow-md shadow-emerald-500/30'
                    : darkMode
                      ? 'text-zinc-200 hover:text-white hover:bg-white/10'
                      : 'text-zinc-700 hover:text-black hover:bg-black/5'
                  }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 sm:p-3 rounded-full transition-all border ${darkMode ? 'bg-zinc-900 border-white/10 text-yellow-400 hover:bg-zinc-800' : 'bg-white border-black/10 text-zinc-600 hover:bg-zinc-50 shadow-sm'}`}
            >
              {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${darkMode ? 'bg-zinc-900 border-white/10' : 'bg-white border-black/10'}`}
            >
              {isOpen ? <X className={darkMode ? 'text-white' : 'text-black'} /> : <Menu className={darkMode ? 'text-white' : 'text-black'} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden mt-3 mx-4 rounded-3xl border shadow-2xl ${darkMode ? 'bg-zinc-900/95 border-white/10 backdrop-blur-xl' : 'bg-white/95 border-black/10 backdrop-blur-xl shadow-zinc-200'}`}
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === link.name ? 'bg-emerald-500/10 text-emerald-500' : darkMode ? 'text-white hover:bg-white/5' : 'text-black hover:bg-black/5'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-emerald-500/20">
                <button 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className={`w-full bg-gradient-to-r ${COLORS.primary} text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/30`}>
                  REQUEST SPECIFICATIONS
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
