import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { ADDRESS, CONTENT, PHONE_1, PHONE_2 } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const t = CONTENT[language];
  const { CONTACT, OFFICE_HOURS } = t;

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  // Logic to split the title for black and red combination
  const titleParts = CONTACT.title.split(' ');
  const titleMain = titleParts[0];
  const titleAccent = titleParts.slice(1).join(' ');

  return (
    <div className="pt-48 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-40">
            <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-5 block">Support Center</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">
              {titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">{titleAccent}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              {CONTACT.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            <Reveal direction="left" delay={300}>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{CONTACT.addressTitle}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-lg">{ADDRESS}</p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{CONTACT.callTitle}</h3>
                <div className="flex flex-col gap-2 font-bold text-slate-700 text-xl">
                  <a href={`tel:${PHONE_1}`} className="hover:text-primary-600 transition-colors">{PHONE_1}</a>
                  <a href={`tel:${PHONE_2}`} className="hover:text-primary-600 transition-colors">{PHONE_2}</a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={500}>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{CONTACT.hoursTitle}</h3>
                <p className="text-slate-500 font-light text-lg">{OFFICE_HOURS}</p>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Reveal direction="up" delay={300}>
              <div className="bg-slate-50 p-8 md:p-16 rounded-[4rem] border border-slate-100 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-12 tracking-tight flex items-center gap-4">
                   <div className="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Send className="w-6 h-6" />
                   </div>
                   {CONTACT.formTitle}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{CONTACT.labels.name}</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{CONTACT.labels.email}</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-lg"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{CONTACT.labels.phone}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-lg"
                        placeholder="+62..."
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="subject" className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{CONTACT.labels.subject}</label>
                      <select 
                        id="subject" 
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-lg appearance-none cursor-pointer"
                      >
                        {CONTACT.subjects.map(subject => (
                          <option key={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">{CONTACT.labels.message}</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      required
                      className="w-full px-6 py-4 rounded-3xl border border-slate-200 bg-white focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all text-lg resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full py-6 rounded-2xl font-black text-xl text-white transition-all flex items-center justify-center gap-4 transform active:scale-95 shadow-2xl ${
                      formStatus === 'success' 
                        ? 'bg-green-600 shadow-green-600/20' 
                        : 'bg-primary-600 hover:bg-primary-700 shadow-primary-600/30'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      CONTACT.labels.sending
                    ) : formStatus === 'success' ? (
                      CONTACT.labels.sent
                    ) : (
                      <>{CONTACT.labels.send} <Send className="w-6 h-6" /></>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;