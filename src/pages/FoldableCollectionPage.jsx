import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import foldableFoldedImg from '../assets/images/foldable_folded.png';
import floorGaddiImg from '../assets/images/floor_gaddi_bed.jpg';
import { useLanguage } from '../../src/context/LanguageContext';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function FoldableCollectionPage({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const foldables = PRODUCTS.filter(p => p.category === 'foldable');

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Banner - Standardized Pattern */}
          <div className="bg-[#242321] text-[#F7F4EE] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#A68B65]/30 shadow-xl">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest border border-white/20">
                <Layers className="w-3.5 h-3.5 text-[#A68B65]" />
                <span>{t('foldable.kicker')}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F4EE]">
                {t('foldable.title')}
              </h1>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                {t('foldable.subtitle')}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#D4C1A7]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B65]" />
                  <span>{t('foldable.purePanchuTag')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B65]" />
                  <span>{t('foldable.creaseTag')}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <img 
                  src={floorGaddiImg} 
                  alt="Roll Up Floor Gaddi" 
                  className="w-full h-36 object-cover rounded-2xl border border-[#A68B65]/40 shadow-md" 
                />
                <span className="text-[10px] uppercase text-[#D4C1A7] font-semibold block text-center">
                  {isTamil ? 'சுருட்டக்கூடிய தரை மெத்தை' : 'Traditional Roll-Up'}
                </span>
              </div>
              <div className="space-y-1.5">
                <img 
                  src={foldableFoldedImg} 
                  alt="Folded Cube Daybed" 
                  className="w-full h-36 object-cover rounded-2xl border border-[#A68B65]/40 shadow-md" 
                />
                <span className="text-[10px] uppercase text-[#D4C1A7] font-semibold block text-center">
                  {isTamil ? 'மடிக்கக்கூடிய சோபா படுக்கை' : 'Convertible Daybed'}
                </span>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="space-y-6">
            <div className="border-b border-[#D4C1A7]/40 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                  {isTamil ? 'இடத்தை மிச்சப்படுத்தும் படுக்கைகள்' : 'Portable & Flexible'}
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#302820]">
                  {t('foldable.productsHeader')}
                </h2>
              </div>
              <span className="text-xs text-[#302820]/60">
                {foldables.length} {t('foldable.countDesigns')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {foldables.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOpenEnquiry={onOpenEnquiry} 
                />
              ))}
            </div>
          </div>

          {/* Benefits of Natural Silk Cotton for Foldable & Floor Beds */}
          <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {isTamil ? 'தரை படுக்கைக்கு ஏன் இலவம் பஞ்சு?' : 'Why Silk Cotton For Floor Resting?'}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#302820]">
                {isTamil ? 'இடத்தை மிச்சப்படுத்தும் ஆரோக்கியமான இயற்கை படுக்கை' : 'Traditional Grounding Comfort for Modern Compact Living'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-2 shadow-2xs">
                <h4 className="font-serif text-lg font-bold text-[#302820]">
                  {isTamil ? 'வடிவம் மாறாத மடிப்புத் திறன்' : 'Resilient Folding Architecture'}
                </h4>
                <p className="text-xs text-[#302820]/75 leading-relaxed font-sans">
                  {isTamil 
                    ? 'ஸ்பாஞ்ச் மெத்தைகள் மடிப்புகளில் கிழிந்துவிடும். ஆனால் இயற்கை இலவம் பஞ்சு இழைகள் விரிக்கும்போது மீண்டும் சீராக பரவி சமமான உறுதியை தரும்.'
                    : 'Unlike synthetic foam which develops permanent stress tears at the fold points, silk cotton hollow fibers naturally redistribute when unfolded, delivering smooth, even firmness.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-2 shadow-2xs">
                <h4 className="font-serif text-lg font-bold text-[#302820]">
                  {isTamil ? 'தரை ஈரப்பதத்தை தடுக்கும் தன்மை' : 'Ground Moisture Barrier'}
                </h4>
                <p className="text-xs text-[#302820]/75 leading-relaxed font-sans">
                  {isTamil 
                    ? 'குளிர்ந்த தரைத்தளங்களில் செயற்கை மெத்தைகள் ஈரப்பதத்தை உறிஞ்சி சளி பிடிக்கும். பஞ்சின் இயற்கை மெழுகு படலம் ஈரத்தை தடுத்து வெதுவெதுப்பை தரும்.'
                    : 'Cold floors often cause dampness under synthetic foam beds. Pure Ilavam Panchu has natural hydrophobic wax coatings that repel moisture and keep floor sleepers dry.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#D4C1A7]/50 space-y-2 shadow-2xs">
                <h4 className="font-serif text-lg font-bold text-[#302820]">
                  {isTamil ? 'முதுகுத்தண்டு சமநிலை சீரமைப்பு' : 'Healthy Grounding Spine Lift'}
                </h4>
                <p className="text-xs text-[#302820]/75 leading-relaxed font-sans">
                  {isTamil 
                    ? 'யோகா மற்றும் சித்த மருத்துவத்தில் பரிந்துரைக்கப்படும் தரையில் படுக்கும் பழக்கத்திற்கு இலவம் பஞ்சு மெத்தை முதுகெலும்பை சீராக நேர்க்கோட்டில் வைக்கிறது.'
                    : 'Firm floor sleeping with buoyant silk cotton provides decompressing lumbar support favored by yoga practitioners and ayurvedic health traditions.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
