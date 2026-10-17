import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, Info, Clock, Layers, Scissors, ShieldAlert, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_MANUFACTURING_VIDEOS } from '../../data/videoData';
import VideoPlayerModal from '../common/VideoPlayerModal';

import royalOrthoImg from '../../assets/images/royal_ortho_mattress.jpg';
import pillowImg from '../../assets/images/pillow_collection.png';
import sideProfileImg from '../../assets/images/side_profile.png';
import customTeakImg from '../../assets/images/custom_teak_bed.png';

const localImages = {
  'royal_ortho_mattress.jpg': royalOrthoImg,
  'pillow_collection.png': pillowImg,
  'side_profile.png': sideProfileImg,
  'custom_teak_bed.png': customTeakImg
};

export default function ManufacturingVideoSection() {
  const { t, isTamil } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlayVideo = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const { featuredMattress, featuredPillow, supportingCraft } = ABOUT_MANUFACTURING_VIDEOS;

  return (
    <section className="space-y-16">
      
      {/* Section Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
          <span>{t('video.aboutMfgKicker')}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#302820]">
          {t('video.aboutMfgTitle')}
        </h2>

        <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
          {t('video.aboutMfgSubtitle')}
        </p>

        {/* Responsible Sourcing & Educational Transparency Notice */}
        <div className="inline-flex items-start gap-2 p-3 sm:px-5 sm:py-2.5 rounded-2xl bg-[#D4C1A7]/20 border border-[#A68B65]/30 text-xs text-[#302820]/80 text-left">
          <Info className="w-4 h-4 text-[#A68B65] shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            {t('video.aboutMfgDisclaimer')}
          </span>
        </div>
      </div>

      {/* 1. Mattress Manufacturing: Prominent Featured Story */}
      <div className="bg-white border border-[#D4C1A7] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D4C1A7]/40 pb-5">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
              {t('video.aboutMattressTag')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820]">
              {t(featuredMattress.titleKey)}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#302820]/70 shrink-0">
            <span className="flex items-center gap-1 bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#D4C1A7]">
              <Clock className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{featuredMattress.duration}</span>
            </span>
            <span>{featuredMattress.author}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video Preview Card */}
          <div 
            onClick={() => handlePlayVideo(featuredMattress)}
            className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-black shadow-md cursor-pointer group border border-[#D4C1A7]"
          >
            <img 
              src={`https://i.ytimg.com/vi/${featuredMattress.youtubeId}/hqdefault.jpg`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = localImages[featuredMattress.fallbackImage] || royalOrthoImg;
              }}
              alt={t(featuredMattress.titleKey)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A68B65] text-[#242321] group-hover:bg-[#D4C1A7] transition-all duration-300 shadow-xl flex items-center justify-center group-hover:scale-110">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="font-serif italic">{t('video.clickToWatchVideo')}</span>
              <span className="px-2.5 py-1 rounded-full bg-black/60 text-[11px] text-[#D4C1A7] border border-white/20">
                {t('video.watchFactoryTour')}
              </span>
            </div>
          </div>

          {/* Educational Breakdown: 4 Core Manufacturing Phases */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#302820]">
              {t('video.aboutWhatYouLearn')}
            </h4>
            <p className="text-xs text-[#302820]/75 leading-relaxed">
              {t(featuredMattress.descKey)}
            </p>

            <div className="space-y-3 pt-2">
              {featuredMattress.learningStepsKeys.map((stepKey, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#D4C1A7]/60">
                  <span className="w-5 h-5 rounded-full bg-[#A68B65] text-[#242321] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-[#302820]/85 font-medium leading-relaxed">
                    {t(stepKey)}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => handlePlayVideo(featuredMattress)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-wider hover:bg-[#A68B65] hover:text-[#242321] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t('video.watchMattressProcess')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Pillow Manufacturing Feature */}
      <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D4C1A7]/40 pb-5">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
              {t('video.aboutPillowTag')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820]">
              {t(featuredPillow.titleKey)}
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#302820]/70 shrink-0">
            <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#D4C1A7]">
              <Clock className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{featuredPillow.duration}</span>
            </span>
            <span>{featuredPillow.author}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text and Educational Breakdown on Left on Desktop */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#302820]">
              {t('video.aboutPillowLearnTitle')}
            </h4>
            <p className="text-xs text-[#302820]/75 leading-relaxed">
              {t(featuredPillow.descKey)}
            </p>

            <div className="space-y-3 pt-2">
              {featuredPillow.learningStepsKeys.map((stepKey, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#D4C1A7]/60">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-[#302820]/85 font-medium leading-relaxed">
                    {t(stepKey)}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => handlePlayVideo(featuredPillow)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#A68B65] text-[#242321] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4C1A7] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t('video.watchPillowProcess')}</span>
              </button>
            </div>
          </div>

          {/* Video Preview Card on Right */}
          <div 
            onClick={() => handlePlayVideo(featuredPillow)}
            className="lg:col-span-7 order-1 lg:order-2 relative aspect-video rounded-2xl overflow-hidden bg-black shadow-md cursor-pointer group border border-[#D4C1A7]"
          >
            <img 
              src={`https://i.ytimg.com/vi/${featuredPillow.youtubeId}/hqdefault.jpg`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = localImages[featuredPillow.fallbackImage] || pillowImg;
              }}
              alt={t(featuredPillow.titleKey)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A68B65] text-[#242321] group-hover:bg-[#D4C1A7] transition-all duration-300 shadow-xl flex items-center justify-center group-hover:scale-110">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="font-serif italic">{t('video.clickToWatchVideo')}</span>
              <span className="px-2.5 py-1 rounded-full bg-black/60 text-[11px] text-[#D4C1A7] border border-white/20">
                {t('video.naturalCottonStuffing')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Supporting Craftsmanship Deep Dives: Materials & Assembly */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
            {t('video.aboutSupportingKicker')}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820]">
            {t('video.aboutSupportingTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
            {t('video.aboutSupportingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingCraft.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => handlePlayVideo(item)}
              className="bg-white border border-[#D4C1A7] rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Video thumbnail */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-[#D4C1A7]/50">
                  <img 
                    src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = localImages[item.fallbackImage] || royalOrthoImg;
                    }}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#A68B65] text-[#242321] group-hover:bg-[#D4C1A7] transition-all flex items-center justify-center shadow-md group-hover:scale-110">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 text-[10px] text-white/90 flex items-center gap-1 border border-white/20">
                    <Clock className="w-2.5 h-2.5 text-[#A68B65]" />
                    <span>{item.duration}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 text-[10px] text-[#D4C1A7] font-semibold border border-white/20 uppercase tracking-wider">
                    {t(item.categoryKey)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#302820] group-hover:text-[#A68B65] transition-colors leading-snug">
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-xs text-[#302820]/75 font-light leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#D4C1A7]/60 text-xs text-[#302820]/80 space-y-1">
                <span className="font-semibold text-[#A68B65] block uppercase tracking-wider text-[10px]">
                  {t('video.aboutKeyTakeaway')}
                </span>
                <p className="italic text-[11px]">
                  "{t(item.takeawayKey)}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Integration */}
      <VideoPlayerModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        video={activeVideo}
      />
    </section>
  );
}
