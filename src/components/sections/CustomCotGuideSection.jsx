import React from 'react';
import customTeakImg from '../../assets/images/custom_teak_bed.png';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Ruler, Scissors, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CustomCotGuideSection({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t('home.step1Title'),
      desc: t('home.step1Desc'),
    },
    {
      num: '02',
      title: t('home.step2Title'),
      desc: t('home.step2Desc'),
    },
    {
      num: '03',
      title: t('home.step3Title'),
      desc: t('home.step3Desc'),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#EAE2D6]/40 text-[#302820] border-y border-[#D4C1A7]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Banner Card */}
        <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Ruler className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{t('home.customCotKicker')}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#302820] leading-tight">
              {t('home.customCotTitle')}
            </h2>

            <p className="text-sm sm:text-base text-[#302820]/80 font-light leading-relaxed">
              {t('home.customCotSubtitle')}
            </p>

            {/* 3 Steps Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {steps.map((st, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#D4C1A7]/60 space-y-1.5 shadow-2xs">
                  <span className="font-serif text-xl font-bold text-[#A68B65]">
                    {st.num}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-[#302820]">
                    {st.title}
                  </h4>
                  <p className="text-xs text-[#302820]/70 font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenEnquiry(null, { sizeId: 'custom' })}
                className="px-6 py-3.5 rounded-full bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Scissors className="w-4 h-4" />
                <span>{t('home.customCotCta')}</span>
              </button>

              <a
                href={`${siteConfig.socialLinks.whatsapp}?text=${encodeURIComponent(
                  isTamil 
                    ? 'வணக்கம் JKR Mattress! என்னிடம் பழைய கட்டில் அளவு உள்ளது. தனிப்பயன் மெத்தை விலை விபரம் தேவை.'
                    : 'Hello JKR Mattress! I have custom cot dimensions and would like a price quotation.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('home.customCotWhatsApp')}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Teak Bed Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#D4C1A7] shadow-xl aspect-4/3 sm:aspect-square group">
              <img 
                src={customTeakImg} 
                alt="Custom Mattress in Antique Teak Bed" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4C1A7]">
                  {isTamil ? 'செட்டிநாடு தேக்கு கட்டில் மெத்தை' : 'Chettinad Teak Bed Tailoring'}
                </span>
                <p className="font-serif text-lg font-medium mt-0.5">
                  {isTamil ? 'அங்குலம் தவறாத துல்லிய தையல்' : 'Quarter-Inch Precision Fit'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
