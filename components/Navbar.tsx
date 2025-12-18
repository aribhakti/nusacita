import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-4 ${
        scrolled || isOpen ? 'top-0' : 'top-4'
      }`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-3xl ${
        scrolled || isOpen 
          ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="flex justify-between items-center h-16 px-6">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transform group-hover:rotate-[-10deg] transition-transform duration-500">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_12px_rgba(244,63,94,0.3)]">
                  <path 
                    d="M20 25 L45 65 L80 25" 
                    stroke="#e11d48" 
                    strokeWidth="18" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none text-slate-900 group-hover:text-primary-600 transition-colors uppercase">
                  {SHORT_NAME}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-500">
                  By Artajasa
                </span>
              </div>
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {t.NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-2xl text-sm font-bold transition-all relative group ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="w-[1px] h-6 bg-slate-200 mx-4"></div>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-xl text-xs font-black tracking-widest text-slate-500 hover:text-primary-600 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 uppercase"
            >
              {language === 'en' ? 'EN' : 'ID'}
            </button>

            <NavLink
              to="/contact"
              className="ml-4 px-8 py-3 bg-slate-900 text-white font-black text-sm rounded-2xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/20 active:scale-95"
            >
              {language === 'en' ? 'Get Started' : 'Mulai'}
            </NavLink>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all active:scale-90"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-4 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-100 shadow-2xl p-6 space-y-2 overflow-hidden">
          {t.NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-black transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {item.label}
              <ChevronRight className="w-5 h-5 opacity-40" />
            </NavLink>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <button onClick={toggleLanguage} className="py-4 bg-slate-50 rounded-2xl font-black text-slate-600 border border-slate-100 uppercase">
              {language === 'en' ? 'Bahasa ID' : 'English EN'}
            </button>
            <NavLink to="/contact" className="py-4 bg-primary-600 rounded-2xl font-black text-white text-center shadow-xl shadow-primary-500/20">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;