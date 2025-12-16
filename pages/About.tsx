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
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            {ABOUT.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Nusacita</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            {ABOUT.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ownership & Origin - Glass Card */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 mb-20 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <Reveal direction="left" className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-bold text-xs uppercase mb-8 hover:bg-primary-50 transition-colors">
                <Building2 className="w-4 h-4 text-primary-600" /> {ABOUT.structure}
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{ABOUT.foundationTitle}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {ABOUT.foundationText1} <strong>PT Artajasa Pembayaran Elektronis (Artajasa)</strong> & <strong>Koperasi Nusacita</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {ABOUT.foundationText2}
              </p>
              <blockquote className="border-l-4 border-primary-500 pl-6 py-2 italic text-2xl font-serif text-slate-800 bg-slate-50/50 rounded-r-xl group-hover:bg-primary-50/20 transition-colors">
                "{ABOUT.quote}"
              </blockquote>
            </Reveal>
            
            <Reveal direction="right" delay={200} className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-secondary-400 rounded-3xl rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Corporate Building" 
                className="rounded-3xl w-full object-cover h-96 shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-700" 
              />
            </Reveal>
          </div>
        </div>

        {/* Vision & Mission - Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Reveal direction="up" className="h-full">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-[2.5rem] p-12 text-white relative overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-500 flex flex-col shadow-2xl shadow-primary-900/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Eye className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">{ABOUT.visionTitle}</h3>
                <p className="text-primary-100 leading-relaxed text-lg">
                  {ABOUT.visionText}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200} className="h-full">
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 relative overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-500 shadow-xl flex flex-col hover:border-primary-200">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Target className="w-48 h-48 text-secondary-600" />
              </div>
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{ABOUT.missionTitle}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {ABOUT.missionText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values - 3 Column Grid */}
        <div className="mb-20">
          <Reveal>
            <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">{ABOUT.valuesTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, i) => (
              <Reveal key={val.title} delay={i * 200} direction="up" className="h-full">
                <div className="text-center p-10 bg-white rounded-[2rem] shadow-lg border border-slate-100 hover:border-primary-200 hover:shadow-2xl transition-all h-full flex flex-col items-center group relative overflow-hidden hover:-translate-y-2 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-50/0 to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-primary-600 mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary-100 group-hover:text-primary-700 shadow-sm">
                      <val.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{val.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
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