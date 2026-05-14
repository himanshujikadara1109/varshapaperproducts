import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ShieldCheck, Recycle } from 'lucide-react';
import { COLORS } from '../constants';
import { SectionHeading } from './SectionHeading';

const Products = ({ darkMode }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { title: "Art Paper", tag: "Premium Finish", image: "/Product/art.jpg", stats: "80 - 170 GSM" },
    { title: "Art Card", tag: "Stiff & Smooth", image: "/Product/artcard.jpg", stats: "170 - 400 GSM" },
    { title: "Cromo Paper", tag: "Glossy Coated", image: "/Product/cromopaper.jpg", stats: "Single Side Coated" },
    { title: "Maplitho Paper", tag: "Uncoated Woodfree", image: "/Product/Maplitho.jpg", stats: "18 - 140 GSM" },
    { title: "Color Paper", tag: "Vibrant Shades", image: "/Product/colorpaper.jpg", stats: "18 - 80 GSM" },
    { title: "Ruling Paper", tag: "Notebook Grade", image: "/Product/Ruling.jpg", stats: "44 - 70 GSM" },
    { title: "Copier Paper", tag: "A4 / A3 Sizes", image: "/Product/Copier.jpg", stats: "65 - 70 - 75 - 80- 100 GSM" },
    { title: "Sticker Sheet", tag: "Adhesive Backing", image: "/Product/Sticker.jpg", stats: "60 - 200 GSM" },
    { title: "Duplex Board", tag: "Grey/White Back", image: "/Product/Duplex.jpg", stats: "180 - 400 GSM" },
    { title: "Tissue Paper", tag: "Premium Finish", image: "/Product/tissu.jpg", stats: "Smooth and Soft" }
  ];

  return (
    <section id="products" className={`py-32 transition-colors duration-700 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <SectionHeading subtitle="Product Lab" title="Industrial Paper Selection" darkMode={darkMode} />
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

              <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 flex-shrink-0">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
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

                <div className={`space-y-4 pt-4 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
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

export default Products;
