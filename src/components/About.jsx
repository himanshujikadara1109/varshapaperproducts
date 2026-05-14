import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Package } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

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
    <section id="about" className={`py-32 transition-colors duration-700 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
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
                <div className={`inline-flex w-24 h-24 p-2 rounded-[2rem] mb-8 border-2 overflow-hidden shadow-xl ${darkMode ? 'border-emerald-500/30 bg-white shadow-zinc-200/20' : 'border-emerald-500/50 bg-white shadow-zinc-200/50'}`}>
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

export default About;
