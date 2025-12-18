import React, { useEffect } from 'react';
import { Target, Eye, Building2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../constants';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { ABOUT, CORE_VALUES } = t;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-48 pb-32 min-h-screen bg-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <Reveal>
          <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-5 block">Beyond Payments</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">
            {ABOUT.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Nusacita</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            {ABOUT.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ownership & Origin */}
        <div className="bg-slate-50 rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 border border-slate-100 mb-32 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <Reveal direction="left" className="flex-1">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-slate-800 font-bold text-[10px] uppercase tracking-widest mb-10 border border-slate-200 shadow-sm">
                <Building2 className="w-4 h-4 text-primary-600" /> {ABOUT.structure}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">{ABOUT.foundationTitle}</h2>
              <div className="space-y-8">
                <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-light">
                  {ABOUT.foundationText1} <span className="font-black text-slate-900 underline decoration-primary-500 decoration-4 underline-offset-4">PT Artajasa Pembayaran Elektronis (Artajasa)</span> & <span className="font-black text-slate-900">Koperasi Nusacita</span>.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-light">
                  {ABOUT.foundationText2}
                </p>
              </div>
              <blockquote className="mt-12 border-l-4 border-primary-500 pl-10 py-6 italic text-2xl md:text-3xl font-serif text-slate-800 bg-white/50 rounded-r-[2rem] shadow-sm">
                "{ABOUT.quote}"
              </blockquote>
            </Reveal>
            
            <Reveal direction="right" delay={200} className="flex-1 w-full">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform group-hover:scale-[1.02] duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Financial Office Environment" 
                  className="w-full object-cover h-[500px] md:h-[650px]" 
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <Reveal direction="up" className="h-full">
            <div className="bg-primary-600 rounded-[3rem] md:rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden h-full group hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-2xl shadow-primary-900/30">
              <div className="relative z-10 flex-grow">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tight">{ABOUT.visionTitle}</h3>
                <p className="text-primary-100 leading-relaxed text-lg md:text-xl font-light">
                  {ABOUT.visionText}
                </p>
              </div>
              <div className="absolute -bottom-16 -right-16 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                <Eye className="w-80 h-80" />
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200} className="h-full">
            <div className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden h-full group hover:-translate-y-3 transition-all duration-500 shadow-2xl flex flex-col">
              <div className="relative z-10 flex-grow">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tight">{ABOUT.missionTitle}</h3>
                <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-light">
                  {ABOUT.missionText}
                </p>
              </div>
              <div className="absolute -bottom-16 -right-16 opacity-5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                <Target className="w-80 h-80" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values Grid */}
        <div className="py-24 text-center">
          <Reveal>
            <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-5 block">Our Principles</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-20 tracking-tight">{ABOUT.valuesTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {CORE_VALUES.map((val, i) => (
              <Reveal key={val.title} delay={i * 150} direction="up" className="h-full">
                <div className="h-full p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-primary-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-500 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-10 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <val.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{val.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-normal text-lg">{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;