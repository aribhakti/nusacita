import React, { useEffect, useState } from 'react';
import { Check, ArrowRight, Activity, DollarSign, ExternalLink, Info, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Modal from '../components/Modal';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../constants';
import { Product } from '../types';

const Products: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { SERVICES, PRODUCTS_LIST } = t;
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-4 block">Integrated Solutions</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              {SERVICES.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">{SERVICES.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              {SERVICES.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="space-y-32 md:space-y-48">
          {PRODUCTS_LIST.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Product Card Side */}
              <div className="w-full lg:w-1/2 group">
                <Reveal direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className="relative transform transition-all duration-700 group-hover:scale-[1.01]">
                     <div className="absolute inset-0 bg-primary-600 rounded-[3rem] opacity-5 blur-[60px] translate-y-12 scale-90 group-hover:opacity-10 transition-all"></div>
                     <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-200 h-[350px] md:h-[500px]">
                        <img 
                          src={product.image} 
                          alt={`${product.title} Interface Preview`} 
                          className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-xl z-20 border border-white/60 flex items-center justify-between">
                           <div className="flex flex-col gap-1">
                             <span className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em]">{SERVICES.liveSystem}</span>
                             <h4 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight">{product.subtitle}</h4>
                           </div>
                           <button 
                             onClick={() => openModal(product)}
                             className="w-12 h-12 md:w-16 md:h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-primary-500 transition-all"
                           >
                              <product.icon className="w-6 h-6 md:w-8 md:h-8" />
                           </button>
                        </div>
                     </div>
                  </div>
                </Reveal>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-1/2">
                <Reveal>
                   <div className="flex items-center gap-5 mb-8 group cursor-default">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                          <product.icon className="w-7 h-7" />
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">{product.title}</h2>
                  </div>
                  
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-primary-500 pl-8 py-2 font-medium italic">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 gap-4 mb-10">
                      {product.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-primary-100 transition-all group cursor-default">
                              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                <Check className="w-4 h-4" />
                              </div>
                              <span className="text-slate-800 font-bold text-base">{feature}</span>
                          </div>
                      ))}
                  </div>

                  <div className="flex flex-wrap gap-5">
                    <button 
                      onClick={() => openModal(product)}
                      className="px-8 py-4 bg-white text-slate-900 font-bold text-base rounded-xl border border-slate-200 hover:border-primary-600 hover:text-primary-600 transition-all"
                    >
                      View Specs
                    </button>
                    <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-bold text-base rounded-xl hover:bg-primary-700 transition-all shadow-lg">
                      Get Started
                    </Link>
                  </div>
                </Reveal>
              </div>

            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProduct} onClose={closeModal} title={selectedProduct?.title}>
        {selectedProduct && (
          <div className="space-y-10">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
               <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-md">
                    <selectedProduct.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">{selectedProduct.subtitle}</h4>
               </div>
               <p className="text-slate-500 text-base leading-relaxed font-medium">{selectedProduct.description}</p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary-500" /> Capabilities & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary-100 transition-all group">
                    <div className="p-1.5 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Check className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
               <div className="text-xs text-slate-400 font-bold max-w-xs text-center sm:text-left uppercase tracking-wider">Compliance with BI & ASPI maintained.</div>
               <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold text-base rounded-xl hover:bg-primary-700 shadow-lg">
                  Integrate Now
                </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;