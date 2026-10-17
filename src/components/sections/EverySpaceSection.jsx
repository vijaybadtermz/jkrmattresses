import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero_bedroom.png';
import foldableImg from '../../assets/images/foldable_mattress.png';
import babyImg from '../../assets/images/baby_nursery.png';
import naturalImg from '../../assets/images/natural_material.png';
import { ArrowUpRight } from 'lucide-react';

export default function EverySpaceSection() {
  const spaces = [
    {
      title: 'Master Bedroom',
      subtitle: 'King & Queen Luxury Comfort',
      image: heroImg,
      link: '/mattresses',
      span: 'sm:col-span-2 lg:col-span-8'
    },
    {
      title: 'Baby & Nursery',
      subtitle: 'Pediatric Firm Natural Cot Beds',
      image: babyImg,
      link: '/baby-nursery',
      span: 'sm:col-span-1 lg:col-span-4'
    },
    {
      title: 'Foldable & Daybeds',
      subtitle: 'Tri-Fold Compact Space Savers',
      image: foldableImg,
      link: '/foldable',
      span: 'sm:col-span-1 lg:col-span-5'
    },
    {
      title: 'Custom Furniture Inserts',
      subtitle: 'Teak Beds, Swings & Niche Cushions',
      image: naturalImg,
      link: '/custom',
      span: 'sm:col-span-2 lg:col-span-7'
    }
  ];

  return (
    <section className="py-24 bg-[#F7F4EE] text-[#302820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#D4C1A7]/40 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A68B65]">
              Architectural Versatility
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight">
              Made for Every Space
            </h2>
          </div>
          <p className="text-sm text-[#302820]/70 font-light max-w-md">
            From expansive master suites to nursery cribs and custom teak cots, find tailored comfort for every corner of your home.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {spaces.map((sp, idx) => (
            <Link
              key={idx}
              to={sp.link}
              className={`relative rounded-3xl overflow-hidden shadow-lg group h-72 sm:h-80 ${sp.span}`}
            >
              <img 
                src={sp.image} 
                alt={sp.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D4C1A7] font-semibold">
                      {sp.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
                      {sp.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#A68B65] group-hover:text-[#242321] transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
