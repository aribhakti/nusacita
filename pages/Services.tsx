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
    <div className="pt-48 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-40">
            <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-5 block">Integrated Solutions</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">
              {SERVICES.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">{SERVICES.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              {SERVICES.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="space-y-48 md:space-y-64">
          {PRODUCTS_LIST.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Product Card Side */}
              <div className="w-full lg:w-1/2 group">
                <Reveal direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className="relative transform transition-all duration-700 group-hover:scale-[1.02]">
                     <div className="absolute inset-0 bg-primary-600 rounded-[4rem] opacity-5 blur-[80px] translate-y-16 scale-90 group-hover:opacity-15 transition-all"></div>
                     <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_32px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 bg-slate-200 h-[450px] md:h-[650px]">
                        <img 
                          src={product.image} 
                          alt={`${product.title} Interface Preview`} 
                          className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                             (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200';
                          }}
                        />
                        {/* Overlay to ensure readability even if image is light */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Status Float Bar */}
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl z-20 border border-white/60 flex items-center justify-between">
                           <div className="flex flex-col gap-1.5">
                             <span className="text-[10px] md:text-xs font-black text-primary-600 uppercase tracking-[0.25em]">{SERVICES.liveSystem}</span>
                             <h4 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">{product.subtitle}</h4>
                           </div>
                           <button 
                             onClick={() => openModal(product)}
                             className="w-14 h-14 md:w-20 md:h-20 bg-primary-600 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-primary-500/40 hover:bg-primary-500 active:scale-95 transition-all duration-300"
                           >
                              <product.icon className="w-7 h-7 md:w-10 md:h-10" />
                           </button>
                        </div>
                     </div>
                  </div>
                </Reveal>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-1/2">
                <Reveal>
                   <div className="flex items-center gap-6 mb-12 group cursor-default">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                          <product.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 group-hover:text-primary-600 transition-colors tracking-tighter">{product.title}</h2>
                  </div>
                  
                  <p className="text-slate-500 text-xl md:text-2xl leading-relaxed mb-16 border-l-4 border-primary-500 pl-10 py-3 font-light italic">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 gap-5 mb-16">
                      {product.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 hover:bg-white border border-transparent hover:border-primary-100 hover:shadow-2xl transition-all duration-300 group cursor-default">
                              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                <Check className="w-5 h-5" />
                              </div>
                              <span className="text-slate-800 font-bold text-lg">{feature}</span>
                          </div>
                      ))}
                  </div>

                  <div className="flex flex-wrap gap-6">
                    <button 
                      onClick={() => openModal(product)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-12 py-5 bg-white text-slate-900 font-bold text-lg rounded-2xl border border-slate-200 hover:border-primary-600 hover:text-primary-600 hover:shadow-2xl transition-all active:scale-95 group"
                    >
                      <span className="flex items-center">
                        <Info className="mr-3 w-6 h-6 text-slate-400 group-hover:text-primary-600 transition-colors" />
                        View Full Specs
                      </span>
                    </button>
                    <Link to="/contact" className="flex-1 sm:flex-none inline-flex items-center justify-center px-12 py-5 bg-primary-600 text-white font-bold text-lg rounded-2xl hover:bg-primary-700 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                      Get Started <ArrowRight className="ml-3 w-6 h-6" />
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
          <div className="space-y-12">
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
               <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-xl">
                    <selectedProduct.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tight">{selectedProduct.subtitle}</h4>
               </div>
               <p className="text-slate-500 text-lg leading-relaxed font-light">{selectedProduct.description}</p>
            </div>

            <div>
              <h4 className="font-black text-slate-900 text-2xl mb-8 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-primary-500" /> Capabilities & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {selectedProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 hover:border-primary-100 hover:shadow-xl transition-all group">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Check className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-slate-700 font-bold text-base leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
               <div className="text-sm text-slate-400 font-medium max-w-xs text-center sm:text-left">Strict compliance with BI (Bank Indonesia) & ASPI regulations maintained.</div>
               <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-primary-600 text-white font-black text-lg rounded-2xl hover:bg-primary-700 transition-all active:scale-95 shadow-xl shadow-primary-500/20">
                  Request Integration <ExternalLink className="ml-3 w-5 h-5" />
                </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;