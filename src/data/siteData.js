export const SITE_URL = 'https://niketmarble.com';

export const company = {
  name: 'Niket Tiles & Interior',
  shortName: 'Niket',
  tagline: 'Timeless tiles. Architectural precision.',
  description:
    'Niket Tiles & Interior is a Patna-based atelier supplying architectural tiles, granite, and natural stone for interiors, facades, sacred spaces, and landscapes across India.',
  founded: 1998,
  years: new Date().getFullYear() - 1998,
  phone: '+91 76448 06555',
  phoneHref: 'tel:+917644806555',
  whatsapp: '917644806555',
  email: 'niketmarblepatna@gmail.com',
  emailHref: 'mailto:niketmarblepatna@gmail.com',
  gstin: '10BDIPK7801F1Z0',
  hours: 'Mon–Sat, 9:30 AM – 7:00 PM',
  address: {
    line1: 'Sawajpura More, near HDFC Bank',
    line2: 'Khagaul Road, Phulwarisharif, Patna 2',
    city: 'Patna',
    state: 'Bihar',
    pin: '801505',
    country: 'India',
  },
  mapEmbed:
    'https://www.google.com/maps?q=Sawajpura+More+near+HDFC+Bank+Khagaul+Road+Phulwarisharif+Patna&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Sawajpura+More+near+HDFC+Bank+Khagaul+Road+Phulwarisharif+Patna',
  social: {
    instagram: 'https://www.instagram.com/niket_interior_hub?igsh=MnBoaWZnZjdndHRu',
    facebook: 'https://www.facebook.com/share/18jcZKAQ6P/',
    pinterest: 'https://pinterest.com/niketmarble',
    youtube: 'https://youtube.com/@niketmarble',
  },
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/interior', label: 'Interior' },
  { to: '/marble', label: 'Tiles' },
  { to: '/catalogue', label: 'Catalogue' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const finishes = [
  { id: 'polished', label: 'Polished' },
  { id: 'honed', label: 'Honed' },
  { id: 'leathered', label: 'Leathered' },
  { id: 'flamed', label: 'Flamed' },
  { id: 'brushed', label: 'Brushed' },
  { id: 'tumbled', label: 'Tumbled' },
];

export const spaces = [
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Tile Facades' },
];

export const categories = [
  {
    id: 'flooring',
    name: 'Tile Flooring',
    space: 'interior',
    description: 'Grand slabs and tiles for halls, suites, and galleries.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'countertops',
    name: 'Kitchen & Vanity Tops',
    space: 'interior',
    description: 'Heat-resilient granite and quartzite for kitchens and baths.',
    image:
      'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'cladding',
    name: 'Wall Cladding',
    space: 'interior',
    description: 'Book-matched feature walls and corridor stone.',
    image:
      'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'mandirs',
    name: 'Mandirs & Sacred Stone',
    space: 'interior',
    description: 'Makrana and Italian white tiles for puja rooms and temples.',
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74232?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'facades',
    name: 'Facades & Elevation',
    space: 'exterior',
    description: 'Weathered sandstone, granite, and tile rain-screens.',
    image:
      'https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'landscape',
    name: 'Landscape Stone',
    space: 'exterior',
    description: 'Kota, sandstone, and cobbles for courts and gardens.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'paving',
    name: 'Driveway & Paving',
    space: 'exterior',
    description: 'Flamed granite and tumbled stone for high-traffic courts.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'staircases',
    name: 'Staircases & Landings',
    space: 'interior',
    description: 'Monolithic treads, risers, and sculpted newels.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
  },
];

const originalProducts = [
  {
    slug: 'statuario-venato-slabs',
    name: 'Statuario Venato Slabs',
    category: 'flooring',
    space: 'interior',
    finish: ['polished', 'honed'],
    origin: 'Carrara, Italy',
    colors: ['Bianco', 'Soft grey veining'],
    thickness: ['18 mm', '20 mm'],
    priceFrom: 1850,
    unit: 'sq.ft',
    featured: true,
    badge: 'Signature',
    short:
      'Museum-grade Italian Statuario with dramatic grey-gold veining for halls and galleries.',
    description:
      'Selected from limited Carrara lots, our Statuario Venato slabs are book-matched for palatial floors, lobby walls, and suite bathrooms. Each crate is inspected in Patna for colour harmony, resin fill quality, and structural integrity.',
    specs: {
      Material: 'Natural tile',
      Absorption: '< 0.15%',
      Finish: 'Polished / Honed',
      SlabSize: 'Up to 3200 × 1800 mm',
      Application: 'Floors, walls, vanities (interior)',
      Sealing: 'Recommended annually',
    },
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'makrana-white-premium',
    name: 'Makrana White Premium',
    category: 'mandirs',
    space: 'interior',
    finish: ['polished', 'honed'],
    origin: 'Makrana, Rajasthan',
    colors: ['Pure white', 'Alabaster'],
    thickness: ['20 mm', '30 mm', '40 mm'],
    priceFrom: 420,
    unit: 'sq.ft',
    featured: true,
    badge: 'Heritage',
    short:
      'The stone of the Taj — luminous Makrana white for mandirs, jaalis, and inlay floors.',
    description:
      'Quarried from the same geological belt that built the Taj Mahal, our Makrana Premium lots are selected for low iron, high translucency, and fine grain. Ideal for carved mandirs, temple cladding, and sacred floors that must remain cool and luminous.',
    specs: {
      Material: 'Makrana tile',
      Absorption: 'Low',
      Finish: 'Polished / Honed',
      SlabSize: 'Cut-to-size & carved',
      Application: 'Mandirs, jaalis, interiors',
      Sealing: 'Optional',
    },
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74232?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'black-marquina-flooring',
    name: 'Black Marquina Flooring',
    category: 'flooring',
    space: 'interior',
    finish: ['polished'],
    origin: 'Markina, Spain',
    colors: ['Deep black', 'White calcite veins'],
    thickness: ['18 mm', '20 mm'],
    priceFrom: 980,
    unit: 'sq.ft',
    featured: true,
    badge: 'Dramatic',
    short: 'Inky Spanish stone with crisp white rivers — for galleries and dining rooms.',
    description:
      'Black Marquina delivers high-contrast drama under chandelier light. We supply calibrated tiles and full slabs with epoxy-stabilised veins for luxury residences, boutique hotels, and retail flagships.',
    specs: {
      Material: 'Natural tile',
      Absorption: 'Low–medium',
      Finish: 'High polish',
      SlabSize: 'Up to 2800 × 1600 mm',
      Application: 'Interior floors & walls',
      Sealing: 'Required',
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-0ef3c08c08be?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'indian-green-tiles',
    name: 'Indian Green Tiles',
    category: 'cladding',
    space: 'interior',
    finish: ['polished', 'honed'],
    origin: 'Udaipur, Rajasthan',
    colors: ['Forest green', 'Gold mineral'],
    thickness: ['18 mm', '20 mm'],
    priceFrom: 185,
    unit: 'sq.ft',
    featured: false,
    badge: 'Indian',
    short: 'Rich Udaipur green with mineral gold — feature walls and reception desks.',
    description:
      'A classic Indian export stone, selected for consistent green ground and metallic gold movement. Excellent for statement walls, tabletops, and elevator lobbies when sealed correctly.',
    specs: {
      Material: 'Natural tile',
      Absorption: 'Medium',
      Finish: 'Polished / Honed',
      SlabSize: '2400 × 1400 mm typical',
      Application: 'Walls, furniture, interiors',
      Sealing: 'Required',
    },
    images: [
      'https://images.unsplash.com/photo-1615874959470-d45c8f3f48ce?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'black-galaxy-granite-tops',
    name: 'Black Galaxy Granite Tops',
    category: 'countertops',
    space: 'interior',
    finish: ['polished', 'leathered'],
    origin: 'Ongole, Andhra Pradesh',
    colors: ['Midnight black', 'Gold speckle'],
    thickness: ['20 mm', '30 mm'],
    priceFrom: 265,
    unit: 'sq.ft',
    featured: true,
    badge: 'Kitchen',
    short: 'Star-flecked Andhra granite — the workhorse of luxury Indian kitchens.',
    description:
      'Black Galaxy remains the most requested kitchen stone in our atelier. Dense, heat-tolerant, and visually deep, it is fabricated in Patna with waterfall ends, under-mount cut-outs, and eased or ogee profiles.',
    specs: {
      Material: 'Granite',
      Absorption: 'Very low',
      Finish: 'Polished / Leathered',
      SlabSize: 'Up to 3000 × 1800 mm',
      Application: 'Kitchens, islands, vanities',
      Sealing: 'Recommended',
    },
    images: [
      'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600489000022-c2086d40354f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'absolute-black-granite',
    name: 'Absolute Black Granite',
    category: 'countertops',
    space: 'interior',
    finish: ['polished', 'honed', 'leathered'],
    origin: 'Karnataka',
    colors: ['True black'],
    thickness: ['20 mm', '30 mm'],
    priceFrom: 195,
    unit: 'sq.ft',
    featured: false,
    badge: 'Minimal',
    short: 'Void-black granite for quiet, contemporary kitchens and wet bars.',
    description:
      'A uniform black granite with exceptional density. Preferred by architects specifying matte leathered islands that hide fingerprints while remaining resilient to heat and acid splash.',
    specs: {
      Material: 'Granite',
      Absorption: 'Very low',
      Finish: 'Polished / Honed / Leathered',
      SlabSize: 'Cut-to-size',
      Application: 'Worktops, cladding',
      Sealing: 'Optional on leathered',
    },
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d40354f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'calacatta-gold-vanity',
    name: 'Calacatta Gold Vanity',
    category: 'countertops',
    space: 'interior',
    finish: ['polished'],
    origin: 'Tuscany, Italy',
    colors: ['Warm white', 'Gold veins'],
    thickness: ['20 mm', '30 mm'],
    priceFrom: 2400,
    unit: 'sq.ft',
    featured: true,
    badge: 'Rare',
    short: 'Warm gold Calacatta for master baths and powder rooms.',
    description:
      'Limited Calacatta Gold lots reserved for vanity tops and book-matched bath walls. We photograph every slab pair before fabrication so designers can lock composition.',
    specs: {
      Material: 'Natural tile',
      Absorption: 'Low',
      Finish: 'Mirror polish',
      SlabSize: 'Select lots',
      Application: 'Vanities, feature walls',
      Sealing: 'Required',
    },
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'travertine-feature-walls',
    name: 'Roman Travertine Cladding',
    category: 'cladding',
    space: 'interior',
    finish: ['honed', 'brushed', 'tumbled'],
    origin: 'Tivoli, Italy / Indian analogue lots',
    colors: ['Ivory', 'Walnut', 'Silver'],
    thickness: ['15 mm', '20 mm'],
    priceFrom: 310,
    unit: 'sq.ft',
    featured: false,
    badge: 'Texture',
    short: 'Honed and filled travertine for quiet, hotel-grade walls.',
    description:
      'Filled and honed travertine brings a spa-like hush to corridors and living rooms. Available in ivory, walnut, and silver with matching skirting.',
    specs: {
      Material: 'Travertine',
      Absorption: 'Medium',
      Finish: 'Honed / Brushed / Tumbled',
      SlabSize: 'Tiles & panels',
      Application: 'Walls, floors (interior)',
      Sealing: 'Required',
    },
    images: [
      'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'spiral-tiles-staircase',
    name: 'Monolithic Tile Staircase',
    category: 'staircases',
    space: 'interior',
    finish: ['polished', 'honed'],
    origin: 'Italy / Makrana blend',
    colors: ['Bianco', 'Cream'],
    thickness: ['40 mm treads', '20 mm risers'],
    priceFrom: 12500,
    unit: 'step',
    featured: true,
    badge: 'Bespoke',
    short: 'Sculpted treads and floating landings engineered in our yard.',
    description:
      'Bespoke stair packages with CNC-cut treads, matched risers, and optional brass inlays. Site templates are taken before fabrication to guarantee a silent, precise fit.',
    specs: {
      Material: 'Tile composite package',
      Absorption: 'Low',
      Finish: 'Polished / Honed',
      SlabSize: 'Project-specific',
      Application: 'Interior staircases',
      Sealing: 'Required',
    },
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'dholpur-sandstone-facade',
    name: 'Dholpur Beige Facade',
    category: 'facades',
    space: 'exterior',
    finish: ['honed', 'brushed', 'flamed'],
    origin: 'Dholpur, Rajasthan',
    colors: ['Warm beige', 'Pink-beige'],
    thickness: ['30 mm', '40 mm', '50 mm'],
    priceFrom: 95,
    unit: 'sq.ft',
    featured: true,
    badge: 'Elevation',
    short: 'The classic North Indian elevation stone — stable, warm, and weathertight.',
    description:
      'Dholpur sandstone remains the architect’s choice for North Indian facades. We supply calibrated cladding, jalis, cornices, and coping with drip grooves, packed for pan-India sites.',
    specs: {
      Material: 'Sandstone',
      Absorption: 'Medium',
      Finish: 'Honed / Brushed / Flamed',
      SlabSize: 'Cladding tiles & blocks',
      Application: 'Facades, jalis, copings',
      Sealing: 'Siloxane recommended',
    },
    images: [
      'https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1464146072230-91cddd1f1e1c?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'jet-black-granite-facade',
    name: 'Jet Black Granite Facade',
    category: 'facades',
    space: 'exterior',
    finish: ['flamed', 'polished', 'honed'],
    origin: 'South India',
    colors: ['Jet black'],
    thickness: ['30 mm'],
    priceFrom: 175,
    unit: 'sq.ft',
    featured: false,
    badge: 'Urban',
    short: 'Flamed black granite rain-screen for contemporary elevations.',
    description:
      'A non-slip, UV-stable granite cladding system for towers and villas. Flamed finish reduces glare and improves grip on plinths and podium walls.',
    specs: {
      Material: 'Granite',
      Absorption: 'Very low',
      Finish: 'Flamed / Polished / Honed',
      SlabSize: '600×300 to 1200×600 mm',
      Application: 'Facades, plinths',
      Sealing: 'Optional',
    },
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'jaisalmer-golden-cladding',
    name: 'Jaisalmer Golden Stone',
    category: 'facades',
    space: 'exterior',
    finish: ['honed', 'brushed'],
    origin: 'Jaisalmer, Rajasthan',
    colors: ['Desert gold'],
    thickness: ['30 mm', '40 mm'],
    priceFrom: 110,
    unit: 'sq.ft',
    featured: true,
    badge: 'Desert',
    short: 'Sun-lit golden limestone for heritage villas and resort elevations.',
    description:
      'Jaisalmer stone glows at dusk. We supply both machine-cut cladding and artisan carved panels for haveli restorations and hospitality projects.',
    specs: {
      Material: 'Limestone / sandstone family',
      Absorption: 'Medium',
      Finish: 'Honed / Brushed',
      SlabSize: 'Custom',
      Application: 'Facades, courtyards',
      Sealing: 'Recommended',
    },
    images: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897883e46?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'kota-blue-paving',
    name: 'Kota Blue Paving',
    category: 'landscape',
    space: 'exterior',
    finish: ['honed', 'tumbled'],
    origin: 'Kota, Rajasthan',
    colors: ['Blue-grey', 'Natural'],
    thickness: ['22 mm', '25 mm', '30 mm'],
    priceFrom: 48,
    unit: 'sq.ft',
    featured: true,
    badge: 'Classic',
    short: 'Cool Kota limestone for courtyards, corridors, and pool decks.',
    description:
      'Kota Blue remains India’s most practical outdoor limestone: cool underfoot, easy to maintain, and available in natural, polished, and tumbled faces. Ideal for Rajasthan heat and monsoon courts.',
    specs: {
      Material: 'Limestone',
      Absorption: 'Medium',
      Finish: 'Natural / Honed / Tumbled',
      SlabSize: '2×2, 2×3, 4×4 ft',
      Application: 'Paving, corridors, decks',
      Sealing: 'Optional',
    },
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'tumbled-cobble-drive',
    name: 'Tumbled Granite Cobbles',
    category: 'paving',
    space: 'exterior',
    finish: ['tumbled', 'flamed'],
    origin: 'South India',
    colors: ['Grey', 'Charcoal', 'Pink'],
    thickness: ['50 mm', '80 mm'],
    priceFrom: 85,
    unit: 'sq.ft',
    featured: false,
    badge: 'Driveway',
    short: 'Hand-tumbled cobbles for porte-cochères and heritage streets.',
    description:
      'Dense granite setts that take vehicular load without polish loss. Mixed palettes create a European court look on Indian sites.',
    specs: {
      Material: 'Granite',
      Absorption: 'Very low',
      Finish: 'Tumbled / Flamed',
      SlabSize: '100×100, 100×200 mm',
      Application: 'Driveways, streets',
      Sealing: 'Not required',
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'river-pebble-landscape',
    name: 'Polished River Pebbles',
    category: 'landscape',
    space: 'exterior',
    finish: ['tumbled', 'polished'],
    origin: 'Rajasthan / Maharashtra',
    colors: ['Mixed earth', 'White', 'Black'],
    thickness: ['20–80 mm dia'],
    priceFrom: 22,
    unit: 'kg',
    featured: false,
    badge: 'Garden',
    short: 'Washed pebbles for dry gardens, water features, and planter beds.',
    description:
      'Graded river and quarry pebbles, washed and size-sorted. White Makrana chips and black granite pebbles available for high-contrast planting schemes.',
    specs: {
      Material: 'Natural stone pebbles',
      Absorption: 'Varies',
      Finish: 'Tumbled / Polished',
      SlabSize: 'Bulk bags 25–50 kg',
      Application: 'Landscape, waterbodies',
      Sealing: 'Not required',
    },
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  {
    slug: 'quartzite-leathered-island',
    name: 'Taj Mahal Quartzite Island',
    category: 'countertops',
    space: 'interior',
    finish: ['leathered', 'polished'],
    origin: 'Brazil (imported lot)',
    colors: ['Warm cream', 'Soft taupe'],
    thickness: ['30 mm'],
    priceFrom: 1650,
    unit: 'sq.ft',
    featured: true,
    badge: 'Performance',
    short: 'Tile look, granite toughness — leathered quartzite for islands.',
    description:
      'Brazilian Taj Mahal quartzite offers Calacatta movement with far higher scratch and etch resistance. Leathered finish is our most requested island specification for family kitchens.',
    specs: {
      Material: 'Quartzite',
      Absorption: 'Very low',
      Finish: 'Leathered / Polished',
      SlabSize: 'Jumbo slabs',
      Application: 'Islands, vanities',
      Sealing: 'Light sealer',
    },
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d40354f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1600&q=80',
    ],
  },
];

const validProductCategories = ['Interior', 'Exterior', 'Tiles'];
const tileProductKeywords = ['MARBLE', 'ITALIAN', 'GRANITE', 'PEARL', 'ONYX', 'STONE', 'TRAVERTINE'];

const normalizeProductCategory = (product) => {
  if (validProductCategories.includes(product.category)) return product.category;
  if (product.space === 'exterior') return 'Exterior';

  const name = `${product.name || ''} ${product.description || ''} ${product.specs?.Material || ''}`.toUpperCase();
  if (tileProductKeywords.some((keyword) => name.includes(keyword))) return 'Tiles';
  return 'Interior';
};

export const products = originalProducts.map((product) => ({
  ...product,
  category: normalizeProductCategory(product),
}));

export const projects = {
  interior: [
    {
      title: 'Udaipur Lake Villa',
      location: 'Udaipur',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      note: 'Book-matched Statuario floors and Makrana mandir.',
    },
    {
      title: 'Juhu Apartment',
      location: 'Mumbai',
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      note: 'Calacatta Gold master bath and leathered quartzite island.',
    },
    {
      title: 'Golf Course Estate',
      location: 'Gurugram',
      image:
        'https://images.unsplash.com/photo-1600585154340-0ef3c08c08be?auto=format&fit=crop&w=1200&q=80',
      note: 'Black Marquina gallery and spiral tile stair.',
    },
    {
      title: 'Heritage Haveli Suite',
      location: 'Jaipur',
      image:
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80',
      note: 'Indian Green reception and travertine corridors.',
    },
  ],
  exterior: [
    {
      title: 'Diplomatic Enclave',
      location: 'New Delhi',
      image:
        'https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1200&q=80',
      note: 'Dholpur rain-screen with granite plinth.',
    },
    {
      title: 'Desert Resort Courts',
      location: 'Jaisalmer',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
      note: 'Golden stone jalis and Kota courts.',
    },
    {
      title: 'Pune Hill Residence',
      location: 'Pune',
      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      note: 'Flamed granite drive and pebble gardens.',
    },
    {
      title: 'Ahmedabad Studio',
      location: 'Ahmedabad',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      note: 'Jet black granite facade with sandstone reveals.',
    },
  ],
};

export const testimonials = [
  {
    name: 'Ashok Saw',
    role: 'Homeowner, Patna',
    quote:
      'Thnx to Niket Interior for my Beautiful false ceiling work 😍. Best quality of work, best product available in their showroom. Work completed on time.',
    rating: 5,
  },
  {
    name: 'Aman Patel',
    role: 'Client, Patna',
    quote:
      'Had a great experience with Niket Interior Design. Their designs are modern, aesthetic, and perfectly customized according to needs. The team is very cooperative and ensures timely delivery. Really satisfied with the final outcome. Definitely worth it!',
    rating: 5,
  },
  {
    name: 'Kajal Kumari',
    role: 'Client, Patna',
    quote:
      'Their work is neat, timely, and professional. Highly recommended Niket Interior Hub for anyone facing damp wall issues and looking for stylish fluted panel work.',
    rating: 5,
  },
  {
    name: 'Muskan Kumari',
    role: 'Homeowner, Patna',
    quote:
      'This is among Patna’s top tile shops, praised for quality materials, excellent customer service, and competitive pricing. Customers often highlight the broad collections, professional staff, and reliable delivery. One of the best shops for home interior designing.',
    rating: 5,
  },
  {
    name: 'Aniket Raj',
    role: 'Client, Patna',
    quote:
      'Best place for your home decor and interior design.',
    rating: 5,
  },
  {
    name: 'Customer',
    role: 'Patna',
    quote:
      'Good products with best quality at best prices and good installation services too.',
    rating: 5,
  },
  {
    name: 'Customer',
    role: 'Patna',
    quote:
      'Very good stocks available in this shop and so much different variety also with good price.',
    rating: 5,
  },
  {
    name: 'Vinod Kumar',
    role: 'Homeowner, Patna',
    quote:
      'Beautiful False Ceiling By Niket Interior.',
    rating: 5,
  },
];

export const trustBadges = [
  { label: `${company.years}+ years`, detail: 'Since 1998 in Patna' },
  { label: 'Pan-India', detail: 'Site delivery & templates' },
  { label: 'Architects’ yard', detail: 'Slab viewing by appointment' },
  { label: 'Sacred stone', detail: 'Makrana mandir atelier' },
];

export const whyChoose = [
  {
    title: 'Quarry to courtyard',
    text: 'Direct lots from Rajasthan, South India, Italy, and Brazil — selected in person, not from a catalogue PDF.',
  },
  {
    title: 'Fabrication on site of origin',
    text: 'CNC, waterjet, and artisan carving in Patna keep tolerances tight and freight intelligent.',
  },
  {
    title: 'Specification literacy',
    text: 'We speak finish, thickness, sealer, and movement joints — the language architects actually need.',
  },
  {
    title: 'Aftercare that lasts',
    text: 'Sealing schedules, stain protocols, and annual visits for residences we have dressed in stone.',
  },
];

export const faqs = [
  {
    q: 'Do you supply both Indian and imported tiles?',
    a: 'Yes. We stock Makrana, Udaipur greens, Kota, Dholpur, and Jaisalmer alongside Italian Statuario, Calacatta, Spanish Marquina, and selected Brazilian quartzites.',
  },
  {
    q: 'Can I visit the yard to choose slabs?',
    a: 'Architects and homeowners are welcome at our Patna gallery by appointment. We also share lot photographs and video under consistent lighting for remote selection.',
  },
  {
    q: 'What thickness should I specify?',
    a: 'Interior tile floors are typically 18–20 mm. Worktops are 20 or 30 mm. Facades and stairs often need 30–40 mm. We confirm after reviewing spans and fixing methods.',
  },
  {
    q: 'Do you fabricate kitchens and mandirs?',
    a: 'Yes. Our Patna workshop handles cut-outs, edge profiles, book-matching, jaalis, and carved mandirs. Site templates are taken for complex pieces.',
  },
  {
    q: 'How should tiles be maintained in Indian kitchens?',
    a: 'Use a pH-neutral stone cleaner and wipe spills promptly. For heavy cooking we often recommend granite or quartzite on the island and tiles on quieter surfaces.',
  },
  {
    q: 'Do you deliver outside Rajasthan?',
    a: 'We crate and dispatch pan-India. Lead times depend on lot availability and monsoon logistics. Export enquiries are handled case by case.',
  },
];

export const hero = {
  headline: 'Stone that holds the light.',
  sub: 'Architectural tiles, granite, and landscape stone — selected in Patna, installed across India.',
  image:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80',
};

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);

const normalizeImageUrl = (src, fallback = '/Image/Interior/PG12012-8.png') => {
  if (!src) return fallback;
  const cleaned = String(src).trim();
  if (!cleaned) return fallback;
  if (cleaned.startsWith('/Image/')) return encodeURI(cleaned);
  if (cleaned.startsWith('data:')) return cleaned;
  if (cleaned.startsWith('http')) {
    return cleaned.includes('?') ? cleaned : `${cleaned}?auto=format&fit=crop&w=900&q=80`;
  }
  return cleaned || fallback;
};

export const resolveImageSrc = (src, fallback = '/Image/Interior/PG12012-8.png') => normalizeImageUrl(src, fallback);

// Initialize fakeFastApi with the products declared above so products can be
// edited in-browser and persisted to localStorage for future edits.
import { fakeApi } from '../lib/fakeFastApi';

// Additional product names provided by the client (lightweight entries).
const extraProductNames = [
  'White Tiles',
  'PEARL WHITE (PG-049)',
  'RAIN FOREST GOLD PG-059',
  'ITALIAN WHITE PG-50',
  'GREY AND WHITE GRANITE PG-85-1',
  'ITALIAN BLACK PG-067',
  'SANDEL MOUNTAIN PG-191-1',
  'PINK PEARL PG-40',
  'GOLD LINE WHITE PG-095-1',
  'LAVADIA BLACK PG-134',
  'SNOW MOUNTAIN PG-190-1',
  'ORIENTAL WHITE',
  'PANDA WHITE',
  'GOLDEN CRYSTAL',
  'OPERA GREEN PG-046',
  'OPERA ORANGE PG-086',
  'DARK WOOD PG-924-3',
  'OAK WOOD PG-922-4',
  'BAMBOO VENER',
  'CHARCOAL',
  'GLOSSY WHITE',
  'OCEAN BLUE',
  'ROYAL BLUE TEXTURE',
  'FONCE IMPERIAL PG-003',
  'GREY PLAY PG-218-1',
  'DARK ILLUSION',
  'LAVA PG-089',
  'Ready To Use Panel (1PAIR)',
  '3D SHEET',
  'DIAMOND CUT PG-105-1',
  'PG 022',
  'PG 284-1',
  'PG 3005-1',
  'PG 3005-2',
  'PG 3108-1',
  'PG 3108-2',
  'PG 3108-4',
  'PG 3108-5',
  'PG 3108-6',
  'PG 3108-7',
  'PG 3108-8',
  'PG 3108-9',
  'PG 3108-10',
  '3108-10',
  'PG6001',
  'PG6002',
  'PG6003',
  'PG6004',
  'PG6005',
  'PG-12012-1',
  'PG-12012-2',
  'PG-12012-3',
  'PG-12012-4',
  'PG-12012-5',
  'PG-12012-6',
  'PG-12012-7',
  'PG-12012-8',
  'PG-12012-9',
  'PG-12012-10',
  'PG-12012-11',
  'PG-12012-12',
  'PG-12012-13',
  'PG-12012-14',
  'PG-12012-15',
];

const productImageMap = {
  whitemarble: '/Image/Marble/white-marble.jpg',
  pearlwhitepg049: '/Image/Marble/PEARL-WHITEl.jpg',
  rainforestgoldpg059: '/Image/Marble/RAIN-FOREST-GOLD-PG-059.jpg',
  italianwhitepg50: '/Image/Marble/white-marble.jpg',
  greyandwhitegranitepg851: '/Image/Marble/PG-022.jpg',
  italianblackpg067: '/Image/Marble/PG-3108-2.jpg',
  sandelmountainpg1911: '/Image/Interior/SANDELMOUNTAINPG-191-1.png',
  pinkpearlpg40: '/Image/Interior/PINKPEARLPG-40.png',
  goldlinewhitepg0951: '/Image/Marble/PG-022.jpg',
  lavadiablackpg134: '/Image/Marble/PG-3108-10.jpg',
  snowmountainpg1901: '/Image/Interior/SNOWMOUNTAINPG-190-1.png',
  orientalwhite: '/Image/Interior/ORIENTALWHITE.png',
  pandawhite: '/Image/Interior/PANDAWHITE.png',
  goldencrystal: '/Image/Marble/PG-022.jpg',
  operagreenpg046: '/Image/Marble/PG-022.jpg',
  operaorangepg086: '/Image/Marble/PG-022.jpg',
  darkwoodpg9243: '/Image/Marble/DARK-WOOD-PG-924-3.jpg',
  oakwoodpg9224: '/Image/Marble/DARK-WOOD-PG-924-3.jpg',
  bambboovener: '/Image/Marble/DARK-WOOD-PG-924-3.jpg',
  bamboovener: '/Image/Marble/DARK-WOOD-PG-924-3.jpg',
  charcoal: '/Image/Marble/PG-3108-8.jpg',
  glossywhite: '/Image/Marble/white-marble.jpg',
  oceanblue: '/Image/Interior/ROYALBLUETEXTURE.png',
  royalbluetexture: '/Image/Interior/ROYALBLUETEXTURE.png',
  onceimperialpg003: '/Image/Marble/PG-284-1.jpg',
  fonceimperialpg003: '/Image/Marble/PG-284-1.jpg',
  greyplaypg2181: '/Image/Marble/PG-022.jpg',
  darkillusion: '/Image/Marble/PG-3108-8.jpg',
  lavapg089: '/Image/Marble/LAVA PG-089.jpg',
  readytousepanel1pair: '/Image/Marble/Ready-To-Use-Panel.jpg',
  '3dsheet': '/Image/Marble/SHEET.jpg',
  diamondcutpg1051: '/Image/Marble/DIAMOND-CUT-PG-105-1.jpg',
  pg022: '/Image/Marble/PG-022.jpg',
  pg2841: '/Image/Marble/PG-284-1.jpg',
  pg30051: '/Image/Marble/PG-022.jpg',
  pg30052: '/Image/Marble/PG-022.jpg',
  pg31081: '/Image/Marble/PG-3108-1.jpg',
  pg31082: '/Image/Marble/PG-3108-2.jpg',
  pg31084: '/Image/Marble/PG-3108-4.jpg',
  pg31085: '/Image/Marble/PG-3108-4.jpg',
  pg31086: '/Image/Marble/PG-3108-6.jpg',
  pg31087: '/Image/Marble/PG-3108-7..jpg',
  pg31088: '/Image/Marble/PG-3108-8.jpg',
  pg31089: '/Image/Marble/PG-3108-8.jpg',
  pg310810: '/Image/Marble/PG-3108-10.jpg',
  pg310810duplicate: '/Image/Marble/PG-3108-10.jpg',
  pg6001: '/Image/Marble/PG-022.jpg',
  pg6002: '/Image/Marble/PG-022.jpg',
  pg6003: '/Image/Marble/PG6003.jpg',
  pg6004: '/Image/Marble/PG-022.jpg',
  pg6005: '/Image/Marble/PG-022.jpg',
  pg120121: '/Image/Interior/PG12012-1.png',
  pg120122: '/Image/Marble/PG-12012-2.jpg',
  pg120123: '/Image/Interior/PG12012-4.png',
  pg120124: '/Image/Interior/PG12012-4.png',
  pg120125: '/Image/Interior/PG12012-5.png',
  pg120126: '/Image/Marble/PG-12012-6.jpg',
  pg120127: '/Image/Interior/PG12012-7.png',
  pg120128: '/Image/Interior/PG12012-8.png',
  pg120129: '/Image/Interior/PG12012-9.png',
  pg1201210: '/Image/Interior/PG12012-10.png',
  pg1201211: '/Image/Interior/PG12012-11.png',
  pg1201212: '/Image/Marble/PG-12012-12.jpg',
  pg1201213: '/Image/Interior/PG12012-13.png',
  pg1201214: '/Image/Interior/PG12012-14.png',
  pg1201215: '/Image/Interior/PG12012-15.png',
  '310810': '/Image/Marble/PG-3108-10.jpg',
};

function _slugify(name) {
  return name
    .toLowerCase()
    .replace(/[\s/(),]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

function sanitizeProductImages(product) {
  if (!product || !Array.isArray(product.images)) {
    return product;
  }

  return {
    ...product,
    images: product.images.map((src) => normalizeImageUrl(src)),
  };
}

function _normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '')
    .replace(/(pg|pge)/g, 'pg');
}

function resolveProductImage(name) {
  const normalized = _normalizeName(name);

  if (productImageMap[normalized]) {
    return productImageMap[normalized];
  }

  const directMatch = Object.entries(productImageMap).find(([key, value]) => normalized.includes(key) || key.includes(normalized));
  if (directMatch) {
    return directMatch[1];
  }

  const tileFallbacks = [
    '/Image/Marble/white-marble.jpg',
    '/Image/Marble/PG-022.jpg',
    '/Image/Marble/PG-3108-8.jpg',
    '/Image/Marble/RAIN-FOREST-GOLD-PG-059.jpg',
  ];
  const interiorFallbacks = [
    '/Image/Interior/ORIENTALWHITE.png',
    '/Image/Interior/ROYALBLUETEXTURE.png',
    '/Image/Interior/PINKPEARLPG-40.png',
    '/Image/Interior/PG12012-8.png',
  ];

  if (/white|gold|black|granite|marble|stone|pearl|forest|sand|snow|pink|lava|opera|diamond|sheet|ready|panel|panel/i.test(name)) {
    return tileFallbacks.find((src) => src) || '/Image/Marble/white-marble.jpg';
  }

  return interiorFallbacks.find((src) => src) || '/Image/Interior/PG12012-8.png';
}

function makeExtra(name) {
  const slug = _slugify(name);
  const isTileStone = /marble|stone|granite|white|black|gold|pearl|rain|forest|sand|snow|pink|lava|opera|italian|oriental|panda|diamond|sheet|panel|ready/i.test(name);
  return {
    slug,
    name,
    category: isTileStone ? 'Tiles' : 'Interior',
    space: 'interior',
    finish: ['polished'],
    origin: 'Patna showroom',
    colors: ['Natural tone'],
    thickness: ['18 mm'],
    priceFrom: 450,
    unit: 'sq.ft',
    featured: false,
    badge: 'In stock',
    short: 'Premium decorative panel or stone finish available for interior projects.',
    description:
      'This product is available in our Patna showroom and can be quoted for your kitchen, wall, wardrobe, or feature panel requirement. Please confirm finish, shade, and size before final purchase.',
    specs: {
      Material: isTileStone ? 'Natural tile / stone' : 'Decorative panel',
      Finish: 'Polished',
      Thickness: '18 mm',
      Application: 'Interior panels, walls, wardrobes',
      Availability: 'Ready to quote',
    },
    images: [resolveProductImage(name)],
  };
}

// Initialize once with current static products as defaults. Replace fakeApi
// contents with static products plus any extra ones defined above.
try {
  const extras = extraProductNames.map(makeExtra);
  const sanitizedProducts = products.map(sanitizeProductImages);
  const sanitizedExtras = extras.map(sanitizeProductImages);
  const existingSlugs = new Set(sanitizedProducts.map((p) => p.slug));
  const toAdd = sanitizedExtras.filter((e) => !existingSlugs.has(e.slug));

  fakeApi.init(sanitizedProducts.concat(toAdd));

  try {
    const current = fakeApi.list().map(sanitizeProductImages);
    const currentSlugs = new Set(current.map((p) => p.slug));
    const missing = sanitizedExtras.filter((e) => !currentSlugs.has(e.slug));
    if (missing.length > 0 || current.some((p) => p.images.some((src) => src && src.includes(' ')))) {
      fakeApi.replaceAll(current.concat(missing));
    }
  } catch (e2) {
    // ignore
  }
} catch (e) {
  // ignore if running server-side or if localStorage is unavailable
}

export const getProduct = (slug) => {
  const product = fakeApi.get(slug);
  return product ? { ...product, category: normalizeProductCategory(product) } : product;
};

export const relatedProducts = (product, limit = 3) =>
  fakeApi
    .list()
    .map((item) => ({ ...item, category: normalizeProductCategory(item) }))
    .filter((item) => item.slug !== product.slug && item.category === normalizeProductCategory(product))
    .slice(0, limit);

export const productsBySpace = (space) => fakeApi.list()
  .filter((product) => product.space === space)
  .map((product) => ({ ...product, category: normalizeProductCategory(product) }));

export const allProducts = () => fakeApi.list()
  .map((product) => ({ ...product, category: normalizeProductCategory(product) }));

export const categoriesBySpace = (space) => categories.filter((c) => c.space === space);

export const whatsappLink = (message) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
