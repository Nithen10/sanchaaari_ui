import type { StateSlug } from "./states";

export type CelebrationKind = "festival" | "event";

export type Interest =
  | "Religious & Spiritual"
  | "Harvest & Seasonal"
  | "Cultural & Folk"
  | "Music & Dance"
  | "Food & Cuisine"
  | "National & Civic"
  | "Heritage & Historical"
  | "Wildlife & Nature";

export type MonthName =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export interface Celebration {
  slug: string;
  kind: CelebrationKind;
  name: string;
  dateLabel: string;
  startDate: string; // ISO 2026-MM-DD
  endDate: string;
  months: MonthName[];
  states: StateSlug[];
  interests: Interest[];
  image: string;
  shortBlurb: string;
  description: string;
  significance: string;
  bestPlaces: string[];
  history?: string;
  rituals?: string[];
  foods?: string[];
  whatToExpect?: string;
}

export const INTERESTS: Interest[] = [
  "Religious & Spiritual",
  "Harvest & Seasonal",
  "Cultural & Folk",
  "Music & Dance",
  "Food & Cuisine",
  "National & Civic",
  "Heritage & Historical",
  "Wildlife & Nature",
];

export const MONTHS: MonthName[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Image pool — verified working IDs from the existing codebase (states.ts,
// packages.ts, temples.ts, circuits.ts) plus the two local PNGs in /public/images.
const IMG = {
  gopuram: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80&auto=format&fit=crop",
  kerala: "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1600&q=80&auto=format&fit=crop",
  karnataka: "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1600&q=80&auto=format&fit=crop",
  templeAlt1: "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=1600&q=80&auto=format&fit=crop",
  templeAlt2: "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=1600&q=80&auto=format&fit=crop",
  templeAlt3: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80&auto=format&fit=crop",
  cultural: "https://images.unsplash.com/photo-1768491815837-87a90744f9e6?w=1600&q=80&auto=format&fit=crop",
  diyas: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=80&auto=format&fit=crop",
  tirupati: "/images/tirupati-temple.png",
  ramappa: "/images/ramappa-temple.png",
} as const;

export const CELEBRATIONS: Celebration[] = [
  // ============================================================
  // TAMIL NADU — Festivals
  // ============================================================
  {
    slug: "pongal-2026",
    kind: "festival",
    name: "Pongal",
    dateLabel: "14–17 Jan",
    startDate: "2026-01-14",
    endDate: "2026-01-17",
    months: ["January"],
    states: ["tamil-nadu"],
    interests: ["Harvest & Seasonal", "Cultural & Folk", "Food & Cuisine"],
    image: "https://images.unsplash.com/photo-1732603891196-2b8cc24f39a5?w=1600&q=80&auto=format&fit=crop",
    shortBlurb: "Tamil Nadu’s four-day harvest thanksgiving.",
    description:
      "Pongal is the most important harvest festival of Tamil Nadu, celebrated over four days as Bhogi, Thai Pongal, Mattu Pongal and Kaanum Pongal. Households cook fresh rice with milk and jaggery in clay pots until it boils over — a symbol of abundance. Cattle are bathed, garlanded and honoured on the third day.",
    significance:
      "Marks the start of the Tamil month Thai and the sun’s northward journey (Uttarayana). It is a thanksgiving to the sun, the earth and the cattle that make a harvest possible.",
    bestPlaces: ["Madurai", "Thanjavur", "Chettinad villages", "Mahabalipuram beach"],
    history:
      "Pongal traces its roots to the Sangam-era Thai-Niradal harvest rite, a thousand-year-old ceremony in which unmarried Tamil girls bathed in the river each morning of Thai praying for rain and a good crop. The Tolkappiyam — Tamil’s oldest surviving grammar — references the harvest thanksgiving directly. Under Chola and Pandya patronage between the 9th and 14th centuries, the rite expanded into a four-day household festival, absorbing the cattle worship of the pastoral communities and the Surya-Pongal sun thanksgiving of the agrarian heartland.",
    rituals: [
      "Bhogi (day one): old household items are burnt at dawn in a bonfire to signal a fresh start.",
      "Thai Pongal (day two): the first fresh rice of the harvest is cooked in a new clay pot in the open courtyard with milk, jaggery and ghee, allowed to boil over while the family shouts 'Pongalo Pongal!'",
      "Mattu Pongal (day three): cattle are bathed, their horns painted, garlanded with bells and flowers, and fed special pongal before sunrise.",
      "Kaanum Pongal (day four): families visit each other and women take leftover food to riverbanks to feed crows, signalling continued kinship with departed ancestors.",
      "A kolam (rice-flour design) is drawn fresh at every doorstep each morning of the four days.",
    ],
    foods: [
      "Sakkarai Pongal — sweet rice cooked with jaggery, milk, cashews, raisins and cardamom; the centrepiece dish.",
      "Ven Pongal — savoury rice-and-moong-dal porridge tempered with peppercorns, cumin and ghee.",
      "Sugarcane — fresh stalks are chewed as the season's first harvest sweet.",
      "Vadai and payasam — fried lentil fritters and milk-rice pudding served as temple prasadam.",
      "Mangai pachadi — raw mango curry combining sweet, sour, salty and bitter tastes.",
    ],
    whatToExpect:
      "Villages and small towns in the Cauvery delta feel the festival more deeply than the cities — expect tall sugarcane stalks tied at doorways, kolams covering entire streets at dawn, and the rich smell of jaggery-rice cooking outdoors. In Madurai and Thanjavur, temple processions move through the streets on Mattu Pongal. Plan to be in place by 6 a.m. to see the milk boil over; afternoons are quieter as families nap and visit relatives.",
  },
  {
    slug: "thaipusam-2026",
    kind: "festival",
    name: "Thaipusam",
    dateLabel: "1 Feb",
    startDate: "2026-02-01",
    endDate: "2026-02-01",
    months: ["February"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.gopuram,
    shortBlurb: "Devotees carry kavadis to Lord Murugan.",
    description:
      "On the full moon of the Tamil month Thai, devotees of Lord Murugan undertake a pilgrimage carrying decorated kavadis — wooden frames laden with offerings and sometimes pierced into the body as an act of penance. Palani draws lakhs of pilgrims through the night.",
    significance:
      "Commemorates the day Parvati gave Murugan the divine vel (spear) to defeat the demon Soorapadman. It is the foremost Murugan festival of South India.",
    bestPlaces: ["Palani", "Tiruchendur", "Swamimalai", "Tiruttani"],
    history:
      "The Murugan cult is among the oldest continuously practised devotions in Tamil country — references appear in the Sangam-era Tirumurukatruppadai (2nd century CE), which already names the six padaiveedu (battle camps / abodes) of Murugan. The Soorasamharam story — Murugan slaying Soorapadman with the vel given by his mother Parvati on a Thai-Pusam full moon — gave the festival its name. Palani became the kavadi capital after the saint-poet Idumban carried two hills on a yoke for Murugan there; the kavadi (an arched pole with offerings) re-enacts Idumban's burden. Thaipusam was carried across the Indian Ocean by Tamil indentured workers in the 19th century, which is why it remains a national-scale event in Malaysia and Mauritius today.",
    rituals: [
      "Devotees undertake 48 days of vratham — vegetarian diet, daily prayer, no footwear — before carrying the kavadi.",
      "On Thaipusam dawn, the kavadi-bearer is shaved bald, bathed, dressed in yellow or saffron, and led to the temple in a slow procession with drums and nadaswaram.",
      "Vel kavadi (spear piercings through cheek and tongue) is performed by the most committed devotees; many bearers enter trance states and feel no pain.",
      "Pal-kudam (milk-pot) bearers carry brass pots of milk on their heads to be poured over Murugan's vel in the sanctum.",
      "At Palani, devotees climb the 693 steps to the hilltop shrine barefoot, often well before sunrise to avoid the heat.",
    ],
    foods: [
      "Panchamirtham — Palani's signature prasadam: a thick paste of banana, jaggery, ghee, cardamom and dates.",
      "Vibhuti and chandanam — sacred ash and sandalwood applied as forehead marks rather than eaten.",
      "Coconut rice and tamarind rice — packed lunches devotees carry up the hill.",
      "Lemon turmeric rice — yellow rice, the Murugan colour, served at small roadside stalls along the procession route.",
      "Coconuts — broken in the thousands at the foot of the hill before the climb.",
    ],
    whatToExpect:
      "Palani is the most intense — expect crowds in the lakhs, all-night chanting of 'Vel Vel Muruga', and the unforgettable sight of devotees in trance climbing the hill with kavadis. The atmosphere is reverent but charged; photography is permitted outside the sanctum. Plan to arrive the previous evening as roads close from 4 a.m. on Thaipusam day, and dress in modest yellow or saffron to blend in.",
  },
  {
    slug: "natyanjali-2026",
    kind: "festival",
    name: "Natyanjali Festival",
    dateLabel: "15–19 Feb",
    startDate: "2026-02-15",
    endDate: "2026-02-19",
    months: ["February"],
    states: ["tamil-nadu"],
    interests: ["Music & Dance", "Religious & Spiritual", "Heritage & Historical"],
    image: IMG.templeAlt2,
    shortBlurb: "Bharatanatyam offered to Nataraja at Chidambaram.",
    description:
      "Each Maha Shivaratri, classical dancers from across India gather at the Nataraja temple in Chidambaram to perform Bharatanatyam in the temple courtyard. The festival lasts five nights with non-stop performances on a stage built before the sanctum.",
    significance:
      "Honours Shiva as Nataraja, the cosmic dancer. The temple at Chidambaram is considered the very ground on which the cosmic dance occurs.",
    bestPlaces: ["Chidambaram Nataraja Temple"],
    history:
      "The festival was conceived in 1981 by dance scholar Anita Ratnam and the Tamil Nadu government as a way to revive temple-courtyard performance — the original setting for Bharatanatyam before the British era pushed it into theatres. Chidambaram was chosen because it houses the 108 karanas (dance poses) of the Natya Shastra carved into its eastern gopuram, sculpted under Kulottunga Chola II in the 12th century. The festival deliberately falls on Maha Shivaratri, when Nataraja is believed to perform the Ananda Tandava (dance of bliss) at midnight.",
    rituals: [
      "Dancers perform on a stage erected directly in front of the sanctum, facing the bronze Nataraja image.",
      "Each performer touches the temple floor with their forehead before stepping onto the stage as an offering of the dance itself.",
      "Performances begin after the evening abhishekam (around 7 p.m.) and continue past midnight.",
      "On Maha Shivaratri night, the temple stays open the full night for the four jamam pujas; dancers and audience often stay through.",
      "Performers from every major Indian classical form — Bharatanatyam, Odissi, Kuchipudi, Mohiniyattam — participate without payment, as a vow.",
    ],
    foods: [
      "Temple-prasadam pongal — savoury rice cooked in the temple kitchen, served free in plantain leaves.",
      "Curd rice — the standard pilgrim meal, light enough to eat before a long night of watching.",
      "Filter coffee — sold at small stalls outside the temple to help audiences stay awake through the late performances.",
      "Vada and ven pongal breakfast — at the small eateries around the temple's east gate the next morning.",
    ],
    whatToExpect:
      "The five-night programme is free and open to all; bring a thin mat to sit on the temple courtyard's stone floor. The acoustics are extraordinary — drums and bells echo off the gopurams. Maha Shivaratri (the final night) is the most crowded; arrive by 4 p.m. for a good spot. Modest dress is expected since you are inside a working temple.",
  },
  {
    slug: "maasi-magam-2026",
    kind: "festival",
    name: "Maasi Magam",
    dateLabel: "3 Mar",
    startDate: "2026-03-03",
    endDate: "2026-03-03",
    months: ["March"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt1,
    shortBlurb: "Sea bath day at Rameshwaram and Tiruchendur.",
    description:
      "On the full-moon day of the Tamil month Maasi, temple deities are carried in procession to the sea for a ritual bath. Rameshwaram, Tiruchendur and Mahabalipuram see large gatherings of pilgrims who take the holy dip alongside the deities.",
    significance:
      "Believed to wash away accumulated karma. The conjunction of the Magha star with the Maasi full moon is considered the most auspicious bathing day of the year on the coast.",
    bestPlaces: ["Rameshwaram", "Tiruchendur", "Mahabalipuram", "Kumbakonam"],
    history:
      "Maasi Magam is named for the conjunction of the Magha nakshatra with the full moon of Maasi (the eleventh Tamil month). The festival's seafront procession to immerse deities is recorded in Chola-era temple inscriptions from the 11th century at Tiruvarur, Rameshwaram and Tiruchendur. The Kumbakonam Mahamaham (held every twelve years) is the most spectacular variant, in which devotees believe the nine sacred rivers of India converge in the Mahamaham tank. Coastal temples adapted the inland river-bath rite to the sea, making this one of the few Tamil festivals where the ocean is the sacred water.",
    rituals: [
      "Temple deities are placed on decorated vahanams (chariot-mounts) and processed from the sanctum to the sea or river before sunrise.",
      "Devotees take a dawn dip in the same water immediately after the deity has bathed — the moment is considered the most auspicious.",
      "Pradakshina (circumambulation) of all twelve teerthams at Rameshwaram is completed before the sea bath.",
      "Offerings of fresh flowers and turmeric water are floated on the waves.",
      "Pitru tarpanam (offerings to ancestors) is performed by male family members on the beach after the bath.",
    ],
    foods: [
      "Curd rice with mango pickle — the standard post-bath meal, eaten cold on the beach.",
      "Coconut rice — offered as prasadam at Tiruchendur.",
      "Tamarind rice — easy to pack and eat with hands, the typical pilgrim lunch.",
      "Tender coconut water — sold straight off carts on the beach for hydration after the bath.",
    ],
    whatToExpect:
      "Be at Agni Tirtham (Rameshwaram) or Tiruchendur beach by 4 a.m. — the deity procession reaches the water before sunrise. The atmosphere is celebratory but reverent; expect chanting and conch shells rather than music. Wear easy-dry clothes if you intend to bathe; modest cotton dhotis or sarees are sold near the beach for first-time pilgrims.",
  },
  {
    slug: "panguni-uthiram-2026",
    kind: "festival",
    name: "Panguni Uthiram",
    dateLabel: "3 Apr",
    startDate: "2026-04-03",
    endDate: "2026-04-03",
    months: ["April"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual"],
    image: IMG.gopuram,
    shortBlurb: "Celestial weddings in every Murugan temple.",
    description:
      "Panguni Uthiram is celebrated as the day of divine marriages — Shiva and Parvati, Murugan and Devasena, Rama and Sita, and Venkateshwara and Padmavati are all said to have wed on this full moon. Murugan temples conduct grand kalyanam ceremonies.",
    significance:
      "Marks the auspicious conjunction of the Uthiram star with the full moon of the Tamil month Panguni — the most prized muhurtha for weddings.",
    bestPlaces: ["Tiruttani", "Tiruchendur", "Madurai", "Swamimalai"],
    history:
      "Panguni Uthiram is the only day on which four different celestial weddings are said to coincide — Shiva–Parvati at Tiruvannamalai, Murugan–Devasena at Tiruttani, Rama–Sita per the Ramayana, and Venkateshwara–Padmavati at Tirupati. The astrological logic comes from the Tamil almanac: the Uthiram star with the Chitra-Panguni full moon is the only complete-bright muhurtha of the year, traditionally considered the most auspicious for matrimony. Murugan temples adopted the date as their kalyanam day under Vijayanagara patronage in the 15th century.",
    rituals: [
      "Each Murugan temple conducts a full kalyana utsavam — a recreated wedding of the deity to Devasena, complete with mangalsutra-tying and seven steps.",
      "Devotees seeking marriage stand in line to receive the kalyana prasadam (turmeric and kunkumam from the wedding plate).",
      "At Tiruttani, the deity is taken in procession on the Mayil (peacock) vahanam through the hilltop temple's streets.",
      "Married couples renew their vows in temple courtyards by re-tying the thali.",
      "Unmarried women observe a fast and offer yellow turmeric paste to Devasena.",
    ],
    foods: [
      "Wedding-style sappadu — sambhar, rasam, two vegetables, payasam and curd-rice served on a banana leaf.",
      "Sweet pongal — the standard kalyanam prasadam.",
      "Coconut barfi — distributed at the conclusion of the kalyana utsavam.",
      "Vadai garland — small fried lentil cakes strung together as a temple offering.",
    ],
    whatToExpect:
      "The kalyana utsavam is held in the late afternoon (around 5 p.m. at Tiruttani) and lasts about ninety minutes. The temple gets crowded but the energy is celebratory and welcoming. Wear bright traditional clothes if you can — many devotees come dressed for an actual wedding. The hill climb at Tiruttani is moderate; allow an hour each way.",
  },
  {
    slug: "tamil-new-year-2026",
    kind: "festival",
    name: "Puthandu (Tamil New Year)",
    dateLabel: "14 Apr",
    startDate: "2026-04-14",
    endDate: "2026-04-14",
    months: ["April"],
    states: ["tamil-nadu"],
    interests: ["Cultural & Folk"],
    image: IMG.cultural,
    shortBlurb: "Sweet–sour–bitter platter for the new year.",
    description:
      "Tamil households greet the new year with a kanni — an arrangement of fruits, gold and mirror viewed first thing on waking. The day’s meal includes mangai pachadi, a curry that combines sweet jaggery, sour raw mango, salty neem and pungent chilli.",
    significance:
      "Begins the Tamil solar calendar with the month of Chithirai. The five-flavour pachadi is a reminder that the year ahead will hold all tastes — and all are to be welcomed.",
    bestPlaces: ["Across Tamil Nadu — Chennai, Madurai, Coimbatore"],
    history:
      "Puthandu marks the first day of Chithirai, the first solar month of the Tamil calendar, which is set by the sun entering the constellation Mesha (Aries). The same astronomical moment is celebrated as Vishu in Kerala, Vaisakhi in Punjab and Bohag Bihu in Assam — variants of an ancient solar-calendar new year that pre-dates the lunar calendars adopted later. The kanni-viewing tradition is documented in Tamil literature from the Sangam era, where it appears as a way to set the tone for the coming year through the first auspicious sight.",
    rituals: [
      "On waking, family members are led blindfolded to view the kanni — a tray of fruits, betel leaves, gold, mirror and lit lamp arranged the previous night.",
      "Elders bless the younger family members with kaivishesham (a small gift, often a coin).",
      "Doorsteps are washed and decorated with rice-flour kolam and mango-leaf festoons.",
      "Families visit the temple at dawn for the year's first darshan, often the local Vishnu or Murugan shrine.",
      "The Panchanga Padanam (reading of the new year's almanac) is performed by the temple priest, predicting rain, harvest and major events.",
    ],
    foods: [
      "Mangai pachadi — the signature dish combining sweet jaggery, sour raw mango, salty neem flowers, bitter mustard and pungent chilli.",
      "Vepampoo rasam — neem-flower rasam, mildly bitter and traditionally health-giving.",
      "Sakkarai pongal — sweet rice-jaggery offering placed at the puja first, then served.",
      "Vadai and payasam — fried savouries and milk-rice pudding, the standard celebration sweets.",
      "Mango milkshake — using the season's first ripe mangoes.",
    ],
    whatToExpect:
      "Puthandu is a quieter household festival rather than a street spectacle. Mornings in residential neighbourhoods of Chennai (Mylapore, T. Nagar) and the temple towns of Madurai and Kanchipuram have a slow, reverent feel — fresh kolams, mango-leaf festoons on doors and the smell of pachadi cooking. Temples are busy but not packed. Stay with a homestay if you want the lived experience; many families welcome guests for the new-year meal.",
  },
  {
    slug: "chithirai-madurai-2026",
    kind: "festival",
    name: "Chithirai Festival (Madurai)",
    dateLabel: "16 Apr – 1 May",
    startDate: "2026-04-16",
    endDate: "2026-05-01",
    months: ["April", "May"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual", "Cultural & Folk", "Heritage & Historical"],
    image: IMG.gopuram,
    shortBlurb: "Meenakshi’s wedding draws a million pilgrims.",
    description:
      "Madurai’s twelve-day Chithirai festival re-enacts the coronation of Meenakshi and her wedding to Sundareshwarar. The deities are taken in procession on a giant wooden ther (chariot) through the streets around the temple, drawing crowds in the millions.",
    significance:
      "One of the oldest continuous temple festivals in India, performed essentially unchanged since the Nayak dynasty. It is the high point of the Meenakshi Amman temple calendar.",
    bestPlaces: ["Madurai Meenakshi Amman Temple", "Alagar Kovil"],
    history:
      "The Chithirai festival's current twelve-day format was crystallised by Thirumalai Nayak (1623–1659), who built the present temple complex and standardised the rituals. But the underlying tradition is far older — the wedding of Meenakshi (a Pandya princess and Shakti incarnation) to Sundareshwarar (Shiva) is recorded in the 7th-century Tamil Thiruvilayadal Puranam. The festival uniquely braids two stories: the Shaiva wedding inside Madurai city, and the Vaishnava brother Alagar's journey from Alagar Kovil to attend it. The two streams meet at the Vaigai river — a deliberate medieval reconciliation of Tamil Nadu's Shaiva and Vaishnava devotional traditions.",
    rituals: [
      "Day 1: Kodiyetram — the festival flag is raised on the temple's golden flagstaff, opening the twelve days.",
      "Day 8: Meenakshi Pattabhishekam — Meenakshi's coronation as queen of Madurai, with elaborate processions inside the temple corridors.",
      "Day 9: Tiru Kalyanam — the wedding of Meenakshi and Sundareshwarar, witnessed by lakhs in the temple courtyard.",
      "Day 10: Ther Thiruvizha — the temple chariot, one of the largest wooden chariots in India, is pulled through the four mada streets by thousands of devotees.",
      "Day 11: Alagar Aatril Irangudal — the Vishnu form Alagar from Alagar Kovil enters the Vaigai river to bless the newlyweds; the crossing draws over a million people.",
    ],
    foods: [
      "Pongal and tamarind rice — temple prasadams served free during the festival.",
      "Jigarthanda — Madurai's signature cold milk drink with almond gum, kadal pasi (sea moss), basundi and ice cream; sold at every street stall.",
      "Idli with kara chutney — the morning street-food staple along the procession route.",
      "Kothu parotta — flaked flatbread fried with egg and meat, an evening crowd favourite.",
      "Paruthi paal — cotton-seed milk, a Madurai specialty cooled with crushed ice.",
    ],
    whatToExpect:
      "Madurai's old town becomes essentially impassable for vehicles during these twelve days. The chariot procession (day 10) and Alagar's river crossing (day 11) draw the largest crowds — over a million people on each day. Book accommodation at least three months ahead. Stay near the temple's east gate for easy access. Dress modestly (covered shoulders, long bottoms) since most events happen inside the temple. Heat is intense; carry water and salt sachets.",
  },
  {
    slug: "vaikasi-visakam-2026",
    kind: "festival",
    name: "Vaikasi Visakam",
    dateLabel: "1 Jun",
    startDate: "2026-06-01",
    endDate: "2026-06-01",
    months: ["June"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt2,
    shortBlurb: "Lord Murugan’s birthday.",
    description:
      "Celebrated on the Visakam star of the Tamil month Vaikasi, this festival honours the birth of Lord Murugan. Tiruchendur, Palani and Tiruparankundram all hold ten-day brahmotsavams with abhishekams, processions and chariot rides.",
    significance:
      "Traditionally considered Murugan’s birth-star day. Devotees believe that prayers offered today bring victory in pursuits long undertaken.",
    bestPlaces: ["Tiruchendur", "Palani", "Tiruparankundram"],
    history:
      "Vaikasi Visakam is named for the Visakam (Vishakha) nakshatra in the Tamil month of Vaikasi — the star under which, according to the Skanda Purana, Murugan was born to the six Krittika sisters and then unified into a single six-faced form. The Tiruchendur temple, one of the oldest Murugan shrines on the Coromandel coast, records continuous brahmotsavams since at least the 12th century. The ten-day format follows Agamic temple-festival protocols laid down in the Kumara Tantra.",
    rituals: [
      "Kodiyetram (flag hoisting) opens the ten-day brahmotsavam.",
      "A different vahanam (mount) — peacock, elephant, golden chariot, silver chariot, hamsa — carries the deity each evening.",
      "The Sahasrakalashabhishekam (abhishekam with 1,008 pots of holy water) is the central rite on the Visakam day itself.",
      "At Tiruchendur, the utsava murti is taken to the sea at sunrise for snanam (sacred bath).",
      "Devotees offer kavadis as in Thaipusam, though the crowds are smaller.",
    ],
    foods: [
      "Panchamirtham — Palani's signature prasadam of banana, jaggery, ghee, dates and cardamom.",
      "Coconut rice — the standard light meal during the ten days.",
      "Modakam — sweet rice-flour dumplings filled with jaggery and coconut.",
      "Curd rice with mango pickle — beach-side pilgrim lunch at Tiruchendur.",
    ],
    whatToExpect:
      "Tiruchendur on the Visakam day combines a temple festival with a coastal pilgrimage — the dawn sea-bath of the deity is the moment to be present for. Crowds are large but more manageable than Thaipusam. The temple is right on the beach; sunrise from the eastern gopuram is striking. Plan for hot, humid weather.",
  },
  {
    slug: "aadi-perukku-2026",
    kind: "festival",
    name: "Aadi Perukku",
    dateLabel: "3 Aug",
    startDate: "2026-08-03",
    endDate: "2026-08-03",
    months: ["August"],
    states: ["tamil-nadu"],
    interests: ["Cultural & Folk", "Wildlife & Nature"],
    image: IMG.kerala,
    shortBlurb: "Riverside thanksgiving for the monsoon’s gift.",
    description:
      "On the eighteenth day of the Tamil month Aadi, families gather on river banks to thank the rains for swelling the Kaveri and Vaigai. Married women float garlands and lit lamps on the water and prepare an elaborate riverside picnic.",
    significance:
      "Aadi is a month of intense devotion when rivers are at their fullest. The festival recognises water as the source of all prosperity.",
    bestPlaces: ["Kaveri banks at Trichy and Erode", "Vaigai at Madurai"],
    history:
      "Aadi Perukku is rooted in the agrarian observance of the Kaveri's seasonal rise — 'Perukku' literally means 'overflow' or 'rising'. It is timed for the 18th day of Aadi, when the monsoon-fed river historically peaks. Chola-era inscriptions at Tiruvarangam and Tiruvanaikoil record temple-funded river offerings dating to the 10th century. The festival is particularly observed by married women, who pray for marital longevity and family prosperity tied to the river's continued flow.",
    rituals: [
      "Women bathe in the river at sunrise wearing the new nine-yard saree.",
      "Lit lamps and flower garlands are floated on the water with whispered prayers.",
      "Mangala-arati is performed by the elderwoman of the family on the river bank.",
      "A picnic meal of nine varieties (including coconut rice, lemon rice, tamarind rice and curd rice) is shared on banana leaves spread on the bank.",
      "Newly-wed couples especially make a point of attending together.",
    ],
    foods: [
      "Coconut rice, lemon rice, tamarind rice, curd rice, sambhar rice — the five-rice picnic spread.",
      "Vella aval — sweet flattened rice with jaggery and grated coconut.",
      "Sundal — chickpeas or peanuts tempered with mustard seeds and coconut.",
      "Pal payasam — milk-and-rice pudding offered to the river before eating.",
    ],
    whatToExpect:
      "The riverbanks at Trichy, Erode and the Vaigai at Madurai see a steady stream of women in colourful sarees from dawn to mid-morning. The mood is gentle and feminine rather than ceremonial. Carry your own mat; the banks can be muddy after morning rain. Outsiders are warmly welcomed but should not bathe at the riverside unless invited.",
  },
  {
    slug: "vinayaka-chaturthi-tn-2026",
    kind: "festival",
    name: "Vinayaka Chaturthi",
    dateLabel: "14 Sep",
    startDate: "2026-09-14",
    endDate: "2026-09-14",
    months: ["September"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.diyas,
    shortBlurb: "Clay Ganesha at every doorstep.",
    description:
      "Households install hand-shaped clay Ganesha idols, offer modak and kozhukattai for ten days, and immerse the idol in a pond or the sea on the final day. The streets fill with processions and immersion drumming.",
    significance:
      "Celebrates the birth of Ganesha, the remover of obstacles, who is worshipped first before any new venture.",
    bestPlaces: ["Marina Beach Chennai", "Pillaiyarpatti", "Pondicherry coast"],
    history:
      "Vinayaka Chaturthi in Tamil Nadu remains primarily a domestic clay-idol festival, in contrast to the large public pandals that Lokmanya Tilak popularised in Maharashtra in 1893. The Tamil observance is older and follows the Skanda Purana account of Ganesha's birth from Parvati's turmeric paste. Pillaiyarpatti near Karaikudi houses one of the oldest cave-cut Ganesha images in South India, dating to the 4th century CE Pandya period.",
    rituals: [
      "A small clay Ganesha is shaped by hand at home (or bought unfired) on the morning of Chaturthi.",
      "The idol is installed on a wooden plank covered with banana leaf; flowers, arugampul (Bermuda grass) and modakam are offered.",
      "108 names of Ganesha are chanted with a flower placed at the deity's feet for each name.",
      "Looking at the moon on Chaturthi night is traditionally avoided — the legend of the gem of Syamantaka teaches that doing so brings false accusations.",
      "On the final day (anywhere from one to ten days later), the idol is immersed in the sea or a temple tank with drumming and procession.",
    ],
    foods: [
      "Modakam — steamed rice-flour dumpling filled with jaggery and grated coconut; Ganesha's favourite.",
      "Sundal — boiled chickpeas tempered with mustard, asafoetida and grated coconut.",
      "Kozhukattai — savoury version of modakam with urad-dal filling.",
      "Appam — sweet fried wheat-flour cakes with jaggery and banana.",
      "Coconut rice — the standard prasadam meal.",
    ],
    whatToExpect:
      "Marina Beach in Chennai on immersion day is the spectacle — thousands of clay Ganeshas of every size carried down the sand, drums and dance, ending with idols floated into the sea at sunset. Plan to be at the beach by 4 p.m. for the best view. Pillaiyarpatti is the temple visit; its cave shrine is small and atmospheric. Use only clay (not painted plaster) idols if buying — it's both traditional and ecologically responsible.",
  },
  {
    slug: "navaratri-golu-2026",
    kind: "festival",
    name: "Navaratri / Bommai Golu",
    dateLabel: "11–20 Oct",
    startDate: "2026-10-11",
    endDate: "2026-10-20",
    months: ["October"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.templeAlt1,
    shortBlurb: "Doll arrangements honour the Devi.",
    description:
      "For nine nights, Tamil homes display tiered arrangements of dolls — gods, gurus, animals, vendors — recreating mythological scenes. Women visit each other’s golus singing and exchanging vermillion, beetle leaf and sweets.",
    significance:
      "Honours the three goddesses Durga, Lakshmi and Saraswati, each for three nights. The arrangement teaches the household’s children dharma, prosperity and learning.",
    bestPlaces: ["Mylapore Chennai", "Thanjavur", "Kanchipuram"],
    history:
      "The Bommai Golu (literally 'doll display') tradition is most strongly associated with Tamil Nadu and Andhra Pradesh, where it was patronised by the Vijayanagara empire (14th–17th century) and later the Maratha rulers of Thanjavur. The dolls — wooden, terracotta or papier-mâché — are passed down through generations; some families display sets that have been in the household for over a century. Each year a new doll is added, often a marappachi (rosewood couple) gifted to a new bride.",
    rituals: [
      "A stepped wooden structure of odd-numbered tiers (3, 5, 7 or 9) is set up on the first day and dressed in fabric.",
      "Dolls are arranged top to bottom: gods on top, gurus and saints next, then humans, then animals, then everyday life at the bottom.",
      "Each evening women and children visit each other's golus, sing a Carnatic kriti or a slokam, and receive a small return-gift of vethalai, paaku, kunkumam and a sundal.",
      "On Vijayadashami, the topmost doll is laid on its side to signify the close of the festival.",
      "An ayudha puja is performed on day nine — books, tools and vehicles are decorated and worshipped.",
    ],
    foods: [
      "Sundal — nine varieties across the nine days, each from a different legume: chickpea, peanut, black-eyed pea, green gram, mochai etc.",
      "Vella aval — sweet flattened rice with jaggery and coconut, light enough for evening visits.",
      "Payasam — different flavour each day, often paal payasam, semiya payasam or paruppu payasam.",
      "Pori urundai — puffed-rice and jaggery balls, given as the standard return-gift.",
      "Curd rice with mango pickle — the cooling staple of nine days of feasting.",
    ],
    whatToExpect:
      "Mylapore in Chennai is the best neighbourhood to walk during Navaratri — Brahmin homes leave their doors open for guests to come in and view the golu. The mood is intimate, musical and grandmotherly. Carry a small notebook to jot the recipes you'll be offered. Many old families in Kumbakonam, Madurai and Kanchipuram welcome respectful visitors; ask at the local Sanchaari office for introductions.",
  },
  {
    slug: "saraswati-puja-tn-2026",
    kind: "festival",
    name: "Saraswati Puja & Vijayadashami",
    dateLabel: "19–20 Oct",
    startDate: "2026-10-19",
    endDate: "2026-10-20",
    months: ["October"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.gopuram,
    shortBlurb: "Books and tools laid before the goddess.",
    description:
      "On the ninth night of Navaratri, books, musical instruments and the tools of one’s craft are placed at the feet of Saraswati. On Vijayadashami the next morning, children are introduced to letters in the vidyarambham ceremony.",
    significance:
      "The day is considered the perfect muhurtha to begin learning anything new — music, languages, professions.",
    bestPlaces: ["Saraswati shrines across Tamil Nadu", "Thiruvaiyaru"],
    history:
      "The Saraswati Puja / Vidyarambham tradition reaches back to the medieval period in Tamil Nadu — Bhakti-era poets such as Thirugnana Sambandar (7th century) describe writing one's first letters in rice grains at the temple. Vijayadashami the following day commemorates Rama's victory over Ravana and Durga's defeat of Mahishasura, making it the most auspicious day to start any new venture. In Tamil Brahmin households, Ayudha Puja on Saraswati's day is the moment to honour the tools of one's trade.",
    rituals: [
      "Books, musical instruments, computers, vehicles and tools are decorated with sandalwood paste, kumkum and flowers and placed at the puja altar.",
      "No reading or work is done on the day itself — the deity is said to inhabit the books.",
      "On Vijayadashami morning, an elder dips a child's finger in rice or sand and guides them to write the first three letters: 'Hari Sri Ganapataye Namah'.",
      "The instruments are taken back into use only after the dasami sunrise puja.",
      "Special veena and Carnatic recitals are held at Saraswati shrines, particularly at Koothanur near Mayiladuthurai.",
    ],
    foods: [
      "Payasam — milk-rice pudding, offered to Saraswati first.",
      "Sundal — chana, the prasadam staple of Navaratri.",
      "Vella aval — sweet flattened rice with jaggery.",
      "Curd rice — eaten cool with the puja prasadam.",
    ],
    whatToExpect:
      "The Koothanur Saraswati temple near Thiruvarur is the most visited shrine on the day — expect children with new slates and stationary, and music students performing in turn. The atmosphere is hushed and devotional. Bring something you want blessed (a notebook, a camera, a laptop) to leave at the altar for the day.",
  },
  {
    slug: "karthigai-deepam-2026",
    kind: "festival",
    name: "Karthigai Deepam",
    dateLabel: "23 Nov",
    startDate: "2026-11-23",
    endDate: "2026-11-23",
    months: ["November"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual"],
    image: IMG.diyas,
    shortBlurb: "Tiruvannamalai’s mountain becomes a flame.",
    description:
      "Tamil Nadu’s festival of lights. Households line every threshold with rows of agal vilakku (oil lamps). At Tiruvannamalai a giant cauldron of ghee is lit on top of the Arunachala hill, visible for miles, drawing pilgrims for an all-night girivalam.",
    significance:
      "Celebrates Shiva manifesting as an infinite column of fire at Arunachala. It is considered the oldest festival of light in India, older than Diwali.",
    bestPlaces: ["Tiruvannamalai", "Tiruvarur", "Chidambaram"],
    history:
      "Karthigai Deepam is the oldest documented festival of lights in India — references appear in the Sangam-era Akananuru and Tolkappiyam, predating Diwali by several centuries. The Tiruvannamalai variant celebrates the Lingodbhava story from the Skanda Purana, in which Vishnu and Brahma argue over supremacy and Shiva appears as an endless column of fire to humble them. Arunachala mountain at Tiruvannamalai is identified as the very form of that fiery linga. The giant cauldron of ghee atop the hill has been lit every Karthigai Deepam since at least the 9th-century Chola period, with the date now drawn from temple inscriptions.",
    rituals: [
      "From sunrise, devotees walk the 14-kilometre girivalam (circumambulation) around Arunachala hill barefoot.",
      "Households place rows of agal vilakku (clay oil lamps) at every doorstep, window, balcony and water tank.",
      "At dusk on Karthigai day, the temple priests carry the deepam (ghee flame) up the steep granite face of Arunachala.",
      "When the cauldron is lit — visible for 30 km — the entire town stops to pranam (bow) in its direction.",
      "Children light bharani vedi (small earthenware crackers) along their courtyards.",
    ],
    foods: [
      "Pori urundai — puffed rice and jaggery balls, the signature Karthigai sweet.",
      "Adai pradhaman — multigrain pancake with a sweet coconut-jaggery dip.",
      "Nei appam — ghee-fried sweet rice cakes, offered at the temple lamp.",
      "Vella seedai — fried jaggery-coconut balls.",
      "Sakkarai pongal — sweet rice with jaggery as the deepam-day offering.",
    ],
    whatToExpect:
      "Tiruvannamalai on Karthigai day fills with over a million pilgrims walking the girivalam. The roads from Vellore and Villupuram are essentially closed; arrive a day in advance. Walk a clockwise loop barefoot starting from the Arunachaleswarar temple — there are eight lingams marking the path. The hilltop cauldron is lit between 5:30 and 6 p.m.; stand at the main temple's eastern gopuram for the best view of the sudden flame.",
  },
  {
    slug: "arudra-darshan-2026",
    kind: "festival",
    name: "Arudra Darshan",
    dateLabel: "24 Dec",
    startDate: "2026-12-24",
    endDate: "2026-12-24",
    months: ["December"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual", "Music & Dance"],
    image: IMG.templeAlt2,
    shortBlurb: "Nataraja brought out for darshan once a year.",
    description:
      "On the Arudra (Tiruvathirai) star of the Tamil month Margazhi, the bronze Nataraja idol of Chidambaram is removed from the sanctum, bathed in milk, ghee, honey and sandalwood and shown to the public — the only morning of the year it is openly visible.",
    significance:
      "Said to be the day Shiva first performed the Ananda Tandavam, the cosmic dance of bliss, on Mount Kailash.",
    bestPlaces: ["Chidambaram Nataraja Temple", "Tiruvarur", "Thillai temples"],
    history:
      "The Arudra Darshan tradition is unique to Chidambaram and the other Thillai temples — the Chidambaram Nataraja's bronze utsava murti is normally hidden behind a screen in the Chit Sabha hall and only fully revealed at this single dawn each year. The festival was institutionalised by the Chola king Rajaraja I in the early 11th century, who endowed the temple with the inscriptions that still record its rituals. Margazhi's Arudra star is considered the most sacred dawn of the year because of the alignment of cosmological signs the Nayanmars (Shaiva poet-saints) wrote of in the Thevaram hymns.",
    rituals: [
      "From midnight the temple holds the four jamam pujas, each marking a watch of the night.",
      "The Nataraja idol is bathed in milk, curd, honey, sandalwood paste and rosewater (the panchamrita abhishekam).",
      "At 4 a.m. the priests draw aside the silver screen for the public darshan — the only morning of the year this is done.",
      "Bharatanatyam dancers perform the Margazhi-Tiruvathirai recital in the temple's east corridor.",
      "Devotees touch the temple's stone threshold and dip their forehead in the sacred ash applied to the idol.",
    ],
    foods: [
      "Kali — a thick wheat-jaggery porridge, the signature Arudra dish.",
      "Ezhu kari kootu — a seven-vegetable curry, made and offered to Shiva.",
      "Curd rice with manga inji (mango-ginger) pickle — eaten at dawn after the darshan.",
      "Filter coffee — sold at every street stall through the cold Margazhi morning.",
    ],
    whatToExpect:
      "The Chidambaram temple opens at midnight and the queue for the 4 a.m. darshan starts forming by 1 a.m. — be inside the temple by 11 p.m. or be prepared for a long wait. Margazhi pre-dawn in Chidambaram is genuinely cold; wear warm layers. The moment the screen is drawn is among the most charged in any South Indian temple; cameras must be put away.",
  },
  {
    slug: "vaikunta-ekadashi-2026",
    kind: "festival",
    name: "Vaikunta Ekadashi",
    dateLabel: "30 Dec",
    startDate: "2026-12-30",
    endDate: "2026-12-30",
    months: ["December"],
    states: ["tamil-nadu"],
    interests: ["Religious & Spiritual"],
    image: IMG.gopuram,
    shortBlurb: "Walk through the gate of paradise.",
    description:
      "Sri Rangam, Tirupati and every major Vishnu temple open a north-facing door — the Paramapada Vasal — for a single day. Pilgrims walk through it before dawn after fasting, believing they have walked the path to Vaikuntha.",
    significance:
      "Considered the holiest of the year’s 24 Ekadashis. Crossing the threshold is said to release the soul from rebirth.",
    bestPlaces: ["Sri Rangam Trichy", "Tirumala Tirupati", "Srivilliputhur"],
    history:
      "The Paramapada Vasal (gate of paradise) tradition is recorded in the Nalayira Divya Prabandham, the four-thousand-verse Vaishnava canon compiled by the Alvar poet-saints between the 6th and 9th centuries. Sri Rangam's particular ritual was formalised by Ramanujacharya in the 11th century when he reorganised the temple's Pancharatra liturgy. The north-facing door — normally walled shut — symbolises the entry to Vishnu's eternal abode, and is opened only at dawn on Margazhi Sukla Ekadashi, the day Krishna is said to have delivered the Bhagavad Gita.",
    rituals: [
      "Devotees observe a complete nirjala fast (no food or water) from sunrise Dasami to sunrise Dwadasi.",
      "An all-night jagaran is held with continuous Vishnu sahasranama recitation.",
      "The north-facing Vaikuntha Dwara is opened at 4 a.m. on Ekadashi and pilgrims walk through it single file.",
      "The thiruvarayar (priest) leads the deity through the door in procession on the elephant or hamsa vahana.",
      "Aragamudal — the post-fast meal of curd rice and dosakai (cucumber) — breaks the fast on Dwadasi morning.",
    ],
    foods: [
      "Aragamudal — light curd rice with raw cucumber, the prescribed first food after the fast.",
      "Adai aviyal — a thick lentil pancake with mixed-vegetable coconut gravy, the Sri Rangam temple prasadam.",
      "Sakkarai pongal — sweet rice offering at the deity's feet.",
      "Vada parupu — a soaked-dal preparation eaten cold the previous evening to prepare for the fast.",
    ],
    whatToExpect:
      "Sri Rangam is the most powerful place to be — over 1.5 million pilgrims pass through the Paramapada Vasal between 4 and 10 a.m. The queue starts forming the previous evening; book accommodation inside the temple town. The walk through the door is brisk (you cannot stop) but the moment is profound. Carry no luggage; phones and bags are not allowed in the inner corridor.",
  },
  // Tamil Nadu — Events
  {
    slug: "mamallapuram-dance-2026",
    kind: "event",
    name: "Mamallapuram Dance Festival",
    dateLabel: "25 Dec – 22 Feb",
    startDate: "2026-12-25",
    endDate: "2027-02-22",
    months: ["December", "January", "February"],
    states: ["tamil-nadu"],
    interests: ["Music & Dance", "Heritage & Historical", "Cultural & Folk"],
    image: IMG.cultural,
    shortBlurb: "Classical dance beside the Shore Temple.",
    description:
      "Over six weekends every winter, Bharatanatyam, Kuchipudi, Mohiniyattam and Odissi performances are staged on an open-air platform with the seventh-century Pallava rock-cut sculptures of Mamallapuram as backdrop.",
    significance:
      "Curated by the Tamil Nadu Department of Tourism since 1991 to keep the classical arts in dialogue with the sculptures that inspired them.",
    bestPlaces: ["Mamallapuram (Mahabalipuram)"],
    history:
      "The festival was conceived in 1991 by then Tamil Nadu Tourism secretary V. Murthy as a way to stage classical dance against the Pallava-era rock reliefs that depict the same dance forms. The 7th-century 'Descent of the Ganges' bas-relief at Mamallapuram is one of the oldest visual representations of Indian classical dance, and the festival was deliberately set in front of it. UNESCO recognised the site as World Heritage in 1984; the festival is officially a partner programme of the listing.",
    rituals: [
      "Performances begin at dusk (around 6:30 p.m.) with a temple-style invocation.",
      "Each evening is curated around a single dance form — Bharatanatyam, Kuchipudi, Mohiniyattam, Kathak, Odissi.",
      "Saturday and Sunday evenings host the headline artists; weekday performances feature younger dancers.",
      "Open-air seating is on stone steps facing the lit-up Pallava reliefs.",
      "Entry is free but advance pass-collection from the Tamil Nadu Tourism office is recommended for weekends.",
    ],
    foods: [
      "Fresh seafood — Mamallapuram is on the coast; the fish-grill stalls behind the Shore Temple are excellent.",
      "Filter coffee — the post-show ritual at the small cafés along the highway.",
      "Tender coconut water — sold by the beach all evening.",
      "Idli with thick coconut chutney — the morning street-food before the next day's site visit.",
    ],
    whatToExpect:
      "Mamallapuram in winter is pleasantly cool in the evening; bring a light shawl for the open-air seating. Combine the festival with a daytime tour of the Pancha Rathas, the Shore Temple and the Krishna Butterball. Stay 2 nights minimum — one for the dance, one for the site. Easy 1.5-hour drive from Chennai.",
  },
  {
    slug: "chennai-music-season-2026",
    kind: "event",
    name: "Chennai December Music Season",
    dateLabel: "15 Dec – 15 Jan",
    startDate: "2026-12-15",
    endDate: "2027-01-15",
    months: ["December", "January"],
    states: ["tamil-nadu"],
    interests: ["Music & Dance", "Cultural & Folk"],
    image: IMG.cultural,
    shortBlurb: "The world’s largest Carnatic music festival.",
    description:
      "Across 300+ sabhas in the city, more than 2,000 concerts of Carnatic music and Bharatanatyam play through the month of Margazhi. Tickets are inexpensive and the lecture-demonstrations in the mornings are free.",
    significance:
      "Began in 1927 as a small Madras Music Academy festival and is now the largest gathering of classical Indian artists anywhere in the world.",
    bestPlaces: ["Music Academy", "Krishna Gana Sabha", "Mylapore Fine Arts"],
    history:
      "The Margazhi music season grew out of the founding of the Madras Music Academy on 18 August 1928 — itself an offshoot of the 1927 All India Congress Music Conference. The trinity of Carnatic music (Tyagaraja, Muthuswami Dikshitar and Syama Sastri) all lived in the 18th-century Tanjore court, but their compositions were preserved and revived for public concert performance by 20th-century musicians who consolidated the season's repertoire. The festival overlaps with Margazhi (mid-December to mid-January), considered the holiest month for Vishnu devotion, lending the recitals their spiritual gravity.",
    rituals: [
      "Each sabha (concert hall) runs three slots a day: 9 a.m. lec-dem (lecture demonstration), 4 p.m. junior concert, 6:30 p.m. senior concert.",
      "Tickets are sold both as season passes and per-concert; mornings are usually free.",
      "Audiences keep tala (rhythmic cycle) with their hands on their thighs — a participatory tradition unique to Carnatic.",
      "The Madras Music Academy presents its Sangita Kalanidhi (highest Carnatic honour) and Nritya Kalanidhi awards on 1 January each year.",
      "Sabha canteens serve traditional South Indian meals between concerts — eating at the Music Academy or Mylapore Fine Arts canteen is its own ritual.",
    ],
    foods: [
      "Filter coffee — the season's official drink, downed between morning lec-dem and afternoon concert.",
      "Curd rice with mango pickle — the standard sabha-canteen meal.",
      "Adai-aviyal — a thick multigrain pancake with mixed-vegetable coconut gravy.",
      "Vada and ven pongal — the morning breakfast staple at all sabhas.",
      "Akkaravadisal — sweet rice cooked in milk and jaggery, a Margazhi-month specialty.",
    ],
    whatToExpect:
      "Mylapore in Chennai is the heart of the season — five major sabhas within a 1-kilometre radius. Pick up a season schedule from any sabha office on arrival. Concerts run from morning to past 10 p.m.; choose 2-3 you really want to see rather than burning out. Dress code is smart-casual; many older Chennai families come in silk sarees and veshti. The canteen food at the Music Academy is famously excellent.",
  },

  // ============================================================
  // KERALA — Festivals
  // ============================================================
  {
    slug: "makaravilakku-2026",
    kind: "festival",
    name: "Makaravilakku (Sabarimala)",
    dateLabel: "14 Jan",
    startDate: "2026-01-14",
    endDate: "2026-01-14",
    months: ["January"],
    states: ["kerala"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt1,
    shortBlurb: "A divine flame on Ponnambalamedu.",
    description:
      "On Makara Sankranti, a star — Makaravilakku — appears thrice on the Ponnambalamedu hills across from Sabarimala. The temple is unveiled in golden ornaments for the Thiruvabharanam darshan that same evening, ending the 41-day Mandala season.",
    significance:
      "The most sacred night of the Sabarimala calendar. The vilakku is said to commemorate the moment Lord Ayyappa merged into the divine after defeating Mahishi.",
    bestPlaces: ["Sabarimala Ayyappa Temple", "Pamba", "Ponnambalamedu (viewpoint)"],
    history:
      "The Sabarimala Ayyappa cult traces to the Pandalam Raja dynasty of central Kerala, with the temple's reconstruction by Pandya prince Manikandan dated to the 12th century. The Makaravilakku festival follows the 41-day Mandala vratham (December–January), in which devotees observe celibacy, vegetarianism and no footwear before climbing to Sabarimala. The 'Makara Jyothi' star — the actual astronomical Sirius — and the lit deepam on Ponnambalamedu hill have been observed together on this night for centuries; in 2011 the temple board acknowledged the hilltop fire is now lit by forest officials, though the Jyothi star itself is natural.",
    rituals: [
      "Devotees complete the 41-day vratham — bathing in cold water twice daily, wearing only black, sleeping on the floor, no shoes.",
      "Pilgrims carry the irumudi kettu (two-pouch bundle) on their head — the front pouch with ghee, the back with offerings — and bathe in the Pamba river before the climb.",
      "The 18 sacred steps (Pathinettam Padi) are climbed only by those with the irumudi.",
      "On Makaravilakku evening, the Thiruvabharanam (sacred ornaments) is brought in procession from Pandalam Palace to Sabarimala over three days.",
      "At dusk, the deity is dressed in the ornaments and shown to pilgrims; the deepam is lit on Ponnambalamedu and Makara Jyothi appears in the sky.",
    ],
    foods: [
      "Aravana payasam — the temple's signature jaggery-rice payasam, made in massive copper cauldrons.",
      "Appam — small ghee-fried rice cakes, considered the most sacred prasadam.",
      "Coconut and ghee — offered by every pilgrim and broken at the steps before entering.",
      "Banana — eaten on the climb for energy; the small Palayankodan variety is preferred.",
    ],
    whatToExpect:
      "Sabarimala is restrictive — only male pilgrims and women outside the menstruating age (10–50) traditionally climb, and the 41-day vratham is non-negotiable for the steps. Casual visitors view from Ponnambalamedu across the valley, which itself requires a 5 km trek. Crowds peak at over a million on Makaravilakku evening. The Pamba river bath is the most accessible point for non-pilgrim visitors. Plan for cold mountain nights even in January.",
  },
  {
    slug: "maramon-convention-2026",
    kind: "event",
    name: "Maramon Convention",
    dateLabel: "8–15 Feb",
    startDate: "2026-02-08",
    endDate: "2026-02-15",
    months: ["February"],
    states: ["kerala"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.kerala,
    shortBlurb: "Asia’s largest Christian gathering on a riverbank.",
    description:
      "Each February the dry bed of the Pamba river at Maramon is laid with sand and seating for over a hundred thousand. The week of preaching, hymn-singing and Bible study has been held annually since 1895.",
    significance:
      "The largest annual Christian convention in Asia and the cultural high point of Kerala’s Mar Thoma community.",
    bestPlaces: ["Maramon (Pathanamthitta district)"],
    history:
      "The Maramon Convention was founded in 1895 by the Mar Thoma Syrian Church, which traces its lineage to the Apostle Thomas (who is believed to have landed at Kodungallur in Kerala in 52 CE). The convention emerged from the late-19th-century Kerala Christian reform movement led by Abraham Malpan. Held continuously since founding — except during the 1947 Partition and 2020 pandemic — it has hosted preachers from Billy Graham to Mother Teresa.",
    rituals: [
      "The dry Pamba riverbed is levelled, sand-laid and partitioned into seating sectors over three weeks in January.",
      "Each day opens with a 6 a.m. dawn service and runs four preaching sessions until late evening.",
      "Sankeerthanam (Malayalam hymn singing) led by 1,000-strong choirs is the convention's signature sound.",
      "On the closing Sunday, a 10,000-clergy procession enters the pandal for the joint Holy Communion.",
      "Sermons are simultaneously translated into English, Hindi and Tamil for the international audience.",
    ],
    foods: [
      "Kappa puzhukku — boiled tapioca with grated coconut, the standard convention-canteen lunch.",
      "Meen curry — Kerala fish curry in tamarind and coconut gravy.",
      "Puttu and kadala curry — steamed rice flour with black chickpea curry, the morning meal.",
      "Pazham pori — banana fritters sold by vendors along the riverbank.",
      "Sulaimani chai — black lemon tea, the convention's anytime drink.",
    ],
    whatToExpect:
      "Maramon village in February sees its population multiply by twenty for the week. Casual visitors are welcome at all sessions; bring a folded cotton sheet to sit on the sand and a sun hat (the days warm up quickly). Modest dress is expected. The 5 p.m. and 7 p.m. sessions draw the largest crowds; mornings are easier. Stay in Pathanamthitta town (12 km) and take the convention shuttle.",
  },
  {
    slug: "attukal-pongala-2026",
    kind: "festival",
    name: "Attukal Pongala",
    dateLabel: "4 Mar",
    startDate: "2026-03-04",
    endDate: "2026-03-04",
    months: ["March"],
    states: ["kerala"],
    interests: ["Religious & Spiritual", "Cultural & Folk", "Food & Cuisine"],
    image: IMG.diyas,
    shortBlurb: "World record for most women in one religious gathering.",
    description:
      "More than three million women line every street of Trivandrum to cook a rice-and-jaggery offering on clay stoves before the Attukal Devi. The lit hearths stretch for kilometres in every direction from the temple.",
    significance:
      "Listed in the Guinness Records as the largest gathering of women for a religious purpose. The Pongala is offered to the Bhagavathy as a daughter’s plea for her family’s wellbeing.",
    bestPlaces: ["Attukal Bhagavathy Temple Trivandrum"],
    history:
      "The Attukal Bhagavathy is identified with Kannagi, the heroine of the 2nd-century Tamil epic Silappadikaram, who is said to have stopped at Attukal on her journey from Madurai to Kodungallur after burning down Madurai. The temple's surviving granite shrine dates to the 13th-century Chera period. The Pongala offering format was systematised in 1923 when a small group of women began the rite in the temple courtyard; by 1997 the gathering had grown so large that Guinness recognised it as the world record. The 2009 Pongala had over 3.5 million participating women.",
    rituals: [
      "Women cook the Pongala — rice with jaggery, coconut, ghee and banana — on small clay hearths set up on every street, balcony and roof for 8 km around the temple.",
      "Hearths must be set up by the previous evening and lit only when the temple's prasadam fire (the 'pandara aduppu') is lit.",
      "When the Pongala boils over, women throw fistfuls of grain into the pot to symbolise abundance.",
      "Temple priests walk the streets sprinkling holy water (theerthanjali) on each hearth.",
      "After the offering, a small portion is taken home as prasadam for the family; the rest is shared with neighbours.",
    ],
    foods: [
      "Pongala — the signature jaggery-rice offering, made with raw rice, jaggery, ghee, coconut and banana.",
      "Therali appam — a sweet dumpling steamed in vazhanayila leaves.",
      "Mandaputtu — sweet steamed rice cake offered alongside the Pongala.",
      "Vada — small fried lentil rounds, served as accompaniment.",
      "Kadali pazham — small banana variety, the customary first food broken after offering.",
    ],
    whatToExpect:
      "Trivandrum essentially shuts for two days. Every road within 8 km of the temple is closed to vehicles. Male visitors traditionally stay away from the hearth rows out of respect, but can watch from rooftop vantage points. Heat from millions of hearths makes the city noticeably hotter; carry water. The Pongala fires are lit around 10:30 a.m. and the offering is complete by 3 p.m. Book hotels at least 6 months ahead.",
  },
  {
    slug: "vishu-2026",
    kind: "festival",
    name: "Vishu",
    dateLabel: "14 Apr",
    startDate: "2026-04-14",
    endDate: "2026-04-14",
    months: ["April"],
    states: ["kerala"],
    interests: ["Cultural & Folk", "Harvest & Seasonal"],
    image: IMG.kerala,
    shortBlurb: "The first sight of the new year.",
    description:
      "On Vishu morning, families wake to see the Vishu kani — an arrangement of golden konna flowers, raw rice, fruit, coins and a mirror lit by an oil lamp. The elders give kaineetam (gift money) to the young.",
    significance:
      "The Malayalam astrological new year, marking the sun’s entry into Aries. The kani is meant to be the year’s first vision and so determine its tone.",
    bestPlaces: ["Guruvayur", "Sabarimala", "across Kerala"],
    history:
      "Vishu marks the sun entering Mesha rashi (Aries) — the same astronomical event observed as Puthandu in Tamil Nadu, Bohag Bihu in Assam and Vaisakhi in Punjab. Kerala's version is heavily Vaishnava, centred on Krishna. The Vishu kani tradition is mentioned in the 14th-century Sandesha Kavya of Uddanda Sastri. The golden konna (Cassia fistula) flower blooms exactly on Vishu day, which sealed its central role in the kani arrangement.",
    rituals: [
      "On Vishu eve, the senior woman of the house arranges the kani — a bell-metal urli filled with raw rice, golden konna flowers, jackfruit, mango, gold coins, a Bhagavata Purana copy and a metal mirror, lit by an oil lamp.",
      "Family members are led blindfolded the next morning to see the kani as the year's first vision.",
      "Elders give kaineetam (gift money) to younger members, particularly children.",
      "Guruvayur Krishna temple is the most important kani-darshan destination; pilgrims queue overnight to be first.",
      "The day's grand sadya (feast) follows the kani; firecrackers are lit by children.",
    ],
    foods: [
      "Vishu kanji — a thin rice porridge with jackfruit seeds and grated coconut.",
      "Vishu katta — pressed rice cake served with jaggery and sliced banana.",
      "Mampazha pulissery — ripe mango cooked in coconut-yoghurt gravy.",
      "Veppampoo rasam — neem-flower rasam for the bitter note of the new year.",
      "Sadya — full vegetarian feast on banana leaf with 12+ items, ending in paayasam.",
    ],
    whatToExpect:
      "Guruvayur is the destination — the temple opens at 3 a.m. on Vishu and the kani darshan queue forms by midnight. The mood at home in Kerala is gentle and family-centred. Many homestays now offer a guest-friendly kani viewing and full sadya on Vishu morning. The countryside in mid-April is hot but the konna trees are in full yellow bloom — visually striking.",
  },
  {
    slug: "thrissur-pooram-2026",
    kind: "festival",
    name: "Thrissur Pooram",
    dateLabel: "26 Apr",
    startDate: "2026-04-26",
    endDate: "2026-04-26",
    months: ["April"],
    states: ["kerala"],
    interests: ["Cultural & Folk", "Music & Dance", "Religious & Spiritual"],
    image: IMG.kerala,
    shortBlurb: "Caparisoned elephants, fireworks at dawn.",
    description:
      "Two temple groups parade thirty caparisoned elephants each into the Thekkinkadu maidan to the music of the panchavadyam. The night ends with the famed Thrissur fireworks lighting the sky just before dawn.",
    significance:
      "The largest pooram of Kerala, instituted in the 1790s by Sakthan Thampuran of Kochi to unify the temples around Thrissur.",
    bestPlaces: ["Thrissur — Vadakkunnathan Temple ground"],
    history:
      "Thrissur Pooram was created in 1798 by Raja Rama Varma — known as Sakthan Thampuran — of the Kochi kingdom. He brought together the ten participating temples (Paramekkavu and Thiruvambady as the principal two) after the British colonial reorganisation had disrupted their individual festivals. The Vadakkunnathan Shiva temple at the centre is far older — likely 8th-century Chera. The Pooram has been held essentially unchanged for 226 years, including through the World Wars and the Partition.",
    rituals: [
      "Madathil Varavu (morning): Thiruvambady team enters the maidan with five elephants and the panchavadyam ensemble.",
      "Ilanjithara Melam (afternoon): a two-hour percussion ensemble of 250 musicians performs at the eastern banyan tree, the high point for music aficionados.",
      "Kudamattam (4 p.m.): a competitive display of decorative parasols (kudas) by Paramekkavu and Thiruvambady teams atop 30 elephants each, exchanged every 3 minutes.",
      "Sample Vedikettu (1 a.m.): a smaller fireworks display previewing the main display.",
      "Main Vedikettu (3 a.m. before dawn): the famous fireworks last 90 minutes; the Thrissur sky is permanently lit during the show.",
    ],
    foods: [
      "Kerala-style biriyani — eaten cold from packets sold around the maidan.",
      "Pazham pori — banana fritters, the standard pooram snack.",
      "Parippu vada — fried lentil patties.",
      "Sulaimani — black lemon tea, served hot through the long night.",
      "Kappa with meen curry — at the small eateries off the maidan for a proper meal.",
    ],
    whatToExpect:
      "Plan to be in Thrissur 2 days in advance. The Vadakkunnathan maidan accommodates up to 500,000 people; the south-eastern corner gives the best Kudamattam view, the eastern banyan area the best Ilanjithara Melam acoustics. Wear comfortable cotton — Kerala in April is hot and humid. Sleep in 2-hour breaks during the day; the main night runs 6 p.m. to 5 a.m. Booking hotels 6 months ahead is essential.",
  },
  {
    slug: "buddha-purnima-2026",
    kind: "festival",
    name: "Buddha Purnima",
    dateLabel: "1 May",
    startDate: "2026-05-01",
    endDate: "2026-05-01",
    months: ["May"],
    states: ["kerala", "tamil-nadu", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt3,
    shortBlurb: "The full moon of the Buddha’s birth and enlightenment.",
    description:
      "The Vaishakha full moon marks the Buddha’s birth, enlightenment and parinirvana — all said to have occurred on the same day. Buddhist stupas at Amaravati and Anuradhapura see processions and lamp lightings.",
    significance:
      "The most sacred day of the Buddhist calendar across the world.",
    bestPlaces: ["Amaravati", "Nagarjunakonda", "Sannati"],
    history:
      "Buddha Purnima (also Vesak) commemorates three events on the same Vaishakha full moon: the Buddha's birth in Lumbini (563 BCE), his enlightenment under the Bodhi tree at Bodh Gaya (528 BCE), and his parinirvana at Kushinagar (483 BCE). South India was a major Buddhist centre during the Satavahana and Ikshvaku periods (1st century BCE to 4th century CE). Amaravati housed one of the four great stupas built by Emperor Ashoka, with its carved marble railings now in the British Museum and Chennai Government Museum. Nagarjunakonda was the Ikshvaku capital and remains the largest Buddhist site in South India.",
    rituals: [
      "White or saffron is worn; meat and alcohol are avoided for the day.",
      "Devotees light 108 oil lamps around stupas to commemorate the Buddha's 108 attributes.",
      "Pradakshina (circumambulation) of stupas is done three times — for the Buddha, the Dhamma and the Sangha.",
      "The Vesak puja involves offerings of water, flowers and lit lamps; the symbolism is impermanence.",
      "At Amaravati, ten-hour parinirvana meditation sessions are held by the Mahabodhi Society from sunrise.",
    ],
    foods: [
      "Kheer / payasam — sweet rice-milk pudding, traditionally offered to monks; also what Sujata gave the Buddha just before enlightenment.",
      "Plain steamed rice and lentil curry — simple satvik meals are preferred.",
      "Fresh fruit — particularly mango, plantain and the season's first jackfruit.",
      "Buttermilk with rock salt and cumin — the standard cooling drink.",
    ],
    whatToExpect:
      "Amaravati and Nagarjunakonda are quiet, contemplative sites — not festival spectacles. Visit in the early morning when the marble stupa ruins catch the light. The Mahabodhi Society arranges day-long meditation programmes open to all; book ahead. Sannati in Karnataka (Gulbarga district) has a recently-excavated Ashokan stupa and is the least visited.",
  },
  {
    slug: "aranmula-boat-race-2026",
    kind: "event",
    name: "Aranmula Uthrattathi Boat Race",
    dateLabel: "22 Sep",
    startDate: "2026-09-22",
    endDate: "2026-09-22",
    months: ["September"],
    states: ["kerala"],
    interests: ["Cultural & Folk", "Music & Dance"],
    image: IMG.kerala,
    shortBlurb: "Snake boats on the Pampa to a Parthasarathy chant.",
    description:
      "Forty-six oarsmen in each 100-foot palliyodam row the snake boats up the Pampa, singing the vanchipattu in chorus, in front of the Parthasarathy temple. There is no winner — the race is itself an offering.",
    significance:
      "The oldest of Kerala’s vallam kalis, with rituals tracing back to a temple legend that involves an annual feast for Krishna.",
    bestPlaces: ["Aranmula on the Pampa river"],
    history:
      "Aranmula Vallamkali is rooted in an Onam-period temple legend — a Brahmin who fed Krishna at Aranmula was visited by the deity in disguise, and his community pledged a feast (the Vallasadya) and a boat procession every year in return. The Parthasarathy temple itself dates to the early 13th-century Pandya influence in central Kerala. Each palliyodam (snake boat) is owned by a particular karayogam (village association), some of which trace their boats' lineage back over 200 years; the boats are stored on dry land under thatched sheds the rest of the year.",
    rituals: [
      "The palliyodams are launched into the Pampa on the morning of Uthrattathi.",
      "Each boat carries 4 helmsmen, 100 singers and 25 oarsmen — total 129 men, all from the karayogam.",
      "The Vanchipattu (boat song) is sung in unison; the rhythm sets the oar stroke.",
      "Boats move slowly upriver, side by side rather than racing — this is a procession, not a competition.",
      "After the procession, the Vallasadya (multi-course banana-leaf meal) is offered to Krishna in the temple and then served to all participants.",
    ],
    foods: [
      "Vallasadya — Aranmula's signature 64-item banana-leaf feast served to oarsmen and pilgrims.",
      "Paalada pradhaman — Aranmula's famous rice-flake milk payasam.",
      "Erissery — pumpkin and red beans cooked in coconut and jaggery.",
      "Inji curry — ginger-jaggery pickle, the appetiser of the Vallasadya.",
      "Kalan — yam in yoghurt-coconut gravy.",
    ],
    whatToExpect:
      "Aranmula village is small and tranquil; the festival turns it into a busy half-day event. Stand on the south bank of the Pampa for the best view as the boats approach the temple. The Vallasadya is open to all who arrive by 11 a.m. and seat themselves on the temple verandah; expect to wait 30 minutes in queue. Photography is welcomed; videography requires temple permission.",
  },
  {
    slug: "nehru-trophy-2026",
    kind: "event",
    name: "Nehru Trophy Boat Race",
    dateLabel: "8 Aug",
    startDate: "2026-08-08",
    endDate: "2026-08-08",
    months: ["August"],
    states: ["kerala"],
    interests: ["Cultural & Folk", "National & Civic"],
    image: IMG.kerala,
    shortBlurb: "Punnamada Lake’s competitive snake boats.",
    description:
      "On the second Saturday of August, the chundan vallams race down the Punnamada lake at Alappuzha in front of a hundred-thousand-strong crowd. The trophy was donated by Jawaharlal Nehru after a 1952 visit.",
    significance:
      "The most competitive of Kerala’s snake-boat races, where village teams train year-round for a single nine-minute run.",
    bestPlaces: ["Punnamada Lake, Alappuzha"],
    history:
      "The Nehru Trophy was first held in 1952 after Prime Minister Jawaharlal Nehru visited Alappuzha and was struck by the chundan vallam — a 100-foot war boat traditionally used by the Chempakassery kings. Nehru sat in a snake boat himself and afterwards donated a silver trophy from Delhi. The race is now run with around 22 chundan vallams plus other boat classes, in front of grandstands that hold over 100,000 spectators. The 1952 vintage Trophy itself sits permanently at the winning village's karayogam.",
    rituals: [
      "Boats are blessed at their home village temples a week before; oarsmen abstain from meat and alcohol.",
      "Each chundan carries 4 helmsmen, 25 singers and 100 to 125 oarsmen.",
      "The Vanchipattu chorus drives the rhythm — different songs for warming up, the race itself, and the victory return.",
      "The 1,400-metre Punnamada course is run in heats; the final 9-minute race decides the trophy.",
      "Winners parade the trophy through the home village by torchlight that evening.",
    ],
    foods: [
      "Karimeen pollichathu — pearl-spot fish wrapped in banana leaf and grilled.",
      "Kappa biriyani — tapioca with spiced beef or fish, the Alappuzha race-day classic.",
      "Toddy (kallu) — fresh palm wine sold in shacks along the backwaters.",
      "Appam with stew — soft rice pancake with vegetable or chicken stew.",
      "Banana chips fried in coconut oil — every local stall sells them fresh.",
    ],
    whatToExpect:
      "Book grandstand tickets through Kerala Tourism (KTDC) two months ahead; non-ticketed viewing is available from the south embankment for free but you'll need to stake out a spot by 6 a.m. The race itself is 11 a.m. to 4 p.m. The day before, the boats arrive at Punnamada in procession — a beautiful free spectacle. Stay overnight at one of Alappuzha's houseboats for the full backwater experience.",
  },
  {
    slug: "onam-2026",
    kind: "festival",
    name: "Onam",
    dateLabel: "26 Aug – 5 Sep",
    startDate: "2026-08-26",
    endDate: "2026-09-05",
    months: ["August", "September"],
    states: ["kerala"],
    interests: ["Harvest & Seasonal", "Cultural & Folk", "Food & Cuisine"],
    image: IMG.kerala,
    shortBlurb: "The return of King Mahabali — ten days of feasting.",
    description:
      "Kerala welcomes the legendary asura king Mahabali home for ten days with floral pookalam at every doorstep, the Onam sadya served on banana leaves with 26 dishes, boat races on the backwaters, and Pulikali tiger-dancers prowling Thrissur.",
    significance:
      "The state’s most beloved festival, celebrated by every community regardless of religion. It commemorates a king whose reign was so just that he is permitted to revisit his subjects each year.",
    bestPlaces: ["Trivandrum", "Thrissur", "Kochi", "Alappuzha backwaters"],
    history:
      "Onam's central legend tells of the Asura king Mahabali — grandson of Prahlada and a just ruler under whose reign Kerala enjoyed a golden age of equality. The gods, jealous of his virtue, sent Vishnu in his Vamana (dwarf) avatar to ask Mahabali for three paces of land; Vamana then grew to cosmic size and pushed Mahabali to the underworld with his foot. As a final boon, Mahabali was permitted one yearly visit to his beloved subjects — the ten days of Onam. The festival's harvest dimension dates to the Chera-period Tamil-Malayalam agricultural calendar; the Atham star opening of the festival corresponds to the late-monsoon harvest.",
    rituals: [
      "Day 1 (Atham): the first row of the pookalam (floral carpet) is laid at the doorstep — typically yellow chrysanthemums in a single ring.",
      "Each subsequent day, a new ring is added and the variety of flowers grows; by Thiruvonam day, the pookalam is 8-10 rings of complex geometric design.",
      "Onathappan (a small clay pyramidal idol of Mahabali) is placed at the centre of the pookalam.",
      "Onathallu (martial arts), Vallamkali (snake boat races), Kummattikali (mask dance) and Pulikali (tiger dance) animate Thrissur and Trichur.",
      "On Thiruvonam day, families dress in new traditional clothes (kasavu mundu and saree), perform Vishukani at sunrise, and serve the Onam sadya at noon.",
    ],
    foods: [
      "Onam Sadya — the 26-dish vegetarian feast served on banana leaf, including avial (mixed-vegetable coconut curry), olan (ash gourd and red beans), thoran (vegetable stir-fry), pulissery (yoghurt-vegetable), erissery, kalan and three payasams.",
      "Ada pradhaman — rice-flake jaggery payasam, the signature Onam sweet.",
      "Pal payasam — milk-and-rice pudding, the second payasam.",
      "Pazham pradhaman — banana jaggery payasam, the third payasam.",
      "Banana chips — fried in coconut oil with rock salt, the standard side.",
    ],
    whatToExpect:
      "Kerala fills with energy across all ten days. Thrissur on day 9 (the eve of Thiruvonam) is the most spectacular — Pulikali parades of orange-and-black-painted dancers move through the streets to the rhythm of chenda drums. Snake-boat races at Aranmula and Alappuzha fall during the Onam window. Most houses welcome guests for the sadya — even tourists, if you ask politely at homestays. Book accommodation 3 months out; weather is wet but warm.",
  },
  {
    slug: "navaratri-kerala-2026",
    kind: "festival",
    name: "Navaratri (Kerala)",
    dateLabel: "11–20 Oct",
    startDate: "2026-10-11",
    endDate: "2026-10-20",
    months: ["October"],
    states: ["kerala"],
    interests: ["Religious & Spiritual", "Music & Dance"],
    image: IMG.gopuram,
    shortBlurb: "Vidyarambham at the Saraswati temples.",
    description:
      "Through the nine nights of Navaratri, classical music concerts are held at the Saraswati temples of Panachikkadu, Chottanikkara and Tiruvilwamala. On Vijayadashami morning, children are initiated into reading and writing.",
    significance:
      "Kerala’s Saraswati Navaratri is among the most musically rich in India, with senior Carnatic musicians performing through the night.",
    bestPlaces: ["Panachikkadu Saraswati Temple", "Chottanikkara", "Thiruvananthapuram"],
    history:
      "Navaratri in Kerala took its distinctive musical form under the patronage of Maharaja Swathi Thirunal of Travancore (1813–1846), a Carnatic composer-king. He instituted the Navaratri Mandapam concerts at his Padmanabhaswamy Temple complex in Thiruvananthapuram, opening the nine-night ritual music to non-royal listeners for the first time. The Panachikkadu temple's reputation as 'Kerala's Saraswati' dates to the 13th-century Travancore Brahmin scholar Mannan Adiyodi.",
    rituals: [
      "Books, instruments, tools and laptops are placed at the Saraswati altar on day 7 (Pooja Vyppu) — they cannot be used until Vijayadashami.",
      "At Thiruvananthapuram's Navaratri Mandapam, the same nine kritis composed by Swathi Thirunal are sung each night in sequence.",
      "On Vijayadashami at sunrise, the Vidyarambham — first letters written in rice — initiates children into reading.",
      "Pulluvan paatu (snake-deity songs) are performed at Panachikkadu by the hereditary Pulluvan community.",
      "Free meals (annadanam) are offered at all Saraswati temples through the nine days.",
    ],
    foods: [
      "Vella aval — sweet flattened rice with jaggery and grated coconut.",
      "Sundal — varieties of legume tempered with mustard and coconut.",
      "Payasam — different flavour each night through the nine days.",
      "Avalose unda — fried rice-flour-and-jaggery balls.",
    ],
    whatToExpect:
      "The Navaratri Mandapam concerts at Padmanabhaswamy Temple are free but limited entry — collect a pass from the temple office a day ahead. Programmes begin at 6 p.m. and end by 9 p.m. Both Panachikkadu and Chottanikkara are 1.5-hour drives from Kochi; combine them with a temple-and-music day-trip. Modest, traditional dress (mundu / saree) is preferred for temple entry.",
  },
  {
    slug: "mannarasala-ayilyam-2026",
    kind: "festival",
    name: "Mannarasala Ayilyam",
    dateLabel: "6 Oct",
    startDate: "2026-10-06",
    endDate: "2026-10-06",
    months: ["October"],
    states: ["kerala"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt3,
    shortBlurb: "Serpent worship in a thirty-thousand-grove.",
    description:
      "Mannarasala has over thirty thousand stone serpent images in a sacred grove. On the Ayilyam star of Thulam, the temple’s priestess carries the principal idol in procession through the grove, scattering rice and turmeric offerings.",
    significance:
      "One of the world’s oldest matrilineal temple lineages — the temple has always been served by a woman priest, never a man.",
    bestPlaces: ["Mannarasala Sree Nagaraja Temple, Haripad"],
    history:
      "Mannarasala is identified in the Sthala Purana with Parashurama, the warrior-sage credited with creating Kerala by hurling his axe into the sea. Parashurama is said to have appointed the Illom (Brahmin family) of Mannarasala to perform the snake worship; his oldest descendant — always a woman — continues as the Amma (priestess) today. The current Amma is the 71st in an unbroken lineage of around 2,000 years. The 16-acre grove around the temple is one of the oldest continuously protected sacred forests in India and is recognised by the Kerala State Biodiversity Board.",
    rituals: [
      "On Ayilyam morning, the Amma carries Nagaraja in a procession around the grove with offerings of milk and turmeric.",
      "Devotees offer uruli kamizhthal — a bronze vessel inverted on the temple floor — by women seeking children.",
      "When the prayer is answered, the woman returns and rights the vessel as thanksgiving.",
      "Noorum palum (rice flour and milk) is poured around the serpent shrines as offering.",
      "Childless couples spend the night in the temple compound, sleeping near the grove.",
    ],
    foods: [
      "Nivedyam meal — a satvik banana-leaf meal of rice, sambhar and three vegetable curries.",
      "Sarpabali payasam — a milk-rice pudding offered specifically to the serpent deities.",
      "Tender coconut water — offered at the small shrines inside the grove.",
      "Banana — the standard offering left at each individual snake idol.",
    ],
    whatToExpect:
      "Mannarasala is in Haripad, a 90-minute drive from Kochi. The temple grove is quiet, cool and dim — about 30,000 stone snake idols scattered among shaded trees create a unique atmosphere. Photography is restricted in the inner grove. The Ayilyam procession is held in the late morning and lasts about two hours. Modest dress and bare feet are required.",
  },
  {
    slug: "vaikathashtami-2026",
    kind: "festival",
    name: "Vaikathashtami",
    dateLabel: "26 Nov",
    startDate: "2026-11-26",
    endDate: "2026-11-26",
    months: ["November"],
    states: ["kerala"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt2,
    shortBlurb: "Shiva returns from Mount Kailash.",
    description:
      "Twelve days of offerings culminate in a midnight ritual where the Vaikom Mahadeva is bathed and prepared for darshan. Devotees fast from dawn the previous day and break the fast only after the night-time deeparadhana.",
    significance:
      "Vaikom’s Shiva is considered an elder among the Kerala Shaiva lineage. The temple was the site of the 1924 Vaikom Satyagraha for temple entry.",
    bestPlaces: ["Vaikom Mahadeva Temple, Kottayam"],
    history:
      "The Vaikom Mahadeva temple dates to the 8th-century Chera period, but rose to wider fame through the Vaikom Satyagraha of 1924-25, when EV Ramaswamy, Mahatma Gandhi and Sree Narayana Guru jointly led a campaign to allow lower-caste Hindus to walk on the public roads around the temple. The Satyagraha succeeded in 1925 and became a milestone of the Indian temple-entry movement. The Vaikathashtami festival itself is much older — a twelve-day Krishna Paksha Ashtami observance from the Shaiva Agama tradition.",
    rituals: [
      "Twelve days before Vaikathashtami, the daily abhishekams begin in escalating elaborate forms.",
      "Devotees observe a strict 12-day fast — single vegetarian meal a day — and sleep on the temple verandah.",
      "On the eve, the deity is brought out for the Ashtami Vilakku procession with 1,001 lit lamps along the temple corridors.",
      "At midnight, the seeveli (deity bath and dressing) is performed; devotees break their fast only after the post-midnight deeparadhana.",
      "Annadanam (free meal) is offered to all pilgrims through the 12 days.",
    ],
    foods: [
      "Aravana payasam — jaggery-rice payasam offered at the abhishekam.",
      "Kadumadhuram — a fried sweet of rice flour and jaggery.",
      "Pal payasam — the post-fast first food at midnight on Ashtami.",
      "Pazham nurukku — sweetened banana served as prasadam.",
    ],
    whatToExpect:
      "Vaikom is 60 km north of Kottayam and 40 km from Kochi. The temple is set in a beautiful 8-acre walled compound with a large pond. The Ashtami evening draws 100,000+ devotees; arrive by mid-afternoon for a good position. Photography inside the temple is not permitted. The fast is strict — even drinking water during the day is uncommon — but visitors are welcome to attend without observing.",
  },
  {
    slug: "guruvayur-ekadasi-2026",
    kind: "festival",
    name: "Guruvayur Ekadasi",
    dateLabel: "1 Dec",
    startDate: "2026-12-01",
    endDate: "2026-12-01",
    months: ["December"],
    states: ["kerala"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt1,
    shortBlurb: "Krishna’s longest night of darshan.",
    description:
      "Guruvayur’s sanctum stays open through the entire night of the Vrischika Ekadasi. The temple elephant Gajarajan Kesavan’s memorial stone is garlanded and the famed ‘Ekadashi Vilakku’ is lit before the inner door.",
    significance:
      "On this night Vishnu is said to have given the Bhagavad Gita to Arjuna. Devotees who fast through it are believed to gain release from the cycle of rebirth.",
    bestPlaces: ["Guruvayur Sri Krishna Temple"],
    history:
      "Guruvayur Krishna Temple's foundation legend involves Guru Brihaspati (preceptor of the gods) and Vayu (wind god) jointly installing the idol — hence the name 'Guru-Vayur'. The current temple structure dates to the 16th century with major renovations under the Kochi rajas. The legendary temple elephant Gajarajan Kesavan (1904-1976) became part of Guruvayur's identity; his tusks are mounted at the entrance and his memorial day is observed every December. Vrischika Ekadasi is the night Krishna delivered the Bhagavad Gita to Arjuna at Kurukshetra, making the Ekadasi at a Krishna temple especially powerful.",
    rituals: [
      "Devotees observe nirjala fast (no food or water) from sunrise Dasami to sunrise Dwadasi.",
      "The temple's Ekadashi Vilakku — a great oil lamp — is lit at sunset and kept burning through the night.",
      "All-night Bhagavata Saptaham (continuous Bhagavata Purana recitation) is conducted in the temple.",
      "Pilgrims do thulabaram — being weighed against an equivalent weight of bananas, butter or jaggery as offering.",
      "Krishna is dressed in special Ekadasi attire and given darshan continuously through the night.",
    ],
    foods: [
      "Palpayasam — Guruvayur's signature milk-rice payasam, considered the most sacred prasadam in the temple.",
      "Appam — small ghee-fried rice cakes, traditionally Krishna's favourite.",
      "Unniyappam — bite-sized fried sweet-rice cakes with jaggery and banana.",
      "Tulsi-soaked water — the only liquid permitted to break the fast on Dwadasi sunrise.",
    ],
    whatToExpect:
      "Guruvayur is 30 km from Thrissur. On Ekadasi the temple stays open until 1 a.m. (it usually closes at 9:30 p.m.) and reopens at 3 a.m. Dress code is strict — men in dhoti without shirt, women in saree or skirt-blouse (no salwar). Non-Hindus are not permitted inside the sanctum but can view from the outer prakaram. Plan an overnight stay; the temple's annadhanam (free meal) is at noon and 8 p.m.",
  },
  {
    slug: "theyyam-season-2026",
    kind: "festival",
    name: "Theyyam Season",
    dateLabel: "Oct – Apr",
    startDate: "2026-10-10",
    endDate: "2027-04-30",
    months: ["October", "November", "December", "January", "February", "March", "April"],
    states: ["kerala"],
    interests: ["Cultural & Folk", "Music & Dance", "Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "Northern Kerala becomes the deity.",
    description:
      "From October through April, the kavus and kalams of north Kerala host nightly Theyyam performances. A dancer in fire-rimmed costume and chenda accompaniment is possessed by the deity and addresses devotees directly through the night.",
    significance:
      "A 1,500-year-old performative form in which the dancer becomes a deity for the duration of the kettu. There are over 400 Theyyam forms, each with its own myth and choreography.",
    bestPlaces: ["Kannur", "Kasaragod", "Parassinikkadavu"],
    history:
      "Theyyam pre-dates Brahminical Hinduism in Kerala — it is a tribal and lower-caste ritual form that has continued unbroken since at least the 5th century CE, possibly much earlier. The performer is typically from the Vannan, Malayan or Velan communities (Dalit by the caste hierarchy), but in the moment of Theyyam he becomes the deity and even Brahmins prostrate before him. Many Theyyam stories — Muthappan, Kathivanur Veeran, Pottan Theyyam — are myths of resistance and social justice; Pottan Theyyam in particular sings a Dalit's confrontation with Shankaracharya. The 400+ forms developed gradually as each kavu (sacred grove) added its local deity to the canon.",
    rituals: [
      "Theyyam is performed only at family-owned kavus (sacred groves) and tharavadu (ancestral house) shrines.",
      "The Mukha Ezhuthu — facial painting in red, yellow, white and black with rice paste and herbal pigments — takes 4-6 hours.",
      "The chenda drum ensemble (3-5 drummers) leads the kettu. The performer enters the deity's mythic narrative.",
      "At the moment of possession, the performer accepts offerings, gives blessings and oracular utterances directly to devotees.",
      "Each Theyyam season at a particular kavu opens with the Thottam Pattu (invocation song) and ends with the deity's departure.",
    ],
    foods: [
      "Kallu (toddy) — fresh palm wine, traditionally consumed by both performers and audience.",
      "Karimeen pollichathu — Kannur-style pearl-spot fish wrapped in banana leaf.",
      "Beef curry with Kerala parotta — Kannur is famous for this.",
      "Kappa puzhukku — boiled tapioca with grated coconut.",
      "Sulaimani chai — black lemon tea, the staple between performances.",
    ],
    whatToExpect:
      "Northern Kerala (Kannur and Kasaragod) is the only place to see Theyyam. Performances usually run all night from 9 p.m. to dawn. Parassinikkadavu Muthappan kavu has daily morning Theyyam (5-8 a.m.) all year, easiest for visitors. For deeper viewing, book through a Kannur-based homestay that can take you to family kavus during the season. Bring a cotton sheet to sit on; performances are outdoors. Photography permitted with quiet respect.",
  },
  // Kerala — Events
  {
    slug: "cochin-carnival-2026",
    kind: "event",
    name: "Cochin Carnival",
    dateLabel: "25–31 Dec",
    startDate: "2026-12-25",
    endDate: "2026-12-31",
    months: ["December"],
    states: ["kerala"],
    interests: ["Cultural & Folk", "Food & Cuisine"],
    image: IMG.cultural,
    shortBlurb: "Fort Kochi’s week-long Portuguese-era street party.",
    description:
      "The seven nights leading to New Year fill Fort Kochi’s streets with art shows, bicycle and beach races, fashion parades, fancy-dress contests and an enormous papier-mâché Papanju (Santa) burned at midnight on the 31st.",
    significance:
      "Begun in the 1980s, the carnival keeps alive Fort Kochi’s blend of Portuguese, Dutch, Jewish and Malayali cultural memory.",
    bestPlaces: ["Fort Kochi"],
    history:
      "Cochin Carnival evolved from a Portuguese New Year tradition that the colonial community held in Fort Kochi from the mid-16th century. The 'Papanju' (Old Year) figure burned on December 31 is a direct descendant of the European carnival tradition — its name comes from the Portuguese 'papagaio' (puppet). After Independence the festival lapsed; it was revived in 1984 by Fort Kochi residents as a community celebration of the area's syncretic heritage — Portuguese cathedrals, Dutch palaces, the Paradesi Jewish synagogue and Malayali traditions all coexist within a few blocks.",
    rituals: [
      "Day 1 (25 December): inaugural procession from St. Francis Church through Princess Street with brass bands.",
      "Multiple days: street food stalls, fancy-dress contests, beach volleyball, cycle races, fashion shows.",
      "Khaadi Mela: a separate fair of Kerala handlooms and traditional crafts at Vasco da Gama Square.",
      "31 December evening: the giant Papanju (often 30-feet tall) is paraded down the streets.",
      "Midnight 31 December: the Papanju is burned on Fort Kochi beach, signalling the new year.",
    ],
    foods: [
      "Karimeen pollichathu — pearl-spot fish in banana leaf, the Kochi signature.",
      "Beef ularthiyathu — stir-fried spiced beef, Syrian Christian style.",
      "Appam with vegetable stew — traditional Kerala Christian dish.",
      "Banana leaf fish biryani — at the Mattanchery stalls.",
      "Plum cake — Kerala Christmas tradition, served warm with brandy butter.",
    ],
    whatToExpect:
      "Fort Kochi in carnival week is wonderfully chaotic — colourful, multilingual, kid-friendly. Stay in a heritage homestay in the Princess Street area; the events are within walking distance. December 31 evening is the peak; arrive at the beach by 9 p.m. for a Papanju spot. Combine with a heritage walk of Fort Kochi (St. Francis Church, Mattanchery Palace, Jewish Synagogue, Chinese fishing nets).",
  },
  {
    slug: "iffk-2026",
    kind: "event",
    name: "International Film Festival of Kerala",
    dateLabel: "5–12 Dec",
    startDate: "2026-12-05",
    endDate: "2026-12-12",
    months: ["December"],
    states: ["kerala"],
    interests: ["Cultural & Folk"],
    image: IMG.cultural,
    shortBlurb: "200+ films across eight days in Trivandrum.",
    description:
      "Kerala’s state-run film festival screens over two hundred Indian and world films across fourteen venues in Thiruvananthapuram. A retrospective is curated each year for a major auteur.",
    significance:
      "One of the largest competitive international film festivals in India and a major event for South Asian independent cinema.",
    bestPlaces: ["Thiruvananthapuram (multiple cinemas)"],
    history:
      "IFFK was founded in 1996 by the Kerala State Chalachitra Academy and the Cultural Affairs Department. It rotated between Trivandrum, Calicut and Thrissur in early years before settling in Thiruvananthapuram in 2002. IFFK has FIAPF (International Federation of Film Producers Associations) accreditation, putting it in the same competitive category as the Mumbai Film Festival, Karlovy Vary or Goa's IFFI. Kerala's strong tradition of co-operative cinema clubs (over 200 across the state) creates a uniquely informed audience that has helped IFFK become a major Asian competitive festival.",
    rituals: [
      "Delegate passes are sold in three categories — full, weekend, single day; advance booking opens in October.",
      "Each morning begins at 9 a.m. with five parallel screenings across cinemas.",
      "Open Forum (5 p.m. daily): live panel discussions with directors, critics and the audience.",
      "Mid-Festival Awards Night (day 4): the Audience Choice Award is presented.",
      "Closing ceremony (day 8): the Suvarna Chakoram (Golden Crow Pheasant) for Best Film is awarded; carries a Rs 16 lakh prize.",
    ],
    foods: [
      "Thattukada meals — Trivandrum's street-food carts at Statue, Vellayambalam and Sasthamangalam are open late.",
      "Karikkulang dosa — beef-stuffed dosa, a Trivandrum specialty.",
      "Sulaimani chai — black lemon tea, the festival's standard between-screening drink.",
      "Pazham pori — banana fritters, perfect for the queues.",
      "Kerala-style biryani — at the small Hindu Hotel near the Tagore Theatre.",
    ],
    whatToExpect:
      "Trivandrum in December is pleasantly cool. Pick up the daily IFFK Bulletin (printed each morning) to plan your day. Tagore Theatre and Kairali are the main venues; Nila and Sree are nearby. Most films are subtitled in English. Plan for 4-5 films a day with breaks. Many international guests are accessible at the Press Club bar after evening screenings.",
  },

  // ============================================================
  // KARNATAKA — Festivals
  // ============================================================
  {
    slug: "pattadakal-dance-2026",
    kind: "event",
    name: "Pattadakal Dance Festival",
    dateLabel: "22–26 Jan",
    startDate: "2026-01-22",
    endDate: "2026-01-26",
    months: ["January"],
    states: ["karnataka"],
    interests: ["Music & Dance", "Heritage & Historical"],
    image: IMG.karnataka,
    shortBlurb: "Classical dance amid Chalukya temples.",
    description:
      "For five evenings each January, Bharatanatyam, Kuchipudi, Kathak, Odissi and Kathakali performances are staged at the UNESCO-listed Chalukya temple complex of Pattadakal in northern Karnataka.",
    significance:
      "Curated to keep the carved dance postures on the Virupaksha temple walls alive as living performance. Many of those exact poses are still in the Bharatanatyam repertoire.",
    bestPlaces: ["Pattadakal, Bagalkot district"],
    history:
      "The Pattadakal temple complex was built between the 7th and 9th centuries by the Chalukya kings, who used the site for coronation ceremonies (Pattadakal literally means 'coronation stone'). Its ten major temples uniquely combine North Indian Nagara and South Indian Dravida architectural styles. UNESCO inscribed Pattadakal as a World Heritage site in 1987. The dance festival was instituted in 1992 by the Karnataka Department of Tourism specifically to revive the link between the temple carvings and the living classical dance tradition.",
    rituals: [
      "Performances begin at sunset (around 6:30 p.m.) on a stage built directly facing the Virupaksha temple's eastern gopuram.",
      "Each evening showcases a different classical form — Bharatanatyam, Kuchipudi, Odissi, Kathak, Mohiniyattam.",
      "Local Bagalkot folk dances (Dollu Kunitha, Pata Kunitha) open each night's programme.",
      "The audience sits on cane mats on the temple ground; the floodlit Chalukya stone glows behind the dancers.",
      "Free entry; advance pass-collection at the Karnataka Tourism office recommended for weekends.",
    ],
    foods: [
      "Jolada rotti with yennegai — sorghum flatbread with stuffed brinjal curry, the regional staple.",
      "Holige (puran poli) — sweet jaggery-and-dal stuffed flatbread.",
      "Bisi bele bath — spiced rice-and-lentil dish, Karnataka comfort food.",
      "Filter coffee — at the small Tourism Department canteen.",
      "Bagalkot khara biscuit — a savoury baked snack particular to north Karnataka.",
    ],
    whatToExpect:
      "Pattadakal is in dry, hot north Karnataka — January evenings are cool, days are warm. Stay in Badami (22 km away) for hotels; Pattadakal village has no accommodation. Combine the festival with daytime visits to Pattadakal, Badami caves and Aihole. Carry a light shawl and a mat for the open-air seating.",
  },
  {
    slug: "banashankari-jatre-2026",
    kind: "festival",
    name: "Banashankari Jatre",
    dateLabel: "24 Jan – 23 Feb",
    startDate: "2026-01-24",
    endDate: "2026-02-23",
    months: ["January", "February"],
    states: ["karnataka"],
    interests: ["Religious & Spiritual", "Cultural & Folk", "Food & Cuisine"],
    image: IMG.karnataka,
    shortBlurb: "A month-long rural fair at Badami’s lion goddess.",
    description:
      "A month-long fair around the Banashankari temple near Badami, with rathotsava (chariot procession), folk wrestling, rural sports and an enormous open-air market of farm tools, copper vessels and woven blankets.",
    significance:
      "Honours Banashankari Devi, the family goddess of the Chalukyas. The fair traces back at least eight hundred years.",
    bestPlaces: ["Banashankari (5 km from Badami)"],
    history:
      "The Banashankari temple was built around the 7th century by the Chalukya king Jagadekamalla as a kuldevi (family deity) shrine. Banashankari Devi (also called Shakambari) is a Shakti form associated with vegetation and crop abundance — the name 'Banashankari' means 'Shankari (Shiva's consort) of the forest'. The Jatre format — a month-long fair around the temple's birth date — was institutionalised by the Vijayanagara kings in the 15th century when Bagalkot was a major trade node. The fair still draws traders from Maharashtra, Goa and Andhra.",
    rituals: [
      "Goddess Banashankari is taken in a wooden rathotsava (chariot procession) on the full-moon day; thousands pull the chariot ropes.",
      "Dollu Kunitha drummers from Bagalkot villages perform continuously through the fair days.",
      "Mallakhamb (Indian pole gymnastics) and traditional wrestling tournaments are held in the fair grounds.",
      "Devotees offer Bilva leaves at sunrise and break a coconut on the temple's stone threshold.",
      "Newly-married couples come to seek the goddess's blessing for fertility, leaving small cloth bundles on a sacred tree.",
    ],
    foods: [
      "Jolada rotti — sorghum-flour flatbread, the staple of north Karnataka.",
      "Yennegai — small stuffed brinjals in a peanut-coconut gravy.",
      "Holige — sweet stuffed flatbread with jaggery and dal.",
      "Mirchi bhajji — green chillies battered and deep-fried, a fairground staple.",
      "Local kallappam — a millet pancake unique to the Bagalkot region.",
    ],
    whatToExpect:
      "The fair sprawls over 2-3 kilometres of dusty ground around the temple. Visit on a weekday for fewer crowds; weekends draw over 100,000 people. The chariot procession (mid-fair) is the must-see moment. Stay in Badami town (Hotel Mookambika or Krishna Heritage); the temple is a 15-minute drive. Combine with Aihole and Pattadakal for a 3-day Chalukya circuit.",
  },
  {
    slug: "gokarna-shivaratri-2026",
    kind: "festival",
    name: "Gokarna Shivaratri",
    dateLabel: "15 Feb",
    startDate: "2026-02-15",
    endDate: "2026-02-15",
    months: ["February"],
    states: ["karnataka"],
    interests: ["Religious & Spiritual"],
    image: IMG.templeAlt2,
    shortBlurb: "Coastal Shiva on the night of nights.",
    description:
      "Devotees fast all day and stay awake all night through four prahara abhishekams of the Mahabaleshwara Atmalinga at Gokarna. A massive wooden chariot is pulled through the temple street on the following morning.",
    significance:
      "Gokarna is considered the place where the Atmalinga of Shiva — handed to Ravana — was first set on earth. Worship here is held to equal Kashi.",
    bestPlaces: ["Gokarna Mahabaleshwara Temple"],
    history:
      "Gokarna's foundation legend appears in the Skanda Purana and Shiva Purana: Ravana obtained the Atmalinga from Shiva on the condition he not set it down; Ganesha, disguised as a Brahmin boy, tricked him into placing it at Gokarna, where it became immovably rooted. The temple itself is mentioned in the Mahabharata's Vana Parva. The current structure was rebuilt in the 4th-century Kadamba period and renovated under Vijayanagara patronage. Gokarna is one of seven 'Mukti Sthalas' of Parashurama Kshetra (his seven sacred Karnataka coastal sites) and counts among the holiest Shiva shrines outside the twelve Jyotirlingas.",
    rituals: [
      "Devotees take a snanam (sacred bath) at the Koti Tirtha tank and the Gokarna beach before darshan.",
      "Shradh (ancestral rites) is performed on the beach by male family members.",
      "Through Shivaratri night, four prahara abhishekams are performed on the Atmalinga.",
      "Bilva leaves and milk are offered continuously; the temple stays open all night.",
      "On the morning after, a giant wooden ratha is pulled through Gokarna's main street.",
    ],
    foods: [
      "Patrode — colocasia-leaf rolls with rice and lentil paste, steamed and sliced; a Gokarna specialty.",
      "Mangaluru-style fish curry with rice — available at the beachfront cafes.",
      "Kotte kadubu — jackfruit-leaf-wrapped rice idlis.",
      "Goli baje — soft buttermilk fritters, the local breakfast snack.",
      "Filter coffee with mosaru (curd) and choka (rice gruel) — pilgrims' fast-breaking meal.",
    ],
    whatToExpect:
      "Gokarna combines temple-town intensity with backpacker beach culture. The temple is in the old village; Om Beach and Kudle Beach are 4 km away. On Shivaratri night, the temple draws over 100,000 devotees; arrive by mid-afternoon. Combine with Murudeshwara temple (2 hours south) and Yana caves (1 hour inland). Dress code is strict — men remove shirts; women wear traditional Indian dress.",
  },
  {
    slug: "vairamudi-melukote-2026",
    kind: "festival",
    name: "Vairamudi Festival (Melukote)",
    dateLabel: "24 Mar",
    startDate: "2026-03-24",
    endDate: "2026-03-24",
    months: ["March"],
    states: ["karnataka"],
    interests: ["Religious & Spiritual", "Heritage & Historical"],
    image: IMG.templeAlt2,
    shortBlurb: "A diamond-crowned Vishnu seen for one night.",
    description:
      "Once a year the Cheluvanarayana Swamy of Melukote is adorned with the Vairamudi — a diamond crown said to have been worn by Vishnu himself. The crown is brought from the state treasury under armed escort and removed the next morning.",
    significance:
      "Melukote is the seat of Ramanuja’s Sri Vaishnava lineage. The crown was a gift to the temple from a Hoysala or Vijayanagara monarch.",
    bestPlaces: ["Melukote, Mandya district"],
    history:
      "Melukote (also Tirunarayanapuram) was made a major centre of Vaishnava theology by Ramanujacharya (1017-1137 CE), who lived there for 12 years and established the temple's current ritual code. The diamond Vairamudi crown is thought to have been gifted by either the Hoysala king Vishnuvardhana (who converted from Jainism to Vaishnavism under Ramanuja's influence) or the Vijayanagara king Krishnadevaraya. The crown is kept under armed government custody at the Mandya treasury throughout the year and is escorted to Melukote only for this one ten-hour ceremony. It has been shown on Vairamudi night without interruption for nearly nine centuries.",
    rituals: [
      "The Vairamudi crown is brought from Mandya treasury under armed escort, arriving at Melukote by evening.",
      "The Cheluvanarayana utsava murti is bathed in milk, curd, ghee, honey, sandalwood and rosewater.",
      "At midnight, the temple's chief priest places the diamond crown on the deity's head; the moment is the festival's climax.",
      "Devotees view the crowned deity in procession through Melukote's streets until 4 a.m.",
      "At first light, the crown is removed, packed and returned under escort.",
    ],
    foods: [
      "Puliyodarai (tamarind rice) — the temple's signature prasadam, especially associated with Melukote.",
      "Kalyani Chitranna — Vaishnava lemon rice with yellow turmeric.",
      "Sweet pongal — jaggery-rice offered at the deity's feet.",
      "Vada-pradhaman — fried lentil cakes in sweet milk gravy.",
      "Kosambari — moong-dal salad with cucumber and mustard tempering.",
    ],
    whatToExpect:
      "Melukote is a steep hill town 50 km from Mysuru. The temple is on top of a 200-step climb. On Vairamudi night, the village fills with 200,000+ pilgrims. Plan to arrive by 6 p.m. and stay through the night; there are very few hotels — most pilgrims sleep in temple verandahs. Combine with daytime visits to the Yoga Narasimha temple atop the hill and the Akka-Tangi pond.",
  },
  {
    slug: "karaga-bengaluru-2026",
    kind: "festival",
    name: "Karaga (Bengaluru)",
    dateLabel: "1 Apr",
    startDate: "2026-04-01",
    endDate: "2026-04-01",
    months: ["April"],
    states: ["karnataka"],
    interests: ["Cultural & Folk", "Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "A man in a sari carries the goddess through old Bengaluru.",
    description:
      "On the Chitra full moon, a male priest of the Tigala community dresses as a married woman and balances a tall flower pyramid (karaga) on his head, running through the old streets of Bengaluru without ever touching the karaga with his hands.",
    significance:
      "An eight-century-old folk-Shakta procession honouring Draupadi as the embodiment of Shakti. The route includes Muslim shrines, marking Bengaluru’s syncretic past.",
    bestPlaces: ["Dharmaraya Swamy Temple, Bengaluru pete"],
    history:
      "The Karaga is the Tigala community's eight-centuries-old festival, predating Bengaluru's founding by Kempe Gowda in 1537. The Tigalas, traditionally horticulturists who migrated from Tamil Nadu during the Chola period, believe Draupadi (the Mahabharata heroine) appeared in human form to lead them through wilderness with a sacred pot balanced on her head. The Dharmaraya Swamy temple in old Bengaluru pete is the only Pandava temple in Karnataka. Uniquely, the procession's medieval route passes through the Hazrat Tawakkal Mastan Sufi dargah — the karaga-bearer offers prayers there before continuing, a remarkable example of Hindu-Muslim integration that has been maintained for centuries.",
    rituals: [
      "The Karaga-bearer is a celibate male priest of the Tigala community who undergoes 11 days of strict vratham before the festival.",
      "On the night of Chitra full moon, he dresses in a yellow sari, full bridal jewellery and bangles.",
      "A 3-foot pyramidal floral structure (the Karaga) is balanced on his head; he never touches it with his hands through the night.",
      "Veerakumaras — bare-chested swordsmen with sacred turmeric paint — escort him through the streets at running pace.",
      "The procession stops at the Tawakkal Mastan dargah for the bearer to pray; this stop has been observed since the 18th century.",
    ],
    foods: [
      "Mosaru annam (curd rice) — the standard prasadam at the temple.",
      "Jolada rotti and yennegai — north Karnataka staple, served at Tigala community kitchens.",
      "Mandige — fine layered Bengaluru sweet, distributed during the procession.",
      "Filter coffee and Mysore pak — from the Vidyarthi Bhavan-style restaurants in Pete.",
    ],
    whatToExpect:
      "Old Bengaluru (KR Market / Pete) transforms during the night. The procession starts around 11 p.m. from the Dharmaraya Swamy temple and runs through the narrow lanes until 4 a.m. The pace is brisk — the bearer essentially jogs, which is part of the spectacle. Stand near Akkipete and Avenue Road for the best views. Photography is permitted but no flash. Streets are crowded; pickpockets operate, so be careful with valuables.",
  },
  {
    slug: "tula-sankramana-2026",
    kind: "festival",
    name: "Tula Sankramana (Talakaveri)",
    dateLabel: "17 Oct",
    startDate: "2026-10-17",
    endDate: "2026-10-17",
    months: ["October"],
    states: ["karnataka"],
    interests: ["Religious & Spiritual", "Wildlife & Nature"],
    image: IMG.karnataka,
    shortBlurb: "The Kaveri rises from her hill at a fixed minute.",
    description:
      "At a precise minute on Tula Sankramana, water gushes from a stone spout in the Talakaveri kund — the source of the river Kaveri in Coorg. Tens of thousands of pilgrims wait there from the previous evening to witness it.",
    significance:
      "The annual self-manifestation of Goddess Kaveri. A bath in the kund at the moment of the theerthodbhava is considered to remove all sin.",
    bestPlaces: ["Talakaveri, Brahmagiri hills, Coorg"],
    history:
      "Talakaveri (literally 'head of the Kaveri') is the source spring of the Kaveri river, set in a granite kund at 1,276 m in the Brahmagiri hills of Coorg. The Skanda Purana's Kaveri Mahatmyam describes the river as the embodiment of Lopamudra, wife of the sage Agastya, who released her from his kamandalu (water pot) at this spot. The Tula Sankramana — sun's entry into Libra — is the moment Goddess Kaveri is said to descend annually. The theerthodbhava (the water gushing from the spout) is precisely timed by the temple priest using the panchang, usually within a 10-minute window. The Kodava community considers Kaveri their mother goddess and Tula Sankramana their most important annual rite.",
    rituals: [
      "Pilgrims begin arriving the previous evening; many sleep in the temple compound to be present at the theerthodbhava moment.",
      "Kodava families wear traditional kupiya (black coat) and head wrap; women wear sarees in the back-pleated 'Kodavathi' style.",
      "When the spring water gushes, it is collected in clean copper vessels — every Kodava household keeps Kaveri water for the year.",
      "Devotees take a bath in the Kaveri downstream at Bhagamandala (the sangam of three rivers).",
      "Newly-harvested rice is cooked and offered to Kaveri before the family eats it.",
    ],
    foods: [
      "Kodava pandi curry — pork cooked in dark kachampuli (Garcinia) and pepper, the community's signature dish.",
      "Akki roti — rice-flour flatbread, the Kodava staple.",
      "Bemble curry — bamboo shoot curry, available only in monsoon and early autumn.",
      "Coorg coffee — locally grown, served strong with jaggery.",
      "Erachi pidi — small steamed rice dumplings served with meat curry.",
    ],
    whatToExpect:
      "Talakaveri is reached by a winding 50 km drive from Madikeri. The October moment of the spring gush draws 80,000+ pilgrims; the kund is a small enclosed tank that fills in minutes. Stay in Madikeri or Bhagamandala the previous evening. Kodava homestays welcome guests for the festival meal. The Brahmagiri hilltop view at sunrise is among the most beautiful in South India.",
  },
  {
    slug: "mysuru-dasara-2026",
    kind: "festival",
    name: "Mysuru Dasara",
    dateLabel: "11–20 Oct",
    startDate: "2026-10-11",
    endDate: "2026-10-20",
    months: ["October"],
    states: ["karnataka"],
    interests: ["Cultural & Folk", "Heritage & Historical", "Music & Dance"],
    image: IMG.karnataka,
    shortBlurb: "The Wodeyars’ ten-day royal pageant.",
    description:
      "Mysuru Palace is lit each evening with 100,000 bulbs. The state-organised Jamboo Savari procession on Vijayadashami carries Chamundeshwari Devi on the royal elephant from the palace to Bannimantap, accompanied by horses, camels and folk troupes from across Karnataka.",
    significance:
      "Karnataka’s state festival. Commemorates the goddess Chamundi’s victory over the demon Mahishasura — and the Wodeyar dynasty’s patronage of the rite since the 1610s.",
    bestPlaces: ["Mysuru Palace", "Chamundi Hills", "Bannimantap parade ground"],
    history:
      "Mysuru Dasara as a state-patronised festival was begun in 1610 by Raja Wodeyar I of the Wodeyar dynasty, modelled on the Vijayanagara empire's Mahanavami Dibba festival that the Portuguese traveller Domingo Paes had witnessed in 1520. After the fall of Vijayanagara, the Wodeyars carried forward the tradition as the legitimising royal ritual. The current 416-year unbroken run includes the years of Tipu Sultan (1782-1799, who suspended it) and his fall (1799, when the Wodeyars revived it under British protection). The 1947 Independence transferred patronage from the Maharaja to the Karnataka state government, but the Wodeyar family still conducts the inner-palace rituals.",
    rituals: [
      "Day 1: the royal sword (Patta Khadga) is brought from the temple to the palace for the 9-day worship.",
      "Days 1-9 (Navaratri): the inner palace conducts the Khasagi Durbar with the Wodeyar Maharaja seated on the throne.",
      "Each evening the Mysuru Palace is illuminated with 97,000 incandescent bulbs (a tradition since 1900).",
      "Vijayadashami (Day 10): the Jamboo Savari — Goddess Chamundeshwari is taken in a 750 kg golden howdah atop the lead elephant from the palace to Bannimantap, a 5 km procession with 30+ caparisoned elephants, camels, horses and folk troupes.",
      "After the procession, a torchlight parade (panjina kavayatu) at Bannimantap concludes with a banni tree worship.",
    ],
    foods: [
      "Mysore Pak — Mysuru's signature ghee-and-gram-flour fudge, originally created in the palace kitchen.",
      "Mysore Masala Dosa — crispy dosa with red chutney and potato masala, the city's gift to global breakfast.",
      "Bisi bele bath — spiced rice-lentil porridge.",
      "Ragi mudde with bassaru — finger-millet balls with greens-and-lentil broth, the Mysuru rural staple.",
      "Maddur Vada — savoury fried snack from the town of Maddur between Bengaluru and Mysuru.",
    ],
    whatToExpect:
      "Mysuru fills with 500,000+ visitors over Dasara. Book hotels at least 4 months in advance. Buy paid grandstand tickets for the Jamboo Savari (issued by the Karnataka Tourism Department) for a clear procession view; otherwise stake out a spot on the route by 9 a.m. The palace illumination begins at 7 p.m. each evening — best viewed from the main gate or Doddakere Maidan. Combine with the Chamundi Hills temple (climb the 1,008 steps for the views) and the Brindavan Gardens light show.",
  },
  {
    slug: "lakshadeepotsava-2026",
    kind: "festival",
    name: "Lakshadeepotsava (Dharmasthala)",
    dateLabel: "21–22 Nov",
    startDate: "2026-11-21",
    endDate: "2026-11-22",
    months: ["November"],
    states: ["karnataka"],
    interests: ["Religious & Spiritual"],
    image: IMG.diyas,
    shortBlurb: "A hundred thousand lamps before Manjunatha.",
    description:
      "The Dharmasthala Manjunatheshwara temple is lit on the night of Karthika Pournami with a hundred thousand oil lamps. The grounds also host a free Sarva Dharma Sammelana — a public conference of religious leaders from every faith.",
    significance:
      "The temple has been administered for nearly eight hundred years by the Heggade family, who are themselves Jains serving a Shaivite shrine — a unique inter-religious tradition.",
    bestPlaces: ["Dharmasthala, Dakshina Kannada"],
    history:
      "Dharmasthala's foundation legend (around 1240 CE) tells of Birmanna Pergade, a Jain landowner who hosted four travellers later revealed to be the four Dharma Daivas (guardians of dharma). They instructed him to dedicate his house to dharma — Manjunatha (Shiva) was installed by the great Vaishnava theologian Madhvacharya in the 16th century. The Heggade family, in unbroken Jain lineage, has administered the temple for 21 generations. The current Dharmadhikari, Veerendra Heggade, has held the post since 1968. Lakshadeepotsava (literally 'festival of a hundred thousand lamps') is the temple's annual high point on Karthika Pournami.",
    rituals: [
      "Five days before the festival, the temple is decorated with 100,000 oil-lamps mounted on intricate scaffolds.",
      "The Sarva Dharma Sammelana — a three-day open-air conference of religious leaders from Hinduism, Jainism, Islam, Christianity, Sikhism and Buddhism.",
      "On Karthika Pournami evening, all 100,000 lamps are lit simultaneously at sunset; the temple courtyard glows golden.",
      "A massive annadanam (free meal) is served continuously for the three festival days — over 100,000 people are fed.",
      "Devotees walk the 1.5 km from the bus stand to the temple as a vow.",
    ],
    foods: [
      "Annapurna meal — the temple's signature free meal of rice, sambhar, two vegetables, rasam, curd and payasam.",
      "Neer dosa — soft thin rice-flour pancake, the Dakshina Kannada specialty.",
      "Kotte kadubu — jackfruit-leaf-wrapped idlis.",
      "Bisi bele bath — the standard mid-day meal item.",
      "Halubai — sweet jaggery-coconut milk drink.",
    ],
    whatToExpect:
      "Dharmasthala is in the foothills of the Western Ghats, 75 km from Mangaluru. The festival draws over 500,000 devotees over three days. The temple operates remarkably efficient queue and accommodation systems — over 70,000 pilgrims can be housed in its 13 dharmashalas free of charge. Modest dress required; men in dhoti without shirt. Lakshadeepotsava evening (around 6 p.m.) is the moment to be there. Combine with Kukke Subramanya (60 km).",
  },
  {
    slug: "hampi-utsav-2026",
    kind: "event",
    name: "Hampi Utsav",
    dateLabel: "2–4 Nov",
    startDate: "2026-11-02",
    endDate: "2026-11-04",
    months: ["November"],
    states: ["karnataka"],
    interests: ["Heritage & Historical", "Music & Dance", "Cultural & Folk"],
    image: IMG.karnataka,
    shortBlurb: "Vijayanagara ruins lit for three nights of music.",
    description:
      "The Karnataka government has run this three-day festival since the 1980s. Stages are erected at Hazara Rama, Virupaksha and the Vitthala temple, with Karnataka’s leading musicians, dancers and folk troupes performing through the night.",
    significance:
      "Recreates the Mahanavami court festivities once held at Hampi by the Vijayanagara kings — the original of which Domingo Paes recorded in 1520.",
    bestPlaces: ["Hampi (UNESCO World Heritage Site)"],
    history:
      "Hampi was the capital of the Vijayanagara empire (1336-1646), at its peak the largest medieval city in the world with 500,000 residents. The Portuguese traveller Domingo Paes (1520) and Persian envoy Abdur Razzak (1443) both described the Mahanavami Dussehra festivities held on the Mahanavami Dibba platform with court ceremonies, music, dance and wrestling tournaments. After the empire fell to the Deccan sultanates in 1565, Hampi was abandoned. UNESCO inscribed Hampi as World Heritage in 1986. The Karnataka government started Hampi Utsav in 1985 explicitly to recreate the Vijayanagara cultural festival.",
    rituals: [
      "Performances on day 1: Karnataka folk forms — Yakshagana, Dollu Kunitha, Veeragase.",
      "Day 2: classical Indian dance and music; the main stage faces the Hazara Rama temple's carved walls.",
      "Day 3: a chariot procession recreates the Mahanavami royal procession through the Vijayanagara royal centre.",
      "Daily food and craft stalls of Hampi's bordering villages — Kamalapur, Hospet, Anegundi.",
      "The Vitthala temple's stone chariot is illuminated each evening as the festival's iconic backdrop.",
    ],
    foods: [
      "Jolada rotti yennegai — sorghum flatbread with stuffed brinjal, the north Karnataka staple.",
      "Holige (puran poli) — sweet stuffed flatbread.",
      "Bisi bele bath — spiced rice-and-lentil dish.",
      "Kunda — Belgaum-style condensed milk sweet, sold by vendors.",
      "Mango milkshake — the local hot-weather drink.",
    ],
    whatToExpect:
      "Hampi is hot (35°C+) even in November; carry hats and water. The ruins extend over 40 sq km — hire a bicycle or auto for full coverage. Stay in Hampi Bazaar (across the river by coracle boat) for a backpacker atmosphere, or in Hospet town for proper hotels. The Vitthala temple stone chariot and the underground Shiva temple are the must-see sites. Festival programmes typically run 6-10 p.m.; arrive an hour early for good seats.",
  },
  {
    slug: "kambala-2026",
    kind: "event",
    name: "Kambala Buffalo Race Season",
    dateLabel: "Nov – Mar",
    startDate: "2026-11-15",
    endDate: "2027-03-15",
    months: ["November", "December", "January", "February", "March"],
    states: ["karnataka"],
    interests: ["Cultural & Folk"],
    image: IMG.karnataka,
    shortBlurb: "Coastal buffalo races through flooded paddy.",
    description:
      "Pairs of buffaloes yoked to a single rider race down 130-metre slush tracks in coastal Karnataka. Each Saturday from November to March a different village hosts. Speed records now match those of horse races.",
    significance:
      "A four-hundred-year-old rural tradition tied to the Tulu agricultural calendar. The sport was banned briefly and restored by a 2017 state law.",
    bestPlaces: ["Mangaluru", "Moodabidri", "Puttur (Dakshina Kannada)"],
    history:
      "Kambala is a traditional sport of the Tulu Nadu region (coastal Karnataka) dating to at least the 16th century, when buffalo races were held in flooded paddy fields after harvest as a ritual thanksgiving to Kadri Manjunatheshwara. The races were originally a way to test the strength and speed of working buffalo before the next planting. The Supreme Court banned Kambala in 2014 under animal welfare laws; the Karnataka Animal Performances and Welfare Act of 2017 (passed unanimously) re-legalised it, recognising it as protected cultural heritage. In 2022, runner Srinivasa Gowda recorded 9.55 seconds for a 100-metre Kambala sprint — faster than Usain Bolt's split times.",
    rituals: [
      "Tracks are flooded paddy fields ~130-145 metres long and 8-10 metres wide.",
      "Two buffaloes are yoked together with a wooden plank; a runner stands on the plank gripping the buffaloes' tails.",
      "Categories include Negilu (yoke only), Hagga (rope), Adda Halage (cross-board) and Kane Halage (water-splash board).",
      "Buffaloes are decorated with brass bells, painted with vegetable dye and adorned with marigold garlands.",
      "Each Saturday between November and March a different village hosts; the season culminates in the Mangaluru championship.",
    ],
    foods: [
      "Neer dosa with chicken sukka — soft rice pancake with dry-spiced chicken.",
      "Kori roti — crisp red-rice wafers in spicy chicken curry.",
      "Patrode — colocasia leaf rolls with rice paste, steamed.",
      "Fish curry with kushka rice — Bunt-community staple.",
      "Goli baje — soft buttermilk fritters with chutney.",
    ],
    whatToExpect:
      "Kambala is a unique window into Tulu coastal culture. Each match takes about 30 seconds; the spectacle is the runner-buffalo coordination through mud. Saturday races run 7 a.m. to 5 p.m. Mangaluru hosts the largest events; smaller village kambalas can be visited via a Tulu-speaking guide. Wear boots — the paddy field perimeters are muddy. Animal-welfare protocols are now strictly enforced; injured or distressed buffaloes are immediately retired.",
  },
  {
    slug: "karavali-utsav-2026",
    kind: "event",
    name: "Karavali Utsav",
    dateLabel: "26–30 Dec",
    startDate: "2026-12-26",
    endDate: "2026-12-30",
    months: ["December"],
    states: ["karnataka"],
    interests: ["Cultural & Folk", "Food & Cuisine", "Music & Dance"],
    image: IMG.karnataka,
    shortBlurb: "Mangaluru’s five-night coastal showcase.",
    description:
      "A five-night fair at the Nehru Maidan in Mangaluru with Yakshagana performances every night, Tulu folk theatre, Konkani music, a vast food court and a coastal handicrafts bazaar.",
    significance:
      "Curated to bring the coastal Tulu, Konkani and Beary communities under one civic stage.",
    bestPlaces: ["Mangaluru Nehru Maidan"],
    history:
      "Karavali Utsav was instituted in 1991 by the Karnataka Department of Tourism in collaboration with the Tulu, Konkani and Beary cultural associations of Mangaluru. The coastal Karavali region (Dakshina Kannada and Udupi districts) is unique for housing five distinct linguistic-cultural groups — Tulu, Konkani, Beary, Kundagannada and Havyaka — within 200 km of coastline. The festival is held immediately after Christmas because Mangaluru's large Catholic Konkani community is then in celebratory mode and contributes much of the music and food.",
    rituals: [
      "Day 1: Yakshagana all-night performance — the traditional Karavali theatre form with elaborate face paint and large headdresses.",
      "Day 2: Konkani choir competitions and a Beary-language poetry recital.",
      "Day 3: A food court of 60+ stalls showcasing every coastal cuisine — Bunt, Konkani Catholic, GSB Brahmin, Mogaveera, Beary.",
      "Day 4: Aati Kalenja (rain-rite dance), Kolata (stick dance), Sumangali Nritya — folk forms across all four nights.",
      "Day 5: closing concert featuring a Mangaluru-origin playback singer.",
    ],
    foods: [
      "Mangaluru biryani — Beary-style with extra coconut and fennel.",
      "Neer dosa with kori sukka — soft pancake and dry chicken.",
      "Patrode — colocasia leaf rolls.",
      "Goli baje and bonda — fried savouries with chutney.",
      "Kothambari mande — Beary sweet of rice flour, coconut and jaggery, served as paan-wrap.",
    ],
    whatToExpect:
      "Mangaluru in late December is pleasantly cool (22-28°C). The Nehru Maidan is centrally located, walking distance from Hampankatta. Stay in MG Road or Bunder area hotels. Free entry; programmes typically 5-10 p.m. Combine with day trips to Udupi Krishna temple, Mangaluru beaches and St. Aloysius Chapel.",
  },
  {
    slug: "kannada-rajyotsava-2026",
    kind: "event",
    name: "Kannada Rajyotsava",
    dateLabel: "1 Nov",
    startDate: "2026-11-01",
    endDate: "2026-11-01",
    months: ["November"],
    states: ["karnataka"],
    interests: ["National & Civic", "Cultural & Folk"],
    image: IMG.karnataka,
    shortBlurb: "Karnataka’s formation day in red and yellow.",
    description:
      "Public buildings across the state hoist the red-and-yellow Karnataka flag and the state song Jaya Bharata Jananiya Tanujate is sung. Bengaluru holds a parade at Vidhana Soudha and an evening cultural programme at Kanteerava Stadium.",
    significance:
      "Marks the unification of all Kannada-speaking regions on 1 November 1956 as the state of Karnataka.",
    bestPlaces: ["Bengaluru", "Hubballi-Dharwad", "Mysuru"],
    history:
      "On 1 November 1956, the States Reorganisation Act merged the Kannada-speaking areas of Mysuru, Madras Presidency (Dakshina Kannada), Bombay Presidency (Belagavi, Dharwad) and Hyderabad State (Bidar, Gulbarga, Raichur) into a single state initially named Mysore. The state was renamed Karnataka on 1 November 1973 under the chief ministership of Devaraj Urs. The state flag — yellow on top, red below — was first hoisted by Hubballi-based Kannada activist Ma Ramamurthy in 1965. Kannada writer Kuvempu's poem 'Jaya Bharata Jananiya Tanujate' was adopted as the state anthem in 2004.",
    rituals: [
      "The red-and-yellow Karnataka flag is hoisted at government buildings, schools and public squares at 7 a.m.",
      "The state song 'Jaya Bharata Jananiya Tanujate' is sung in chorus.",
      "Bengaluru holds a formal parade at Vidhana Soudha with the Chief Minister attending; cultural troupes from across the state perform.",
      "The Rajyotsava Awards — Karnataka's second-highest civilian honour after Karnataka Ratna — are conferred on around 60 people.",
      "Cultural and sports events run through the day in every district headquarters.",
    ],
    foods: [
      "Bisi bele bath — Karnataka's iconic spiced rice-lentil dish.",
      "Ragi mudde with bassaru — finger-millet balls and lentil-greens broth, the traditional rural meal.",
      "Mysore Pak — the state's most famous sweet.",
      "Holige — sweet stuffed flatbread, particularly the Dharwad pedha variation.",
      "Mangaluru filter coffee or Coorg coffee — depending on region.",
    ],
    whatToExpect:
      "Public buildings, malls and even housing complexes in Bengaluru and other cities are draped in red and yellow. Cultural programmes are open and free; check the local newspaper for the schedule. Restaurants run Karnataka-cuisine specials. The Vidhana Soudha is beautifully lit in the evening. A perfect day to combine government-building visits with Bengaluru's Kannada cultural heritage walks.",
  },

  // ============================================================
  // ANDHRA PRADESH — Festivals
  // ============================================================
  {
    slug: "visakha-utsav-2026",
    kind: "event",
    name: "Visakha Utsav",
    dateLabel: "9–11 Jan",
    startDate: "2026-01-09",
    endDate: "2026-01-11",
    months: ["January"],
    states: ["andhra-pradesh"],
    interests: ["Cultural & Folk", "Music & Dance", "Food & Cuisine"],
    image: IMG.cultural,
    shortBlurb: "Three days on the Vizag beach.",
    description:
      "A weekend festival along Visakhapatnam’s Ramakrishna Beach with concerts, a coastal food fair, sand sculpture competitions and a heritage walk through the Dutch quarter of the city.",
    significance:
      "Began in 1996 to promote Vizag as a tourism destination. Now the largest civic festival of coastal Andhra.",
    bestPlaces: ["Visakhapatnam"],
    history:
      "Visakha Utsav was started in 1996 by the Government of Andhra Pradesh under then-CM Chandrababu Naidu as part of a wider push to position Vizag as an investment and tourism hub. The festival deliberately combines Telugu cultural showcase with Vizag's distinctive Dutch and British colonial heritage — Vizag was a Dutch trading post from 1683 and a British coaling station from 1804. INS Kursura (S-20), India's first submarine museum, opened on Ramakrishna Beach in 2002 in time for the festival's growth.",
    rituals: [
      "Opening: a beach-side cultural procession from RK Beach to Kailasagiri.",
      "Sand sculpture competition: 50 teams compete on the Ramakrishna Beach.",
      "Dance and music nights at three stages — VUDA Park, Beach Road and Kailasagiri.",
      "Heritage walks through the old Dutch quarter (Allipuram) and the British Cantonment.",
      "Closing: an air display from the Eastern Naval Command's training squadron over the harbour.",
    ],
    foods: [
      "Vizag biryani — slightly sweeter than the Hyderabadi variant, with coconut.",
      "Royyala iguru — Andhra prawn fry in tamarind and chilli.",
      "Pesarattu with upma — green-gram dosa with semolina filling, the morning staple.",
      "Bobbatlu — Andhra sweet stuffed flatbread.",
      "Sea-fresh sole and pomfret — at the beachside stalls.",
    ],
    whatToExpect:
      "Vizag in early January is pleasantly cool (18-26°C). Stay along Beach Road; events are walking distance. The submarine museum, INS Kursura, is a must-visit. Combine with day trips to Borra Caves and Araku Valley (5 hours by the picturesque Vizag-Araku train).",
  },
  {
    slug: "bhogi-2026",
    kind: "festival",
    name: "Bhogi & Sankranti",
    dateLabel: "13–15 Jan",
    startDate: "2026-01-13",
    endDate: "2026-01-15",
    months: ["January"],
    states: ["andhra-pradesh", "telangana"],
    interests: ["Harvest & Seasonal", "Cultural & Folk", "Food & Cuisine"],
    image: "https://images.unsplash.com/photo-1646812281105-6f20622792e6?w=1600&q=80&auto=format&fit=crop",
    shortBlurb: "Bonfires, rangolis and the harvest meal.",
    description:
      "Bhogi on Day One — predawn bonfires of old wood and household discards. Sankranti on Day Two — rangolis with cow dung balls (gobbemma) at every doorstep, gangireddulu cattle troupes parading the streets, and a sweet sesame pongali at noon. Kanuma on Day Three honours the cattle.",
    significance:
      "The Telugu solar new year and the most beloved festival of the Andhra-Telangana region. The kite-flying skies on Sankranti afternoon are unforgettable.",
    bestPlaces: ["Konaseema", "Rayalaseema villages", "Hyderabad"],
    history:
      "Sankranti in the Telugu states traces to Vedic Vishuva-Sankramana harvest rites — the moment of sun's apparent transition into Capricorn (Makara). The four-day format with distinct days for fire (Bhogi), sun (Sankranti), cattle (Kanuma) and family (Mukkanuma) is documented in Telugu literary works from the 12th-century Padma Purana commentary. The kite-flying tradition, particularly elaborate in Hyderabad's Old City, arrived via Persian and Mughal courts in the 16th-century Qutb Shahi period.",
    rituals: [
      "Bhogi pre-dawn: a large bonfire of old furniture and household discards is lit in front of each house.",
      "Sankranti morning: women draw elaborate muggu (rangoli) at the doorstep with rice flour, decorated with cow-dung Gobbemma balls and marigold.",
      "Gangireddulu — cattle troupes with painted bulls and tasselled horns parade the streets accompanied by dappu drum.",
      "Kanuma (Day 3): cattle are washed, decorated and worshipped — the same rite as Mattu Pongal in Tamil Nadu.",
      "Mukkanuma (Day 4): families visit each other and unmarried daughters take Sankranti gifts to their in-laws' homes.",
    ],
    foods: [
      "Ariselu — fried rice-flour and jaggery sweet, the signature Sankranti dish.",
      "Pongali — sweet rice cooked in jaggery, milk and ghee.",
      "Gare (vadai) — fried lentil rounds.",
      "Sakinalu — fried rice-flour spirals coated with sesame.",
      "Bobbatlu (puran poli) — sweet stuffed flatbread.",
    ],
    whatToExpect:
      "Konaseema (East Godavari) is the most beautiful place to be — paddy fields fresh-harvested, gangireddulu in every village, and the most elaborate muggus in Andhra. Hyderabad's Old City fills the sky with kites on Sankranti afternoon; the rooftops of Charminar area are the best vantage points. Rayalaseema villages are gentler but no less authentic. Plan a 3-4 day rural homestay rather than city hotel.",
  },
  {
    slug: "lepakshi-utsav-2026",
    kind: "event",
    name: "Lepakshi Utsav",
    dateLabel: "6–8 Feb",
    startDate: "2026-02-06",
    endDate: "2026-02-08",
    months: ["February"],
    states: ["andhra-pradesh"],
    interests: ["Heritage & Historical", "Music & Dance"],
    image: IMG.tirupati,
    shortBlurb: "A weekend in the shadow of the Veerabhadra temple.",
    description:
      "Three nights of Bharatanatyam, Kuchipudi and Yakshagana on stages erected on the rock platforms before Lepakshi’s 16th-century murals. Mornings include heritage walks through the temple’s painted ceilings.",
    significance:
      "Lepakshi is one of the last surviving Vijayanagara temple complexes with original wall paintings intact. The utsav was instituted to bring conservation funding.",
    bestPlaces: ["Lepakshi (Anantapur district)"],
    history:
      "Lepakshi's Veerabhadra Swamy temple was built in 1530 CE by Viranna and Virupanna, two brothers serving as treasurers of the Vijayanagara king Achyuta Deva Raya. Legend has it that Virupanna was accused of misappropriating royal funds; he gouged out his own eyes and threw them at the temple wall, leaving two large rust-coloured stains that remain visible today. The temple is famous for its hanging pillar (a stone column that does not touch the ground), the carved Nandi (single largest monolithic Nandi in India at 8m tall), and ceiling frescoes that are among the few surviving Vijayanagara murals. The Lepakshi Utsav was founded in 2003 to fund the murals' restoration.",
    rituals: [
      "Day 1: opening procession of village folk troupes from Hindupur railway station.",
      "Each evening: classical and folk performances on stages set on the rock platforms before the temple.",
      "Morning heritage walks led by ASI archaeologists explain the murals and architecture.",
      "Day 3: a smaller temple chariot is taken in procession around the inner sanctum.",
      "A handicrafts mela features Lepakshi sarees, Kalamkari textiles and Etikoppaka wooden toys.",
    ],
    foods: [
      "Ragi sangati with natu kodi pulusu — finger-millet balls with country-chicken curry, Rayalaseema staple.",
      "Jonna roti with karam — sorghum flatbread with chilli paste.",
      "Pesarattu — green-gram dosa.",
      "Ariselu — fried rice-flour-jaggery sweet.",
      "Boorelu — sweet stuffed dumpling with chana dal and jaggery.",
    ],
    whatToExpect:
      "Lepakshi village is small and easy to walk. The temple is the centrepiece; the festival stages are at its perimeter. Stay in Hindupur (15 km) or Anantapur (90 km). Daytime is hot in February; evenings cool nicely. Combine with a day trip to Penukonda (50 km), the Vijayanagara summer capital. Photography is restricted inside the temple murals.",
  },
  {
    slug: "konaseema-prabhalu-2026",
    kind: "festival",
    name: "Konaseema Prabhalu Theertham",
    dateLabel: "13 Feb",
    startDate: "2026-02-13",
    endDate: "2026-02-13",
    months: ["February"],
    states: ["andhra-pradesh"],
    interests: ["Cultural & Folk", "Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "Twelve-foot bamboo Shiva towers parade by torchlight.",
    description:
      "Eleven Shiva idols from neighbouring villages are placed on tall bamboo prabhalu (tower-frames) draped in coloured silks. The frames are carried — twenty men beneath each — across paddy fields to the central Mukkamala village.",
    significance:
      "The largest Shiva fair of the Godavari delta. The tradition has been documented since the 1700s and the route between villages has not changed.",
    bestPlaces: ["Mukkamala village, Konaseema"],
    history:
      "The Prabhalu Theertham is unique to the Konaseema region of East Godavari district — a low-lying delta of paddy fields and coconut palms. The tradition traces to the early 1700s when 11 surrounding villages — Mukkamala, Vakatippa, Iruvada, Pallam, Vegisettivari Palem and others — agreed to assemble their Shiva idols once a year at Mukkamala. The Mukkamala temple was patronised by the Peshwa-era Mahadeva temple builders. The 'prabhalu' (towering bamboo frameworks) symbolise the cosmic ladder by which Shiva descends to the delta lands.",
    rituals: [
      "Each village's prabhalam is constructed in October-January by the community — a 40-foot bamboo frame draped in coloured silks, mirrors, peacock feathers and bells.",
      "On Theertham night, the Shiva idol from each village is placed at the centre of the prabhalam.",
      "Twenty to thirty men carry each prabhalam on their shoulders, walking 3-15 km through paddy fields by torchlight.",
      "All eleven prabhalas converge at Mukkamala by midnight; the moment is the festival's climax.",
      "The next morning, the Mukkamala temple priest performs the patabhishekam — a sacred bath of all eleven Shivas at once.",
    ],
    foods: [
      "Pulihora (tamarind rice) — the traditional festival meal.",
      "Bobbatlu — sweet stuffed flatbread with chana dal and jaggery.",
      "Pesarattu with ginger chutney — green-gram dosa.",
      "Gongura mamsam — sorrel-leaf mutton curry, Andhra signature.",
      "Junnu — colostrum-milk pudding, a Konaseema delicacy.",
    ],
    whatToExpect:
      "Konaseema is a 5-hour drive from Vijayawada or 3 hours from Rajahmundry. Mukkamala village is small; arrange a homestay through Sanchaari for the night before. The torchlight procession through paddy fields (around 10 p.m. to midnight) is the must-see spectacle. The prabhalas are spectacular against night skies; bring a camera with low-light capability. Carry mosquito repellent — the delta has high mosquito density.",
  },
  {
    slug: "maha-shivaratri-srisailam-2026",
    kind: "festival",
    name: "Maha Shivaratri (Srisailam)",
    dateLabel: "15 Feb",
    startDate: "2026-02-15",
    endDate: "2026-02-15",
    months: ["February"],
    states: ["andhra-pradesh"],
    interests: ["Religious & Spiritual"],
    image: "https://images.unsplash.com/photo-1748944088887-dbcac01ac2eb?w=1600&q=80&auto=format&fit=crop",
    shortBlurb: "An all-night Jyotirlinga vigil in the Nallamala forest.",
    description:
      "Srisailam’s Mallikarjuna Swamy temple holds four prahara pujas through the night, with abhishekams of milk, panchamruta, sandalwood and bilva. The chariot procession the following morning passes through pine and teak forest.",
    significance:
      "Srisailam is one of the twelve Jyotirlingas and one of the eighteen Shakti Peethas — a single shrine combining both. Shivaratri here is the year’s most attended day.",
    bestPlaces: ["Srisailam Mallikarjuna Swamy Temple"],
    history:
      "Srisailam is among the very oldest continuously worshipped Shiva shrines in India — inscriptions in the temple's outer walls date to the 2nd-century Satavahana period. The temple sits on the Nallamala range in the deep forest of the Nagarjuna Sagar-Srisailam Tiger Reserve, which Adi Shankaracharya called 'Sri Bhramaramba' in his Soundarya Lahari. Of the twelve Jyotirlingas, only Srisailam houses both a Jyotirlinga (Mallikarjuna) and a Shakti Peetha (Bhramaramba) on the same hillside — making it the most powerful combined shrine according to Shaiva-Shakta theology. The temple was patronised by the Kakatiyas, Vijayanagara emperors and the Reddi kings of Kondaveedu.",
    rituals: [
      "Devotees observe a strict day-long fast (nirjala) and all-night jagaran.",
      "Four prahara pujas are performed through the night — at 9 p.m., midnight, 3 a.m. and 6 a.m. — each with a different abhishekam.",
      "Linga abhishekam progresses through milk, curd, ghee, honey, sugarcane juice, sandalwood paste and finally rosewater.",
      "On the morning after, the deity is taken out in procession on the giant wooden ratha.",
      "Pilgrims trek to the Srisaila Pradakshina — the 35 km circumambulation of the hill — over 3 days.",
    ],
    foods: [
      "Chithannam — temple-prepared mixed-rice prasadam with curry leaves and chana.",
      "Daddojanam — temple curd rice with mustard tempering.",
      "Pulihora — tamarind rice, the standard offering.",
      "Vada and payasam — fried lentil cakes with milk-rice pudding.",
      "Coconut chutney — eaten with the pilgrim breakfast.",
    ],
    whatToExpect:
      "Srisailam is a 5-hour drive from Hyderabad through dense forest. On Shivaratri the temple draws over 500,000 pilgrims; book accommodation 3 months ahead — many devotees sleep in temple verandahs. The pre-dawn pujas are the most powerful moments. Modest dress is strictly enforced: men in dhoti, women in saree. The setting is genuinely wild — leopards and tigers inhabit the surrounding reserve.",
  },
  {
    slug: "ugadi-2026",
    kind: "festival",
    name: "Ugadi",
    dateLabel: "19 Mar",
    startDate: "2026-03-19",
    endDate: "2026-03-19",
    months: ["March"],
    states: ["andhra-pradesh", "telangana", "karnataka"],
    interests: ["Cultural & Folk", "Food & Cuisine"],
    image: IMG.cultural,
    shortBlurb: "The six-taste pachadi for the new year.",
    description:
      "The Telugu and Kannada lunar new year. Families prepare the Ugadi pachadi — a mixture of jaggery, neem, raw mango, tamarind, chilli and salt — and listen to the panchanga sravanam (almanac reading) for the year ahead.",
    significance:
      "Tradition says the universe was created on this day by Brahma. The six-taste pachadi mirrors the six emotions one is to receive equanimously in the coming year.",
    bestPlaces: ["Hyderabad", "Vijayawada", "Tirupati", "Bengaluru"],
    history:
      "Ugadi (literally 'beginning of the age') marks the first day of the Telugu and Kannada lunisolar calendar (Chaitra Shukla Pratipada). The Brahmanda Purana states that Brahma created the universe on this day. The Salivahana Shaka calendar (still in use in much of South India) was instituted in 78 CE by the Satavahana king Gautamiputra Satakarni, who is also said to have started the formal Ugadi observance. The 60-year cycle of named years (Samvatsara) is read out from the Panchanga (almanac) each Ugadi.",
    rituals: [
      "Doorstep tied with mango-leaf festoons (Toranam) the previous evening; muggu drawn on the threshold.",
      "Ritual oil-bath at dawn followed by new clothes.",
      "Ugadi Pachadi prepared: six flavours mixed together — jaggery (sweet), neem flower (bitter), raw mango (sour), tamarind (astringent), chilli (pungent), salt (salty) — and eaten as the first food.",
      "Family visits the temple for the day's first darshan; Telugu Vishnu temples are particularly busy.",
      "Panchanga Sravanam: the priest reads the year's predictions — monsoon, harvest, politics, family events — from the new almanac.",
    ],
    foods: [
      "Ugadi Pachadi — the signature six-taste mixture, eaten first thing on Ugadi morning.",
      "Bobbatlu — sweet stuffed flatbread with chana-dal and jaggery filling.",
      "Pulihora — tamarind rice.",
      "Pesara Pappu Payasam — green-gram milk pudding.",
      "Kobbari Annam — coconut rice.",
    ],
    whatToExpect:
      "Hyderabad and Vijayawada feel especially festive — every neighbourhood temple has its own Panchanga Sravanam, often broadcast on loudspeakers. The Tirupati Brahmotsavam often overlaps with Ugadi in some years. In rural Telangana and Andhra, agricultural families perform the first farm puja of the new year. Visit a Telugu Brahmin household if you can — the Ugadi Pachadi ritual is a wonderful introduction to the cultural acceptance of life's mixed flavours.",
  },
  {
    slug: "yadagirigutta-brahmotsavam-2026",
    kind: "festival",
    name: "Yadadri Brahmotsavam",
    dateLabel: "19–29 Mar",
    startDate: "2026-03-19",
    endDate: "2026-03-29",
    months: ["March"],
    states: ["telangana"],
    interests: ["Religious & Spiritual"],
    image: IMG.ramappa,
    shortBlurb: "Eleven days at Telangana’s Lakshmi Narasimha shrine.",
    description:
      "The recently renovated Yadagirigutta Sri Lakshmi Narasimha Swamy temple performs an eleven-day brahmotsavam each Ugadi season, with daily vahana sevas (deity processions on different mounts) and a kalyanam on the closing day.",
    significance:
      "Yadadri is one of Telangana’s five Narasimha kshetras. The temple was rebuilt entirely in black granite between 2016 and 2022.",
    bestPlaces: ["Yadadri, 60 km east of Hyderabad"],
    history:
      "The Yadadri Lakshmi Narasimha legend involves the sage Yada (son of Rishyashringa), who is said to have meditated on the hill and been blessed with Narasimha's appearance in five forms — Jwala, Yogananda, Ugra, Gandabherunda and Lakshmi Narasimha. The original cave-shrine dates to the medieval Reddi king period (14th century). The temple was rebuilt entirely between 2016 and 2022 under the Telangana state government's Yadagirigutta Temple Development Authority, using 9.5 lakh tonnes of black granite quarried from Chittoor. It is now the largest black-granite temple in India.",
    rituals: [
      "Day 1: Kodiyetram (flag hoisting) opens the eleven-day brahmotsavam.",
      "Days 2-10: Vahana sevas — the deity rides Hamsa, Garuda, Hanumantha, Simha, Sesha, Gajavahana, Ashwa and the wooden Ratha across the days.",
      "Garuda Seva (day 7) is the most attended single procession.",
      "Day 11: Tirukalyanam — the celestial wedding of Lakshmi Narasimha is conducted on a riverside mandapam.",
      "Pavalimpu seva: at midnight each day, devotees can offer flowers as the deity is put to rest.",
    ],
    foods: [
      "Pulihora — tamarind rice, the temple's standard prasadam.",
      "Daddojanam — curd rice tempered with mustard and curry leaves.",
      "Vada and payasam — fried lentil cakes with milk-rice pudding.",
      "Garelu — small fried lentil donuts.",
      "Bobbatlu — sweet stuffed flatbread, offered at the kalyanam.",
    ],
    whatToExpect:
      "Yadadri is a 60 km drive east of Hyderabad. The new granite temple is striking — particularly at sunrise. Online ticketing through the temple's website is recommended. The Garuda Seva day draws 100,000+ pilgrims; the kalyanam day around 200,000. Strict dress code applies: men in dhoti without shirt, women in saree or salwar.",
  },
  {
    slug: "sri-rama-navami-bhadrachalam-2026",
    kind: "festival",
    name: "Sri Rama Navami (Bhadrachalam)",
    dateLabel: "27 Mar",
    startDate: "2026-03-27",
    endDate: "2026-03-27",
    months: ["March"],
    states: ["telangana", "andhra-pradesh"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.ramappa,
    shortBlurb: "Rama’s celestial wedding on the Godavari bank.",
    description:
      "The kalyanam of Rama and Sita is conducted on a riverside mandapam beside the Godavari at Bhadrachalam. State-supplied talambralu (pearl-tipped rice) and silk sarees are sent each year. The chief minister attends to offer them in the name of the state.",
    significance:
      "Bhadrachalam is considered the place where Sri Rama, Sita and Lakshmana lived in exile. The kalyanam there has been performed since the 17th-century saint Bhakta Ramadasu rebuilt the temple.",
    bestPlaces: ["Bhadrachalam Sri Sita Ramachandraswamy Temple"],
    history:
      "Bhadrachalam temple was built in the 1670s by Kancherla Gopanna — better known as Bhakta Ramadasu — who was at the time the local tahsildar (revenue official) under Abul Hassan Tana Shah, the last Qutb Shahi sultan of Hyderabad. Ramadasu used state revenue to construct the temple; when discovered, he was jailed for 12 years in Golconda fort. According to legend, Rama and Lakshmana appeared to the sultan in his dreams to repay the debt in gold coins (the 'Ramadasu Tankas', still preserved in the temple treasury). The kalyanam in present form was institutionalised by Ramadasu around 1675 and has been state-funded since the formation of Andhra Pradesh in 1956 (now Telangana).",
    rituals: [
      "The state government sends the talambralu (pearl-tipped rice) and mangalasutra in a special train from Hyderabad to Bhadrachalam.",
      "The Chief Minister presents the talambralu to the deity in the kalyanam.",
      "The wedding itself is performed on a riverside Mithila Stadium platform overlooking the Godavari.",
      "Rama, Sita and Lakshmana are dressed in royal attire; pundits chant the wedding mantras for two hours.",
      "After the talambralu (sacred rice) ceremony, the talambralu is distributed to all attendees.",
    ],
    foods: [
      "Pulihora — tamarind rice, the day's signature offering.",
      "Daddojanam — curd rice tempered with mustard.",
      "Sweet pongal — milk-rice with jaggery, the kalyanam sweet.",
      "Bobbatlu — sweet stuffed flatbread with chana-dal and jaggery.",
      "Vada — fried lentil rounds.",
    ],
    whatToExpect:
      "Bhadrachalam fills with 500,000+ pilgrims on Rama Navami day. The kalyanam itself happens around noon. Book hotels months in advance — many devotees sleep on the Godavari bank. The temple has a strict dress code (dhoti for men, saree/salwar for women). Combine with a riverboat ride on the Godavari and the Parnashala (Rama's hut) site 32 km away.",
  },
  {
    slug: "tirupati-brahmotsavam-2026",
    kind: "festival",
    name: "Tirupati Brahmotsavam",
    dateLabel: "23 Sep – 1 Oct",
    startDate: "2026-09-23",
    endDate: "2026-10-01",
    months: ["September", "October"],
    states: ["andhra-pradesh"],
    interests: ["Religious & Spiritual"],
    image: IMG.tirupati,
    shortBlurb: "Nine days of Venkateshwara on every vahanam.",
    description:
      "The processional deity Malayappa Swamy is taken out twice a day on a different vahanam — Hamsa, Simha, Hanumantha, Garuda, the Golden Chariot and finally the great wooden Ratha. Tens of thousands line the four mada veedis around the temple.",
    significance:
      "The principal festival of the world’s most-visited shrine. The temple’s annual ritual cycle is built around these nine days.",
    bestPlaces: ["Tirumala (the four mada streets around the temple)"],
    history:
      "Tirumala's annual Brahmotsavam was instituted by the Pallava kings in the 8th century and elaborated under the Chola, Vijayanagara and Mysore Wodeyar patronage. The current 9-day format follows the Vaikhanasa Agama codified by the temple's chief priest in the 11th century. Krishnadevaraya, the Vijayanagara emperor, donated the temple's vimana gold plating (1517) and many ornaments still in use. The 2.5-tonne golden Garuda Vahanam — the procession's high point — was donated by a single anonymous devotee in 2020 worth Rs 80 crore. Approximately 2 million pilgrims attend across the nine days, making it the largest temple festival on earth.",
    rituals: [
      "Day 1: Ankurarpana (sprouting rice grains for the festival) and Dhwajarohana (flag hoisting).",
      "Days 2-8: Two daily vahana processions (one morning, one evening) — the deity rides Pedda Sesha, Chinna Sesha, Hamsa, Simha, Muthyapu Pandiri, Kalpavruksha, Sarvabhupala, Mohini, Garuda, Hanumantha, Suryaprabha, Chandraprabha, Gaja, Ashwa and finally the wooden Ratha.",
      "Day 5: Garuda Vahanam — the most attended single procession; the golden Garuda carries Venkateshwara.",
      "Day 9: Rathotsavam — the massive wooden chariot is pulled through the four mada streets by tens of thousands.",
      "Day 9 night: Chakra Snanam — the deity's discus is bathed in the Pushkarini, signalling the festival's close.",
    ],
    foods: [
      "Tirupati Laddu — the temple's signature gram-flour laddu, GI-tagged and the most sacred prasadam.",
      "Pulihora (tamarind rice) — temple-supplied free meal.",
      "Daddojanam — temple curd rice.",
      "Sweet pongal — milk-rice with jaggery, offered first.",
      "Vada — fried lentil cake, the standard accompaniment.",
    ],
    whatToExpect:
      "Tirumala fills well beyond capacity during these nine days. The Garuda Vahanam (Day 5) and Rathotsavam (Day 9) see crowds over 500,000 each. Online ticketing through the TTD website is essential; queue times can reach 20+ hours otherwise. Stay in Tirupati town and travel up to Tirumala by the temple bus. Strict dress code: men in dhoti without shirt, women in saree or chudidar. Photography is prohibited inside the sanctum.",
  },
  {
    slug: "rayalaseema-food-2026",
    kind: "event",
    name: "Rayalaseema Food Festival",
    dateLabel: "13–15 Nov",
    startDate: "2026-11-13",
    endDate: "2026-11-15",
    months: ["November"],
    states: ["andhra-pradesh"],
    interests: ["Food & Cuisine", "Cultural & Folk"],
    image: IMG.cultural,
    shortBlurb: "Ragi sangati, natu kodi pulao, ariselu.",
    description:
      "A weekend food fair at Kurnool showcasing the dry-land cuisine of the four Rayalaseema districts. Stalls serve ragi sangati with natu kodi pulusu, jonna roti, gongura mamsam, ariselu and chigurakukuru pickles.",
    significance:
      "Created to give visibility to a regional food tradition that long sat in the shadow of the more famous Andhra coastal cuisine.",
    bestPlaces: ["Kurnool"],
    history:
      "The Rayalaseema region — Anantapur, Kurnool, Kadapa and Chittoor districts — has historically been overshadowed in food tourism by the better-known Coastal Andhra (Krishna delta) and Hyderabadi cuisines. The Rayalaseema diet evolved from the region's dry-land farming: ragi (finger millet), jowar (sorghum), tubers and country chicken predominate where rice was historically scarce. The festival was launched in 2017 by the Andhra Pradesh Tourism Department and the Kurnool district administration as part of a wider push to promote backward-region tourism. It now draws food writers and chefs from across India.",
    rituals: [
      "Stalls are organised by district: four major pavilions for Anantapur, Kurnool, Kadapa and Chittoor.",
      "A 'live kitchen' centrepiece demonstrates ragi sangati preparation — the millet ball that is the regional staple.",
      "Country-chicken (natu kodi) cooking competitions among home cooks.",
      "Folk performances: Burra Katha (story-singing), Kolatam (stick dance) and Veedhi Bhagavatham.",
      "An evening tasting session pairs Rayalaseema dishes with locally distilled palm jaggery liquor.",
    ],
    foods: [
      "Ragi sangati with natu kodi pulusu — finger-millet balls dipped in spicy country-chicken curry.",
      "Jonna roti with karam — sorghum flatbread with red-chilli paste.",
      "Gongura mamsam — sorrel-leaf mutton, eaten with rice or roti.",
      "Ariselu — fried rice-flour and jaggery sweet.",
      "Chigurakukuru pickles — fresh-mango and tender mango-leaf pickles unique to Rayalaseema.",
    ],
    whatToExpect:
      "Kurnool in November is dry and warm (28-30°C). The festival is 3 days at the Kurnool city Exhibition Ground. Entry is free; food is reasonably priced (Rs 50-150 per dish). Combine with day trips to Belum Caves (90 km), the Mahanandi Shiva temple (95 km) and the Yaganti caves. Stay in Kurnool town.",
  },

  // ============================================================
  // TELANGANA — Festivals
  // ============================================================
  {
    slug: "numaish-2026",
    kind: "event",
    name: "Numaish (Hyderabad)",
    dateLabel: "1 Jan – 15 Feb",
    startDate: "2026-01-01",
    endDate: "2026-02-15",
    months: ["January", "February"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Food & Cuisine"],
    image: IMG.ramappa,
    shortBlurb: "Hyderabad’s 46-day all-India trade fair.",
    description:
      "Forty-six days of pavilions on the Exhibition Grounds at Nampally — 2,500 stalls of fabric, brassware, kitchen tools, leather and Hyderabadi street food. Open evenings only, with a Ferris wheel and an old wooden merry-go-round.",
    significance:
      "Running annually since 1938 to fund the Hyderabad Industrial Exhibition Society’s educational programs. Older than the Republic of India itself.",
    bestPlaces: ["Exhibition Grounds, Nampally, Hyderabad"],
    history:
      "The All India Industrial Exhibition (locally called Numaish, Urdu for 'display') was founded in 1938 by Nawab Mehdi Nawaz Jung at Public Gardens, Hyderabad — then under the Nizam's princely state. It was conceived as a winter fair to fund educational programmes of the Hyderabad Industrial Exhibition Society. The exhibition moved to its current home at Nampally Exhibition Grounds in 1946. It has been held every January-February without interruption since founding (except for 1948 during the Police Action), making it older than the Republic of India. Numaish today is the largest consumer fair in India by stall count.",
    rituals: [
      "Approximately 2,500 stalls are erected — handicrafts, textiles, kitchenware, leather, brassware, sarees.",
      "Opening ceremony on 1 January by the Telangana CM.",
      "Daily Ferris wheel and wooden merry-go-round operations from 4 p.m. to midnight.",
      "Food court with 100+ stalls of regional cuisines.",
      "Closing on 15 February with a fireworks display.",
    ],
    foods: [
      "Hyderabadi biryani — at Pista House and Bawarchi stalls.",
      "Mirchi ka salan — green chilli curry in peanut-sesame gravy.",
      "Lukhmi — Hyderabadi mutton-stuffed pastry.",
      "Double ka meetha — bread pudding with saffron syrup.",
      "Sheermal — sweet saffron flatbread.",
    ],
    whatToExpect:
      "Nampally Exhibition Grounds is open 4 p.m. to midnight; mid-evening (6-9 p.m.) is the best window for stalls and food. Sundays are extremely crowded — try a Tuesday or Wednesday. Entry is Rs 30; parking is chaotic, take a metro to Nampally station. The Sindhi handicraft stalls in particular are well-loved.",
  },
  {
    slug: "komaravelli-jatara-2026",
    kind: "festival",
    name: "Komaravelli Mallanna Jatara",
    dateLabel: "18 Jan",
    startDate: "2026-01-18",
    endDate: "2026-01-18",
    months: ["January"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Religious & Spiritual"],
    image: IMG.ramappa,
    shortBlurb: "Yellow turmeric devotion to a shepherd god.",
    description:
      "Each Sunday from Sankranti to Ugadi, lakhs of devotees swarm the Komaravelli hill temple bearing patnam (turmeric-yellow offerings on bamboo poles). The chief day is the Sunday after Sankranti when the priest performs the patabhishekam.",
    significance:
      "Komaravelli Mallanna is a folk Shiva worshipped by the Yadava and Kuruma shepherd communities of Telangana — a deity with no Sanskritic temple lineage but a vast popular following.",
    bestPlaces: ["Komaravelli, Siddipet district"],
    history:
      "Komaravelli Mallanna is a folk Shiva (kula-deivam) of the Yadava (Golla) and Kuruma shepherd communities of central Telangana. The deity is identified in oral tradition with Khandoba — a martial form of Shiva popular across the Deccan — but at Komaravelli he is locally venerated as a shepherd's god who married Bhramaramba and Medalamma, two local women, in his earthly life. The temple's surviving structure is medieval (12th–13th century, Kakatiya period) though oral tradition holds the worship as much older. The Sunday-after-Sankranti jatara has been documented since at least the 1800s.",
    rituals: [
      "Devotees prepare patnam — a bamboo pole with a long yellow cloth saturated in turmeric, hung with bells and tassels.",
      "Patnam is carried on the shoulder all the way from home village to Komaravelli, sometimes 50-100 km on foot.",
      "On arrival, the patnam is dipped in the temple pond and presented at the sanctum.",
      "Patukulu — turmeric-yellow powder — is smeared on devotees and the temple walls until everything is yellow.",
      "Oggu Katha — a folk-narrative singing in Yadava style — is performed continuously through the day.",
    ],
    foods: [
      "Pulihora — tamarind rice, cooked in giant brass pots at the jatara grounds.",
      "Ambali — fermented finger-millet porridge, the shepherd community's traditional drink.",
      "Junnu — colostrum-milk pudding.",
      "Gongura mamsam — sorrel-mutton, often cooked by Yadava families at the jatara.",
      "Rasam-rice and curd-rice — served on banana leaves at the community kitchens.",
    ],
    whatToExpect:
      "Komaravelli is a 100 km drive north of Hyderabad. The Sunday-after-Sankranti is the peak; expect 200,000+ devotees, mostly from Yadava and Kuruma shepherd backgrounds. The entire temple turns yellow by mid-afternoon. The atmosphere is folk-festival rather than Sanskritic — drums, oggu katha, no priests in formal vestments. Modest dress required; the temple has no strict caste restrictions but visitors should be respectful of community traditions.",
  },
  {
    slug: "sammakka-saralamma-2026",
    kind: "festival",
    name: "Sammakka–Saralamma Jatara",
    dateLabel: "18–21 Feb",
    startDate: "2026-02-18",
    endDate: "2026-02-21",
    months: ["February"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Religious & Spiritual"],
    image: IMG.ramappa,
    shortBlurb: "Asia’s largest tribal gathering, biennial.",
    description:
      "Held once every two years, the Medaram jatara draws over ten million pilgrims to a forest clearing in Mulugu district. Devotees bring jaggery equal to their body weight as offering. The deities are brought from a thicket and a hill respectively.",
    significance:
      "Honours a Koya mother and daughter who led a 13th-century revolt against the Kakatiyas. The jatara, which is non-Sanskritic and entirely tribal in form, is the largest of its kind in Asia.",
    bestPlaces: ["Medaram, Mulugu district"],
    history:
      "The Sammakka-Saralamma story is a 13th-century Telangana folk legend of two Koya tribal women — Sammakka (the mother) and Sarakka or Saralamma (the daughter) — who led the Koya community in a revolt against the Kakatiya king Prataparudra over the diversion of the Jampanna stream away from their lands during a drought. Both women died in battle but disappeared without trace; Sammakka into the forest, Saralamma at the Jampanna ford. The Koya have venerated them ever since. The biennial jatara at Medaram is held during the moon of Magh (Feb), and the gathering has grown from a few thousand tribal pilgrims to over 10 million people — Asia's largest tribal congregation, now recognised as a Telangana state festival.",
    rituals: [
      "Day 1: Saralamma is brought from the thicket of Kanepalli by a Koya priest, walking 5 km to the Medaram clearing.",
      "Day 2: Sammakka is brought from the Chilakalagutta hill by a Koya priestess.",
      "Day 3: Both goddesses are placed on the gadde (raised platform); devotees offer bangaram (jaggery equal to body weight).",
      "Pilgrims take a holy bath in the Jampanna river — the stream is said to run red from Sarakka's blood.",
      "Day 4: The goddesses are returned to their respective forest abodes; the jatara closes.",
    ],
    foods: [
      "Bangaram (jaggery) — the principal offering; pilgrims weigh themselves on giant scales against blocks of jaggery.",
      "Pulihora — tamarind rice, eaten as the standard prasadam.",
      "Vada and chana sundal — fried savouries available at all stalls.",
      "Junnu — colostrum-milk pudding.",
      "Pachi pulusu — spicy raw tamarind soup, a Koya tribal speciality.",
    ],
    whatToExpect:
      "Medaram in jatara week becomes one of the largest temporary cities on Earth — 10 million pilgrims in a 3-day window. The Telangana government runs special trains and buses. Plan to camp in the temple village; hotels are non-existent. The atmosphere is unlike any Sanskritic temple festival — purely tribal, no Brahmin priests, drums and oggu katha through the night. The Jampanna river bath is profound — modest swim clothes recommended. Wear comfortable walking shoes.",
  },
  {
    slug: "deccan-festival-2026",
    kind: "event",
    name: "Deccan Festival",
    dateLabel: "25 Feb – 1 Mar",
    startDate: "2026-02-25",
    endDate: "2026-03-01",
    months: ["February", "March"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Music & Dance", "Food & Cuisine"],
    image: IMG.ramappa,
    shortBlurb: "Qutb Shahi tombs lit for ghazal nights.",
    description:
      "Five nights at the Qutb Shahi tombs and Golconda Fort with mushaira (Urdu poetry), qawwali, ghazal evenings, Kuchipudi recitals and an enormous Haleem stall under the floodlit minarets.",
    significance:
      "Curated to celebrate the syncretic Deccani culture of the four-hundred-year-old Qutb Shahi capital — equally Persian, Telugu and Hindustani.",
    bestPlaces: ["Golconda Fort", "Qutb Shahi tombs"],
    history:
      "The Deccan Festival was launched in 1991 by the Andhra Pradesh Tourism Development Corporation under then-CM N. Janardhan Reddy. After Telangana's formation in 2014, the festival has been managed by Telangana Tourism. It celebrates the syncretic 'Deccani' culture of the four Qutb Shahi sultans (1518-1687), whose court combined Persian poetry (Quli Qutb Shah was himself a major Urdu poet), Telugu literature (Mulla Wajhi wrote in both languages), Hindustani classical music and Hindu-Muslim hybrid forms. The festival is held at the Qutb Shahi necropolis and Golconda Fort — the most-preserved early-modern Deccani sites in India.",
    rituals: [
      "Day 1: Inaugural mushaira (Urdu poetry symposium) at the Hayat Bakshi tomb with poets from Hyderabad, Lucknow and Karachi.",
      "Day 2: Qawwali night at the Quli Qutb Shah tomb.",
      "Day 3: Ghazal evening featuring leading exponents.",
      "Day 4: Kuchipudi and Mohiniyattam recitals on a stage set against the Golconda Fort wall.",
      "Day 5: 'Roti-Beti' food festival pairing Hyderabadi dishes with regional Telangana foods.",
    ],
    foods: [
      "Hyderabadi biryani — both the Kacchi and Pakki styles.",
      "Haleem — the slow-cooked wheat-and-meat stew, particularly during Ramzan months but available year-round.",
      "Mirchi ka salan — green chilli curry in peanut-sesame gravy.",
      "Double ka meetha — bread pudding with saffron and rosewater.",
      "Khubani ka meetha — apricot dessert with custard.",
    ],
    whatToExpect:
      "The Qutb Shahi tombs are floodlit beautifully for the festival; the Hayat Bakshi tomb is the largest venue. Carry a shawl for the cool February nights. Programmes typically run 7-10 p.m. Combine with daytime visits to Golconda Fort, Charminar and the Salar Jung Museum. Entry is mostly free; some headline qawwali nights have ticketed seating.",
  },
  {
    slug: "peerla-panduga-2026",
    kind: "festival",
    name: "Peerla Panduga (Muharram)",
    dateLabel: "16 Jul",
    startDate: "2026-07-16",
    endDate: "2026-07-16",
    months: ["July"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "Hindu villages mourning Hussain.",
    description:
      "Muharram in inland Telangana is observed jointly by Hindu and Muslim villagers. Tall peerlu (cenotaphs of Hassan and Hussain) are carried in procession, with Hindu families fasting and offering naivedyam alongside Muslim neighbours.",
    significance:
      "A 500-year-old syncretic tradition unique to the Telangana plateau — Hindus mourning the Karbala martyrs as community ancestors.",
    bestPlaces: ["Komatipalli", "Mallepalli", "rural Karimnagar"],
    history:
      "The Hindu-observed Muharram of inland Telangana traces to the Qutb Shahi period (1518-1687), when Shia Islam was the state religion of the Hyderabad kingdom and ashurkhanas (Muharram processional houses) were built in nearly every town. Many Hindu villages, particularly those settled by Telangana Reddi and Munnurkapu communities under Qutb Shahi land grants, took up the Muharram observance as a community vow to Hussain — viewing him as a martyr-saint who protects the community from drought and famine. The tradition has continued unbroken even though the Telangana state is overwhelmingly Hindu — a remarkable example of inland Deccan religious syncretism.",
    rituals: [
      "On the first night of Muharram, the peerlu (tall cenotaphs of Hassan and Hussain) are erected at the village ashurkhana.",
      "Hindu families bring naivedyam (food offering) of khichdi and milk to the peerlu and burn incense.",
      "On Ashura (Day 10), Hindu and Muslim villagers walk together in the peerlu procession.",
      "Devotees walk barefoot through hot coals (fire-walking) as a vow of penance.",
      "On the final day, the peerlu are immersed in the village tank.",
    ],
    foods: [
      "Khichdi — the Hassan-Hussain offering of rice cooked with lentils and ghee.",
      "Sheer-khurma — vermicelli-and-milk sweet, often shared with Muslim neighbours.",
      "Bobbatlu — sweet stuffed flatbread.",
      "Pulihora — tamarind rice.",
      "Pachi pulusu — spicy raw-tamarind soup.",
    ],
    whatToExpect:
      "This is a quiet, deeply local festival — best observed in small villages of Karimnagar, Warangal Rural, Mahabubabad and Nalgonda districts. Reach the village by mid-evening of Ashura day to witness the joint procession. Photography is welcome with respect. The fire-walking is the most striking moment — usually performed by senior community members who have prepared with fasting. Stay in Warangal or Karimnagar city.",
  },
  {
    slug: "bonalu-2026",
    kind: "festival",
    name: "Bonalu",
    dateLabel: "19 Jul – 9 Aug",
    startDate: "2026-07-19",
    endDate: "2026-08-09",
    months: ["July", "August"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Religious & Spiritual", "Food & Cuisine"],
    image: IMG.ramappa,
    shortBlurb: "Hyderabad’s rice-pot procession to the Mahankali.",
    description:
      "Through the four Sundays of Ashada, women of Hyderabad carry brass pots of cooked rice with jaggery and curd balanced on their heads to the Mahankali temples of Golconda, Secunderabad and the old city. The Pothuraju troupes dance in front, whips and bells in hand.",
    significance:
      "Began in the 1800s after a cholera epidemic. Now declared the state festival of Telangana.",
    bestPlaces: ["Golconda Mahankali", "Secunderabad Ujjaini Mahankali", "Lal Darwaza"],
    history:
      "Bonalu's origin story dates to 1813, when a cholera epidemic broke out in Hyderabad and Secunderabad. A military battalion stationed at Ujjain (Madhya Pradesh) prayed to Mahankali (Kali in the form of a fierce protective mother) for relief, and the epidemic abated. The soldiers brought a Mahankali idol back to Secunderabad and installed it at what is now the Ujjaini Mahankali temple — and instituted the Bonalu (literally 'bhojanalu' — meals) offering as annual thanksgiving. The festival was elevated to a Telangana state festival after the state was formed in 2014. The four Sundays of Ashada now see Bonalu processions across Hyderabad's old city, Secunderabad and Golconda.",
    rituals: [
      "Women cook rice with jaggery, milk and curd in a brass pot, decorating the pot with margosa leaves and turmeric.",
      "The pot (Bonam) is balanced on the head and carried to the Mahankali temple in procession.",
      "Pothuraju — a male in red kumkum face paint with bells, whips and ankhilus (small dolls) — dances in front of the procession.",
      "Devotees in trance (typically women possessed by the goddess) walk among the procession giving oracular utterances.",
      "Rangam — a Saidamma woman in trance answers questions about the year's monsoon and harvest from the back of an elephant.",
    ],
    foods: [
      "Bonam — the offering itself: rice cooked with jaggery, milk and curd, served back to family from the offered pot.",
      "Curd rice with mango pickle — the standard accompaniment.",
      "Pulihora — tamarind rice.",
      "Bobbatlu — sweet stuffed flatbread.",
      "Garelu — fried lentil donuts.",
    ],
    whatToExpect:
      "The Bonalu Sundays in Hyderabad's old city (Lal Darwaza, Charminar area) are intense — drums, dancing Pothurajus, women in trance, bright kumkum and turmeric. Secunderabad's Ujjaini Mahankali procession is the largest single procession (around 200,000 people). Golconda Bonalu kicks off the festival on the first Sunday. Wear yellow or red clothes to blend in; comfortable walking shoes essential. Photography is welcome with respect.",
  },
  {
    slug: "bathukamma-2026",
    kind: "festival",
    name: "Bathukamma",
    dateLabel: "10–18 Oct",
    startDate: "2026-10-10",
    endDate: "2026-10-18",
    months: ["October"],
    states: ["telangana"],
    interests: ["Cultural & Folk", "Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "Telangana’s nine-night flower stack festival.",
    description:
      "For nine evenings before Dasara, women of Telangana arrange seasonal flowers — gunuga, tangedu, marigold — in concentric circular stacks on a plate and form a ring around them in courtyards and gardens, singing folk songs without instruments. On the ninth night the stacks are floated in a lake.",
    significance:
      "Honours Gauri as the flower goddess. The festival was central to the Telangana statehood movement and is now the official state festival.",
    bestPlaces: ["Hyderabad lakes", "Warangal", "Karimnagar"],
    history:
      "Bathukamma (literally 'come alive, mother' in Telugu) is a uniquely Telangana goddess festival celebrated by women, with no Brahmin priest involvement. Its origins are folk: the goddess Gauri (an aspect of Parvati) is identified with seasonal flowers — particularly the yellow tangedu and gunuga blossoms that flood Telangana's countryside after the monsoon. The festival's nine-night format mirrors the lunar Navaratri but is celebrated outdoors in courtyards with women's-only songs (no instruments). During the 1969 and 2009 Telangana statehood agitations, Bathukamma became the cultural symbol of Telangana's distinct identity; after statehood in 2014, it was declared the official state festival.",
    rituals: [
      "Day 1 (Engili Pula Bathukamma): women gather seasonal flowers — tangedu, gunuga, marigold, gummadi — and stack them in concentric circles on a brass plate.",
      "The flower stack is placed in the courtyard; women form a circle around it and sing Bathukamma songs in chorus.",
      "Each evening for nine nights, the stack grows larger and more elaborate.",
      "Day 9 (Saddula Bathukamma): the largest stack of the year is prepared — a 3-foot-tall flower pyramid.",
      "On the ninth night, women carry the stacks in procession to the nearest lake or tank and float them on the water as offering to Gauri.",
    ],
    foods: [
      "Sakinalu — fried rice-flour spirals coated with sesame, the Bathukamma signature.",
      "Saddula — assorted cold rice dishes (curd rice, tamarind rice, lemon rice, coconut rice) shared by women.",
      "Junnu — colostrum-milk pudding.",
      "Ariselu — fried rice-flour-jaggery sweet.",
      "Kobbari Annam — coconut rice.",
    ],
    whatToExpect:
      "Bathukamma evenings (around 5-7 p.m.) in Hyderabad's old city, Warangal, Karimnagar and rural Telangana villages are deeply atmospheric — entirely women's gatherings, courtyards filling with flower towers, songs sung in chorus. Visitors should observe quietly; the songs and stacks are women-only. The final day's procession to the lake is the most spectacular — Hussain Sagar in Hyderabad and Bhadrakali Lake in Warangal both glow with thousands of floating flower stacks at sunset.",
  },
  {
    slug: "karthika-pournami-2026",
    kind: "festival",
    name: "Karthika Pournami",
    dateLabel: "23 Nov",
    startDate: "2026-11-23",
    endDate: "2026-11-23",
    months: ["November"],
    states: ["telangana", "andhra-pradesh"],
    interests: ["Religious & Spiritual"],
    image: IMG.diyas,
    shortBlurb: "Lamps under the awala tree.",
    description:
      "Telugu households light 365 oil lamps before sunset and float them on water in pots and leaf-boats. Families gather under the awala (gooseberry) tree for a community meal cooked outdoors.",
    significance:
      "Believed to be the full moon on which Shiva took the Tripurari avatar. The 365 lamps stand for the year’s nights.",
    bestPlaces: ["Hussain Sagar Lake", "Pushkar Ghat Vijayawada", "Bhadrachalam"],
    history:
      "Karthika Pournami is celebrated as the full moon when Shiva destroyed the three demonic cities of Tripura — earning him the name Tripurari (slayer of the three cities). The Skanda Purana describes the day as the holiest full moon of the year for Shaiva and Vaishnava worship alike. The 365-lamp tradition particular to coastal Andhra and inland Telangana symbolises the year's nights — that no night should be lightless. The Bhadrachalam Godavari ghat lamp ceremony has been continuous since the temple's 17th-century construction by Bhakta Ramadasu.",
    rituals: [
      "Devotees light 365 small oil lamps (one for each night of the year) before sunset.",
      "Lamps are floated on water in pots, plates and leaf-boats — on rivers, tanks and temple ponds.",
      "Families gather under the awala (gooseberry) tree, which is considered the abode of Vishnu on this day.",
      "A simple satvik meal — rice, dal, vegetable, payasam — is cooked outdoors and shared under the tree.",
      "Devotees take a Karthika snanam (pre-dawn bath in a river or temple tank) to begin the day.",
    ],
    foods: [
      "Daddojanam — temple curd rice tempered with mustard and ginger.",
      "Pulihora — tamarind rice.",
      "Bobbatlu — sweet stuffed flatbread.",
      "Awala chutney — fresh gooseberry chutney, particular to this day.",
      "Payasam — milk-rice pudding offered first to the lamps.",
    ],
    whatToExpect:
      "Hussain Sagar Lake in Hyderabad and Bhadrachalam's Godavari ghat are the most spectacular places to witness the floating lamps — thousands of points of light at dusk. Visit a Vana Bhojanam (forest meal) at a temple grove if invited; many Telugu families spend the day at a small temple grove with a community cookout. The atmosphere is quietly devotional rather than spectacular.",
  },
  {
    slug: "kakatiya-festival-2026",
    kind: "event",
    name: "Kakatiya Festival (Warangal)",
    dateLabel: "16–19 Dec",
    startDate: "2026-12-16",
    endDate: "2026-12-19",
    months: ["December"],
    states: ["telangana"],
    interests: ["Heritage & Historical", "Music & Dance"],
    image: IMG.ramappa,
    shortBlurb: "Four nights of dance at the Thousand Pillar Temple.",
    description:
      "A government-curated four-day festival rotating venues between the Thousand Pillar Temple, Bhadrakali, Ramappa and Warangal Fort, with classical and folk performances each evening and a heritage walk each morning.",
    significance:
      "Established to highlight the Kakatiya dynasty’s 12th–14th-century legacy — a kingdom whose architecture, sculpture and irrigation tanks still define inland Telangana.",
    bestPlaces: ["Warangal", "Ramappa Temple", "Thousand Pillar Temple"],
    history:
      "The Kakatiya dynasty ruled inland Telangana from Warangal (their capital Orugallu) between approximately 1163 and 1323, under kings such as Ganapati Deva, Rudrama Devi (a rare female monarch in medieval India) and Prataparudra. The dynasty's architectural legacy includes the Ramappa temple (UNESCO World Heritage, 1213 CE), the Thousand Pillar Temple at Hanamkonda (1163 CE), the Warangal Fort with its iconic Kirti Toranas, and an extensive system of irrigation tanks ('kakatiya cheruvulu') still in use 800 years later. The Kakatiya Festival was instituted in 2015 by the Telangana government, immediately after statehood, to assert the region's distinct historical identity.",
    rituals: [
      "Day 1: Inaugural cultural procession from Warangal Bus Station to the Thousand Pillar Temple.",
      "Day 2: Dance performances at the Ramappa temple — the Kakatiya-era Bharatanatyam form 'Perini Shivatandavam' is the headliner.",
      "Day 3: A heritage cycle ride covering the Warangal Fort, Bhadrakali, Thousand Pillar Temple and Ramappa.",
      "Day 4: Folk forms — Oggu Katha, Burra Katha, Pandavula Pata — performed at Warangal Fort.",
      "Open-air food court each evening featuring Telangana-specific dishes.",
    ],
    foods: [
      "Sakinalu — fried rice-flour spirals with sesame, Telangana signature.",
      "Sarva Pindi — rice-flour-and-lentil flatbread, fried crisp.",
      "Garijelu — sweet semolina-and-coconut dumplings.",
      "Jonna roti with mamsam — sorghum flatbread with mutton curry.",
      "Pacha Pulusu — fresh tamarind soup with chilli.",
    ],
    whatToExpect:
      "Warangal is a 3-hour drive from Hyderabad. Stay in Hanamkonda or Warangal; the venues are spread over 15 km. Mid-December is pleasantly cool. Ramappa Temple at sunset is unforgettable — particularly during the Perini Shivatandavam performance with the temple's carved dancers in the background. Combine with day trips to Pakhal Lake, Bhadrakali temple and Khila Warangal (the fort).",
  },
  {
    slug: "telangana-formation-2026",
    kind: "event",
    name: "Telangana Formation Day",
    dateLabel: "2 Jun",
    startDate: "2026-06-02",
    endDate: "2026-06-02",
    months: ["June"],
    states: ["telangana"],
    interests: ["National & Civic", "Cultural & Folk"],
    image: IMG.ramappa,
    shortBlurb: "Pink-and-green flags across the youngest state.",
    description:
      "The whole state is decked in pink and green. Public buildings hoist the state emblem, schoolchildren parade with Bathukamma stacks, and the CM addresses the assembly. Hyderabad’s Necklace Road sees a major evening cultural concert.",
    significance:
      "Marks the formation of Telangana on 2 June 2014 — the 29th state of India and the youngest until 2019.",
    bestPlaces: ["Hyderabad Hussain Sagar", "Warangal", "Karimnagar"],
    history:
      "The Telangana statehood movement was active for nearly six decades — beginning with the 1969 Telangana Praja Samithi agitation under leaders like Marri Chenna Reddy, revived in the 2000s by the Telangana Rashtra Samithi (TRS) under K. Chandrashekar Rao. After a 12-year sustained campaign culminating in the December 2009 declaration of statehood (followed by the 2014 actual bifurcation), Telangana became India's 29th state on 2 June 2014, with Hyderabad as its capital. The pink colour of the state flag commemorates the TRS party colours and the saffron-pink colour of Bathukamma flowers; green honours the agrarian land. Telangana Formation Day is now the state's most important civic festival.",
    rituals: [
      "The state flag is hoisted at 7 a.m. at Public Gardens, Hyderabad, by the Chief Minister.",
      "A 21-gun salute and a procession of the Telangana Police on horseback.",
      "Schoolchildren parade with Bathukamma flower stacks symbolising the state's cultural identity.",
      "A martyrs' memorial event at Gun Park in Hyderabad honours those who died in the statehood movement.",
      "Evening cultural concert at Hussain Sagar's Necklace Road; Tank Bund is illuminated in pink and green.",
    ],
    foods: [
      "Hyderabadi biryani — the unofficial state dish.",
      "Sarva Pindi — Telangana's signature rice-flour flatbread.",
      "Sakinalu — fried rice-flour spirals.",
      "Jonna roti with karam — sorghum flatbread with chilli paste.",
      "Pesara pulagam — green-gram pongali, particular to Telangana.",
    ],
    whatToExpect:
      "Hyderabad is the heart of the day. Streets, government buildings and Tank Bund are draped in pink and green. The Hussain Sagar Lake light show in the evening is the highlight. Statues of statehood movement leaders along Tank Bund are garlanded. Most cultural events are free. Combine with a Charminar visit and a Golconda Fort sound-and-light show at night.",
  },

  // ============================================================
  // PAN-INDIAN festivals — celebrated across all 5 states
  // ============================================================
  {
    slug: "republic-day-2026",
    kind: "event",
    name: "Republic Day",
    dateLabel: "26 Jan",
    startDate: "2026-01-26",
    endDate: "2026-01-26",
    months: ["January"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["National & Civic"],
    image: IMG.cultural,
    shortBlurb: "India’s constitution day.",
    description:
      "State capitals hold ceremonial parades. Schoolchildren receive sweets and watch flag-hoisting at their schools. In all five state capitals the governor takes the salute on the morning of the 26th.",
    significance:
      "Commemorates the adoption of the Constitution of India on 26 January 1950.",
    bestPlaces: ["Chennai Fort", "Trivandrum Raj Bhavan", "Bengaluru Manekshaw Parade Ground"],
    history:
      "Republic Day commemorates the adoption of the Constitution of India on 26 January 1950, which transformed India from a British Dominion into a sovereign democratic republic. The date was chosen to honour the Lahore session of the Indian National Congress (1929) where Purna Swaraj (complete independence) was declared on 26 January 1930. Dr. B.R. Ambedkar, as Chairman of the Drafting Committee, presented the final Constitution to the Constituent Assembly on 26 November 1949; the document came into force two months later. In the five southern states, state capitals hold ceremonial parades that mirror the New Delhi format on a smaller scale.",
    rituals: [
      "7 a.m.: National flag is hoisted at every government office, school and many private buildings.",
      "The Governor takes the salute at the state capital's parade ground.",
      "Cultural tableaux from each district display the state's heritage.",
      "Schoolchildren parade in their uniforms; many receive small gifts of sweets and the national flag.",
      "Evening: 'Beating the Retreat' ceremony at the state capital's main square; the flag is lowered ceremonially.",
    ],
    foods: [
      "Jalebi, samosa — the standard Republic Day school-distribution sweet and snack.",
      "Tricolour barfi — kaju barfi with saffron, green pista and white kaju layers.",
      "Pulao — vegetable rice, common at school and office lunches.",
      "Aloo tikki — fried potato patties, a parade-route snack.",
      "Filter coffee — at the family breakfast before the flag hoisting.",
    ],
    whatToExpect:
      "State capital parade grounds — Marina Beach Chennai, Trivandrum Raj Bhavan, Bengaluru Manekshaw Parade, Vijayawada Indira Gandhi Stadium, Hyderabad Secretariat — are the centres of the morning ceremony. Arrive by 8 a.m. for a good spot. Restaurants run patriotic specials. Government museums and zoos are free for the day. A great day to visit any of the colonial-era forts (Fort St. George Chennai, Bekal Fort Kerala) when they're festively decorated.",
  },
  {
    slug: "holi-2026",
    kind: "festival",
    name: "Holi",
    dateLabel: "3–4 Mar",
    startDate: "2026-03-03",
    endDate: "2026-03-04",
    months: ["March"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Cultural & Folk"],
    image: IMG.cultural,
    shortBlurb: "Colour, water and bonfires.",
    description:
      "The night of Holika Dahan opens with a bonfire of dry wood. The next morning, communities — especially university campuses and the migrant North Indian neighbourhoods of Bengaluru and Hyderabad — gather in the open air with dry colours, water guns and bhaang.",
    significance:
      "Celebrates the arrival of spring and the burning of the demoness Holika. In Hyderabad the festival has been embraced by the Marwari and Sindhi communities since the 1800s.",
    bestPlaces: ["Hyderabad", "Bengaluru", "Mysuru", "Chennai (campus areas)"],
    history:
      "Holi traces to the Bhagavata Purana's story of Prahlada — a devout Vishnu worshipper whose father, the demon king Hiranyakashipu, attempted to kill him with the help of his sister Holika, who was supposed to be fire-proof. Vishnu protected Prahlada and Holika was burned instead — commemorated by the Holika Dahan bonfire on the eve. The colour-throwing dimension is a later addition associated with Krishna's playful pranks on Radha and the gopis in Vrindavan. In South India, Holi was historically a smaller observance, mostly within North Indian migrant communities — Marwari, Sindhi, Gujarati and Punjabi traders in Hyderabad, Bengaluru and Mysuru. Since the 2000s it has spread to South Indian college campuses and the IT corridor migrant communities.",
    rituals: [
      "Eve of Holi (Holika Dahan): a small bonfire is lit in the courtyard or community ground at sunset.",
      "Coconut, popped corn and turmeric are offered to the fire as the demoness Holika is symbolically burnt.",
      "Holi morning: dry colours (gulal) are applied to family elders' feet as a sign of respect.",
      "Communities gather in open spaces with dry colours, water guns (pichkari) and hosepipes.",
      "Bhaang — a cannabis-based milk drink — is traditionally consumed in some North Indian communities; locally it's often replaced with thandai (a flavoured milk drink).",
    ],
    foods: [
      "Gujiya — sweet semolina-and-khoya stuffed dumplings, the signature Holi sweet.",
      "Thandai — saffron-cardamom-nut flavoured milk; an alternative to bhaang.",
      "Dahi vada — lentil dumplings in spiced yoghurt.",
      "Pani puri — crispy puris with spiced water, sold by every Holi roadside stall.",
      "Malpua — fried pancakes in saffron syrup.",
    ],
    whatToExpect:
      "Hyderabad's Banjara Hills and Begumpet areas, Bengaluru's Indiranagar and Whitefield, and the various IT-corridor housing societies see the most boisterous Holi celebrations — water balloons, colour clouds, music and bhaang. Most South Indian Hindus do not traditionally celebrate Holi at home, but commercial Holi parties are now common in resorts and clubs. Wear old clothes; some colours stain permanently. Use natural-based colours where possible. Photography requires protective camera gear.",
  },
  {
    slug: "eid-ul-fitr-2026",
    kind: "festival",
    name: "Eid-ul-Fitr",
    dateLabel: "20 Mar",
    startDate: "2026-03-20",
    endDate: "2026-03-20",
    months: ["March"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual", "Food & Cuisine"],
    image: IMG.cultural,
    shortBlurb: "Ramzan ends with feasting and prayer.",
    description:
      "The first day of Shawwal closes the month of Ramzan fasting. Morning prayer is held in open Eidgah grounds, followed by family feasting on sheer-khurma, biryani and haleem. In Hyderabad, Charminar’s alleys serve haleem through the night.",
    significance:
      "Marks the breaking of the fast after thirty days. Zakat (alms) is given before the morning prayer so that the poor can also feast.",
    bestPlaces: ["Mecca Masjid Hyderabad", "Chennai Triplicane", "Trivandrum Palayam"],
    history:
      "Eid-ul-Fitr was instituted by Prophet Muhammad in 624 CE in Medina, the year after he established the practice of Ramzan fasting. The festival marks the end of the month-long Ramzan fast — the Islamic month commemorating the revelation of the Quran. The date depends on the sighting of the new moon and so varies by 1-2 days across regions. South India's Muslim population (about 9% of the region's total) includes the Deccani-speaking communities of Hyderabad (Qutb Shahi descent), the Mappila community of Kerala (Arab traders' descent), the Tamil Muslim community (Marakkayar and Labbai) and the Beary community of coastal Karnataka — each with its own Eid food traditions.",
    rituals: [
      "Fitra (alms) is given to the poor before the morning Eid prayer — typically 2 kg of staple food or its monetary equivalent per family member.",
      "Eid prayer (Salat al-Eid) is offered in open-air Eidgah grounds around 7 a.m., wearing new clothes.",
      "After prayer, men embrace each other with the greeting 'Eid Mubarak'.",
      "Families visit each other through the day, exchanging sweets and gifts.",
      "Older relatives give Eidi (gift money) to children, a tradition particularly strong in Hyderabad.",
    ],
    foods: [
      "Sheer-khurma — vermicelli cooked in milk with dates and dry fruits, the universal Eid breakfast.",
      "Hyderabadi mutton biryani — the festive lunch in Hyderabad.",
      "Haleem — slow-cooked wheat-and-meat stew, eaten through Ramzan and Eid.",
      "Mappila biryani — Kerala Muslim biryani with shorter-grain rice and stronger spice.",
      "Bagara baingan — Hyderabadi small brinjal curry, an Eid lunch staple.",
    ],
    whatToExpect:
      "Hyderabad's old city around Mecca Masjid and Charminar is the most spectacular — over 100,000 worshippers gather for the Eid prayer. The food stalls in Madina Hotel-Pista House area serve haleem and biryani through Ramzan evenings. Chennai's Triplicane and Mannady mosque areas come alive in late evening. Mappila restaurants in Kerala (especially Kozhikode and Thalassery) serve elaborate Eid feasts. Modest dress is recommended for mosque entry; some mosques have visiting hours for non-Muslims after the prayer.",
  },
  {
    slug: "eid-ul-adha-2026",
    kind: "festival",
    name: "Eid-ul-Adha",
    dateLabel: "27 May",
    startDate: "2026-05-27",
    endDate: "2026-05-27",
    months: ["May"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "Bakr-Eid: the festival of sacrifice.",
    description:
      "Commemorating Prophet Ibrahim’s willingness to sacrifice his son Ismail, families perform the qurbani at dawn and distribute one-third of the meat to relatives, one-third to the poor and keep one-third for the home.",
    significance:
      "The second of the two Muslim Eids. Coincides with the Hajj pilgrimage in Mecca.",
    bestPlaces: ["Hyderabad Old City", "Chennai Royapettah", "Mangaluru Bunder"],
    history:
      "Eid-ul-Adha (also Bakr-Eid in South Asia) commemorates the Quranic story (also in the Hebrew Bible) of Prophet Ibrahim's willingness to sacrifice his son Ismail as proof of devotion to God. God replaced Ismail with a ram at the last moment. The festival has been observed since the 7th century. It falls on the 10th of Dhul-Hijjah, the day Hajj pilgrims complete the throwing of stones at the three pillars in Mina. The qurbani (animal sacrifice) ritual is performed at home or in slaughter-house, and the meat is distributed in three equal parts: family, relatives/friends, and the poor.",
    rituals: [
      "Eid prayer at the Eidgah ground or mosque around 7 a.m.",
      "Qurbani: a goat, sheep, cow or camel is sacrificed by a qualified halal slaughterer.",
      "One-third of the meat is given to the poor, one-third to relatives, one-third kept for the home feast.",
      "Family visits and Eid greetings continue through the day.",
      "Some families donate the entire animal to a community kitchen.",
    ],
    foods: [
      "Mutton biryani — the Eid lunch centrepiece, particularly Hyderabadi style.",
      "Pasanda — slow-cooked mutton in cashew-yoghurt gravy.",
      "Haleem — wheat-meat stew, common at Hyderabad Eid evenings.",
      "Korma — rich mutton or beef curry in coconut-cashew gravy.",
      "Sheer-khurma — vermicelli-milk dessert, served after the meat-heavy meal.",
    ],
    whatToExpect:
      "Eid-ul-Adha is more domestic than Eid-ul-Fitr; most of the cooking and visiting happens at home. The Eidgah morning prayer is still a major public gathering — Hyderabad's Mir Alam Eidgah accommodates 100,000. Many Muslim restaurants run a special Bakr-Eid lunch menu. Vegetarians might prefer to avoid the day in the Muslim neighbourhoods where the qurbani happens; the rest of the city operates normally.",
  },
  {
    slug: "krishna-janmashtami-2026",
    kind: "festival",
    name: "Krishna Janmashtami",
    dateLabel: "4 Sep",
    startDate: "2026-09-04",
    endDate: "2026-09-04",
    months: ["September"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: "https://images.unsplash.com/photo-1641730259879-ad98e7db7bcb?w=1600&q=80&auto=format&fit=crop",
    shortBlurb: "Krishna’s midnight birth.",
    description:
      "Households fast until midnight when Krishna is said to have been born. Tiny baby Krishna footprints in rice flour are drawn from the doorstep to the puja room. Udupi, Guruvayur and the ISKCON temples hold all-night kirtans.",
    significance:
      "Honours the eighth avatar of Vishnu, born at midnight in a Mathura prison.",
    bestPlaces: ["Udupi Sri Krishna Matha", "Guruvayur", "ISKCON Bengaluru"],
    history:
      "Krishna's birth on the Ashtami of Krishna Paksha in Shravana (the eighth day after the August-September full moon) is described in the Bhagavata Purana, traditionally dated to around 3228 BCE. He was born in a Mathura prison cell to Vasudeva and Devaki — eighth in line, fulfilling a prophecy that the eighth son would slay the tyrant king Kamsa. The midnight birth narrative gave the festival its peculiar all-night format. In the south, the Udupi Krishna Matha was founded in the 13th century by Madhvacharya, who installed a Krishna idol that he is said to have miraculously received from a shipwreck. Janmashtami there has been continuously observed for over 700 years.",
    rituals: [
      "Devotees observe a strict day-long fast (no food, sometimes no water) until midnight.",
      "A small Krishna idol is bathed (Krishna abhishekam) and dressed in fresh yellow silk at sunset.",
      "Children draw tiny baby footprints in rice flour from the doorstep to the puja room — symbolising Krishna's entry.",
      "At midnight precisely, conch shells are blown and arati is performed; the fast is broken with the first prasadam.",
      "Dahi Handi: in some communities, a clay pot of buttermilk is hung high and a human pyramid breaks it open — re-enacting Krishna's makhan-chor (butter-thief) episodes.",
    ],
    foods: [
      "Aval (poha) — flattened rice with jaggery, ghee and grated coconut; Krishna's favourite offering.",
      "Seedai — Tamil-style fried rice-flour balls.",
      "Murukku — fried rice-flour spirals, particular to Janmashtami.",
      "Vella aval — sweet poha with jaggery.",
      "Panchamruta — five-ingredient sweet (milk, curd, ghee, honey, sugar).",
    ],
    whatToExpect:
      "Udupi Krishna Matha is the most beautiful place to be — the temple's traditional 'window darshan' (Krishna is viewed through a small barred window) becomes especially atmospheric on Janmashtami night. Guruvayur draws 500,000+ pilgrims. ISKCON temples in Bengaluru, Chennai and Hyderabad host all-night kirtans with thousands of devotees singing through the night. The midnight moment of Krishna's birth is the climax everywhere. Modest dress required.",
  },
  {
    slug: "independence-day-2026",
    kind: "event",
    name: "Independence Day",
    dateLabel: "15 Aug",
    startDate: "2026-08-15",
    endDate: "2026-08-15",
    months: ["August"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["National & Civic"],
    image: IMG.cultural,
    shortBlurb: "Flag hoistings, parades, sweets in every school.",
    description:
      "The day begins with the tricolour being raised at every public building, school and railway station. State capitals hold parades and the chief ministers address the public. Patriotic film songs play on every loudspeaker.",
    significance:
      "Marks India’s independence from British rule on 15 August 1947.",
    bestPlaces: ["State capitals", "Red Fort (Delhi) telecasts"],
    history:
      "At the stroke of midnight on 15 August 1947, India became independent from 190 years of British rule. The date was chosen by Lord Mountbatten — the last Viceroy — to coincide with the 2nd anniversary of Japan's surrender. Jawaharlal Nehru delivered his famous 'Tryst with Destiny' speech in the Constituent Assembly that night. The Prime Minister has hoisted the tricolour from the ramparts of the Red Fort every 15 August since then. Each state government holds an equivalent ceremony at its state capital. The Independence Movement that culminated on this day spanned 90 years from the 1857 First War of Independence and involved leaders from every region of India.",
    rituals: [
      "Morning flag hoisting at every government building, school, college, railway station, port and airport.",
      "Schoolchildren parade in their uniforms; many receive Independence Day sweets.",
      "State CM addresses the public from the capital's main flagstaff.",
      "Patriotic film songs play on loudspeakers everywhere.",
      "The PM's Red Fort speech is broadcast live across all networks and government building courtyards.",
    ],
    foods: [
      "Jalebi-fafda — Gujarati-origin sweet now a national Independence Day breakfast.",
      "Tricolour rice — saffron, white and green rice layers.",
      "Mango halwa — saffron-coloured halwa with cardamom.",
      "Filter coffee — the standard family breakfast accompaniment.",
      "Sweets distributed at every school — typically laddoos or kaju barfi.",
    ],
    whatToExpect:
      "Government buildings, monuments and major roads are draped in tricolour. State capitals — Chennai (Fort St George), Trivandrum (Raj Bhavan), Bengaluru (Manekshaw Parade Ground), Vijayawada (Indira Gandhi Stadium), Hyderabad (Public Gardens) — host the main parades. Most museums are free. A good day to visit any colonial-era fort. Mid-August is monsoon — events may move under cover at short notice.",
  },
  {
    slug: "eid-e-milad-2026",
    kind: "festival",
    name: "Eid-e-Milad (Mawlid)",
    dateLabel: "26 Aug",
    startDate: "2026-08-26",
    endDate: "2026-08-26",
    months: ["August"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "The Prophet’s birth — sermon and feast.",
    description:
      "Communities organise jaloos (processions) carrying green flags, with naat recitations and biryani feasts in the evening. Madrasas conduct day-long lectures on the Prophet’s teachings.",
    significance:
      "Sunni Muslims observe the day as the birth of Prophet Muhammad. Many Shia communities choose to mark the date with quieter prayer.",
    bestPlaces: ["Mecca Masjid Hyderabad", "Mangaluru Bunder", "Kozhikode Beypore"],
    history:
      "Eid-e-Milad-un-Nabi commemorates the birth of Prophet Muhammad on the 12th of Rabi-ul-Awwal (around 570 CE in Mecca). The formal observance began about 300 years after the Prophet's death — first instituted by the Fatimid dynasty in 11th-century Egypt, and brought to India by Sufi orders such as the Chishti and Qadiri in the 13th-14th centuries. The Mappila community of Kerala and the Beary community of coastal Karnataka, both with deep maritime trade roots to Arabia, have particularly rich Milad traditions including all-night Mawlid recitations (rhythmic praise poetry) and elaborate processional jaloos. Sunni Hanafi Muslims of Hyderabad observe the day with public processions; some stricter Sunni groups consider it innovation and avoid public celebration.",
    rituals: [
      "Mosques are decorated with green flags and string lights.",
      "Pre-dawn prayer is offered with extended naat (praise of the Prophet) recitation.",
      "Public jaloos (processions) wind through Muslim neighbourhoods carrying green flags and replicas of the Prophet's sandal.",
      "Madrasas conduct day-long sira (life of the Prophet) lectures and quiz competitions for children.",
      "Evening biryani feasts hosted by mosque committees, open to all.",
    ],
    foods: [
      "Mappila biryani — Kerala Muslim biryani with shorter-grain rice, the Milad signature in Kerala.",
      "Sheer-khurma — vermicelli-milk dessert.",
      "Mutton korma — slow-cooked spiced mutton in cashew gravy.",
      "Beary biryani — coastal Karnataka Muslim biryani, particular to Mangaluru.",
      "Halwa — semolina or carrot halwa, distributed as a sweet offering.",
    ],
    whatToExpect:
      "Hyderabad's Charminar area sees the largest jaloos with green flags streaming and naat recitations on loudspeakers. Mangaluru's Bunder area and Kozhikode's Beypore are also significant centres. The jaloos typically begin late evening (8 p.m.) and continue till midnight. Modest dress recommended; non-Muslims are welcome to observe respectfully.",
  },
  {
    slug: "vinayaka-chaturthi-pan-2026",
    kind: "festival",
    name: "Ganesh Chaturthi (Pan-India)",
    dateLabel: "14 Sep",
    startDate: "2026-09-14",
    endDate: "2026-09-23",
    months: ["September"],
    states: ["karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual", "Cultural & Folk"],
    image: IMG.diyas,
    shortBlurb: "Ten days of community Ganesha pandals.",
    description:
      "Beyond the household idols of Tamil Nadu, Karnataka and the Telugu states host enormous community pandals lasting ten days. Hyderabad’s Khairatabad Ganesh stands over 70 feet tall. Final immersion at Tank Bund is a city-wide event.",
    significance:
      "The community pandal tradition began in 1893 in Pune and spread south. Khairatabad has been an annual feature since 1954.",
    bestPlaces: ["Khairatabad Hyderabad", "Bengaluru pandals", "Vijayawada Tank Bund"],
    history:
      "Public Ganesh Chaturthi celebrations were popularised by Lokmanya Bal Gangadhar Tilak in 1893 in Pune as a means to mobilise public opinion against British rule under the cover of religious gathering. The community pandal format — large temporary structures housing tall Ganesha idols for 10 days of free public viewing — spread south through Maharashtra-influenced cities. Khairatabad in Hyderabad began its annual community Ganesha in 1954; the idol has grown each year and now stands over 70 feet tall, making it among the tallest Ganesha installations in India. Vijayawada's Tank Bund immersion is similarly large-scale. Karnataka adopted the public pandal earlier, around the 1900s, particularly in Belagavi and Hubballi where the Marathi cultural influence remained strong.",
    rituals: [
      "Idol installation (Pranapratishtha) on Chaturthi morning — community priests invoke Ganesha into the clay idol.",
      "Daily aarti morning and evening for the 10 days; modak and laddoos are offered.",
      "Many pandals feature live music, dance and devotional discourses each evening.",
      "Immersion procession (Visarjan) on the final day — Anant Chaturdashi — with thousands accompanying the idol to the lake.",
      "Khairatabad's 70-foot idol is moved with a giant crane; the procession takes 8-10 hours.",
    ],
    foods: [
      "Modakam / Modak — steamed rice-flour dumplings with jaggery-coconut filling; Ganesha's favourite.",
      "Sundal — boiled chickpeas tempered with mustard and coconut.",
      "Laddoo — both motichoor (saffron-pearl) and besan (gram flour) varieties.",
      "Kozhukattai — savoury version of modakam with urad-dal filling.",
      "Appam — sweet fried wheat-flour cakes.",
    ],
    whatToExpect:
      "Khairatabad Ganesh in Hyderabad is the must-see — the 70+ foot idol fills an entire intersection. Visit on weekdays for less crowding. The immersion day (Anant Chaturdashi) at Tank Bund / Hussain Sagar in Hyderabad is essentially a city-wide procession; the lake fills with thousands of idols by midnight. Bengaluru's Basavanagudi and Vijayawada's One-Town areas are also notable. Use natural-clay idols; avoid painted plaster-of-paris ones.",
  },
  {
    slug: "gandhi-jayanti-2026",
    kind: "event",
    name: "Gandhi Jayanti",
    dateLabel: "2 Oct",
    startDate: "2026-10-02",
    endDate: "2026-10-02",
    months: ["October"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["National & Civic"],
    image: IMG.cultural,
    shortBlurb: "Spinning wheel demonstrations, prayer meetings.",
    description:
      "Public buildings observe a moment of silence at 11 am. Khadi Bhandars run sales of handspun cloth. Madurai’s Gandhi Memorial Museum and Trivandrum’s Gandhi Bhavan host all-day prayer meetings.",
    significance:
      "Mahatma Gandhi’s birth anniversary, declared by the UN as the International Day of Non-Violence.",
    bestPlaces: ["Madurai Gandhi Memorial Museum", "Trivandrum Gandhi Bhavan"],
    history:
      "Mohandas Karamchand Gandhi was born in Porbandar, Gujarat, on 2 October 1869. He led the Indian Independence Movement against British rule through non-violent civil disobedience over four decades (1915-1948). On 30 January 1948, he was assassinated by Nathuram Godse at Birla House, Delhi. His birth anniversary has been observed as a national holiday since 1948; the United Nations declared it the International Day of Non-Violence in 2007. South India has strong Gandhian institutional memory — Madurai (where Gandhi adopted the dhoti in 1921), Sevagram-style ashrams in Trivandrum, the Khadi Bhandar network across all five states, and the Madurai Gandhi Memorial Museum, which holds the blood-stained dhoti Gandhi wore when assassinated.",
    rituals: [
      "Public buildings observe a moment of silence at 11 a.m.",
      "Khadi Bhandars run discount sales of handspun cloth (typically 25-30% off).",
      "All-day prayer meetings at Gandhi memorial sites; bhajans 'Raghupati Raghava Raja Ram' and 'Vaishnava Jana To' are sung.",
      "Schools host essay and elocution competitions on Gandhian values.",
      "Many municipalities organise a 'Swachh Bharat' (clean-India) drive in honour of Gandhi's hygiene principles.",
    ],
    foods: [
      "Gandhi observed strict vegetarianism — no festive feast is associated; instead simple meals are preferred.",
      "Goat-milk and dates — Gandhi's standard diet, often distributed at memorial events.",
      "Khichdi — rice and lentil porridge, a Gandhian staple.",
      "Rotis and vegetable curry — the standard ashram meal.",
      "Buttermilk — replacing soft drinks at memorial events.",
    ],
    whatToExpect:
      "Madurai's Gandhi Memorial Museum (in the old Rani Mangammal Palace) is the must-visit — the blood-stained dhoti Gandhi wore on his death day is displayed. Trivandrum's Gandhi Bhavan holds open prayer meetings. Most museums are free for the day. Many restaurants observe a 'dry' day (no alcohol). Khadi Bhandar sales are good for shopping in Khadi-cotton clothing.",
  },
  {
    slug: "diwali-2026",
    kind: "festival",
    name: "Diwali / Deepavali",
    dateLabel: "8 Nov",
    startDate: "2026-11-08",
    endDate: "2026-11-08",
    months: ["November"],
    states: ["tamil-nadu", "kerala", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual", "Cultural & Folk", "Food & Cuisine"],
    image: IMG.diyas,
    shortBlurb: "Pre-dawn oil bath, sweets, lamps and crackers.",
    description:
      "South Indian Diwali is observed earliest in the morning — families take the ganga snanam oil bath before sunrise, wear new clothes and open boxes of murukku, athirasam and Mysore pak. Crackers go off at first light.",
    significance:
      "Tamil Diwali commemorates Krishna’s defeat of Narakasura. Each region in South India observes the day with slightly different rituals, all centred on light overcoming darkness.",
    bestPlaces: ["Across the south — Madurai, Bengaluru, Hyderabad, Trivandrum"],
    history:
      "South Indian Diwali (Deepavali) is conceptually distinct from the North Indian version. In the south, the festival commemorates Krishna's slaying of the demon Narakasura at Pragjyotishpur (modern Assam), the previous day — the day of Narakasura's death is called Naraka Chaturdashi and is observed as the main festival day. The North Indian Diwali, by contrast, marks Rama's return to Ayodhya. Both legends converge around light overcoming darkness. Tamil Nadu's tradition of the pre-dawn 'Ganga snanam' (oil bath) traces to a Bhagavata Purana verse describing Krishna's bath after slaying Narakasura. Karnataka and Andhra observe a hybrid of north-and-south traditions over three days.",
    rituals: [
      "Pre-dawn (around 4 a.m.): a ritual oil bath with gingelly oil massage, then a hot bath — known as Ganga Snanam.",
      "New clothes are worn after the bath; elders bless the younger members.",
      "First sweets and savouries of the day are eaten before sunrise; firecrackers light up the still-dark sky.",
      "A puja at the home altar follows breakfast; the diya (oil lamp) is lit and Lakshmi is invoked.",
      "Diya rows are lit at every doorstep, window and balcony at dusk.",
    ],
    foods: [
      "Murukku — fried rice-flour spirals, the Diwali centrepiece savoury.",
      "Athirasam — fried rice-flour-jaggery sweet, particular to Tamil Diwali.",
      "Mysore Pak — Karnataka's signature ghee-fudge sweet.",
      "Boondi laddoo — saffron-tinted gram-flour pearl sweet.",
      "Adhirasam, Thattai, Ribbon Pakoda — the four-savoury Tamil Diwali platter.",
    ],
    whatToExpect:
      "South Indian Diwali peaks before sunrise — by 7 a.m. most of the firecracker noise is done and families are at home with sweets and breakfast. The North-Indian-style night-time crackers are common in Bengaluru and Hyderabad's apartment complexes. Visit a Tamil household at 5 a.m. on Diwali if invited — the pre-dawn oil-bath ritual is unforgettable. Most temples are crowded; air pollution from crackers can spike. Use minimal crackers if you can.",
  },
  {
    slug: "guru-nanak-jayanti-2026",
    kind: "festival",
    name: "Guru Nanak Jayanti",
    dateLabel: "24 Nov",
    startDate: "2026-11-24",
    endDate: "2026-11-24",
    months: ["November"],
    states: ["karnataka", "andhra-pradesh", "telangana", "tamil-nadu", "kerala"],
    interests: ["Religious & Spiritual"],
    image: IMG.cultural,
    shortBlurb: "Akhand Path and langar at the Gurdwaras.",
    description:
      "Sikh communities of Bengaluru, Hyderabad and Chennai conduct a 48-hour continuous reading of the Guru Granth Sahib. A langar (community meal) is served free to anyone who enters the Gurdwara, regardless of faith.",
    significance:
      "Marks the birth of Guru Nanak Dev, the founder of Sikhism.",
    bestPlaces: ["Gurdwara Sahib Ulsoor Bengaluru", "Ameerpet Gurdwara Hyderabad", "Gurdwara Sahib T Nagar Chennai"],
    history:
      "Guru Nanak Dev (1469-1539), the founder of Sikhism, was born in Talwandi (now Nankana Sahib, Pakistan). His birth is celebrated on the Kartik Pournami full moon, traditionally dated to 15 April 1469 in the Western calendar but observed on the lunar date that varies year to year. Guru Nanak made four major travels (Udasis) during which he visited South India — Kerala's Kanyakumari, Sri Lanka and the Sangam region. The Sikh population in South India dates mostly to post-1947 Partition migrations and post-independence military and corporate postings. Bengaluru's Gurdwara Sri Guru Singh Sabha (Ulsoor), established in 1955, is among the oldest South Indian gurdwaras.",
    rituals: [
      "Day 1 (48 hours before): an Akhand Path begins — a continuous, uninterrupted reading of the Guru Granth Sahib by relays of readers.",
      "Day 2: Nagar Kirtan — a procession led by the Panj Pyare (five baptised Sikhs) carrying the Guru Granth Sahib in a flower-decorated palanquin.",
      "Day 3 (the Gurpurab itself): pre-dawn Asa di Var hymns at 4 a.m.; full-day kirtan (musical recitation of hymns).",
      "Langar (community kitchen) is served continuously through the three days — free meals to all visitors, regardless of faith.",
      "Evening: Rehraas Sahib prayer at sunset, followed by Ardas and Kirtan Sohila at bedtime.",
    ],
    foods: [
      "Langar — the free community meal: roti, dal, rajma, vegetable subzi, kheer, served on the floor in equality.",
      "Kada Prasad — a sweet of wheat flour, ghee and sugar, distributed at the gurdwara entrance.",
      "Punjabi tea (chai with milk and cardamom) — served continuously.",
      "Pinni — wheat-flour-and-ghee fudge.",
      "Jalebi — fried sugar-syrup spirals, served at the langar dessert.",
    ],
    whatToExpect:
      "Bengaluru's Ulsoor Gurdwara, Hyderabad's Ameerpet Gurdwara and Chennai's T. Nagar Gurdwara all welcome non-Sikh visitors warmly. Head covering (handkerchief is sufficient) and removed footwear are required. The langar is open to everyone; sit on the floor with the rest. Sikh hospitality is profound — guests are treated as part of the sangat (congregation).",
  },
  {
    slug: "christmas-2026",
    kind: "festival",
    name: "Christmas",
    dateLabel: "25 Dec",
    startDate: "2026-12-25",
    endDate: "2026-12-25",
    months: ["December"],
    states: ["kerala", "tamil-nadu", "karnataka", "andhra-pradesh", "telangana"],
    interests: ["Religious & Spiritual", "Cultural & Folk", "Food & Cuisine"],
    image: IMG.diyas,
    shortBlurb: "Midnight Mass at the old basilicas.",
    description:
      "Kerala’s Mar Thoma, Syriac and Latin churches all hold midnight Mass on Christmas Eve. Plum cake and kallappam are shared between neighbours. Goa-style cribs appear in many South Indian homes — a tradition that travelled with the Portuguese.",
    significance:
      "The arrival of Christianity in Kerala is traditionally dated to St Thomas in 52 CE, making the south’s Christmas one of the oldest unbroken observances anywhere outside Europe.",
    bestPlaces: ["San Thome Basilica Chennai", "Santa Cruz Basilica Fort Kochi", "Medak Cathedral"],
    history:
      "Christianity in South India predates Christianity in most of Europe. Tradition holds that St Thomas the Apostle landed at Kodungallur (Muziris) on the Malabar coast in 52 CE, founded seven churches and was martyred near Chennai at St Thomas Mount in 72 CE. The Mar Thoma Christians of Kerala are direct descendants of these communities. Portuguese, Dutch, French and British colonisation later brought Latin Rite Christianity to the coastlines: Goa, Fort Kochi, San Thome (Chennai), Pondicherry and the Anglican missions of inland Andhra-Telangana. Medak Cathedral, built by the British in 1924, is the largest Anglican church in India outside Kolkata. Each tradition observes Christmas distinctly — Kerala Syrian Christian midnight mass, Goan-Portuguese carols, Mappila Christian feast.",
    rituals: [
      "Advent (4 weeks before): wreaths with four candles are lit progressively each Sunday.",
      "Christmas Eve: midnight Mass at all churches; carol services start around 11 p.m. and end at 1 a.m.",
      "Christmas morning: family attends a morning Mass (around 7 a.m.); afterwards visiting and feasting begin.",
      "Goan-Portuguese tradition of the Christmas crib (presepio): a model of the Bethlehem nativity is set up at the home altar.",
      "Carol singers (often children's groups) visit homes through Advent week, singing in exchange for sweets and donations.",
    ],
    foods: [
      "Plum cake — fruit-and-nut Christmas cake soaked in brandy or rum; the Kerala specialty.",
      "Kerala Christian appam with mutton stew — the Christmas morning breakfast in Syrian Christian homes.",
      "Karimeen pollichathu — pearl-spot fish baked in banana leaf.",
      "Vindaloo (Goan style) — pork in vinegar-chilli marinade.",
      "Kuzhalappam — fried rice-flour cones, a Kerala Christian Christmas snack.",
    ],
    whatToExpect:
      "Fort Kochi is the most atmospheric place — Portuguese-built Santa Cruz Basilica and St Francis Church (where Vasco da Gama was originally buried) glow with carol singing. Chennai's San Thome Basilica (built over St Thomas's tomb) holds midnight Mass in five languages. Medak Cathedral in Telangana — the largest church in South Asia — is spectacular at midnight. Goan-style Catholic households welcome guests warmly through Christmas Day; ask at heritage homestays. Plum cake is ubiquitous.",
  },
];

export function getCelebrationBySlug(slug: string): Celebration | undefined {
  return CELEBRATIONS.find((c) => c.slug === slug);
}
