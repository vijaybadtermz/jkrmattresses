import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getProductPrice } from '../../data/products';
import { useLanguage } from '../../context/LanguageContext';

export default function ProductCard({ product, onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const priceInfo = getProductPrice(product);

  const displayName = (isTamil && product.nameTa) ? product.nameTa : product.name;
  const displayTagline = (isTamil && product.taglineTa) ? product.taglineTa : (product.tagline || product.description);

  const getFirmnessLabel = (firm) => {
    if (!isTamil) return firm;
    switch (firm) {
      case 'Soft': return 'மென்மையானது';
      case 'Medium Soft': return 'மிதமான மென்மை';
      case 'Medium': return 'நடுத்தரமானது';
      case 'Medium Firm': return 'நடுத்தர உறுதி';
      case 'Firm': return 'உறுதியானது';
      case 'Gentle Support': return 'மென்மையான தாங்குதல்';
      default: return firm;
    }
  };

  return (
    <div className="bg-[#FAF7F2] border border-[#D4C1A7]/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Image Container with Hover Scale */}
      <div className="relative h-60 sm:h-64 overflow-hidden bg-white">
        <img 
          src={product.image} 
          alt={displayName} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#302820]/90 text-[#D4C1A7] text-[10.5px] font-semibold tracking-wider uppercase backdrop-blur-md">
          {product.badge || product.subCategory}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className={`uppercase font-semibold text-[#A68B65] ${isTamil ? 'text-[9.5px]' : 'text-[10px] tracking-widest'}`}>
            {product.material}
          </span>

          <Link to={`/product/${product.id}`} className="block">
            <h3 className={`font-serif product-card-title ${isTamil ? 'text-base sm:text-lg font-semibold leading-snug min-h-[2.8rem]' : 'text-xl sm:text-2xl font-bold leading-snug'} text-[#302820] group-hover:text-[#8C6D45] transition-colors line-clamp-2`}>
              {displayName}
            </h3>
          </Link>

          <p className={`text-[#302820]/75 font-light line-clamp-2 leading-relaxed ${isTamil ? 'text-[11.5px]' : 'text-xs'}`}>
            {displayTagline}
          </p>
        </div>

        {/* Firmness Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.firmnessOptions?.map(firm => (
            <span key={firm} className="px-2.5 py-0.5 rounded-md bg-[#EAE2D6] text-[10px] font-medium text-[#302820]/80">
              {getFirmnessLabel(firm)}
            </span>
          ))}
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 border-t border-[#D4C1A7]/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#302820]/60 block font-medium">
              {priceInfo?.isCustom 
                ? (isTamil ? 'தனிப்பயன் மதிப்பீடு' : 'Custom Quote') 
                : (isTamil ? 'தொடக்க விலை' : 'Starting Price')}
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-[#A68B65]">
              {priceInfo?.text}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/product/${product.id}`}
              className="p-2 sm:p-2.5 rounded-full border border-[#D4C1A7] text-[#302820] hover:bg-[#EAE2D6] transition-colors"
              title={isTamil ? 'விபரம் காண்க' : 'View Details'}
              aria-label={isTamil ? `${displayName} விபரம் காண்க` : `View details for ${displayName}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => onOpenEnquiry(product)}
              className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4C1A7]" />
              <span>{t('common.quickQuote')}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
