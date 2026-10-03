export interface Room {
  id: string;
  name: string;
  category: 'king' | 'double' | 'twin' | 'suite';
  tagline: string;
  pricePerNight: number;
  size: string;
  bedType: string;
  capacity: number;
  image: string;
  description: string;
  detailedDescription: string;
  amenities: string[];
  features: string[];
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  category: string;
  description: string;
  tip: string;
}

export const BUSINESS_INFO = {
  name: 'Oleanders Guest House',
  phone: '+44 131 332 3831',
  phoneClean: '+441313323831',
  address: '132 Craigleith Rd, Edinburgh EH4 2EQ, United Kingdom',
  street: '132 Craigleith Rd',
  city: 'Edinburgh',
  postcode: 'EH4 2EQ',
  country: 'United Kingdom',
  email: 'stay@oleandersguesthouse.co.uk',
  checkIn: '15:00 - 21:00',
  checkOut: '07:30 - 10:30',
  parking: 'Free private off-street guest parking available on-site',
  wifi: 'High-speed complimentary Wi-Fi across all guest areas',
};

// Verified image paths created via generate_image
export const IMAGES = {
  hero: '/src/assets/images/hero_oleanders_edinburgh_1791032070953.jpg',
  roomKing: '/src/assets/images/room_deluxe_king_1791032091800.jpg',
  roomGarden: '/src/assets/images/room_garden_suite_1791032106674.jpg',
  interiorLounge: '/src/assets/images/interior_lounge_breakfast_1791032121414.jpg',
  edinburghView: '/src/assets/images/edinburgh_historic_view_1791032135140.jpg',
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-king-ensuite',
    name: 'Deluxe King En-Suite Room',
    category: 'king',
    tagline: 'Refined comfort with plush velvet touches & private en-suite',
    pricePerNight: 135,
    size: '26 m²',
    bedType: '1 Luxury King Bed',
    capacity: 2,
    image: IMAGES.roomKing,
    description: 'A spacious and tranquil sanctuary featuring a handcrafted king-size bed with crisp Egyptian cotton linens, elegant purple velvet accents, and a modern en-suite shower.',
    detailedDescription: 'Designed for discerning travelers seeking quiet rest after exploring Edinburgh. The Deluxe King En-Suite offers high ceilings, traditional Victorian cornicing, an en-suite bathroom with power shower and organic Scottish botanical toiletries, an espresso and tea tray, and double-glazed windows overlooking the residential surroundings.',
    amenities: [
      'Private En-Suite Power Shower',
      'Free High-Speed Wi-Fi',
      'Complimentary Off-Street Parking',
      'Hospitality Tray with Scottish Shortbread',
      'Smart HD Flat-Screen TV',
      'Organic Scottish Highland Toiletries',
      'Hairdryer & Ironing Facilities',
      'Daily Housekeeping'
    ],
    features: [
      'King-size pocket-sprung mattress',
      'Hypoallergenic feather-touch pillows',
      'Comfortable reading armchairs',
      'Dimmable bedside reading lamps',
      'Quiet residential garden side'
    ]
  },
  {
    id: 'garden-suite-lounge',
    name: 'Executive Garden Suite',
    category: 'suite',
    tagline: 'Our largest accommodation with garden outlook & sitting lounge',
    pricePerNight: 160,
    size: '32 m²',
    bedType: '1 Super King Bed (or Twin on request)',
    capacity: 2,
    image: IMAGES.roomGarden,
    description: 'An expansive suite bathed in natural morning light, featuring a dedicated sitting area, lush garden views, and bespoke lavender furnishings.',
    detailedDescription: 'The Executive Garden Suite provides the ultimate Edinburgh guest house experience. Enjoy generous floor space, a dedicated lounge corner with velvet armchairs, a premium hospitality station with artisan Scottish teas and cafetière coffee, and tranquil views across the rear garden.',
    amenities: [
      'Private Deluxe Bathroom & Bathtub/Shower',
      'Dedicated Sitting Lounge Area',
      'Free High-Speed Wi-Fi',
      'Complimentary Off-Street Parking',
      'Gourmet Tea & Cafetière Coffee Tray',
      'Smart 50" 4K TV with Netflix support',
      'Plush Bathrobes & Scottish Toiletries',
      'Mini Fridge with Fresh Scottish Milk'
    ],
    features: [
      'Super King bed with luxury mattress topper',
      'Garden facing sash windows',
      'Ample wardrobe & luggage storage',
      'Working desk & dressing table',
      'Evening turndown service upon request'
    ]
  },
  {
    id: 'superior-double-ensuite',
    name: 'Superior Double En-Suite',
    category: 'double',
    tagline: 'Warm, elegant and peaceful double room for couples and solo explorers',
    pricePerNight: 120,
    size: '21 m²',
    bedType: '1 Comfortable Double Bed',
    capacity: 2,
    image: IMAGES.roomKing,
    description: 'A charming, beautifully appointed double room with soothing lavender decor, en-suite facilities, and generous natural daylight.',
    detailedDescription: 'Perfect for couples or solo travelers visiting Edinburgh for leisure or business. Offers supreme mattress comfort, quiet acoustic insulation, modern en-suite bathroom with heated towel rail, and complimentary hot beverage amenities.',
    amenities: [
      'Private En-Suite Shower Room',
      'Free High-Speed Wi-Fi',
      'Complimentary Off-Street Parking',
      'Scottish Tea & Biscuit Basket',
      'Smart HD TV',
      'Heated Towel Rail & Soft Bath Sheets',
      'Hairdryer & Compact Wardrobe',
      'Non-Smoking Throughout'
    ],
    features: [
      'Quality orthopedic double mattress',
      'High-thread-count cotton bed linen',
      'Bespoke royal purple soft furnishings',
      'Multi-plug & USB charging points'
    ]
  },
  {
    id: 'classic-twin-ensuite',
    name: 'Classic Twin En-Suite',
    category: 'twin',
    tagline: 'Two comfortable single beds with private bathroom & modern amenities',
    pricePerNight: 125,
    size: '23 m²',
    bedType: '2 Individual Single Beds',
    capacity: 2,
    image: IMAGES.roomGarden,
    description: 'Two separate single beds ideal for friends or family travelling together, complete with en-suite shower and traditional Edinburgh character.',
    detailedDescription: 'Spacious and welcoming, the Classic Twin En-Suite offers two individually dressed single beds with premium bedding, private en-suite bathroom, reading lights for each bed, and all the warm hospitality touches Oleanders is celebrated for.',
    amenities: [
      'Private En-Suite Shower',
      '2 Separate Single Beds',
      'Free High-Speed Wi-Fi',
      'Complimentary Off-Street Parking',
      'Traditional Hospitality Tray',
      'Smart Flat-Screen TV',
      'Highland Botanicals Soap & Shampoos',
      'Luggage Racks & Full-Length Mirror'
    ],
    features: [
      'Twin luxury pocket-sprung beds',
      'Separate bedside tables & reading lamps',
      'Bright sash windows with blackout drapes',
      'Quiet top-floor peaceful setting'
    ]
  }
];

export const EDINBURGH_ATTRACTIONS: Attraction[] = [
  {
    id: 'castle',
    name: 'Edinburgh Castle & Royal Mile',
    distance: '2.4 miles (10 mins by bus)',
    travelTime: '10 min direct bus',
    category: 'Historic Landmark',
    description: 'Scotland’s world-famous fortress perched atop volcanic Castle Rock, dominating the Edinburgh skyline with centuries of royal history.',
    tip: 'Take Lothian Bus 41 or 43 directly from near our door to Princes Street and walk up the historic cobblestones.'
  },
  {
    id: 'botanic-garden',
    name: 'Royal Botanic Garden Edinburgh',
    distance: '1.8 miles (7 mins drive)',
    travelTime: '7 min drive / 25 min walk',
    category: 'Nature & Parks',
    description: '70 acres of stunning botanical landscapes, Victorian palm houses, and panoramic views of the Edinburgh skyline.',
    tip: 'A serene morning stroll just minutes from Craigleith Road. Free garden entry.'
  },
  {
    id: 'dean-village',
    name: 'Dean Village & Water of Leith Walk',
    distance: '1.2 miles (5 mins drive)',
    travelTime: '5 min drive / 18 min walk',
    category: 'Picturesque Historic Village',
    description: 'A fairytale-like 19th-century grain milling village nestled in the tranquil gorge of the Water of Leith river.',
    tip: 'Follow the scenic river path that connects directly from Craigleith down through Dean Village to Stockbridge.'
  },
  {
    id: 'princes-street',
    name: 'Princes Street & George Street',
    distance: '2.1 miles (8 mins by bus)',
    travelTime: '8 min bus ride',
    category: 'Shopping & Dining',
    description: 'Edinburgh’s premier shopping boulevard and Georgian New Town dining quarter featuring world-class Scottish restaurants and boutique shops.',
    tip: 'Lothian buses run every few minutes from Craigleith Road directly to Princes Street.'
  },
  {
    id: 'national-gallery',
    name: 'Scottish National Gallery of Modern Art',
    distance: '1.1 miles (4 mins drive)',
    travelTime: '15 min scenic walk',
    category: 'Art & Culture',
    description: 'Exceptional modern and contemporary art exhibitions housed in neoclassical buildings surrounded by sculpture parks.',
    tip: 'Very close to Oleanders Guest House; easy to combine with a walk along the Water of Leith.'
  },
  {
    id: 'arthurs-seat',
    name: "Arthur's Seat & Holyrood Palace",
    distance: '3.5 miles (15 mins drive)',
    travelTime: '15 min taxi / bus',
    category: 'Outdoor & Royal Heritage',
    description: 'The ancient volcano and hill fort offering 360-degree views across Edinburgh and the Firth of Forth, next to the official Scottish royal palace.',
    tip: 'Visit in the late afternoon for breathtaking Scottish sunset vistas across the whole city.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Eleanor & Marcus Vance',
    origin: 'London, UK',
    stayDate: 'Stayed Autumn 2026',
    rating: 5,
    quote: 'Oleanders Guest House is a genuine hidden gem in Edinburgh. Exceptionally comfortable bed, spotless en-suite, and having free on-site parking made our Scottish road trip completely stress-free. The Craigleith location is quiet yet only minutes from Princes Street by bus.',
  },
  {
    id: 2,
    author: 'Dr. Fiona Campbell',
    origin: 'Aberdeen, Scotland',
    stayDate: 'Stayed August 2026',
    rating: 5,
    quote: 'The Scottish hospitality here is truly unmatched. The rooms are beautifully decorated with elegant purple touches, the shortbread and tea tray was a delightful touch, and the hosts provided fantastic local recommendations for dining in Stockbridge.',
  },
  {
    id: 3,
    author: 'Thomas & Claire Dubois',
    origin: 'Paris, France',
    stayDate: 'Stayed July 2026',
    rating: 5,
    quote: 'Such a peaceful and welcoming retreat after busy days exploring Edinburgh Castle and Dean Village. Pristine cleanliness, fast Wi-Fi, and such a warm atmosphere. We will certainly return!',
  }
];

export const KEY_PILLARS = [
  {
    title: 'Peaceful Residential Setting',
    description: 'Located on leafy Craigleith Road in Edinburgh, offering a quiet night of rest away from noisy city centre nightlife, while remaining easily accessible.',
    icon: 'Moon'
  },
  {
    title: 'Warm Scottish Hospitality',
    description: 'Attentive, friendly service with genuine local insight, custom sightseeing advice, and welcoming touches like traditional shortbread and fine teas.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Free Parking & Transit Ease',
    description: 'Rare complimentary private off-street parking in Edinburgh, with direct and frequent bus links right into Princes Street in 8–10 minutes.',
    icon: 'Car'
  },
  {
    title: 'Supreme Comfort & Cleanliness',
    description: 'Pristinely maintained guest rooms featuring luxury mattresses, high-thread-count linens, powerful en-suite showers, and daily housekeeping.',
    icon: 'Sparkles'
  }
];
