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
    <div className="pt-32 pb-24 min-h-screen bg-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <Reveal>
          <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-4 block">Beyond Payments</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            {ABOUT.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Nusacita</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            {ABOUT.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ownership & Origin */}
        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 mb-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <Reveal direction="left" className="flex-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white text-slate-800 font-bold text-[10px] uppercase tracking-widest mb-8 border border-slate-200 shadow-sm">
                <Building2 className="w-3 h-3 text-primary-600" /> {ABOUT.structure}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">{ABOUT.foundationTitle}</h2>
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                  {ABOUT.foundationText1} <span className="font-black text-slate-900 underline decoration-primary-500 decoration-2 underline-offset-4">PT Artajasa Pembayaran Elektronis (Artajasa)</span> & <span className="font-black text-slate-900">Koperasi Nusacita</span>.
                </p>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
                  {ABOUT.foundationText2}
                </p>
              </div>
              <blockquote className="mt-10 border-l-4 border-primary-500 pl-8 py-4 italic text-xl md:text-2xl font-serif text-slate-800 bg-white/50 rounded-r-3xl shadow-sm">
                "{ABOUT.quote}"
              </blockquote>
            </Reveal>
            
            <Reveal direction="right" delay={200} className="flex-1 w-full">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl transform transition-transform group-hover:scale-[1.01] duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Financial Office Environment" 
                  className="w-full object-cover h-[400px] md:h-[500px]" 
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Reveal direction="up" className="h-full">
            <div className="bg-primary-600 rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden h-full group hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-xl">
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 group-hover:scale-105 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{ABOUT.visionTitle}</h3>
                <p className="text-primary-100 leading-relaxed text-base md:text-lg font-medium opacity-90">
                  {ABOUT.visionText}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200} className="h-full">
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden h-full group hover:-translate-y-2 transition-all duration-500 shadow-xl flex flex-col">
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 group-hover:scale-105 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{ABOUT.missionTitle}</h3>
                <p className="text-slate-400 leading-relaxed text-base md:text-lg font-medium">
                  {ABOUT.missionText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values Grid */}
        <div className="py-16 text-center">
          <Reveal>
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Principles</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">{ABOUT.valuesTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {CORE_VALUES.map((val, i) => (
              <Reveal key={val.title} delay={i * 150} direction="up" className="h-full">
                <div className="h-full p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-primary-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{val.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-base">{val.description}</p>
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