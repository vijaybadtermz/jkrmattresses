import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ZoomIn, 
  ShieldCheck, 
  Feather, 
  Wind, 
  Layers, 
  Scissors, 
  CheckCircle2, 
  HeartHandshake, 
  Info, 
  ArrowRight,
  Eye
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Import high-resolution craftsmanship and product photos
import harvestImg from '../../assets/images/craftsmanship/silk_cotton_harvest.jpg';
import tuftingImg from '../../assets/images/craftsmanship/hand_tufting_process.jpg';
import pillowArtisanImg from '../../assets/images/craftsmanship/pillow_stuffing_artisan.jpg';
import tapeEdgeImg from '../../assets/images/craftsmanship/tape_edge_stitching.jpg';
import customTeakImg from '../../assets/images/custom_teak_bed.png';
import royalOrthoImg from '../../assets/images/royal_ortho_mattress.jpg';
import floorGaddiImg from '../../assets/images/floor_gaddi_bed.jpg';
import diwanBolstersImg from '../../assets/images/diwan_bolsters.jpg';

export default function CraftsmanshipCollageSection({ onOpenEnquiry }) {
  const { t, isTamil } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const collageItems = [
    {
      id: 'harvest',
      category: 'sourcing',
      phaseNumber: '01',
      phaseLabel: isTamil ? 'நிலை 01 · இயற்கை பஞ்சு அறுவடை' : 'Phase 01 · Botanical Harvest',
      title: isTamil ? 'மரங்களிலிருந்து நேரடி பஞ்சு சேகரிப்பு' : 'Wild Ceiba Tree Pods & Pure Silk Cotton',
      subtitle: isTamil ? 'மேற்குத் தொடர்ச்சி மலை இலவம் பஞ்சு' : 'Organic Ceiba Pentandra Fiber Harvest',
      description: isTamil
        ? 'போடிநாயக்கனூர் மற்றும் மேற்குத் தொடர்ச்சி மலையடிவாரத்தில் வளரும் இலவம் மரங்களில் இருந்து முற்றி வெடித்த காய்கள் இயற்கையாக சேகரிக்கப்படுகின்றன. எவ்வித ரசாயன சிகிச்சையுமின்றி சூரிய ஒளியில் உலர்த்தப்படுகிறது.'
        : 'Harvested directly from wild native Ceiba Pentandra trees in the Western Ghats foothills around Bodinayakanur. Pods split open naturally under the tropical sun, releasing pristine, buoyant, moisture-resistant silk cotton fibers.',
      detailWhyItMatters: isTamil
        ? 'தாவர இழை உள்ளீடற்ற குழாய் போன்ற அமைப்புடையதால் (hollow air-lumen), உடலின் சூட்டை உள்ளிழுக்காமல் எப்போதும் 3–4°C குளிர்ச்சியாக வைத்திருக்கும்.'
        : 'The microscopic hollow tube structure (80% air-lumen core) naturally dissipates human body heat and repels humidity without chemical synthetic agents.',
      tags: [
        isTamil ? '100% தாவர இழை' : '100% Plant Fiber',
        isTamil ? 'ரசாயனமற்றது' : 'Zero Synthetic Glues',
        isTamil ? 'இயற்கை குளிர்ச்சி' : 'Natural Thermoregulation'
      ],
      image: harvestImg,
      badge: isTamil ? 'தூய மூலப்பொருள்' : 'Raw Botanical Core',
      aspectClass: 'md:col-span-8 md:row-span-2'
    },
    {
      id: 'tufting',
      category: 'tufting',
      phaseNumber: '02',
      phaseLabel: isTamil ? 'நிலை 02 · கைத்தையல் & பட்டன்' : 'Phase 02 · Master Hand-Tufting',
      title: isTamil ? 'ஆழமான பலமுனை கைத்தையல் முறை' : 'Deep Multi-Point Button Tufting',
      subtitle: isTamil ? '14 அங்குல ஊசி & உறுதியான கயிறு' : 'Traditional 14-Inch Steel Needle Stitching',
      description: isTamil
        ? 'இயந்திரங்கள் இல்லாமல், அனுபவமிக்க கைவினைஞர்கள் நீண்ட ஊசியால் பஞ்சு முழுவதும் ஊடுருவி ஆழமாக இழுத்து கட்டுகிறார்கள். இதனால் 15–20 ஆண்டுகளானாலும் பஞ்சு ஒருபுறமாக ஒதுங்காது.'
        : 'Skilled artisans pierce completely through the unbleached cotton casing using 14-inch steel needles and heavyweight twine, anchoring compression rosettes every 6 inches to permanently lock fiber placement without synthetic adhesives.',
      detailWhyItMatters: isTamil
        ? 'செயற்கை பசை பயன்படுத்தப்படாததால் நச்சு வாயுக்கள் வெளியேறாது, முதுகுத்தண்டிற்கு சமச்சீரான எலும்பு உறுதி கிடைக்கும்.'
        : 'Zero toxic off-gassing glues are used. Deep tufts create ergonomic micro-suspension zones that support the natural lumbar curvature.',
      tags: [
        isTamil ? '15–20 ஆண்டுகள் ஆயுள்' : '15–20 Year Durability',
        isTamil ? 'பஞ்சு நகராது' : 'Zero Shifting / Lumping',
        isTamil ? 'முதுகுத்தண்டு பாதுகாப்பு' : 'Orthopedic Posture'
      ],
      image: tuftingImg,
      badge: isTamil ? 'முக்கிய கைவினை' : 'Master Craftsmanship',
      aspectClass: 'md:col-span-4 md:row-span-2'
    },
    {
      id: 'pillow',
      category: 'pillows',
      phaseNumber: '03',
      phaseLabel: isTamil ? 'நிலை 03 · தலையணை பஞ்சடைத்தல்' : 'Phase 03 · Pillow Loft Balancing',
      title: isTamil ? 'கழுத்து எலும்புக்கு ஏற்ற கைமுறை பஞ்சடைப்பு' : 'Cervical Support & Hand Fluffing',
      subtitle: isTamil ? 'தலைச் சூட்டை தணிக்கும் மென்மை' : 'Ergonomic Loft Without Synthetic Memory Foam',
      description: isTamil
        ? 'கைவினைஞர் பஞ்சை கைகளால் பிரித்து பஞ்சடைத்து, சரியான அடர்த்தியில் நிரப்புகிறார். தலையின் எடைக்கு ஏற்ப இயற்கையாக நெகிழ்ந்து கழுத்து வலியை போக்கும்.'
        : 'Master craftsmen gently card and hand-pack pure silk cotton into pure breathable cotton drill shells, carefully testing bounce and loft to ensure optimal cervical spine alignment and buoyant head cradling.',
      detailWhyItMatters: isTamil
        ? 'தூங்கும் போது தலையில் வியர்வை சேராது, நரம்புகளுக்கு ரத்த ஓட்டம் சீராக இருக்கும்.'
        : 'Unlike petroleum memory foam that traps suffocating head heat, breathable Ceiba fibers maintain continuous micro-ventilation throughout the night.',
      tags: [
        isTamil ? 'கழுத்து வலி நிவாரணம்' : 'Cervical Spine Alignment',
        isTamil ? 'வியர்வை தேங்காது' : 'Heat Dissipation',
        isTamil ? 'அடர்த்தியான காடா துணி' : 'Breathable Cotton Drill'
      ],
      image: pillowArtisanImg,
      badge: isTamil ? 'தலையணை கைவினை' : 'Ergonomic Pillows',
      aspectClass: 'md:col-span-4 md:row-span-2'
    },
    {
      id: 'tape-edge',
      category: 'tailoring',
      phaseNumber: '04',
      phaseLabel: isTamil ? 'நிலை 04 · விளிம்பு தையல் & பைப்பிங்' : 'Phase 04 · Tape-Edge & Border Piping',
      title: isTamil ? 'உறுதியான ஓர தையல் மற்றும் பைப்பிங்' : 'Reinforced Perimeter Tape-Edge Sewing',
      subtitle: isTamil ? 'வடிவம் மாறாத ஹெர்ரிங்போன் பார்டர்' : 'Heavy-Duty Edge Seaming & Corner Locks',
      description: isTamil
        ? 'மெத்தையின் நான்கு பக்க விளிம்புகளும் தடிமனான கயிற்று பைப்பிங் மற்றும் இரட்டைத் தையலால் பூட்டப்படுகின்றன. இதனால் அமரும் போதும் விளிம்புகள் நசுங்கி சரிந்துவிடாது.'
        : 'Perimeter edges are bound with heavy-duty cotton herringbone tape and thick piping cord. Precision lock-stitching prevents perimeter sagging when sitting on bed corners.',
      detailWhyItMatters: isTamil
        ? 'மெத்தை பெட்டி போன்ற சதுர வடிவில் நேர்த்தியாக பல ஆண்டுகள் நிலைத்து நிற்கும்.'
        : 'Preserves the crisp rectangular geometry and uniform support across the entire mattress edge-to-edge.',
      tags: [
        isTamil ? 'விளிம்பு உறுதி' : 'Edge-To-Edge Support',
        isTamil ? 'இரட்டைத் தையல்' : 'Double-Lock Stitched',
        isTamil ? 'பாரம்பரிய தரம்' : 'High-Tension Borders'
      ],
      image: tapeEdgeImg,
      badge: isTamil ? 'விளிம்பு தையல்' : 'Perimeter Finish',
      aspectClass: 'md:col-span-4 md:row-span-2'
    },
    {
      id: 'custom-cots',
      category: 'tailoring',
      phaseNumber: '05',
      phaseLabel: isTamil ? 'நிலை 05 · மரக்கட்டில் தனிப்பயன் அளவு' : 'Phase 05 · Bespoke Cot Customization',
      title: isTamil ? 'செட்டிநாடு தேக்கு கட்டில்களுக்கு துல்லிய அளவுகள்' : 'Bespoke Fit for Chettinad Teak Cots',
      subtitle: isTamil ? 'பழங்கால கட்டில்கள் & ஊஞ்சல்கள்' : 'Heirloom Furniture & Traditional Swings',
      description: isTamil
        ? 'நான்கு தூண்கள் கொண்ட பழங்கால தேக்கு கட்டில்கள், திவான் பெஞ்சுகள் மற்றும் ஊஞ்சல்களுக்கு (Oonjal) துல்லியமான மில்லிமீட்டர் அளவுகளில் மெத்தைகள் கைவண்ணத்தில் தைத்து தரப்படுகின்றன.'
        : 'Factory mattresses rarely fit antique four-poster teak beds, rosewood diwans, or traditional brass-chain swings (Oonjal). We tailor millimeter-accurate notches and curves for heirloom family furniture.',
      detailWhyItMatters: isTamil
        ? 'மர வேலைப்பாடுகளை சேதப்படுத்தாமல் கச்சிதமாக பொருந்தும் தனித்துவமான கைவினை.'
        : 'Seamless integration without awkward overhangs or gaps, honoring antique craftsmanship.',
      tags: [
        isTamil ? 'துல்லிய அளவு' : 'Millimeter Sizing',
        isTamil ? 'தூண் வெட்டுகள்' : 'Post Corner Notches',
        isTamil ? 'செட்டிநாடு பாரம்பரியம்' : 'Antique Furniture Fit'
      ],
      image: customTeakImg,
      badge: isTamil ? 'தனிப்பயன் தயாரிப்பு' : 'Bespoke Order',
      aspectClass: 'md:col-span-4 md:row-span-2'
    },
    {
      id: 'ortho-finish',
      category: 'sourcing',
      phaseNumber: '06',
      phaseLabel: isTamil ? 'நிலை 06 · இறுதி நிறைவு' : 'Phase 06 · The Finished Sleep Sanctuary',
      title: isTamil ? 'ஆரோக்கியமான சொகுசு ஆர்த்தோபெடிக் மெத்தை' : 'Generational Orthopedic Comfort',
      subtitle: isTamil ? 'முழுமையான இயற்கை படுக்கை' : 'Zero Synthetic Foam · 100% Ceiba Core',
      description: isTamil
        ? 'முடிவுற்ற தூய இலவம் பஞ்சு மெத்தை — எந்தவித ரசாயன மணமும் அற்றது, உடல் அழுத்தத்தை சமமாக பகிரும் தன்மையுடையது. தென்னிந்திய வெப்பநிலைக்கு மிக உகந்தது.'
        : 'The complete JKR Mattress sleep sanctuary: 100% natural Ceiba Pentandra core, breathable unbleached cotton drill casing, deep-tufted buoyancy, and restorative orthopedic balance.',
      detailWhyItMatters: isTamil
        ? 'உடலுக்கு குளிர்ச்சி, ஆழ்ந்த உறக்கம் மற்றும் நீண்ட ஆயுள் தரும் தமிழ்நாட்டின் பாரம்பரிய படுக்கை.'
        : 'Sleep deep and wake revitalized without toxic chemical off-gassing, overheating, or body aches.',
      tags: [
        isTamil ? 'ஆழ்ந்த தூக்கம்' : 'Deep Restorative Sleep',
        isTamil ? 'நச்சு வாயு அற்றது' : 'Zero Chemical Off-Gas',
        isTamil ? 'தமிழ்நாடு நேரடி டெலிவரி' : 'Direct Workshop Delivery'
      ],
      image: royalOrthoImg,
      badge: isTamil ? 'முடிவுற்ற தயாரிப்பு' : 'Finished Masterpiece',
      aspectClass: 'md:col-span-6 md:row-span-2'
    },
    {
      id: 'floor-gaddi',
      category: 'tailoring',
      phaseNumber: '07',
      phaseLabel: isTamil ? 'நிலை 07 · தரை மெத்தை' : 'Phase 07 · Traditional Roll-Up Gaddi',
      title: isTamil ? 'சுருட்டக்கூடிய இயற்கை தரை படுக்கை' : 'Portable Hand-Tufted Floor Gaddi',
      subtitle: isTamil ? 'யோகா & விருந்தினர்களுக்கான மெத்தை' : 'Multi-Purpose Natural Roll-Up Comfort',
      description: isTamil
        ? 'பாரம்பரியமாக தரையில் படுக்கும் வழக்கம் உள்ளவர்களுக்கும், விருந்தினர்களுக்கும் ஏற்ற சுருட்டக்கூடிய இலவம் பஞ்சு தரை மெத்தை. மடித்தாலும் பஞ்சு உடையாது.'
        : 'Authentic South Indian roll-up floor mattress for ergonomic floor sleeping, meditation, or guest bedding. Rolls and unrolls smoothly without permanent crease marks.',
      detailWhyItMatters: isTamil
        ? 'தரையின் குளிர்ச்சியை தடுத்து பஞ்சின் இதமான ஆதரவை தரும்.'
        : 'Insulates against cold hard tiles while providing buoyant spine decompression.',
      tags: [
        isTamil ? 'சுருட்டக்கூடியது' : 'Roll-Up Portability',
        isTamil ? 'தரை படுக்கை' : 'Floor Sleeping Comfort',
        isTamil ? 'உறுதியான காடா' : 'Durable Cotton Twill'
      ],
      image: floorGaddiImg,
      badge: isTamil ? 'தரை மெத்தை' : 'Roll-Up Gaddi',
      aspectClass: 'md:col-span-3 md:row-span-2'
    },
    {
      id: 'diwan-bolsters',
      category: 'pillows',
      phaseNumber: '08',
      phaseLabel: isTamil ? 'நிலை 08 · உருண்டை தலையணை' : 'Phase 08 · Heritage Diwan Bolsters',
      title: isTamil ? 'திவான் மற்றும் ஊஞ்சல் உருண்டை தலையணைகள்' : 'Firm Cylindrical Diwan Bolsters',
      subtitle: isTamil ? 'அடர்த்தியான பக்கவாட்டு ஆதரவு' : 'High-Density Silk Cotton Packing',
      description: isTamil
        ? 'பாரம்பரிய திவான்கள், வரவேற்பறை சோபா மற்றும் ஊஞ்சல்களுக்கு ஏற்ற உருளை வடிவ தலையணைகள். சாய்ந்து அமர உறுதியான ஆதரவை தரும்.'
        : 'Dense cylindrical bolsters handcrafted for South Indian living rooms, antique teak diwans, and porch swings. Filled densely to retain solid cylindrical posture.',
      detailWhyItMatters: isTamil
        ? 'முதுகுக்கு உறுதியான முட்டு தந்து அமரும் சுகத்தை கூட்டும்.'
        : 'Provides rigid lateral spine support for relaxing, reading, and reclining.',
      tags: [
        isTamil ? 'திவான் தலையணை' : 'Teak Diwan Fitting',
        isTamil ? 'அடர்த்தியான பஞ்சு' : 'High Density Core',
        isTamil ? 'பாரம்பரிய தோற்றம்' : 'Royal Aesthetics'
      ],
      image: diwanBolstersImg,
      badge: isTamil ? 'உருளை தலையணை' : 'Heirloom Bolsters',
      aspectClass: 'md:col-span-3 md:row-span-2'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? collageItems
    : collageItems.filter(item => item.category === activeFilter);

  return (
    <section className="space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-semibold uppercase tracking-widest shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#A68B65]" />
          <span>{isTamil ? 'நேரடி பட்டறை கைவினைப் புகைப்படத் தொகுப்பு' : 'LIVING WORKSHOP CRAFTSMANSHIP'}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#302820]">
          {isTamil 
            ? 'இயற்கை இலவம் மரத்திலிருந்து தலைமுறை தூக்கம் வரை' 
            : 'From Botanical Tree Pods to Generational Comfort'}
        </h2>

        <p className="text-sm sm:text-base text-[#302820]/75 font-light leading-relaxed">
          {isTamil
            ? 'போடிநாயக்கனூர் பட்டறையில் உருவாகும் தூய இலவம் பஞ்சு மெத்தைகளின் உண்மை நிலைப் புகைப்படங்கள். ரசாயன ஃபோம் இல்லை, நச்சுப் பசைகள் இல்லை — தூய இயற்கை இழைகள் மற்றும் கைவினை மட்டுமே.'
            : 'Step inside our Bodinayakanur workshop through authentic documentary photography. No synthetic foams, no chemical glues — just organic Western Ghats fibers, hand-tufting needles, and generations of master craft.'}
        </p>

        {/* Responsible Craftsmanship Notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#D4C1A7]/25 border border-[#A68B65]/30 text-xs text-[#302820]/90">
          <Info className="w-4 h-4 text-[#A68B65] shrink-0" />
          <span>
            {isTamil 
              ? 'விபரங்களை விரிவாகக் காண எந்த புகைப்படத்தையும் கிளிக் செய்யவும்' 
              : 'Click any photo to explore step-by-step craftsmanship details & health benefits'}
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2 pb-4">
        {[
          { key: 'all', label: isTamil ? 'அனைத்து நிலைகளும்' : 'All Workshop Stages' },
          { key: 'sourcing', label: isTamil ? 'பஞ்சு அறுவடை' : 'Botanical Sourcing' },
          { key: 'tufting', label: isTamil ? 'கைத்தையல்' : 'Master Tufting' },
          { key: 'pillows', label: isTamil ? 'தலையணைகள்' : 'Pillow Craft' },
          { key: 'tailoring', label: isTamil ? 'கட்டில் விளிம்பு தையல்' : 'Cot & Edge Tailoring' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeFilter === tab.key
                ? 'bg-[#302820] text-[#D4C1A7] shadow-md scale-105'
                : 'bg-white text-[#302820]/70 hover:bg-[#FAF7F2] hover:text-[#302820] border border-[#D4C1A7]/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Asymmetric Editorial Photo Collage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`${item.aspectClass} group relative rounded-3xl overflow-hidden bg-white border border-[#D4C1A7] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-end min-h-[340px] sm:min-h-[380px]`}
          >
            {/* Background High-Res Image */}
            <div className="absolute inset-0 overflow-hidden bg-[#242321]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Multistage Gradient for Ultra-Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />
              <div className="absolute inset-0 bg-[#302820]/15 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Top Bar Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4C1A7] text-[11px] font-bold uppercase tracking-wider border border-white/15 shadow-sm">
                {item.phaseLabel}
              </span>

              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ZoomIn className="w-4 h-4 text-[#D4C1A7]" />
              </div>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-10 p-6 sm:p-7 space-y-3 text-white">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4C1A7] font-semibold block">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug group-hover:text-[#D4C1A7] transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed line-clamp-2">
                {item.description}
              </p>

              {/* Tags Strip */}
              <div className="pt-2 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-white/95 font-medium border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive Hover prompt */}
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#D4C1A7] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-3.5 h-3.5" />
                <span>{isTamil ? 'முழு விபரம் காண்க' : 'View Full Craftsmanship Details'} →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Artisan Quality Banner Strip */}
      <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#D4C1A7] grid grid-cols-1 md:grid-cols-4 gap-6 text-center shadow-xs">
        <div className="space-y-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#302820] text-[#D4C1A7] flex items-center justify-center shadow-xs">
            <Feather className="w-6 h-6 text-[#A68B65]" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#302820]">
            {isTamil ? '100% தாவர இழை' : '100% Ceiba Botanical'}
          </h4>
          <p className="text-xs text-[#302820]/75 leading-relaxed">
            {isTamil ? 'எவ்வித செயற்கை பஞ்சோ, ஃபோம் கலப்படமோ இல்லை.' : 'Never blended with polyester, reclaimed cotton, or chemicals.'}
          </p>
        </div>

        <div className="space-y-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#302820] text-[#D4C1A7] flex items-center justify-center shadow-xs">
            <Wind className="w-6 h-6 text-[#A68B65]" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#302820]">
            {isTamil ? 'இயற்கை குளிர்ச்சி' : 'Naturally Breathable'}
          </h4>
          <p className="text-xs text-[#302820]/75 leading-relaxed">
            {isTamil ? 'உடல் சூட்டை தணித்து 3–4°C வெப்பத்தை குறைக்கும்.' : 'Microscopic air-lumens dissipate body heat during tropical nights.'}
          </p>
        </div>

        <div className="space-y-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#302820] text-[#D4C1A7] flex items-center justify-center shadow-xs">
            <Layers className="w-6 h-6 text-[#A68B65]" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#302820]">
            {isTamil ? 'ஆழமான கைத்தையல்' : 'Hand-Tufted Zero Sag'}
          </h4>
          <p className="text-xs text-[#302820]/75 leading-relaxed">
            {isTamil ? 'நீண்ட ஊசி தையலால் 15–20 ஆண்டுகள் வடிவம் மாறாது.' : 'Anchored every 6 inches with steel needle compression stitches.'}
          </p>
        </div>

        <div className="space-y-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#302820] text-[#D4C1A7] flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#A68B65]" />
          </div>
          <h4 className="font-serif font-bold text-base text-[#302820]">
            {isTamil ? 'நேரடி தயாரிப்பு உத்தரவாதம்' : 'Direct Workshop Warranty'}
          </h4>
          <p className="text-xs text-[#302820]/75 leading-relaxed">
            {isTamil ? 'போடிநாயக்கனூர் பட்டறையிலிருந்து உங்கள் வீட்டு வாசலுக்கே.' : 'Handmade in Bodinayakanur with complete artisan transparency.'}
          </p>
        </div>
      </div>

      {/* Interactive Lightbox / Detail Drawer Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-[#FAF7F2] text-[#302820] rounded-3xl border border-[#D4C1A7] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4C1A7] bg-white">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#302820] text-[#D4C1A7] text-xs font-bold uppercase tracking-wider">
                  {selectedItem.phaseLabel}
                </span>
                <span className="text-xs text-[#A68B65] font-semibold uppercase tracking-wider hidden sm:inline-block">
                  {selectedItem.subtitle}
                </span>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                aria-label={t('common.close')}
                className="p-2 rounded-full bg-[#F7F4EE] hover:bg-[#302820] text-[#302820] hover:text-[#D4C1A7] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              
              {/* Big High-Res Image Container */}
              <div className="relative aspect-video sm:aspect-21/9 rounded-2xl overflow-hidden shadow-md border border-[#D4C1A7] bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                  {selectedItem.badge}
                </div>
              </div>

              {/* Title & Core Description */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820]">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-[#302820]/85 font-light leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* "Why This Matters For Your Health & Rest" Callout Box */}
              <div className="p-5 rounded-2xl bg-white border border-[#D4C1A7] space-y-2 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A68B65] uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>{isTamil ? 'உங்கள் உடல்நலத்திற்கும் தூக்கத்திற்கும் இது ஏன் முக்கியம்?' : 'Why This Matters For Your Health & Spine'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#302820]/90 font-sans leading-relaxed">
                  {selectedItem.detailWhyItMatters}
                </p>
              </div>

              {/* Specification Pills */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#302820]/70">
                  {isTamil ? 'கைவினை நுணுக்கங்கள்' : 'Craftsmanship Highlights'}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#302820]/5 text-[#302820] text-xs font-medium border border-[#D4C1A7]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#D4C1A7] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#302820]/70 font-light">
                {isTamil 
                  ? 'போடிநாயக்கனூர் பட்டறை நேரடி கைவினைத்தரம்' 
                  : 'Direct Bodinayakanur Artisan Workshop Production'}
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 rounded-full border border-[#D4C1A7] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {isTamil ? 'மூடுக' : 'Close'}
                </button>

                {onOpenEnquiry && (
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onOpenEnquiry();
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#302820] hover:bg-[#A68B65] text-[#D4C1A7] hover:text-[#302820] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{isTamil ? 'விபரம் கேட்க' : 'Enquire About This'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
