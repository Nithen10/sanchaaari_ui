// Centralised business contact details + WhatsApp / email handoff helpers.
// Replace these placeholders with the live numbers before launch.

export const BUSINESS = {
  name: "Sanchaari",
  tagline: "Heritage journeys across South India",
  phone: "+91 90000 00000",
  phoneHref: "+919000000000",
  whatsapp: "919000000000", // no '+' for wa.me
  email: "hello@sanchaari.in",
  address:
    "Sanchaari Travels, MG Road, Bengaluru, Karnataka 560001, India",
  hours: "Mon–Sat · 9 AM – 8 PM IST",
  social: {
    instagram: "https://instagram.com/sanchaari",
    facebook: "https://facebook.com/sanchaari",
    youtube: "https://youtube.com/@sanchaari",
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export function buildTelUrl(): string {
  return `tel:${BUSINESS.phoneHref}`;
}

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  travellers?: { adults: number; seniors: number; children: number };
  dates?: { start?: string; end?: string };
  package?: string;
  message?: string;
  source?: string; // which page/form
}

export function formatInquiryMessage(p: InquiryPayload): string {
  const lines: string[] = [];
  lines.push(`Hello Sanchaari, I'd like to enquire about a journey.`);
  lines.push("");
  lines.push(`Name: ${p.name}`);
  lines.push(`Phone: ${p.phone}`);
  if (p.email) lines.push(`Email: ${p.email}`);
  if (p.package) lines.push(`Package: ${p.package}`);
  if (p.travellers) {
    const { adults, seniors, children } = p.travellers;
    lines.push(
      `Travellers: ${adults} adult(s), ${seniors} senior(s), ${children} child(ren)`
    );
  }
  if (p.dates && (p.dates.start || p.dates.end)) {
    lines.push(`Dates: ${p.dates.start ?? "?"} to ${p.dates.end ?? "?"}`);
  }
  if (p.message) {
    lines.push("");
    lines.push(`Message: ${p.message}`);
  }
  if (p.source) {
    lines.push("");
    lines.push(`(sent from ${p.source})`);
  }
  return lines.join("\n");
}
