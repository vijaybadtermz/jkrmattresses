import React from 'react';
import naturalImg from '../../assets/images/natural_material.png';
import { Ruler, Scissors, Sparkles, Check } from 'lucide-react';

export default function CraftsmanshipSection({ onOpenEnquiry }) {
  return (
    <section className="py-24 bg-[#EAE2D6]/40 border-y border-[#D4C1A7]/40 text-[#302820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#302820] text-[#F7F4EE] rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest border border-white/20">
                <Scissors className="w-3.5 h-3.5 text-[#A68B65]" />
                <span>Made-To-Order Precision</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#F7F4EE]">
                Made Around Your Comfort.
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Have an heirloom teak wood cot, a non-standard bed frame, or specific thickness preferences? We handcraft custom dimensions to your exact specifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#A68B65]/20 text-[#D4C1A7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Width & Length in Inches or CM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#A68B65]/20 text-[#D4C1A7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Custom thickness from 4" to 10"</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#A68B65]/20 text-[#D4C1A7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Special corner radius or notch cuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#A68B65]/20 text-[#D4C1A7] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Fast WhatsApp quotation service</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenEnquiry(null, { sizeId: 'custom' })}
                  className="px-8 py-4 rounded-full bg-[#A68B65] hover:bg-[#D4C1A7] text-[#242321] font-semibold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2"
                >
                  <Ruler className="w-4 h-4" />
                  <span>Request Custom Dimensions Quote</span>
                </button>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#A68B65]/40 shadow-xl aspect-square">
                <img 
                  src={naturalImg} 
                  alt="Custom Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
