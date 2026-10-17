import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Feather, Sun, Ruler, Sparkles, ShieldCheck } from 'lucide-react';

export default function TrustBarSection() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Feather,
      title: t('trustBar.pureTitle'),
      desc: t('trustBar.pureDesc'),
    },
    {
      icon: Sun,
      title: t('trustBar.coolingTitle'),
      desc: t('trustBar.coolingDesc'),
    },
    {
      icon: Ruler,
      title: t('trustBar.customTitle'),
      desc: t('trustBar.customDesc'),
    },
    {
      icon: Sparkles,
      title: t('trustBar.directTitle'),
      desc: t('trustBar.directDesc'),
    },
    {
      icon: ShieldCheck,
      title: t('trustBar.healthyTitle'),
      desc: t('trustBar.healthyDesc'),
    },
  ];

  return (
    <section className="bg-[#2A2520] text-[#F7F4EE] border-b border-[#A68B65]/30 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {trustItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-start gap-3.5 pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}
              >
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4C1A7] shrink-0">
                  <IconComp className="w-5 h-5 text-[#A68B65]" />
                </div>
                <div className="space-y-1 min-w-0">
                  <h4 className="font-serif text-base font-semibold text-[#F7F4EE] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
