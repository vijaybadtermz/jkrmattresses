import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function CustomerFaqSection() {
  const { t, isTamil } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const faqs = [
    { q: t('home.faq1Q'), a: t('home.faq1A') },
    { q: t('home.faq2Q'), a: t('home.faq2A') },
    { q: t('home.faq3Q'), a: t('home.faq3A') },
    { q: t('home.faq4Q'), a: t('home.faq4A') },
    { q: t('home.faq5Q'), a: t('home.faq5A') },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EE] text-[#302820]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D6] text-[#8C6D45] text-xs uppercase tracking-widest font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#A68B65]" />
            <span>{t('home.faqKicker')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#302820]">
            {t('home.faqTitle')}
          </h2>
          <p className="text-sm sm:text-base text-[#302820]/75 font-light">
            {t('home.faqSubtitle')}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#A68B65]/60 shadow-md' 
                    : 'bg-[#FAF7F2] border-[#D4C1A7]/50 hover:border-[#D4C1A7]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#302820]">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#302820] text-white' : 'bg-[#EAE2D6] text-[#302820]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#302820]/80 font-light leading-relaxed border-t border-[#D4C1A7]/30">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="p-6 rounded-2xl bg-[#EAE2D6]/60 border border-[#D4C1A7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#302820]">
              {isTamil ? 'வேறு ஏதேனும் கேள்விகள் உள்ளதா?' : 'Have more specific questions?'}
            </h4>
            <p className="text-xs text-[#302820]/75">
              {isTamil 
                ? 'நிறுவனர் ஜே. கார்த்தீஸ்வரனுடன் வாட்ஸ்அப்பில் நேரடியாக பேசி தெளிவு பெறலாம்.' 
                : 'Chat directly with founder J. Kartheeshwaran on WhatsApp for personalized advice.'}
            </p>
          </div>
          <a
            href={siteConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('common.whatsapp')}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
