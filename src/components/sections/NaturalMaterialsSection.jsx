import React from 'react';
import naturalImg from '../../assets/images/natural_material.png';
import { Leaf, Sun, Shield, Sparkles, Wind } from 'lucide-react';

export default function NaturalMaterialsSection() {
  const properties = [
    {
      icon: Wind,
      title: 'Natural Temperature Control',
      description: 'Ilavam Panchu fibers naturally breathe and regulate body warmth, keeping you cool through tropical nights.'
    },
    {
      icon: Leaf,
      title: 'Botanical Silk Cotton',
      description: 'Harvested from native Ceiba tree pods. Soft, light, resilient, and inherently resistant to dust accumulation.'
    },
    {
      icon: Shield,
      title: 'Zero Chemical Additives',
      description: 'Free from harsh artificial off-gassing, toxic foams, and volatile synthetic chemicals.'
    },
    {
      icon: Sun,
      title: 'Ergonomic Resilience',
      description: 'Hand-tufted filing maintains weightless spinal support without dipping over years of natural use.'
    }
  ];

  return (
    <section className="py-24 bg-[#302820] text-[#F7F4EE] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#A68B65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy & Material Properties (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>Authentic Materials</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#F7F4EE]">
                Closer to Nature.<br />
                <span className="italic font-light text-[#D4C1A7]">Closer to Comfort.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Central to the JKR Mattress heritage is <strong className="text-[#D4C1A7]">Ilavam Panchu (இலவம் பஞ்சு)</strong>—a pure botanical silk cotton that has provided deep, restorative rest across South India for generations.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {properties.map((prop, idx) => {
                const IconComp = prop.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-[#A68B65]/50 transition-colors">
                    <IconComp className="w-6 h-6 text-[#A68B65]" />
                    <h4 className="font-serif text-lg font-semibold text-[#D4C1A7]">{prop.title}</h4>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{prop.description}</p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side: Macro Texture Photography Spotlight (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#A68B65]/40 shadow-2xl aspect-square">
              <img 
                src={naturalImg} 
                alt="Pure Ilavam Panchu Fiber Detail" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-[#D4C1A7] font-semibold">
                  Raw Fiber Texture Spotlight
                </span>
                <p className="font-serif text-2xl font-medium text-white mt-1">
                  100% Pure Ilavam Panchu (இலவம் பஞ்சு)
                </p>
                <p className="text-xs text-white/70 mt-1 font-light">
                  Hand-inspected, cleaned, and tufted into luxury ticking casing.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
