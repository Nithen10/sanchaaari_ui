import type { StateSlug } from "./states";

export type PackageKind = "group" | "private";
export type PackageTheme =
  | "Temples"
  | "Pilgrimage"
  | "Heritage"
  | "Wellness"
  | "Senior-Friendly";
export type HotelTier = 3 | 4 | 5 | "Heritage";
export type Transport = "Train" | "Private Vehicle" | "Flight";

export interface ItineraryDay {
  day: number;
  title: string;
  summary: string;
  activities: string[];
  meals: ("Breakfast" | "Lunch" | "Dinner")[];
}

export interface Package {
  slug: string;
  title: string;
  kind: PackageKind;
  states: StateSlug[];
  durationDays: number;
  durationNights: number;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  themes: PackageTheme[];
  departureCities: string[];
  hotelTier: HotelTier;
  transport: Transport[];
  groupSize?: { min: number; max: number };
  shortDescription: string;
  longDescription: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  templeSlugs: string[];
  heroImages: string[];
  gallery: string[];
  senior: {
    wheelchairFriendly: boolean;
    sattvicMeals: boolean;
    doctorOnCall: boolean;
    companionAvailable: boolean;
  };
  badges: ("Most Popular" | "Best for Seniors" | "New" | "Premium")[];
}

const COMMON_INCLUSIONS = [
  "AC accommodation on twin-sharing basis",
  "Daily breakfast and dinner (sattvic options available)",
  "All transfers in private AC vehicle",
  "Experienced multilingual tour manager",
  "All temple darshan arrangements with prior booking where possible",
  "Drinking water and refreshments en route",
  "Applicable taxes & GST",
];

const COMMON_EXCLUSIONS = [
  "Airfare / train fare to and from the start city",
  "Personal expenses (laundry, calls, tips)",
  "Pooja items, special seva tickets and donations",
  "Travel insurance",
  "Anything not mentioned under inclusions",
];

export const PACKAGES: Package[] = [
  {
    slug: "tamil-nadu-temple-trail-7d",
    title: "Tamil Nadu Temple Trail, 7 Days",
    kind: "group",
    states: ["tamil-nadu"],
    durationDays: 7,
    durationNights: 6,
    priceFrom: 38500,
    rating: 4.9,
    reviewCount: 142,
    themes: ["Temples", "Pilgrimage", "Heritage", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 12, max: 28 },
    shortDescription:
      "Madurai, Rameshwaram, Thanjavur and Chidambaram: the four pillars of Tamil temple culture, paced gently for senior travellers.",
    longDescription:
      "Begin at Meenakshi Amman in Madurai, cross to Rameshwaram for the Jyotirlinga and tirtha snanas, then turn north to Thanjavur's Chola masterpiece and end on the Akasha lingam at Chidambaram. Mornings start unhurriedly, every darshan is pre-arranged, and the daily distances are kept under three hours to keep things comfortable.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Pre-arranged senior-darshan slots where available",
      "Walking-stick / wheelchair on request",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: "Arrive Madurai, Meenakshi evening aarti",
        summary: "Welcome assistance at Madurai airport, gentle check-in and an evening visit for the Meenakshi night aarti.",
        activities: ["Pick-up and transfer", "Evening Meenakshi darshan", "Welcome dinner"],
        meals: ["Dinner"],
      },
      {
        day: 2,
        title: "Madurai full-day",
        summary: "Morning darshan at the inner sanctums, Pottramarai tank walk, Thirumalai Nayak Palace and Gandhi Memorial.",
        activities: [
          "Sunrise darshan at Meenakshi Amman",
          "Thirumalai Nayak Palace tour",
          "Lunch at heritage hotel",
          "Optional Banana-leaf meal experience",
        ],
        meals: ["Breakfast", "Lunch", "Dinner"],
      },
      {
        day: 3,
        title: "Drive to Rameshwaram",
        summary: "Cross the Pamban Bridge and check in close to the temple. Evening Agni-tirtha snan.",
        activities: ["Pamban Bridge stop", "Agni Tirtham", "Evening aarti"],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 4,
        title: "Ramanathaswamy darshan & 22 tirthams",
        summary: "Guided tirtha snanam, sphatika lingam darshan and Dhanushkodi excursion.",
        activities: ["22-tirtha snanam", "Sphatika lingam darshan", "Dhanushkodi viewpoint"],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 5,
        title: "Drive Rameshwaram → Thanjavur",
        summary: "Long, scenic drive past paddy and palmyra. Evening at the Brihadeeswarar temple.",
        activities: ["Drive with multiple stops", "Sunset at Brihadeeswarar"],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 6,
        title: "Thanjavur & Chidambaram",
        summary: "Morning at the Big Temple, afternoon transfer to Chidambaram for Nataraja darshan.",
        activities: [
          "Brihadeeswarar morning puja",
          "Saraswathi Mahal Library (optional)",
          "Chidambaram Nataraja darshan",
        ],
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 7,
        title: "Chennai transfer & departure",
        summary: "Easy morning, transfer to Chennai for onward flights.",
        activities: ["Transfer to Chennai airport"],
        meals: ["Breakfast"],
      },
    ],
    templeSlugs: [
      "meenakshi-amman",
      "rameshwaram",
      "thanjavur-brihadeeswarar",
      "chidambaram-nataraja",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: {
      wheelchairFriendly: true,
      sattvicMeals: true,
      doctorOnCall: true,
      companionAvailable: true,
    },
    badges: ["Most Popular", "Best for Seniors"],
  },
  {
    slug: "kerala-spiritual-retreat-6d",
    title: "Kerala Spiritual Retreat, 6 Days",
    kind: "group",
    states: ["kerala"],
    durationDays: 6,
    durationNights: 5,
    priceFrom: 42500,
    rating: 4.8,
    reviewCount: 98,
    themes: ["Temples", "Wellness", "Senior-Friendly"],
    departureCities: ["Kochi", "Bengaluru", "Chennai"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 24 },
    shortDescription:
      "Padmanabhaswamy and Guruvayur darshans paired with three days of Ayurveda by the backwaters.",
    longDescription:
      "A gentle pace built for restoration. Begin in Thiruvananthapuram with Padmanabhaswamy, glide along Alleppey's backwaters on a private houseboat, take an Ayurveda consult, and close with Guruvayur's Krishna darshan.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "One night on a private houseboat",
      "Ayurveda consultation and one signature therapy",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Thiruvananthapuram", summary: "Airport pick-up, rest, evening orientation.", activities: ["Airport pick-up", "Welcome briefing"], meals: ["Dinner"] },
      { day: 2, title: "Padmanabhaswamy darshan", summary: "Sunrise darshan, Napier Museum, drive to Kovalam.", activities: ["Padmanabha darshan", "Napier Museum"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Alleppey houseboat", summary: "Backwater cruise with traditional Kerala meals on board.", activities: ["Private houseboat", "Onboard meals"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 4, title: "Kochi heritage walk", summary: "Fort Kochi, Mattancherry Palace, Jew Town and an Ayurveda consult in the evening.", activities: ["Fort Kochi walk", "Mattancherry", "Ayurveda consult"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Guruvayur darshan", summary: "Early morning at Guruvayoor, then to Thrissur for the night.", activities: ["Guruvayur darshan", "Thrissur city tour"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Depart Kochi", summary: "Airport drop-off.", activities: ["Transfer to Kochi airport"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["padmanabhaswamy", "guruvayur"],
    heroImages: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Best for Seniors"],
  },
  {
    slug: "karnataka-coast-shiva-5d",
    title: "Karnataka Coast Shiva Trail, 5 Days",
    kind: "group",
    states: ["karnataka"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 32500,
    rating: 4.7,
    reviewCount: 64,
    themes: ["Temples", "Heritage"],
    departureCities: ["Bengaluru", "Mangaluru"],
    hotelTier: 3,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 26 },
    shortDescription:
      "Gokarna, Murudeshwar and Udupi: three coastal shrines and a long stretch of the Arabian Sea.",
    longDescription:
      "From the Atmalinga at Gokarna to the towering Shiva of Murudeshwar and the Krishna kindi at Udupi, this is the Karnataka coast at its devotional best.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Mangaluru → Udupi", summary: "Arrive Mangaluru, transfer to Udupi for evening darshan.", activities: ["Udupi Krishna darshan"], meals: ["Dinner"] },
      { day: 2, title: "Murudeshwar", summary: "Drive north to Murudeshwar; statue elevator and headland sunset.", activities: ["Murudeshwar temple", "Headland sunset"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Gokarna day", summary: "Mahabaleshwar darshan, town walk, Om beach (optional).", activities: ["Mahabaleshwar", "Town walk"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Back to Udupi via Sirsi", summary: "Long return drive with stops; evening leisure.", activities: ["Sirsi Marikamba (optional)"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Depart Mangaluru", summary: "Transfer to airport / station.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["udupi-krishna", "murudeshwar", "gokarna"],
    heroImages: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "tirupati-srisailam-4d",
    title: "Tirupati and Srisailam, 4 Days",
    kind: "group",
    states: ["andhra-pradesh"],
    durationDays: 4,
    durationNights: 3,
    priceFrom: 24500,
    rating: 4.9,
    reviewCount: 211,
    themes: ["Temples", "Pilgrimage", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 14, max: 30 },
    shortDescription:
      "Two of South India's most powerful Shaiva and Vaishnava shrines, with senior-darshan slots pre-booked.",
    longDescription:
      "Open with Tirumala Balaji darshan including pre-booked Sarva-Darshan, then transit overnight to Srisailam through the Nallamala forest for Mallikarjuna Jyotirlinga and Bhramaramba Devi.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Tirumala darshan booking assistance",
      "Senior-darshan queue arrangements where allowed",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Tirupati", summary: "Pick-up, hill ascent, evening rest.", activities: ["Hill ascent", "Briefing"], meals: ["Dinner"] },
      { day: 2, title: "Tirumala Darshan", summary: "Balaji darshan, Padmavati Devi temple.", activities: ["Balaji darshan", "Padmavati darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Drive to Srisailam", summary: "Long drive through the forest; evening darshan.", activities: ["Mallikarjuna darshan", "Bhramaramba darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Depart Hyderabad", summary: "Drive to Hyderabad for onward travel.", activities: ["Transfer to Hyderabad"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["tirumala-tirupati", "srisailam-mallikarjuna"],
    heroImages: ["/images/tirupati-temple.png"],
    gallery: ["/images/tirupati-temple.png"],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Most Popular", "Best for Seniors"],
  },
  {
    slug: "telangana-heritage-5d",
    title: "Telangana Heritage, 5 Days",
    kind: "group",
    states: ["telangana"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 29500,
    rating: 4.7,
    reviewCount: 47,
    themes: ["Temples", "Heritage"],
    departureCities: ["Hyderabad", "Bengaluru"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 24 },
    shortDescription:
      "Ramappa's UNESCO marvel, Yadadri's new stone temple and Bhadrachalam's Rama shrine. Telangana end to end.",
    longDescription:
      "A heritage-first route covering the Kakatiya stone craft at Ramappa, the freshly rebuilt Yadadri Narasimha, and the Godavari-side Bhadrachalam Rama temple, with Hyderabad's Charminar and Salar Jung as bookends.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Hyderabad", summary: "Charminar walk, Salar Jung museum.", activities: ["Charminar", "Salar Jung"], meals: ["Dinner"] },
      { day: 2, title: "Yadadri darshan", summary: "Hilltop Narasimha darshan, return to Hyderabad.", activities: ["Yadadri darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Warangal & Ramappa", summary: "Warangal Fort, then UNESCO Ramappa.", activities: ["Warangal Fort", "Ramappa temple"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Bhadrachalam", summary: "Long drive to Bhadrachalam, evening Rama darshan.", activities: ["Bhadrachalam darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Depart Hyderabad", summary: "Return drive and drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["ramappa", "yadadri", "bhadrachalam"],
    heroImages: ["/images/ramappa-temple.png"],
    gallery: ["/images/ramappa-temple.png"],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "south-char-dham-12d",
    title: "South Char Dham Yatra, 12 Days",
    kind: "group",
    states: ["tamil-nadu", "andhra-pradesh", "kerala"],
    durationDays: 12,
    durationNights: 11,
    priceFrom: 68500,
    rating: 4.9,
    reviewCount: 89,
    themes: ["Pilgrimage", "Temples", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 16, max: 32 },
    shortDescription:
      "The four cardinal southern pilgrimages in a single, lovingly paced 12-day journey.",
    longDescription:
      "Tirumala, Rameshwaram, Madurai's Meenakshi and Guruvayur, completed in the traditional order with rest days woven in and senior-darshan slots booked in advance.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Senior-darshan slots booked where available",
      "Two rest days within the itinerary",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Chennai", summary: "Pick-up and rest.", activities: ["Pick-up"], meals: ["Dinner"] },
      { day: 2, title: "Chennai → Tirupati", summary: "Drive to Tirupati base, evening briefing.", activities: ["Drive", "Briefing"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Tirumala Darshan", summary: "Balaji darshan and rest.", activities: ["Balaji darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Drive to Madurai", summary: "Long travel day with comfort stops.", activities: ["Long drive"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Meenakshi day", summary: "Madurai full-day.", activities: ["Meenakshi darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Rest day Madurai", summary: "Optional Thirumalai Nayak Palace; otherwise rest.", activities: ["Rest"], meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Rameshwaram transfer", summary: "Pamban Bridge crossing.", activities: ["Drive"], meals: ["Breakfast", "Dinner"] },
      { day: 8, title: "Rameshwaram darshan", summary: "22-tirtha snanam and main darshan.", activities: ["22-tirtha snan", "Main darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Drive to Kochi", summary: "Long but scenic drive.", activities: ["Drive"], meals: ["Breakfast", "Dinner"] },
      { day: 10, title: "Guruvayur darshan", summary: "Morning darshan, afternoon rest.", activities: ["Guruvayur darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 11, title: "Kochi leisure", summary: "Fort Kochi walk and souvenir shopping.", activities: ["Fort Kochi"], meals: ["Breakfast", "Dinner"] },
      { day: 12, title: "Depart Kochi", summary: "Drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["tirumala-tirupati", "meenakshi-amman", "rameshwaram", "guruvayur"],
    heroImages: ["/images/tirupati-temple.png"],
    gallery: ["/images/tirupati-temple.png"],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Most Popular", "Best for Seniors", "Premium"],
  },
  {
    slug: "private-meenakshi-rameshwaram-5d",
    title: "Private Meenakshi and Rameshwaram, 5 Days",
    kind: "private",
    states: ["tamil-nadu"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 58500,
    rating: 5.0,
    reviewCount: 32,
    themes: ["Temples", "Senior-Friendly"],
    departureCities: ["Chennai", "Madurai"],
    hotelTier: 5,
    transport: ["Private Vehicle"],
    shortDescription:
      "A bespoke 5-day private tour covering Meenakshi and Rameshwaram with a personal companion option.",
    longDescription:
      "Designed for families. Hand-picked 5-star hotels, completely flexible pace, optional companion assistant included on request.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Dedicated private vehicle and chauffeur",
      "Optional dedicated travel companion",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Madurai", summary: "Pick-up, evening Meenakshi visit.", activities: ["Pick-up", "Meenakshi evening"], meals: ["Dinner"] },
      { day: 2, title: "Madurai day", summary: "Full Meenakshi darshan with private guide.", activities: ["Meenakshi", "Palace"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Drive to Rameshwaram", summary: "Pamban Bridge stop.", activities: ["Drive", "Pamban"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Rameshwaram darshan", summary: "Tirtha snanam and main darshan.", activities: ["22-tirtha snan", "Darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Depart Madurai", summary: "Drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["meenakshi-amman", "rameshwaram"],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Premium", "Best for Seniors"],
  },
  {
    slug: "private-kerala-ayurveda-7d",
    title: "Private Kerala Ayurveda Journey, 7 Days",
    kind: "private",
    states: ["kerala"],
    durationDays: 7,
    durationNights: 6,
    priceFrom: 92500,
    rating: 4.9,
    reviewCount: 41,
    themes: ["Wellness", "Heritage", "Senior-Friendly"],
    departureCities: ["Kochi", "Bengaluru"],
    hotelTier: "Heritage",
    transport: ["Private Vehicle"],
    shortDescription:
      "A private, restorative Ayurveda retreat woven with Padmanabhaswamy and Guruvayur darshans.",
    longDescription:
      "Five nights at heritage Ayurveda resorts, full doctor consultation, daily therapies, two darshans, one houseboat night. Designed for those who travel to restore.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Two daily Ayurveda therapies",
      "Doctor consultation, custom diet plan",
      "Private vehicle with chauffeur throughout",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Trivandrum", summary: "Welcome, doctor consult.", activities: ["Consult"], meals: ["Dinner"] },
      { day: 2, title: "Padmanabhaswamy darshan", summary: "Sunrise darshan and a therapy session.", activities: ["Darshan", "Therapy"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 3, title: "Drive to Alleppey", summary: "Houseboat overnight.", activities: ["Houseboat"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 4, title: "Backwaters & spa", summary: "Two therapies, gentle walk.", activities: ["Therapies"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 5, title: "Drive to Guruvayur", summary: "Evening darshan.", activities: ["Guruvayur darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Thrissur leisure", summary: "Cultural day, optional Kathakali show.", activities: ["Kathakali"], meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Depart Kochi", summary: "Drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["padmanabhaswamy", "guruvayur"],
    heroImages: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Premium", "Best for Seniors"],
  },
  {
    slug: "private-karnataka-coast-7d",
    title: "Private Karnataka Coast and Hampi, 7 Days",
    kind: "private",
    states: ["karnataka"],
    durationDays: 7,
    durationNights: 6,
    priceFrom: 74500,
    rating: 4.8,
    reviewCount: 22,
    themes: ["Heritage", "Temples"],
    departureCities: ["Bengaluru", "Mangaluru"],
    hotelTier: 5,
    transport: ["Private Vehicle"],
    shortDescription:
      "Gokarna, Murudeshwar, Udupi and the boulder ruins of Hampi: coast to interior in a single private trip.",
    longDescription:
      "An expert-led private tour that pairs the temple coast with the Vijayanagara ruins of Hampi.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Mangaluru → Udupi", summary: "Welcome and Udupi darshan.", activities: ["Udupi darshan"], meals: ["Dinner"] },
      { day: 2, title: "Murudeshwar", summary: "Statue & headland.", activities: ["Murudeshwar"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Gokarna", summary: "Mahabaleshwar.", activities: ["Mahabaleshwar"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Drive to Hampi", summary: "Long drive, evening leisure.", activities: ["Drive"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Hampi monuments", summary: "Virupaksha, Vittala temple, royal enclosure.", activities: ["Virupaksha", "Vittala"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Hampi sunset & departure prep", summary: "Hemakuta sunset.", activities: ["Sunset"], meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Depart Hubli / Bengaluru", summary: "Transfer.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["udupi-krishna", "murudeshwar", "gokarna"],
    heroImages: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: false, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["Premium"],
  },
  {
    slug: "private-tirupati-balaji-3d",
    title: "Private Tirumala Balaji Express, 3 Days",
    kind: "private",
    states: ["andhra-pradesh"],
    durationDays: 3,
    durationNights: 2,
    priceFrom: 32500,
    rating: 5.0,
    reviewCount: 56,
    themes: ["Temples", "Pilgrimage", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    shortDescription:
      "A short, private Tirumala darshan with pre-booked slots and senior-darshan support.",
    longDescription:
      "Compact and comfortable. Pick-up, special darshan assistance, padmavati visit and quick return. Ideal for working families and short windows.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Senior-darshan / break-darshan assistance",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrival & hill ascent", summary: "Pick-up and rest.", activities: ["Hill ascent"], meals: ["Dinner"] },
      { day: 2, title: "Darshan day", summary: "Balaji darshan and Padmavati Devi.", activities: ["Balaji", "Padmavati"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Departure", summary: "Transfer.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["tirumala-tirupati"],
    heroImages: ["/images/tirupati-temple.png"],
    gallery: ["/images/tirupati-temple.png"],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Best for Seniors"],
  },
  {
    slug: "private-telangana-3d",
    title: "Private Telangana Heritage, 3 Days",
    kind: "private",
    states: ["telangana"],
    durationDays: 3,
    durationNights: 2,
    priceFrom: 28500,
    rating: 4.6,
    reviewCount: 14,
    themes: ["Heritage", "Temples"],
    departureCities: ["Hyderabad"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    shortDescription:
      "A compact private Telangana weekend covering Yadadri, Ramappa and Charminar.",
    longDescription:
      "Two highlights, one heritage stop, no rush. Hyderabad's Charminar makes for a perfect closing evening.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Yadadri", summary: "Hilltop darshan and return.", activities: ["Yadadri"], meals: ["Dinner"] },
      { day: 2, title: "Warangal & Ramappa", summary: "Fort + UNESCO temple.", activities: ["Warangal Fort", "Ramappa"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Hyderabad", summary: "Charminar walk + departure.", activities: ["Charminar"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["yadadri", "ramappa"],
    heroImages: ["/images/ramappa-temple.png"],
    gallery: ["/images/ramappa-temple.png"],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "south-india-grand-15d",
    title: "South India Grand Heritage, 15 Days",
    kind: "private",
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    durationDays: 15,
    durationNights: 14,
    priceFrom: 165000,
    rating: 4.9,
    reviewCount: 12,
    themes: ["Heritage", "Temples", "Pilgrimage", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 5,
    transport: ["Private Vehicle", "Flight"],
    shortDescription:
      "All five South-Indian states across fifteen days. The most complete heritage journey we run.",
    longDescription:
      "Hand-curated for families that want one definitive South India journey. Five states, twelve temples, two heritage sites, hand-picked five-star and heritage accommodation throughout.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Two internal flights",
      "Dedicated travel companion throughout",
      "All senior-darshan / queue assistance",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Chennai", summary: "Welcome and rest.", activities: ["Pick-up"], meals: ["Dinner"] },
      { day: 2, title: "Mahabalipuram & Kanchipuram", summary: "Shore Temple and Ekambareswarar.", activities: ["Shore Temple", "Ekambareswarar"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Drive Thanjavur", summary: "Brihadeeswarar evening.", activities: ["Brihadeeswarar"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Chidambaram", summary: "Nataraja darshan, then Madurai.", activities: ["Nataraja"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Madurai", summary: "Meenakshi day.", activities: ["Meenakshi"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Rameshwaram", summary: "Pamban + darshan.", activities: ["Pamban", "Darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Fly Kochi", summary: "Internal flight + rest.", activities: ["Fly"], meals: ["Breakfast", "Dinner"] },
      { day: 8, title: "Guruvayur", summary: "Morning darshan.", activities: ["Darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Padmanabhaswamy & backwaters", summary: "Two-in-one day.", activities: ["Padmanabha", "Houseboat"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 10, title: "Fly Bengaluru → Hampi", summary: "Internal flight + drive.", activities: ["Drive Hampi"], meals: ["Breakfast", "Dinner"] },
      { day: 11, title: "Hampi", summary: "Monuments + Virupaksha.", activities: ["Monuments"], meals: ["Breakfast", "Dinner"] },
      { day: 12, title: "Tirupati", summary: "Drive + evening hill ascent.", activities: ["Hill ascent"], meals: ["Breakfast", "Dinner"] },
      { day: 13, title: "Balaji darshan", summary: "Darshan day.", activities: ["Darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 14, title: "Hyderabad", summary: "Charminar + farewell dinner.", activities: ["Charminar", "Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 15, title: "Depart", summary: "Transfer.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: [
      "kanchipuram-ekambareswarar",
      "thanjavur-brihadeeswarar",
      "chidambaram-nataraja",
      "meenakshi-amman",
      "rameshwaram",
      "guruvayur",
      "padmanabhaswamy",
      "tirumala-tirupati",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Premium", "Best for Seniors"],
  },

  /* ---------------- Weekend & short trips ---------------- */
  {
    slug: "weekend-bengaluru-mysore-2d",
    title: "Bengaluru and Mysore Weekend, 2 Days",
    kind: "group",
    states: ["karnataka"],
    durationDays: 2,
    durationNights: 1,
    priceFrom: 9500,
    rating: 4.7,
    reviewCount: 38,
    themes: ["Heritage", "Senior-Friendly"],
    departureCities: ["Bengaluru"],
    hotelTier: 3,
    transport: ["Private Vehicle"],
    groupSize: { min: 8, max: 20 },
    shortDescription:
      "A relaxed two-day weekend covering Mysore Palace and a peek at the city's grandest temples.",
    longDescription:
      "Built for working families who can spare a weekend. We pick you up in Bengaluru on Saturday morning, drive the scenic route to Mysore, see the illuminated palace at sunset, and visit Chamundi Hills temple the next morning before returning. No rush, no late nights, no overpacking. A good first taste of Sanchaari if you have never travelled with us.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Bengaluru to Mysore", summary: "Morning pickup, scenic drive with a coffee stop, afternoon palace visit, evening palace illumination.", activities: ["Mysore Palace", "Sound and light show"], meals: ["Lunch", "Dinner"] },
      { day: 2, title: "Chamundi & return", summary: "Sunrise darshan at Chamundi temple, breakfast with a view, and a relaxed drive back to Bengaluru.", activities: ["Chamundi darshan", "Brindavan Gardens (optional)"], meals: ["Breakfast", "Lunch"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "weekend-chennai-mahabalipuram-2d",
    title: "Chennai and Mahabalipuram Weekend, 2 Days",
    kind: "group",
    states: ["tamil-nadu"],
    durationDays: 2,
    durationNights: 1,
    priceFrom: 9800,
    rating: 4.8,
    reviewCount: 52,
    themes: ["Heritage", "Temples", "Senior-Friendly"],
    departureCities: ["Chennai"],
    hotelTier: 3,
    transport: ["Private Vehicle"],
    groupSize: { min: 8, max: 22 },
    shortDescription:
      "Two unhurried days exploring Chennai's old town and the UNESCO Shore Temple at Mahabalipuram.",
    longDescription:
      "A perfect short break for families with elders. Day one is a walking-light tour of Chennai's old quarters and the Kapaleeswarar temple. On day two we drive the East Coast Road to Mahabalipuram, see the Shore Temple, the rock-cut caves and the Five Rathas, then a quiet seafood lunch before driving back. Distances stay short, all walks have shade and seating, and we keep the schedule loose.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Chennai heritage walk", summary: "Mylapore quarter walk, Kapaleeswarar temple, Marina Beach evening.", activities: ["Mylapore walk", "Kapaleeswarar darshan", "Marina"], meals: ["Lunch", "Dinner"] },
      { day: 2, title: "Mahabalipuram", summary: "Drive ECR, Shore Temple, Five Rathas, Pancha Pandava caves, lunch by the sea.", activities: ["Shore Temple", "Five Rathas"], meals: ["Breakfast", "Lunch"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New", "Best for Seniors"],
  },

  /* ---------------- Family & women-focused ---------------- */
  {
    slug: "family-kerala-7d",
    title: "Family Kerala with Kids, 7 Days",
    kind: "group",
    states: ["kerala"],
    durationDays: 7,
    durationNights: 6,
    priceFrom: 46500,
    rating: 4.8,
    reviewCount: 71,
    themes: ["Heritage", "Wellness"],
    departureCities: ["Kochi", "Bengaluru", "Chennai"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 24 },
    shortDescription:
      "Backwaters, beaches, elephants and a tea garden, planned with children in mind.",
    longDescription:
      "Travel with kids should be joyful, not exhausting. This tour balances quiet temple time for the grandparents with elephant feeding and chocolate-factory visits for the children. We stay at hotels with pools, keep car journeys under three hours, and pack a small games kit for the houseboat night. There is enough for everyone to come home delighted.",
    inclusions: [...COMMON_INCLUSIONS, "Houseboat overnight with kid-friendly meals", "Elephant sanctuary entry"],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Kochi", summary: "Welcome, harbour-front evening.", activities: ["Welcome dinner"], meals: ["Dinner"] },
      { day: 2, title: "Fort Kochi day", summary: "Fishing nets, spice market, kids' workshop at an art house.", activities: ["Fort Kochi walk", "Art workshop"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Drive to Munnar", summary: "Tea gardens, chocolate factory, dinner at the resort.", activities: ["Tea garden visit"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Munnar leisure", summary: "Lazy morning, optional jeep ride, swimming pool afternoon.", activities: ["Optional jeep ride"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 5, title: "Thekkady & elephants", summary: "Drive to Thekkady, elephant sanctuary visit, spice walk.", activities: ["Elephant sanctuary", "Spice walk"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Houseboat night", summary: "Backwaters board at noon, slow cruise, family dinner on the boat.", activities: ["Houseboat"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 7, title: "Depart Kochi", summary: "Disembark, transfer to the airport.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "women-only-tamil-nadu-6d",
    title: "Women-only Tamil Nadu Temple Trail, 6 Days",
    kind: "group",
    states: ["tamil-nadu"],
    durationDays: 6,
    durationNights: 5,
    priceFrom: 36500,
    rating: 5.0,
    reviewCount: 24,
    themes: ["Temples", "Pilgrimage", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Madurai"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 8, max: 18 },
    shortDescription:
      "An all-women group tour through Tamil Nadu's most powerful temples, led by a female tour manager.",
    longDescription:
      "Designed for women travelling solo, with a daughter, sister or aunt, or simply with friends. Our female tour manager and female driver accompany the group throughout. We pick hotels we have known for years, choose restaurants where women dine comfortably, and build in plenty of quiet time. Many of our regular Samuha women travellers say this is the trip they recommend most.",
    inclusions: [...COMMON_INCLUSIONS, "Female tour manager", "Female driver where available"],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Madurai", summary: "Airport pickup, light dinner, brief.", activities: ["Welcome dinner"], meals: ["Dinner"] },
      { day: 2, title: "Meenakshi day", summary: "Sunrise darshan, palace visit, evening aarti.", activities: ["Meenakshi sunrise", "Thirumalai Nayak Palace"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Drive to Rameshwaram", summary: "Pamban bridge stop, evening Agni-tirtha snan.", activities: ["Pamban", "Agni Tirtham"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Rameshwaram darshan", summary: "Sphatika lingam and 22-tirtha snanam.", activities: ["22-tirtha snan"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Thanjavur big temple", summary: "Drive across, Brihadeeswarar at sunset.", activities: ["Brihadeeswarar"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Depart Trichy or Chennai", summary: "Transfer to the airport.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["meenakshi-amman", "rameshwaram", "thanjavur-brihadeeswarar"],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["New", "Best for Seniors"],
  },

  /* ---------------- Wellness ---------------- */
  {
    slug: "ayurveda-kerala-10d",
    title: "Kerala Deep Ayurveda Retreat, 10 Days",
    kind: "private",
    states: ["kerala"],
    durationDays: 10,
    durationNights: 9,
    priceFrom: 145000,
    rating: 4.9,
    reviewCount: 19,
    themes: ["Wellness", "Senior-Friendly"],
    departureCities: ["Kochi", "Bengaluru", "Chennai"],
    hotelTier: "Heritage",
    transport: ["Private Vehicle"],
    shortDescription:
      "Nine nights at a senior Ayurveda doctor's residential clinic, with twin daily therapies and clean food.",
    longDescription:
      "An honest retreat. No spa fluff. You stay in a heritage building near the backwaters, see the senior doctor on day one for a full consult, and follow a treatment plan of two therapies a day for the full nine nights. Meals are cooked to your dosha. Sleep, walk, read, rest. This is the package returning travellers ask for when they feel the strain of city life.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Doctor consultation and personalised plan",
      "Two daily therapies for nine days",
      "Custom diet planned by the doctor",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive and consult", summary: "Pickup at Kochi, settle in, doctor consultation.", activities: ["Consultation"], meals: ["Dinner"] },
      { day: 2, title: "Therapies begin", summary: "Morning Abhyanga and Shirodhara, afternoon Pizhichil.", activities: ["Abhyanga", "Shirodhara"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 3, title: "Day three", summary: "Continue prescribed therapies, quiet evening.", activities: ["Therapy", "Yoga"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 4, title: "Mid-retreat review", summary: "Doctor check-in, gentle adjustments to therapy plan.", activities: ["Doctor review"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 5, title: "Day five", summary: "Therapies, optional short backwater walk.", activities: ["Therapy"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 6, title: "Day six", summary: "Deepening therapies, light meal day.", activities: ["Therapy"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 7, title: "Day seven", summary: "Rest, optional reading session with the doctor.", activities: ["Therapy"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 8, title: "Day eight", summary: "Final phase of treatment.", activities: ["Therapy"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 9, title: "Closing day", summary: "Doctor sign-off, take-home protocol, herbal kit.", activities: ["Sign-off", "Take-home kit"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 10, title: "Depart Kochi", summary: "Drop-off at the airport.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Premium", "Best for Seniors"],
  },

  /* ---------------- Hill stations ---------------- */
  {
    slug: "hills-munnar-thekkady-5d",
    title: "Kerala Hills: Munnar and Thekkady, 5 Days",
    kind: "group",
    states: ["kerala"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 31500,
    rating: 4.7,
    reviewCount: 44,
    themes: ["Heritage", "Wellness"],
    departureCities: ["Kochi", "Bengaluru"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 22 },
    shortDescription:
      "Tea gardens, spice walks and forest air at two of Kerala's most-loved hill stations.",
    longDescription:
      "If you want green Kerala without the temple crowds, this is the trip. Three nights in Munnar with proper tea-garden walks and a chocolate factory visit, then two nights in Thekkady with a quiet boat ride on the Periyar lake and a guided spice plantation tour. We pick rooms with garden views, build in slow mornings, and end the trip with a return drive through the lower hills.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Kochi to Munnar", summary: "Scenic drive, waterfall stops, evening leisure.", activities: ["Waterfall stop"], meals: ["Dinner"] },
      { day: 2, title: "Munnar tea gardens", summary: "Tea garden visit, chocolate factory, tea museum.", activities: ["Tea garden walk"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Munnar leisure", summary: "Optional jeep ride to Top Station; otherwise rest.", activities: ["Optional Top Station"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Drive to Thekkady", summary: "Spice walk, evening boat ride on Periyar lake.", activities: ["Spice plantation", "Periyar boat"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Return to Kochi", summary: "Drive back through the hills, drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "hills-coorg-ooty-6d",
    title: "Coorg and Ooty Hill Journey, 6 Days",
    kind: "group",
    states: ["karnataka", "tamil-nadu"],
    durationDays: 6,
    durationNights: 5,
    priceFrom: 42500,
    rating: 4.6,
    reviewCount: 33,
    themes: ["Heritage"],
    departureCities: ["Bengaluru", "Mysore"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 20 },
    shortDescription:
      "Coorg's coffee hills and Ooty's blue mountains in a six-day cross-state hill journey.",
    longDescription:
      "Coorg first, for the coffee estates, the Tibetan monastery and the Dubare elephant camp. Then over the Nilgiris to Ooty for the Botanical Gardens, a ride on the heritage Nilgiri Mountain Railway and quiet evenings by the lake. Hill driving can tire elders, so we keep stretches under three hours and add tea stops with views.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Bengaluru to Coorg", summary: "Drive up, evening leisure at the resort.", activities: ["Welcome dinner"], meals: ["Dinner"] },
      { day: 2, title: "Coorg estates", summary: "Coffee estate walk, Dubare elephant camp.", activities: ["Coffee estate", "Dubare"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Coorg leisure", summary: "Tibetan monastery, Talakaveri viewpoint.", activities: ["Bylakuppe monastery"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Drive to Ooty", summary: "Long but scenic drive, evening rest.", activities: ["Scenic drive"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Ooty highlights", summary: "Botanical Gardens, Nilgiri toy train ride, lake walk.", activities: ["Toy train", "Botanical Gardens"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Depart via Mysore", summary: "Drive down via Bandipur, drop at Mysore or Bengaluru.", activities: ["Bandipur drive"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: false, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },

  /* ---------------- Beaches ---------------- */
  {
    slug: "beaches-gokarna-varkala-5d",
    title: "South India Beach Trail, 5 Days",
    kind: "group",
    states: ["karnataka", "kerala"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 34500,
    rating: 4.6,
    reviewCount: 27,
    themes: ["Heritage"],
    departureCities: ["Bengaluru", "Mangaluru"],
    hotelTier: 3,
    transport: ["Private Vehicle"],
    groupSize: { min: 8, max: 18 },
    shortDescription:
      "Calm-water beaches and sunset cliffs at Gokarna and Varkala, away from the Goa crowds.",
    longDescription:
      "The South-Indian coast has a softer kind of beach than Goa. We start at Gokarna with its temple-town charm and Om Beach, drive south along the coast to Varkala for cliff-edge cafes and Janardanaswamy temple, and finish at Kovalam. Three nights, two states, and time enough to read a book or two by the sea.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Gokarna", summary: "Pick-up at Mangaluru, drive to Gokarna, sunset on Om Beach.", activities: ["Om Beach sunset"], meals: ["Dinner"] },
      { day: 2, title: "Gokarna leisure", summary: "Mahabaleshwar darshan, optional Kudle beach walk.", activities: ["Mahabaleshwar", "Kudle walk"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Coastal drive", summary: "Long but scenic drive south to Varkala.", activities: ["Coastal drive"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Varkala cliffs", summary: "Cliff cafe lunch, Janardanaswamy darshan.", activities: ["Cliff walk", "Janardanaswamy"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Depart Trivandrum", summary: "Short drive, transfer to the airport.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["gokarna"],
    heroImages: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: false, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },

  /* ---------------- Pilgrimage circuits ---------------- */
  {
    slug: "pancha-bhoota-yatra-9d",
    title: "Pancha Bhoota Sthalams Yatra, 9 Days",
    kind: "group",
    states: ["tamil-nadu", "andhra-pradesh"],
    durationDays: 9,
    durationNights: 8,
    priceFrom: 54500,
    rating: 4.9,
    reviewCount: 36,
    themes: ["Pilgrimage", "Temples", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 12, max: 24 },
    shortDescription:
      "The five Shiva temples representing the five elements, in the traditional sequence.",
    longDescription:
      "The Pancha Bhoota Sthalams are five ancient Shiva temples, each enshrining one of the five great elements: earth at Kanchipuram, water at Tiruvanaikoil, fire at Tiruvannamalai, air at Srikalahasti, and ether at Chidambaram. Pilgrims have travelled this circuit in this exact order for over a thousand years. Our tour manager briefs you each evening on the next morning's darshan and the temple's significance, and we pre-book senior queues at every stop.",
    inclusions: [...COMMON_INCLUSIONS, "Pre-arranged senior-darshan slots at every temple"],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Chennai", summary: "Welcome dinner, briefing.", activities: ["Briefing"], meals: ["Dinner"] },
      { day: 2, title: "Kanchipuram (Earth)", summary: "Ekambareswarar darshan.", activities: ["Ekambareswarar"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Tiruvanaikoil (Water)", summary: "Drive to Trichy, evening Jambukeshwarar darshan.", activities: ["Jambukeshwarar"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Tiruvannamalai (Fire)", summary: "Arunachaleswarar darshan, optional hill circumambulation at dawn.", activities: ["Arunachaleswarar"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Travel day", summary: "Long drive north toward Andhra.", activities: ["Drive"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Srikalahasti (Air)", summary: "Kalahasteeswara darshan, rest.", activities: ["Kalahasteeswara"], meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Drive south", summary: "Back to Tamil Nadu for the final stop.", activities: ["Drive"], meals: ["Breakfast", "Dinner"] },
      { day: 8, title: "Chidambaram (Ether)", summary: "Nataraja darshan, evening aarti at the gold-roofed sanctum.", activities: ["Nataraja"], meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Depart Chennai", summary: "Drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["kanchipuram-ekambareswarar", "chidambaram-nataraja"],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Most Popular", "Best for Seniors"],
  },
  {
    slug: "navagraha-yatra-tn-5d",
    title: "Navagraha Temples of Tamil Nadu, 5 Days",
    kind: "group",
    states: ["tamil-nadu"],
    durationDays: 5,
    durationNights: 4,
    priceFrom: 28500,
    rating: 4.8,
    reviewCount: 41,
    themes: ["Pilgrimage", "Temples", "Senior-Friendly"],
    departureCities: ["Chennai", "Trichy"],
    hotelTier: 3,
    transport: ["Private Vehicle"],
    groupSize: { min: 12, max: 26 },
    shortDescription:
      "Nine temples for the nine planets, all clustered near Kumbakonam in the Cauvery delta.",
    longDescription:
      "The Navagraha circuit pairs each of the nine planetary deities with a temple in the Cauvery delta. Pilgrims complete the round for graha parihara, the easing of planetary influences. The temples are small and intimate, the drives are short, and the route can be done at an unhurried pace. We base ourselves in Kumbakonam and visit two or three temples each morning.",
    inclusions: [...COMMON_INCLUSIONS, "Parihara archana arrangement at each temple where the priests permit"],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrive Kumbakonam", summary: "Pick-up at Trichy or Chennai, transfer, briefing.", activities: ["Briefing"], meals: ["Dinner"] },
      { day: 2, title: "Three temples", summary: "Suryanar (Sun), Thingalur (Moon), Vaitheeswaran Koil (Mars).", activities: ["Three darshans"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Three temples", summary: "Thiruvenkadu (Mercury), Alangudi (Jupiter), Kanjanur (Venus).", activities: ["Three darshans"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Three temples", summary: "Thirunallar (Saturn), Thirunageswaram (Rahu), Keezhperumpallam (Ketu).", activities: ["Three darshans"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Depart Trichy", summary: "Transfer for onward travel.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New", "Best for Seniors"],
  },

  /* ---------------- Senior-budget + heritage-only ---------------- */
  {
    slug: "senior-comfort-tirupati-3d",
    title: "Senior Comfort Tirupati Express, 3 Days",
    kind: "private",
    states: ["andhra-pradesh"],
    durationDays: 3,
    durationNights: 2,
    priceFrom: 22500,
    rating: 4.9,
    reviewCount: 18,
    themes: ["Temples", "Pilgrimage", "Senior-Friendly"],
    departureCities: ["Chennai", "Bengaluru", "Hyderabad"],
    hotelTier: 3,
    transport: ["Private Vehicle"],
    shortDescription:
      "A short, low-cost private Tirupati trip with a dedicated companion for an elderly traveller.",
    longDescription:
      "Built for families sending parents on Tirumala darshan without travelling along. The traveller gets a private car, a Standard-tier companion who handles every step from pickup to drop-off, pre-booked senior-darshan, and a clean three-star room near the temple. We send the family two updates each day so everyone stays at ease.",
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Dedicated companion (Standard tier)",
      "Senior-darshan booking",
      "Daily family updates",
    ],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Arrival and rest", summary: "Companion receives the traveller, hill ascent, light evening.", activities: ["Hill ascent"], meals: ["Dinner"] },
      { day: 2, title: "Darshan day", summary: "Senior-darshan slot, Padmavati Devi visit, afternoon rest.", activities: ["Balaji darshan", "Padmavati darshan"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Return", summary: "Drop home or to the airport.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: ["tirumala-tirupati"],
    heroImages: ["/images/tirupati-temple.png"],
    gallery: ["/images/tirupati-temple.png"],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: true, companionAvailable: true },
    badges: ["Best for Seniors", "New"],
  },
  {
    slug: "hampi-badami-heritage-6d",
    title: "Hampi and Badami Heritage Trail, 6 Days",
    kind: "group",
    states: ["karnataka"],
    durationDays: 6,
    durationNights: 5,
    priceFrom: 39500,
    rating: 4.8,
    reviewCount: 29,
    themes: ["Heritage"],
    departureCities: ["Bengaluru", "Hubli"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 10, max: 22 },
    shortDescription:
      "Vijayanagara's boulder ruins at Hampi and the Chalukyan rock-cut temples at Badami and Aihole.",
    longDescription:
      "A heritage-only tour for travellers who love history more than darshan. Three nights at Hampi's UNESCO ruins, two nights based at Badami exploring Aihole and Pattadakal. Our guides are art historians, not just drivers. Distances between sites stay short, and every morning starts before the sun gets too high.",
    inclusions: [...COMMON_INCLUSIONS, "Heritage-trained guides"],
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Bengaluru to Hampi", summary: "Long drive, settle in, evening at Hemakuta sunset.", activities: ["Sunset at Hemakuta"], meals: ["Dinner"] },
      { day: 2, title: "Royal Hampi", summary: "Royal Enclosure, Queen's Bath, Lotus Mahal, Elephant Stables.", activities: ["Royal Enclosure"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Sacred Hampi", summary: "Virupaksha, Vittala Temple, stone chariot, river crossing.", activities: ["Vittala Temple"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Drive to Badami", summary: "Mid-morning drive, evening at the cave temples.", activities: ["Badami caves"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Aihole & Pattadakal", summary: "The cradle of Chalukyan architecture; UNESCO site at Pattadakal.", activities: ["Aihole", "Pattadakal"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Depart Hubli", summary: "Short drive, drop-off.", activities: ["Drop-off"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: false, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
  {
    slug: "pondicherry-auroville-4d",
    title: "Pondicherry and Auroville Calm, 4 Days",
    kind: "group",
    states: ["tamil-nadu"],
    durationDays: 4,
    durationNights: 3,
    priceFrom: 24500,
    rating: 4.7,
    reviewCount: 22,
    themes: ["Wellness", "Heritage"],
    departureCities: ["Chennai", "Bengaluru"],
    hotelTier: 4,
    transport: ["Private Vehicle"],
    groupSize: { min: 8, max: 16 },
    shortDescription:
      "French quarter mornings, Auroville afternoons, and quiet seafront evenings in Pondicherry.",
    longDescription:
      "Pondicherry slows your breathing. Three nights at a heritage hotel in the French Quarter, walks along the promenade, a morning at the Sri Aurobindo ashram, and an afternoon at Auroville for the Matrimandir gardens. We pair it with a stop at Mahabalipuram on the way home. The pace is so unrushed that travellers often book this tour twice.",
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    itinerary: [
      { day: 1, title: "Chennai to Pondicherry", summary: "ECR drive, settle in, evening at the promenade.", activities: ["Promenade"], meals: ["Dinner"] },
      { day: 2, title: "Pondicherry day", summary: "French quarter walk, Aurobindo Ashram, Botanical Garden.", activities: ["Aurobindo Ashram"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Auroville", summary: "Matrimandir visit, lunch at the cafe, leisure.", activities: ["Matrimandir"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Mahabalipuram & Chennai", summary: "Shore Temple stop, drop at Chennai airport.", activities: ["Shore Temple"], meals: ["Breakfast"] },
    ],
    templeSlugs: [],
    heroImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop",
    ],
    senior: { wheelchairFriendly: true, sattvicMeals: true, doctorOnCall: false, companionAvailable: true },
    badges: ["New"],
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}

export function packagesByKind(kind: PackageKind): Package[] {
  return PACKAGES.filter((p) => p.kind === kind);
}

export function packagesByState(state: StateSlug): Package[] {
  return PACKAGES.filter((p) => p.states.includes(state));
}

export function packagesForTemple(templeSlug: string): Package[] {
  return PACKAGES.filter((p) => p.templeSlugs.includes(templeSlug));
}
