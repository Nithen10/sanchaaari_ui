import type { StateSlug } from "./states";

export interface Destination {
  id: number;
  name: string;
  slug: StateSlug;
  location: string;
  rating: number;
  description: string;
  bgImage: string;
  cardImage: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Kerala",
    slug: "kerala",
    location: "Padmanabhaswamy Temple, Thiruvananthapuram",
    rating: 5,
    description:
      "Kerala, on India's tropical Malabar Coast, is renowned for its palm-lined beaches and serene backwaters. A vast network of canals carries traditional houseboats past coconut groves. Inland, the Western Ghats unfold into emerald tea, coffee, and spice plantations that frame an unforgettable journey.",
    bgImage: "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=3840&q=85&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    location: "Brihadeeswarar Temple, Thanjavur",
    rating: 5,
    description:
      "Tamil Nadu, the cradle of Dravidian culture, is famed for its towering temple gopurams, classical Bharatanatyam dance, and the Carnatic music tradition. From the soaring Meenakshi Temple in Madurai to the shore temples of Mahabalipuram, every corner echoes with centuries of devotion and artistry.",
    bgImage: "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=3840&q=85&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1759134334340-9398d9814bcb?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Karnataka",
    slug: "karnataka",
    location: "Murdeshwar Temple, Karnataka",
    rating: 5,
    description:
      "Karnataka blends imperial grandeur with natural splendour: the illuminated Mysore Palace, the boulder-strewn ruins of Hampi, and the misty coffee hills of Coorg. Its coastline along the Arabian Sea and lush Western Ghats interior offer one of South India's most varied travel canvases.",
    bgImage: "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=3840&q=85&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    location: "Tirupati Temple, Tirumala",
    rating: 5,
    description:
      "Andhra Pradesh stretches from the Bay of Bengal's quiet beaches to the cool slopes of Araku Valley and the sacred hills of Tirumala. Famed for spice-rich Andhra cuisine, the rock-cut shrines of Lepakshi, and the ancient Buddhist site of Amaravati, the state offers a deep dive into faith, flavour, and unspoilt landscape.",
    bgImage: "/images/tirupati-temple.png",
    cardImage: "/images/tirupati-temple.png",
  },
  {
    id: 5,
    name: "Telangana",
    slug: "telangana",
    location: "Ramappa Temple, Palampet",
    rating: 5,
    description:
      "Telangana, anchored by the historic city of Hyderabad, is a tapestry of Nizami palaces, ancient forts, and the iconic four-minaret Charminar. Known for its Deccan cuisine of biryani, haleem and bagara baingan, the state pairs centuries-old heritage with a thriving modern pulse.",
    bgImage: "/images/ramappa-temple.png",
    cardImage: "/images/ramappa-temple.png",
  },
];
