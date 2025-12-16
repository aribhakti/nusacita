import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTENT, SHORT_NAME } from '../constants';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = CONTENT[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'glass py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transform group-hover:scale-110 transition-transform duration-300">
                {/* Custom Nusacita SVG Logo */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                  <defs>
                    <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ffb0c8" />
                      <stop offset="50%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M20 25 L45 65 L80 25" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:opacity-90 transition-opacity"
                  />
                  <path 
                    d="M45 65 L80 25" 
                    stroke="currentColor" 
                    className="text-slate-900/10"
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight leading-none text-slate-900 lowercase group-hover:text-primary-600 transition-colors duration-300">
                  {SHORT_NAME}
                </span>
                <span className="text-[0.65rem] font-medium tracking-wider uppercase text-slate-500 group-hover:text-primary-400 transition-colors">
                  Member of Artajasa
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className={`flex items-center rounded-full px-2 py-1 mr-4 transition-colors duration-300 ${scrolled ? 'bg-slate-100/50 border border-slate-200/50' : 'bg-white/30 backdrop-blur-md border border-white/40'}`}>
              {t.NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group hover:scale-105 active:scale-95 ${
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
                        <span className="absolute inset-0 bg-primary-600 rounded-full shadow-lg shadow-primary-900/10 -z-0"></span>
                      )}
                      {!isActive && (
                         <span className="absolute inset-0 bg-slate-200/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`mr-4 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 flex items-center gap-1 hover:scale-105 active:scale-95 ${
                scrolled 
                  ? 'border-slate-200 text-slate-600 hover:border-primary-200 hover:text-primary-600 bg-white/50' 
                  : 'border-white/40 text-slate-700 bg-white/30 backdrop-blur-md hover:bg-white/50'
              }`}
            >
              <span className={language === 'en' ? 'text-primary-600' : 'text-slate-400'}>EN</span>
              <span className="text-slate-300">|</span>
              <span className={language === 'id' ? 'text-primary-600' : 'text-slate-400'}>ID</span>
            </button>

            <NavLink
              to="/contact"
              className="group relative px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(244,63,94,0.2)] hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] bg-gradient-to-r from-primary-500 to-primary-600 text-white overflow-hidden border border-transparent hover:border-white/20"
            >
              <span className="relative z-10">{language === 'en' ? 'Partner With Us' : 'Mitra Kami'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
                onClick={toggleLanguage}
                className="px-2 py-1 rounded-md text-xs font-bold border border-slate-200 bg-white/50 text-slate-600 flex items-center gap-1"
            >
                <span className={language === 'en' ? 'text-primary-600' : 'text-slate-400'}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={language === 'id' ? 'text-primary-600' : 'text-slate-400'}>ID</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors active:scale-90"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2 bg-white/95 backdrop-blur-xl">
          {t.NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-all active:scale-[0.98] ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 border border-primary-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4">
             <NavLink
              to="/contact"
              className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg shadow-primary-500/20 active:scale-[0.98]"
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