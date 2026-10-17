import React, { useState } from 'react';
import { Play, Sparkles, Clock, ArrowRight, ShieldCheck, Feather, Wind, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_VIDEOS } from '../../data/videoData';
import VideoPlayerModal from '../common/VideoPlayerModal';

import heroImg from '../../assets/images/hero_bedroom.png';
import pillowImg from '../../assets/images/pillow_collection.png';
import craftImg from '../../assets/images/natural_material.png';
import coolingImg from '../../assets/images/cooling_texture.png';

const localImages = {
  'hero_bedroom.png': heroImg,
  'pillow_collection.png': pillowImg,
  'natural_material.png': craftImg,
  'cooling_texture.png': coolingImg
};

export default function FeaturedProductVideoSection({ onOpenEnquiry, onOpenConfigurator }) {
  const { t, isTamil } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlayVideo = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const featured = HOME_VIDEOS.featured;
  const vignettes = HOME_VIDEOS.vignettes;

  return (
    <section className="py-20 bg-[#242321] text-[#F7F4EE] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A68B65]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4C1A7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
            <span>{t('video.homeKicker')}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F7F4EE]">
            {t('video.homeTitle')}
          </h2>

          <p className="text-sm sm:text-base text-[#F7F4EE]/80 font-light max-w-2xl mx-auto leading-relaxed">
            {t('video.homeSubtitle')}
          </p>
        </div>

        {/* Featured Centerpiece Video Card (Cinematic 16:9 / 21:9 feel) */}
        <div className="relative rounded-3xl overflow-hidden border border-[#A68B65]/40 bg-[#1A1917] shadow-2xl group transition-all duration-500 hover:border-[#D4C1A7]/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Thumbnail Frame with Play Trigger */}
            <div className="lg:col-span-8 relative aspect-video overflow-hidden bg-black cursor-pointer" onClick={() => handlePlayVideo(featured)}>
              <video 
                src={featured.videoSrc}
                poster={localImages[featured.fallbackImage] || heroImg}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                onMouseEnter={(e) => {
                  try { e.target.play().catch(() => {}); } catch(err) {}
                }}
                onMouseLeave={(e) => {
                  try { e.target.pause(); e.target.currentTime = 0; } catch(err) {}
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />

              {/* Large Centered Play Trigger with Soft Gold Pulse */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#A68B65]/30 animate-ping opacity-60" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A68B65] text-[#242321] group-hover:bg-[#D4C1A7] transition-all duration-300 shadow-2xl flex items-center justify-center transform group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4C1A7] text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                  {t(featured.categoryKey)}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/80 text-[11px] font-medium flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-[#A68B65]" />
                  <span>{featured.duration}</span>
                </span>
              </div>

              {/* Bottom Thumbnail Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/80 flex items-center justify-between pointer-events-none">
                <span className="font-light tracking-wide italic">
                  "{t('video.taglineComfort')}"
                </span>
                <span className="hidden sm:inline-flex text-[11px] text-[#D4C1A7]">
                  {t('video.clickToWatch')}
                </span>
              </div>
            </div>

            {/* Featured Editorial Copy on Right */}
            <div className="lg:col-span-4 p-6 sm:p-10 space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                  {t('video.featuredBadge')}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE] leading-snug">
                  {t(featured.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                  {t(featured.descKey)}
                </p>
              </div>

              {/* Feature Highlights Pills */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-[#D4C1A7]">
                  <Feather className="w-4 h-4 text-[#A68B65]" />
                  <span>{isTamil ? '100% இயற்கை தாவர இழை' : '100% Pure Botanical Ceiba Fiber'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D4C1A7]">
                  <Wind className="w-4 h-4 text-[#A68B65]" />
                  <span>{isTamil ? 'இயற்கை வெப்பக் குறைப்பு காற்றோட்டம்' : 'Naturally Breathable Air-Lumen Core'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#D4C1A7]">
                  <Layers className="w-4 h-4 text-[#A68B65]" />
                  <span>{isTamil ? 'கைவண்ணத்தில் உருவான பாரம்பரிய இறுக்கம்' : 'Hand-Tufted Ergonomic Alignment'}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handlePlayVideo(featured)}
                  className="px-6 py-3.5 rounded-full bg-[#A68B65] text-[#242321] text-xs font-semibold uppercase tracking-widest hover:bg-[#D4C1A7] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t('video.watchFeaturedBtn')}</span>
                </button>

                {onOpenConfigurator && (
                  <button
                    onClick={onOpenConfigurator}
                    className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium uppercase tracking-wider transition-colors border border-white/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t('video.findYourComfort')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4C1A7]" />
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* 3 Supporting Lifestyle & Product Vignettes */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {t('video.vignettesKicker')}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE]">
                {t('video.vignettesTitle')}
              </h3>
            </div>
            <p className="text-xs text-[#D4C1A7]/80 font-light max-w-md">
              {t('video.vignettesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vignettes.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handlePlayVideo(item)}
                className="group rounded-3xl bg-[#1C1A18] border border-[#A68B65]/25 hover:border-[#D4C1A7]/60 overflow-hidden shadow-lg transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Thumbnail Frame */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <video
                    src={item.videoSrc}
                    poster={localImages[item.fallbackImage] || heroImg}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    onMouseEnter={(e) => {
                      try { e.target.play().catch(() => {}); } catch(err) {}
                    }}
                    onMouseLeave={(e) => {
                      try { e.target.pause(); e.target.currentTime = 0; } catch(err) {}
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-[#A68B65] text-white group-hover:text-[#242321] backdrop-blur-md transition-all duration-300 flex items-center justify-center shadow-lg group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white/90 font-medium flex items-center gap-1 border border-white/10 pointer-events-none">
                    <Clock className="w-2.5 h-2.5 text-[#A68B65]" />
                    <span>{item.duration}</span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-[#D4C1A7] font-semibold uppercase tracking-wider border border-white/10 pointer-events-none">
                    {t(item.categoryKey)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#F7F4EE] group-hover:text-[#D4C1A7] transition-colors leading-snug">
                      {t(item.titleKey)}
                    </h4>
                    <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-2">
                      {t(item.descKey)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#A68B65] font-semibold">
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t('video.watchClip')} →
                    </span>
                    <span className="text-[11px] text-white/40 font-normal">
                      {item.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Promise Strip below videos */}
        <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="block text-[#D4C1A7] font-serif font-bold text-lg sm:text-xl">100%</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-medium">
              {isTamil ? 'தூய இலவம் பஞ்சு' : 'Pure Silk Cotton'}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="block text-[#D4C1A7] font-serif font-bold text-lg sm:text-xl">0%</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-medium">
              {isTamil ? 'செயற்கை ரசாயனங்கள்' : 'Chemical Foams'}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="block text-[#D4C1A7] font-serif font-bold text-lg sm:text-xl">15–20+</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-medium">
              {isTamil ? 'ஆண்டுகள் உழைப்பு' : 'Years Natural Lifespan'}
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="block text-[#D4C1A7] font-serif font-bold text-lg sm:text-xl">48–72h</span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider font-medium">
              {isTamil ? 'நேரடி டெலிவரி' : 'Tamil Nadu Delivery'}
            </span>
          </div>
        </div>

      </div>

      {/* Reusable Video Modal */}
      <VideoPlayerModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        video={activeVideo}
      />
    </section>
  );
}
