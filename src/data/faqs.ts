export interface FaqGroup {
  category: string;
  items: { q: string; a: string }[];
}

export const FAQS: FaqGroup[] = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a tour?",
        a: "The simplest way is to click the WhatsApp button on any tour page. It pre-fills your enquiry so we can confirm dates, travellers and price within hours. You can also call us directly during office hours.",
      },
      {
        q: "How much advance booking do you need?",
        a: "For group tours we recommend at least 30 days in advance, earlier for the Brahmotsavam and Kalyanam windows when accommodation fills quickly. Private tours can often be confirmed within a week.",
      },
      {
        q: "Can I make changes after booking?",
        a: "Yes. Dates can usually be shifted up to 21 days before departure at no cost. We'll always look for the most flexible option for you.",
      },
    ],
  },
  {
    category: "Payment",
    items: [
      {
        q: "What is the payment schedule?",
        a: "A 25% confirmation amount holds your booking; the balance is due 14 days before departure. We accept bank transfer, UPI and all major cards.",
      },
      {
        q: "Do you offer EMI options?",
        a: "Yes, on bookings above ₹50,000 we offer no-cost EMI through partner banks. Ask our team during enquiry.",
      },
      {
        q: "What does the price include?",
        a: "Each tour page lists a detailed Inclusions and Exclusions table. As a rule, we include accommodation, transfers, meals, guide and applicable taxes; flights and personal expenses are excluded.",
      },
    ],
  },
  {
    category: "On Tour",
    items: [
      {
        q: "What size are your groups?",
        a: "Most Samuha (group) tours run with 12–28 travellers, with a dedicated tour manager. Larger numbers are split into two convoys for comfort.",
      },
      {
        q: "What is the dress code at temples?",
        a: "Traditional Indian wear is preferred everywhere. Each temple detail page on this site lists its exact dress code so you can prepare. Our tour manager will remind you the previous evening.",
      },
      {
        q: "Are sattvic or specific dietary meals available?",
        a: "Yes. Fully vegetarian sattvic options, Jain meals, low-salt and diabetic-friendly menus can all be arranged. Please tell us at booking.",
      },
    ],
  },
  {
    category: "Senior Care",
    items: [
      {
        q: "I travel slowly because of my knees. Is that a problem?",
        a: "Not at all. Most of our tours are paced for travellers in their 60s and 70s. We deliberately avoid stairs where alternatives exist and arrange wheelchairs where needed.",
      },
      {
        q: "Will you arrange senior-darshan slots?",
        a: "Wherever the temple allows it, yes. At Tirumala we use the senior-citizen darshan facility; at major Shaiva sites we use the special entry queues. We do this on your behalf and at no extra cost.",
      },
      {
        q: "Is a doctor available?",
        a: "All multi-day tours include a doctor-on-call arrangement at every hotel. For tours marked 'doctor-on-call', a partner physician is reachable 24×7 throughout the journey.",
      },
    ],
  },
  {
    category: "Companions",
    items: [
      {
        q: "What is the Senior Companion Service?",
        a: "It is a dedicated travel assistant who accompanies a senior traveller throughout the journey, managing luggage, medications, queue navigation, photography help and any small thing that makes travel comfortable. Verified, background-checked and first-aid trained.",
      },
      {
        q: "How is the companion matched?",
        a: "We match on language (Tamil, Telugu, Kannada, Malayalam, Hindi, English), gender preference, and any specific need (mobility support, light translation, gentle conversation).",
      },
      {
        q: "Can I request a female companion for my mother?",
        a: "Absolutely. Please mention it during booking and we will assign accordingly.",
      },
    ],
  },
  {
    category: "Refunds",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "Cancellations 30 days before departure incur a 10% fee. Between 14–30 days, 25%. Within 14 days, 50%. Within 48 hours of departure, the tour is non-refundable. Force-majeure cases are handled case by case.",
      },
      {
        q: "What if a temple is closed unexpectedly?",
        a: "We monitor temple notifications daily. If a darshan is cancelled by the temple administration we substitute another temple of similar importance at no extra cost.",
      },
      {
        q: "Do you offer travel insurance?",
        a: "We can arrange optional travel insurance through partners; it is not included in the base fare.",
      },
    ],
  },
];
