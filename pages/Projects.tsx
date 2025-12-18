import React, { useEffect, useState } from 'react';
import { Lock, AlertTriangle, FileText, Shield, ChevronRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../constants';

const ConsumerInfo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const t = CONTENT[language];
  const { PROJECTS } = t;

  const [activeTab, setActiveTab] = useState<'security' | 'merchant' | 'privacy'>('security');

  const tabs = [
    { id: 'security', label: PROJECTS.tabSecurity, icon: Lock },
    { id: 'merchant', label: PROJECTS.tabMerchant, icon: AlertTriangle },
    { id: 'privacy', label: PROJECTS.tabPrivacy, icon: FileText },
  ];

  // Logic to split the title for black and red combination
  const titleParts = PROJECTS.title.split(' ');
  const titleMain = titleParts[0];
  const titleAccent = titleParts.slice(1).join(' ');

  return (
    <div className="pt-48 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-40">
            <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-5 block">Partner Resources</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">
              {titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">{titleAccent}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              {PROJECTS.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row min-h-[600px]">
            
            {/* Sidebar Tabs */}
            <div className="md:w-1/3 bg-slate-50 border-r border-slate-200 p-8 flex flex-col gap-2">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-4">{PROJECTS.topics}</h3>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center w-full px-6 py-5 rounded-2xl text-left transition-all duration-300 group ${
                    activeTab === tab.id
                      ? 'bg-white shadow-xl text-primary-600 border border-primary-100 translate-x-1'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-5 transition-colors ${
                    activeTab === tab.id ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                  }`}>
                    <tab.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg">{tab.label}</span>
                  {activeTab === tab.id && <ChevronRight className="ml-auto w-5 h-5 text-primary-500" />}
                </button>
              ))}

              <div className="mt-auto p-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-[2rem] text-white relative overflow-hidden shadow-2xl shadow-primary-500/20 group hover:shadow-primary-500/40 transition-shadow">
                <div className="relative z-10">
                  <h4 className="font-black text-xl mb-3">{PROJECTS.needHelp}</h4>
                  <p className="text-sm text-primary-100 mb-6 font-light">{PROJECTS.helpDesc}</p>
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-sm font-bold text-white transition-all group-hover:gap-3 duration-300">
                    {PROJECTS.contactSupport} <ChevronRight className="ml-2 w-4 h-4"/>
                  </Link>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 p-8 md:p-16 relative bg-white">
              
              {/* Security Tab */}
              <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-16 overflow-y-auto ${activeTab === 'security' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-8 pointer-events-none'}`}>
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 bg-primary-50 text-primary-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <Lock className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">{PROJECTS.contentSecurity.title}</h2>
                </div>
                <div className="max-w-none">
                   <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                      {PROJECTS.contentSecurity.desc}
                   </p>
                   
                   <div className="grid grid-cols-1 gap-8 mb-8">
                      <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
                         <h4 className="font-black text-slate-900 text-2xl mb-6">{PROJECTS.contentSecurity.cardTitle}</h4>
                         <ul className="space-y-4">
                            {PROJECTS.contentSecurity.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-4 text-slate-600 text-lg font-light">
                                 <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-xs font-black">✓</div>
                                 {point}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>
              </div>

              {/* Merchant Tab */}
              <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-16 overflow-y-auto ${activeTab === 'merchant' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-8 pointer-events-none'}`}>
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <AlertTriangle className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">{PROJECTS.contentMerchant.title}</h2>
                </div>
                <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                    {PROJECTS.contentMerchant.desc}
                </p>
                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-amber-50 p-10 rounded-[2.5rem] border border-amber-100 hover:shadow-xl transition-all">
                      <h4 className="font-black text-amber-900 text-2xl mb-4 flex items-center gap-4">
                        <Shield className="w-7 h-7"/> {PROJECTS.contentMerchant.card1Title}
                      </h4>
                      <p className="text-lg text-amber-800 leading-relaxed font-light">
                        {PROJECTS.contentMerchant.card1Desc}
                      </p>
                  </div>
                  <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 hover:shadow-xl transition-all">
                      <h4 className="font-black text-blue-900 text-2xl mb-4">{PROJECTS.contentMerchant.card2Title}</h4>
                      <p className="text-lg text-blue-800 leading-relaxed font-light">
                        {PROJECTS.contentMerchant.card2Desc}
                      </p>
                  </div>
                </div>
              </div>

              {/* Privacy Tab */}
              <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-16 overflow-y-auto ${activeTab === 'privacy' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-8 pointer-events-none'}`}>
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <FileText className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">{PROJECTS.contentPrivacy.title}</h2>
                </div>
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all">
                  <h4 className="font-black text-slate-900 text-2xl mb-6">{PROJECTS.contentPrivacy.cardTitle}</h4>
                  <p className="text-slate-500 mb-10 leading-relaxed text-xl font-light">
                     {PROJECTS.contentPrivacy.desc}
                  </p>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-2xl">
                     <p className="text-red-900 text-lg font-bold leading-relaxed">
                        {PROJECTS.contentPrivacy.warning}
                     </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default ConsumerInfo;