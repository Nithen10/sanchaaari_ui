import type { StateSlug } from "./states";

export type TempleBadge =
  | "UNESCO"
  | "Jyotirlinga"
  | "Pancha Bhoota"
  | "Navagraha"
  | "Divya Desam"
  | "Char Dham South"
  | "Shakti Peetha"
  | "Ancient"
  | "Senior-Darshan";

export interface Temple {
  slug: string;
  name: string;
  deity: string;
  state: StateSlug;
  city: string;
  significance: string;
  history: string;
  architecture: string;
  culturalNotes?: string;
  whatToExpect?: string;
  timings: { darshan: string; abhishekam?: string };
  dressCode: string;
  photographyPolicy: string;
  accessibility: {
    steps: number;
    wheelchair: boolean;
    lift: boolean;
    seniorDarshan: boolean;
    restrooms: boolean;
    parkingDistanceM: number;
  };
  festivals: { name: string; months: string }[];
  images: string[];
  mapImage?: string;
  badges: TempleBadge[];
  nearbyTempleSlugs: string[];
}

export const TEMPLES: Temple[] = [
  {
    slug: "meenakshi-amman",
    name: "Meenakshi Amman Temple",
    deity: "Goddess Meenakshi & Lord Sundareswarar",
    state: "tamil-nadu",
    city: "Madurai",
    significance:
      "One of the most celebrated Shakti shrines, dedicated to the warrior-queen form of Parvati. The temple's 14 gopurams enclose a city within a city, with markets, halls and sanctums that have hosted continuous worship for over two millennia.",
    history:
      "Founded in the 6th century BCE and rebuilt by the Nayak rulers in the 16th–17th century, the present structure is a culmination of Pandyan, Vijayanagara and Madurai Nayak patronage.",
    architecture:
      "Twin sanctums to Meenakshi and Sundareswarar surrounded by the Pottramarai tank. The 1,000-pillared hall houses the famed musical pillars; the gopurams rise to nearly 170 feet, each panel densely sculpted.",
    culturalNotes:
      "Meenakshi is the warrior-queen form of Parvati who, in legend, ruled Madurai before her wedding to Shiva. The annual Chithirai festival re-enacts that wedding across an entire month, drawing pilgrims from every Tamil district. The temple is also one of the few in India where the goddess sanctum is more prominent than the god's, which itself tells you something about the spirit of the place.",
    whatToExpect:
      "Weekday mornings are the calmest, with darshan typically taking 45 minutes from queue to exit. On weekends and Tuesdays (the goddess day), expect a one to two hour wait. Photography is not permitted in the inner prakaram. Wear traditional attire to avoid being turned away. Our team books senior-darshan slots wherever possible.",
    timings: { darshan: "5:00 AM – 12:30 PM, 4:00 PM – 9:30 PM", abhishekam: "5:30 AM" },
    dressCode: "Traditional Indian wear preferred. Shorts and sleeveless tops not permitted.",
    photographyPolicy: "Cameras and mobile phones not allowed inside the inner prakaram.",
    accessibility: { steps: 12, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 180 },
    festivals: [
      { name: "Chithirai Tiruvizha", months: "April – May" },
      { name: "Avani Moolam", months: "August – September" },
    ],
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Shakti Peetha", "Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["rameshwaram", "thanjavur-brihadeeswarar"],
  },
  {
    slug: "thanjavur-brihadeeswarar",
    name: "Brihadeeswarar Temple",
    deity: "Lord Shiva (Peruvudaiyar)",
    state: "tamil-nadu",
    city: "Thanjavur",
    significance:
      "The pinnacle of Chola temple-building. Its 216-foot vimana was the tallest in the world when consecrated in 1010 CE, crowned by an 80-tonne monolithic capstone.",
    history:
      "Commissioned by Rajaraja Chola I and completed in 1010 CE. A UNESCO World Heritage Site as part of the Great Living Chola Temples.",
    architecture:
      "Granite walls inscribed with land grants and ritual rules, frescoes hidden in inner ambulatories, a 25-tonne Nandi facing the sanctum, and a vimana that tapers with mathematical precision.",
    culturalNotes:
      "Brihadeeswarar is the high-water mark of South-Indian architecture. The vimana rose 216 feet in 1010 CE, taller than anything else in the world at that time. The temple itself was a statement: Rajaraja Chola wanted future generations to know what his dynasty had built. The inscriptions on the outer walls record every grant of land, every ritual instruction, every name of every dancer who served the temple. It is a living archive.",
    whatToExpect:
      "Crowds are manageable on weekdays. Mornings between 7 and 9 are particularly serene. The Saturday twilight abhishekam is the temple's most atmospheric hour, when locals gather for the dipping of the lingam in milk and rosewater. Photography is permitted in the outer courtyard but not inside the sanctum.",
    timings: { darshan: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM" },
    dressCode: "Modest attire required.",
    photographyPolicy: "Outdoor photography allowed; no photography inside the sanctum.",
    accessibility: { steps: 6, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 220 },
    festivals: [{ name: "Sadayam (Rajaraja's birth star)", months: "October – November" }],
    images: [
      "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["UNESCO", "Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["meenakshi-amman", "rameshwaram"],
  },
  {
    slug: "rameshwaram",
    name: "Ramanathaswamy Temple",
    deity: "Lord Shiva (Ramanathaswamy)",
    state: "tamil-nadu",
    city: "Rameshwaram",
    significance:
      "One of the twelve Jyotirlingas and a stop on the Char Dham circuit. Tradition holds that Sri Rama himself consecrated the lingam after the Lanka expedition.",
    history:
      "The current structure was developed between the 12th and 17th centuries under multiple dynasties including the Pandyas and Sethupathis.",
    architecture:
      "Famed for its 1,200-metre temple corridor (the longest of any Hindu temple), lined with intricately carved pillars and 22 sacred tirthams (wells) where pilgrims bathe.",
    timings: { darshan: "5:00 AM – 1:00 PM, 3:00 PM – 9:00 PM" },
    dressCode: "Dhoti for men inside the inner sanctum; traditional wear for women.",
    photographyPolicy: "No photography inside the temple.",
    accessibility: { steps: 4, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 120 },
    festivals: [
      { name: "Maha Shivaratri", months: "February – March" },
      { name: "Thirukalyanam", months: "May – June" },
    ],
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Jyotirlinga", "Char Dham South", "Senior-Darshan"],
    nearbyTempleSlugs: ["meenakshi-amman", "thanjavur-brihadeeswarar"],
  },
  {
    slug: "padmanabhaswamy",
    name: "Sree Padmanabhaswamy Temple",
    deity: "Lord Vishnu (Anantha Padmanabha)",
    state: "kerala",
    city: "Thiruvananthapuram",
    significance:
      "The reclining Vishnu shrine, one of the 108 Divya Desams, and the spiritual heart of Kerala's royal Travancore dynasty.",
    history:
      "References to the temple appear in 6th–9th century Tamil Sangam literature. The present gopuram dates to the 16th century, expanded under Maharaja Marthanda Varma.",
    architecture:
      "A fusion of Kerala and Dravidian styles, with a seven-storey gopuram, polished granite floors and the celebrated 18-foot reclining idol viewable through three doors.",
    culturalNotes:
      "The reclining Vishnu of Padmanabhaswamy is the divinity behind the Travancore royal house. For centuries the kings of Travancore ruled as dasas, servants of the deity, with the throne formally belonging to Padmanabha. The temple's underground vaults, opened only in 2011, were found to contain among the largest discoveries of treasure in modern history.",
    whatToExpect:
      "The dress code is strict and enforced: dhoti for men with no shirt inside the sanctum, sari or mundu for women. Non-Hindus may not enter. Phones and cameras are not allowed and must be checked in. Senior-citizen darshan is available with a small fee. Plan two hours including queues even on a calm day.",
    timings: { darshan: "3:30 AM – 7:30 PM (split sessions)" },
    dressCode: "Strict: dhoti for men, sari or mundu for women. Non-Hindus may not enter the sanctum.",
    photographyPolicy: "No cameras, mobile phones, or electronic devices.",
    accessibility: { steps: 9, wheelchair: false, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 200 },
    festivals: [
      { name: "Painkuni Utsavam", months: "March – April" },
      { name: "Alpashy Utsavam", months: "October – November" },
    ],
    images: [
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Divya Desam", "Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["guruvayur", "sabarimala"],
  },
  {
    slug: "guruvayur",
    name: "Guruvayur Sri Krishna Temple",
    deity: "Lord Krishna (Guruvayoorappan)",
    state: "kerala",
    city: "Guruvayur, Thrissur",
    significance:
      "Often called the 'Bhuloka Vaikuntha' (heaven on earth), this is among the most visited Krishna shrines in India.",
    history:
      "Mythologically the idol is older than the deluge; the temple in its present form was rebuilt after a fire in 1970.",
    architecture:
      "Classical Kerala style with sloping copper roofs, wood carvings and a square sanctum surrounded by stone walkways.",
    timings: { darshan: "3:00 AM – 1:00 PM, 4:30 PM – 9:30 PM" },
    dressCode: "Mundu (dhoti) without shirt for men; saris or set-mundu for women.",
    photographyPolicy: "Photography not permitted inside.",
    accessibility: { steps: 5, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 150 },
    festivals: [
      { name: "Ulsavam", months: "February – March" },
      { name: "Ashtami Rohini", months: "August – September" },
    ],
    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["padmanabhaswamy", "sabarimala"],
  },
  {
    slug: "sabarimala",
    name: "Sabarimala Sastha Temple",
    deity: "Lord Ayyappa",
    state: "kerala",
    city: "Pathanamthitta",
    significance:
      "A forest-set shrine reached by foot through the Periyar tiger reserve. One of the largest annual pilgrimages in the world.",
    history:
      "Believed to be over a thousand years old, the present structure was rebuilt after a 1950 fire.",
    architecture:
      "A modest sanctum at the top of 18 sacred steps (Pathinettam Padi), set within dense forest.",
    timings: { darshan: "Seasonal: Mandala Pooja (Nov–Jan), Makaravilakku (Jan), Vishu (April)" },
    dressCode: "Black or blue dhoti, no footwear during the climb.",
    photographyPolicy: "No photography within the temple precincts.",
    accessibility: { steps: 18, wheelchair: false, lift: false, seniorDarshan: false, restrooms: true, parkingDistanceM: 4500 },
    festivals: [
      { name: "Mandala Pooja", months: "November – January" },
      { name: "Makaravilakku", months: "January" },
    ],
    images: [
      "https://images.unsplash.com/photo-1567010807122-b0db7dd45a4f?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Ancient"],
    nearbyTempleSlugs: ["padmanabhaswamy", "guruvayur"],
  },
  {
    slug: "murudeshwar",
    name: "Murudeshwar Temple",
    deity: "Lord Shiva",
    state: "karnataka",
    city: "Bhatkal coast",
    significance:
      "Set on a headland into the Arabian Sea, dominated by a 123-foot Shiva statue, the world's second-tallest.",
    history:
      "The original shrine is ancient; the modern statue and 20-storey gopura were completed in the early 2000s under R N Shetty's patronage.",
    architecture:
      "A blend of antique sanctum and grand modern additions. The long entrance corridor leads to an elevator that lifts visitors to the gopuram viewing platform.",
    culturalNotes:
      "Murudeshwar is one of the youngest landmarks on the Karnataka coast. The 123-foot Shiva statue was completed in 2008 under the patronage of R N Shetty, a local businessman who funded the entire complex. While the modern Murudeshwar can feel theme-park scaled, the ancient sanctum at its core has been continuously worshipped for several centuries.",
    whatToExpect:
      "The headland setting is dramatic, especially at sunset when light catches the statue. The elevator inside the 20-storey gopuram (small fee) takes you to a viewing platform overlooking the sea. Wheelchair access is excellent here, better than most coastal Karnataka temples. Expect crowds on weekends.",
    timings: { darshan: "6:00 AM – 1:00 PM, 3:00 PM – 8:30 PM" },
    dressCode: "Modest attire.",
    photographyPolicy: "Photography permitted in outer areas.",
    accessibility: { steps: 0, wheelchair: true, lift: true, seniorDarshan: true, restrooms: true, parkingDistanceM: 80 },
    festivals: [{ name: "Maha Shivaratri", months: "February – March" }],
    images: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Senior-Darshan"],
    nearbyTempleSlugs: ["gokarna", "udupi-krishna"],
  },
  {
    slug: "gokarna",
    name: "Mahabaleshwar Temple, Gokarna",
    deity: "Lord Shiva (Atmalinga)",
    state: "karnataka",
    city: "Gokarna",
    significance:
      "Home of the Atmalinga, one of the most sacred Shaiva pilgrimage centres on the western coast.",
    history:
      "Mentions in the Ramayana and Mahabharata; the present structure draws on 4th-century roots.",
    architecture:
      "Classical Dravidian, with a stone-paved courtyard and a square sanctum facing the sea.",
    timings: { darshan: "5:00 AM – 12:30 PM, 5:00 PM – 8:30 PM" },
    dressCode: "Men remove shirts inside the sanctum; women wear traditional dress.",
    photographyPolicy: "Photography prohibited within.",
    accessibility: { steps: 7, wheelchair: false, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 250 },
    festivals: [{ name: "Maha Shivaratri", months: "February – March" }],
    images: [
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["murudeshwar", "udupi-krishna"],
  },
  {
    slug: "udupi-krishna",
    name: "Udupi Sri Krishna Matha",
    deity: "Lord Krishna",
    state: "karnataka",
    city: "Udupi",
    significance:
      "Founded by the philosopher-saint Madhvacharya in the 13th century, famous for the unique darshan through a nine-holed silver window (Navagraha Kindi).",
    history:
      "Established c. 1238 CE; pontificate rotates between the eight Ashtamathas.",
    architecture:
      "A compact Tulu-style shrine with a colonnaded mandapa and the unique kanakana-kindi window.",
    timings: { darshan: "4:30 AM – 1:30 PM, 3:00 PM – 9:00 PM" },
    dressCode: "Traditional attire; men remove shirts inside.",
    photographyPolicy: "Not permitted in the sanctum.",
    accessibility: { steps: 3, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 90 },
    festivals: [
      { name: "Paryaya", months: "January (biennial)" },
      { name: "Krishna Janmashtami", months: "August – September" },
    ],
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Senior-Darshan"],
    nearbyTempleSlugs: ["murudeshwar", "gokarna"],
  },
  {
    slug: "tirumala-tirupati",
    name: "Sri Venkateswara Temple, Tirumala",
    deity: "Lord Venkateswara (Balaji)",
    state: "andhra-pradesh",
    city: "Tirumala",
    significance:
      "The most-visited shrine on earth, drawing tens of millions annually to the seven sacred hills.",
    history:
      "Mentioned in Sangam-era Tamil texts; expanded by the Pallavas, Cholas and Vijayanagara emperors. The temple administration runs hundreds of devotional and welfare institutions.",
    architecture:
      "Dravidian architecture inside a granite-walled hill complex. The Ananda Nilayam vimana above the sanctum is plated in gold.",
    culturalNotes:
      "Tirumala is the world's most-visited shrine, attended by an average of 75,000 pilgrims a day and many times that on festivals. The temple administration runs hospitals, schools and shelters across India. Sponsoring an archana here is a milestone in the lives of millions of South Indian families. The hair-tonsuring tradition draws devotees who offer their hair as a sign of surrender.",
    whatToExpect:
      "Plan an overnight at the hill. Sarva Darshan slots run through the night to manage the volume. Senior-darshan via the Divyanga / Senior-Citizen gate is available with prior booking, which our team handles. Dress code is strict: traditional Indian wear, no leather. Cameras and phones are confiscated at security.",
    timings: { darshan: "Multiple slots through 24 hours; book Sarva Darshan in advance." },
    dressCode: "Traditional attire required: dhoti / sari / kurta-pyjama.",
    photographyPolicy: "No mobile phones or cameras inside.",
    accessibility: { steps: 10, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 350 },
    festivals: [{ name: "Brahmotsavam", months: "September – October" }],
    images: ["/images/tirupati-temple.png"],
    badges: ["Divya Desam", "Senior-Darshan"],
    nearbyTempleSlugs: ["srisailam-mallikarjuna", "lepakshi"],
  },
  {
    slug: "srisailam-mallikarjuna",
    name: "Mallikarjuna Jyotirlinga, Srisailam",
    deity: "Lord Shiva (Mallikarjuna) & Goddess Bhramaramba",
    state: "andhra-pradesh",
    city: "Srisailam",
    significance:
      "A rare site where a Jyotirlinga and a Shakti Peetha co-exist within the same complex, deep in the Nallamala forest.",
    history:
      "References in the Skanda Purana; the present mandapas were extended under Vijayanagara patronage.",
    architecture:
      "Massive prakara walls covered with bas-reliefs of Shaiva legends; a granite sanctum oriented to the Krishna river gorge.",
    timings: { darshan: "4:30 AM – 1:00 PM, 6:30 PM – 10:00 PM" },
    dressCode: "Traditional Indian wear preferred.",
    photographyPolicy: "Not permitted inside.",
    accessibility: { steps: 14, wheelchair: false, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 280 },
    festivals: [{ name: "Maha Shivaratri", months: "February – March" }],
    images: [
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Jyotirlinga", "Shakti Peetha", "Senior-Darshan"],
    nearbyTempleSlugs: ["tirumala-tirupati", "lepakshi"],
  },
  {
    slug: "lepakshi",
    name: "Veerabhadra Temple, Lepakshi",
    deity: "Lord Veerabhadra",
    state: "andhra-pradesh",
    city: "Lepakshi",
    significance:
      "A masterpiece of Vijayanagara mural painting, with a famous hanging pillar that barely touches the floor.",
    history:
      "Built in 1530 CE by brothers Virupanna and Veeranna under Achyuta Deva Raya of Vijayanagara.",
    architecture:
      "Granite pillared halls under a single rock outcrop, painted ceilings rich with the Shiva-Parvati Kalyanam, and a monolithic Nandi 4.5m tall outside.",
    timings: { darshan: "6:00 AM – 6:00 PM" },
    dressCode: "Modest attire.",
    photographyPolicy: "Permitted in most outer areas.",
    accessibility: { steps: 5, wheelchair: true, lift: false, seniorDarshan: false, restrooms: true, parkingDistanceM: 60 },
    festivals: [{ name: "Maha Shivaratri", months: "February – March" }],
    images: [
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Ancient"],
    nearbyTempleSlugs: ["tirumala-tirupati", "srisailam-mallikarjuna"],
  },
  {
    slug: "ramappa",
    name: "Ramappa Temple",
    deity: "Lord Shiva (Ramalingeswara)",
    state: "telangana",
    city: "Palampet, Mulugu",
    significance:
      "A UNESCO World Heritage Site celebrated for its floating bricks and impossibly thin musical pillars.",
    history:
      "Built in 1213 CE under the Kakatiya general Recharla Rudra; consecrated by Ganapati Deva.",
    architecture:
      "Star-shaped platform, dolerite carvings, and the only known temple named for its sculptor (Ramappa).",
    timings: { darshan: "6:00 AM – 6:00 PM" },
    dressCode: "Modest attire.",
    photographyPolicy: "Permitted outside the sanctum.",
    accessibility: { steps: 6, wheelchair: true, lift: false, seniorDarshan: false, restrooms: true, parkingDistanceM: 100 },
    festivals: [{ name: "Maha Shivaratri", months: "February – March" }],
    images: ["/images/ramappa-temple.png"],
    badges: ["UNESCO", "Ancient"],
    nearbyTempleSlugs: ["yadadri", "bhadrachalam"],
  },
  {
    slug: "yadadri",
    name: "Yadadri Lakshmi Narasimha Temple",
    deity: "Lord Lakshmi Narasimha",
    state: "telangana",
    city: "Yadadri-Bhuvanagiri",
    significance:
      "A hilltop Narasimha shrine recently rebuilt entirely in stone. It is the largest contemporary temple reconstruction in India.",
    history:
      "Ancient origins linked to the sage Yadava Rishi; reconstructed 2016–2022.",
    architecture:
      "A fully stone Dravidian-style temple with vimanas, rajagopuram and intricate parikrama corridors.",
    timings: { darshan: "4:00 AM – 12:00 PM, 4:00 PM – 9:00 PM" },
    dressCode: "Traditional attire.",
    photographyPolicy: "Not permitted in the sanctum.",
    accessibility: { steps: 8, wheelchair: true, lift: true, seniorDarshan: true, restrooms: true, parkingDistanceM: 200 },
    festivals: [{ name: "Narasimha Jayanti", months: "May" }],
    images: [
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Senior-Darshan"],
    nearbyTempleSlugs: ["ramappa", "bhadrachalam"],
  },
  {
    slug: "bhadrachalam",
    name: "Sri Sita Ramachandraswamy Temple, Bhadrachalam",
    deity: "Lord Rama, Sita & Lakshmana",
    state: "telangana",
    city: "Bhadrachalam",
    significance:
      "The most sacred Rama shrine in South India, set on the banks of the Godavari.",
    history:
      "Built in the 17th century by Kancherla Gopanna (Bhakta Ramadasu) under questionable royal sanction, a story now central to the temple's devotional life.",
    architecture:
      "A hilltop sanctum with riverfront ghats and a celebrated kalyanam mantapa used during Sri Rama Navami.",
    timings: { darshan: "4:30 AM – 1:00 PM, 3:00 PM – 9:00 PM" },
    dressCode: "Traditional attire.",
    photographyPolicy: "Not permitted in the sanctum.",
    accessibility: { steps: 6, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 120 },
    festivals: [{ name: "Sri Rama Navami Kalyanam", months: "March – April" }],
    images: [
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Senior-Darshan"],
    nearbyTempleSlugs: ["yadadri", "ramappa"],
  },
  {
    slug: "chidambaram-nataraja",
    name: "Nataraja Temple, Chidambaram",
    deity: "Lord Shiva (Nataraja) & Goddess Sivakami",
    state: "tamil-nadu",
    city: "Chidambaram",
    significance:
      "One of the Pancha Bhoota Sthalams, representing the element of Akasha (sky / ether).",
    history:
      "Continuously rebuilt from the Chola era onward; the gold-roofed Chit Sabha houses the Akasha lingam.",
    architecture:
      "Famed for its bronze-roofed sanctum, sculpted Natya postures of the Natya Shastra, and four soaring gopurams aligned to the cardinal directions.",
    timings: { darshan: "6:00 AM – 12:00 PM, 5:00 PM – 10:00 PM" },
    dressCode: "Traditional attire.",
    photographyPolicy: "Outside areas only.",
    accessibility: { steps: 10, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 220 },
    festivals: [{ name: "Arudra Darshan", months: "December – January" }],
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Pancha Bhoota", "Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["thanjavur-brihadeeswarar", "kanchipuram-ekambareswarar"],
  },
  {
    slug: "kanchipuram-ekambareswarar",
    name: "Ekambareswarar Temple, Kanchipuram",
    deity: "Lord Shiva (Ekambranatha)",
    state: "tamil-nadu",
    city: "Kanchipuram",
    significance:
      "Represents the element of Earth (Prithvi) in the Pancha Bhoota Sthala lineage.",
    history:
      "Initial Pallava-era foundations were expanded under the Cholas and Vijayanagara emperors.",
    architecture:
      "A 1,000-pillared hall and an ancient mango tree said to be over 3,500 years old.",
    timings: { darshan: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM" },
    dressCode: "Traditional attire.",
    photographyPolicy: "Outside only.",
    accessibility: { steps: 4, wheelchair: true, lift: false, seniorDarshan: true, restrooms: true, parkingDistanceM: 150 },
    festivals: [{ name: "Panguni Uthiram", months: "March – April" }],
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85&auto=format&fit=crop",
    ],
    badges: ["Pancha Bhoota", "Ancient", "Senior-Darshan"],
    nearbyTempleSlugs: ["chidambaram-nataraja", "thanjavur-brihadeeswarar"],
  },
];

export function getTempleBySlug(slug: string): Temple | undefined {
  return TEMPLES.find((t) => t.slug === slug);
}

export function templesByState(state: StateSlug): Temple[] {
  return TEMPLES.filter((t) => t.state === state);
}
