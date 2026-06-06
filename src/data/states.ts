export type StateSlug =
  | "tamil-nadu"
  | "kerala"
  | "karnataka"
  | "andhra-pradesh"
  | "telangana";

export interface StateInfo {
  slug: StateSlug;
  name: string;
  tagline: string;
  highlights: string[];
  tags: string[];
  intro: string;
  hero: string;
  signatureTempleSlug: string;
  bestSeason: string;
  bestMonthsNarrative: string;
  gettingAround: string;
  majorFestivals: { name: string; months: string }[];
}

export const STATES: StateInfo[] = [
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    tagline: "Land of a thousand gopurams",
    highlights: [
      "Four temple-town pillars",
      "Senior-paced darshan",
      "Private transfers throughout",
    ],
    tags: ["Temples", "Heritage"],
    intro:
      "The cradle of Dravidian devotion. Tamil Nadu's temple towns of Madurai, Thanjavur, Rameshwaram and Chidambaram preserve continuous worship lineages of more than a thousand years, set against soaring sculpted towers and bronze masterworks.",
    hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
    signatureTempleSlug: "meenakshi-amman",
    bestSeason: "October to March",
    bestMonthsNarrative:
      "Tamil Nadu's best months run from October to March, when the heat drops and the temples are at their most pleasant. The Chithirai festival in April and May draws enormous crowds to Madurai. December and January carry the Arudra Darshan at Chidambaram, when the bronze Nataraja is brought out for public worship. Avoid mid-April to mid-June if you do not tolerate heat well.",
    gettingAround:
      "Chennai is the main international airport; Madurai and Trichy have well-connected domestic airports for the temple south. The state has a dense railway grid, with the Tamil Nadu Express and the Vande Bharat as comfortable options. Within a city, our private vehicles handle every transfer.",
    majorFestivals: [
      { name: "Pongal", months: "January" },
      { name: "Chithirai (Madurai)", months: "April – May" },
      { name: "Arudra Darshan (Chidambaram)", months: "December – January" },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    tagline: "Backwaters and quiet sanctums",
    highlights: [
      "Backwater houseboat stays",
      "Ayurveda by the coast",
      "Padmanabhaswamy & Guruvayur",
    ],
    tags: ["Backwaters", "Ayurveda"],
    intro:
      "Where coconut groves meet ancient shrines. Kerala blends the spiritual gravity of Padmanabhaswamy and Guruvayur with the green calm of houseboats, Ayurveda retreats and the misty Western Ghats.",
    hero: "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
    signatureTempleSlug: "padmanabhaswamy",
    bestSeason: "September to March",
    bestMonthsNarrative:
      "Kerala is most welcoming from September to March. The monsoon retreats by September leaving the backwaters glassy and the air clean. Onam (August or September) is the cultural high point of the state. December and January are the busiest. Ayurveda traditionalists often prefer the monsoon months for treatment, though the rain can disrupt sightseeing.",
    gettingAround:
      "Kochi, Trivandrum and Kozhikode all have major airports. The Konkan Railway lines run the coast and connect every major city. Backwater routes use private houseboats. Most of our Kerala tours move on private vehicles with experienced hill drivers for Munnar and Thekkady.",
    majorFestivals: [
      { name: "Onam", months: "August – September" },
      { name: "Thrissur Pooram", months: "April – May" },
      { name: "Vishu", months: "April" },
    ],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    tagline: "Imperial heritage, sacred coast",
    highlights: [
      "Hoysala & Hampi heritage",
      "Sacred Murudeshwar coast",
      "Comfortable hill drives",
    ],
    tags: ["Heritage", "Coast"],
    intro:
      "From the Hoysala marvels of Belur and Halebidu to the Vijayanagara ruins of Hampi and the towering Shiva of Murudeshwar, Karnataka weaves royal courts, monastic silences, and a long coastline into a single travel canvas.",
    hero: "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
    signatureTempleSlug: "murudeshwar",
    bestSeason: "October to February",
    bestMonthsNarrative:
      "Karnataka is best from October to February, especially for the heritage circuit. Dasara at Mysuru in September or October is unmissable if you can plan around it. The November Hampi Utsav lights up the ruins. The coast stays humid all year, with February being the most comfortable for Gokarna and Murudeshwar.",
    gettingAround:
      "Bengaluru and Mangaluru are the major airports; Hubli serves Hampi and Badami well. Private vehicles cover the heritage trail. For the coast, the Konkan Railway is a comfortable option. Distances between Coorg, Mysuru and Bengaluru are short enough that drivers prefer the road.",
    majorFestivals: [
      { name: "Dasara (Mysuru)", months: "September – October" },
      { name: "Hampi Utsav", months: "November" },
      { name: "Karaga (Bengaluru)", months: "April" },
    ],
  },
  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    tagline: "Where mountains hold the divine",
    highlights: [
      "Tirumala darshan arranged",
      "Lepakshi rock frescoes",
      "Restful forest drives",
    ],
    tags: ["Pilgrimage", "Hills"],
    intro:
      "Anchored by the seven hills of Tirumala, the world's most-visited shrine, Andhra Pradesh layers the rock-cut frescoes of Lepakshi, the Buddhist hills of Amaravati and the calm beaches of the Coromandel coast.",
    hero: "/images/tirupati-temple.png",
    signatureTempleSlug: "tirumala-tirupati",
    bestSeason: "October to March",
    bestMonthsNarrative:
      "Andhra Pradesh travels best between October and March. Tirupati Brahmotsavam (September or October) is the year's high festival, drawing tens of thousands daily, so plan well ahead or visit after the rush. Srisailam stays open year-round but the forest drive is most pleasant in cool months. Sankranti in January is a beautiful time in coastal Andhra.",
    gettingAround:
      "Tirupati airport is the most convenient entry for the Tirumala circuit. Visakhapatnam connects the coastal east. Trains link Tirupati to all the major southern cities. We use private vehicles between Tirupati, Srisailam and Lepakshi, with mandatory rest stops on the forest stretch.",
    majorFestivals: [
      { name: "Tirupati Brahmotsavam", months: "September – October" },
      { name: "Ugadi", months: "March – April" },
      { name: "Sankranti", months: "January" },
    ],
  },
  {
    slug: "telangana",
    name: "Telangana",
    tagline: "Deccan grandeur",
    highlights: [
      "Charminar & old city",
      "Kakatiya Ramappa temple",
      "Bhadrachalam Rama shrine",
    ],
    tags: ["Deccan", "Forts"],
    intro:
      "The Deccan plateau at its richest. Telangana threads the four-minaret Charminar, Nizami palaces, the Kakatiya Ramappa temple and the Bhadrachalam Rama shrine into a heritage trail with a thoroughly modern pulse.",
    hero: "/images/ramappa-temple.png",
    signatureTempleSlug: "ramappa",
    bestSeason: "October to February",
    bestMonthsNarrative:
      "Telangana is best between October and February. Sri Rama Navami at Bhadrachalam in March or April is the year's most celebrated event, with the divine kalyanam performed on the riverbank. The Bonalu festival in July or August carries the spirit of Hyderabad's old city. Summer in Telangana is dry and harsh, so avoid May and June if you can.",
    gettingAround:
      "Hyderabad is the main airport and the natural base for all Telangana journeys. The state's road network connects Warangal, Yadadri and Bhadrachalam within a day's drive each from the capital. Rail links are reliable. Our private vehicles handle every transfer, with a long stretch into Bhadrachalam that we break with comfort stops.",
    majorFestivals: [
      { name: "Bonalu", months: "July – August" },
      { name: "Bathukamma", months: "September – October" },
      { name: "Sri Rama Navami (Bhadrachalam)", months: "March – April" },
    ],
  },
];

export function getStateBySlug(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}
