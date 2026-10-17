import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import babyImg from '../assets/images/baby_nursery.png';
import { useLanguage } from '../../src/context/LanguageContext';
import { Heart, ShieldCheck } from 'lucide-react';

export default function BabyNurseryPage({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const babyProducts = PRODUCTS.filter(p => p.category === 'baby-nursery');

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Banner - Standardized Pattern */}
          <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
                <Heart className="w-3.5 h-3.5 fill-[#D4C1A7]" />
                <span>{t('babyNursery.kicker')}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#302820]">
                {t('babyNursery.title')}
              </h1>
              <p className="text-sm sm:text-base text-[#302820]/80 font-light leading-relaxed">
                {t('babyNursery.subtitle')}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#302820]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{t('babyNursery.pediatricSupport')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{t('babyNursery.zeroOffGassing')}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img 
                src={babyImg} 
                alt="Baby Cot Mattress" 
                className="w-full h-72 object-cover rounded-2xl border border-[#D4C1A7] shadow-md" 
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#D4C1A7]/40 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                  {isTamil ? 'குழந்தைகள் இயற்கை படுக்கை' : 'Bespoke Baby Bedding'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820]">
                  {t('babyNursery.productsHeader')}
                </h2>
              </div>
              <span className="text-xs text-[#302820]/60">
                {t('babyNursery.productsSubtitle')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {babyProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOpenEnquiry={onOpenEnquiry} 
                />
              ))}
            </div>
          </div>

          {/* Educational Section: The Wisdom of Traditional Tamil Baby Bedding */}
          <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {t('babyNursery.traditionKicker')}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#302820]">
                {t('babyNursery.traditionTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
                {t('babyNursery.traditionDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#302820] text-[#D4C1A7] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="font-serif text-lg font-bold text-[#302820]">
                  {isTamil ? 'கடுகு தலையணை (தலை உருண்டை அமைய)' : 'Mustard Seed Head Shaping (கடுகு)'}
                </h4>
                <p className="text-xs text-[#302820]/80 leading-relaxed font-sans">
                  {isTamil 
                    ? 'பச்சிளம் குழந்தைகளின் மண்டை ஓடு மென்மையாக இருக்கும். கடுகு உருண்டைகள் தலை அசைவுக்கு ஏற்ப வளைந்து கொடுத்து குழந்தையின் தலை தட்டையாகாமல் அழகான உருண்டை வடிவம் பெற உதவும்.'
                    : 'Newborn cranial bones are soft and malleable. Cleaned tiny mustard seeds shift gently as baby moves, distributing weight evenly across the skull to naturally prevent flat-head syndrome (plagiocephaly).'}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#302820] text-[#D4C1A7] flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="font-serif text-lg font-bold text-[#302820]">
                  {isTamil ? 'சமதள உறுதித்தன்மை (Spinal Support)' : 'Firm Flat Spinal Support'}
                </h4>
                <p className="text-xs text-[#302820]/80 leading-relaxed font-sans">
                  {isTamil 
                    ? 'ஸ்பாஞ்ச் மெத்தைகளில் குழந்தைகள் உள்வாங்கி மூச்சுத் திணறல் ஏற்படும் அபாயம் உண்டு. இலவம் பஞ்சு மருத்துவர்கள் பரிந்துரைக்கும் சமதள உறுதியை தந்து குழந்தையின் முதுகுத்தண்டை காக்கும்.'
                    : 'Soft memory foam mattresses allow infants to sink, risking spinal curvature distortion and breathing obstruction. Ilavam Panchu provides the flat-firm surface recommended by pediatricians for SIDS prevention.'}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#302820] text-[#D4C1A7] flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="font-serif text-lg font-bold text-[#302820]">
                  {isTamil ? 'குளிர்ச்சியான காற்றோட்டம் (Thermal Balance)' : 'Thermal Balance for Sensitive Skin'}
                </h4>
                <p className="text-xs text-[#302820]/80 leading-relaxed font-sans">
                  {isTamil 
                    ? 'குழந்தைகளால் உடல் சூட்டை சுயமாக கட்டுப்படுத்த முடியாது. பஞ்சின் காற்றோட்ட தன்மை வியர்க்குரு, சூட்டுக்கட்டி வராமல் அமைதியான நிம்மதியான உறக்கத்தை தருகிறது.'
                    : 'Infants cannot regulate their body temperature like adults. Hollow silk cotton breathes constantly, preventing heat rashes, prickly heat, and nighttime sweatiness during warm Tamil Nadu seasons.'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
