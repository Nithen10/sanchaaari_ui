import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Sans (body / UI) — Archivo, a free grotesque close to the reference's "Shapiro".
const poppins = Archivo({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Serif (headings / wordmarks) — Cormorant Garamond, an elegant high-contrast serif.
const fraunces = Cormorant_Garamond({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Inner-site body also uses the same sans (Archivo) via --font-manrope.
const manrope = Archivo({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanchaari.in"),
  title: {
    default: "Sanchaari · South India Temple & Heritage Tours",
    template: "%s | Sanchaari",
  },
  description:
    "Sanchaari curates thoughtfully designed temple and heritage journeys across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana, with dedicated companion services for senior travellers.",
  keywords: [
    "South India tours",
    "temple tours",
    "pilgrimage",
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Andhra Pradesh",
    "Telangana",
    "senior travel companion",
    "heritage travel",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${fraunces.variable} ${manrope.variable} ${instrumentSerif.variable}`}
        style={{ fontFamily: "var(--font-poppins)" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
