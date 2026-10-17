import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero_bedroom.png';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function ClosingCinematicSection({ onOpenEnquiry }) {
  return (
    <section className="relative py-32 bg-[#242321] text-[#F7F4EE] overflow-hidden">
      
      {/* Background Photography */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Serene Bedroom Rest" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-[#242321]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D4C1A7] text-xs uppercase tracking-widest border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
          <span>Begin Your Restful Journey</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#F7F4EE]">
          Make Room for <span className="italic font-light text-[#D4C1A7]">Better Rest.</span>
        </h2>

        <p className="text-base sm:text-xl text-white/80 font-light max-w-xl mx-auto leading-relaxed">
          Find the comfort that feels right for you—crafted naturally and delivered to your doorstep in Tamil Nadu.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/mattresses"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#A68B65] text-[#242321] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4C1A7] transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => onOpenEnquiry(null)}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire with JKR Mattress</span>
          </button>
        </div>

      </div>
    </section>
  );
}
