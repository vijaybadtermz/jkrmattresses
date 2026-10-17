import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import customTeakImg from '../assets/images/custom_teak_bed.png';
import { useLanguage } from '../../src/context/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { Ruler, Scissors, MessageCircle } from 'lucide-react';

export default function CustomProductsPage({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const customProds = PRODUCTS.filter(p => p.category === 'custom');

  const measurementSteps = [
    {
      step: '01',
      title: t('custom.step1Title'),
      desc: t('custom.step1Desc')
    },
    {
      step: '02',
      title: t('custom.step2Title'),
      desc: t('custom.step2Desc')
    },
    {
      step: '03',
      title: t('custom.step3Title'),
      desc: t('custom.step3Desc')
    },
    {
      step: '04',
      title: t('custom.step4Title'),
      desc: t('custom.step4Desc')
    }
  ];

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Banner - Standardized Pattern */}
          <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
                <Ruler className="w-3.5 h-3.5 text-[#A68B65]" />
                <span>{t('custom.kicker')}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#302820]">
                {t('custom.title')}
              </h1>
              <p className="text-sm sm:text-base text-[#302820]/80 font-light leading-relaxed">
                {t('custom.subtitle')}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquiry(null, { sizeId: 'custom' })}
                  className="px-6 py-3.5 rounded-full bg-[#302820] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#A68B65] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Scissors className="w-4 h-4" />
                  <span>{t('custom.requestBtn')}</span>
                </button>

                <a
                  href={`${siteConfig.socialLinks.whatsapp}?text=${encodeURIComponent(
                    isTamil 
                      ? 'வணக்கம் JKR Mattress! என்னிடம் தனிப்பயன் கட்டில் அளவு உள்ளது. விலை விபரம் தேவை.' 
                      : 'Hello JKR Mattress! I have custom cot dimensions and would like a quote.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-600 transition-all shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('custom.whatsappBtn')}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img 
                src={customTeakImg} 
                alt="Custom Mattress in Teak Bed" 
                className="w-full h-80 object-cover rounded-2xl border border-[#D4C1A7] shadow-md" 
              />
            </div>
          </div>

          {/* Bespoke Custom Products Showcase */}
          <div className="space-y-6">
            <div className="border-b border-[#D4C1A7]/40 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {isTamil ? 'பிரத்யேக தயாரிப்புகள்' : 'Bespoke Solutions'}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#302820]">
                {t('custom.productsHeader')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customProds.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOpenEnquiry={onOpenEnquiry} 
                />
              ))}
            </div>
          </div>

          {/* How Custom Measuring Works */}
          <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {t('custom.stepsKicker')}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#302820]">
                {t('custom.stepsTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
                {t('custom.stepsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {measurementSteps.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-2.5 shadow-2xs">
                  <span className="text-2xl font-serif font-bold text-[#A68B65]">
                    {item.step}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#302820]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#302820]/80 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Furniture Types Supported Grid */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#242321] text-[#F7F4EE] border border-[#A68B65]/30 space-y-6 shadow-lg">
            <h4 className="font-serif text-2xl font-bold text-[#D4C1A7]">
              {isTamil ? 'நாங்கள் மெத்தை தைத்து தரும் பிரத்யேக தளபாட வகைகள்' : 'Specialized Furniture Styles We Tailor For'}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans text-white/80">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-[#D4C1A7]">
                  {isTamil ? 'பழைய தேக்கு மரக் கட்டில்கள்' : 'Antique Teak Cots'}
                </p>
                <p className="text-[11px] text-white/60">
                  {isTamil ? 'செட்டிநாடு வேலைப்பாடு மற்றும் நான்கு தூண் கட்டில்கள்' : 'Colonial four-poster, Chettinad carving frames'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-[#D4C1A7]">
                  {isTamil ? 'பாரம்பரிய மர ஊஞ்சல் (Oonjal)' : 'South Indian Oonjal'}
                </p>
                <p className="text-[11px] text-white/60">
                  {isTamil ? 'பித்தளை சங்கிலி இடைவெளிகளுடன் கூடிய ஊஞ்சல் பலகை' : 'Swinging teak planks with brass chain notches'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-[#D4C1A7]">
                  {isTamil ? 'திவான் & பகல் படுக்கைகள்' : 'Diwans & Daybeds'}
                </p>
                <p className="text-[11px] text-white/60">
                  {isTamil ? 'பொருத்தமான உருண்டை தலையணைகளுடன் கூடிய திவான் மெத்தை' : 'Custom lengths with matching cylindrical bolsters'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <p className="font-bold text-[#D4C1A7]">
                  {isTamil ? 'ஜன்னல் திண்ணை & சோபா இருக்கை' : 'Architectural Niches'}
                </p>
                <p className="text-[11px] text-white/60">
                  {isTamil ? 'ஜன்னல் ஓர ஓய்வு இருக்கைகள் மற்றும் சோபா குஷன்கள்' : 'Bay windows, library reading nooks, floor alcoves'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
