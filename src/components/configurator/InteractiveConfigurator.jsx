import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PRODUCTS, 
  CATEGORIES, 
  STANDARD_MATTRESS_SIZES, 
  MATTRESS_THICKNESSES, 
  FIRMNESS_LEVELS, 
  getProductPrice 
} from '../../data/products';
import { siteConfig } from '../../config/siteConfig';
import coolingTextureImg from '../../assets/images/cooling_texture.png';
import naturalImg from '../../assets/images/natural_material.png';
import sideProfileImg from '../../assets/images/side_profile.png';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sparkles, 
  SlidersHorizontal, 
  Layers, 
  Ruler, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Eye, 
  RefreshCw, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Compass, 
  Feather, 
  Scale, 
  Maximize2,
  Clock,
  ChevronRight,
  Flame,
  Wind
} from 'lucide-react';

export default function InteractiveConfigurator({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  // Configurator Step (1 to 5) for Mobile & Desktop
  const [currentStep, setCurrentStep] = useState(1);
  
  // Visual Preview Studio Tab: 'studio' | 'puzzle' | 'blueprint' | 'texture'
  const [previewTab, setPreviewTab] = useState('studio');
  
  // Selected Puzzle Layer index (0 to 3)
  const [selectedLayer, setSelectedLayer] = useState(0);

  // Configuration States
  const [selectedCategoryId, setSelectedCategoryId] = useState('mattresses');
  
  // Filter products by category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => 
      selectedCategoryId === 'all' || p.category === selectedCategoryId
    );
  }, [selectedCategoryId]);

  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedSizeId, setSelectedSizeId] = useState('queen');
  const [customWidth, setCustomWidth] = useState(60);
  const [customLength, setCustomLength] = useState(78);
  const [selectedThickness, setSelectedThickness] = useState(7);
  const [selectedFirmness, setSelectedFirmness] = useState('Medium Firm');
  const [selectedCasing, setSelectedCasing] = useState('organic-kada'); // 'organic-kada' | 'cooling-matrix' | 'royal-damask'

  // Casing options
  const casingOptions = [
    {
      id: 'organic-kada',
      name: 'Unbleached Kada Cotton (காடா துணி)',
      tag: '100% Organic Traditional',
      desc: 'Heavyweight organic cotton drill. Breathable, hypoallergenic, and natural unbleached ivory finish.',
      image: naturalImg
    },
    {
      id: 'cooling-matrix',
      name: 'Breeze Touch Ice-Knit Matrix',
      tag: 'Heat Dissipating',
      desc: 'Japanese phase-change knit weave that actively draws heat away from the body during humid nights.',
      image: coolingTextureImg
    },
    {
      id: 'royal-damask',
      name: 'Royal Heritage Quilted Damask',
      tag: 'Ultra-Dense Luxury',
      desc: 'Double-woven jacquard with gold-stitched border piping and reinforced perimeter edge cord.',
      image: sideProfileImg
    }
  ];

  // Calculated Dimensions
  const selectedSizeObj = STANDARD_MATTRESS_SIZES.find(s => s.id === selectedSizeId);
  const isCustomSize = selectedSizeId === 'custom';
  const widthInches = isCustomSize ? customWidth : (selectedSizeObj?.width || 60);
  const lengthInches = isCustomSize ? customLength : (selectedSizeObj?.length || 78);

  // Dynamic Fiber Weight Calculation (kg of pure Ceiba pentandra silk cotton)
  const calculatedWeightKg = useMemo(() => {
    // approx volume in cubic inches: width * length * thickness * density factor (~0.00092 kg/cu in)
    const weight = widthInches * lengthInches * selectedThickness * 0.00092;
    return Math.max(12, Math.round(weight * 10) / 10);
  }, [widthInches, lengthInches, selectedThickness]);

  // Live Price Calculation
  const priceInfo = getProductPrice(selectedProduct, selectedSizeId, selectedThickness);

  // Anatomical Puzzle Layers Data
  const puzzleLayers = [
    {
      id: 'casing',
      name: 'Layer 1: Exterior Protective Casing',
      subtitle: selectedCasing === 'cooling-matrix' ? 'Breeze Ice-Knit Cover' : 'Unbleached Organic Kada Cotton',
      image: selectedCasing === 'cooling-matrix' ? coolingTextureImg : naturalImg,
      badge: 'Washable & Dust-Mite Resistant',
      description: 'Heavyweight, double-stitched cotton casing (காடா துணி) that provides a soft, breathable tactile boundary without synthetic dyes or bleach.',
      microSpec: 'Tightly woven 320 GSM organic weave preventing fiber migration.'
    },
    {
      id: 'tufting',
      name: 'Layer 2: Rosette Needle Tufting',
      subtitle: 'Traditional Artisan Tension Anchor',
      image: sideProfileImg,
      badge: 'Zero Clumping Guarantee',
      description: 'Hand-sewn tufting rosettes placed every 6 inches across the surface. Tension cords compress the silk cotton evenly, preventing lumping or shifting over decades.',
      microSpec: 'High-tensile cotton cord rosettes anchored by master artisans.'
    },
    {
      id: 'core',
      name: 'Layer 3: 100% Pure Ilavam Panchu Core',
      subtitle: 'Ceiba Pentandra Hollow Air-Lumen Matrix',
      image: naturalImg,
      badge: '80% Hollow Air Cavities',
      description: 'First-grade, wild-harvested Ceiba pentandra silk cotton fibers. The microscopic hollow core provides weightless buoyant spinal lift and natural temperature regulation.',
      microSpec: `Estimated ${calculatedWeightKg} kg of pure hand-sorted silk cotton filling.`
    },
    {
      id: 'border',
      name: 'Layer 4: Reinforced Perimeter Edge Cord',
      subtitle: 'Dual-Stitched Side Wall Binding',
      image: sideProfileImg,
      badge: 'Edge-Collapse Prevention',
      description: 'Heavy gauge corded border piping locks the mattress sidewalls, ensuring you can sit on the edge of the cot without sliding or edge sagging.',
      microSpec: 'Double-row perimeter lock-stitch with durable cotton binding tape.'
    }
  ];

  // Step definitions
  const steps = [
    { number: 1, title: isTamil ? 'மெத்தை மாதிரி' : 'Product & Model', label: isTamil ? 'மாதிரி' : 'Archetype' },
    { number: 2, title: isTamil ? 'கட்டில் அளவுகள்' : 'Size & Cot Dimensions', label: isTamil ? 'அளவுகள்' : 'Dimensions' },
    { number: 3, title: isTamil ? 'தடிமன் & உயரம்' : 'Thickness & Loft', label: isTamil ? 'தடிமன்' : 'Thickness' },
    { number: 4, title: isTamil ? 'துணி & உறுதித்தன்மை' : 'Casing & Firmness', label: isTamil ? 'உறை' : 'Casing' },
    { number: 5, title: isTamil ? 'விலை விபரம்' : 'Live Review & Quote', label: isTamil ? 'சுருக்கம்' : 'Summary' },
  ];

  const handleCategorySelect = (catId) => {
    setSelectedCategoryId(catId);
    const available = PRODUCTS.filter(p => catId === 'all' || p.category === catId);
    if (available.length > 0) {
      setSelectedProduct(available[0]);
    }
  };

  const handleReset = () => {
    setSelectedCategoryId('mattresses');
    setSelectedProduct(PRODUCTS[0]);
    setSelectedSizeId('queen');
    setCustomWidth(60);
    setCustomLength(78);
    setSelectedThickness(7);
    setSelectedFirmness('Medium Firm');
    setSelectedCasing('organic-kada');
    setCurrentStep(1);
    setPreviewTab('studio');
  };

  // Next / Prev step navigation
  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(prev => prev + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  return (
    <section id="configurator" className="py-24 bg-[#EAE2D6]/50 border-y border-[#D4C1A7]/50 relative overflow-hidden">
      
      {/* Decorative Ambient Radiance */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#D4C1A7]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#A68B65]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A68B65]" />
            <span>{t('home.configKicker')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#302820] tracking-tight">
            {t('home.configTitle')}
          </h2>
          <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
            {t('home.configSubtitle')}
          </p>
        </div>

        {/* Global Progress Stepper Bar (Responsive & Clickable) */}
        <div className="bg-white border border-[#D4C1A7] rounded-3xl p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-5 gap-2 sm:gap-4 items-center">
            {steps.map((st) => {
              const isActive = currentStep === st.number;
              const isPassed = currentStep > st.number;
              return (
                <button
                  key={st.number}
                  onClick={() => setCurrentStep(st.number)}
                  className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 rounded-2xl transition-all text-left ${
                    isActive 
                      ? 'bg-[#302820] text-[#F7F4EE] shadow-md scale-[1.02]' 
                      : isPassed 
                        ? 'bg-[#EAE2D6]/70 text-[#302820] hover:bg-[#EAE2D6]' 
                        : 'text-[#302820]/50 hover:text-[#302820] hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isActive 
                      ? 'bg-[#A68B65] text-[#242321]' 
                      : isPassed 
                        ? 'bg-[#302820] text-[#D4C1A7]' 
                        : 'bg-[#D4C1A7]/40 text-[#302820]'
                  }`}>
                    {isPassed ? <Check className="w-3.5 h-3.5" /> : st.number}
                  </div>
                  <div className="hidden sm:block min-w-0">
                    <p className={`text-[10px] uppercase font-bold tracking-wider leading-none ${isActive ? 'text-[#D4C1A7]' : 'opacity-60'}`}>
                      Step {st.number}
                    </p>
                    <p className="text-xs font-serif font-bold truncate mt-0.5">
                      {st.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Studio Grid: Controls & Interactive Live Preview Puzzle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Steps Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#F7F4EE] border border-[#D4C1A7] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
            
            {/* Step Header with Mobile Next/Back Controls */}
            <div className="flex items-center justify-between border-b border-[#D4C1A7]/40 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                  Step {currentStep} of 5
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#302820]">
                  {steps[currentStep - 1].title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="p-2 rounded-xl border border-[#D4C1A7] text-[#302820] hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-all"
                  title="Previous Step"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextStep}
                  disabled={currentStep === 5}
                  className="p-2 rounded-xl bg-[#302820] text-[#F7F4EE] hover:bg-[#A68B65] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
                  title="Next Step"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Step 1: Collection Category & Product Selection */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Category Pills */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]/75">
                    Filter by Collection:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedCategoryId === cat.id
                            ? 'bg-[#302820] text-[#D4C1A7] shadow-sm'
                            : 'bg-white border border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Cards Grid with Micro Thumbnails */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]/75">
                    Select Your Mattress Model:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                    {filteredProducts.map(prod => {
                      const isSelected = selectedProduct?.id === prod.id;
                      return (
                        <button
                          key={prod.id}
                          onClick={() => setSelectedProduct(prod)}
                          className={`p-3 rounded-2xl text-left border transition-all flex items-center gap-3 relative ${
                            isSelected
                              ? 'border-[#A68B65] bg-[#EAE2D6] ring-2 ring-[#A68B65]/40 shadow-sm'
                              : 'border-[#D4C1A7]/60 bg-white hover:border-[#A68B65] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <img 
                            src={prod.image} 
                            alt={prod.name} 
                            className="w-14 h-14 object-cover rounded-xl shrink-0 border border-[#D4C1A7]/60" 
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-serif text-sm font-bold text-[#302820] truncate">
                              {prod.name}
                            </p>
                            <span className="text-[10px] text-[#A68B65] font-semibold uppercase tracking-wider block">
                              {prod.subCategory}
                            </span>
                            <span className="text-[11px] text-[#302820]/70 font-medium">
                              {prod.basePrice ? `From ₹${prod.basePrice.toLocaleString('en-IN')}` : 'Custom Sizing'}
                            </span>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-[#A68B65] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Size & Dimension Blueprint */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]/75">
                    Choose Standard Cot Size:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {STANDARD_MATTRESS_SIZES.map(s => {
                      const isSelected = selectedSizeId === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setSelectedSizeId(s.id)}
                          className={`p-3.5 text-left rounded-2xl border transition-all ${
                            isSelected
                              ? 'bg-[#302820] text-[#F7F4EE] border-[#302820] shadow-md ring-2 ring-[#A68B65]/40'
                              : 'bg-white border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <p className="font-serif text-base font-bold">{s.name}</p>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#D4C1A7]" />}
                          </div>
                          <p className={`text-[11px] mt-1 ${isSelected ? 'text-[#D4C1A7]' : 'text-[#302820]/60'}`}>
                            {s.id === 'custom' ? 'Custom Tailored' : `${s.width}" × ${s.length}"`}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Dimensions Input Box */}
                {isCustomSize && (
                  <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#302820]">
                      <Ruler className="w-4 h-4 text-[#A68B65]" />
                      <span>Custom Furniture Dimensions (Inches):</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#302820]/70 uppercase">
                          Width (12" – 96")
                        </label>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="range"
                            min="24"
                            max="84"
                            value={customWidth}
                            onChange={(e) => setCustomWidth(Number(e.target.value))}
                            className="flex-1 accent-[#A68B65]"
                          />
                          <input
                            type="number"
                            value={customWidth}
                            onChange={(e) => setCustomWidth(Number(e.target.value))}
                            className="w-16 px-2 py-1.5 text-xs font-bold rounded-lg bg-white border border-[#D4C1A7] text-center"
                          />
                          <span className="text-xs font-medium text-[#302820]/60">in</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#302820]/70 uppercase">
                          Length (36" – 96")
                        </label>
                        <div className="flex items-center gap-2 mt-1">
                          <input
                            type="range"
                            min="36"
                            max="90"
                            value={customLength}
                            onChange={(e) => setCustomLength(Number(e.target.value))}
                            className="flex-1 accent-[#A68B65]"
                          />
                          <input
                            type="number"
                            value={customLength}
                            onChange={(e) => setCustomLength(Number(e.target.value))}
                            className="w-16 px-2 py-1.5 text-xs font-bold rounded-lg bg-white border border-[#D4C1A7] text-center"
                          />
                          <span className="text-xs font-medium text-[#302820]/60">in</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#302820]/70 italic">
                      💡 Have an antique teak swing or four-poster cot? You can also send photos directly via WhatsApp for free measurement verification.
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3: Thickness & Loft Height */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]/75">
                      Select Mattress Thickness:
                    </label>
                    <span className="text-xs font-bold text-[#A68B65]">
                      Current: {selectedThickness} Inches
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {(selectedProduct?.availableThicknesses || MATTRESS_THICKNESSES).map(thick => {
                      const isSelected = selectedThickness === thick;
                      return (
                        <button
                          key={thick}
                          onClick={() => setSelectedThickness(thick)}
                          className={`p-3.5 text-center rounded-2xl border transition-all ${
                            isSelected
                              ? 'bg-[#302820] text-[#F7F4EE] border-[#302820] shadow-md ring-2 ring-[#A68B65]/40'
                              : 'bg-white border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                          }`}
                        >
                          <span className="font-serif text-xl font-bold block">{thick}"</span>
                          <span className={`text-[10px] uppercase font-semibold ${isSelected ? 'text-[#D4C1A7]' : 'text-[#302820]/60'}`}>
                            {thick <= 5 ? 'Floor / Daybed' : thick <= 7 ? 'Classic Comfort' : 'Deep Luxury'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Calculated Metric Pill */}
                <div className="p-4 rounded-2xl bg-white border border-[#D4C1A7] grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#A68B65] block">
                      Estimated Silk Cotton Density
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#302820]">
                      ~{calculatedWeightKg} kg
                    </span>
                    <span className="text-[10px] text-[#302820]/60 block">Pure Ilavam Panchu</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#A68B65] block">
                      Expected Lifespan
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#302820]">
                      15–20 Years
                    </span>
                    <span className="text-[10px] text-[#302820]/60 block">With Generational Re-fluffing</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Casing Fabric & Firmness */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Fabric Choice */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]/75">
                    Select Outer Casing Upholstery:
                  </label>
                  <div className="space-y-2.5">
                    {casingOptions.map(casing => {
                      const isSelected = selectedCasing === casing.id;
                      return (
                        <button
                          key={casing.id}
                          onClick={() => setSelectedCasing(casing.id)}
                          className={`w-full p-3.5 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${
                            isSelected
                              ? 'border-[#A68B65] bg-[#EAE2D6] ring-2 ring-[#A68B65]/40 shadow-sm'
                              : 'border-[#D4C1A7]/60 bg-white hover:border-[#A68B65]'
                          }`}
                        >
                          <img 
                            src={casing.image} 
                            alt={casing.name} 
                            className="w-14 h-14 object-cover rounded-xl shrink-0 border border-[#D4C1A7]/60 mt-0.5" 
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-serif text-sm font-bold text-[#302820]">{casing.name}</p>
                              <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-[#A68B65] text-[#242321]">
                                {casing.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#302820]/70 mt-1 leading-relaxed">
                              {casing.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Firmness Selector */}
                <div className="space-y-2 pt-2 border-t border-[#D4C1A7]/40">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]/75">
                    Choose Firmness Preference:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {(selectedProduct?.firmnessOptions || FIRMNESS_LEVELS).map(firm => {
                      const isSelected = selectedFirmness === firm;
                      return (
                        <button
                          key={firm}
                          onClick={() => setSelectedFirmness(firm)}
                          className={`py-2 px-1 text-center text-xs rounded-xl font-medium transition-all ${
                            isSelected
                              ? 'bg-[#302820] text-[#D4C1A7] shadow-sm font-bold'
                              : 'bg-white border border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                          }`}
                        >
                          {firm}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Summary & Direct Order / Enquiry */}
            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-white border border-[#D4C1A7] space-y-4 shadow-xs">
                  <h4 className="font-serif text-lg font-bold text-[#302820] border-b border-[#D4C1A7]/40 pb-2">
                    Bespoke Specification Summary
                  </h4>

                  <div className="grid grid-cols-2 gap-3 text-xs text-[#302820]">
                    <div>
                      <span className="text-[#302820]/60 block text-[10px] uppercase font-bold">Model</span>
                      <p className="font-semibold text-sm font-serif">{selectedProduct?.name}</p>
                    </div>
                    <div>
                      <span className="text-[#302820]/60 block text-[10px] uppercase font-bold">Cot Footprint</span>
                      <p className="font-semibold">{widthInches}" × {lengthInches}" ({selectedSizeId})</p>
                    </div>
                    <div>
                      <span className="text-[#302820]/60 block text-[10px] uppercase font-bold">Thickness</span>
                      <p className="font-semibold">{selectedThickness} Inches</p>
                    </div>
                    <div>
                      <span className="text-[#302820]/60 block text-[10px] uppercase font-bold">Firmness</span>
                      <p className="font-semibold">{selectedFirmness}</p>
                    </div>
                    <div>
                      <span className="text-[#302820]/60 block text-[10px] uppercase font-bold">Outer Casing</span>
                      <p className="font-semibold">{casingOptions.find(c => c.id === selectedCasing)?.name}</p>
                    </div>
                    <div>
                      <span className="text-[#302820]/60 block text-[10px] uppercase font-bold">Pure Fiber Weight</span>
                      <p className="font-semibold text-emerald-800">~{calculatedWeightKg} kg Ceiba Cotton</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#302820] text-[#F7F4EE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4C1A7] block font-bold">
                      Direct Workshop Pricing
                    </span>
                    <span className="font-serif text-3xl font-bold text-white">
                      {priceInfo?.text}
                    </span>
                    <span className="text-[10px] text-white/60 block mt-0.5">
                      ✓ Free Doorstep Packaging in Tamil Nadu
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    48–72h Dispatch
                  </span>
                </div>
              </motion.div>
            )}

            {/* Stepper Navigation Buttons Bottom */}
            <div className="pt-4 border-t border-[#D4C1A7]/40 flex items-center justify-between gap-4">
              <button
                onClick={handleReset}
                className="text-xs text-[#302820]/60 hover:text-[#302820] flex items-center gap-1.5 font-medium transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Configuration</span>
              </button>

              <div className="flex items-center gap-2">
                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-4 py-2.5 rounded-full border border-[#D4C1A7] text-xs font-semibold text-[#302820] hover:bg-white transition-all"
                  >
                    Back
                  </button>
                )}

                {currentStep < 5 ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-2.5 rounded-full bg-[#302820] text-[#F7F4EE] hover:bg-[#A68B65] text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Next: {steps[currentStep].label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenEnquiry(selectedProduct, {
                      sizeId: selectedSizeId,
                      customWidth: widthInches,
                      customLength: lengthInches,
                      thickness: selectedThickness,
                      firmness: selectedFirmness,
                      casing: selectedCasing
                    })}
                    className="px-6 py-2.5 rounded-full bg-[#A68B65] text-[#242321] hover:bg-[#D4C1A7] text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Proceed to Enquiry</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Preview Studio ("Puzzle & Showcase") (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            
            <div className="bg-[#1F1E1C] text-[#F7F4EE] border border-[#A68B65]/35 rounded-3xl p-6 shadow-2xl space-y-5 backdrop-blur-xl">
              
              {/* Top Studio Bar & Tab Switcher */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4C1A7] font-bold">
                    Live Visual Studio
                  </span>
                </div>

                {/* View Tabs */}
                <div className="flex bg-white/10 p-1 rounded-xl text-[10px] font-semibold">
                  <button
                    onClick={() => setPreviewTab('studio')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      previewTab === 'studio' ? 'bg-[#A68B65] text-[#1F1E1C]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Studio
                  </button>
                  <button
                    onClick={() => setPreviewTab('puzzle')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      previewTab === 'puzzle' ? 'bg-[#A68B65] text-[#1F1E1C]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    🧩 Puzzle
                  </button>
                  <button
                    onClick={() => setPreviewTab('blueprint')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      previewTab === 'blueprint' ? 'bg-[#A68B65] text-[#1F1E1C]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    📐 Blueprint
                  </button>
                  <button
                    onClick={() => setPreviewTab('texture')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      previewTab === 'texture' ? 'bg-[#A68B65] text-[#1F1E1C]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Weave
                  </button>
                </div>
              </div>

              {/* View 1: Studio Perspective Photo View */}
              {previewTab === 'studio' && (
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden h-60 sm:h-64 border border-white/10 group">
                    <img 
                      src={selectedProduct?.image} 
                      alt={selectedProduct?.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Gradient overlay with live dimensions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <p className="font-serif text-lg font-bold text-white leading-tight">
                        {selectedProduct?.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-[#D4C1A7]">
                        <span>{widthInches}" × {lengthInches}"</span>
                        <span>•</span>
                        <span>{selectedThickness}" Height</span>
                        <span>•</span>
                        <span>{selectedFirmness}</span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  {selectedProduct?.gallery && (
                    <div className="flex gap-2">
                      {selectedProduct.gallery.map((gImg, idx) => (
                        <div key={idx} className="w-14 h-14 rounded-xl overflow-hidden border border-white/20 opacity-80 hover:opacity-100 transition-opacity">
                          <img src={gImg} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* View 2: Anatomical Layer Puzzle Inspector */}
              {previewTab === 'puzzle' && (
                <div className="space-y-3">
                  <p className="text-[11px] text-[#D4C1A7] font-medium">
                    Tap a layer to inspect the internal silk cotton construction:
                  </p>

                  <div className="space-y-2">
                    {puzzleLayers.map((layer, idx) => {
                      const isSelected = selectedLayer === idx;
                      return (
                        <button
                          key={layer.id}
                          onClick={() => setSelectedLayer(idx)}
                          className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-white/15 border-[#A68B65] text-white shadow-sm'
                              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-lg bg-[#A68B65] text-[#1F1E1C] flex items-center justify-center font-bold text-[10px]">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="text-xs font-serif font-bold text-[#F7F4EE]">{layer.name}</p>
                              <p className="text-[10px] text-white/60">{layer.subtitle}</p>
                            </div>
                          </div>
                          {isSelected && <ChevronRight className="w-4 h-4 text-[#A68B65]" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Puzzle Piece Breakdown Card */}
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-[#A68B65]/40 flex gap-3 items-start animate-fadeIn">
                    <img 
                      src={puzzleLayers[selectedLayer].image} 
                      alt="" 
                      className="w-16 h-16 object-cover rounded-xl shrink-0 border border-white/20" 
                    />
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase font-bold text-[#A68B65]">
                          {puzzleLayers[selectedLayer].badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/90 leading-relaxed font-sans">
                        {puzzleLayers[selectedLayer].description}
                      </p>
                      <p className="text-[10px] text-emerald-400 font-medium">
                        ✓ {puzzleLayers[selectedLayer].microSpec}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* View 3: Technical Blueprint Schematic */}
              {previewTab === 'blueprint' && (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-black/40 border border-[#A68B65]/40 text-center relative overflow-hidden">
                    {/* SVG Blueprint Illustration */}
                    <svg viewBox="0 0 300 160" className="w-full h-36 mx-auto stroke-[#D4C1A7] fill-none">
                      {/* Cot Base Outline */}
                      <rect x="50" y="30" width="200" height="90" rx="10" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                      
                      {/* Mattress Body 3D Projection */}
                      <polygon points="50,45 250,45 240,110 40,110" fill="rgba(166,139,101,0.15)" stroke="#D4C1A7" strokeWidth="2" />
                      <polygon points="40,110 240,110 240,125 40,125" fill="rgba(166,139,101,0.25)" stroke="#D4C1A7" strokeWidth="1.5" />
                      
                      {/* Tufting Dots on Surface */}
                      <circle cx="90" cy="75" r="3" fill="#A68B65" />
                      <circle cx="145" cy="75" r="3" fill="#A68B65" />
                      <circle cx="200" cy="75" r="3" fill="#A68B65" />
                      <circle cx="70" cy="95" r="3" fill="#A68B65" />
                      <circle cx="145" cy="95" r="3" fill="#A68B65" />
                      <circle cx="220" cy="95" r="3" fill="#A68B65" />

                      {/* Dimension Dimension Markers */}
                      <text x="145" y="24" textAnchor="middle" fill="#D4C1A7" fontSize="11" fontFamily="sans-serif">
                        Length: {lengthInches}" ({Math.round(lengthInches * 2.54)} cm)
                      </text>
                      <text x="15" y="80" textAnchor="middle" fill="#D4C1A7" fontSize="10" fontFamily="sans-serif" transform="rotate(-90 15,80)">
                        Width: {widthInches}"
                      </text>
                      <text x="270" y="120" textAnchor="middle" fill="#D4C1A7" fontSize="10" fontFamily="sans-serif">
                        ↕ {selectedThickness}"
                      </text>
                    </svg>

                    <div className="pt-2 flex items-center justify-between text-xs text-[#D4C1A7]">
                      <span>Footprint: {widthInches}" × {lengthInches}"</span>
                      <span>Density: ~{calculatedWeightKg} kg</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-white/70 text-center font-sans">
                    Hand-crafted to quarter-inch accuracy for standard teak cots, swings, and diwans.
                  </p>
                </div>
              )}

              {/* View 4: Macro Weave Texture */}
              {previewTab === 'texture' && (
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden h-56 border border-white/20">
                    <img 
                      src={casingOptions.find(c => c.id === selectedCasing)?.image || naturalImg} 
                      alt="Macro Fabric Texture" 
                      className="w-full h-full object-cover scale-125" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <span className="text-[10px] uppercase font-bold text-[#A68B65]">Macro Weave Detail</span>
                      <p className="font-serif text-base font-bold text-white">
                        {casingOptions.find(c => c.id === selectedCasing)?.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed font-sans">
                    {casingOptions.find(c => c.id === selectedCasing)?.desc}
                  </p>
                </div>
              )}

              {/* Price & Primary CTA Bottom Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-[#A68B65]/40 space-y-2 text-center">
                <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold block">
                  {priceInfo?.isCustom 
                    ? (isTamil ? 'தனிப்பயன் விலை விபரம்' : 'Custom Quote Requested') 
                    : (isTamil ? 'பட்டறை நேரடி உற்பத்தி விலை' : 'Configured Direct Workshop Price')}
                </span>
                <div className="font-serif text-3xl font-bold text-[#D4C1A7]">
                  {priceInfo?.text}
                </div>
                <p className="text-[10px] text-white/50">
                  {isTamil ? 'தூய இலவம் பஞ்சு, கையால் தைக்கப்பட்ட டஃப்டிங் மற்றும் தமிழகம் முழுவதும் நேரடி டோர் டெலிவரி' : 'Includes pure silk cotton, tufting, and door delivery in Tamil Nadu'}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => onOpenEnquiry(selectedProduct, {
                      sizeId: selectedSizeId,
                      customWidth: widthInches,
                      customLength: lengthInches,
                      thickness: selectedThickness,
                      firmness: selectedFirmness,
                      casing: selectedCasing
                    })}
                    className="w-full py-3 rounded-xl bg-[#A68B65] hover:bg-[#D4C1A7] text-[#1F1E1C] font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isTamil ? 'உடனடியாக ஆர்டர் / விசாரிக்க' : 'Order / Enquire Now'}</span>
                  </button>

                  <a
                    href={`${siteConfig.socialLinks.whatsapp}?text=${encodeURIComponent(
                      isTamil
                        ? `வணக்கம் JKR Mattress, நான் ${(selectedProduct.nameTa || selectedProduct.name)} (${widthInches}x${lengthInches} அங்குலம், ${selectedThickness} அங்குல தடிமன், ${selectedFirmness}) மெத்தையை தெரிவு செய்துள்ளேன். இதன் தயாரிப்பு மற்றும் டெலிவரி விபரங்களை உறுதிசெய்யவும்.`
                        : `Hello JKR Mattress, I configured ${selectedProduct.name} (${widthInches}x${lengthInches} inches, ${selectedThickness} inch thickness, ${selectedFirmness}). Please confirm order and dispatch.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-sans font-medium text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isTamil ? 'வாட்ஸ்அப்பில் உடனடியாக பேச' : 'Instant WhatsApp Consultation'}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
