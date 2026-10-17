import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero_bedroom.png';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Sparkles, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function ClosingCtaSection({ onOpenEnquiry }) {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-[#242321] text-[#F7F4EE] overflow-hidden">
      
      {/* Background Photography with Elegant Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Serene Bedroom Sanctuary" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-[#242321]/80 to-[#242321]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D4C1A7] text-xs uppercase tracking-widest border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
          <span>{t('home.ctaKicker')}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F7F4EE] leading-tight">
          {t('home.ctaTitle')}
        </h2>

        <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
          {t('home.ctaSubtitle')}
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/mattresses"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#A68B65] text-[#242321] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4C1A7] transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>{t('home.ctaExploreBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => onOpenEnquiry(null)}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs uppercase tracking-widest backdrop-blur-md transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4C1A7]" />
            <span>{t('home.ctaEnquireBtn')}</span>
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#D4C1A7]/80">
          <span>{t('common.verifiedCraft')}</span>
          <span className="hidden sm:inline">•</span>
          <span>{t('common.fastDispatch')}</span>
          <span className="hidden sm:inline">•</span>
          <span>{t('common.tamilNaduDelivery')}</span>
        </div>

      </div>
    </section>
  );
}
