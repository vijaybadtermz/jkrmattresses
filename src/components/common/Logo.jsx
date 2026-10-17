/**
 * JKR Mattress Luxury Brand Emblem & Monogram Logo
 * Light & Dark theme support, with delicate Ilavam Panchu leaf motif & serif typography.
 */
export default function Logo({ variant = 'dark', className = '', compact = false }) {
  // variant: 'dark' (for light backgrounds - text is deep espresso)
  // variant: 'light' (for dark backgrounds - text is ivory / sand)
  
  const textColor = variant === 'light' ? '#F7F4EE' : '#302820';
  const accentColor = variant === 'light' ? '#D4C1A7' : '#A68B65';
  const mutedColor = variant === 'light' ? '#EAE2D6' : '#6B5E50';

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Brand Monogram Icon */}
      <div className="relative group/logo shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`${compact ? 'w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10' : 'w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11'} transition-transform duration-700 ease-out group-hover/logo:scale-105 group-hover/logo:rotate-3`}
        >
          {/* Outer Delicate Gold Crest Ring */}
          <circle cx="50" cy="50" r="46" stroke={accentColor} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
          <circle cx="50" cy="50" r="41" stroke={accentColor} strokeWidth="1.2" opacity="0.85" />
          
          {/* Central Botanical Silk Cotton Pod Motif */}
          <path 
            d="M50 16 C38 34, 38 66, 50 84 C62 66, 62 34, 50 16 Z" 
            fill={accentColor} 
            fillOpacity="0.14" 
            stroke={accentColor} 
            strokeWidth="1.2" 
          />
          
          {/* Stylized JKR Monogram Lettering */}
          <text 
            x="50" 
            y="56" 
            textAnchor="middle" 
            dominantBaseline="middle"
            fill={accentColor}
            fontFamily="'Cinzel', 'Playfair Display', serif" 
            fontWeight="700" 
            fontSize="19" 
            letterSpacing="1"
          >
            JKR
          </text>
          
          {/* Celestial Silk Cotton Accent Stars */}
          <circle cx="50" cy="18" r="2.2" fill={accentColor} />
          <circle cx="50" cy="82" r="2.2" fill={accentColor} />
          <circle cx="24" cy="50" r="1.6" fill={accentColor} opacity="0.7" />
          <circle cx="76" cy="50" r="1.6" fill={accentColor} opacity="0.7" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col justify-center text-left min-w-0">
        <span 
          className={`font-display ${compact ? 'text-[12px] sm:text-base tracking-[0.12em] sm:tracking-[0.18em] lg:text-[18px]' : 'text-base sm:text-lg lg:text-[20px] tracking-[0.16em] sm:tracking-[0.2em]'} font-semibold leading-tight uppercase transition-colors whitespace-nowrap`}
          style={{ color: textColor }}
        >
          JKR MATTRESS
        </span>
        <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
          <span 
            className="text-[6.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.16em] sm:tracking-[0.24em] font-medium uppercase whitespace-nowrap"
            style={{ color: mutedColor }}
          >
            NATURAL COMFORT
          </span>
          <span className="w-1 h-1 rounded-full bg-[#A68B65]/70 shrink-0" />
          <span 
            className="text-[6.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.14em] sm:tracking-[0.18em] font-medium whitespace-nowrap"
            style={{ color: accentColor }}
          >
            EST. 1994
          </span>
        </div>
      </div>
    </div>
  );
}
