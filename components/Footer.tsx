import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_NAME, SHORT_NAME, ADDRESS, EMAIL, PHONE_1, CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { FOOTER, NAV_ITEMS, PRODUCTS_LIST } = t;

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <div className="w-8 h-8 hover:scale-110 transition-transform duration-300">
                 {/* Nusacita SVG Logo Small */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path 
                    d="M20 25 L45 65 L80 25" 
                    stroke="#f43f5e" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight lowercase hover:text-primary-600 transition-colors cursor-default">{SHORT_NAME}</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Member of Artajasa</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              {FOOTER.desc}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:-translate-y-1"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">{FOOTER.quickLinks}</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink 
                    to={item.path} 
                    className="text-sm hover:text-primary-600 hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">{FOOTER.products}</h3>
            <ul className="space-y-3 text-sm">
              {PRODUCTS_LIST.map((product) => (
                  <li key={product.id}>
                    <NavLink to="/products" className="hover:text-primary-600 hover:translate-x-1 transition-all inline-block cursor-pointer">
                      {product.title}
                    </NavLink>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">{FOOTER.contact}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-500">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary-600 transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`tel:${PHONE_1}`} className="hover:text-primary-600 transition-colors">{PHONE_1}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. {FOOTER.rights}
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <NavLink to="/information" className="hover:text-primary-600 transition-colors">Privacy Policy</NavLink>
            <NavLink to="/information" className="hover:text-primary-600 transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;