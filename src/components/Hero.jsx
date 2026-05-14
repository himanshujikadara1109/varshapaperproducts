import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Target, Users, TrendingUp } from 'lucide-react';
import { COLORS } from '../constants';

const Hero = ({ darkMode }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="relative min-h-[100svh] lg:min-h-[110vh] flex items-center justify-center pt-28 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 h-[130%]"
      >
        <img
          src="/hero.webp"
          alt="Paper Machine Background"
          className="w-full h-full object-cover object-center absolute -top-[15%]"
        />
      </motion.div>

      {/* Overlay - Dramatically reduced opacity for light mode visibility */}
      <div className={`absolute inset-0 z-0 transition-colors duration-700 ${darkMode ? 'bg-zinc-950/80' : 'bg-white/30'}`}></div>
      <div className={`absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] transition-opacity duration-700 mix-blend-overlay ${darkMode ? 'opacity-20' : 'opacity-5 invert'}`}></div>

      {/* Blurred glow elements in bg */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-40 right-[-10%] sm:right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/20 blur-[100px] sm:blur-[150px] rounded-full" />
        <motion.div style={{ y: y2 }} className="absolute top-[60%] left-[-10%] sm:left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green-500/20 blur-[80px] sm:blur-[120px] rounded-full" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[1.1] sm:leading-[1.05] tracking-tighter mb-6 sm:mb-8 drop-shadow-2xl px-2 transition-colors duration-700 ${darkMode ? 'text-white' : 'text-zinc-900'}`}
        >
          Paper is the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 filter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Silent Partner
          </span> <br /> of every successful project.
        </motion.h1>

        {/* Floating Values at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-0"
        >
          {[
            { label: 'Vision', val: 'Global scale. Trusted impact. Radical transparency.', icon: <Eye className="w-5 md:w-6 h-5 md:h-6" /> },
            { label: 'Mission', val: 'We strive to deliver top-quality products at competitive prices, ensuring customer satisfaction.', icon: <Target className="w-5 md:w-6 h-5 md:h-6" /> },
            { label: 'Our Philosophy', val: 'A harmonious mix of dedication, expertise, and deep market understanding.', icon: <Users className="w-5 md:w-6 h-5 md:h-6" /> },
            { label: 'Our Strength', val: 'Dynamic team of young professionals equipped with modern technology and a strong sales network.', icon: <TrendingUp className="w-5 md:w-6 h-5 md:h-6" /> },
          ].map((stat, i) => (
            <div key={i} className={`backdrop-blur-xl border rounded-3xl py-6 px-4 transition-all duration-500 cursor-default flex flex-col items-center justify-start text-center h-full ${darkMode ? 'bg-black/30 border-white/10 hover:border-emerald-500/50 hover:bg-black/40' : 'bg-white/60 border-black/10 hover:border-emerald-500/50 hover:bg-white/80 shadow-xl shadow-zinc-200/50'}`}>
              <div className={`p-3 md:p-4 rounded-full mb-4 shadow-lg ring-1 ${darkMode ? 'bg-emerald-500/10 text-emerald-400 shadow-emerald-500/10 ring-emerald-500/20' : 'bg-emerald-50 text-emerald-600 shadow-emerald-500/20 ring-emerald-500/30'}`}>
                {stat.icon}
              </div>
              <p className={`text-xl md:text-2xl font-black mb-2 md:mb-3 tracking-wide ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{stat.label}</p>
              <p className={`text-[11px] md:text-xs font-medium opacity-90 leading-relaxed md:leading-relaxed max-w-[250px] ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>{stat.val}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
