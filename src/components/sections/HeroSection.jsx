import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero_bedroom.png';
import { Sparkles, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function HeroSection({ onOpenConfigurator, onExploreClick }) {
  const { t, isTamil } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#242321] text-[#F7F4EE] pt-20">
      
      {/* Background Photography with Slow Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroImg} 
          alt="JKR Mattress Luxury Bedroom Scene" 
          className="w-full h-full object-cover object-center animate-subtle-zoom opacity-65 scale-105"
        />
        {/* Cinematic Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 space-y-8">
        
        {/* Subtle Brand Kicker */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4C1A7] text-xs font-medium animate-fadeIn ${
          isTamil ? 'tracking-normal' : 'uppercase tracking-[0.25em]'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className={`font-serif hero-headline drop-shadow-lg ${
          isTamil 
            ? 'text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight' 
            : 'text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05]'
        } text-[#F7F4EE]`}>
          {t('hero.headlinePrefix')}<span className="italic font-light text-[#D4C1A7]">{t('hero.headlineHighlight')}</span>
        </h1>

        {/* Supporting Copy */}
        <p className={`mx-auto text-[#F7F4EE]/85 font-light leading-relaxed ${
          isTamil ? 'text-sm sm:text-base max-w-xl' : 'text-base sm:text-xl max-w-2xl tracking-wide'
        }`}>
          {t('hero.subtitle')}
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/mattresses"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#A68B65] text-[#242321] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4C1A7] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
          >
            <span>{t('hero.exploreBtn')}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onOpenConfigurator}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#D4C1A7]" />
            <span>{t('hero.findComfortBtn')}</span>
          </button>
        </div>

        {/* Brand Material Tag Highlight */}
        <div className="pt-8 flex items-center justify-center gap-6 text-xs text-[#D4C1A7]/80">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A68B65]" />
            {t('hero.pillPure')}
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A68B65]" />
            {t('hero.pillCustom')}
          </span>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest font-light">
        <span>{t('hero.scrollHint')}</span>
        <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#D4C1A7] animate-bounce mt-1" />
        </div>
      </div>

    </section>
  );
}
