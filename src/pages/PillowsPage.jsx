import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { Feather, Sparkles, Wind, ShieldCheck } from 'lucide-react';

export default function PillowsPage({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const pillows = PRODUCTS.filter(p => p.category === 'pillows');

  const pillowGuides = [
    {
      posture: t('pillows.backSleepers'),
      loft: t('pillows.backLoft'),
      description: t('pillows.backDesc')
    },
    {
      posture: t('pillows.sideSleepers'),
      loft: t('pillows.sideLoft'),
      description: t('pillows.sideDesc')
    },
    {
      posture: t('pillows.stomachSleepers'),
      loft: t('pillows.stomachLoft'),
      description: t('pillows.stomachDesc')
    },
    {
      posture: t('pillows.diwanLounging'),
      loft: t('pillows.diwanLoft'),
      description: t('pillows.diwanDesc')
    }
  ];

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header Banner - Standardized Pattern */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Feather className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{t('pillows.kicker')}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#302820]">
              {t('pillows.title')}
            </h1>
            <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
              {t('pillows.subtitle')}
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillows.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenEnquiry={onOpenEnquiry} 
              />
            ))}
          </div>

          {/* Pillow Loft & Sleep Posture Guide */}
          <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {t('pillows.guideKicker')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#302820]">
                {t('pillows.guideTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
                {t('pillows.guideSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillowGuides.map((guide, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-2 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#A68B65] block">
                    {guide.posture}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#302820]">
                    {guide.loft}
                  </h4>
                  <p className="text-xs text-[#302820]/80 font-sans leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#EAE2D6]/60 border border-[#D4C1A7] space-y-2 shadow-2xs">
              <Wind className="w-5 h-5 text-[#A68B65]" />
              <h4 className="font-serif text-lg font-bold text-[#302820]">
                {isTamil ? 'உடல் சூட்டை வெளியேற்றும் குளிர்ச்சி' : 'Never Traps Heat or Night Sweats'}
              </h4>
              <p className="text-xs text-[#302820]/75 leading-relaxed">
                {isTamil 
                  ? 'ஸ்பாஞ்ச் போல் உடல் சூட்டை உள்வாங்காமல், பஞ்சின் உட்புற காற்று குழாய்கள் வழியே வெப்பத்தை வெளியேற்றி எப்போதும் குளிர்ச்சியாக வைக்கிறது.'
                  : 'Memory foam pillows absorb body warmth and reflect it back into your neck. Ilavam Panchu hollow fibers dissipate warmth outward continuously.'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#EAE2D6]/60 border border-[#D4C1A7] space-y-2 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#A68B65]" />
              <h4 className="font-serif text-lg font-bold text-[#302820]">
                {isTamil ? 'தூசு ஒட்டாத இயற்கை தன்மை' : 'Anti-Allergen & Anti-Dust Mite'}
              </h4>
              <p className="text-xs text-[#302820]/75 leading-relaxed">
                {isTamil 
                  ? 'இயற்கையான மெழுகு படலம் கொண்ட பஞ்சில் ஈரப்பதம் தங்காது. ஆஸ்துமா மற்றும் அலர்ஜி உள்ளவர்களுக்கு ஏற்ற சுத்தமான சுவாசம்.'
                  : 'Natural botanical wax coating keeps the interior naturally dry, preventing mold, mildew, and microbial allergens near your respiratory system.'}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#EAE2D6]/60 border border-[#D4C1A7] space-y-2 shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#A68B65]" />
              <h4 className="font-serif text-lg font-bold text-[#302820]">
                {isTamil ? 'வடிவம் மாறாத ஓரக் கயிறு தையல்' : 'Hand-Tufted Piping for Shape'}
              </h4>
              <p className="text-xs text-[#302820]/75 leading-relaxed">
                {isTamil 
                  ? 'ஓரங்களில் பலமான தையல் மற்றும் கயிறு வைத்து தைக்கப்படுவதால் தலையணை நசுங்கி வடிவம் இழக்காது.'
                  : "Reinforced border piping retains structure so your pillow doesn't flatten out or split into two halves during the night."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
