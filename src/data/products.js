export const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/n3iocr65b';
// Centralized Product Catalogue & Authentic Material Knowledge for JKR Mattress
import naturalImg from '../assets/images/natural_material.png';
import sideProfileImg from '../assets/images/side_profile.png';
import customTeakImg from '../assets/images/custom_teak_bed.png';
import diwanBolstersImg from '../assets/images/diwan_bolsters.jpg';

export const CATEGORIES = [
  { id: 'all', name: 'All Collections' },
  { id: 'mattresses', name: 'Mattresses' },
  { id: 'pillows', name: 'Pillows & Bolsters' },
  { id: 'baby-nursery', name: 'Baby & Nursery' },
  { id: 'foldable', name: 'Foldable & Portable' },
  { id: 'custom', name: 'Custom & Heritage' },
];

export const MATTRESS_TYPES = [
  { id: 'all', name: 'All Mattresses', nameTa: 'அனைத்து மெத்தைகள்' },
  { id: 'standard', name: 'Standard', nameTa: 'ஸ்டாண்டர்ட் (இயற்கை)' },
  { id: 'foldable', name: 'Foldables', nameTa: 'மடிக்கக்கூடியவை' },
  { id: 'cooling', name: 'Cooling', nameTa: 'கூலிங்' },
  { id: 'rollable', name: 'Rollables', nameTa: 'ரோலிங் மெத்தைகள்' },
  { id: 'baby', name: 'Baby', nameTa: 'குழந்தைகள் மெத்தை' },
];

export const FIRMNESS_LEVELS = [
  'Soft',
  'Medium Soft',
  'Medium',
  'Medium Firm',
  'Firm',
  'Gentle Support'
];

export const STANDARD_MATTRESS_SIZES = [
  { id: 'single', name: 'Single', width: 36, length: 72, label: '72" × 36" (Single Bed)' },
  { id: 'double', name: 'Double / Diwan', width: 48, length: 72, label: '72" × 48" (Double / Diwan)' },
  { id: 'queen', name: 'Queen', width: 60, length: 78, label: '78" × 60" (Queen Bed)' },
  { id: 'king', name: 'King', width: 72, length: 78, label: '78" × 72" (King Bed)' },
  { id: 'custom', name: 'Custom Size', width: 0, length: 0, label: 'Custom Made-to-Order' },
];

export const MATTRESS_THICKNESSES = [4, 5, 6, 7, 8, 9, 10]; // in inches

export const PILLOW_SIZES = [
  { id: 'regular', name: 'Regular', dimensions: '24" × 16"' },
  { id: 'full', name: 'Full Size', dimensions: '27" × 18"' },
  { id: 'king', name: 'King Size', dimensions: '30" × 20"' },
  { id: 'bolster', name: 'Cylindrical Bolster (Pair)', dimensions: '30" × 9" (Circumference 28")' },
  { id: 'custom', name: 'Custom Size', dimensions: 'Made-to-order' },
];

export const PILLOW_LOFTS = [2.5, 3.0, 3.5, 4.0, 4.5, 5.0]; // in inches

export const MATERIALS = [
  {
    id: 'ilavam-panchu',
    name: 'Pure Ilavam Panchu (இலவம் பஞ்சு)',
    description: '100% natural organic silk cotton harvested from native Ceiba trees in Tamil Nadu. Naturally buoyant hollow fibers, hypoallergenic, antibacterial, temperature-regulating, and 100% biodegradable.',
    isSignature: true
  },
  {
    id: 'cooling-gel',
    name: 'Cooling Ice-Knit & Silk Cotton Core',
    description: 'Bespoke combination of pure silk cotton with breathable cool-to-touch phase-change fabric knit for coastal and tropical heat dispersion.',
    isSignature: false
  },
  {
    id: 'organic-cotton-damask',
    name: 'Heavyweight Kada & Organic Cotton Damask Casing',
    description: 'Unbleached traditional cotton casing (காடா துணி) hand-tufted with reinforced double-stitched border cord piping for decades of resilience.',
    isSignature: false
  }
];

export const PRODUCTS = [
  // ==========================================
  // A. STANDARD MATTRESSES (Natural Standard 1-10)
  // ==========================================
  {
    id: 'ilavam-panchu-classic',
    name: 'Ilavam Panchu Classic Natural Mattress',
    nameTa: 'இலவம் பஞ்சு கிளாசிக் இயற்கை மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Natural Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_1/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_1/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_1/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_1/last.png'
    ],
    tagline: 'Time-honored pure silk cotton luxury for deep natural sleep.',
    taglineTa: 'ஆழ்ந்த தூக்கத்திற்கு தூய இலவம் பஞ்சில் கைவண்ணத்தில் உருவான இயற்கை மெத்தை.',
    description: 'Hand-filled with 100% pure Ilavam Panchu (இலவம் பஞ்சு), this signature mattress offers weightless ergonomic spinal support and natural heat dissipation tailored for Tamil Nadu weather.',
    material: 'Pure Ilavam Panchu (இலவம் பஞ்சு)',
    firmnessOptions: ['Medium Soft', 'Medium', 'Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: true,
    badge: 'Signature Natural',
    basePrice: 6700,
    specs: {
      filling: '100% Pure Ceiba Pentandra (Ilavam Panchu)',
      casing: 'Unbleached 100% Organic Heavyweight Cotton Drill',
      weight: 'Approx. 18kg (Single) to 36kg (King)',
      lifespan: '15–20 Years with periodic sunning and re-carding',
      offGassing: '0% — Completely chemical-free and VOC-free'
    },
    features: [
      '100% Pure Ilavam Panchu filling harvested locally in Tamil Nadu',
      'Naturally thermo-regulating hollow fiber — dissipates body heat',
      'Hand-tufted rosettes prevent lumping and shifting over time',
      'Zero chemical flame retardants, polyurethane, or toxic VOCs',
      'True zero-motion transfer for completely undisturbed sleep'
    ]
  },
  {
    id: 'royal-ortho-mattress',
    name: 'Royal Heritage Ortho Ilavam Panchu Mattress',
    nameTa: 'ராயல் ஹெரிடேஜ் ஆர்த்தோ இலவம் பஞ்சு மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Orthopedic Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_2/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_2/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_2/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_2/last.jpg'
    ],
    tagline: 'High-density multi-layered silk cotton engineered for chronic back & spinal support.',
    taglineTa: 'முதுகுத்தண்டு மற்றும் இடுப்பு வலி நிவாரணத்திற்கு அடர்த்தியான பஞ்சடைத்த மெத்தை.',
    description: 'Designed in consultation with orthopedic principles, this mattress features an ultra-dense, multi-layered core of hand-sorted Ceiba pentandra fibers. Delivers firm lumbar support that cradles your natural spinal curvature without pressure points.',
    material: 'High-Density Pure Ilavam Panchu & Organic Cotton Damask',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: true,
    badge: 'Doctor Recommended',
    basePrice: 7300,
    specs: {
      filling: 'Selected First-Grade Dense Ilavam Panchu (No husks/seeds)',
      casing: 'Dual-quilted luxury organic damask with golden piping',
      weight: 'Approx. 22kg (Single) to 42kg (King)',
      lifespan: '20+ Years with generational re-fluffing service',
      targetSupport: 'Lumbar, sacrum, and cervical spinal decompressive contour'
    },
    features: [
      'Firm buoyant lift prevents spinal sagging common with synthetic foams',
      'Dual-tufted reinforced perimeter walls prevent edge collapse',
      'Natural moisture-wicking properties keep body cool through humid nights',
      'Hypoallergenic and naturally resistant to dust mites, mildew, and bacteria'
    ]
  },
  {
    id: 'breeze-cooling-mattress',
    name: 'Breeze Touch Ortho Cooling Mattress',
    nameTa: 'பிரிஸ் டச் ஆர்த்தோ கூலிங் மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_3/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_3/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_3/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_3/last.jpg'
    ],
    tagline: 'Advanced heat-dispersing cooling knit wrapped around pure natural silk cotton.',
    taglineTa: 'வெப்பத்தை வெளியேற்றி உடலை எப்போதும் குளிர்ச்சியாக வைக்கும் கூலிங் தொழில்நுட்ப மெத்தை.',
    description: 'Engineered specifically for warm coastal & tropical nights, combining thermal-dissipating weave tech with the plush contouring of natural Ilavam Panchu core.',
    material: 'Cooling Gel Knit & Silk Cotton Core',
    firmnessOptions: ['Medium', 'Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: true,
    badge: 'Cooling Innovation',
    basePrice: 8200,
    specs: {
      filling: '100% Pure Ceiba Pentandra Silk Cotton Core',
      casing: 'Cool-to-Touch Japanese Ice-Knit Matrix Upholstery',
      coolingIndex: 'Absorbs & dissipates excess heat 4x faster than foam',
      weight: 'Approx. 20kg (Single) to 38kg (King)'
    },
    features: [
      'Cool-to-touch ice-knit surface upholstery with micro-ventilation',
      'High-airflow fiber ventilation channels naturally disperse body heat',
      'Ergonomic zone pressure relief for spine without trapping warmth',
      'Anti-dust mite woven barrier casing with hypoallergenic properties'
    ]
  },
  {
    id: 'organic-kada-tufted-mattress',
    name: 'Organic Kada Double-Tufted Firm Mattress',
    nameTa: 'ஆர்கானிக் காடா இரட்டை தையல் உறுதியான மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Traditional Kada',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_4/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_4/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_4/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_4/last.jpg'
    ],
    tagline: 'Heavyweight unbleached kada cotton casing with artisan rosette tufts.',
    taglineTa: 'பாரம்பரிய காடா துணியில் இரட்டை நூல் தையலில் உருவான நீண்ட உழைப்பு மெத்தை.',
    description: 'Handcrafted with dense, unbleached heavy காடா (Kada) organic cotton and hand-tufted rosette ties. Exceptionally durable, breathable, and grounding for pure orthopedic sleep.',
    material: 'Pure Ilavam Panchu & Heavy Kada Cotton',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: false,
    badge: 'Artisan Heritage',
    basePrice: 8700,
    specs: {
      filling: '100% Unadulterated Ceiba Pentandra Silk Cotton',
      casing: 'Dense 320 GSM unbleached Kada organic drill',
      lifespan: '20 Years with sun-airing'
    },
    features: [
      'Heavyweight Kada cloth withstands decades of daily family use',
      'Zero synthetic dyes, bleaches, or petrochemical sizing',
      'Hand-pulled tufting rosettes lock fibers securely in place',
      'Natural heat buffer keeps bed cooler than air temperature'
    ]
  },
  {
    id: 'chettinad-teak-deep-mattress',
    name: 'Chettinad Heritage Teak Cot Deep Mattress',
    nameTa: 'செட்டிநாடு ஹெரிடேஜ் தேக்கு கட்டில் தடிமனான மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Heritage Cots',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_5/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_5/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_5/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_5/last.jpg'
    ],
    tagline: 'Deep plush luxury tailored for antique wooden cot beds.',
    taglineTa: 'செட்டிநாடு மற்றும் பாரம்பரிய தேக்கு மர கட்டில்களுக்கான பிரத்யேக தடிமன் மெத்தை.',
    description: 'Engineered specifically for heavy antique four-poster and carved Chettinad teak cots. Packed with extra loft and multi-zone cushioning to complement solid hardwood slat support.',
    material: 'Premium First-Grade Ilavam Panchu & Damask',
    firmnessOptions: ['Medium', 'Medium Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 9, 10],
    isFeatured: true,
    badge: 'Heritage Deep',
    basePrice: 8300,
    specs: {
      filling: 'Triple-carded Grade A Ceiba Silk Cotton',
      casing: 'Royal golden piping with organic cotton damask',
      bedCompatibility: 'Chettinad cots, teak beds, rosewood heirloom furniture'
    },
    features: [
      'Deep tailored profile for grand traditional beds',
      'Double border cord piping guarantees sharp tailored corners',
      'Naturally resilient against sagging and body indentations',
      'Generational re-carding support by JKR Mattress artisans'
    ]
  },
  {
    id: 'senior-care-gentle-ortho-mattress',
    name: 'Senior Care Gentle Orthopedic Silk Cotton Mattress',
    nameTa: 'முதியோர் பராமரிப்பு மூட்டு வலி நிவாரண பஞ்சு மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Senior Care',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_6/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_6/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_6/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_6/last.jpg'
    ],
    tagline: 'Gentle buoyant contour easing joint stiffness, hips & morning aches.',
    taglineTa: 'மூட்டு தேய்மானம், இடுப்பு பிடிப்பு உள்ள பெரியவர்களுக்கு மென்மையான தாங்குதல்.',
    description: 'Specially crafted for seniors requiring non-sink support that eases hip, knee, and shoulder pressure without the hard stiffness of coir or sinking feeling of foam.',
    material: 'Fluffy Silk Cotton Comfort Layer over High-Density Core',
    firmnessOptions: ['Medium Soft', 'Medium'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: false,
    badge: 'Senior Comfort',
    basePrice: 7600,
    specs: {
      filling: '100% Ceiba Pentandra with buoyant contour grading',
      benefits: 'Reduces morning stiffness, zero struggle when getting out of bed'
    },
    features: [
      'Naturally resilient lift makes sitting up and standing effortless',
      'No toxic synthetic off-gassing, safe for sensitive respiratory systems',
      'Even weight distribution soothes arthritis and sciatica tension',
      'Gentle tufting prevents focal pressure on sensitive bones'
    ]
  },
  {
    id: 'dual-comfort-reversible-mattress',
    name: 'Dual-Comfort Reversible Silk Cotton Mattress',
    nameTa: 'இரட்டை வசதி இருபுறம் புரட்டி படுக்கும் பஞ்சு மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Dual Comfort',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_7/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_7/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_7/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_7/last.jpg'
    ],
    tagline: 'Reversible design with Medium-Firm on one side and Firm on the reverse.',
    taglineTa: 'ஒருபுறம் நடுத்தர மென்மை, மறுபுறம் உறுதியான ஆதரவு தரும் புரட்டக்கூடிய மெத்தை.',
    description: 'Enjoy two firmness levels in a single mattress. One side is densely tufted for firm orthopedic spine support, while the reverse features plush silk cotton batting for relaxed comfort.',
    material: 'Zoned Density Ilavam Panchu Core',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: false,
    badge: '2-in-1 Comfort',
    basePrice: 7900,
    specs: {
      design: 'Reversible Dual-Density Construction',
      handles: '4 Reinforced cotton flip handles for easy seasonal rotation'
    },
    features: [
      'Flip easily between Medium-Firm and Firm whenever preferred',
      'Extends overall mattress lifespan with balanced dual-side wear',
      'Double-stitched structural border piping holds form cleanly',
      '100% natural, biodegradable plant fibers on both sleep surfaces'
    ]
  },
  {
    id: 'luxury-pillow-top-mattress',
    name: 'Artisan Luxury Silk-Cotton Pillow-Top Mattress',
    nameTa: 'ஆர்ட்டிசன் சொகுசு பில்லோ-டாப் இயற்கை மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Pillow Top',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_8/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_8/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_8/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_8/last.jpg'
    ],
    tagline: 'Integrated cloud-soft pillow-top layer sewn over a dense supportive foundation.',
    taglineTa: 'மேல்புறம் மென்மையான பில்லோ-டாப் மற்றும் கீழே உறுதியான தாங்குதல் கொண்ட சொகுசு மெத்தை.',
    description: 'Combines the opulent plush feeling of a 5-star resort mattress with the pure cooling health of authentic South Indian Ilavam Panchu.',
    material: 'Grade-A Pure Ilavam Panchu & Heavy Quilted Damask',
    firmnessOptions: ['Medium Soft', 'Medium', 'Medium Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 9, 10],
    isFeatured: true,
    badge: 'Artisan Luxury',
    basePrice: 8500,
    specs: {
      construction: 'Integral Euro Pillow-Top over Dense Silk Cotton Foundation',
      weight: 'Approx. 24kg (Single) to 44kg (King)'
    },
    features: [
      'Built-in pillow-top provides sumptuous pressure relief on shoulders',
      'Zero heat retention — cool silk cotton breathes all night',
      'Tailored with luxury hand-tufted rosette detailing',
      'No synthetic foams, latex adhesives, or chemical bonding agents'
    ]
  },
  {
    id: 'pure-spine-posture-mattress',
    name: 'Pure Spine Posture Alignment Natural Mattress',
    nameTa: 'பியூர் ஸ்பைன் உடல் தோரணை சீரமைக்கும் பஞ்சு மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Spine Alignment',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_9/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_9/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_9/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_9/last.jpg'
    ],
    tagline: 'Precision fiber density engineered to keep spine in zero-gravity neutral alignment.',
    taglineTa: 'முதுகெலும்பை நேராகவும் சமநிலையிலும் வைத்து ஆழ்ந்த ஓய்வு தரும் பிரத்யேக மெத்தை.',
    description: 'Eliminates lower-back curvature slump. Stuffed with precision-weighted organic silk cotton to deliver buoyant support that mirrors orthopedic health standards.',
    material: 'Dense Pure Ilavam Panchu & Unbleached Drill',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: false,
    badge: 'Spine Health',
    basePrice: 8900,
    specs: {
      spineContour: 'Neutral anatomical alignment for back and side sleepers',
      antiSagGuarantee: 'Resilient natural fibers do not develop permanent hollows'
    },
    features: [
      'Distributes upper and lower torso weight without sagging',
      'Naturally cool and resistant to humidity and dust mites',
      'Hand-stitched tufting anchors internal fibers uniformly',
      'Made from 100% renewable Tamil Nadu tree pod cotton'
    ]
  },
  {
    id: 'bespoke-antique-split-mattress',
    name: 'Bespoke Antique Cot Split-Mattress Pair',
    nameTa: 'பழங்கால கட்டில்களுக்கான ஸ்பிளிட் ஜோடி மெத்தை',
    category: 'mattresses',
    mattressType: 'standard',
    subCategory: 'Antique Split',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_10/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_10/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_10/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Natural%20Standard/product_10/last.png'
    ],
    tagline: 'Two-piece matching mattress set designed for vintage folding teak cots & easy handling.',
    taglineTa: 'பாரம்பரிய மடிப்பு கட்டில்கள் மற்றும் மாடிப்படிகளில் எளிதாக எடுத்துச்செல்லும் ஜோடி மெத்தை.',
    description: 'Perfect for heritage two-piece wooden cots or homes with narrow spiral staircases. Hand-tailored into two seamlessly matching halves with flush border piping that join without a central gap.',
    material: 'Pure Ilavam Panchu & Heavy Kada Cotton',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: false,
    badge: 'Heritage Split',
    basePrice: 9100,
    specs: {
      setIncludes: '2 Interlocking custom halves for effortless moving and cleaning',
      seamDesign: 'Precision flush-edge cord piping'
    },
    features: [
      'Solves difficult staircases and narrow doorway delivery challenges',
      'Seamless flat sleeping surface when placed together on cot',
      'Easy to air out in direct sunlight individually',
      'Hand-crafted to exact measurements of heirloom family beds'
    ]
  },

  // ==========================================
  // B. COOLING MATTRESSES (Cooling 1-5)
  // ==========================================
  {
    id: 'breeze-cooling-natural-mattress',
    name: 'Breeze-Touch Ice-Knit Natural Cooling Mattress',
    nameTa: 'பிரிஸ்-டச் ஐஸ்-நிட் இயற்கை கூலிங் மெத்தை',
    category: 'mattresses',
    mattressType: 'cooling',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_1/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_1/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_1/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_1/last.webp'
    ],
    tagline: 'Lightweight cool-to-touch phase-change surface over pure resilient Ilavam Panchu.',
    taglineTa: 'வெப்பம் தணியும் ஐஸ்-நிட் மேல்புறமும் தூய இலவம் பஞ்சு மையமும் கொண்ட மெத்தை.',
    description: 'Crafted specifically to disperse heat rapidly in coastal climates. Micro-ventilation channels in the cooling upholstery allow air to flow seamlessly through the buoyant silk cotton core.',
    material: 'Breeze Ice-Knit Upholstery & 100% Pure Ilavam Panchu',
    firmnessOptions: ['Medium Soft', 'Medium', 'Medium Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: true,
    badge: 'Cooling Essential',
    basePrice: 5600,
    specs: {
      coolingTech: 'High thermal conductivity phase-change fabric',
      filling: '100% First-Grade Ceiba Pentandra Silk Cotton',
      breathability: 'High-volume convective air circulation'
    },
    features: [
      'Surface feels cool immediately upon contact throughout the night',
      'Hypoallergenic silk cotton prevents heat trapping and night sweats',
      'Double-quilted perimeter prevents corner distortion',
      'Zero toxic synthetic memory foam or chemical gels'
    ]
  },
  {
    id: 'arctic-airflow-ortho-cooling-mattress',
    name: 'Arctic Airflow Orthopedic Cooling Silk Cotton Mattress',
    nameTa: 'ஆர்க்டிக் ஏர்-ஃப்ளோ ஆர்த்தோ கூலிங் பஞ்சு மெத்தை',
    category: 'mattresses',
    mattressType: 'cooling',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_2/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_2/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_2/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_2/last.png'
    ],
    tagline: 'Firm orthopedic spinal decompressive support with advanced moisture dissipation.',
    taglineTa: 'முதுகுத்தண்டு சீரமைப்பு மற்றும் உடல் வியர்வை வெளியேற்றும் கூலிங் தொழில்நுட்பம்.',
    description: 'Engineered for back pain sufferers who sleep hot. The dense, multi-layer Ceiba pentandra core delivers firm lumbar lift while the phase-change weave keeps sleep temperatures up to 4°C cooler.',
    material: 'High-Density Ilavam Panchu & Arctic Air-Mesh Casing',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: true,
    badge: 'Ortho Cooling',
    basePrice: 7600,
    specs: {
      airflowIndex: 'Dual-side cross-ventilation lattice',
      targetSupport: 'Spinal decompressive firm orthopedic contour'
    },
    features: [
      'Firm anatomical contour keeps lumbar aligned without sagging',
      'Advanced thermal-conductive yarns actively wick body heat away',
      'Hand-tufted rosettes ensure fiber uniformity across years of use',
      'Naturally resistant to dust mites, mold, and humidity'
    ]
  },
  {
    id: 'frost-matrix-dual-comfort-cooling-mattress',
    name: 'Frost-Matrix Dual-Comfort Reversible Cooling Mattress',
    nameTa: 'ஃப்ராஸ்ட்-மேட்ரிக்ஸ் டூயல் கம்போர்ட் கூலிங் மெத்தை',
    category: 'mattresses',
    mattressType: 'cooling',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_3/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_3/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_3/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_3/last.png'
    ],
    tagline: 'Cool-to-touch summer surface on one side, organic kada cotton on the reverse.',
    taglineTa: 'கோடை காலத்திற்கு கூலிங் அமைப்பும், குளிர் காலத்திற்கு பாரம்பரிய காடா அமைப்பும் கொண்ட மெத்தை.',
    description: 'The ultimate all-season mattress. Sleep on the Frost-Matrix side during humid summer months, and flip to the unbleached organic kada cotton side for cozy winter rest.',
    material: 'Breeze Cooling Matrix, Organic Kada & Pure Silk Cotton',
    firmnessOptions: ['Medium', 'Medium Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [5, 6, 7, 8, 10],
    isFeatured: false,
    badge: 'All-Season Reversible',
    basePrice: 8200,
    specs: {
      dualSeason: 'Summer Cool-Knit / Winter Kada Organic Cotton',
      construction: 'Reversible dual-density hand-tufted build'
    },
    features: [
      'Versatile 2-in-1 seasonal design extends mattress service life',
      'Reinforced turning handles for smooth rotation every 6 months',
      'Pure tree pod cotton core breathes continuously',
      'Zero chemical flame retardants or petrochemical polyols'
    ]
  },
  {
    id: 'glacier-luxe-eurotop-cooling-mattress',
    name: 'Glacier Luxe Euro-Top Cooling Silk Cotton Mattress',
    nameTa: 'கிளேசியர் லக்ஸ் யூரோ-டாப் கூலிங் சொகுசு மெத்தை',
    category: 'mattresses',
    mattressType: 'cooling',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_4/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_4/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_4/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_4/last.png'
    ],
    tagline: 'Sumptuous pillow Euro-top wrapped in frosty ice-knit over resilient botanical fibers.',
    taglineTa: 'மேல்புறம் யூரோ-டாப் சொகுசு அமைப்பும், உள்ளே உறுதியான பஞ்சடைப்பும் கொண்ட மெத்தை.',
    description: 'Resort-grade opulent cushioning that relieves pressure on shoulders and hips without the sauna effect of foam. Features a generous Euro-top comfort tier filled with micro-carded Ceiba cotton.',
    material: 'Ice-Knit Euro-Top & Dense Pure Ilavam Panchu',
    firmnessOptions: ['Medium Soft', 'Medium', 'Medium Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [6, 7, 8, 9, 10],
    isFeatured: true,
    badge: 'Euro-Top Luxe',
    basePrice: 11200,
    specs: {
      euroTopTier: 'Plush 2.5-inch integrated thermal-dissipating comfort tier',
      baseFoundation: 'High-density pure silk cotton core'
    },
    features: [
      'Sumptuous cloud-like surface relieves pressure on tender joints',
      'Micro-porous fabric matrix dissipates warmth 4x faster than foam',
      'Tailored corner piping ensures sharp architectural form on beds',
      'Generational re-fluffing service backed by JKR Mattress artisans'
    ]
  },
  {
    id: 'polar-heritage-masterpiece-cooling-mattress',
    name: 'Polar Heritage Masterpiece Ultra-Cooling Mattress',
    nameTa: 'போலார் ஹெரிடேஜ் மாஸ்டர்பீஸ் அல்ட்ரா-கூலிங் மெத்தை',
    category: 'mattresses',
    mattressType: 'cooling',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_5/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_5/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_5/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Cooling/product_5/last.png'
    ],
    tagline: 'Our flagship 10-inch bespoke cooling sanctuary packed with hand-sorted virgin fiber.',
    taglineTa: '10 இன்ச் தடிமனில் உருவான முதன்மையான அல்ட்ரா-கூலிங் இயற்கை மெத்தை.',
    description: 'The pinnacle of luxury botanical sleep. Stuffed with over 35kg of hand-sorted first-grade Tamil Nadu Ceiba pentandra fibers and tailored with our highest-grade Japanese ice-knit upholstery.',
    material: 'Virgin Grade Ilavam Panchu & Polar Ice-Knit Damask',
    firmnessOptions: ['Medium', 'Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'queen', 'king', 'custom'],
    availableThicknesses: [7, 8, 9, 10],
    isFeatured: true,
    badge: 'Flagship Cooling',
    basePrice: 15500,
    specs: {
      fiberGrade: '100% Hand-Sorted First-Grade Ceiba Pods (Zero husks)',
      coolingGrade: 'Maximum continuous thermal diffusion rating',
      lifespan: '20+ Years generational longevity'
    },
    features: [
      'Unsurpassed deep comfort tailored for prestigious bedrooms',
      'Maximum heat dissipation keeps surface refreshing all night',
      'Triple-tufted rosette needlework locks internal fibers in place',
      'Completely natural, biodegradable, and VOC-free'
    ]
  },

  // ==========================================
  // C. FOLDABLE MATTRESSES (Foldables 1-5)
  // ==========================================
  {
    id: 'tri-fold-portable-mattress',
    name: 'Tri-Fold Compact Guest & Lounge Mattress',
    nameTa: 'டிரை-போல்ட் மடிக்கக்கூடிய சோபா & விருந்தினர் மெத்தை',
    category: 'foldable',
    mattressType: 'foldable',
    subCategory: 'Foldable Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_1/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_1/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_1/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_1/last.webp'
    ],
    tagline: 'Versatile space-saving comfort that transforms in seconds.',
    taglineTa: 'விரைவாக மடித்து சோபாவாக மாற்றக்கூடிய இடத்தை மிச்சப்படுத்தும் மெத்தை.',
    description: 'Seamlessly transition between a luxurious sleeping surface and a comfortable lounge sofa seat. Filled with resilient natural silk cotton for effortless folding without losing shape.',
    material: 'Pure Ilavam Panchu (இலவம் பஞ்சு)',
    firmnessOptions: ['Medium', 'Medium Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: true,
    badge: 'Space Saver',
    basePrice: 7600,
    specs: {
      folding: '3-Panel precision hinge design',
      cover: 'Removable washable organic cotton slipcover included',
      handles: 'Reinforced dual carrying handles'
    },
    features: [
      '3-Panel precision folding mechanism transforms bed to lounge chair',
      'Includes durable washable organic slipcover',
      'Ideal for compact apartments, guest rooms, and studio living',
      'Lightweight easy carry handles for room-to-room mobility'
    ]
  },
  {
    id: 'diwan-foldable-daybed-pad',
    name: 'Diwan Foldable Multi-Section Daybed Pad',
    nameTa: 'திவான் மடிப்பு டே-பெட் பஞ்சு மெத்தை',
    category: 'foldable',
    mattressType: 'foldable',
    subCategory: 'Foldable Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_2/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_2/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_2/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_2/last.webp'
    ],
    tagline: 'Custom folding mattress pad engineered for compact wooden daybeds & diwans.',
    taglineTa: 'திவான் மீது படுக்கையாகவும், மடித்து சாய்மானமாகவும் பயன்படும் மெத்தை.',
    description: 'Designed to fit South Indian wooden diwans. Unfolds into a plush flat sleeping surface and folds neatly against the backrest during the day for comfortable seating.',
    material: 'Pure Ilavam Panchu & Heavy Kada Cotton',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: false,
    badge: 'Diwan Comfort',
    basePrice: 6500,
    specs: {
      foldSections: '2-to-3 Segment articulated folding panels',
      attachment: 'Reinforced corner tie cords for wooden frames'
    },
    features: [
      'Dual-purpose: day seating backrest and night bed',
      'High density tufting stays firm under prolonged seating',
      'Hand-stitched tie cords secure the pad to wooden bed railings',
      'Pure organic cotton casing stays cool in humid weather'
    ]
  },
  {
    id: 'studio-fold-to-chair-mattress',
    name: 'Studio Dual-Function Fold-to-Chair Mattress',
    nameTa: 'ஸ்டுடியோ சேர் & படுக்கை மடிக்கக்கூடிய மெத்தை',
    category: 'foldable',
    mattressType: 'foldable',
    subCategory: 'Foldable Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_3/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_3/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_3/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_3/last.webp'
    ],
    tagline: 'Accordion folding mattress that transforms into an upright accent lounge seat.',
    taglineTa: 'சிறிய அறைகளுக்கு ஏற்றவாறு நாற்காலியாகவும் மெத்தையாகவும் மாறும் அமைப்பு.',
    description: 'Ideal for studio apartments, student rooms, and reading corners. Folds into a structured floor chair with comfortable lumbar back support, then unfolds in seconds into a full-length bed.',
    material: 'High-Density Ilavam Panchu & Heavy Organic Twill',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: false,
    badge: 'Studio Living',
    basePrice: 9200,
    specs: {
      structure: 'Geometric folding core providing upright backrest support',
      casing: 'Heavyweight organic cotton drill with reinforced seams'
    },
    features: [
      'Ergonomic accordion geometry holds upright chair back without wall support',
      'Includes durable removable organic cotton slipcover',
      'Space-saving solution for modern compact living',
      'Pure natural silk cotton provides floating comfort'
    ]
  },
  {
    id: 'ortho-folding-floor-bed',
    name: 'Orthopedic Folding Floor Rest Bed',
    nameTa: 'ஆர்த்தோ மடிப்பு தரை படுக்கை மெத்தை',
    category: 'foldable',
    mattressType: 'foldable',
    subCategory: 'Foldable Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_4/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_4/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_4/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_4/last.webp'
    ],
    tagline: 'High-density firm folding panels designed specifically for healthy floor sleeping.',
    taglineTa: 'தரை படுக்கை பழக்கம் உள்ளவர்களுக்கான முதுகுத்தண்டு பாதுகாப்பு மடிப்பு மெத்தை.',
    description: 'Floor sleeping has known benefits for spinal alignment and postural decompression. This folding orthopedic bed provides the firm grounding needed without the painful bone pressure of thin mats.',
    material: 'High-Density Ilavam Panchu Core',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: false,
    badge: 'Ortho Floor',
    basePrice: 6900,
    specs: {
      orthoCore: 'High-compression Ceiba pentandra fiber fill',
      portability: 'Triple fold with Velcro closing harness'
    },
    features: [
      'Dense multi-layer construction protects hips and joints from hard floors',
      'Folds into 3 flat blocks for effortless daytime storage',
      'Pure natural kapok fiber insulates against cold floor temperatures',
      'Reinforced side seam borders ensure long structural life'
    ]
  },
  {
    id: 'zen-meditation-zafu-zabuton',
    name: 'Zen Silk Cotton Meditation Zafu & Floor Cushion Mat',
    nameTa: 'சென் தியான பஞ்சு மெத்தை & ஆசன குஷன்',
    category: 'foldable',
    mattressType: 'foldable',
    subCategory: 'Foldable Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_5/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_5/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_5/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Foldables/product_5/last.webp'
    ],
    tagline: 'Natural ergonomic floor posture support for yoga and meditation.',
    taglineTa: 'யோகா மற்றும் தியானத்திற்கு நேராக அமர உதவும் இயற்கை ஆசனம்.',
    description: 'Filled with dense resilient Ilavam Panchu. The circular Zafu cushion elevates the pelvis to allow knees to drop naturally into lotus or crossed-legged postures, while the Zabuton floor mat cushions knees and ankles from hard floors.',
    material: '100% Pure Ilavam Panchu & Heavy Canvas Cotton',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5],
    isFeatured: false,
    badge: 'Yoga & Zen',
    basePrice: 5700,
    specs: {
      kit: 'Articulated foldable Zabuton floor mat with integrated meditation loft',
      cover: 'Heavyweight organic canvas casing'
    },
    features: [
      'Natural hollow silk cotton provides firm buoyant support that does not sink',
      'Promotes upright, effortless spinal alignment during prolonged seated meditation',
      'Removable, washable sturdy cotton canvas covers',
      'Convenient side carry handle for temple and studio transport'
    ]
  },

  // ==========================================
  // D. ROLLING MATTRESSES (Rolling 1-5)
  // ==========================================
  {
    id: 'floor-gaddi-bed',
    name: 'Traditional Handcrafted Ilavam Panchu Floor Gaddi',
    nameTa: 'பாரம்பரிய கைத்தையல் இலவம் பஞ்சு தரை மெத்தை (கத்தி / Gaddi)',
    category: 'foldable',
    mattressType: 'rollable',
    subCategory: 'Rolling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_1/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_1/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_1/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_1/last.webp'
    ],
    tagline: 'Versatile roll-up mattress for authentic floor sleeping, yoga & guests.',
    taglineTa: 'தரை படுக்கை, யோகா மற்றும் விருந்தினர்களுக்கான சுருட்டக்கூடிய இயற்கை மெத்தை.',
    description: 'A traditional Indian roll-up bedding staple. Hand-tufted with pure Ilavam Panchu inside a durable organic cotton shell, featuring attached cotton twill ties. Perfect for healthy floor rest, meditation rooms, guest hosting, and afternoon reading.',
    material: 'Pure Ilavam Panchu & Heavy Unbleached Cotton Drill',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: true,
    badge: 'Traditional Heritage',
    basePrice: 1600,
    specs: {
      mechanism: 'Rolls up easily in seconds with attached cotton tie cords',
      casing: 'Thick unbleached organic cotton twill (காடா துணி)',
      versatility: 'Ideal for floor sleeping, yoga, meditation, guest beds, and daybeds'
    },
    features: [
      'Rolls up smoothly for daytime space saving and easy closet storage',
      'Hand-tufted diamond stitching retains uniform fiber distribution',
      'Provides firm, grounding spinal alignment favored in traditional living',
      'Naturally breathable — prevents dampness and moisture buildup from floor'
    ]
  },
  {
    id: 'travel-rollup-portable-bed',
    name: 'Travel Roll-Up Portable Sleeping Bed with Carry Straps',
    nameTa: 'பயணங்களுக்கான சுருட்டக்கூடிய போர்ட்டபிள் மெத்தை',
    category: 'foldable',
    mattressType: 'rollable',
    subCategory: 'Rolling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_2/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_2/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_2/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_2/last.webp'
    ],
    tagline: 'Compact roll-up bed with built-in shoulder harness for travel, ashrams & retreats.',
    taglineTa: 'பயணங்கள், ஆசிரமங்கள் மற்றும் தங்குமிடங்களுக்கு தோளில் எளிதாக எடுத்துச்செல்லும் மெத்தை.',
    description: 'Weighing under 5kg, this portable Ilavam Panchu travel bed rolls into a neat cylinder with integrated heavy-duty canvas shoulder straps and quick-release wooden toggle buttons.',
    material: 'Pure Ilavam Panchu & Heavy Canvas Casing',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: true,
    badge: 'Travel Friendly',
    basePrice: 2300,
    specs: {
      carryDesign: 'Dual shoulder canvas harness with toggle closures',
      weight: 'Approx. 4.8kg — easy to fit in car trunks or train berths'
    },
    features: [
      'Integrated heavy canvas shoulder strap for effortless hands-free carry',
      'Weighs under 5kg — perfect for car trunks and train journeys',
      'Zero synthetic foam chemical smells in unfamiliar hotel rooms',
      'Provides hygienic natural sleeping surface anywhere'
    ]
  },
  {
    id: 'single-guest-compact-gaddi',
    name: 'Traditional Single Guest Gaddi (Compact Roll)',
    nameTa: 'விருந்தினர் தனிநபர் சுருட்டு மெத்தை (கத்தி)',
    category: 'foldable',
    mattressType: 'rollable',
    subCategory: 'Rolling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_3/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_3/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_3/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_3/last.webp'
    ],
    tagline: 'Slim roll-away bed that tucks into any wardrobe or cupboard.',
    taglineTa: 'அலமாரியில் சுருட்டி வைக்கக்கூடிய அவசர விருந்தினர் இயற்கை மெத்தை.',
    description: 'The ultimate Indian hospitality bed. Keep 1 or 2 rolled in your linen cupboard and unfurl them in seconds to offer guests a plush, cooling, natural sleep surface on any floor.',
    material: 'Pure Ilavam Panchu & Unbleached Kada',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: false,
    badge: 'Guest Essential',
    basePrice: 2650,
    specs: {
      storageVolume: 'Stores in less than 1 square foot of closet space',
      closure: 'Attached heavy cotton twill tie cords'
    },
    features: [
      'Stores in less than 1 square foot of floor space when rolled',
      'Pure plant fiber ensures zero chemical odors for sensitive guests',
      'Attached cotton ties keep roll neat and tight',
      'Washable cotton slipcover can be added easily'
    ]
  },
  {
    id: 'balcony-verandah-canvas-lounger',
    name: 'Heavy Canvas Balcony & Verandah Lounger Mat',
    nameTa: 'பால்கனி மற்றும் திண்ணைக்கான ஹெவி கேன்வாஸ் மெத்தை',
    category: 'foldable',
    mattressType: 'rollable',
    subCategory: 'Rolling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_4/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_4/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_4/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_4/last.webp'
    ],
    tagline: 'Rugged weather-resistant organic canvas shell for verandahs, thinnai & patios.',
    taglineTa: 'திண்ணை மற்றும் பால்கனிகளில் ஓய்வெடுக்க உறுதியான காடா கேன்வாஸ் மெத்தை.',
    description: 'Built for South Indian verandahs (திண்ணை) and breezy balconies. Wrapped in tough, unbleached 380 GSM duck canvas that resists floor abrasion while keeping you naturally cushioned.',
    material: 'Pure Ilavam Panchu & Heavy Duck Canvas',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'double', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: false,
    badge: 'Outdoor Lounger',
    basePrice: 3100,
    specs: {
      fabricWeight: '380 GSM unbleached heavy duck canvas',
      durability: 'Abrasion-resistant for terracotta, stone, and tile verandahs'
    },
    features: [
      'Heavy 380 GSM duck canvas resists dust, pet claws, and rough floors',
      'Hollow Ceiba fibers do not absorb humidity or mildew',
      'Rolls up easily for evening indoor storage',
      'Hand-tufted rosettes maintain uniform cushioning'
    ]
  },
  {
    id: 'pranayama-natural-yoga-mat',
    name: 'Pranayama & Restorative Yoga Silk Cotton Mat',
    nameTa: 'பிராணாயாமம் மற்றும் யோகா இயற்கை பஞ்சு பாய்',
    category: 'foldable',
    mattressType: 'rollable',
    subCategory: 'Rolling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_5/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_5/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_5/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Rolling/product_5/last.webp'
    ],
    tagline: 'Natural cushioning for shavasana, pranayama & joints.',
    taglineTa: 'சவாசனம் மற்றும் மூச்சுப் பயிற்சிக்கு உகந்த இயற்கையான தடிமன் பஞ்சு பாய்.',
    description: 'Say goodbye to toxic PVC rubber yoga mats. This 100% natural organic cotton and Ilavam Panchu mat provides deep thermal insulation, joint protection, and pure breathability for daily yoga sadhana.',
    material: 'Pure Ilavam Panchu & Organic Kada Cotton',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: false,
    badge: 'Yoga Sadhana',
    basePrice: 3450,
    specs: {
      yogaForm: 'Designed for Restorative Yoga, Yin Yoga, Pranayama, and Yoga Nidra',
      purity: '100% Zero Plastic, Petrochemical-free'
    },
    features: [
      'Zero plastic, petrochemical PVC, TPE, or chemical smells',
      'Cushions sensitive spine, tailbone, and knees during floor postures',
      'Hollow fiber matrix insulates against floor chill during Shavasana',
      'Rolls up neatly with matching woven cotton carry cord'
    ]
  },

  // ==========================================
  // E. BABY MATTRESSES (Baby 1-5)
  // ==========================================
  {
    id: 'pure-organic-baby-cot-mattress',
    name: 'Pure Organic Ilavam Panchu Baby Cot Mattress',
    nameTa: 'குழந்தைகள் தொட்டில் & கட்டில் இயற்கை பஞ்சு மெத்தை',
    category: 'baby-nursery',
    mattressType: 'baby',
    subCategory: 'Infant Cot',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_1/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_1/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_1/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_1/last.png'
    ],
    tagline: 'Breathable, firm, and gentle natural mattress for peaceful infant sleep.',
    taglineTa: 'குழந்தைகளின் மென்மையான உடலுக்கு ரசாயனமற்ற, சமதள உறுதியான இயற்கை மெத்தை.',
    description: 'Crafted with care using unbleached organic cotton and 100% pure Ilavam Panchu. Delivers the firm flat surface essential for healthy infant spinal support and safe sleeping.',
    material: 'Pure Ilavam Panchu (இலவம் பஞ்சு)',
    firmnessOptions: ['Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5],
    isFeatured: true,
    badge: 'Gentle Care',
    basePrice: 2650,
    specs: {
      safety: 'Firm flat surface in line with pediatric sleep guidelines',
      purity: '100% GOTS certified organic cotton shell, unbleached',
      allergens: 'Naturally hypoallergenic, anti-dust mite, zero chemical retardants'
    },
    features: [
      '100% natural, unbleached, chemical-free materials',
      'Firm spinal support surface preventing dangerous infant sinking',
      'Naturally hypoallergenic & anti-microbial plant fibers',
      'Bespoke sizes tailored to custom wooden cribs, cradles, and cots'
    ]
  },
  {
    id: 'wooden-crib-cradle-insert',
    name: 'Handcrafted Wooden Crib & Cradle Mattress Insert',
    nameTa: 'மரத் தொட்டில் மற்றும் மரக் கட்டில் இயற்கை மெத்தை',
    category: 'baby-nursery',
    mattressType: 'baby',
    subCategory: 'Wooden Cradle',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_2/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_2/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_2/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_2/last.webp'
    ],
    tagline: 'Custom-measured natural cotton insert tailored to vintage and heirloom baby cribs.',
    taglineTa: 'பாரம்பரிய மரத்தொட்டில்களுக்கு சரியான அளவில் தைத்து தரப்படும் இயற்கை மெத்தை.',
    description: 'Heirloom wooden cribs often have unique dimensions that standard store foam pads cannot fit safely. We hand-tailor each crib insert down to the quarter inch using pure silk cotton for a snug, gap-free fit.',
    material: 'Pure Ilavam Panchu & Heavy Kada Cotton',
    firmnessOptions: ['Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5],
    isFeatured: false,
    badge: 'Custom Sized',
    basePrice: 1900,
    specs: {
      gapFit: 'Custom-made for 100% zero-gap perimeter with crib railings',
      filling: '100% Pure Ceiba Pentandra Silk Cotton'
    },
    features: [
      'Zero gap between mattress and wooden crib slats for maximum safety',
      'Firm flat pediatric support that protects tender spinal development',
      '100% plant-based with zero synthetic polyurethane or glue emissions',
      'Breathable core prevents overheating and sweaty wake-ups'
    ]
  },
  {
    id: 'toddler-transition-organic-mattress',
    name: 'Toddler Transition Bed Organic Mattress',
    nameTa: 'வளரும் குழந்தைகளுக்கான டிரான்சிஷன் பஞ்சு மெத்தை',
    category: 'baby-nursery',
    mattressType: 'baby',
    subCategory: 'Toddler Bed',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_3/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_3/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_3/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_3/last.webp'
    ],
    tagline: 'Natural mattress for toddlers graduating from cribs to their first cot bed.',
    taglineTa: 'தொட்டிலில் இருந்து சிறுவர் கட்டிலுக்கு மாறும் குழந்தைகளுக்கான இயற்கை மெத்தை.',
    description: 'Engineered for children aged 2 to 6 transitioning into their first independent bed. Offers gentle buoyant posture support tailored to rapid bone and spinal growth phases.',
    material: 'Pure Ilavam Panchu & Heavy Kada Casing',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5],
    isFeatured: false,
    badge: 'Growing Child',
    basePrice: 2650,
    specs: {
      growthSupport: 'Ergonomic buoyancy accommodating active spinal growth phases',
      shell: 'Reinforced organic Kada cotton twill'
    },
    features: [
      'Supports healthy spine curvature during critical growth spurts',
      'Naturally resistant to dust mites, bedbugs, and fungal spore formation',
      'Zero synthetic VOC off-gassing ensures fresh clean bedroom air',
      'Hand-tufted rosettes withstand jumping and playful toddlers'
    ]
  },
  {
    id: 'organic-muslin-baby-nest',
    name: 'Organic Muslin Baby Sleep Nest (Co-Sleeper)',
    nameTa: 'ஆர்கானிக் மஸ்லின் குழந்தை பாதுகாப்பு கூண்டு மெத்தை (Nest)',
    category: 'baby-nursery',
    mattressType: 'baby',
    subCategory: 'Organic Nest',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_4/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_4/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_4/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_4/last.webp'
    ],
    tagline: 'Protective cushioned bumper nest creating a secure cocoon for newborn co-sleeping.',
    taglineTa: 'பெற்றோருடன் படுக்கும்போது குழந்தை பாதுகாப்பாக உறங்க உதவும் பம்பர் கூண்டு மெத்தை.',
    description: 'Surrounds your newborn with a gentle, breathable bumper filled with pure Ilavam Panchu. Creates a cozy, womb-like barrier that prevents accidental rolling while keeping baby safe during co-sleeping.',
    material: 'Pure Ilavam Panchu & 100% Organic Muslin',
    firmnessOptions: ['Gentle Support', 'Medium Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5],
    isFeatured: true,
    badge: 'Co-Sleeper Nest',
    basePrice: 2350,
    specs: {
      nestDesign: '360-degree padded perimeter roll with flat orthopedic base pad',
      washability: 'Removable, machine-washable organic muslin slip'
    },
    features: [
      'Padded bumper perimeter prevents infant from rolling onto parental bed',
      'Firm bottom pad supports infant back in safe pediatric alignment',
      'Fully unzips with removable, machine-washable organic muslin slip',
      'Ultra-lightweight and portable for travel and living room napping'
    ]
  },
  {
    id: 'portable-baby-travel-mattress',
    name: 'Portable Roll-Up Baby Travel Bed with Carry Bag',
    nameTa: 'பயணங்களுக்கான சுருட்டக்கூடிய குழந்தை படுக்கை',
    category: 'baby-nursery',
    mattressType: 'baby',
    subCategory: 'Travel Crib',
    image: 'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_5/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_5/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_5/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/mattress/Baby/product_5/last.png'
    ],
    tagline: 'Compact rolling nursery mattress ensuring pure chemical-free sleep on journeys.',
    taglineTa: 'பயணங்களின் போது குழந்தை பழக்கப்பட்ட இயற்கை சுகத்துடன் தூங்க சுருட்டு மெத்தை.',
    description: 'Never worry about dirty hotel bedding or toxic chemicals when visiting grandparents or traveling. Unrolls in seconds to provide your infant with their familiar, hygienic silk cotton sleep space.',
    material: 'Pure Ilavam Panchu & Washable Organic Shell',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['single', 'custom'],
    availableThicknesses: [4, 5],
    isFeatured: false,
    badge: 'Travel Safe',
    basePrice: 2450,
    specs: {
      mobility: 'Includes washable organic cotton tote carry bag with shoulder sling',
      weight: 'Approx. 2.4kg light roll'
    },
    features: [
      'Rolls into a compact cylinder weighing just 2.4kg',
      'Includes breathable organic canvas carry bag with shoulder strap',
      'Keeps baby on their accustomed natural sleep surface away from home',
      'Removable machine-washable cotton slipcover included'
    ]
  },

  // ==========================================
  // F. PILLOWS & BOLSTERS (Pillows 1-10)
  // ==========================================
  {
    id: 'signature-ilavam-panchu-pillow',
    name: 'Signature Ilavam Panchu Natural Pillow',
    nameTa: 'சிக்னேச்சர் தூய இலவம் பஞ்சு தலையணை',
    category: 'pillows',
    subCategory: 'Signature Natural',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_1/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_1/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_1/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_1/last.png'
    ],
    tagline: 'Pure, lofty neck alignment crafted from 100% natural silk cotton.',
    taglineTa: 'கழுத்து வளைவுக்கு ஏற்ப சரியான உயரத்தில் தைக்கப்படும் இயற்கை தலையணை.',
    description: 'Rest your head on the authentic comfort of traditional Ilavam Panchu. Designed to maintain loft and cradle the cervical spine in perfect alignment without trapping body heat.',
    material: 'Pure Ilavam Panchu (இலவம் பஞ்சு)',
    firmnessOptions: ['Soft', 'Medium Soft', 'Medium', 'Firm'],
    availableSizes: ['regular', 'full', 'king'],
    availableLofts: [3.0, 3.5, 4.0, 4.5, 5.0],
    isFeatured: true,
    badge: 'Customer Favorite',
    basePrice: 475,
    features: [
      '100% pure natural silk cotton interior from Ceiba pentandra pods',
      'Hand-tufted border piping for structural shape retention',
      'Breathable, allergen-resistant organic cotton shell',
      'Customizable loft height for side, back, and stomach sleepers'
    ]
  },
  {
    id: 'diwan-bolsters-set',
    name: 'Traditional Ilavam Panchu Diwan Bolster Pair (உருண்டை தலையணை)',
    nameTa: 'பாரம்பரிய இலவம் பஞ்சு திவான் உருண்டை தலையணை ஜோடி',
    category: 'pillows',
    subCategory: 'Heritage Diwan',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_2/main.png',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_2/main.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_2/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_2/last.png'
    ],
    tagline: 'Classic hand-stuffed cylindrical bolsters for Diwans, Daybeds & side support.',
    taglineTa: 'திவான், ஊஞ்சல் மற்றும் சாய்மானத்திற்கு ஏற்ற பாரம்பரிய உருண்டை தலையணைகள்.',
    description: 'A set of two authentic South Indian cylindrical bolsters (உருண்டை தலையணை). Stuffed densely with 100% pure Ilavam Panchu, these bolsters provide firm lumbar and armrest support on traditional teak Diwan cots, swings, and daybeds.',
    material: 'Pure Ilavam Panchu & Heavy Cotton Casing',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['bolster'],
    availableLofts: [3.0, 3.5, 4.0, 4.5, 5.0],
    isFeatured: true,
    badge: 'Heritage Set',
    basePrice: 370,
    specs: {
      quantity: 'Pair (2 Cylindrical Bolsters included)',
      dimensions: '30 inches length × 9 inches diameter (28" circumference)',
      filling: 'Dense packed Ilavam Panchu (approx. 2.5kg per bolster)',
      closure: 'Decorative gathered end-ties with brass ring accents'
    },
    features: [
      'Dense packed silk cotton retains shape under daily lumbar and elbow pressure',
      'Includes traditional gathered ends with decorative cord detailing',
      'Perfect match for traditional Diwan sets, daybeds, and teakwood swings',
      'Naturally cool and resistant to moisture accumulation'
    ]
  },
  {
    id: 'cool-touch-contour-pillow',
    name: 'Breeze-Touch Contour Neck Pillow',
    nameTa: 'பிரிஸ்-டச் கூலிங் கழுத்து பாதுகாப்பு தலையணை',
    category: 'pillows',
    subCategory: 'Cooling Collection',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_3/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_3/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_3/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_3/last.png'
    ],
    tagline: 'Thermal management paired with ergonomic cervical support.',
    taglineTa: 'இரவு வியர்வையை தடுத்து கழுத்து வலியை போக்கும் கூலிங் தலையணை.',
    description: 'Features a heat-dissipating cooling shell over a silk-cotton heart, preventing night sweats and soothing neck fatigue for a calm sleep.',
    material: 'Cooling Gel Knit & Silk Cotton',
    firmnessOptions: ['Medium Soft', 'Medium', 'Medium Firm'],
    availableSizes: ['regular', 'full', 'king'],
    availableLofts: [3.0, 3.5, 4.0, 4.5],
    isFeatured: false,
    badge: 'Cooling Pillows',
    basePrice: 300,
    features: [
      'Phase-change cool woven cover feels refreshing instantly',
      'Targeted neck strain relief contour gently supports cervical curve',
      'Ultra-breathable micro-ventilation prevents heat buildup'
    ]
  },
  {
    id: 'ayurvedic-cervical-roll-pillow',
    name: 'Ayurvedic Ergonomic Cervical Neck Roll Pillow',
    nameTa: 'ஆயுர்வேத செர்விகல் கழுத்து உருளை தலையணை',
    category: 'pillows',
    subCategory: 'Cervical Therapy',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_4/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_4/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_4/middle.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_4/last.jpg'
    ],
    tagline: 'Compact cylindrical roll designed to restore healthy cervical spine curvature.',
    taglineTa: 'கழுத்து எலும்பு தேய்மானம் மற்றும் கணினி பணி வலிகளுக்கு உகந்த உருளை தலையணை.',
    description: 'Recommended for those experiencing desk fatigue, neck stiffness, or cervical spondylosis. Tucks under the neck while back-sleeping to naturally decompress neck vertebrae without tilting the head forward.',
    material: 'Pure Ilavam Panchu (இலவம் பஞ்சு)',
    firmnessOptions: ['Medium Firm'],
    availableSizes: ['regular'],
    availableLofts: [3.0, 3.5, 4.0],
    isFeatured: false,
    badge: 'Posture Therapy',
    basePrice: 525,
    features: [
      'Decompresses cervical spine vertebrae during night rest',
      'Compact cylinder fits naturally behind neck',
      'Dense silk cotton filling does not flatten over the night',
      'Comes with removable unbleached organic cotton slip'
    ]
  },
  {
    id: 'pregnancy-maternity-body-pillow',
    name: 'Full-Body Ergonomic Maternity & Side-Sleeper Pillow',
    nameTa: 'கர்ப்பிணிகள் மற்றும் முழு உடல் பக்கவாட்டு தலையணை',
    category: 'pillows',
    subCategory: 'Maternity & Body',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_5/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_5/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_5/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_5/last.webp'
    ],
    tagline: 'Contoured natural silk-cotton support for hips, back & maternity comfort.',
    taglineTa: 'கர்ப்ப கால இடுப்பு வலி மற்றும் முதுகுத்தண்டுக்கு சுகமான பஞ்சு தலையணை.',
    description: 'Hand-stuffed with hypoallergenic Ilavam Panchu, this elongated contour pillow supports the abdomen, stabilizes hips, and relieves spinal torque for expectant mothers and side sleepers.',
    material: 'Pure Ilavam Panchu & Organic Muslin',
    firmnessOptions: ['Medium Soft', 'Medium'],
    availableSizes: ['regular', 'full', 'king', 'custom'],
    availableLofts: [3.0, 3.5, 4.0, 4.5],
    isFeatured: true,
    badge: 'Maternity Care',
    basePrice: 630,
    features: [
      'Cradles belly and stabilizes pelvis to reduce sciatica pain',
      '100% organic filling stays cool against body through the night',
      'Washable zippered organic muslin slipcover included',
      'Zero synthetic microfibers or memory foam chemicals'
    ]
  },
  {
    id: 'traditional-flat-headrest-pillow',
    name: 'Traditional Low-Profile Flat Headrest (தட்டை தலையணை)',
    nameTa: 'பாரம்பரிய தட்டை பஞ்சு தலையணை',
    category: 'pillows',
    subCategory: 'Traditional Flat',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_6/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_6/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_6/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_6/last.png'
    ],
    tagline: 'Authentic 2.5–3.0" flat profile favored by elders & stomach sleepers.',
    taglineTa: 'தலையை அதிகம் உயர்த்தாமல் இயல்பாக வைக்க விரும்பும் பெரியவர்களுக்கான தட்டை தலையணை.',
    description: 'Crafted according to ancestral Tamil Nadu traditions. A gentle, low-loft headrest that prevents forward neck tilting and maintains neutral throat and airway alignment.',
    material: 'Pure Ilavam Panchu & Organic Kada Fabric',
    firmnessOptions: ['Medium', 'Medium Firm'],
    availableSizes: ['regular', 'full'],
    availableLofts: [2.5, 3.0],
    isFeatured: false,
    badge: 'Heritage Low-Loft',
    basePrice: 520,
    features: [
      'Gentle low elevation prevents neck hyperextension',
      'Ideal for stomach and back sleepers preferring firm grounding',
      'Hand-tufted border prevents fiber displacement',
      'Naturally breathable plant cotton'
    ]
  },
  {
    id: 'dual-chamber-cloud-pillow',
    name: 'Dual-Chamber Extra-Plush Cloud Pillow',
    nameTa: 'டூயல்-சேம்பர் கிளவுட் சொகுசு பஞ்சு தலையணை',
    category: 'pillows',
    subCategory: 'Hotel Cloud',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_7/main.webp',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_7/main.webp',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_7/middle.webp',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_7/last.webp'
    ],
    tagline: 'Supportive inner core surrounded by a fluffy silk-cotton outer chamber.',
    taglineTa: 'உள்ளே உறுதியான மையப்பகுதி, வெளியே மேகம் போன்ற மென்மை கொண்ட தலையணை.',
    description: 'Combines the supportive structure needed for spinal health with the ultra-plush sensory feel of luxury hotel bedding. Stuffed exclusively with virgin grade Ceiba fibers.',
    material: '100% Virgin Grade Ilavam Panchu & 300TC Cotton Sateen',
    firmnessOptions: ['Soft', 'Medium Soft'],
    availableSizes: ['regular', 'full', 'king'],
    availableLofts: [3.0, 3.5, 4.0, 4.5, 5.0],
    isFeatured: false,
    badge: 'Cloud Plush',
    basePrice: 640,
    features: [
      'Dual-chamber engineering prevents bottoming out',
      'Pure silk cotton provides floating buoyant neck cradle',
      'Hypoallergenic shell woven from 300-thread-count organic cotton',
      'Retains fluffiness for years with occasional sun-airing'
    ]
  },
  {
    id: 'meditation-zafu-cushion',
    name: 'Meditation Sitting Zafu Floor Cushion',
    nameTa: 'தியான அமர்வு சாஃபு (Zafu) வட்ட பஞ்சு ஆசனம்',
    category: 'pillows',
    subCategory: 'Meditation Zafu',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_8/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_8/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_8/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_8/last.png'
    ],
    tagline: 'Circular pleated silk-cotton cushion elevating hips for upright spinal posture.',
    taglineTa: 'தியானத்தில் முதுகுத்தண்டு நேராக இருக்க இடுப்பை உயர்த்தும் பாரம்பரிய பஞ்சு ஆசனம்.',
    description: 'Stuffed tightly with dense pure Ilavam Panchu. Elevates the hips above the knees, allowing for effortless, prolonged cross-legged meditation and pranayama without leg numbness.',
    material: 'Dense Ilavam Panchu & Heavy Cotton Canvas',
    firmnessOptions: ['Firm'],
    availableSizes: ['regular'],
    availableLofts: [3.0, 3.5, 4.0, 4.5, 5.0],
    isFeatured: false,
    badge: 'Yoga & Zen',
    basePrice: 520,
    features: [
      'Firm buoyant lift keeps pelvic tilt in optimal ergonomic posture',
      'Pleated perimeter distributes internal pressure evenly',
      'Sturdy fabric carry handle for effortless transport',
      '100% plant-based, cruelty-free, and biodegradable'
    ]
  },
  {
    id: 'kada-tufted-throw-pillows',
    name: 'Kada Organic Cotton Hand-Tufted Throw Pillow Set (Pair)',
    nameTa: 'காடா ஆர்கானிக் கைத்தையல் சோபா தலையணை ஜோடி',
    category: 'pillows',
    subCategory: 'Hand-Tufted Kada',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_9/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_9/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_9/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_9/last.png'
    ],
    tagline: 'Pair of handcrafted square accent cushions with rosette tufts for Diwans & Sofas.',
    taglineTa: 'சோபா மற்றும் திவான்களுக்கு கைவண்ணத்தில் உருவான சதுர குஷன் தலையணை ஜோடி.',
    description: 'A charming set of two 18" × 18" tufted accent cushions. Adds an authentic earthy warmth to teakwood diwans, swings, and rattan chairs.',
    material: 'Pure Ilavam Panchu & Natural Kada Twill',
    firmnessOptions: ['Medium Firm'],
    availableSizes: ['regular'],
    availableLofts: [3.0, 3.5, 4.0],
    isFeatured: false,
    badge: 'Artisan Decor',
    basePrice: 460,
    features: [
      'Includes 2 Handcrafted square cushions',
      'Distinctive center hand-tufted rosette buttons',
      'Unbleached natural cotton matches all wooden furniture styles',
      'Long-lasting resilience under daily lounging pressure'
    ]
  },
  {
    id: 'king-ortho-contour-pillow',
    name: 'King-Size Ortho Cervical Contour Headrest',
    nameTa: 'கிங்-சைஸ் ஆர்த்தோ செர்விகல் தலையணை',
    category: 'pillows',
    subCategory: 'King Contour',
    image: 'https://ik.imagekit.io/n3iocr65b/products/pillows/product_10/main.jpg',
    gallery: [
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_10/main.jpg',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_10/middle.png',
      'https://ik.imagekit.io/n3iocr65b/products/pillows/product_10/last.png'
    ],
    tagline: 'Spacious 30" × 20" luxury pillow with reinforced gusset for broad shoulders.',
    taglineTa: 'அகலமான தோள்பட்டை கொண்டவர்களுக்கு தகுந்த பெரிய அளவிலான ஆர்த்தோ தலையணை.',
    description: 'Generously proportioned for King beds and larger builds. The 2-inch perimeter gusset maintains uniform thickness from center to edge, providing continuous cervical support as you turn.',
    material: 'Pure Ilavam Panchu & Heavy Damask',
    firmnessOptions: ['Medium', 'Medium Firm', 'Firm'],
    availableSizes: ['regular', 'full', 'king'],
    availableLofts: [3.0, 3.5, 4.0, 4.5, 5.0],
    isFeatured: false,
    badge: 'King Comfort',
    basePrice: 350,
    features: [
      'Extra-wide 30" × 20" sleeping surface prevents head rolling off',
      'Box-gusseted perimeter prevents edge flattening',
      'Naturally thermo-cooling silk cotton core',
      'Reinforced seams with double piped borders'
    ]
  },

  // ==========================================
  // G. CUSTOM & HERITAGE (2 Products)
  // ==========================================
  {
    id: 'custom-bespoke-mattress-insert',
    name: 'Custom Dimension Mattress & Cushion Insert',
    nameTa: 'தனிப்பயன் கட்டில் அளவுகள் & சோபா குஷன் மெத்தை',
    category: 'custom',
    subCategory: 'Custom Products',
    image: customTeakImg,
    gallery: [customTeakImg, sideProfileImg, naturalImg],
    tagline: 'Hand-tailored to any width, length, shape, or antique bed frame.',
    taglineTa: 'பழைய தேக்கு மரக் கட்டில்கள் மற்றும் பிரத்யேக அளவுகளுக்கு ஏற்ப தைத்து தரப்படும்.',
    description: 'Have a uniquely sized traditional wooden bed, couch seating, teak swing, or custom architectural niche? We handcraft exact custom dimensions down to the quarter inch.',
    material: 'Pure Ilavam Panchu or Customized Blend',
    firmnessOptions: ['Soft', 'Medium Soft', 'Medium', 'Medium Firm', 'Firm'],
    availableSizes: ['custom'],
    availableThicknesses: [4, 5, 6, 7, 8, 9, 10],
    isFeatured: true,
    badge: 'Made-To-Order',
    basePrice: null,
    features: [
      'Precision measurement verification service via WhatsApp consultation',
      'Choice of rounded corners, notches, or split designs for heritage beds',
      'Ideal for teak beds, bay windows, sofas, diwans, and swinging beds',
      'Direct WhatsApp quotation with fast factory delivery estimate'
    ]
  },
  {
    id: 'traditional-oonjal-swing-cushion',
    name: 'Heritage Oonjal (Swing) Mattress & Bolster Suite (உஞ்சல் மெத்தை)',
    nameTa: 'பாரம்பரிய ஊஞ்சல் மெத்தை & உருண்டை தலையணை செட்',
    category: 'custom',
    subCategory: 'Heritage Swings',
    image: customTeakImg,
    gallery: [customTeakImg, diwanBolstersImg, naturalImg],
    tagline: 'Bespoke padded seating mattress and bolster set for teakwood swings.',
    taglineTa: 'தேக்கு மர ஊஞ்சல்களுக்கு சங்கிலி இடைவெளிகளுடன் தைக்கப்படும் சொகுசு மெத்தை.',
    description: 'Specially crafted for traditional South Indian wooden Oonjal (swings). Built with high-density hand-tufted Ilavam Panchu to withstand swinging movement and heavy seating, complemented with brass chain corner cutouts and matching side bolsters.',
    material: 'High-Density Ilavam Panchu & Heavyweight Kada Fabric',
    firmnessOptions: ['Medium Firm', 'Firm'],
    availableSizes: ['custom'],
    availableThicknesses: [4, 5, 6],
    isFeatured: true,
    badge: 'Artisan Special',
    basePrice: null,
    features: [
      'Custom cutouts for brass swing chains and wooden railings',
      'High density tufting that stays resilient and does not bunch during swinging',
      'Includes 2 matching cylindrical bolsters for armrest comfort',
      'Direct consultation with master artisan J. Kartheeshwaran'
    ]
  }
];

/**
 * Isolated pricing function for custom mattress dimensions
 * Preserves custom size quote interface without arbitrary invented rates.
 */
export function calculateCustomMattressPrice(_product, _widthInches, _lengthInches, _thicknessInches) {
  // Clear, isolated function hook for custom made-to-order quotations
  return null;
}

/**
 * Reusable dynamic pricing function for mattresses:
 * Mattress Price = Base Price + Thickness Charge + Size Charge
 * 
 * Rules:
 * - Default size: Single (0 steps)
 * - Size increments: Double (1 step, ₹1,800), Queen (2 steps, ₹3,600), King (3 steps, ₹5,400)
 * - Default thickness: 5 inches
 * - Thickness increment: ₹1,500 per additional inch
 */
export function calculateMattressPrice(basePrice, sizeId = 'single', thickness = 5) {
  if (basePrice == null) return null;
  if (sizeId === 'custom') return null;

  const sizeSteps = {
    single: 0,
    double: 1,
    queen: 2,
    king: 3
  };

  const defaultThickness = 5;
  const sizeStep = sizeSteps[sizeId] ?? 0;
  const sizeCharge = sizeStep * 1800;

  const numericThickness = typeof thickness === 'number' ? thickness : (parseFloat(thickness) || defaultThickness);
  const thicknessDiff = Math.max(0, numericThickness - defaultThickness);
  const thicknessCharge = thicknessDiff * 1500;

  return Math.round(basePrice + sizeCharge + thicknessCharge);
}

/**
 * Reusable dynamic pricing function for pillows:
 * Pillow Price = Base Price + Loft Charge + Size Charge
 * 
 * Rules:
 * - Default size: Regular (0 steps)
 * - Size increments: Full Size (1 step, ₹250), King Size (2 steps, ₹500), Bolster (0 steps)
 * - Default loft: 3.0 inches
 * - Loft increment: ₹150 per additional inch (proportional for half-inch steps, e.g. 0.5" = ₹75)
 */
export function calculatePillowPrice(basePrice, sizeId = 'regular', loft = 3.0) {
  if (basePrice == null) return null;
  if (sizeId === 'custom') return null;

  const sizeSteps = {
    regular: 0,
    full: 1,
    king: 2,
    bolster: 0
  };

  const defaultLoft = 3.0;
  const sizeStep = sizeSteps[sizeId] ?? 0;
  const sizeCharge = sizeStep * 250;

  const numericLoft = typeof loft === 'number' ? loft : (parseFloat(loft) || defaultLoft);
  const loftDiff = Math.max(0, numericLoft - defaultLoft);
  const loftCharge = loftDiff * 150;

  return Math.round(basePrice + sizeCharge + loftCharge);
}

/**
 * Universal dynamic price getter:
 * Calculates price cleanly from base price without mutation or accumulated charges.
 * Returns consistent INR formatted text and structured price info.
 */
export function getProductPrice(product, sizeId, thicknessOrLoft) {
  if (!product) return null;
  if (product.category === 'custom' || sizeId === 'custom') {
    return { isCustom: true, price: null, text: 'Custom Size — Request Quote' };
  }

  const isPillow = product.category === 'pillows';

  // Sanitize sizeId for category
  let effectiveSizeId = sizeId;
  if (!effectiveSizeId) {
    effectiveSizeId = isPillow ? 'regular' : 'single';
  } else if (isPillow && !['regular', 'full', 'king', 'bolster', 'custom'].includes(effectiveSizeId)) {
    effectiveSizeId = 'regular';
  } else if (!isPillow && !['single', 'double', 'queen', 'king', 'custom'].includes(effectiveSizeId)) {
    effectiveSizeId = 'single';
  }

  // Sanitize dimension for category
  let effectiveDim = thicknessOrLoft;
  if (effectiveDim === undefined || effectiveDim === null) {
    effectiveDim = isPillow ? 3.0 : 5;
  } else if (isPillow && effectiveDim > 5.0 && sizeId !== 'bolster') {
    // If a mattress thickness (e.g. 5, 6, 7) was accidentally passed, clamp to default loft
    effectiveDim = 3.0;
  }

  const price = isPillow
    ? calculatePillowPrice(product.basePrice, effectiveSizeId, effectiveDim)
    : calculateMattressPrice(product.basePrice, effectiveSizeId, effectiveDim);

  if (price === null) {
    return { isCustom: true, price: null, text: 'Custom Size — Request Quote' };
  }

  return {
    isCustom: false,
    price,
    text: `₹${price.toLocaleString('en-IN')}`
  };
}

// Educational & Scientific Knowledge Base on Ilavam Panchu
export const ILAVAM_PANCHU_SCIENCE = [
  {
    title: 'Hollow Air-Lumen Microstructure',
    highlight: '80% Hollow Air Cavity',
    description: 'Unlike solid synthetic foams or regular cotton fibers, Ceiba pentandra fibers have an 80% hollow air lumen. This acts as a microscopic thermal buffer, constantly breathing and circulating air to keep sleep surfaces up to 4°C cooler than synthetic mattresses.',
    icon: 'Wind'
  },
  {
    title: 'Zero Chemical Off-Gassing (0% VOCs)',
    highlight: 'Naturally Pure Plant Fiber',
    description: 'Mass-manufactured memory foam releases volatile organic compounds (VOCs), polyols, and chemical fire retardants. Ilavam Panchu is 100% plant-based, harvested from tree pods without chemical processing, bleaching, or synthetic bonding agents.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Hydrophobic & Hypoallergenic',
    highlight: 'Natural Bitter Lignin Barrier',
    description: 'The natural wax coating on Ilavam Panchu makes it moisture-resistant and hydrophobic. Dust mites, bedbugs, fungi, and mold cannot breed in its dry, breathable interior, making it the premier choice for asthma and allergy sufferers.',
    icon: 'Sparkles'
  },
  {
    title: 'Generational Longevity (15–20 Years)',
    highlight: '100% Re-Cardable & Renewable',
    description: 'When foam mattresses sag after 4–5 years, they end up in landfills. Ilavam Panchu mattresses never become waste. Every 5–7 years, the fibers can be re-carded, sun-aired, and re-tufted into a brand-new mattress that lasts for decades.',
    icon: 'Clock'
  }
];

// Mattress Comparison Matrix
export const MATTRESS_COMPARISON = [
  {
    criterion: 'Heat Dissipation & Cooling',
    ilavamPanchu: '⭐⭐⭐⭐⭐ Naturally cool (80% hollow air fiber)',
    memoryFoam: '⭐⭐ Traps body heat; requires chemical gel',
    coirMattress: '⭐⭐⭐ Moderately cool, but prone to moisture sag',
    springMattress: '⭐⭐⭐ Good airflow, but metal conducts humidity'
  },
  {
    criterion: 'Chemical Off-Gassing & Toxins',
    ilavamPanchu: '0% Chemicals • Pure organic tree pod fiber',
    memoryFoam: 'High VOCs • Polyurethane & fire retardants',
    coirMattress: 'Latex/chemical glue binding used in rubberized coir',
    springMattress: 'Synthetic glue & chemical foam pillow-tops'
  },
  {
    criterion: 'Spinal Alignment & Pressure Relief',
    ilavamPanchu: 'Buoyant natural lift; supports lumbar without sinking',
    memoryFoam: 'Sinks deep; restricts natural sleeping movements',
    coirMattress: 'Excessively hard; causes shoulder & hip pressure points',
    springMattress: 'Uneven pushback; motion ripples to partner'
  },
  {
    criterion: 'Durability & Lifespan',
    ilavamPanchu: '15–20 Years (Can be re-carded and re-fluffed)',
    memoryFoam: '4–6 Years (Permanent sagging and degradation)',
    coirMattress: '5–7 Years (Coir crumbles and pulverizes into dust)',
    springMattress: '6–8 Years (Spring coils squeak and lose tension)'
  },
  {
    criterion: 'Environmental Impact',
    ilavamPanchu: '100% Biodegradable & Wild-Harvested',
    memoryFoam: 'Non-biodegradable petroleum byproduct',
    coirMattress: 'Partially biodegradable (glue residues remain)',
    springMattress: 'Metal scrap & synthetic fabric waste'
  }
];

// 4-Step Maintenance & Care Guide
export const MATTRESS_CARE_STEPS = [
  {
    step: '01',
    title: 'Periodic Sunning (வெயிலில் காயவைத்தல்)',
    description: 'Once every 3 to 4 months, place your mattress in direct sunlight for 3–4 hours. Sunlight expands the hollow Ceiba fibers, restoring maximum loft, sterilizing the interior, and ensuring a fresh scent.'
  },
  {
    step: '02',
    title: 'Head-to-Toe Rotation',
    description: 'Every 6 months, rotate your mattress 180 degrees (head-to-foot). This ensures even wear and distributes body weight evenly across all hand-tufted rosettes.'
  },
  {
    step: '03',
    title: 'Breathable Cotton Protectors',
    description: 'Always use a 100% natural cotton bedsheet or protector. Avoid non-breathable plastic or cheap polyester covers, which trap moisture and negate the natural cooling benefits of Ilavam Panchu.'
  },
  {
    step: '04',
    title: 'Generational Re-Fluffing (5–7 Years)',
    description: 'When the mattress eventually compresses after years of loving use, contact JKR Mattress. Our artisans can card, fluff, and re-case the silk cotton back to its original plush thickness.'
  }
];
