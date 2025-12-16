import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ChevronRight, Globe, CreditCard } from 'lucide-react';
import { CONTENT } from '../constants';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { HERO_CONTENT, PRODUCTS_LIST, CORE_VALUES } = t;

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">
      {/* Hero Section - BRIGHT Light Theme with Enhanced Background */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 pt-24 pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Subtle moving noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light animate-pulse-slow"></div>
          
          {/* Dynamic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/50 to-slate-50"></div>
          
          {/* Enhanced Floating Blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-rose-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-4000"></div>
          
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-gradient-to-r from-primary-50/30 to-rose-50/30 rounded-full blur-[80px] mix-blend-normal"></div>

          {/* Abstract Grid Overlay */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(244, 63, 94, 0.08) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200 text-primary-600 font-semibold text-xs md:text-sm mb-8 shadow-sm shadow-primary-500/10 hover:scale-105 transition-transform cursor-default select-none">
              <Globe className="w-3 h-3 text-primary-500 animate-spin-slow" />
              <span>{HERO_CONTENT.memberOf}</span>
            </div>
          </Reveal>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 drop-shadow-sm">
            <Reveal direction="pop" delay={200} className="inline-block">
              {HERO_CONTENT.headlineWords[0]}
            </Reveal>
            <span className="md:hidden"> </span>
            <br className="hidden md:block"/>
            <Reveal direction="pop" delay={400} className="inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 animate-gradient-x px-2">
                {HERO_CONTENT.headlineWords[1]}
              </span>
            </Reveal>
            {' '}
            <Reveal direction="pop" delay={600} className="inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 animate-gradient-x">
                {HERO_CONTENT.headlineWords[2]}
              </span>
            </Reveal>
          </h1>
          
          <Reveal delay={800}>
            <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              {HERO_CONTENT.subheadline}
            </p>
          </Reveal>
          
          <Reveal delay={1000}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              <Link 
                to="/products" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-primary-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 hover:bg-primary-500 shadow-[0_4px_20px_rgba(244,63,94,0.3)] hover:shadow-[0_8px_30px_rgba(244,63,94,0.5)] transform hover:-translate-y-1 active:translate-y-0 border border-primary-500"
              >
                {HERO_CONTENT.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-full text-slate-600 hover:bg-white hover:border-primary-200 hover:text-primary-600 transition-all bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md active:scale-95"
              >
                {HERO_CONTENT.ctaSecondary}
              </Link>
            </div>
          </Reveal>

          {/* Large Hero Image / Dashboard Mockup */}
          <Reveal delay={1200} className="relative w-full max-w-[90rem] mx-auto perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-t from-primary-200/50 to-primary-100/30 blur-[80px] -z-10 rounded-[3rem]"></div>
             
             <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-2 md:p-4 group transform transition-transform duration-700 hover:scale-[1.01] hover:shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)]">
                <div className="flex items-center gap-2 mb-2 md:mb-4 px-2 opacity-70">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <div className="ml-4 w-full max-w-xs h-6 rounded-md bg-white/60 border border-white/50 flex items-center px-3 text-[10px] text-slate-400 font-mono shadow-sm">
                    nusacita.co.id/dashboard
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10 pointer-events-none"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400" 
                    alt="Financial Dashboard" 
                    className="w-full h-auto object-cover min-h-[300px] md:min-h-[600px] opacity-90 group-hover:opacity-100 transition-opacity duration-700 saturate-125"
                  />
                  
                  <div className="absolute top-10 left-10 z-20 hidden lg:block animate-float">
                     <div className="bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-4 text-slate-800 hover:border-primary-200 transition-colors hover:scale-105 duration-300">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                           <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                           <div className="text-xs text-slate-500">Total Transaction</div>
                           <div className="text-xl font-bold text-slate-900">Rp 2.450.000.000</div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute bottom-20 right-10 z-20 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
                     <div className="bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-4 text-slate-800 hover:border-primary-200 transition-colors hover:scale-105 duration-300">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                           <CreditCard className="w-6 h-6" />
                        </div>
                        <div>
                           <div className="text-xs text-slate-500">Active Terminals</div>
                           <div className="text-xl font-bold text-slate-900">850 Units</div>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Intro / Who We Are - Asymmetric Layout */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Reveal direction="right">
                <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
                  <span className="w-8 h-[3px] bg-primary-600 rounded-full"></span> Professional & Integrated
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  A New Way to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 relative">Manage
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none"/></svg>
                  </span> Your Business
                </h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                   Nusacita (PT Nusantara Cita Bersama) acts as your strategic engine for efficient transaction processing. We merge robust financial infrastructure with agile technology.
                </p>
                <div className="pl-6 border-l-4 border-primary-500 my-8 bg-primary-50/50 py-4 rounded-r-xl hover:bg-primary-50 transition-colors">
                  <p className="text-slate-800 font-medium italic text-lg">
                    "Owned by PT Artajasa Pembayaran Elektronis and Koperasi Nusacita, committed to advancing Indonesian digital economy."
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {CORE_VALUES.map((val) => (
                    <div key={val.title} className="icon-hover-wiggle flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-primary-50 transition-colors border border-slate-100 hover:border-primary-100 group hover:shadow-md hover:-translate-y-1 transform duration-300">
                      <div className="p-2 bg-white rounded-md shadow-sm group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                        <val.icon className="w-5 h-5 text-slate-400 group-hover:text-primary-600 transition-transform" />
                      </div>
                      <span className="font-bold text-slate-700 group-hover:text-primary-900 transition-colors">{val.title}</span>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-flex items-center text-slate-900 font-bold hover:text-primary-600 transition-colors text-lg group">
                  Discover Our Story <div className="ml-2 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors group-hover:scale-110 duration-300"><ChevronRight className="w-4 h-4" /></div>
                </Link>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 relative">
              <Reveal direction="left">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                   <div className="space-y-4 mt-8">
                      <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" alt="Office" />
                      <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary-600 rounded-full blur-2xl opacity-20 translate-x-10 -translate-y-10 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative z-10">
                          <div className="text-3xl font-bold text-primary-400 mb-1">24/7</div>
                          <div className="text-sm text-slate-400">Support System</div>
                        </div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-xl shadow-primary-900/20 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="text-3xl font-bold mb-1">100+</div>
                        <div className="text-sm text-primary-100">Enterprise Partners</div>
                      </div>
                      <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" alt="Tech" />
                   </div>
                </div>
                {/* Decoration */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Products - Bento Grid Style */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2">{HERO_CONTENT.solutionsTitle}</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">{HERO_CONTENT.solutionsSubtitle}</h3>
              <p className="text-slate-600">{HERO_CONTENT.solutionsDesc}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {PRODUCTS_LIST.map((product, i) => (
              <Reveal 
                key={product.id} 
                delay={i * 100} 
                className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
                fullWidth
              >
                 <Link to="/products" className="absolute inset-0 z-20"></Link>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white z-0"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-200/50 transition-colors duration-500"></div>
                
                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl shadow-inner flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 icon-hover-wiggle">
                    <product.icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">{product.title}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4 group-hover:text-primary-400 transition-colors">{product.subtitle}</p>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed max-w-md">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {HERO_CONTENT.ctaPrimary} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {(i === 0 || i === 3) && (
                   <img 
                    src={product.image} 
                    alt={product.title}
                    className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 mask-image-linear-gradient mix-blend-multiply"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
                   />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA - Bright */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-500">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="absolute w-full h-full bg-gradient-to-r from-primary-500/50 to-rose-400/50"></div>
           <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary-700/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              {HERO_CONTENT.readyToScale} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-white">{HERO_CONTENT.scaleUp}</span>
            </h2>
            <p className="text-primary-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              {HERO_CONTENT.scaleDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] shadow-2xl hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center group-hover:text-primary-700 transition-colors">
                  {HERO_CONTENT.startPartnership} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </span>
              </Link>
               <Link 
                to="/information" 
                className="px-8 py-4 text-white font-medium hover:text-primary-100 transition-colors border border-primary-400 hover:border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10"
              >
                {HERO_CONTENT.readRegulations} &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;