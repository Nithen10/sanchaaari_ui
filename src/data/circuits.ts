import type { StateSlug } from "./states";

export interface Circuit {
  slug: string;
  name: string;
  theme: string;
  intro: string;
  story: string;
  traditions: string[];
  pacing: { comfortable: number; steady: number; express: number };
  templeSlugs: string[];
  suggestedDays: number;
  states: StateSlug[];
  heroImage: string;
}

export const CIRCUITS: Circuit[] = [
  {
    slug: "pancha-bhoota-sthalams",
    name: "Pancha Bhoota Sthalams",
    theme: "Five Shiva temples representing the five elements",
    intro:
      "Five ancient Shiva shrines, each enshrining one of the five great elements: earth at Kanchipuram, water at Tiruvanaikoil, fire at Tiruvannamalai, air at Srikalahasti, and ether at Chidambaram. A circuit that has shaped South-Indian temple worship for over a millennium.",
    story:
      "The five elements (earth, water, fire, air and ether) are believed to be the basic building blocks of all existence. The Pancha Bhoota Sthalams are the five Shiva temples that enshrine each of these elements in turn. They lie scattered across Tamil Nadu and southern Andhra Pradesh, and pilgrims who complete all five in sequence are said to harmonise the elements within themselves. The temples themselves are some of the oldest continuously worshipped sites in India.",
    traditions: [
      "Visit in the traditional order: Kanchipuram, Tiruvanaikoil, Tiruvannamalai, Srikalahasti, Chidambaram.",
      "At each temple, sponsor an archana to the elemental form of Shiva.",
      "Carry a small amount of water from the previous temple to be offered at the next.",
      "Maintain a simple sattvic diet through the journey.",
    ],
    pacing: { comfortable: 9, steady: 7, express: 5 },
    templeSlugs: [
      "kanchipuram-ekambareswarar",
      "chidambaram-nataraja",
    ],
    suggestedDays: 7,
    states: ["tamil-nadu", "andhra-pradesh"],
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
  },
  {
    slug: "char-dham-south",
    name: "South Char Dham",
    theme: "Four cardinal pilgrimages of the south",
    intro:
      "Rameshwaram in the east, Tirumala in the north, Madurai's Meenakshi in the south and Guruvayur in the west: four poles that frame any serious South-India pilgrimage.",
    story:
      "The Char Dham of North India (Yamunotri, Gangotri, Kedarnath, Badrinath) is well known. Far fewer people know that South India has its own four-corner pilgrimage. These four shrines mark the cardinal directions of the southern subcontinent. To visit all four is to draw a great cross across the south and complete one of the most demanding journeys a pilgrim can undertake.",
    traditions: [
      "Begin in the east at Rameshwaram with the sacred bath in the Agni Tirtham.",
      "Move clockwise: east to north to west to south.",
      "Carry sacred water from Rameshwaram to Tirupati and again from Tirupati to Guruvayur.",
      "Conclude at Madurai with a sponsored Meenakshi kalyanam if your tour timing aligns.",
    ],
    pacing: { comfortable: 12, steady: 10, express: 8 },
    templeSlugs: [
      "rameshwaram",
      "tirumala-tirupati",
      "meenakshi-amman",
      "guruvayur",
    ],
    suggestedDays: 10,
    states: ["tamil-nadu", "andhra-pradesh", "kerala"],
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=2400&q=85&auto=format&fit=crop",
  },
  {
    slug: "south-jyotirlinga",
    name: "South Jyotirlinga Trail",
    theme: "Two of the twelve self-manifested Shiva shrines",
    intro:
      "The southern arm of the Jyotirlinga pilgrimage: Mallikarjuna at Srisailam and Ramanathaswamy at Rameshwaram. Often combined with the great Chola temples for a complete Shaiva journey.",
    story:
      "The twelve Jyotirlingas are self-manifested forms of Shiva spread across India. Two of them lie in the south. Mallikarjuna at Srisailam sits deep in the forest of the Nallamala hills. Ramanathaswamy at Rameshwaram is on a tidal island at the country's southern edge. Visiting both together completes the southern axis of the Jyotirlinga yatra, a journey many devotees attempt across a lifetime.",
    traditions: [
      "Take darshan in the order Mallikarjuna first, Ramanathaswamy second.",
      "Perform the 22-tirtha snanam at Rameshwaram before darshan.",
      "Offer a bilva leaf at each temple if temple priests permit.",
    ],
    pacing: { comfortable: 7, steady: 6, express: 4 },
    templeSlugs: ["srisailam-mallikarjuna", "rameshwaram"],
    suggestedDays: 6,
    states: ["andhra-pradesh", "tamil-nadu"],
    heroImage:
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=2400&q=85&auto=format&fit=crop",
  },
  {
    slug: "great-living-cholas",
    name: "Great Living Chola Temples",
    theme: "UNESCO Chola heritage trail",
    intro:
      "Brihadeeswarar at Thanjavur, Gangaikondacholapuram and Airavatesvara: three apex achievements of medieval Indian architecture, all UNESCO sites within a single state.",
    story:
      "The Chola dynasty ruled Tamil country from the ninth to the thirteenth centuries and left behind temples that still stand as the high-water mark of South-Indian architecture. The three temples on this circuit, all UNESCO World Heritage Sites, were built by successive Chola kings as statements of dynastic power and personal devotion. The vimana of Brihadeeswarar rose 216 feet in 1010 CE, the tallest such tower in the world for centuries.",
    traditions: [
      "Visit Brihadeeswarar first, the masterwork of Rajaraja Chola.",
      "Sponsor an abhishekam at the Saturday twilight, the temple's most sacred hour.",
      "Spend time studying the inscriptions on the outer wall before darshan.",
    ],
    pacing: { comfortable: 5, steady: 4, express: 3 },
    templeSlugs: ["thanjavur-brihadeeswarar"],
    suggestedDays: 4,
    states: ["tamil-nadu"],
    heroImage:
      "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=2400&q=85&auto=format&fit=crop",
  },
  {
    slug: "konkan-shiva-coast",
    name: "Konkan Shiva Coast",
    theme: "Karnataka's western-coast Shaiva trail",
    intro:
      "Gokarna's Atmalinga, Murudeshwar's headland statue and Udupi's Krishna shrine come together as a coastal circuit where temple architecture meets the Arabian Sea.",
    story:
      "The Konkan coast of Karnataka holds some of South India's most photogenic temples. The journey runs along a thin coastal strip where the Western Ghats almost meet the Arabian Sea. Pilgrims have walked or sailed these stops for centuries. The route mixes deep ritual at Gokarna's Mahabaleshwar, scale at Murudeshwar's 123-foot Shiva, and the unique nine-holed window darshan at Udupi.",
    traditions: [
      "At Gokarna, take the holy bath in the Koti Tirtha before darshan.",
      "Climb the 20-storey gopura at Murudeshwar for the headland view.",
      "View Krishna at Udupi through the Navagraha Kindi, the nine-holed silver window.",
    ],
    pacing: { comfortable: 6, steady: 5, express: 4 },
    templeSlugs: ["gokarna", "murudeshwar", "udupi-krishna"],
    suggestedDays: 5,
    states: ["karnataka"],
    heroImage:
      "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=2400&q=85&auto=format&fit=crop",
  },
  {
    slug: "telangana-heritage",
    name: "Telangana Heritage Trail",
    theme: "Kakatiya stone and Rama bhakti",
    intro:
      "Ramappa's UNESCO Kakatiya temple, the newly reconstructed Yadadri Narasimha and the Godavari-side Bhadrachalam Rama shrine. Telangana's three defining heritage stops.",
    story:
      "Telangana's temple tradition is younger and grittier than its southern neighbours, shaped by the Kakatiya kings of the twelfth century and later by the Vijayanagara and Asaf Jahi rulers. Three temples capture the range. Ramappa is Kakatiya stonecraft at its peak, recognised by UNESCO in 2021. Yadadri was rebuilt entirely in stone over the past decade, the largest contemporary temple reconstruction in India. Bhadrachalam holds the most sacred Rama shrine in the South.",
    traditions: [
      "Begin with darshan at Yadadri's Lakshmi Narasimha sanctum on a Saturday.",
      "At Ramappa, spend an hour studying the dancing-girl sculptures on the outer walls.",
      "If timing allows, attend the Sri Rama Navami kalyanam at Bhadrachalam.",
    ],
    pacing: { comfortable: 6, steady: 5, express: 4 },
    templeSlugs: ["ramappa", "yadadri", "bhadrachalam"],
    suggestedDays: 5,
    states: ["telangana"],
    heroImage: "/images/ramappa-temple.png",
  },
  {
    slug: "kerala-spiritual",
    name: "Kerala Spiritual Retreat",
    theme: "Padmanabha, Guruvayur and the Ayurveda calm",
    intro:
      "Pair the Padmanabhaswamy and Guruvayur darshans with an Ayurveda retreat in the backwaters. A circuit built for senior travellers who want devotion plus rest.",
    story:
      "Kerala's spiritual life rests on two pillars. Padmanabhaswamy at Thiruvananthapuram, where Vishnu reclines on Adisesha, is the dynastic shrine of the Travancore royal house. Guruvayur, the Krishna shrine in central Kerala, draws crowds that rival the largest northern pilgrimages. We weave both into a longer Kerala stay, with the calm of an Ayurveda retreat in between. The pace is gentler than a pure pilgrimage tour.",
    traditions: [
      "Observe the strict dress code at Padmanabhaswamy: dhoti for men, sari or mundu for women.",
      "Sponsor a thulabharam (weighing-against-offerings) at Guruvayur if you choose.",
      "Schedule the Ayurveda consultation on day one so the doctor can guide the meals.",
    ],
    pacing: { comfortable: 9, steady: 7, express: 5 },
    templeSlugs: ["padmanabhaswamy", "guruvayur"],
    suggestedDays: 7,
    states: ["kerala"],
    heroImage:
      "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=2400&q=85&auto=format&fit=crop",
  },
];

export function getCircuitBySlug(slug: string): Circuit | undefined {
  return CIRCUITS.find((c) => c.slug === slug);
}

export function circuitsByState(state: StateSlug): Circuit[] {
  return CIRCUITS.filter((c) => c.states.includes(state));
}
