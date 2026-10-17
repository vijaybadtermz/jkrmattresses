import React from 'react';
import naturalImg from '../../assets/images/natural_material.png';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, CheckCircle2, XCircle, Sun, Wind, ShieldCheck, Clock } from 'lucide-react';

export default function WhyPanchuSection() {
  const { t, isTamil } = useLanguage();

  const comparisons = [
    {
      title: t('home.benefit1Title'),
      icon: Wind,
      panchu: t('home.benefit1Panchu'),
      foam: t('home.benefit1Foam'),
    },
    {
      title: t('home.benefit2Title'),
      icon: ShieldCheck,
      panchu: t('home.benefit2Panchu'),
      foam: t('home.benefit2Foam'),
    },
    {
      title: t('home.benefit3Title'),
      icon: Sparkles,
      panchu: t('home.benefit3Panchu'),
      foam: t('home.benefit3Foam'),
    },
    {
      title: t('home.benefit4Title'),
      icon: Clock,
      panchu: t('home.benefit4Panchu'),
      foam: t('home.benefit4Foam'),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#302820] text-[#F7F4EE] relative overflow-hidden">
      
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A68B65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4C1A7] text-xs uppercase tracking-widest font-semibold border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
            <span>{t('home.whyPanchuKicker')}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#F7F4EE]">
            {t('home.whyPanchuTitle')}
          </h2>

          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            {t('home.whyPanchuSubtitle')}
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Comparison Cards Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Table Header Labels */}
            <div className="grid grid-cols-2 gap-4 pb-2 border-b border-white/10 text-xs font-semibold uppercase tracking-wider">
              <span className="text-[#D4C1A7] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('home.panchuTitle')}
              </span>
              <span className="text-white/60 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-400" />
                {t('home.foamTitle')}
              </span>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((row, idx) => {
              const IconComp = row.icon;
              return (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A68B65]/40 transition-colors space-y-3">
                  <div className="flex items-center gap-2 text-[#D4C1A7]">
                    <IconComp className="w-4 h-4 text-[#A68B65]" />
                    <h4 className="font-serif text-base font-semibold text-[#F7F4EE]">
                      {row.title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light leading-relaxed">
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-white/90">
                      <span className="text-emerald-300 font-semibold block mb-1">
                        ✓ {isTamil ? 'இலவம் பஞ்சு நன்மை' : 'Natural Advantage'}
                      </span>
                      {row.panchu}
                    </div>

                    <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-white/70">
                      <span className="text-rose-300 font-semibold block mb-1">
                        ✕ {isTamil ? 'ஸ்பாஞ்ச் குறைபாடு' : 'Synthetic Drawback'}
                      </span>
                      {row.foam}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right Column: Visual Spotlight on Authentic Material (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#A68B65]/40 shadow-2xl aspect-[4/5] group">
              <img 
                src={naturalImg} 
                alt="Pure Ilavam Panchu Botanical Fiber" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#D4C1A7] font-semibold">
                  {isTamil ? 'இயற்கை இழை நேரடி பார்வை' : 'Native Botanical Fiber'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  100% Pure Ilavam Panchu
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  {isTamil 
                    ? 'கொட்டைகள் நீக்கப்பட்டு, பாரம்பரிய முறையில் வெயிலில் உலர்த்தப்பட்டு, அடர்த்தியாக கைத்தையல் செய்யப்பட்ட மெத்தை.'
                    : 'Sun-dried, de-seeded Ceiba pentandra fibers hand-tufted with reinforced double borders for decades of restful sleep.'}
                </p>
              </div>
            </div>

            {/* Quick Material Guarantee Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-[#D4C1A7]">
              <span>{t('common.verifiedCraft')}</span>
              <span className="font-semibold text-emerald-400">✓ 0% Toxic Off-Gassing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
