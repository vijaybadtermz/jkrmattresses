const fs = require('fs');

const standardPrices = [6700, 7300, 8200, 8700, 8300, 7600, 7900, 8500, 8900, 9100];
const standardImages = [
  {
    hero: '/products/mattress/Natural Standard/pruduct_1/01_hero_studio.png',
    gallery: [
      '/products/mattress/Natural Standard/pruduct_1/01_hero_studio.png',
      '/products/mattress/Natural Standard/pruduct_1/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/pruduct_1/03_detail_macro.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_2/02_lifestyle_bedroom.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_2/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/product_2/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_2/03_detail_macro.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_3/02_lifestyle_bedroom.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_3/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/product_3/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_3/03_cinematic_bed.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_4/02_lifestyle_bedroom.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_4/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/product_4/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_4/03_detail_macro.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_5/02_lifestyle_bedroom.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_5/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/product_5/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_5/03_detail_macro.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_6/02_lifestyle_bedroom.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_6/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/product_6/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_6/03_detail_macro.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_7/02_lifestyle_bedroom.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_7/02_lifestyle_bedroom.jpg',
      '/products/mattress/Natural Standard/product_7/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_7/03_detail_macro.jpg'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_8/Gemini_Generated_Image_n3mrt3n3mrt3n3mr (1).png',
    gallery: [
      '/products/mattress/Natural Standard/product_8/Gemini_Generated_Image_n3mrt3n3mrt3n3mr (1).png',
      '/products/mattress/Natural Standard/product_8/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_8/Gemini_Generated_Image_s2otirs2otirs2ot.png'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_9/02_lifestyle_nursery.jpg',
    gallery: [
      '/products/mattress/Natural Standard/product_9/02_lifestyle_nursery.jpg',
      '/products/mattress/Natural Standard/product_9/01_hero_studio.jpg',
      '/products/mattress/Natural Standard/product_9/Gemini_Generated_Image_b9kq9wb9kq9wb9kq.png'
    ]
  },
  {
    hero: '/products/mattress/Natural Standard/product_10/Gemini_Generated_Image_pdpywqpdpywqpdpy.png',
    gallery: [
      '/products/mattress/Natural Standard/product_10/Gemini_Generated_Image_pdpywqpdpywqpdpy.png',
      '/products/mattress/Natural Standard/product_10/Gemini_Generated_Image_1kqw4a1kqw4a1kqw.png',
      '/products/mattress/Natural Standard/product_10/Gemini_Generated_Image_7gctev7gctev7gct.png'
    ]
  }
];

const pillowPrices = [475, 370, 300, 525, 630, 520, 640, 520, 460, 350];
const pillowImages = [
  {
    hero: '/products/pillows/product_1/main.png',
    gallery: ['/products/pillows/product_1/main.png', '/products/pillows/product_1/middle.png', '/products/pillows/product_1/last.png']
  },
  {
    hero: '/products/pillows/product_2/main.png',
    gallery: ['/products/pillows/product_2/main.png', '/products/pillows/product_2/middle.png', '/products/pillows/product_2/last.png']
  },
  {
    hero: '/products/pillows/product_3/main.webp',
    gallery: ['/products/pillows/product_3/main.webp', '/products/pillows/product_3/middle.png', '/products/pillows/product_3/last.png']
  },
  {
    hero: '/products/pillows/product_4/main.jpg',
    gallery: ['/products/pillows/product_4/main.jpg', '/products/pillows/product_4/middle.jpg', '/products/pillows/product_4/last.jpg']
  },
  {
    hero: '/products/pillows/product_5/main.webp',
    gallery: ['/products/pillows/product_5/main.webp', '/products/pillows/product_5/middle.webp', '/products/pillows/product_5/last.webp']
  },
  {
    hero: '/products/pillows/product_6/main.jpg',
    gallery: ['/products/pillows/product_6/main.jpg', '/products/pillows/product_6/middle.png', '/products/pillows/product_6/last.png']
  },
  {
    hero: '/products/pillows/product_7/main.webp',
    gallery: ['/products/pillows/product_7/main.webp', '/products/pillows/product_7/middle.webp', '/products/pillows/product_7/last.webp']
  },
  {
    hero: '/products/pillows/product_8/main.jpg',
    gallery: ['/products/pillows/product_8/main.jpg', '/products/pillows/product_8/middle.png', '/products/pillows/product_8/last.png']
  },
  {
    hero: '/products/pillows/product_9/main.jpg',
    gallery: ['/products/pillows/product_9/main.jpg', '/products/pillows/product_9/middle.png', '/products/pillows/product_9/last.png']
  },
  {
    hero: '/products/pillows/product_10/main.jpg',
    gallery: ['/products/pillows/product_10/main.jpg', '/products/pillows/product_10/middle.png', '/products/pillows/product_10/last.png']
  }
];

const babyPrices = [2650, 1900, 2650, 2350, 2450];
const babyImages = [
  {
    hero: '/products/mattress/Baby/product_1/main.webp',
    gallery: ['/products/mattress/Baby/product_1/main.webp', '/products/mattress/Baby/product_1/middle.webp', '/products/mattress/Baby/product_1/last.png']
  },
  {
    hero: '/products/mattress/Baby/product_2/main.webp',
    gallery: ['/products/mattress/Baby/product_2/main.webp', '/products/mattress/Baby/product_2/middle.webp', '/products/mattress/Baby/product_2/last.webp']
  },
  {
    hero: '/products/mattress/Baby/product_3/main.webp',
    gallery: ['/products/mattress/Baby/product_3/main.webp', '/products/mattress/Baby/product_3/mid.webp', '/products/mattress/Baby/product_3/last.webp']
  },
  {
    hero: '/products/mattress/Baby/product_4/make_a_baby_mattress_photo_for_product_staging_with_head_arm (3).webp',
    gallery: [
      '/products/mattress/Baby/product_4/make_a_baby_mattress_photo_for_product_staging_with_head_arm (3).webp',
      '/products/mattress/Baby/product_4/middle.webp',
      '/products/mattress/Baby/product_4/last.webp'
    ]
  },
  {
    hero: '/products/mattress/Baby/product_5/main.webp',
    gallery: ['/products/mattress/Baby/product_5/main.webp', '/products/mattress/Baby/product_5/middle.webp', '/products/mattress/Baby/product_5/last.png']
  }
];

const foldablePrices = [7600, 6500, 9200, 6900, 5700];
const foldableImages = [
  {
    hero: '/products/mattress/Foldables/product_1/main.webp',
    gallery: ['/products/mattress/Foldables/product_1/main.webp', '/products/mattress/Foldables/product_1/middle.webp', '/products/mattress/Foldables/product_1/last.webp']
  },
  {
    hero: '/products/mattress/Foldables/product_2/main.webp',
    gallery: ['/products/mattress/Foldables/product_2/main.webp', '/products/mattress/Foldables/product_2/middle.webp', '/products/mattress/Foldables/product_2/last.webp']
  },
  {
    hero: '/products/mattress/Foldables/product_3/main.webp',
    gallery: ['/products/mattress/Foldables/product_3/main.webp', '/products/mattress/Foldables/product_3/middle.webp', '/products/mattress/Foldables/product_3/last.webp']
  },
  {
    hero: '/products/mattress/Foldables/product_4/main.webp',
    gallery: ['/products/mattress/Foldables/product_4/main.webp', '/products/mattress/Foldables/product_4/middle.webp', '/products/mattress/Foldables/product_4/last.webp']
  },
  {
    hero: '/products/mattress/Foldables/product_5/main.webp',
    gallery: ['/products/mattress/Foldables/product_5/main.webp', '/products/mattress/Foldables/product_5/middle.webp', '/products/mattress/Foldables/product_5/last.webp']
  }
];

const rollingPrices = [1600, 2300, 2650, 3100, 3450];
const rollingImages = [
  {
    hero: '/products/mattress/Rolling/product_1/main.webp',
    gallery: ['/products/mattress/Rolling/product_1/main.webp', '/products/mattress/Rolling/product_1/middle.webp', '/products/mattress/Rolling/product_1/last.webp']
  },
  {
    hero: '/products/mattress/Rolling/product_2/main.webp',
    gallery: ['/products/mattress/Rolling/product_2/main.webp', '/products/mattress/Rolling/product_2/middle.webp', '/products/mattress/Rolling/product_2/last.webp']
  },
  {
    hero: '/products/mattress/Rolling/product_3/main.webp',
    gallery: ['/products/mattress/Rolling/product_3/main.webp', '/products/mattress/Rolling/product_3/middle.webp', '/products/mattress/Rolling/product_3/last.webp']
  },
  {
    hero: '/products/mattress/Rolling/product_4/main.webp',
    gallery: ['/products/mattress/Rolling/product_4/main.webp', '/products/mattress/Rolling/product_4/middle.webp', '/products/mattress/Rolling/product_4/last.webp']
  },
  {
    hero: '/products/mattress/Rolling/product_5/main.webp',
    gallery: ['/products/mattress/Rolling/product_5/main.webp', '/products/mattress/Rolling/product_5/mid.webp', '/products/mattress/Rolling/product_5/last.webp']
  }
];

const coolingPrices = [5600, 7600, 8200, 11200, 15500];
const coolingImages = [
  {
    hero: '/products/mattress/Cooling/product_1/main.webp',
    gallery: ['/products/mattress/Cooling/product_1/main.webp', '/products/mattress/Cooling/product_1/middle.webp', '/products/mattress/Cooling/product_1/last.webp']
  },
  {
    hero: '/products/mattress/Cooling/product_2/main.png',
    gallery: ['/products/mattress/Cooling/product_2/main.png', '/products/mattress/Cooling/product_2/middle.png', '/products/mattress/Cooling/product_2/last.png']
  },
  {
    hero: '/products/mattress/Cooling/product_3/main.png',
    gallery: ['/products/mattress/Cooling/product_3/main.png', '/products/mattress/Cooling/product_3/middle.png', '/products/mattress/Cooling/product_3/last.png']
  },
  {
    hero: '/products/mattress/Cooling/product_4/main.png',
    gallery: ['/products/mattress/Cooling/product_4/main.png', '/products/mattress/Cooling/product_4/middle.png', '/products/mattress/Cooling/product_4/last.png']
  },
  {
    hero: '/products/mattress/Cooling/product_5/main.png',
    gallery: ['/products/mattress/Cooling/product_5/main.png', '/products/mattress/Cooling/product_5/middle.png', '/products/mattress/Cooling/product_5/last.png']
  }
];

console.log('Images and prices configuration ready');
