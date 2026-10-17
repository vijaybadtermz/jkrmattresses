import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../products/ProductCard';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, SlidersHorizontal } from 'lucide-react';

export default function FeaturedProductsSection({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: t('home.filterAll') },
    { id: 'mattresses', label: t('home.filterMattresses') },
    { id: 'pillows', label: t('home.filterPillows') },
    { id: 'foldable', label: t('home.filterFoldable') },
    { id: 'baby-nursery', label: t('home.filterBaby') },
    { id: 'custom', label: t('home.filterCustom') },
  ];

  // Select core customer-popular products
  const featuredList = PRODUCTS.filter(p => p.isFeatured);

  const displayedProducts = activeTab === 'all' 
    ? featuredList.slice(0, 6) 
    : PRODUCTS.filter(p => p.category === activeTab).slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EE] text-[#302820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D4C1A7]/40 pb-6">
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D6] text-[#8C6D45] text-xs font-semibold ${
              isTamil ? 'tracking-normal' : 'uppercase tracking-widest'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{t('home.featuredKicker')}</span>
            </div>
            <h2 className={`font-serif font-semibold tracking-tight text-[#302820] ${
              isTamil ? 'text-2xl sm:text-4xl leading-snug' : 'text-3xl sm:text-5xl'
            }`}>
              {t('home.featuredTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#302820]/75 font-light max-w-2xl">
              {t('home.featuredSubtitle')}
            </p>
          </div>

          <Link
            to={activeTab === 'pillows' ? '/pillows' : activeTab === 'foldable' ? '/foldable' : activeTab === 'baby-nursery' ? '/baby-nursery' : activeTab === 'custom' ? '/custom' : '/mattresses'}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#302820] hover:text-[#A68B65] transition-colors py-2 group shrink-0"
          >
            <span>{activeTab === 'all' ? t('nav.fullCatalogue') : `${t('common.exploreProducts')} (${PRODUCTS.filter(p => p.category === activeTab).length})`}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isTamil ? 'text-[11px] sm:text-xs tracking-normal' : 'text-xs uppercase tracking-wider'
              } ${
                activeTab === tab.id
                  ? 'bg-[#302820] text-[#F7F4EE] shadow-md'
                  : 'bg-[#EAE2D6]/60 text-[#302820]/80 hover:bg-[#EAE2D6] hover:text-[#302820]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenEnquiry={onOpenEnquiry} 
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EAE2D6]/70 border border-[#D4C1A7] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#302820]">
              {isTamil ? 'உங்களுக்கு தேவையான அளவு கடைகளில் கிடைக்கவில்லையா?' : 'Looking for an exact bespoke cot dimension?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
              {isTamil 
                ? 'செட்டிநாடு தேக்கு கட்டில், திவான் அல்லது ஊஞ்சல் மெத்தைகளுக்கு தனிப்பயன் அளவுகள் செய்து தருகிறோம்.' 
                : 'We hand-tailor custom lengths, widths, and thickness down to the quarter inch.'}
            </p>
          </div>
          <Link
            to="/custom"
            className="px-6 py-3 rounded-full bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            {t('custom.requestBtn')}
          </Link>
        </div>

      </div>
    </section>
  );
}
