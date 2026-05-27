export interface Testimonial {
  name: string;
  age: number;
  city: string;
  packageSlug?: string;
  quote: string;
  rating: number; // out of 5
  forSenior?: boolean; // travelled as / with senior
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lakshmi Iyer",
    age: 64,
    city: "Bengaluru",
    packageSlug: "tamil-nadu-temple-trail-7d",
    quote:
      "Everything was already arranged: the darshan slots, the wheelchair at Brihadeeswarar, even the special meals my husband needed. I have travelled with three operators before; nobody else thought of these things.",
    rating: 5,
    forSenior: true,
  },
  {
    name: "Ramesh Murthy",
    age: 58,
    city: "Hyderabad",
    packageSlug: "tirupati-srisailam-4d",
    quote:
      "I took my parents to Tirumala. The companion who travelled with us was patient, deeply respectful and clearly trained. We will not travel with anyone else now.",
    rating: 5,
    forSenior: true,
  },
  {
    name: "Sudha Krishnamurthy",
    age: 71,
    city: "Chennai",
    packageSlug: "kerala-spiritual-retreat-6d",
    quote:
      "The pace was right for my age. Not too rushed, never wasteful. The houseboat night was something I'll remember always.",
    rating: 5,
    forSenior: true,
  },
  {
    name: "Anand Pillai",
    age: 49,
    city: "Kochi",
    packageSlug: "south-char-dham-12d",
    quote:
      "We were a family of nine, three generations together. Sanchaari handled the logistics so well that even my 80-year-old grandmother completed all four darshans without strain.",
    rating: 5,
    forSenior: true,
  },
  {
    name: "Padmaja Reddy",
    age: 67,
    city: "Visakhapatnam",
    packageSlug: "telangana-heritage-5d",
    quote:
      "I had given up on travel after my knee surgery. The team here picked hotels with lifts, kept walks short, and made sure I never felt like I was holding the group back.",
    rating: 5,
    forSenior: true,
  },
  {
    name: "Vikram Shenoy",
    age: 52,
    city: "Mangaluru",
    packageSlug: "karnataka-coast-shiva-5d",
    quote:
      "Beautifully paced. Murudeshwar at sunset, Gokarna at dawn. These are not things every operator gets right.",
    rating: 5,
  },
  {
    name: "Saraswathi Rao",
    age: 73,
    city: "Bengaluru",
    packageSlug: "private-tirupati-balaji-3d",
    quote:
      "Three days, perfectly handled. The darshan was arranged, the rest was peaceful. My family didn't have to worry about anything.",
    rating: 5,
    forSenior: true,
  },
  {
    name: "Meera Nair",
    age: 44,
    city: "Pune",
    packageSlug: "south-india-grand-15d",
    quote:
      "Fifteen days in five states sounded ambitious. Sanchaari made it feel unhurried. Worth every rupee.",
    rating: 5,
  },
];
