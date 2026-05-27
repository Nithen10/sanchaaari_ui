import type { MetadataRoute } from "next";
import { STATES } from "@/data/states";
import { TEMPLES } from "@/data/temples";
import { CIRCUITS } from "@/data/circuits";
import { PACKAGES } from "@/data/packages";

const BASE_URL = "https://sanchaari.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed: MetadataRoute.Sitemap = [
    "/",
    "/about",
    "/tours",
    "/tours/group",
    "/tours/private",
    "/tours/custom",
    "/states",
    "/circuits",
    "/senior-companion",
    "/become-a-companion",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
  const states = STATES.map((s) => ({
    url: `${BASE_URL}/states/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const circuits = CIRCUITS.map((c) => ({
    url: `${BASE_URL}/circuits/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const temples = TEMPLES.map((t) => ({
    url: `${BASE_URL}/temples/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const tours = PACKAGES.map((p) => ({
    url: `${BASE_URL}/tours/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  return [...fixed, ...states, ...circuits, ...temples, ...tours];
}
