import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sparkles,
  Eye,
  MoveHorizontal
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function InteractiveProductGallery({ 
  images = [], 
  productName = '', 
  badge = null,
  className = '' 
}) {
  const { t, isTamil } = useLanguage();

  // Normalize image list: ensure at least one valid image
  const validImages = Array.isArray(images) && images.length > 0 
    ? images.filter(Boolean) 
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Zoom state
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = normal, 1.8 = detail, 2.5 = macro
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 }); // percentage
  const [isPanning, setIsPanning] = useState(false);

  // Drag / Swipe state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const isHorizontalDrag = useRef(null);
  const containerRef = useRef(null);
  const fullscreenContainerRef = useRef(null);

  const totalImages = validImages.length;
  const currentImage = validImages[currentIndex] || '';

  // View descriptions based on verified photography order
  const getViewName = (index) => {
    if (index === 0) return t('gallery.view1');
    if (index === 1) return t('gallery.view2');
    if (index === 2) return t('gallery.view3');
    return `${t('gallery.views.view0')} ${index + 1}`;
  };

  // Circular navigation
  const handlePrev = useCallback(() => {
    if (totalImages <= 1) return;
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleNext = useCallback(() => {
    if (totalImages <= 1) return;
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const handleSelectImage = (idx) => {
    setZoomLevel(1);
    setCurrentIndex(idx);
  };

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.75, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.75, 1);
      if (next === 1) setZoomOrigin({ x: 50, y: 50 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setZoomOrigin({ x: 50, y: 50 });
  };

  const handleToggleZoom = (e) => {
    if (zoomLevel > 1) {
      handleResetZoom();
    } else {
      // Calculate click position relative to target
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      setZoomLevel(2);
    }
  };

  // Pan while zoomed
  const handleMouseMove = (e) => {
    if (zoomLevel <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (zoomLevel > 1) {
          handleResetZoom();
        } else if (isFullscreen) {
          setIsFullscreen(false);
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, zoomLevel, handlePrev, handleNext]);

  // Lock scroll when in fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  // Touch Swipe Handlers (preserving vertical page scroll)
  const onTouchStart = (e) => {
    if (zoomLevel > 1) return; // Allow pinch / pan when zoomed
    const touch = e.touches[0];
    dragStartX.current = touch.clientX;
    dragStartY.current = touch.clientY;
    isHorizontalDrag.current = null;
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (zoomLevel > 1 || !isDragging) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - dragStartX.current;
    const diffY = touch.clientY - dragStartY.current;

    // Detect primary direction
    if (isHorizontalDrag.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalDrag.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    if (isHorizontalDrag.current) {
      // Horizontal swipe: apply elastic resistance
      setDragOffset(diffX * 0.4);
    }
  };

  const onTouchEnd = () => {
    if (isHorizontalDrag.current) {
      const threshold = 40; // px
      if (dragOffset > threshold) {
        handlePrev();
      } else if (dragOffset < -threshold) {
        handleNext();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
    isHorizontalDrag.current = null;
  };

  // Mouse Drag Handlers (Desktop)
  const onMouseDown = (e) => {
    if (zoomLevel > 1 || e.button !== 0) return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const onMouseMoveDrag = (e) => {
    if (zoomLevel > 1) {
      handleMouseMove(e);
      return;
    }
    if (!isDragging) return;
    const diffX = e.clientX - dragStartX.current;
    setDragOffset(diffX * 0.35);
  };

  const onMouseUpDrag = () => {
    if (isDragging && zoomLevel === 1) {
      const threshold = 45; // px
      if (dragOffset > threshold) {
        handlePrev();
      } else if (dragOffset < -threshold) {
        handleNext();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className={`space-y-4 select-none ${className}`}>
      
      {/* Main Image Frame Container */}
      <div 
        ref={containerRef}
        className="relative rounded-3xl overflow-hidden border border-[#D4C1A7] bg-[#FAF7F2] shadow-md group transition-all duration-300"
      >
        {/* Aspect Ratio Box with Clean Background */}
        <div 
          className={`relative w-full h-[380px] sm:h-[460px] lg:h-[490px] overflow-hidden flex items-center justify-center bg-radial from-[#FFFFFF] to-[#FAF7F2] ${
            zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={handleToggleZoom}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMoveDrag}
          onMouseUp={onMouseUpDrag}
          onMouseLeave={onMouseUpDrag}
        >
          {/* Main Product Image with Smooth Transform & Zoom */}
          <img 
            src={currentImage} 
            alt={`${productName} - ${getViewName(currentIndex)}`}
            draggable={false}
            onError={(e) => {
              // Graceful fallback to first valid image if this specific view fails
              if (validImages[0] && e.target.src !== validImages[0]) {
                e.target.src = validImages[0];
              }
            }}
            style={{
              transform: `scale(${zoomLevel}) translateX(${zoomLevel === 1 ? dragOffset : 0}px)`,
              transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
              transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.25s ease'
            }}
            className="w-full h-full object-cover pointer-events-none select-none transition-transform will-change-transform"
          />

          {/* Top Left: Optional Badge & View Name */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 pointer-events-none">
            {badge && (
              <span className="bg-[#302820]/90 backdrop-blur-md text-[#D4C1A7] text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#D4C1A7]/40 shadow-sm uppercase tracking-wider">
                {badge}
              </span>
            )}

            {/* Current View Perspective Pill */}
            <span className="bg-white/85 backdrop-blur-md text-[#302820] text-[11px] font-medium px-3 py-1.5 rounded-full border border-[#D4C1A7]/60 shadow-xs flex items-center gap-1.5">
              <Eye className="w-3 h-3 text-[#A68B65]" />
              <span>{getViewName(currentIndex)}</span>
            </span>
          </div>

          {/* Top Right: Fullscreen & Zoom Status Controls */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 pointer-events-auto">
            {zoomLevel > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleResetZoom(); }}
                title={t('gallery.resetZoom')}
                aria-label={t('gallery.resetZoom')}
                className="px-2.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-[10px] font-bold uppercase tracking-wider shadow-md hover:bg-[#A68B65] hover:text-[#242321] transition-all flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{zoomLevel.toFixed(1)}x</span>
              </button>
            )}

            <button
              onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
              title={t('gallery.zoomIn')}
              aria-label={t('gallery.zoomIn')}
              disabled={zoomLevel >= 2.5}
              className="p-2 rounded-full bg-white/90 hover:bg-white text-[#302820] hover:text-[#A68B65] shadow-sm backdrop-blur-md transition-all border border-[#D4C1A7]/40 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setIsFullscreen(true); }}
              title={t('gallery.viewFullscreen')}
              aria-label={t('gallery.viewFullscreen')}
              className="p-2 rounded-full bg-white/90 hover:bg-white text-[#302820] hover:text-[#A68B65] shadow-sm backdrop-blur-md transition-all border border-[#D4C1A7]/40 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Arrows (circular, wrap-around) */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                title={t('gallery.prevImage')}
                aria-label={t('gallery.prevImage')}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#302820] hover:text-[#A68B65] shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-[#D4C1A7]/50 hover:scale-105 active:scale-95 cursor-pointer z-10"
              >
                <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                title={t('gallery.nextImage')}
                aria-label={t('gallery.nextImage')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#302820] hover:text-[#A68B65] shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-[#D4C1A7]/50 hover:scale-105 active:scale-95 cursor-pointer z-10"
              >
                <ChevronRight className="w-5 h-5 translate-x-0.5" />
              </button>
            </>
          )}

          {/* Bottom Bar: Image Count & Subtle Interaction Hint */}
          <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-[11px] text-[#302820]/75 pointer-events-none">
            <span className="bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4C1A7]/40 font-mono font-medium shadow-2xs">
              {currentIndex + 1} / {totalImages}
            </span>

            {totalImages > 1 && zoomLevel === 1 && (
              <span className="hidden sm:inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-[#D4C1A7] px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium shadow-xs">
                <MoveHorizontal className="w-3 h-3 text-[#A68B65]" />
                <span>{t('gallery.dragHint')}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Selectable Thumbnails Strip */}
      {totalImages > 1 && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-3">
            {validImages.map((img, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectImage(idx)}
                  aria-label={`${t('gallery.thumbnailAlt', { name: productName, index: idx + 1 })} - ${getViewName(idx)}`}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all p-0.5 bg-white cursor-pointer group text-left ${
                    isSelected 
                      ? 'border-[#A68B65] ring-2 ring-[#A68B65]/40 shadow-md scale-[1.02]' 
                      : 'border-[#D4C1A7]/60 opacity-75 hover:opacity-100 hover:border-[#A68B65]/60'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7F2]">
                    <img 
                      src={img} 
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>

                  {/* Thumbnail View Label */}
                  <div className="p-1.5 text-center">
                    <p className={`text-[10px] font-semibold uppercase tracking-wider truncate ${
                      isSelected ? 'text-[#302820]' : 'text-[#302820]/60'
                    }`}>
                      {getViewName(idx)}
                    </p>
                  </div>

                  {isSelected && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#A68B65] shadow-xs" />
                  )}
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-center text-[#302820]/60 font-light italic">
            {t('gallery.zoomHint')}
          </p>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={t('gallery.viewFullscreen')}
        >
          {/* Fullscreen Header */}
          <div className="flex items-center justify-between z-20 pb-2 border-b border-white/10">
            <div className="space-y-0.5">
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#F7F4EE]">
                {productName}
              </h3>
              <p className="text-xs text-[#D4C1A7]">
                {getViewName(currentIndex)} ({currentIndex + 1} of {totalImages})
              </p>
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                title={t('gallery.zoomOut')}
                aria-label={t('gallery.zoomOut')}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-30 cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={handleResetZoom}
                title={t('gallery.resetZoom')}
                aria-label={t('gallery.resetZoom')}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#A68B65] hover:text-[#242321] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                {zoomLevel.toFixed(1)}x
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                title={t('gallery.zoomIn')}
                aria-label={t('gallery.zoomIn')}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-30 cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsFullscreen(false)}
                title={t('gallery.closeFullscreen')}
                aria-label={t('gallery.closeFullscreen')}
                className="p-2.5 rounded-full bg-[#A68B65] hover:bg-[#D4C1A7] text-[#242321] transition-all ml-2 cursor-pointer shadow-lg"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Fullscreen Main Image Viewport */}
          <div 
            ref={fullscreenContainerRef}
            className={`relative flex-1 w-full flex items-center justify-center overflow-hidden my-4 ${
              zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={handleToggleZoom}
            onMouseMove={handleMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img 
              src={currentImage} 
              alt={`${productName} - ${getViewName(currentIndex)}`}
              draggable={false}
              style={{
                transform: `scale(${zoomLevel}) translateX(${zoomLevel === 1 ? dragOffset : 0}px)`,
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
              className="max-w-full max-h-[75vh] object-contain select-none will-change-transform rounded-2xl"
            />

            {/* Floating Navigation Arrows in Fullscreen */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  title={t('gallery.prevImage')}
                  aria-label={t('gallery.prevImage')}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-[#A68B65] text-white hover:text-[#242321] border border-white/20 transition-all cursor-pointer shadow-xl z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  title={t('gallery.nextImage')}
                  aria-label={t('gallery.nextImage')}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-[#A68B65] text-white hover:text-[#242321] border border-white/20 transition-all cursor-pointer shadow-xl z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Fullscreen Bottom Thumbnails */}
          {totalImages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-2 z-20">
              {validImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectImage(idx)}
                  className={`w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'border-[#A68B65] scale-105 shadow-md' 
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
