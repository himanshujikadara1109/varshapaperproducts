import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Menu, X, Leaf, ShieldCheck, DollarSign, Truck,
  ArrowRight, Recycle, Factory, ClipboardCheck,
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin,
  ChevronRight, Star, Sun, Moon, Zap, Globe, Package, Settings, Database, Beaker, Heart,
  Eye, Target, Users, TrendingUp
} from 'lucide-react';

// --- Theme Config ---
const COLORS = {
  primary: 'from-emerald-500 to-green-600',
  secondary: 'from-zinc-100 to-white',
  dark: 'from-zinc-900 via-zinc-950 to-black',
  accent: 'green-500'
};
// --- Components ---

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
                onClick={() => setActiveTab(link.name)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300
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
            className={`lg:hidden overflow-hidden mt-3 mx-4 rounded-3xl border shadow-2xl ${darkMode ? 'bg-zinc-900/95 border-white/10 backdrop-blur-xl' : 'bg-white/95 border-black/10 backdrop-blur-xl'}`}
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { setIsOpen(false); setActiveTab(link.name); }}
                  className={`px-4 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === link.name ? 'bg-emerald-500/10 text-emerald-500' : darkMode ? 'text-white hover:bg-white/5' : 'text-black hover:bg-black/5'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-emerald-500/20">
                <button className={`w-full bg-gradient-to-r ${COLORS.primary} text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/30`}>
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
          src="public/hero.webp"
          alt="Paper Machine Background"
          className="w-full h-full object-cover object-center absolute -top-[15%]"
        />
      </motion.div>

      {/* Overlay - Darkened for contrast */}
      <div className={`absolute inset-0 z-0 ${darkMode ? 'bg-zinc-950/80' : 'bg-black/60 backdrop-blur-[2px]'}`}></div>
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-30 mix-blend-overlay"></div>

      {/* Blurred glow elements in bg */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-40 right-[-10%] sm:right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-500/20 blur-[100px] sm:blur-[150px] rounded-full" />
        <motion.div style={{ y: y2 }} className="absolute top-[60%] left-[-10%] sm:left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green-500/20 blur-[80px] sm:blur-[120px] rounded-full" />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 sm:mb-8 border border-white/20 backdrop-blur-md text-emerald-400 bg-white/5`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Precision Paper Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[1.1] sm:leading-[1.05] tracking-tighter mb-6 sm:mb-8 text-white drop-shadow-2xl px-2"
        >
          Paper is the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 filter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Silent Partner
          </span> <br /> of every successful project.
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl max-w-[90%] sm:max-w-3xl leading-relaxed font-medium mb-10 sm:mb-12 text-zinc-300 drop-shadow-lg"
        >
          From pulp to finished rolls, we specialize in high-GSM unbleached kraft and Art paper with superior burst-factor and tensile properties.
        </motion.p> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full px-4 sm:px-0 sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto bg-gradient-to-r ${COLORS.primary} text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-bold text-sm md:text-base shadow-2xl shadow-green-500/40 flex items-center justify-center gap-3 group`}
          >
            VIEW GSM CATALOG <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-bold text-sm md:text-base border-2 transition-all border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            MILL VIRTUAL TOUR
          </motion.button> */}
        {/* </motion.div> */}

        {/* Floating Values at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-0"
        >
          {[
            { label: 'Vision', val: 'Global scale. Trusted impact. Radical transparency..', icon: <Eye className="w-5 md:w-6 h-5 md:h-6" /> },
            { label: 'Mission', val: 'We strive to deliver top-quality products at competitive prices, ensuring customer satisfaction.', icon: <Target className="w-5 md:w-6 h-5 md:h-6" /> },
            { label: 'Our Philosophy', val: 'A harmonious mix of dedication, expertise, and deep market understanding.', icon: <Users className="w-5 md:w-6 h-5 md:h-6" /> },
            { label: 'Our Strength', val: 'Dynamic team of young professionals equipped with modern technology and a strong sales network.', icon: <TrendingUp className="w-5 md:w-6 h-5 md:h-6" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl py-6 px-4 hover:border-emerald-500/50 hover:bg-black/40 transition-all cursor-default flex flex-col items-center justify-start text-center h-full">
              <div className="p-3 md:p-4 bg-emerald-500/10 text-emerald-400 rounded-full mb-4 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20">
                {stat.icon}
              </div>
              <p className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 tracking-wide">{stat.label}</p>
              <p className="text-[11px] md:text-xs font-medium text-zinc-300 opacity-90 leading-relaxed md:leading-relaxed max-w-[250px]">{stat.val}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, centered = false, darkMode }) => (
  <div className={`mb-20 space-y-4 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
    <motion.h4
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs"
    >
      {subtitle}
    </motion.h4>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={`text-4xl md:text-6xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-900'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const About = ({ darkMode }) => {
  const paperCategories = [
    {
      title: "Printing & Packaging",
      items: ["C2S (Art Paper)", "C1S (Cromo Paper)", "FBB", "SBS Board"]
    },
    {
      title: "Stationery & Office",
      items: ["Copier (Xerox) Paper", "Maplitho", "Ruled Paper (Notebook Sector)"]
    },
    {
      title: "Industrial & Specialized",
      items: ["Reels (Notebook/Industrial)", "Craft Paper", "Grey/White Back Board"]
    },
    {
      title: "Creative Solutions",
      items: ["Colour Paper", "Colour Card", "Sticker Sheets"]
    },
    {
      title: "Specialty",
      items: ["Wide range of specialty papers and board varieties"]
    }
  ];

  return (
    <section id="about" className={`py-32 transition-colors ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          subtitle="Our Legacy"
          title="About Varsha Paper Products"
          centered={true}
          darkMode={darkMode}
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-12 items-stretch">

          <div className="lg:col-span-4 xl:col-span-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 md:p-14 rounded-[3.5rem] border relative overflow-hidden h-full flex flex-col justify-center ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-zinc-50 border-black/5 shadow-2xl shadow-zinc-200/50'}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Factory className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className={`inline-flex w-24 h-24 p-2 rounded-[2rem] mb-8 border-2 border-emerald-500/30 overflow-hidden bg-white shadow-xl shadow-zinc-200/20`}>
                  <img src="/logo.jpeg" alt="Varsha Paper Products Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Varsha Paper<br />Products</h3>

                <div className="space-y-8 pt-8 mt-8 border-t border-emerald-500/20">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-1">Established</p>
                    <p className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Since 1990</p>
                    <p className={`text-sm mt-1 font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Over 30 years in the Paper Industry</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-1">Owner & Founder</p>
                    <p className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Vikrambhai VaghajiBhai Vora</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 xl:col-span-7 h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 rounded-[3.5rem] border h-full ${darkMode ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-black/5 shadow-2xl shadow-zinc-200/50'}`}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl"><Package className="w-8 h-8" /></div>
                <h4 className={`text-3xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Our Specialities</h4>
              </div>

              <div className="space-y-6">
                {paperCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h5 className="text-xs font-black uppercase tracking-widest text-emerald-500">{category.title}</h5>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold border transition-colors flex items-center gap-2 ${darkMode
                            ? 'bg-zinc-950 border-white/5 text-zinc-300 hover:border-emerald-500 hover:text-emerald-400'
                            : 'bg-zinc-50 border-black/5 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-white shadow-sm'
                            }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Products = ({ darkMode }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Art Paper",
      tag: "Premium Finish",
      image: "/Product/art.jpg",
      stats: "80 - 170 GSM"
    },
    {
      title: "Art Card",
      tag: "Stiff & Smooth",
      image: "/Product/artcard.jpg",
      stats: "170 - 400 GSM"
    },
    {
      title: "Cromo Paper",
      tag: "Glossy Coated",
      image: "/Product/cromopaper.jpg",
      stats: "Single Side Coated"
    },
    {
      title: "Maplitho Paper",
      tag: "Uncoated Woodfree",
      image: "/Product/Maplitho.jpg",
      stats: "18 - 140 GSM"
    },
    {
      title: "Color Paper",
      tag: "Vibrant Shades",
      image: "/Product/colorpaper.jpg",
      stats: "18 - 80 GSM"
    },
    {
      title: "Ruling Paper",
      tag: "Notebook Grade",
      image: "/Product/Ruling.jpg",
      stats: "44 - 70 GSM"
    },
    {
      title: "Copier Paper",
      tag: "A4 / A3 Sizes",
      image: "/Product/Copier.jpg",
      stats: "65 - 70 - 75 - 80- 100 GSM"
    },
    {
      title: "Sticker Sheet",
      tag: "Adhesive Backing",
      image: "/Product/Sticker.jpg",
      stats: "60 - 200 GSM"
    },
    {
      title: "Duplex Board",
      tag: "Grey/White Back",
      image: "/Product/Duplex.jpg",
      stats: "180 - 400 GSM"
    },
    // {
    //   title: "Card Sheet",
    //   tag: "Premium Finish",
    //   image: "/Product/Card.jpg",
    //   stats: "130 - 400 GSM"
    // },
    {
      title: "Tissue Paper",
      tag: "Premium Finish",
      image: "/Product/tissu.jpg",
      stats: "Smooth and Soft"
    }
  ];

  return (
    <section id="products" className={`py-32 transition-colors ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <SectionHeading subtitle="Product Lab" title="Industrial Paper Selection" darkMode={darkMode} />
          {/* <button className={`mb-20 px-8 py-4 rounded-2xl font-black text-sm border-2 transition-all ${darkMode ? 'border-zinc-800 text-white hover:bg-zinc-800' : 'border-zinc-200 text-zinc-900 hover:bg-zinc-50'
            }`}>
            DOWNLOAD TECHNICAL TDS
          </button> */}
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              onClick={() => setSelectedProduct(p)}
              className={`group min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center rounded-[3.5rem] overflow-hidden border transition-all duration-500 cursor-pointer ${darkMode ? 'bg-zinc-950 border-white/5 hover:border-emerald-500/50' : 'bg-white border-black/5 hover:border-emerald-500/50 shadow-xl shadow-zinc-200/50'
                }`}
            >
              <div className="h-72 overflow-hidden relative">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest">
                  {p.tag}
                </div>
              </div>
              <div className="p-10 space-y-4">
                <p className="text-[10px] font-black tracking-[0.2em] text-emerald-500 uppercase">{p.stats}</p>
                <h3 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{p.title}</h3>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedProduct(p); }}
                  className={`w-full py-4 rounded-2xl text-xs font-black border transition-all flex items-center justify-center gap-3 ${darkMode ? 'border-zinc-800 hover:bg-zinc-900 text-white' : 'border-zinc-100 hover:bg-zinc-50 text-zinc-900'
                    }`}>
                  VIEW DETAILS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-[3.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-2xl border ${darkMode ? 'bg-zinc-950 border-white/10' : 'bg-white border-black/10'}`}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className={`absolute top-6 right-6 p-3 rounded-full border transition-all ${darkMode ? 'bg-zinc-900 border-white/10 text-white hover:bg-zinc-800' : 'bg-zinc-100 border-black/5 text-black hover:bg-zinc-200'}`}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
                <img src={selectedProduct.image} className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <span className="px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase tracking-widest">{selectedProduct.tag}</span>
                  <h2 className={`mt-6 text-5xl md:text-6xl font-black tracking-tight leading-none ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{selectedProduct.title}</h2>
                  <p className={`mt-5 text-xl text-emerald-500 font-bold tracking-widest uppercase`}>{selectedProduct.stats}</p>
                </div>

                <p className={`text-lg leading-relaxed font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Premium quality <strong>{selectedProduct.title.toLowerCase()}</strong> manufactured using state-of-the-art multi-wire forming technology to ensure superior tensile strength, optical brightness, and excellent runnability for industrial and commercial applications.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex gap-4 items-center">
                    <div className="p-3 bg-emerald-500/20 text-emerald-500 rounded-xl"><ShieldCheck className="w-5 h-5" /></div>
                    <p className={`font-bold text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>ISO Certified Quality</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="p-3 bg-emerald-500/20 text-emerald-500 rounded-xl"><Recycle className="w-5 h-5" /></div>
                    <p className={`font-bold text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>Eco-Friendly Materials</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/916353469211?text=Hello%2C%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(selectedProduct.title)}`}
                  target="_blank"
                  className={`flex w-full py-5 rounded-2xl bg-gradient-to-r ${COLORS.primary} text-white font-black text-lg items-center justify-center gap-3 shadow-xl shadow-green-500/30 transition-transform hover:scale-105 active:scale-95`}
                >
                  REQUEST QUOTE <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, requirements } = formData;

    // Basic validation
    if (!name || !requirements) return;

    const text = `*New Inquiry via Website*%0A%0A*Name:* ${name}%0A*Contact:* ${contact}%0A*Requirements:* ${requirements}`;
    const whatsappUrl = `https://wa.me/916353469211?text=${text}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className={`py-32 transition-colors ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border transition-all ${darkMode ? 'bg-zinc-900 border-white/10' : 'bg-white border-black/5 shadow-2xl shadow-zinc-200'
          }`}>
          <div className={`lg:w-2/5 p-16 relative overflow-hidden bg-gradient-to-br ${COLORS.primary} text-white`}>
            <div className="relative z-10 space-y-12 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-5xl font-black leading-none tracking-tighter">Get In <br />Touch.</h3>
                {/* <p className="text-white/70 text-lg">Direct supply for both wholesale B2B and custom B2C requirements. Tell us what you need.</p> */}
              </div>

              <div className="space-y-8">
                <div className="flex gap-4 sm:gap-6 items-center overflow-hidden">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10"><Phone className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs uppercase font-black tracking-widest opacity-60">Call Us</p>
                    <p className="text-base sm:text-xl font-bold truncate">+91 63534 69211</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-6 items-center overflow-hidden">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-c
                  enter justify-center border border-white/10"><Globe className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs uppercase font-black tracking-widest opacity-60">Email Us</p>
                    <p className="text-base sm:text-xl font-bold truncate">varshapapers2020@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm italic opacity-80">"Consistency in GSM and BF has been the backbone of our packaging success."</p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-16 flex items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Full Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-8 py-5 rounded-3xl border focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${darkMode ? 'bg-zinc-950 border-white/5 text-white' : 'bg-zinc-50 border-black/5'
                      }`} placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Contact Info</label>
                  <input
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className={`w-full px-8 py-5 rounded-3xl border focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${darkMode ? 'bg-zinc-950 border-white/5 text-white' : 'bg-zinc-50 border-black/5'
                      }`} placeholder="Email or Phone Number" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Your Requirements</label>
                <textarea
                  rows="6"
                  required
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className={`w-full px-8 py-5 rounded-3xl border focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${darkMode ? 'bg-zinc-950 border-white/5 text-white' : 'bg-zinc-50 border-black/5'
                    }`} placeholder="Tell us exactly what you are looking for (e.g., GSM, paper type, quantity)..."></textarea>
              </div>
              <button type="submit" className={`w-full py-6 bg-gradient-to-r ${COLORS.primary} text-white rounded-3xl font-black text-lg shadow-2xl shadow-green-500/30 transition-all hover:scale-[1.02] active:scale-95`}>
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }) => (
  <footer className={`py-32 transition-colors ${darkMode ? 'bg-zinc-950 border-t border-white/5' : 'bg-zinc-100'}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-20">
      <div className="col-span-1 md:col-span-2 space-y-10">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/50 flex-shrink-0">
            <img src="/logo.jpeg" alt="Varsha Paper Products" className="w-full h-full object-cover" />
          </div>
          <span className={`font-black text-3xl tracking-tighter ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Varsha <span className="text-emerald-500">Paper Products</span></span>
        </div>
        <p className={`text-xl max-w-md ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
          Leading the market as a trusted distributor, specializing in bulk paper sales with sustainable sourcing and efficient delivery.
        </p>
        <div className="flex gap-4">
          {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
            <motion.a
              whileHover={{ y: -5, scale: 1.1 }}
              key={i}
              href="#"
              className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${darkMode ? 'bg-zinc-900 border-white/5 text-zinc-400 hover:text-emerald-500' : 'bg-white border-black/5 text-zinc-400 hover:text-emerald-500 shadow-sm'
                }`}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {/* <h4 className={`text-xs font-black uppercase tracking-[0.2em] ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Mill Units</h4> */}
        <ul className={`space-y-4 font-bold text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
          <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
          <li><a href="#products" className="hover:text-emerald-500 transition-colors">Product</a></li>
          <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact Us</a></li>
          <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
        </ul>
      </div>

      <div className="space-y-10">
        <h4 className={`text-xs font-black uppercase tracking-[0.2em] ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Manufacturing HQ</h4>
        <div className={`space-y-6 text-sm font-bold ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
          <div className="flex gap-4">
            <MapPin className="text-emerald-500 " />
            <p>Ploat no 231, The people co-op. bank gali, Near sub jail, Ring road, Khatodara, Udhnaa, Surat</p>
          </div>

        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">© 2026 Varsha Paper Products. All Rights Reserved.</p>
      <span className="text-xs text-zinc-500 font-medium ml-[-10px]">Developed </span>
      <span className="text-xs text-zinc-500 font-medium ml-[-20px]">by</span>
      <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse ml-[-20px]" />
      <span className="text-xs font-black text-emerald-500 tracking-wide ml-[-20px]">Xroa Solution</span>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 flex items-center justify-center gap-1.5">
      </div>
      {/* <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-500">
        <a href="#" className="hover:text-white">Compliance</a>
        <a href="#" className="hover:text-white">ISO Cert</a>
      </div> */}
    </div>

  </footer>
);

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
        <div className={`py-12 overflow-hidden border-y whitespace-nowrap ${darkMode ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-50 border-black/5'
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
                {/* <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>HIGH BF KRAFT</span> */}
                <Database className="w-8 h-8 text-emerald-500/20" />
                {/* <span className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white/10' : 'text-black/10'}`}>MULTI-WIRE FORMING</span> */}
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
        {/* Pulse ring */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        {/* WhatsApp Icon */}
        <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Tooltip */}
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