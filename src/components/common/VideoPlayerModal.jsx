import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Clock, Sparkles, CheckCircle2, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function VideoPlayerModal({ isOpen, onClose, video }) {
  const { t, isTamil } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const videoPlayerRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setIsLoading(true);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const isLocalVideo = Boolean(video.videoSrc);
  const youtubeEmbedUrl = video.youtubeId
    ? `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
    : null;

  const videoTitle = video.titleKey ? t(video.titleKey) : video.title;
  const videoDesc = video.descKey ? t(video.descKey) : video.desc;

  const handleFullScreen = () => {
    if (videoPlayerRef.current) {
      if (videoPlayerRef.current.requestFullscreen) {
        videoPlayerRef.current.requestFullscreen();
      } else if (videoPlayerRef.current.webkitRequestFullscreen) {
        videoPlayerRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#1E1C1A] text-[#F7F4EE] rounded-3xl border border-[#A68B65]/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#25221F]">
          <div className="flex items-center gap-3 overflow-hidden pr-2">
            <span className="p-2 rounded-xl bg-[#A68B65]/20 text-[#D4C1A7] shrink-0">
              <Play className="w-4 h-4 fill-current text-[#D4C1A7]" />
            </span>
            <div className="truncate">
              <h3 id="video-modal-title" className="font-serif text-base sm:text-lg font-bold text-[#F7F4EE] truncate">
                {videoTitle}
              </h3>
              <div className="flex items-center gap-3 text-xs text-[#D4C1A7]/80">
                {video.duration && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A68B65]" />
                    <span>{video.duration}</span>
                  </span>
                )}
                {video.author && (
                  <span>• {video.author}</span>
                )}
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>{isTamil ? 'அசல் HD வீடியோ' : 'High Definition Local Video'}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {isLocalVideo && (
              <button
                onClick={handleFullScreen}
                title={isTamil ? 'முழுத்திரை' : 'Full Screen'}
                className="p-2 rounded-full bg-white/10 hover:bg-[#A68B65] text-white hover:text-[#1E1C1A] transition-all duration-200 cursor-pointer hidden sm:flex items-center justify-center"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label={t('common.close')}
              className="p-2 rounded-full bg-white/10 hover:bg-[#A68B65] text-white hover:text-[#1E1C1A] transition-all duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame Container (16:9) */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 z-10 text-[#D4C1A7]">
              <div className="w-8 h-8 rounded-full border-2 border-[#A68B65] border-t-transparent animate-spin" />
              <span className="text-xs uppercase tracking-widest">{t('video.loadingVideo')}</span>
            </div>
          )}

          {isLocalVideo ? (
            <video
              ref={videoPlayerRef}
              src={video.videoSrc}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-contain bg-black"
              onLoadedData={() => setIsLoading(false)}
              onCanPlay={() => setIsLoading(false)}
            />
          ) : youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={videoTitle}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />
          ) : null}
        </div>

        {/* Modal Info Footer */}
        <div className="p-4 sm:p-5 bg-[#25221F] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1 max-w-xl">
            {videoDesc && (
              <p className="text-white/85 font-light leading-relaxed">
                {videoDesc}
              </p>
            )}
            <p className="text-[11px] text-[#D4C1A7]/70 italic flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3 h-3 text-[#A68B65]" />
              <span>{isTamil ? 'ஜேகேஆர் மெத்தையின் உண்மை அனுபவக் காட்சிப் பதிவு' : 'Official JKR Mattress High-Definition Sleep Production'}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-[#D4C1A7] text-[11px] font-medium border border-white/10">
              {isTamil ? '100% இயற்கை பஞ்சு' : '100% Pure Botanical Comfort'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
