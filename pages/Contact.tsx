import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { ADDRESS, CONTENT, PHONE_1, PHONE_2 } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const t = CONTENT[language];
  const { CONTACT, OFFICE_HOURS } = t;

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{CONTACT.title}</h1>
          <p className="text-xl text-slate-600">
            {CONTACT.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-primary-100 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{CONTACT.addressTitle}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{ADDRESS}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-primary-100 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{CONTACT.callTitle}</h3>
              <p className="text-slate-600 mb-1 flex flex-col gap-1 font-medium">
                <a href={`tel:${PHONE_1}`} className="hover:text-primary-600 transition-colors">{PHONE_1}</a>
                <a href={`tel:${PHONE_2}`} className="hover:text-primary-600 transition-colors">{PHONE_2}</a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-primary-100 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{CONTACT.hoursTitle}</h3>
              <p className="text-slate-600 text-sm">{OFFICE_HOURS}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{CONTACT.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{CONTACT.labels.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{CONTACT.labels.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">{CONTACT.labels.phone}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="0812..."
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">{CONTACT.labels.subject}</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    >
                      {CONTACT.subjects.map(subject => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{CONTACT.labels.message}</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 transform active:scale-95 duration-200 ${
                    formStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-600/30 hover:-translate-y-1'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    CONTACT.labels.sending
                  ) : formStatus === 'success' ? (
                    CONTACT.labels.sent
                  ) : (
                    <>{CONTACT.labels.send} <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;