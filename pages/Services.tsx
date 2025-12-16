import React, { useEffect, useState } from 'react';
import { Check, ArrowRight, Activity, DollarSign, ExternalLink, Info } from 'lucide-react';
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
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {SERVICES.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">{SERVICES.titleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-600">
              {SERVICES.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="space-y-40">
          {PRODUCTS_LIST.map((product, index) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-20 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side - Sticky */}
              <div className="w-full lg:w-1/2 sticky top-32">
                <Reveal direction={index % 2 === 0 ? 'right' : 'left'}>
                  <div className="relative group perspective-1000">
                     {/* Background Blob - Stronger Brand Color */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 group-hover:opacity-30 group-hover:rotate-6 transition-all duration-700 blur-xl"></div>
                     
                     <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-white transform transition-transform duration-700 group-hover:scale-[1.01]">
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 border-l-4 border-primary-500">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                 <span className="text-xs font-bold text-slate-600 uppercase">{SERVICES.liveSystem}</span>
                              </div>
                              <product.icon className="w-5 h-5 text-primary-600" />
                           </div>
                        </div>
                     </div>
                  </div>
                </Reveal>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 pt-10">
                <Reveal>
                   <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30 transform group-hover:scale-110 transition-transform duration-300 icon-hover-wiggle">
                          <product.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-slate-900">{product.title}</h2>
                        <span className="text-sm font-bold text-primary-600 uppercase tracking-widest">{product.subtitle}</span>
                      </div>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 border-l-4 border-primary-100 pl-6">
                    {product.description}
                  </p>

                  {/* Features List Preview */}
                  <div className="mb-8">
                      <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                          <Activity className="w-5 h-5 text-primary-500" /> {SERVICES.capabilities}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                          {product.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-primary-50 hover:shadow-md transition-all border border-transparent hover:border-primary-100 group cursor-default">
                                  <div className="w-6 h-6 rounded-full bg-white border border-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors">
                                    <Check className="w-3 h-3 text-primary-600 font-bold group-hover:text-white" />
                                  </div>
                                  <span className="text-slate-700 font-medium group-hover:text-slate-900">{feature}</span>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => openModal(product)}
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-primary-200 hover:text-primary-600 hover:shadow-lg transition-all active:scale-95 group"
                    >
                      <Info className="mr-2 w-5 h-5 text-slate-400 group-hover:text-primary-500" />
                      View Details
                    </button>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-900/10 hover:shadow-2xl hover:shadow-primary-900/20 hover:-translate-y-1 active:translate-y-0 group"
                    >
                      {SERVICES.requestIntegration} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Reveal>
              </div>

            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-32">
          <Reveal>
             <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-900/30 group hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                   <h2 className="text-4xl md:text-5xl font-bold mb-6">{SERVICES.customTitle}</h2>
                   <p className="text-lg text-white/90 mb-10">{SERVICES.customDesc}</p>
                   <Link to="/contact" className="inline-block px-10 py-4 bg-white text-primary-600 font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow hover:-translate-y-1 active:translate-y-0">
                      {SERVICES.talkExpert}
                   </Link>
                </div>
             </div>
          </Reveal>
        </div>

      </div>

      {/* Feature Detail Modal */}
      <Modal 
        isOpen={!!selectedProduct} 
        onClose={closeModal} 
        title={selectedProduct?.title}
      >
        {selectedProduct && (
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-2xl border border-primary-100">
               <div className="p-3 bg-white rounded-xl shadow-sm text-primary-600">
                  <selectedProduct.icon className="w-6 h-6" />
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{selectedProduct.subtitle}</h4>
                  <p className="text-slate-600 text-sm">{selectedProduct.description}</p>
               </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary-500" /> Full Feature List
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedProduct.tariffs && (
              <div>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary-500" /> Pricing Structure
                </h4>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Rate / Fee</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                      {selectedProduct.tariffs.map((tariff, idx) => (
                        <tr key={idx} className="hover:bg-primary-50/20">
                          <td className="px-6 py-3 text-sm font-medium text-slate-900">{tariff.category}</td>
                          <td className="px-6 py-3 text-sm text-right font-mono text-primary-600">{tariff.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex justify-end">
               <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-900/10 hover:-translate-y-1"
                >
                  Request {selectedProduct.title} <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;