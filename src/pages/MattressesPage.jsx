import React, { useState, useMemo, useEffect } from 'react';
import PageWrapper from '../components/common/PageWrapper';
import { PRODUCTS, MATTRESS_COMPARISON, MATTRESS_CARE_STEPS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { useLanguage } from '../../src/context/LanguageContext';
import { Sparkles, Filter, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const MATTRESS_TYPE_OPTIONS = [
  { id: 'all', name: 'All Mattresses', nameTa: 'அனைத்து மெத்தைகள்' },
  { id: 'standard', name: 'Standard', nameTa: 'ஸ்டாண்டர்ட் (இயற்கை)' },
  { id: 'foldable', name: 'Foldables', nameTa: 'மடிக்கக்கூடியவை' },
  { id: 'cooling', name: 'Cooling', nameTa: 'கூலிங்' },
  { id: 'rollable', name: 'Rollables', nameTa: 'ரோலிங் மெத்தைகள்' },
  { id: 'baby', name: 'Baby', nameTa: 'குழந்தைகள் மெத்தை' },
];

const ITEMS_PER_PAGE = 10;

export default function MattressesPage({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Load all 30 mattresses from product catalog
  const allMattresses = useMemo(() => {
    return PRODUCTS.filter(p => Boolean(p.mattressType));
  }, []);

  // Filter mattresses by selected type
  const filtered = useMemo(() => {
    if (selectedType === 'all') return allMattresses;
    return allMattresses.filter(m => m.mattressType === selectedType);
  }, [allMattresses, selectedType]);

  // Reset to first page when mattress type filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType]);

  // Pagination calculation
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentMattresses = filtered.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const catalogTop = document.getElementById('mattress-catalog-top');
    if (catalogTop) {
      catalogTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to get count per mattress type
  const getTypeCount = (typeId) => {
    if (typeId === 'all') return allMattresses.length;
    return allMattresses.filter(m => m.mattressType === typeId).length;
  };

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
              <span>{t('mattresses.kicker')}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#302820]">
              {t('mattresses.title')}
            </h1>
            <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
              {t('mattresses.subtitle')}
            </p>
          </div>

          {/* Filter Bar - Refactored to Standard, Foldables, Cooling, Rollables, Baby */}
          <div id="mattress-catalog-top" className="scroll-mt-32">
            <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xs">
              
              {/* Filter Label */}
              <div className="flex items-center gap-2 text-xs uppercase font-semibold text-[#302820] shrink-0">
                <Layers className="w-4 h-4 text-[#A68B65]" />
                <span>{isTamil ? 'மெத்தை வகைகள்:' : 'Mattress Types:'}</span>
              </div>

              {/* Mobile Select Dropdown */}
              <div className="w-full sm:hidden">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4C1A7] text-xs text-[#302820] font-medium outline-none focus:border-[#A68B65] cursor-pointer"
                >
                  {MATTRESS_TYPE_OPTIONS.map(opt => (
                    <option key={opt.id} value={opt.id}>
                      {isTamil ? opt.nameTa : opt.name} ({getTypeCount(opt.id)})
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop / Tablet Pill Buttons */}
              <div className="hidden sm:flex flex-wrap items-center gap-2">
                {MATTRESS_TYPE_OPTIONS.map((opt) => {
                  const isActive = selectedType === opt.id;
                  const count = getTypeCount(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedType(opt.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#302820] text-[#D4C1A7] shadow-sm font-semibold'
                          : 'bg-white hover:bg-[#F0EBE1] text-[#302820]/80 border border-[#D4C1A7]/60'
                      }`}
                    >
                      <span>{isTamil ? opt.nameTa : opt.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-sans ${
                        isActive
                          ? 'bg-[#A68B65]/30 text-[#F7F4EE]'
                          : 'bg-[#302820]/10 text-[#302820]/70'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Showing count indicator */}
              <div className="text-xs text-[#302820]/70 font-medium shrink-0">
                {isTamil ? (
                  <span>
                    {totalItems > 0
                      ? `${totalItems} மெத்தைகளில் ${startIndex + 1}–${endIndex} காட்டப்படுகிறது`
                      : '0 மெத்தைகள்'}
                  </span>
                ) : (
                  <span>
                    {totalItems > 0
                      ? `Showing ${startIndex + 1}–${endIndex} of ${totalItems} mattresses`
                      : '0 mattresses'}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid (10 items per page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMattresses.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenEnquiry={onOpenEnquiry} 
              />
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-16 space-y-3">
              <p className="font-serif text-2xl font-semibold text-[#302820]">
                {t('mattresses.noResults')}
              </p>
              <button 
                onClick={() => setSelectedType('all')}
                className="px-4 py-2 rounded-full bg-[#302820] text-[#D4C1A7] text-xs uppercase tracking-wider font-semibold hover:bg-[#A68B65] hover:text-[#302820] transition-colors cursor-pointer"
              >
                {t('mattresses.resetFilters')}
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#D4C1A7]/40">
              <div className="text-xs text-[#302820]/70 font-medium order-2 sm:order-1">
                {isTamil
                  ? `பக்கம் ${currentPage} / ${totalPages} (மொத்தம் ${totalItems} மெத்தைகள்)`
                  : `Page ${currentPage} of ${totalPages} (${totalItems} mattresses total)`}
              </div>

              <div className="flex items-center gap-2 order-1 sm:order-2">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    currentPage === 1
                      ? 'bg-white/50 text-[#302820]/30 border border-[#D4C1A7]/30 cursor-not-allowed'
                      : 'bg-white text-[#302820] border border-[#D4C1A7] hover:bg-[#302820] hover:text-[#D4C1A7] hover:border-[#302820] shadow-xs'
                  }`}
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isTamil ? 'முந்தைய' : 'Previous'}</span>
                </button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isCurrent = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center ${
                          isCurrent
                            ? 'bg-[#302820] text-[#D4C1A7] shadow-sm font-bold scale-105'
                            : 'bg-white text-[#302820] border border-[#D4C1A7] hover:bg-[#F3EFE6]'
                        }`}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    currentPage === totalPages
                      ? 'bg-white/50 text-[#302820]/30 border border-[#D4C1A7]/30 cursor-not-allowed'
                      : 'bg-white text-[#302820] border border-[#D4C1A7] hover:bg-[#302820] hover:text-[#D4C1A7] hover:border-[#302820] shadow-xs'
                  }`}
                  aria-label="Next Page"
                >
                  <span>{isTamil ? 'அடுத்தது' : 'Next'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Deep Content: Comprehensive Comparison Table */}
          <div className="pt-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {t('mattresses.comparisonKicker')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#302820]">
                {t('mattresses.comparisonTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-[#302820]/70 font-light">
                {t('mattresses.comparisonSubtitle')}
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-[#D4C1A7] bg-white shadow-xs">
              <table className="w-full text-left text-xs min-w-[640px]">
                <thead>
                  <tr className="bg-[#302820] text-[#F7F4EE] border-b border-[#A68B65]/30">
                    <th className="py-4 px-6 font-serif text-sm font-semibold">{t('mattresses.tableColProduct')}</th>
                    <th className="py-4 px-6 font-serif text-sm font-semibold text-[#D4C1A7] bg-[#3B3228]">
                      JKR Ilavam Panchu
                    </th>
                    <th className="py-4 px-6 font-serif text-sm font-semibold opacity-80">Memory Foam</th>
                    <th className="py-4 px-6 font-serif text-sm font-semibold opacity-80">Coir Mattress</th>
                    <th className="py-4 px-6 font-serif text-sm font-semibold opacity-80">Spring Mattress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4C1A7]/30 text-[#302820]">
                  {MATTRESS_COMPARISON.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FAF7F2]' : 'bg-white'}>
                      <td className="py-4 px-6 font-semibold text-[#302820]">
                        {row.criterion}
                      </td>
                      <td className="py-4 px-6 font-medium text-[#8C6D45] bg-[#EAE2D6]/40">
                        {row.ilavamPanchu}
                      </td>
                      <td className="py-4 px-6 text-[#302820]/70">
                        {row.memoryFoam}
                      </td>
                      <td className="py-4 px-6 text-[#302820]/70">
                        {row.coirMattress}
                      </td>
                      <td className="py-4 px-6 text-[#302820]/70">
                        {row.springMattress}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Content: Maintenance & Longevity Guide */}
          <div className="bg-[#242321] text-[#F7F4EE] rounded-3xl p-8 sm:p-12 space-y-8 border border-[#A68B65]/30 shadow-lg">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4C1A7] font-semibold">
                {t('mattresses.careKicker')}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
                {t('mattresses.careTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                {t('mattresses.careSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MATTRESS_CARE_STEPS.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                  <span className="text-2xl font-serif font-bold text-[#A68B65]">
                    {step.step}
                  </span>
                  <h5 className="font-serif text-base font-semibold text-[#D4C1A7]">
                    {step.title}
                  </h5>
                  <p className="text-xs text-white/75 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
