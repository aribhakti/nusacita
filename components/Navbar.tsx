import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTENT, SHORT_NAME } from '../constants';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = CONTENT[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_val = (winScroll / height) * 100;
      setScrollProgress(scrolled_val);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'glass py-2 shadow-lg shadow-slate-900/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]">
                  <defs>
                    <linearGradient id="logoGradientNav" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ffb0c8" />
                      <stop offset="50%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M20 25 L45 65 L80 25" 
                    stroke="url(#logoGradientNav)" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none text-slate-900 lowercase group-hover:text-primary-600 transition-colors">
                  {SHORT_NAME}
                </span>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 group-hover:text-primary-400 transition-colors">
                  Member of Artajasa
                </span>
              </div>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center">
            <div className={`flex items-center rounded-full px-2 py-1.5 mr-6 transition-all duration-300 ${scrolled ? 'bg-slate-100/80 border border-slate-200/50' : 'bg-white/40 backdrop-blur-md border border-white/40'}`}>
              {t.NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden group hover:scale-105 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-primary-600 rounded-full shadow-lg shadow-primary-900/10 z-0"></span>
                      )}
                      {!isActive && (
                         <span className="absolute inset-0 bg-white/60 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest border transition-all hover:scale-105 active:scale-95 ${
                  scrolled 
                    ? 'border-slate-200 text-slate-600 hover:border-primary-200 hover:text-primary-600 bg-white' 
                    : 'border-white/40 text-slate-700 bg-white/40 backdrop-blur-sm'
                }`}
              >
                <span className={language === 'en' ? 'text-primary-600' : 'text-slate-400'}>EN</span>
                <span className="mx-1 text-slate-300">/</span>
                <span className={language === 'id' ? 'text-primary-600' : 'text-slate-400'}>ID</span>
              </button>

              <NavLink
                to="/contact"
                className="group relative px-6 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary-500/20 bg-primary-600 text-white overflow-hidden"
              >
                <span className="relative z-10">{language === 'en' ? 'Get Started' : 'Mulai Sekarang'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </NavLink>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full text-[10px] font-black border border-slate-200 bg-white text-slate-600"
            >
                <span className={language === 'en' ? 'text-primary-600' : 'text-slate-400'}>EN</span>
                <span className="mx-1 text-slate-300">/</span>
                <span className={language === 'id' ? 'text-primary-600' : 'text-slate-400'}>ID</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all active:scale-90"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full glass border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-8 space-y-3 bg-white/95 backdrop-blur-2xl">
          {t.NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-4 rounded-2xl text-lg font-black transition-all ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 border border-primary-100'
                    : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-6">
             <NavLink
              to="/contact"
              className="block w-full text-center px-6 py-4 rounded-2xl bg-primary-600 text-white font-black shadow-xl shadow-primary-500/20"
            >
              {language === 'en' ? 'Partner With Us' : 'Mitra Kami'}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;