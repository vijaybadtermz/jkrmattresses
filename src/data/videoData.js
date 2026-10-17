// Centralized ImageKit CDN Configuration
export const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/n3iocr65b';

// Curated Video Registry for JKR Mattress Website
// Sourced from authentic workshop craftsmanship and restful sleep lifestyle productions.

export const HOME_VIDEOS = {
  featured: {
    id: "restful-living-luxury",
    videoSrc: 'https://ik.imagekit.io/n3iocr65b/videos/art-of-restful-living.mp4',
    duration: "2:45",
    category: "brandExperience",
    categoryKey: "video.catBrand",
    titleKey: "video.homeFeaturedTitle",
    descKey: "video.homeFeaturedDesc",
    author: "JKR Mattress Signature Film",
    tags: ["Natural Fibers", "Orthopedic Cushioning", "Bedroom Aesthetics"],
    fallbackImage: "hero_bedroom.png"
  },
  vignettes: [
    {
      id: "silk-cotton-pillows",
      videoSrc: 'https://ik.imagekit.io/n3iocr65b/videos/silk-cotton-pillows.mp4',
      duration: "1:30",
      category: "pillowComfort",
      categoryKey: "video.catPillows",
      titleKey: "video.homeVig1Title",
      descKey: "video.homeVig1Desc",
      author: "JKR Silk Cotton Workshop",
      tags: ["Cervical Loft", "Silky Softness", "Breathable Casing"],
      fallbackImage: "pillow_collection.png"
    },
    {
      id: "hand-tufting-craft",
      videoSrc: 'https://ik.imagekit.io/n3iocr65b/videos/hand-tufting-textile-artistry.mp4',
      duration: "2:10",
      category: "craftsmanship",
      categoryKey: "video.catCraft",
      titleKey: "video.homeVig2Title",
      descKey: "video.homeVig2Desc",
      author: "JKR Master Artisans",
      tags: ["Hand Tufting", "Zero Squeaks", "Heirloom Durability"],
      fallbackImage: "natural_material.png"
    },
    {
      id: "evening-sanctuary",
      videoSrc: 'https://ik.imagekit.io/n3iocr65b/videos/evening-sanctuary.mp4',
      duration: "1:00",
      category: "lifestyleSanctuary",
      categoryKey: "video.catLifestyle",
      titleKey: "video.homeVig3Title",
      descKey: "video.homeVig3Desc",
      author: "JKR Restful Living Sanctuary",
      tags: ["Thermal Balance", "Deep REM Sleep", "Natural Living"],
      fallbackImage: "cooling_texture.png"
    }
  ]
};

export const ABOUT_MANUFACTURING_VIDEOS = {
  featuredMattress: {
    id: "oqdsrLFaEhM",
    youtubeId: "oqdsrLFaEhM",
    duration: "8:20",
    category: "mattressProduction",
    categoryKey: "video.catMattressMfg",
    titleKey: "video.aboutMattressTitle",
    descKey: "video.aboutMattressDesc",
    author: "Factory Secrets",
    fallbackImage: "royal_ortho_mattress.jpg",
    learningStepsKeys: [
      "video.aboutMStep1",
      "video.aboutMStep2",
      "video.aboutMStep3",
      "video.aboutMStep4"
    ]
  },
  featuredPillow: {
    id: "xD2vqtzjfjM",
    youtubeId: "xD2vqtzjfjM",
    duration: "6:15",
    category: "pillowProduction",
    categoryKey: "video.catPillowMfg",
    titleKey: "video.aboutPillowTitle",
    descKey: "video.aboutPillowDesc",
    author: "Product MFG",
    fallbackImage: "pillow_collection.png",
    learningStepsKeys: [
      "video.aboutPStep1",
      "video.aboutPStep2",
      "video.aboutPStep3",
      "video.aboutPStep4"
    ]
  },
  supportingCraft: [
    {
      id: "WAS7dO_CE3c",
      youtubeId: "WAS7dO_CE3c",
      duration: "10:15",
      category: "internalLayers",
      categoryKey: "video.catLayers",
      titleKey: "video.aboutSupp1Title",
      descKey: "video.aboutSupp1Desc",
      author: "NapLab Technical Testing",
      fallbackImage: "side_profile.png",
      takeawayKey: "video.aboutSupp1Takeaway"
    },
    {
      id: "68eLR2fwSFY",
      youtubeId: "68eLR2fwSFY",
      duration: "5:45",
      category: "quiltingFinishing",
      categoryKey: "video.catQuilting",
      titleKey: "video.aboutSupp2Title",
      descKey: "video.aboutSupp2Desc",
      author: "How It's Made Factories",
      fallbackImage: "custom_teak_bed.png",
      takeawayKey: "video.aboutSupp2Takeaway"
    }
  ]
};
