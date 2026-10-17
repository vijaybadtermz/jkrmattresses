import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '../components/common/PageWrapper';
import { 
  PRODUCTS, 
  STANDARD_MATTRESS_SIZES, 
  MATTRESS_THICKNESSES, 
  PILLOW_SIZES, 
  PILLOW_LOFTS, 
  getProductPrice,
  ILAVAM_PANCHU_SCIENCE
} from '../data/products';
import { useLanguage } from '../../src/context/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  ArrowLeft, 
  Check, 
  ShieldCheck, 
  Wind, 
  Clock, 
  MessageCircle 
} from 'lucide-react';
import InteractiveProductGallery from '../components/products/InteractiveProductGallery';

function ProductDetailContent({ product, onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const isPillow = product.category === 'pillows';

  const defaultSize = isPillow 
    ? (product.availableSizes?.includes('regular') ? 'regular' : product.availableSizes?.[0] || 'regular')
    : (product.availableSizes?.includes('single') ? 'single' : product.availableSizes?.[0] || 'single');

  const defaultThicknessOrLoft = isPillow
    ? (product.availableLofts?.includes(3.0) ? 3.0 : product.availableLofts?.[0] || 3.0)
    : (product.availableThicknesses?.includes(5) ? 5 : product.availableThicknesses?.[0] || 5);

  // State management
  const [selectedSizeId, setSelectedSizeId] = useState(defaultSize);
  const [selectedThicknessOrLoft, setSelectedThicknessOrLoft] = useState(defaultThicknessOrLoft);
  const [selectedFirmness, setSelectedFirmness] = useState(
    product.firmnessOptions?.[0] || 'Medium'
  );

  const priceInfo = getProductPrice(product, selectedSizeId, selectedThicknessOrLoft);

  // Available options based on category
  const sizeOptions = isPillow 
    ? PILLOW_SIZES.filter(s => (product.availableSizes || ['regular', 'full', 'king']).includes(s.id))
    : STANDARD_MATTRESS_SIZES.filter(s => (product.availableSizes || ['single', 'double', 'queen', 'king', 'custom']).includes(s.id));

  const dimensionValues = isPillow 
    ? (product.availableLofts || PILLOW_LOFTS)
    : (product.availableThicknesses || MATTRESS_THICKNESSES);

  const displayName = (isTamil && product.nameTa) ? product.nameTa : product.name;
  const displayTagline = (isTamil && product.taglineTa) ? product.taglineTa : product.tagline;

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 bg-[#F7F4EE] min-h-screen text-[#302820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link 
              to={product.category === 'pillows' ? '/pillows' : product.category === 'foldable' ? '/foldable' : product.category === 'baby-nursery' ? '/baby-nursery' : product.category === 'custom' ? '/custom' : '/mattresses'} 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#A68B65] hover:text-[#302820] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {product.category === 'pillows' ? t('productDetail.backPillows') :
                 product.category === 'foldable' ? (isTamil ? 'மடிக்கக்கூடிய சேகரிப்பு' : 'Back to Foldables') :
                 product.category === 'baby-nursery' ? (isTamil ? 'குழந்தைகள் சேகரிப்பு' : 'Back to Baby & Nursery') :
                 product.category === 'custom' ? (isTamil ? 'தனிப்பயன் தயாரிப்புகள்' : 'Back to Custom Orders') :
                 t('productDetail.backMattresses')}
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D6] text-[#302820] text-[11px] font-sans font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('productDetail.workshopNotice')}</span>
            </div>
          </div>

          {/* Product Detail Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Interactive Product Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <InteractiveProductGallery
                images={product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]}
                productName={displayName}
                badge={product.badge}
              />

              {/* Quick Trust Bar under Images */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white border border-[#D4C1A7]/60 text-center space-y-1 shadow-2xs">
                  <Wind className="w-4 h-4 text-[#A68B65] mx-auto" />
                  <p className="text-[11px] font-bold text-[#302820]">{isTamil ? 'ஸ்பாஞ்ச் இல்லை' : 'Zero Foam'}</p>
                  <p className="text-[10px] text-[#302820]/60">{isTamil ? '100% இயற்கை' : '100% Plant Fiber'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#D4C1A7]/60 text-center space-y-1 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#A68B65] mx-auto" />
                  <p className="text-[11px] font-bold text-[#302820]">{isTamil ? '0% ரசாயனம்' : '0% Toxic VOCs'}</p>
                  <p className="text-[10px] text-[#302820]/60">{isTamil ? 'பாதுகாப்பானது' : 'Chemical-Free'}</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-[#D4C1A7]/60 text-center space-y-1 shadow-2xs">
                  <Clock className="w-4 h-4 text-[#A68B65] mx-auto" />
                  <p className="text-[11px] font-bold text-[#302820]">{isTamil ? '15–20 ஆண்டுகள்' : '15–20 Year Life'}</p>
                  <p className="text-[10px] text-[#302820]/60">{isTamil ? 'நீண்ட உழைப்பு' : 'Generational Value'}</p>
                </div>
              </div>

            </div>

            {/* Right Column: Specifications & Configuration (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className={`uppercase font-semibold text-[#A68B65] ${
                  isTamil ? 'text-xs tracking-normal' : 'text-xs tracking-widest'
                }`}>
                  {product.material}
                </span>
                <h1 className={`font-serif font-bold text-[#302820] leading-tight ${
                  isTamil ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
                }`}>
                  {displayName}
                </h1>
                <p className={`font-serif italic text-[#A68B65] ${
                  isTamil ? 'text-xs sm:text-sm' : 'text-sm'
                }`}>
                  {displayTagline}
                </p>
                <p className="text-sm sm:text-base text-[#302820]/80 font-light leading-relaxed pt-1">
                  {product.description}
                </p>
              </div>

              {/* Price Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4C1A7] flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#302820]/70 font-semibold block">
                    {priceInfo?.isCustom 
                      ? (isTamil ? 'தனிப்பயன் மதிப்பீடு' : 'Custom Quote') 
                      : (isTamil ? 'நேரடி பட்டறை விலை' : 'Direct Workshop Price')}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#302820]">
                    {priceInfo?.text}
                  </span>
                </div>

                <div className="text-right text-[11px] text-[#302820]/75 font-medium space-y-0.5">
                  <span className="block text-emerald-800 font-semibold">✓ {isTamil ? 'பாதுகாப்பான பேக்கிங்' : 'Free Protected Packaging'}</span>
                  <span className="block text-[#A68B65] font-semibold">{t('common.tamilNaduDelivery')}</span>
                  <span className="block text-[10px] text-[#302820]/60">{t('common.fastDispatch')}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]">
                    {isPillow ? t('productDetail.selectPillowSize') : t('productDetail.selectSize')}
                  </label>
                  {!isPillow && (
                    <span className="text-[11px] text-[#A68B65] font-medium">
                      {isTamil ? 'தனிப்பயன் அளவுக்கு "Custom" தேர்வு செய்க' : 'Custom size? Select "Custom Size"'}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {sizeOptions.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSizeId(s.id)}
                      className={`py-2 px-3 text-xs rounded-xl font-medium border text-left transition-all cursor-pointer ${
                        selectedSizeId === s.id
                          ? 'bg-[#302820] text-[#F7F4EE] border-[#302820] shadow-md'
                          : 'bg-white border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                      }`}
                    >
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-[10px] opacity-75">
                        {s.id === 'custom' 
                          ? (isTamil ? 'தனிப்பயன் அளவு' : 'Custom made') 
                          : isPillow 
                            ? s.dimensions 
                            : `${s.width}" × ${s.length}"`}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Thickness or Loft Selector */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]">
                  {isPillow ? t('productDetail.selectLoft') : t('productDetail.selectThickness')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {dimensionValues.map(dim => (
                    <button
                      key={dim}
                      onClick={() => setSelectedThicknessOrLoft(dim)}
                      className={`px-3.5 py-2 text-xs rounded-xl font-semibold transition-all cursor-pointer ${
                        selectedThicknessOrLoft === dim
                          ? 'bg-[#A68B65] text-white shadow-sm'
                          : 'bg-white border border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                      }`}
                    >
                      {dim} {t('common.inches')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Firmness Selector */}
              {product.firmnessOptions && (
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#302820]">
                    {t('productDetail.selectFirmness')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.firmnessOptions.map(firm => (
                      <button
                        key={firm}
                        onClick={() => setSelectedFirmness(firm)}
                        className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all cursor-pointer ${
                          selectedFirmness === firm
                            ? 'bg-[#302820] text-[#D4C1A7]'
                            : 'bg-white border border-[#D4C1A7] text-[#302820] hover:border-[#A68B65]'
                        }`}
                      >
                        {firm}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#D4C1A7]/40">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#302820]">
                  {t('productDetail.keyFeaturesTitle')}
                </span>
                <ul className="space-y-1.5 text-xs text-[#302820]/85">
                  {product.features?.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#A68B65] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenEnquiry(product, {
                    sizeId: selectedSizeId,
                    thickness: selectedThicknessOrLoft,
                    firmness: selectedFirmness
                  })}
                  className="flex-1 py-4 px-6 rounded-2xl bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] font-semibold text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-[#A68B65]/20 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D4C1A7] group-hover:rotate-12 transition-transform" />
                  <span>{t('productDetail.enquireModalBtn')}</span>
                </button>

                <a
                  href={`${siteConfig.socialLinks.whatsapp}?text=${encodeURIComponent(
                    `Hello JKR Mattress, I am interested in ${product.name} (${selectedSizeId}, ${selectedThicknessOrLoft} inch). Please share quote details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('productDetail.orderWhatsApp')}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Detailed Product Specifications Table */}
          {product.specs && (
            <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#A68B65] font-semibold">
                  {isTamil ? 'கைவினை தரம்' : 'Artisan Benchmarks'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820]">
                  {isTamil ? 'தயாரிப்பு விபரக்குறிப்புகள்' : 'Technical Craftsmanship & Composition'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {Object.entries(product.specs).map(([key, val], idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-[#D4C1A7]/40 space-y-1 shadow-2xs">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#A68B65] block">
                      {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#302820] leading-relaxed">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scientific Anatomy of Ilavam Panchu */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A68B65] font-bold">
                {isTamil ? 'இயற்கை இழை அறிவியல்' : 'Natural Fiber Science'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#302820]">
                {isTamil ? 'இயற்கை இலவம் பஞ்சு ஏன் தூக்கத்திற்கு சிறந்தது?' : "Why Ilavam Panchu (Ceiba Pentandra) Is Nature's Perfect Mattress"}
              </h2>
              <p className="text-xs sm:text-sm text-[#302820]/75 font-light">
                {isTamil 
                  ? 'செயற்கை ஸ்பாஞ்ச் மெத்தைகளுடன் ஒப்பிடுகையில் இயற்கை பஞ்சின் மருத்துவ நன்மைகள்.' 
                  : 'Discover the botanical advantages that make native silk cotton naturally superior to polyurethane memory foam.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ILAVAM_PANCHU_SCIENCE.map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-[#D4C1A7] space-y-3 shadow-2xs hover:border-[#A68B65] transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-[#302820] text-[#D4C1A7] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#302820]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#302820]/75 leading-relaxed font-sans">
                    {item.description}
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

export default function ProductDetailPage({ onOpenEnquiry }) {
  const { productId } = useParams();
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
  return <ProductDetailContent key={product.id} product={product} onOpenEnquiry={onOpenEnquiry} />;
}

