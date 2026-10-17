import React from 'react';
import PageWrapper from '../components/common/PageWrapper';
import customTeakImg from '../assets/images/custom_teak_bed.png';
import royalOrthoImg from '../assets/images/royal_ortho_mattress.jpg';
import floorGaddiImg from '../assets/images/floor_gaddi_bed.jpg';
import diwanBolstersImg from '../assets/images/diwan_bolsters.jpg';
import { useLanguage } from '../../src/context/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, MapPin, Feather, User, Phone, MessageCircle } from 'lucide-react';
import CraftsmanshipCollageSection from '../components/sections/CraftsmanshipCollageSection';

export default function AboutPage({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();

  const craftingSteps = [
    {
      step: '01',
      title: t('about.step1Title'),
      desc: t('about.step1Desc')
    },
    {
      step: '02',
      title: t('about.step2Title'),
      desc: t('about.step2Desc')
    },
    {
      step: '03',
      title: t('about.step3Title'),
      desc: t('about.step3Desc')
    },
    {
      step: '04',
      title: t('about.step4Title'),
      desc: t('about.step4Desc')
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
              <span>{t('about.kicker')}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#302820]">
              {t('about.title')}
            </h1>
            <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Founder & Heritage Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-14 shadow-sm">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#A68B65]">
                <User className="w-4 h-4" />
                <span>{t('about.founderRole')}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#302820]">
                {t('about.founderTitle')}
              </h2>

              <p className="text-sm sm:text-base text-[#302820]/80 font-light leading-relaxed italic border-l-2 border-[#A68B65] pl-4">
                {t('about.founderQuote')}
              </p>

              <p className="text-sm text-[#302820]/75 font-light leading-relaxed">
                {t('about.founderBody')}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#302820]">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>{isTamil ? '100% இயற்கை தாவர இழை' : '100% Ceiba Pentandra Pure Fiber'}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#A68B65]" />
                  <span>{t('about.workshopTag')}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img 
                src={royalOrthoImg} 
                alt="JKR Mattress Handcrafted Luxury" 
                className="w-full h-80 object-cover rounded-2xl border border-[#D4C1A7] shadow-md" 
              />
            </div>
          </div>

          {/* Handcrafting Process: 4 Steps */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {t('about.stepsKicker')}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#302820]">
                {t('about.stepsTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
                {t('about.stepsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {craftingSteps.map((step, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-[#D4C1A7] space-y-3 shadow-2xs">
                  <span className="text-2xl font-serif font-bold text-[#A68B65]">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#302820]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#302820]/80 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Living Artisanal Craftsmanship & Workshop Photography Collage */}
          <CraftsmanshipCollageSection onOpenEnquiry={onOpenEnquiry} />

          {/* Visual Gallery of Workshop Products in Cohesive Palette */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {isTamil ? 'இயற்கை வனப்பு' : 'Natural Aesthetics'}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#302820]">
                {isTamil ? 'உங்கள் இல்லத்தின் ஒவ்வொரு அறைக்கும் இயற்கை மெத்தைகள்' : 'Handmade Comfort for Every Room'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-3xl overflow-hidden border border-[#D4C1A7] shadow-sm bg-white group">
                <img 
                  src={floorGaddiImg} 
                  alt="Traditional Floor Gaddi" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-5 space-y-1">
                  <h5 className="font-serif font-bold text-base text-[#302820]">
                    {isTamil ? 'சுருட்டக்கூடிய தரை மெத்தை' : 'Roll-Up Floor Gaddi'}
                  </h5>
                  <p className="text-xs text-[#302820]/70">
                    {isTamil ? 'தரை படுக்கை மற்றும் விருந்தினர்களுக்கான மெத்தை' : 'Portable, tufted natural mattress for floor sleeping'}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-[#D4C1A7] shadow-sm bg-white group">
                <img 
                  src={diwanBolstersImg} 
                  alt="Diwan Bolsters" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-5 space-y-1">
                  <h5 className="font-serif font-bold text-base text-[#302820]">
                    {isTamil ? 'பாரம்பரிய திவான் உருண்டை தலையணை' : 'Heritage Diwan Bolster Sets'}
                  </h5>
                  <p className="text-xs text-[#302820]/70">
                    {isTamil ? 'திவான் மற்றும் ஊஞ்சல்களுக்கு ஏற்ற அடர்த்தியான உருளைகள்' : 'Cylindrical silk cotton bolsters for teak diwans and swings'}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-[#D4C1A7] shadow-sm bg-white group">
                <img 
                  src={customTeakImg} 
                  alt="Custom Teak Bed" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-5 space-y-1">
                  <h5 className="font-serif font-bold text-base text-[#302820]">
                    {isTamil ? 'செட்டிநாடு தேக்கு கட்டில் மெத்தை' : 'Bespoke Antique Cots'}
                  </h5>
                  <p className="text-xs text-[#302820]/70">
                    {isTamil ? 'மர வேலைப்பாடுகளுக்கு ஏற்ப துல்லியமான அளவுகள்' : 'Precision millimeter cuts for heirloom furniture'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Contact Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#242321] text-[#F7F4EE] border border-[#A68B65]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4C1A7] font-semibold">
                {isTamil ? 'நேரடி கைவினைஞர் ஆலோசனை' : 'Direct Artisan Consultation'}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE]">
                {isTamil ? 'எங்கள் பட்டறைக்கு வாருங்கள் அல்லது வீட்டிலேயே பெறுங்கள்' : 'Visit Our Workshop or Request Doorstep Delivery'}
              </h4>
              <p className="text-xs sm:text-sm text-white/75 max-w-xl font-light">
                {isTamil 
                  ? 'போடிநாயக்கனூர் வலசத்துரை ரோட்டில் அமைந்துள்ள பட்டறையில் பஞ்சடைக்கும் முறையை நேரில் காணலாம் அல்லது தொலைபேசியில் ஆர்டர் செய்யலாம்.' 
                  : 'Located on Valasathurai Road, Bodinayakanur. We welcome visitors to see the silk cotton filling process firsthand or order with full warranty across Tamil Nadu.'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-[#A68B65] text-white hover:text-[#1F1E1C] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4C1A7]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
