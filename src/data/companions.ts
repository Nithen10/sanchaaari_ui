export interface CompanionTier {
  id: "standard" | "premium" | "specialist";
  name: string;
  bestFor: string;
  dailyRate: number;
  includes: string[];
  not: string[];
}

export const COMPANION_TIERS: CompanionTier[] = [
  {
    id: "standard",
    name: "Standard",
    bestFor: "Most senior travellers who want a steady hand on the journey",
    dailyRate: 1800,
    includes: [
      "Mobility help on stairs and uneven ground",
      "Queue navigation and senior-darshan slot management",
      "Language translation for priests, drivers and hoteliers",
      "Luggage handling at every transfer",
      "Two daily check-ins with the family on WhatsApp",
    ],
    not: [
      "Medical care beyond first aid",
      "24x7 stay overnight",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    bestFor: "Travellers managing health conditions or recovering from surgery",
    dailyRate: 2800,
    includes: [
      "Everything in Standard",
      "First-aid certified and medical-awareness trained",
      "Medication reminder schedule with the family doctor",
      "Diet management with the hotel kitchen",
      "Doctor-on-call coordination",
    ],
    not: ["Overnight stay in the same room"],
  },
  {
    id: "specialist",
    name: "Specialist",
    bestFor: "Solo seniors, advanced accessibility needs, or families travelling abroad",
    dailyRate: 4200,
    includes: [
      "Everything in Premium",
      "24x7 stay including overnight (separate adjoining room)",
      "Wheelchair operation and accessibility coordination",
      "Photography and family video updates each evening",
      "Banking and documentation help (Tirumala laddu, special seva tickets, locker forms)",
    ],
    not: [],
  },
];

export const COMPANION_LANGUAGES = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
] as const;

export const COMPANION_GENDERS = ["No preference", "Female", "Male"] as const;

export const COMPANION_SPECIALISATIONS = [
  "Medical-awareness",
  "Wheelchair support",
  "Photography",
  "Multilingual translation",
  "Senior darshan logistics",
  "Solo women companion",
] as const;

export type CompanionLanguage = (typeof COMPANION_LANGUAGES)[number];
export type CompanionGender = (typeof COMPANION_GENDERS)[number];
export type CompanionSpecialisation = (typeof COMPANION_SPECIALISATIONS)[number];

export const COMPANION_FAQS = [
  {
    q: "Can I request a female companion for my mother?",
    a: "Yes. Please mention 'female companion' during booking. We assign one as a default when a senior woman travels alone, unless the family asks otherwise.",
  },
  {
    q: "How are companions screened?",
    a: "Every companion goes through police verification, two reference checks, an in-person interview with our companion lead, and a shadowed first tour before being assigned solo. Premium and Specialist tiers also hold annual first-aid certification.",
  },
  {
    q: "What if we don't get along?",
    a: "It happens occasionally. Tell our tour manager and we will replace the companion within 24 hours at no additional cost. We track these situations and the previous companion does not return to the team if a pattern emerges.",
  },
  {
    q: "What happens at night?",
    a: "Standard companions return to their own room at the same hotel. Premium companions stay in the same hotel and remain on call. Specialist companions stay in an adjoining room or, if requested, share an extra bed in the senior's room.",
  },
  {
    q: "What is the daily rate paying for?",
    a: "Their full-day time, their travel and stay throughout the tour, training and verification overheads, and our coordination. It does not include the senior's room, food or tour costs, which are billed separately.",
  },
  {
    q: "Can the companion give medicines?",
    a: "Premium and Specialist companions are trained to remind, set out the daily dose box, and call the doctor in emergencies. They do not administer injections or prescription drugs unsupervised.",
  },
  {
    q: "Will the companion travel with us in the same car?",
    a: "Yes. On every Sanchaari tour, the companion sits in the same vehicle and accompanies the family through every visit. On group tours, the companion stays alongside the senior throughout the day.",
  },
  {
    q: "Is the companion service available outside Sanchaari tours?",
    a: "Sometimes, yes. Write to us with your independent travel plan and we will see if we can place a Sanchaari companion on it.",
  },
  {
    q: "Do you offer companions in regional languages?",
    a: "Yes. Most of our companions speak two or three South Indian languages. Use the language match panel above to confirm a fit before booking.",
  },
];
