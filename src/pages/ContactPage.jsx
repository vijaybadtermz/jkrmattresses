import React, { useState } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { siteConfig } from '../config/siteConfig';
import { useLanguage } from '../../src/context/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const { t, isTamil } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bodinayakanur');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const handleWhatsAppDirect = () => {
    const text = isTamil 
      ? `வணக்கம் JKR Mattress! எனது பெயர் ${name || 'வாடிக்கையாளர்'}. நான் ${city}-லிருந்து தொடர்பு கொள்கிறேன். மெத்தை விலை விபரம் தேவை.`
      : `Hello JKR Mattress Team! My name is ${name || 'Customer'}. I am reaching out from ${city} to enquire about mattresses / custom quotes.`;
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Banner - Standardized Pattern */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Phone className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{t('contact.kicker')}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#302820]">
              {t('contact.title')}
            </h1>
            <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Details & Location Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D4C1A7] space-y-6 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-[#302820]">
                  {t('contact.infoTitle')}
                </h3>

                <div className="space-y-4 text-xs text-[#302820]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A68B65] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-[#302820]">{t('contact.addressLabel')}</span>
                      <span className="leading-relaxed">
                        {t('contact.addressValue')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#A68B65] shrink-0" />
                    <div>
                      <span className="font-bold block text-[#302820]">{t('contact.phoneLabel')}</span>
                      <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-[#A68B65] font-semibold">
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#A68B65] shrink-0" />
                    <div>
                      <span className="font-bold block text-[#302820]">{t('contact.emailLabel')}</span>
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#A68B65] font-semibold">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('contact.openWhatsApp')}</span>
                  </button>

                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-white border border-[#D4C1A7] text-[#302820] hover:bg-[#D4C1A7]/30 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <Navigation className="w-4 h-4 text-[#A68B65]" />
                    <span>{t('contact.openMaps')}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D4C1A7] space-y-3 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-[#302820]">
                  {t('footer.serviceAreasTitle')}
                </h4>
                <p className="text-xs text-[#302820]/70 font-light">
                  {t('footer.serviceAreasText')}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {siteConfig.serviceAreas.map((area, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-[#D4C1A7]/60 text-[11px] font-medium text-[#302820]">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-3xl font-bold text-[#302820]">
                    {t('contact.successTitle')}
                  </h3>
                  <p className="text-sm text-[#302820]/75 max-w-md mx-auto leading-relaxed">
                    {t('contact.successMessage')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#302820]">
                    {t('contact.formTitle')}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#302820] mb-1">
                        {t('enquiryModal.nameLabel')}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C1A7] bg-white outline-none focus:ring-2 focus:ring-[#A68B65]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#302820] mb-1">
                        {t('enquiryModal.phoneLabel')}
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t('contact.phonePlaceholder')}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C1A7] bg-white outline-none focus:ring-2 focus:ring-[#A68B65]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#302820] mb-1">
                      {t('enquiryModal.cityLabel')}
                    </label>
                    <select 
                      value={city} 
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C1A7] bg-white outline-none focus:ring-2 focus:ring-[#A68B65] cursor-pointer"
                    >
                      {siteConfig.serviceAreas.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#302820] mb-1">
                      {t('enquiryModal.notesLabel')}
                    </label>
                    <textarea 
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C1A7] bg-white outline-none focus:ring-2 focus:ring-[#A68B65]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('contact.submitBtn')}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
