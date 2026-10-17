import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';
import { siteConfig } from '../../config/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  Feather,
  Heart,
  Layers,
  Ruler,
  ArrowRight,
  SunMedium,
  Clock,
  Compass
} from 'lucide-react';

// Modern Unified Segmented Language Switcher (Declared outside render)
function LanguageSwitcher({ language, setLanguage, isDarkHero = false, isMobileDrawer = false, compact = false }) {
  return (
    <div
      className={`relative inline-flex items-center rounded-full p-0.5 border select-none transition-all ${compact ? 'h-7.5 sm:h-8' : 'h-8 sm:h-9'
        } ${isMobileDrawer
          ? 'bg-white/10 border-white/20 text-white'
          : isDarkHero
            ? 'border-white/25 bg-black/40 text-white backdrop-blur-md shadow-xs'
            : 'border-[#D4C1A7] bg-[#EAE2D6]/80 text-[#302820] shadow-xs'
        }`}
      role="group"
      aria-label="Language selection"
    >
      {/* English Button */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative z-10 h-full ${compact ? 'px-2' : 'px-2.5 sm:px-3'} rounded-full transition-all duration-200 ${compact ? 'text-[10.5px] sm:text-[11px]' : 'text-xs'
          } font-semibold tracking-wide cursor-pointer flex items-center justify-center ${language === 'en'
            ? isDarkHero || isMobileDrawer
              ? 'bg-[#A68B65] text-[#1C1B19] shadow-xs font-bold'
              : 'bg-[#302820] text-[#F7F4EE] shadow-xs font-bold'
            : isDarkHero || isMobileDrawer
              ? 'text-white/70 hover:text-white'
              : 'text-[#302820]/70 hover:text-[#302820]'
          }`}
        aria-pressed={language === 'en'}
      >
        <span>{compact ? 'EN' : 'English'}</span>
      </button>

      {/* Tamil Button */}
      <button
        type="button"
        onClick={() => setLanguage('ta')}
        className={`relative z-10 h-full ${compact ? 'px-2' : 'px-2.5 sm:px-3'} rounded-full transition-all duration-200 ${compact ? 'text-[10.5px] sm:text-[11px]' : 'text-xs'
          } font-medium tracking-normal font-sans cursor-pointer flex items-center justify-center ${language === 'ta'
            ? isDarkHero || isMobileDrawer
              ? 'bg-[#A68B65] text-[#1C1B19] shadow-xs font-bold'
              : 'bg-[#302820] text-[#F7F4EE] shadow-xs font-bold'
            : isDarkHero || isMobileDrawer
              ? 'text-white/70 hover:text-white'
              : 'text-[#302820]/70 hover:text-[#302820]'
          }`}
        aria-pressed={language === 'ta'}
      >
        <span>தமிழ்</span>
      </button>
    </div>
  );
}

export default function Header({ onOpenEnquiry, onOpenConfigurator }) {
  const { language, setLanguage, t, isTamil } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(68);

  const location = useLocation();
  const dropdownRef = useRef(null);
  const isHomepage = location.pathname === '/';

  // Track window scroll with passive listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep the mobile drawer attached to the header as its height changes
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeaderHeight = () => {
      setHeaderHeight(header.getBoundingClientRect().height);
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);
    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Close menus on route change without cascading renders
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Accessibility: Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Click outside listener for mega dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCollectionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setCollectionsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setCollectionsDropdownOpen(false);
    }, 180);
  };

  // Click logo/brand title: navigate home and scroll to top smoothly
  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Header dynamic theme styling based on route, scroll & mobile drawer state
  const isDarkHero = isHomepage && !isScrolled;
  const isDarkHeader = isDarkHero || mobileMenuOpen;

  const headerBgClass = isDarkHeader
    ? 'bg-[#1C1B19] text-white border-b border-[#A68B65]/20 shadow-[0_4px_30px_rgba(0,0,0,0.25)]'
    : 'bg-[#F7F4EE]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(48,40,32,0.06)] border-b border-[#D4C1A7]/40 text-[#302820]';

  const logoVariant = isDarkHeader ? 'light' : 'dark';

  // Responsive Nav Link Classes tailored to English vs Tamil
  const navItemClass = (isActive) => `
    relative transition-all duration-200 h-8.5 py-1.5 px-2 lg:px-2.5 xl:px-3 rounded-full flex items-center whitespace-nowrap select-none
    ${isTamil
      ? 'font-sans text-[11px] xl:text-[12px] font-medium tracking-normal'
      : 'font-sans text-[11px] xl:text-[11.5px] uppercase tracking-[0.08em] xl:tracking-[0.1em] font-semibold'
    }
    ${isActive
      ? (isDarkHero ? 'text-[#D4C1A7] bg-white/12 shadow-xs' : 'text-[#8C6D45] bg-[#EAE2D6]/80 shadow-xs')
      : (isDarkHero ? 'text-white/85 hover:text-[#D4C1A7] hover:bg-white/8' : 'text-[#302820]/80 hover:text-[#A68B65] hover:bg-[#EAE2D6]/50')
    }
  `;

  // Collections Mega Dropdown Data
  const collectionsMenu = [
    {
      name: t('nav.naturalPanchu'),
      path: '/mattresses',
      icon: Feather,
      badge: isTamil ? 'முதன்மை' : 'Best Seller',
      desc: t('nav.naturalPanchuDesc')
    },
    {
      name: t('nav.coolingCollection'),
      path: '/mattresses',
      icon: SunMedium,
      badge: isTamil ? 'குளிர்ச்சி' : 'Summer Choice',
      desc: t('nav.coolingCollectionDesc')
    },
    {
      name: t('nav.pillowsMenu'),
      path: '/pillows',
      icon: Sparkles,
      badge: isTamil ? 'ஆரோக்கியம்' : 'Cervical Align',
      desc: t('nav.pillowsMenuDesc')
    },
    {
      name: t('nav.foldableMenu'),
      path: '/foldable',
      icon: Layers,
      badge: isTamil ? 'மடிக்கக்கூடியது' : 'Space-Saving',
      desc: t('nav.foldableMenuDesc')
    },
    {
      name: t('nav.babyMenu'),
      path: '/baby-nursery',
      icon: Heart,
      badge: isTamil ? 'குழந்தைகள்' : 'Pediatric Firm',
      desc: t('nav.babyMenuDesc')
    },
    {
      name: t('nav.customMenu'),
      path: '/custom',
      icon: Ruler,
      badge: isTamil ? 'தனிப்பயன்' : 'Made-to-Order',
      desc: t('nav.customMenuDesc')
    },
  ];

  // Mobile Drawer Navigation Destination List
  const mobileNavDestinations = [
    { label: t('nav.home'), path: '/', icon: Compass },
    { label: t('nav.mattresses'), path: '/mattresses', icon: Feather, badge: isTamil ? 'தூய பஞ்சு' : 'Natural' },
    { label: t('nav.pillows'), path: '/pillows', icon: Sparkles, badge: isTamil ? 'ஆரோக்கியம்' : 'Ergo' },
    { label: t('nav.foldableMenu'), path: '/foldable', icon: Layers, badge: isTamil ? 'மடிக்கக்கூடியது' : 'Tri-Fold' },
    { label: t('nav.babyMenu'), path: '/baby-nursery', icon: Heart, badge: isTamil ? 'குழந்தைகள்' : 'Pure' },
    { label: t('nav.customComfort'), path: '/custom', icon: Ruler, badge: isTamil ? 'தனிப்பயன்' : 'Bespoke' },
    { label: t('nav.about'), path: '/about', icon: SunMedium },
    { label: t('nav.contact'), path: '/contact', icon: Phone },
  ];

  const isCollectionsActive = ['/mattresses', '/pillows', '/baby-nursery', '/foldable'].includes(location.pathname);

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBgClass}`}>

      {/* 1. Top Announcement Bar (Strictly 3-Zone Symmetrical Layout) */}
      <div
        className={`transition-all duration-300 overflow-hidden text-[11px] font-sans border-b select-none ${isScrolled ? 'max-h-0 py-0 opacity-0 border-transparent' : 'max-h-10 py-1.5 opacity-100'
          } ${isDarkHero
            ? 'bg-[#151413]/90 text-white/80 border-[#A68B65]/20 backdrop-blur-md'
            : 'bg-[#2A2520] text-[#EAE2D6] border-[#A68B65]/30'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">

          {/* Left: Brand Origin & Trust Beacon */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4C1A7] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A68B65]" />
            </span>
            <p className="truncate font-medium tracking-wide text-[10px] sm:text-[11px] text-[#D4C1A7]">
              {t('nav.taglineAnnouncement')}
            </p>
          </div>

          {/* Center: Hours / Dispatch Micro-Badge (Centered on Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-1.5 text-white/80 shrink-0 text-[11px]">
            <Clock className="w-3 h-3 text-[#A68B65] shrink-0" />
            <span>{t('nav.hoursBadge')}</span>
          </div>

          {/* Right: Direct Assistance Links (Aligned to End) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#D4C1A7] transition-colors text-[11px]"
              aria-label="Direct Phone Line"
            >
              <Phone className="w-3 h-3 text-[#A68B65]" />
              <span className="hidden sm:inline font-medium tracking-wide">{siteConfig.contact.phoneDisplay}</span>
              <span className="sm:hidden font-medium">{isTamil ? 'அழைக்க' : 'Call'}</span>
            </a>
            <span className="text-white/25 select-none">|</span>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px]"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Symmetrical 3-Column Grid) */}
      <div className={`max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8 grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 transition-all duration-300 ${isScrolled ? 'h-15 sm:h-[68px]' : 'h-16 sm:h-[78px]'
        }`}>

        {/* Left Column (1fr): Brand Logo Emblem */}
        <div className="flex items-center justify-start min-w-0">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A68B65] focus-visible:ring-offset-4 shrink-0 group transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
            aria-label="JKR Mattress Home"
          >
            <Logo variant={logoVariant} compact />
          </Link>
        </div>

        {/* Center Column (auto): Mathematically Centered Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-0.5 xl:space-x-1" aria-label="Main Navigation">

          {/* Home Link */}
          <Link to="/" className={navItemClass(location.pathname === '/')}>
            <span>{t('nav.home')}</span>
          </Link>



          {/* Mattresses Link */}
          <Link to="/mattresses" className={navItemClass(location.pathname === '/mattresses')}>
            <span>{t('nav.mattresses')}</span>
          </Link>

          {/* Pillows Link */}
          <Link to="/pillows" className={navItemClass(location.pathname === '/pillows')}>
            <span>{t('nav.pillows')}</span>
          </Link>

          {/* Collections Mega Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button
              type="button"
              onClick={() => setCollectionsDropdownOpen(!collectionsDropdownOpen)}
              className={navItemClass(isCollectionsActive)}
              aria-expanded={collectionsDropdownOpen}
              aria-haspopup="true"
            >
              <span>{t('nav.collections')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${collectionsDropdownOpen ? 'rotate-180 text-[#A68B65]' : ''
                  }`}
              />
            </button>

            {/* Mega Dropdown Panel */}
            <AnimatePresence>
              {collectionsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[640px] xl:w-[680px]"
                >
                  <div className="bg-[#FAF7F2] border border-[#D4C1A7] rounded-3xl shadow-[0_20px_50px_rgba(48,40,32,0.18)] p-5 text-[#302820] backdrop-blur-2xl">

                    {/* Header Strip inside dropdown */}
                    <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#D4C1A7]/40">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#A68B65]" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A68B65] font-bold">
                            {isTamil ? 'இயற்கை படுக்கை வகைகள்' : 'Pure Silk Cotton Bedding'}
                          </span>
                        </div>
                        <h4 className="font-serif text-base font-bold text-[#302820] mt-0.5">
                          {isTamil ? 'கைவினை மெத்தைகள் & தயாரிப்புகள்' : 'Handcrafted Collections & Custom Craft'}
                        </h4>
                      </div>
                      <Link
                        to="/mattresses"
                        onClick={() => setCollectionsDropdownOpen(false)}
                        className="text-xs font-semibold text-[#8C6D45] hover:text-[#302820] flex items-center gap-1 transition-colors px-2.5 py-1 rounded-full bg-[#EAE2D6]/60 hover:bg-[#EAE2D6]"
                      >
                        <span>{t('nav.fullCatalogue')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 2-Column Cards Grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {collectionsMenu.map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setCollectionsDropdownOpen(false)}
                            className="group p-2.5 rounded-2xl hover:bg-[#EAE2D6]/60 transition-all duration-200 border border-transparent hover:border-[#D4C1A7]/60 flex items-start gap-2.5"
                          >
                            <div className="p-2 rounded-xl bg-[#302820] text-[#D4C1A7] group-hover:bg-[#A68B65] group-hover:text-[#242321] transition-colors shrink-0 shadow-xs mt-0.5">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <p className="font-serif text-[13px] font-bold text-[#302820] group-hover:text-[#8C6D45] transition-colors truncate">
                                  {item.name}
                                </p>
                                <span className="text-[9px] uppercase font-bold text-[#A68B65] bg-[#EAE2D6] px-1.5 py-0.5 rounded shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#302820]/70 mt-0.5 line-clamp-2 leading-relaxed font-sans">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Dropdown Bottom Banner for Custom Dimensions */}
                    <div className="mt-3 pt-3 border-t border-[#D4C1A7]/40 flex items-center justify-between bg-gradient-to-r from-[#EAE2D6]/70 via-[#F7F4EE] to-[#EAE2D6]/40 p-3 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-[#A68B65] shrink-0" />
                        <span className="text-xs font-medium text-[#302820]">
                          {t('nav.customNeedHelp')}
                        </span>
                      </div>
                      <Link
                        to="/custom"
                        onClick={() => setCollectionsDropdownOpen(false)}
                        className="text-xs font-semibold text-[#302820] bg-white px-3 py-1 rounded-full border border-[#D4C1A7] hover:border-[#A68B65] hover:bg-[#A68B65] hover:text-white transition-all shadow-xs shrink-0"
                      >
                        {t('nav.bespokeQuote')}
                      </Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Custom Comfort Link
          <Link to="/custom" className={navItemClass(location.pathname === '/custom')}>
            <span>{t('nav.customComfort')}</span>
          </Link> */}

          {/* About Link */}
          <Link to="/about" className={navItemClass(location.pathname === '/about')}>
            <span>{t('nav.about')}</span>
          </Link>

          {/* Contact Link */}
          <Link to="/contact" className={navItemClass(location.pathname === '/contact')}>
            <span>{t('nav.contact')}</span>
          </Link>

        </nav>

        {/* Right Column (1fr): Unified Action Group */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 xl:gap-2.5">

          {/* Prominent Desktop & Tablet Language Switcher */}
          <div className="hidden sm:block shrink-0">
            <LanguageSwitcher language={language} setLanguage={setLanguage} isDarkHero={isDarkHeader} />
          </div>

          {/* Interactive Configurator Button (Desktop 1280px+) */}
          <button
            onClick={onOpenConfigurator}
            className={`hidden xl:flex h-8.5 sm:h-9 px-3 rounded-full text-xs font-sans font-medium transition-all duration-300 items-center gap-1.5 border group whitespace-nowrap cursor-pointer shrink-0 ${isDarkHeader
              ? 'border-white/30 text-white/95 hover:bg-white/10 hover:border-white'
              : 'border-[#D4C1A7] text-[#302820] hover:border-[#A68B65] hover:bg-[#EAE2D6]/80'
              }`}
            aria-label={t('nav.configurator')}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A68B65] transition-transform duration-300 group-hover:rotate-45" />
            <span>{t('nav.configurator')}</span>
          </button>

          {/* Enquire Now CTA (Unified Height, Proportioned Across Viewports)
          <button
            onClick={() => onOpenEnquiry(null)}
            className="relative overflow-hidden h-8 sm:h-9 px-2.5 sm:px-4 rounded-full text-xs font-sans font-semibold transition-all duration-300 shadow-xs bg-[#302820] text-[#F7F4EE] hover:bg-[#A68B65] hover:text-[#1C1B19] hover:shadow-md flex items-center justify-center gap-1.5 group border border-[#D4C1A7]/30 shrink-0 whitespace-nowrap cursor-pointer"
            aria-label={t('common.enquireNow')}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4C1A7] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shrink-0" />
            <span className={isTamil ? 'font-medium tracking-normal text-[11px] sm:text-xs' : 'uppercase tracking-wider text-[11px] sm:text-xs'}>
              <span className="hidden sm:inline">{t('common.enquireNow')}</span>
              <span className="sm:hidden">{isTamil ? 'விசாரிக்க' : 'Enquire'}</span>
            </span>
          </button> */}

          {/* WhatsApp Direct Icon Button (Tablet & Desktop) */}
          <a
            href={siteConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full items-center justify-center bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-600 border border-emerald-500/20 transition-all duration-300 hover:scale-105 shrink-0"
            aria-label="Direct WhatsApp Chat"
            title="WhatsApp Consultation"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
          </a>

          {/* Mobile Compact Language Switcher (Always accessible on all phones) */}
          <div className="sm:hidden shrink-0">
            <LanguageSwitcher language={language} setLanguage={setLanguage} isDarkHero={isDarkHeader} compact={true} />
          </div>

          {/* Mobile Navigation Toggle Button (Visible below lg / 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer ${mobileMenuOpen
              ? 'bg-white/15 text-[#D4C1A7] ring-1 ring-[#A68B65]/40'
              : isDarkHeader
                ? 'text-white hover:bg-white/10 active:bg-white/20'
                : 'text-[#302820] hover:bg-[#EAE2D6] active:bg-[#D4C1A7]/60'
              }`}
            aria-label={mobileMenuOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#D4C1A7]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

        </div>

      </div>

      {/* 3. Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            id="mobile-navigation-drawer"
            style={{
              top: `${headerHeight}px`,
              height: `calc(100dvh - ${headerHeight}px)`
            }}
            className="lg:hidden fixed left-0 right-0 bg-[#1C1B19] text-[#F7F4EE] backdrop-blur-2xl z-50 overflow-y-auto overscroll-contain border-t border-[#A68B65]/20 shadow-2xl"
          >
            <div className="min-h-full flex flex-col justify-between p-4 sm:p-6 pb-14 sm:pb-16 max-w-lg mx-auto">

              {/* Top Navigation Links */}
              <div className="space-y-4 pt-1">

                {/* Header Banner & Brand Title in Drawer */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <Link
                    to="/"
                    onClick={handleLogoClick}
                    className="min-w-0 pr-2 group block focus:outline-none cursor-pointer"
                    aria-label="JKR Mattress Home - Scroll to top"
                  >
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-[#D4C1A7] group-hover:text-white transition-colors block font-semibold truncate">
                      {siteConfig.brandName}
                    </span>
                    <span className="text-[10px] text-white/50 tracking-wider truncate block">
                      {siteConfig.contact?.address?.city || 'Bodinayakanur'}, {siteConfig.contact?.address?.state || 'Tamil Nadu'}
                    </span>
                  </Link>
                  {/* <LanguageSwitcher language={language} setLanguage={setLanguage} isMobileDrawer={true} /> */}
                </div>

                {/* Primary Nav Links */}
                <nav className="space-y-1.5" aria-label="Mobile Navigation Drawer">
                  {mobileNavDestinations.map((link, idx) => {
                    const IconComp = link.icon;
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between py-2.5 px-3 rounded-2xl transition-all ${isActive
                            ? 'text-[#D4C1A7] bg-white/10 font-bold border-l-4 border-[#A68B65]'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#A68B65] text-[#1C1B19]' : 'bg-white/5 text-[#D4C1A7]'}`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className={`text-base sm:text-lg ${isTamil ? 'font-sans font-medium' : 'font-serif'}`}>
                              {link.label}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {link.badge && (
                              <span className="text-[9px] uppercase font-bold text-[#A68B65] bg-white/10 px-2 py-0.5 rounded-full">
                                {link.badge}
                              </span>
                            )}
                            <ArrowRight className="w-4 h-4 text-white/30" />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

              </div>

              {/* Bottom Actions & Support Direct */}
              <div className="space-y-3 pt-5 border-t border-white/10 mt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConfigurator();
                  }}
                  className="w-full py-3 rounded-2xl border border-[#D4C1A7]/40 text-[#D4C1A7] font-sans font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4 text-[#A68B65]" />
                  <span>{t('nav.configurator')}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry(null);
                  }}
                  className="w-full py-3 rounded-2xl bg-[#A68B65] text-[#242321] font-sans font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:bg-[#D4C1A7] transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t('common.enquireNow')}</span>
                </button>

                {/* Direct Connect Actions */}
                <div className="pt-2 flex items-center justify-between text-xs text-white/80">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="flex items-center gap-1.5 hover:text-[#D4C1A7] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A68B65]" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={siteConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <span className="font-serif italic text-[11px] text-[#D4C1A7]/70">
                    "{siteConfig.taglineTamil}"
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
