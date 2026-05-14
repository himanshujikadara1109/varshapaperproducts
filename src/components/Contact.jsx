import React, { useState } from 'react';
import { Phone, Globe, Star } from 'lucide-react';
import { COLORS } from '../constants';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, requirements } = formData;

    if (!name || !requirements) return;

    const text = `*New Inquiry via Website*%0A%0A*Name:* ${name}%0A*Contact:* ${contact}%0A*Requirements:* ${requirements}`;
    const whatsappUrl = `https://wa.me/916353469211?text=${text}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className={`py-32 transition-colors duration-700 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border transition-all ${darkMode ? 'bg-zinc-900 border-white/10' : 'bg-white border-black/5 shadow-2xl shadow-zinc-200'
          }`}>
          <div className={`lg:w-2/5 p-16 relative overflow-hidden bg-gradient-to-br ${COLORS.primary} text-white`}>
            <div className="relative z-10 space-y-12 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-5xl font-black leading-none tracking-tighter">Get In <br />Touch.</h3>
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10"><Globe className="w-5 h-5 sm:w-6 sm:h-6" /></div>
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
                    className={`w-full px-8 py-5 rounded-3xl border focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${darkMode ? 'bg-zinc-950 border-white/5 text-white' : 'bg-zinc-50 border-black/5 text-zinc-900'
                      }`} placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-50">Contact Info</label>
                  <input
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className={`w-full px-8 py-5 rounded-3xl border focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${darkMode ? 'bg-zinc-950 border-white/5 text-white' : 'bg-zinc-50 border-black/5 text-zinc-900'
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
                  className={`w-full px-8 py-5 rounded-3xl border focus:ring-2 focus:ring-emerald-500 outline-none transition-all ${darkMode ? 'bg-zinc-950 border-white/5 text-white' : 'bg-zinc-50 border-black/5 text-zinc-900'
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

export default Contact;
