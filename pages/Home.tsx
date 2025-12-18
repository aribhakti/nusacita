import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Sparkles, ShieldCheck, Zap, Users, Shield, Lock, CreditCard, Star } from 'lucide-react';
import { CONTENT } from '../constants';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { HERO_CONTENT, PRODUCTS_LIST, CORE_VALUES } = t;

  return (
    <div className="relative flex flex-col w-full">
      {/* Dynamic Splash Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-primary-200/40 top-[-10%] left-[-10%] animate-blob"></div>
        <div className="orb w-[400px] h-[400px] bg-amber-100/40 top-[20%] right-[-5%] animate-blob [animation-delay:4s]"></div>
        <div className="orb w-[600px] h-[600px] bg-indigo-100/30 bottom-[-10%] left-[20%] animate-blob [animation-delay:8s]"></div>
        <div className="orb w-[300px] h-[300px] bg-primary-100/30 top-[40%] left-[50%] -translate-x-1/2 animate-blob [animation-delay:12s]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex flex-col justify-center pt-36 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-primary-100/50 text-primary-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-8 shadow-sm transition-all hover:border-primary-300 hover:scale-105 cursor-default">
              <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500 animate-shimmer" />
              <span>{HERO_CONTENT.memberOf}</span>
            </div>
          </Reveal>
          
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter leading-[1.1] mb-6">
                {HERO_CONTENT.headlineWords[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-amber-500 animate-gradient-x">
                  {HERO_CONTENT.headlineWords[1]} {HERO_CONTENT.headlineWords[2]}
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                {HERO_CONTENT.subheadline}
              </p>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/products" className="group relative w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold text-sm rounded-xl overflow-hidden transition-all animate-pulse-glow hover:-translate-y-1 active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {HERO_CONTENT.ctaPrimary} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-800 bg-white/40 backdrop-blur-md border border-slate-200/50 rounded-xl hover:bg-white hover:border-primary-200 transition-all active:scale-95 shadow-sm">
                  {HERO_CONTENT.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Dynamic Interactive Elements */}
          <div className="mt-16 relative max-w-3xl mx-auto">
            <Reveal delay={800}>
              <div className="relative rounded-[2.5rem] p-1.5 bg-white/30 backdrop-blur-3xl border border-white/50 shadow-2xl perspective-1000">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/5 via-transparent to-amber-500/5 rounded-[2.3rem] pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1500" 
                  alt="Modern Data Ecosystem" 
                  className="w-full rounded-[2.3rem] shadow-inner shadow-black/5 transform transition-transform duration-1000 hover:rotate-0 rotate-[0.3deg]"
                />
              </div>
            </Reveal>
            
            {/* Splash Float Cards */}
            <div className="absolute top-[-5%] -right-8 hidden lg:block animate-float">
               <div className="glass-surface p-4 rounded-xl shadow-xl w-44 flex items-center gap-3 border-l-4 border-l-primary-600">
                  <div className="w-8 h-8 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Trust</div>
                    <div className="text-[11px] font-black text-slate-900">Secure Core</div>
                  </div>
               </div>
            </div>
            <div className="absolute bottom-[10%] -left-10 hidden lg:block animate-float-slow [animation-delay:2s]">
               <div className="glass-surface p-4 rounded-xl shadow-xl w-48 flex items-center gap-3 border-l-4 border-l-amber-500">
                  <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Performance</div>
                    <div className="text-[11px] font-black text-slate-900">Ultra-fast Settlement</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Solutions Grid with Background Accent */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary-50/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-xl">
                <span className="text-primary-600 font-bold tracking-[0.25em] uppercase text-[10px] mb-3 block">{HERO_CONTENT.solutionsTitle}</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter leading-tight">
                  Modern <span className="text-slate-400 italic font-light">Ecosystem</span> <br/> 
                  Built for <span className="underline decoration-primary-500/50 decoration-4 underline-offset-4">Success</span>
                </h2>
              </div>
              <p className="text-slate-500 text-base font-medium max-w-sm md:text-right leading-relaxed">
                {HERO_CONTENT.solutionsDesc}
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS_LIST.map((product, i) => (
              <Reveal key={product.id} delay={i * 200} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Link to="/products" className="group block relative h-[400px] overflow-hidden rounded-[2.5rem] bg-slate-950 hover-lift shadow-lg">
                  <img 
                    src={product.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-[1.2s] group-hover:scale-105 group-hover:grayscale-0" 
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:via-slate-900/10 transition-all duration-700"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="w-12 h-12 glass-surface backdrop-blur-2xl rounded-xl flex items-center justify-center text-white mb-5 border border-white/20 group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <product.icon className="w-6 h-6 group-hover:text-white text-slate-200" />
                    </div>
                    <div className="space-y-1.5 transform transition-transform group-hover:-translate-y-1 duration-500">
                       <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter">{product.title}</h3>
                       <p className="text-slate-300 text-sm max-w-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">{product.description}</p>
                    </div>
                    <div className="mt-6 flex items-center text-amber-500 font-bold text-[9px] uppercase tracking-[0.3em] gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all delay-75">
                      {language === 'en' ? 'Explore Details' : 'Lihat Detail'} <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section: Contrast & Depth */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden rounded-[3rem] mx-4 my-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] animate-blob [animation-delay:5s]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <span className="text-primary-500 font-bold tracking-[0.35em] uppercase text-[10px] mb-5 block">Company Core</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-500">
                Pioneering <br/> Digital Economy.
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1.5 group">
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-primary-500 transition-colors">99.9%</div>
                  <div className="h-1 w-8 bg-primary-600 rounded-full group-hover:w-12 transition-all duration-700"></div>
                  <div className="text-slate-400 font-bold uppercase text-[8px] tracking-widest">Availability</div>
                </div>
                <div className="space-y-1.5 group">
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-amber-500 transition-colors">24/7</div>
                  <div className="h-1 w-8 bg-amber-500 rounded-full group-hover:w-12 transition-all duration-700"></div>
                  <div className="text-slate-400 font-bold uppercase text-[8px] tracking-widest">Expert Help</div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4">
              {CORE_VALUES.map((val, idx) => (
                <Reveal key={val.title} delay={idx * 150} direction="right">
                  <div className="dark-glass-surface p-6 rounded-2xl hover:bg-white/10 transition-all group border border-white/5 hover:border-white/20">
                    <div className="flex gap-5 items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-all">
                        <val.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-0.5 text-white group-hover:text-primary-400 transition-colors tracking-tight">{val.title}</h4>
                        <p className="text-slate-400 leading-relaxed font-medium text-xs md:text-sm">{val.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Final Gradient Splash */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <div className="w-16 h-16 bg-white/40 backdrop-blur-2xl text-primary-600 rounded-2xl border border-primary-100/50 flex items-center justify-center mx-auto mb-8 shadow-xl animate-float">
               <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-tight">
              {HERO_CONTENT.readyToScale} <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-amber-600">{HERO_CONTENT.scaleUp}</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 mb-12 max-w-md mx-auto font-medium leading-relaxed">
              {HERO_CONTENT.scaleDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-slate-950 text-white font-bold text-base rounded-xl hover:bg-primary-600 transition-all hover:shadow-lg active:scale-95">
                {HERO_CONTENT.startPartnership}
              </Link>
              <Link to="/information" className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 border border-slate-200/50 font-bold text-base rounded-xl hover:border-primary-400 hover:text-primary-600 transition-all active:scale-95">
                {HERO_CONTENT.readRegulations}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;