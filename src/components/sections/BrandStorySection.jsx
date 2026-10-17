import React from 'react';
import naturalImg from '../../assets/images/natural_material.png';
import heroImg from '../../assets/images/hero_bedroom.png';
import { Feather, HeartHandshake, Sparkles } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F4EE] text-[#302820] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Grid with staggered images and elegant copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Image Collage (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#D4C1A7]/40 aspect-[4/3]">
              <img 
                src={heroImg} 
                alt="Personalized Comfort Mattress" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlapping Detail Card */}
            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 z-20 w-3/5 sm:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F7F4EE]">
              <img 
                src={naturalImg} 
                alt="Pure Ilavam Panchu Material Detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                <span className="text-[11px] font-medium text-[#D4C1A7] tracking-wider uppercase">
                  Natural Panchu Texture
                </span>
              </div>
            </div>

            {/* Decorative Gold Badge */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold shadow-lg">
              <Sparkles className="w-4 h-4 text-[#A68B65]" />
              <span>Tailored Ergonomics</span>
            </div>
          </div>

          {/* Right Column: Copy Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#A68B65]">
              <Feather className="w-4 h-4" />
              <span>Our Sleep Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-[#302820]">
              Comfort Is <span className="italic font-light text-[#A68B65]">Personal.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#302820]/80 font-light leading-relaxed">
              No two sleepers are identical. True rest happens when a mattress adapts seamlessly to your body weight, sleep posture, and room climate.
            </p>

            <p className="text-sm text-[#302820]/70 font-light leading-relaxed">
              At JKR Mattress, we build every sleeping surface with intention—combining time-tested indigenous natural materials like pure Ilavam Panchu (இலவம் பஞ்சு) with precise custom size tailoring for homes across Tamil Nadu.
            </p>

            {/* Highlights Grid */}
            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#D4C1A7]/40">
              <div className="space-y-1">
                <h4 className="font-serif text-2xl font-semibold text-[#302820]">100% Pure</h4>
                <p className="text-xs text-[#302820]/70">Silk Cotton Natural Filling</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-2xl font-semibold text-[#302820]">Bespoke</h4>
                <p className="text-xs text-[#302820]/70">Made to Custom Dimensions</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
