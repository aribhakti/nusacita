import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_NAME, SHORT_NAME, ADDRESS, EMAIL, PHONE_1, CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { FOOTER, NAV_ITEMS, PRODUCTS_LIST } = t;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 relative overflow-hidden mt-20 rounded-t-[4rem]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-primary-400 to-primary-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-75">
                  <path 
                    d="M20 25 L45 65 L80 25" 
                    stroke="#e11d48" 
                    strokeWidth="18" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-black text-3xl text-white tracking-tighter lowercase uppercase">{SHORT_NAME}</span>
            </div>
            <p className="text-lg leading-relaxed max-w-sm">
              {FOOTER.desc}
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">{FOOTER.quickLinks}</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.path} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">{FOOTER.products}</h3>
            <ul className="space-y-4">
              {PRODUCTS_LIST.map((product) => (
                <li key={product.id}>
                  <NavLink to="/products" className="text-slate-400 hover:text-white transition-colors">
                    {product.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">{FOOTER.contact}</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary-500 shrink-0" />
                <span className="text-sm leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary-500 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary-500 shrink-0" />
                <a href={`tel:${PHONE_1}`} className="hover:text-white transition-colors">{PHONE_1}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <NavLink to="/information" className="hover:text-primary-500 transition-colors">Privacy</NavLink>
            <NavLink to="/information" className="hover:text-primary-500 transition-colors">Terms</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;