import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Sparkles, ShieldCheck, Zap, Users } from 'lucide-react';
import { CONTENT } from '../constants';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = Math.random() > 0.5 
          ? `rgba(244, 63, 94, ${Math.random() * 0.15 + 0.05})` 
          : `rgba(15, 23, 42, ${Math.random() * 0.08 + 0.02})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { HERO_CONTENT, PRODUCTS_LIST, CORE_VALUES } = t;

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden bg-slate-50 pt-32 pb-24">
        <ParticleBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
             <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-primary-100 text-primary-600 font-bold text-xs md:text-sm mb-12 shadow-sm transition-all hover:scale-105 cursor-default">
              <Globe className="w-4 h-4 animate-spin-slow text-primary-500" />
              <span>{HERO_CONTENT.memberOf}</span>
              <Sparkles className="w-4 h-4 text-amber-400 animate-shimmer" />
            </div>
          </Reveal>
          
          <div className="max-w-4xl mx-auto">
            <Reveal direction="up" delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-10">
                {HERO_CONTENT.headlineWords[0]} <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 animate-gradient-x px-1">
                  {HERO_CONTENT.headlineWords[1]} {HERO_CONTENT.headlineWords[2]}
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-lg md:text-xl text-slate-500 mb-14 leading-relaxed max-w-2xl mx-auto font-light">
                {HERO_CONTENT.subheadline}
              </p>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link to="/products" className="w-full sm:w-auto px-12 py-5 text-lg font-bold text-white bg-primary-600 rounded-full hover:bg-primary-500 shadow-2xl shadow-primary-500/30 transition-all hover:-translate-y-1 active:scale-95 border border-primary-500/20">
                  {HERO_CONTENT.ctaPrimary}
                  <ArrowRight className="inline-block ml-3 w-5 h-5" />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-12 py-5 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all active:scale-95">
                  {HERO_CONTENT.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={800} className="mt-24">
             <div className="relative max-w-6xl mx-auto perspective-1000">
                <div className="absolute inset-0 bg-primary-500/5 blur-[120px] rounded-full"></div>
                <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white/20 backdrop-blur-md p-3 md:p-6 group transition-all duration-700 hover:scale-[1.01]">
                   <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400" 
                    alt="Advanced Payment Dashboard" 
                    className="w-full h-auto rounded-[2rem] md:rounded-[3rem] shadow-inner brightness-[1.02]"
                    loading="eager"
                   />
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <Reveal direction="left">
                <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-5 block">Our Shared Commitment</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                  Driving Innovation in <br/> <span className="text-primary-600">Digital Finance</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed font-light">
                  Nusacita combines corporate heritage with a startup mindset. We provide reliable payment processing that empowers businesses to scale without borders.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {CORE_VALUES.map((val, idx) => (
                    <Reveal key={val.title} delay={idx * 100} direction="pop">
                      <div className="group p-7 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-1 hover:border-primary-100">
                        <div className="w-12 h-12 bg-white text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                          <val.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg">{val.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-normal">{val.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2 relative">
               <Reveal direction="right">
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                      alt="Payment Technology Terminal" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 text-white">
                      <div className="text-6xl font-black mb-2 tracking-tighter">99.9%</div>
                      <div className="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs">Uptime Reliability Guarantee</div>
                    </div>
                  </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-4 block">{HERO_CONTENT.solutionsTitle}</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">{HERO_CONTENT.solutionsSubtitle}</h2>
              <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">{HERO_CONTENT.solutionsDesc}</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS_LIST.map((product, i) => (
              <Reveal key={product.id} delay={i * 100} direction="pop">
                <Link to="/products" className="group block h-full bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-primary-100 transition-all hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col">
                  <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-inner">
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary-600 transition-colors tracking-tight">{product.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-normal">{product.description}</p>
                  <div className="flex items-center text-primary-600 font-bold text-sm">
                    {language === 'en' ? 'Explore Details' : 'Lihat Detail'} 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-400/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight">
              {HERO_CONTENT.readyToScale} <br className="md:hidden" /> <span className="text-primary-200 italic">{HERO_CONTENT.scaleUp}</span>
            </h2>
            <p className="text-primary-100 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              {HERO_CONTENT.scaleDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-white text-primary-600 font-black text-lg rounded-full hover:bg-primary-50 transition-all shadow-2xl active:scale-95">
                {HERO_CONTENT.startPartnership}
              </Link>
              <Link to="/information" className="px-12 py-5 bg-primary-700/50 text-white font-black text-lg rounded-full hover:bg-primary-800 transition-all border border-white/20 active:scale-95">
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