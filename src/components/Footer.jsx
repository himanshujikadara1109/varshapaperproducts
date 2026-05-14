import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Facebook, Heart } from 'lucide-react';

const Footer = ({ darkMode }) => (
  <footer className={`py-20 transition-colors duration-700 ${darkMode ? 'bg-zinc-950 border-t border-white/5' : 'bg-[#f4f4f5] border-t border-black/5'}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
      
      {/* Left side: Logo & Description */}
      <div className="col-span-1 md:col-span-2 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-emerald-500/50 flex-shrink-0 bg-white p-0.5">
            <img src="/logo.jpeg" alt="Varsha Paper Products" className="w-full h-full object-contain rounded-full" />
          </div>
          <span className={`font-black text-2xl md:text-3xl tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Varsha <span className="text-emerald-500">Paper Products</span></span>
        </div>
        <p className={`text-base md:text-lg max-w-md ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Leading the market as a trusted distributor, specializing in bulk paper sales with sustainable sourcing and efficient delivery.
        </p>
        <div className="flex gap-4">
          {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              key={i}
              href="#"
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${darkMode ? 'bg-zinc-900 border-white/5 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50' : 'bg-white border-black/5 text-zinc-500 hover:text-emerald-500 shadow-sm hover:border-emerald-500/30'
                }`}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Middle side: Links */}
      <div className="space-y-4 pt-2 md:pt-4">
        <ul className={`space-y-4 font-bold text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-emerald-500 transition-colors">About Us</a></li>
          <li><a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-emerald-500 transition-colors">Product</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-emerald-500 transition-colors">Contact Us</a></li>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-500 transition-colors">Home</a></li>
        </ul>
      </div>

      {/* Right side: Address */}
      <div className="space-y-6 pt-2 md:pt-4">
        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Registered Office Address</h4>
        <div className={`text-sm font-bold leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          <div className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            <p>Plot no 231, The People co-op bank gali, Near sub-jail, Ring Road, Khatodara, Udhana, Surat</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
        <span>© 2026 Varsha Paper Products. All Rights Reserved.</span>
        <span className="hidden md:inline"></span>
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-[10px] lowercase capitalize">Developed by</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span className="text-emerald-500 tracking-wide">Xroa Solution</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
