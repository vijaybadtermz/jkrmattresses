import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Heart, 
  ArrowUp, 
  Sparkles, 
  Ruler, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmailInput('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#1A1918] text-[#F7F4EE] border-t border-[#A68B65]/25 overflow-hidden">
      
      {/* Decorative Luxury Radial Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-[#A68B65]/10 via-[#D4C1A7]/5 to-transparent pointer-events-none blur-3xl" />

      {/* 1. Pre-Footer Callout Card: Bespoke Sleep Invitation */}
      <div className="relative border-b border-white/10 bg-gradient-to-r from-[#242220] via-[#2A2724] to-[#242220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A68B65]/20 border border-[#A68B65]/40 text-[#D4C1A7] text-[11px] font-sans font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D4C1A7]" />
                <span>{t('footer.calloutBadge')}</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F4EE] leading-tight">
                {t('footer.calloutTitle')}
              </h3>
              
              <p className="text-sm text-white/75 font-sans font-light max-w-2xl leading-relaxed">
                {t('footer.calloutDesc')}
              </p>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#D4C1A7]/90 font-sans">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B65]" />
                  <span>{t('common.pureMaterial')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B65]" />
                  <span>{t('common.noChemicals')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B65]" />
                  <span>{t('common.fastDispatch')}</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <button
                onClick={() => onOpenEnquiry(null, { sizeId: 'custom' })}
                className="relative overflow-hidden w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#A68B65] via-[#BA9F78] to-[#A68B65] text-[#1F1E1C] font-sans font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-[#A68B65]/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Ruler className="w-4 h-4 text-[#1F1E1C] transition-transform group-hover:rotate-45" />
                <span>{t('footer.calloutBtn')}</span>
              </button>

              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-sans font-medium text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t('footer.calloutWhatsApp')}</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Footer Multi-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1 & 2: Brand Identity & Artisan Story (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
              {t('footer.aboutBrand')}
            </p>

            {/* Tamil Inscription Callout */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-[#A68B65]/30">
              <p className="font-serif italic text-sm text-[#D4C1A7] mb-1">
                "{siteConfig.taglineTamil}"
              </p>
              <p className="text-[11px] text-white/60 font-sans">
                {isTamil 
                  ? 'தலைமுறை தலைமுறையாக தமிழ் மக்களின் ஆழ்ந்த இயற்கை தூக்கத்திற்கான தேர்வு.'
                  : 'Traditional cooling, authentic silk cotton hand-stuffed comfort for generations.'}
              </p>
            </div>

            {/* Quick Connect Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a 
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-600/30 hover:border-emerald-500/40 text-emerald-400 border border-white/10 transition-all"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#A68B65]/30 hover:border-[#A68B65]/40 text-[#D4C1A7] border border-white/10 transition-all"
                title="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#A68B65]/30 hover:border-[#A68B65]/40 text-[#D4C1A7] border border-white/10 transition-all"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#A68B65]/30 hover:border-[#A68B65]/40 text-[#D4C1A7] border border-white/10 transition-all"
                title="View Workshop Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Bedding Collections (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-[#D4C1A7] font-semibold border-b border-white/10 pb-2.5">
              {t('footer.collectionsTitle')}
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/75">
              <li>
                <Link 
                  to="/mattresses" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('nav.naturalPanchu')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/mattresses" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('nav.coolingCollection')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/pillows" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('nav.pillowsMenu')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/baby-nursery" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('nav.babyMenu')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/foldable" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('nav.foldableMenu')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('nav.customMenu')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="group flex items-center justify-between hover:text-[#D4C1A7] transition-colors py-1"
                >
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                    {t('about.title')}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#A68B65] transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Tamil Nadu Delivery Hubs (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-[#D4C1A7] font-semibold border-b border-white/10 pb-2.5">
              {t('footer.serviceAreasTitle')}
            </h4>
            <p className="text-xs text-white/60 font-sans">
              {t('footer.serviceAreasText')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {siteConfig.serviceAreas.map((area, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-white/80 font-sans hover:border-[#A68B65]/40 hover:text-[#D4C1A7] transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Column 5: Workshop Details & Direct Assistance (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-[#D4C1A7] font-semibold border-b border-white/10 pb-2.5">
              {t('contact.infoTitle')}
            </h4>
            
            <div className="space-y-3 text-xs font-sans text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A68B65] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {t('contact.addressValue')}
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A68B65] shrink-0" />
                <a 
                  href={`tel:${siteConfig.contact.phoneRaw}`} 
                  className="hover:text-[#D4C1A7] transition-colors font-medium tracking-wide"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A68B65] shrink-0" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-[#D4C1A7] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Quick Consultation Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#A68B65] text-white hover:text-[#1F1E1C] font-sans font-semibold text-xs uppercase tracking-wider border border-[#A68B65]/30 transition-all duration-300 shadow-xs cursor-pointer"
              >
                {t('common.requestQuote')}
              </button>
            </div>

            {/* Newsletter or Updates form */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="space-y-1.5">
                <p className="text-[11px] text-white/60">
                  {isTamil ? 'மெத்தை பராமரிப்பு குறிப்புகள் & சலுகைகள்:' : 'Mattress care guide & custom offers:'}
                </p>
                <div className="flex items-center gap-1.5">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={isTamil ? 'உங்கள் மின்னஞ்சல்' : 'Enter your email'}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#A68B65]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#A68B65] text-[#1F1E1C] rounded-lg text-xs font-semibold hover:bg-[#D4C1A7] transition-colors shrink-0 cursor-pointer"
                  >
                    {isTamil ? 'இணைக' : 'Join'}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[10px] text-emerald-400 mt-1">
                    ✓ {isTamil ? 'நன்றி! விபரங்களை அனுப்புகிறோம்.' : "Thank you! We'll keep you updated."}
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>

        {/* 3. Bottom Bar: Copyright, Tamil Heritage Emblem & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-sans">
          
          {/* Copyright */}
          <div>
            <p>
              © {new Date().getFullYear()} {siteConfig.brandName} • {t('common.location')}. {t('footer.rightsReserved')}
            </p>
          </div>

          {/* Heritage Tag */}
          <div className="flex items-center gap-1.5 text-[#D4C1A7]/80">
            <span>{siteConfig.taglineTamil}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>{t('footer.artisanCredit')}</span>
              <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline ml-1" />
            </span>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all duration-300 group cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="text-[11px] font-medium tracking-wider uppercase">Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A68B65] transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>

    </footer>
  );
}
