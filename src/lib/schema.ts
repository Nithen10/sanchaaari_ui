/**
 * Helpers that build JSON-LD structured-data blocks for the routes that
 * benefit most from rich link-preview metadata.
 * The data shape follows schema.org conventions.
 */

import type { Package } from "@/data/packages";
import type { Temple } from "@/data/temples";
import type { StateInfo } from "@/data/states";

export const SITE_URL = "https://sanchaari.in";
export const SITE_NAME = "Sanchaari";

interface JsonLd {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}

export function tripSchema(pkg: Package): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.shortDescription,
    image: pkg.heroImages,
    url: `${SITE_URL}/tours/${pkg.slug}`,
    touristType: pkg.themes,
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: pkg.priceFrom,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/tours/${pkg.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pkg.rating.toFixed(1),
      reviewCount: pkg.reviewCount,
    },
  };
}

export function templeSchema(t: Temple, stateName?: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: t.name,
    description: t.significance,
    image: t.images,
    url: `${SITE_URL}/temples/${t.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: t.city,
      addressRegion: stateName ?? "",
      addressCountry: "IN",
    },
    isAccessibleForFree: false,
    publicAccess: true,
  };
}

export function stateSchema(s: StateInfo): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: s.name,
    description: s.intro,
    image: [s.hero],
    url: `${SITE_URL}/states/${s.slug}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: s.name,
      addressCountry: "IN",
    },
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      "Sanchaari crafts thoughtfully designed temple and heritage journeys across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana, with dedicated companion services for senior travellers.",
    areaServed: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };
}

export function ldJsonScript(obj: JsonLd): string {
  return JSON.stringify(obj);
}
