import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero_bedroom.png';
import coolingImg from '../../assets/images/cooling_mattress.png';
import foldableImg from '../../assets/images/foldable_mattress.png';
import naturalImg from '../../assets/images/natural_material.png';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function SignatureCollectionsSection({ onOpenEnquiry }) {
  const collections = [
    {
      id: 'natural',
      title: 'Natural Collection',
      tagline: '100% Pure Ilavam Panchu (இலவம் பஞ்சு)',
      description: 'Indigenous silk cotton mattresses offering weightless spinal support and natural thermal regulation.',
      image: heroImg,
      link: '/mattresses',
      badge: 'Signature Pure',
      layout: 'left' // text on left, image on right
    },
    {
      id: 'cooling',
      title: 'Cooling Collection',
      tagline: 'Breeze Touch Thermal Tech',
      description: 'Cool-to-touch knit matrix paired with silk cotton, engineered for humid coastal nights.',
      image: coolingImg,
      link: '/mattresses',
      badge: 'Climate Comfort',
      layout: 'right' // image on left, text on right
    },
    {
      id: 'foldable',
      title: 'Foldable Collection',
      tagline: 'Space-Saving Tri-Fold Versatility',
      description: 'Transforms seamlessly from a high-density sleeping bed to an elegant lounge daybed.',
      image: foldableImg,
      link: '/foldable',
      badge: 'Compact Living',
      layout: 'left'
    },
    {
      id: 'custom',
      title: 'Custom Comfort',
      tagline: 'Made to Exact Dimensions',
      description: 'Hand-tailored for antique teak beds, bay window seats, sofa inserts, and unique room architecture.',
      image: naturalImg,
      link: '/custom',
      badge: 'Bespoke Craft',
      layout: 'right'
    }
  ];

  return (
    <section className="py-24 bg-[#EAE2D6]/30 text-[#302820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68B65]">
            Handcrafted Offerings
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight">
            Signature Collections
          </h2>
          <p className="text-sm sm:text-base text-[#302820]/70 font-light">
            Four distinct comfort philosophies engineered for your restful sanctuary.
          </p>
        </div>

        {/* Collection Chapters Stack */}
        <div className="space-y-16">
          {collections.map((col, idx) => (
            <div 
              key={col.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-[#F7F4EE] border border-[#D4C1A7]/60 shadow-lg ${
                col.layout === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Box (7 cols) */}
              <div className={`lg:col-span-7 relative group overflow-hidden rounded-2xl aspect-[16/10] ${
                col.layout === 'right' ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#302820]/80 text-[#D4C1A7] text-xs font-semibold backdrop-blur-md">
                  {col.badge}
                </div>
              </div>

              {/* Text Copy Box (5 cols) */}
              <div className={`lg:col-span-5 space-y-5 ${
                col.layout === 'right' ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#A68B65]">
                  Chapter 0{idx + 1}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#302820]">
                  {col.title}
                </h3>

                <p className="text-sm font-medium text-[#A68B65]">
                  {col.tagline}
                </p>

                <p className="text-sm text-[#302820]/75 font-light leading-relaxed">
                  {col.description}
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    to={col.link}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#302820] hover:text-[#A68B65] transition-colors group"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => onOpenEnquiry(null)}
                    className="px-4 py-2 rounded-full border border-[#D4C1A7] text-xs font-medium text-[#302820] hover:bg-[#302820] hover:text-[#F7F4EE] transition-all"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
