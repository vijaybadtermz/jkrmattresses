import React, { useState, useEffect } from 'react';
import { 
  PRODUCTS, 
  STANDARD_MATTRESS_SIZES, 
  MATTRESS_THICKNESSES, 
  PILLOW_SIZES, 
  PILLOW_LOFTS, 
  FIRMNESS_LEVELS, 
  getProductPrice 
} from '../../data/products';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { X, Send, MessageCircle, CheckCircle2, Ruler, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquiryModal({ isOpen, onClose, initialProduct = null, initialConfig = null }) {
  const { t, isTamil } = useLanguage();
  const [product, setProduct] = useState(initialProduct || PRODUCTS[0]);
  const isPillow = product.category === 'pillows';

  const defaultSize = isPillow ? 'regular' : 'single';
  const defaultDim = isPillow ? 3.0 : 5;

  const [sizeId, setSizeId] = useState(initialConfig?.sizeId || defaultSize);
  const [customWidth, setCustomWidth] = useState(initialConfig?.customWidth || 60);
  const [customLength, setCustomLength] = useState(initialConfig?.customLength || 78);
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'
  const [thickness, setThickness] = useState(initialConfig?.thickness ?? defaultDim);
  const [firmness, setFirmness] = useState(initialConfig?.firmness || 'Medium');
  const [quantity, setQuantity] = useState(1);

  // Customer form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bodinayakanur');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
      const pillow = initialProduct.category === 'pillows';
      setSizeId(initialConfig?.sizeId || (pillow ? 'regular' : 'single'));
      setThickness(initialConfig?.thickness ?? (pillow ? 3.0 : 5));
      if (initialConfig?.firmness) setFirmness(initialConfig.firmness);
    }
  }, [initialProduct, initialConfig]);

  if (!isOpen) return null;

  const sizeOptions = isPillow
    ? PILLOW_SIZES.filter(s => (product.availableSizes || ['regular', 'full', 'king']).includes(s.id))
    : STANDARD_MATTRESS_SIZES.filter(s => (product.availableSizes || ['single', 'double', 'queen', 'king', 'custom']).includes(s.id));

  const dimensionOptions = isPillow
    ? (product.availableLofts || PILLOW_LOFTS)
    : (product.availableThicknesses || MATTRESS_THICKNESSES);

  const handleProductChange = (e) => {
    const selected = PRODUCTS.find(p => p.id === e.target.value);
    if (!selected) return;
    setProduct(selected);
    const pillow = selected.category === 'pillows';
    setSizeId(pillow ? 'regular' : 'single');
    setThickness(pillow ? 3.0 : 5);
  };

  const currentPriceInfo = getProductPrice(product, sizeId, thickness);
  const isCustomSize = sizeId === 'custom';

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = t('enquiryModal.errName');
    if (!phone.trim() || phone.length < 10) errs.phone = t('enquiryModal.errPhone');
    if (isCustomSize) {
      if (!customWidth || customWidth < 12) errs.customWidth = t('enquiryModal.errWidth');
      if (!customLength || customLength < 12) errs.customLength = t('enquiryModal.errLength');
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const selectedSizeObj = sizeOptions.find(s => s.id === sizeId);
    const selectedSizeLabel = isCustomSize 
      ? `Custom (${customWidth}" × ${customLength}" ${unit})` 
      : (selectedSizeObj?.label || (selectedSizeObj ? `${selectedSizeObj.name} (${selectedSizeObj.dimensions})` : sizeId));

    const priceString = currentPriceInfo?.isCustom ? 'Custom Quote Requested' : currentPriceInfo?.text;

    return `Hello JKR Mattress Team! 👋%0A%0AI would like to submit an enquiry / custom quote request for:%0A%0A` +
      `📌 *Product:* ${(isTamil && product.nameTa) ? product.nameTa : product.name}%0A` +
      `📏 *Size:* ${selectedSizeLabel}%0A` +
      `📐 *Thickness/Loft:* ${thickness} inches%0A` +
      `🛏️ *Firmness:* ${firmness}%0A` +
      `🧵 *Material:* ${product.material}%0A` +
      `🔢 *Quantity:* ${quantity}%0A` +
      `💰 *Estimated Price:* ${priceString}%0A%0A` +
      `👤 *Customer Name:* ${name}%0A` +
      `📞 *Phone:* ${phone}%0A` +
      `📍 *Location:* ${city}, Tamil Nadu%0A` +
      (message ? `📝 *Notes:* ${message}` : '');
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${buildWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
    triggerSuccess();
  };

  const handleWebSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  const productName = (isTamil && product.nameTa) ? product.nameTa : product.name;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#F7F4EE] border border-[#D4C1A7] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#302820] text-[#F7F4EE] px-6 py-4.5 flex items-center justify-between border-b border-[#A68B65]/30">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#D4C1A7]" />
            <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#F7F4EE]">
              {isCustomSize ? t('enquiryModal.titleCustom') : t('enquiryModal.titleEnquiry')}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={t('common.close')}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#302820]">
                {t('enquiryModal.submittedTitle')}
              </h3>
              <p className="text-sm text-[#302820]/80 max-w-md mx-auto leading-relaxed font-light">
                {t('enquiryModal.submittedMsg')}
              </p>
              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {t('common.close')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWebSubmit} className="space-y-6">
              
              {/* Product Summary Box */}
              <div className="p-4 rounded-2xl bg-[#EAE2D6]/70 border border-[#D4C1A7]/80 flex items-center gap-4">
                <img 
                  src={product.image} 
                  alt={productName} 
                  className="w-16 h-16 object-cover rounded-xl shadow-xs shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#A68B65]">
                    {product.subCategory}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#302820] truncate">
                    {productName}
                  </h4>
                  <p className="text-xs text-[#302820]/70 truncate">
                    {product.material}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-[#A68B65] block font-serif text-base">
                    {currentPriceInfo?.text}
                  </span>
                </div>
              </div>

              {/* Product Specifications Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Product Select */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#302820]/80 mb-1">
                    {t('enquiryModal.productLabel')}
                  </label>
                  <select
                    value={product.id}
                    onChange={handleProductChange}
                    className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>
                        {(isTamil && p.nameTa) ? p.nameTa : p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#302820]/80 mb-1">
                    {t('enquiryModal.sizeLabel')}
                  </label>
                  <select
                    value={sizeId}
                    onChange={(e) => setSizeId(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                  >
                    {sizeOptions.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.label || `${s.name} (${s.dimensions})`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom Dimensions Input */}
                {isCustomSize && (
                  <div className="sm:col-span-2 p-4 rounded-2xl bg-amber-500/10 border border-amber-600/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#302820]">
                        <Ruler className="w-4 h-4 text-[#A68B65]" />
                        <span>{isTamil ? 'தனிப்பயன் அளவுகளை உள்ளிடவும்' : 'Specify Custom Dimensions'}</span>
                      </div>
                      <div className="inline-flex rounded-lg border border-[#D4C1A7] bg-white p-0.5 text-xs">
                        <button
                          type="button"
                          onClick={() => setUnit('inches')}
                          className={`px-2.5 py-0.5 rounded-md font-medium ${unit === 'inches' ? 'bg-[#302820] text-white' : 'text-gray-600'}`}
                        >
                          {t('common.inches')}
                        </button>
                        <button
                          type="button"
                          onClick={() => setUnit('cm')}
                          className={`px-2.5 py-0.5 rounded-md font-medium ${unit === 'cm' ? 'bg-[#302820] text-white' : 'text-gray-600'}`}
                        >
                          {t('common.cm')}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          {t('enquiryModal.widthLabel')} ({unit})
                        </label>
                        <input
                          type="number"
                          value={customWidth}
                          onChange={(e) => setCustomWidth(Number(e.target.value))}
                          placeholder="Width"
                          className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-gray-300 outline-none focus:border-[#A68B65]"
                        />
                        {errors.customWidth && <p className="text-xs text-red-500 mt-0.5">{errors.customWidth}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700">
                          {t('enquiryModal.lengthLabel')} ({unit})
                        </label>
                        <input
                          type="number"
                          value={customLength}
                          onChange={(e) => setCustomLength(Number(e.target.value))}
                          placeholder="Length"
                          className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-gray-300 outline-none focus:border-[#A68B65]"
                        />
                        {errors.customLength && <p className="text-xs text-red-500 mt-0.5">{errors.customLength}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* Thickness / Height / Loft Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#302820]/80 mb-1">
                    {isPillow ? t('productDetail.selectLoft') : t('enquiryModal.thicknessLabel')}
                  </label>
                  <select
                    value={thickness}
                    onChange={(e) => setThickness(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                  >
                    {dimensionOptions.map(dim => (
                      <option key={dim} value={dim}>
                        {dim} {t('common.inches')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Firmness */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#302820]/80 mb-1">
                    {t('enquiryModal.firmnessLabel')}
                  </label>
                  <select
                    value={firmness}
                    onChange={(e) => setFirmness(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                  >
                    {(product.firmnessOptions || FIRMNESS_LEVELS).map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Customer Contact Details */}
              <div className="pt-4 border-t border-[#D4C1A7]/40 space-y-4">
                <h5 className="font-serif text-base font-semibold text-[#302820]">
                  {t('enquiryModal.customerInfoTitle')}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#302820]/80 mb-1">
                      {t('enquiryModal.nameLabel')}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('enquiryModal.namePlaceholder')}
                      className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#302820]/80 mb-1">
                      {t('enquiryModal.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t('enquiryModal.phonePlaceholder')}
                      className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#302820]/80 mb-1">
                      {t('enquiryModal.cityLabel')}
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                    >
                      {siteConfig.serviceAreas.map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#302820]/80 mb-1">
                      {t('enquiryModal.quantityLabel')}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#302820]/80 mb-1">
                    {t('enquiryModal.notesLabel')}
                  </label>
                  <textarea
                    rows="2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('enquiryModal.notesPlaceholder')}
                    className="w-full px-3 py-2 text-sm rounded-xl bg-white border border-[#D4C1A7] text-[#302820] focus:ring-2 focus:ring-[#A68B65] outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="flex-1 py-3 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('enquiryModal.sendWhatsAppBtn')}</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-2xl bg-[#302820] hover:bg-[#A68B65] text-[#F7F4EE] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('enquiryModal.submitWebBtn')}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
