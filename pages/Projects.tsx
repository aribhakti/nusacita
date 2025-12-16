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

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{PROJECTS.title}</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {PROJECTS.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col md:flex-row min-h-[600px]">
            
            {/* Sidebar Tabs */}
            <div className="md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">{PROJECTS.topics}</h3>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center w-full px-6 py-4 rounded-xl text-left transition-all duration-300 group ${
                    activeTab === tab.id
                      ? 'bg-white shadow-md text-primary-700 border border-primary-100 translate-x-1'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                    activeTab === tab.id ? 'bg-primary-100 text-primary-600' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                  }`}>
                    <tab.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{tab.label}</span>
                  {activeTab === tab.id && <ChevronRight className="ml-auto w-5 h-5 text-primary-500" />}
                </button>
              ))}

              <div className="mt-auto p-6 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl text-white relative overflow-hidden shadow-lg shadow-primary-500/20 group hover:shadow-primary-500/40 transition-shadow">
                <div className="relative z-10">
                  <h4 className="font-bold mb-2">{PROJECTS.needHelp}</h4>
                  <p className="text-sm text-primary-100 mb-4">{PROJECTS.helpDesc}</p>
                  <Link to="/contact" className="text-sm font-bold text-white hover:text-primary-100 transition-colors flex items-center gap-1 group-hover:gap-2 duration-300">
                    {PROJECTS.contactSupport} <ChevronRight className="w-3 h-3"/>
                  </Link>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full blur-2xl opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 p-8 md:p-12 relative">
              
              {/* Security Tab */}
              <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 overflow-y-auto ${activeTab === 'security' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{PROJECTS.contentSecurity.title}</h2>
                </div>
                <div className="prose prose-slate max-w-none">
                   <p className="text-lg text-slate-600 mb-6">
                      {PROJECTS.contentSecurity.desc}
                   </p>
                   
                   <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                         <h4 className="font-bold text-slate-900 mb-2">{PROJECTS.contentSecurity.cardTitle}</h4>
                         <ul className="space-y-3">
                            {PROJECTS.contentSecurity.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                                 <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div>
                                 {point}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>
              </div>

              {/* Merchant Tab */}
              <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 overflow-y-auto ${activeTab === 'merchant' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{PROJECTS.contentMerchant.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8">
                    {PROJECTS.contentMerchant.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4"/> {PROJECTS.contentMerchant.card1Title}
                      </h4>
                      <p className="text-sm text-amber-800 leading-relaxed">
                        {PROJECTS.contentMerchant.card1Desc}
                      </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-blue-900 mb-3">{PROJECTS.contentMerchant.card2Title}</h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        {PROJECTS.contentMerchant.card2Desc}
                      </p>
                  </div>
                </div>
              </div>

              {/* Privacy Tab */}
              <div className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 overflow-y-auto ${activeTab === 'privacy' ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{PROJECTS.contentPrivacy.title}</h2>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 text-lg mb-4">{PROJECTS.contentPrivacy.cardTitle}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                     {PROJECTS.contentPrivacy.desc}
                  </p>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                     <p className="text-red-800 text-sm font-semibold">
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