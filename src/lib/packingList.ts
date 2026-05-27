import type { Package } from "@/data/packages";

/**
 * Generate a friendly packing list based on the themes of a package.
 * Returns 6-8 items, always senior-friendly, grouped by theme keywords.
 */
export function packingListFor(pkg: Package): string[] {
  const items = new Set<string>();

  // Universal essentials
  items.add("Comfortable closed shoes (not slippery on temple stones)");
  items.add("A small day-pack with water bottle and a folding hat");
  items.add("Medications in original packaging with a copy of the prescription");

  if (pkg.themes.includes("Temples") || pkg.themes.includes("Pilgrimage")) {
    items.add("Traditional Indian attire (dhoti or kurta-pyjama for men, sari or salwar for women)");
    items.add("A light shawl or stole for cooler temple interiors");
    items.add("A small cloth bag for prasadam");
  }

  if (pkg.themes.includes("Wellness")) {
    items.add("Loose cotton clothes you can move in (Ayurveda therapies use oil)");
    items.add("An extra pair of slip-on sandals for around the resort");
  }

  if (pkg.themes.includes("Heritage")) {
    items.add("Sun cream and sunglasses for open-air sites");
    items.add("A printed copy of your itinerary, just in case");
  }

  if (pkg.themes.includes("Senior-Friendly") || pkg.senior.wheelchairFriendly) {
    items.add("Knee support or walking stick if you usually use one at home");
  }

  // Hill-station or beach packages
  if (pkg.title.toLowerCase().includes("hill") || pkg.title.toLowerCase().includes("ooty") || pkg.title.toLowerCase().includes("munnar") || pkg.title.toLowerCase().includes("coorg")) {
    items.add("A warm jacket and a thin sweater for cool evenings");
  }
  if (pkg.title.toLowerCase().includes("beach") || pkg.title.toLowerCase().includes("gokarna") || pkg.title.toLowerCase().includes("varkala")) {
    items.add("Beachwear and a quick-dry towel");
    items.add("Insect repellent for evening walks");
  }

  return Array.from(items);
}

/**
 * Pick a representative day from the itinerary to show as the "typical day"
 * panel. Prefers a middle day (day 3 or 4) over day 1 or last day, since
 * those are usually arrival/departure days with thin activity lists.
 */
export function representativeDay(pkg: Package) {
  const it = pkg.itinerary;
  if (it.length <= 2) return it[0];
  const mid = Math.floor(it.length / 2);
  return it[mid];
}
