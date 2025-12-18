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
        <div className="orb w-[600px] h-[600px] bg-primary-200/40 top-[-10%] left-[-10%] animate-blob"></div>
        <div className="orb w-[500px] h-[500px] bg-amber-100/40 top-[20%] right-[-5%] animate-blob [animation-delay:4s]"></div>
        <div className="orb w-[700px] h-[700px] bg-indigo-100/30 bottom-[-10%] left-[20%] animate-blob [animation-delay:8s]"></div>
        <div className="orb w-[400px] h-[400px] bg-primary-100/30 middle-center animate-blob [animation-delay:12s]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-56 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-primary-100 text-primary-600 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-12 shadow-sm transition-all hover:border-primary-300 hover:scale-105 cursor-default">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-shimmer" />
              <span>{HERO_CONTENT.memberOf}</span>
            </div>
          </Reveal>
          
          <div className="max-w-5xl mx-auto">
            <Reveal direction="up" delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-[1] mb-10">
                {HERO_CONTENT.headlineWords[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-amber-500 animate-gradient-x">
                  {HERO_CONTENT.headlineWords[1]} {HERO_CONTENT.headlineWords[2]}
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-lg md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
                {HERO_CONTENT.subheadline}
              </p>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/products" className="group relative w-full sm:w-auto px-12 py-6 bg-primary-600 text-white font-black text-lg rounded-2xl overflow-hidden transition-all animate-pulse-glow hover:-translate-y-1 active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    {HERO_CONTENT.ctaPrimary} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-12 py-6 text-lg font-black text-slate-800 bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl hover:bg-white hover:border-primary-300 transition-all active:scale-95 shadow-sm">
                  {HERO_CONTENT.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Dynamic Interactive Elements */}
          <div className="mt-24 relative max-w-5xl mx-auto">
            <Reveal delay={800}>
              <div className="relative rounded-[4rem] p-3 bg-white/20 backdrop-blur-3xl border border-white/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] perspective-1000">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-indigo-500/5 rounded-[3.8rem] pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                  alt="Modern Data Ecosystem" 
                  className="w-full rounded-[3.5rem] shadow-inner shadow-black/10 transform transition-transform duration-1000 hover:rotate-0 rotate-[0.5deg]"
                />
              </div>
            </Reveal>
            
            {/* Splash Float Cards */}
            <div className="absolute top-[-10%] -right-16 hidden lg:block animate-float">
               <div className="glass-surface p-6 rounded-[2rem] shadow-2xl w-56 flex items-center gap-5 border-l-4 border-l-primary-600">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Trust</div>
                    <div className="text-sm font-black text-slate-900">Enterprise Ready</div>
                  </div>
               </div>
            </div>
            <div className="absolute bottom-[20%] -left-20 hidden lg:block animate-float-slow [animation-delay:2s]">
               <div className="glass-surface p-6 rounded-[2rem] shadow-2xl w-60 flex items-center gap-5 border-l-4 border-l-amber-500">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Performance</div>
                    <div className="text-sm font-black text-slate-900">Real-time Core</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Solutions Grid */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
              <div className="max-w-3xl">
                <span className="text-primary-600 font-black tracking-[0.4em] uppercase text-xs mb-6 block">{HERO_CONTENT.solutionsTitle}</span>
                <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-tight">
                  Modern <span className="text-slate-400 italic font-light">Ecosystem</span> <br/> 
                  Built for <span className="underline decoration-primary-500 decoration-8 underline-offset-4">Growth</span>
                </h2>
              </div>
              <p className="text-slate-500 text-xl font-medium max-w-md md:text-right leading-relaxed">
                {HERO_CONTENT.solutionsDesc}
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCTS_LIST.map((product, i) => (
              <Reveal key={product.id} delay={i * 200} direction={i % 2 === 0 ? 'left' : 'right'}>
                <Link to="/products" className="group block relative h-[550px] overflow-hidden rounded-[4rem] bg-slate-950 hover-lift">
                  <img 
                    src={product.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-[1.5s] group-hover:scale-110 group-hover:grayscale-0" 
                    alt={product.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent group-hover:via-slate-900/10 transition-all duration-700"></div>
                  
                  <div className="absolute inset-0 p-16 flex flex-col justify-end">
                    <div className="w-20 h-20 glass-surface backdrop-blur-2xl rounded-[2rem] flex items-center justify-center text-white mb-10 border border-white/20 group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <product.icon className="w-10 h-10 group-hover:text-white text-slate-300" />
                    </div>
                    <div className="space-y-4 transform transition-transform group-hover:-translate-y-4 duration-500">
                       <h3 className="text-5xl font-black text-white tracking-tighter">{product.title}</h3>
                       <p className="text-slate-300 text-xl max-w-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{product.description}</p>
                    </div>
                    <div className="mt-10 flex items-center text-amber-500 font-black text-xs uppercase tracking-[0.3em] gap-4 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all delay-100">
                      {language === 'en' ? 'Explore Details' : 'Lihat Detail'} <ArrowRight className="w-5 h-5 animate-float-sideways" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contrast Section: Dark Impact */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden rounded-[5rem] mx-6 my-12">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[180px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-blob [animation-delay:5s]"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <Reveal direction="left">
              <span className="text-primary-500 font-black tracking-[0.5em] uppercase text-xs mb-8 block">Global Influence</span>
              <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-500">
                Pioneering <br/> Digital <br/> Economy.
              </h2>
              <div className="grid grid-cols-2 gap-16">
                <div className="space-y-4 group">
                  <div className="text-7xl font-black text-white tracking-tighter group-hover:text-primary-500 transition-colors">99.9%</div>
                  <div className="h-1.5 w-12 bg-primary-600 rounded-full group-hover:w-24 transition-all duration-700"></div>
                  <div className="text-slate-400 font-black uppercase text-[10px] tracking-widest">System Stability</div>
                </div>
                <div className="space-y-4 group">
                  <div className="text-7xl font-black text-white tracking-tighter group-hover:text-amber-500 transition-colors">24/7</div>
                  <div className="h-1.5 w-12 bg-amber-500 rounded-full group-hover:w-24 transition-all duration-700"></div>
                  <div className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Support Excellence</div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8">
              {CORE_VALUES.map((val, idx) => (
                <Reveal key={val.title} delay={idx * 200} direction="right">
                  <div className="dark-glass-surface p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group cursor-default border border-white/5 hover:border-white/20">
                    <div className="flex gap-8 items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl shadow-primary-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                        <val.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-2 text-white group-hover:text-primary-400 transition-colors tracking-tight">{val.title}</h4>
                        <p className="text-slate-400 leading-relaxed font-medium text-lg">{val.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Final Splash */}
      <section className="py-48 relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-amber-100/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <div className="w-28 h-28 bg-white/60 backdrop-blur-2xl text-primary-600 rounded-[2.5rem] border border-primary-100 flex items-center justify-center mx-auto mb-12 shadow-2xl animate-float">
               <Globe className="w-14 h-14" />
            </div>
            <h2 className="text-6xl md:text-[7rem] font-black text-slate-950 mb-12 tracking-tighter leading-[0.9]">
              {HERO_CONTENT.readyToScale} <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-amber-600">{HERO_CONTENT.scaleUp}</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
              {HERO_CONTENT.scaleDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-16 py-7 bg-slate-950 text-white font-black text-xl rounded-[2rem] hover:bg-primary-600 transition-all hover:shadow-[0_20px_60px_-10px_rgba(225,29,72,0.4)] hover:-translate-y-2 active:scale-95">
                {HERO_CONTENT.startPartnership}
              </Link>
              <Link to="/information" className="w-full sm:w-auto px-16 py-7 bg-white text-slate-950 border-2 border-slate-100 font-black text-xl rounded-[2rem] hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-xl active:scale-95">
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