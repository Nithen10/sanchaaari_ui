# Sanchaari · Design System

A reference for the visual language of the Sanchaari website — South India temple and heritage tours, with a focus on senior travellers. Aesthetic: warm, devotional, editorial. Cream paper, espresso ink, gold accents, serif headlines.

---

## 1. Brand foundations

| Property | Value |
|---|---|
| Brand | **Sanchaari** — South India Heritage Tours |
| Voice | Calm, considered, slightly literary. Sentences read like a guide who has walked these temples for years — not a marketer. |
| Audience | Senior travellers planning pilgrimage / heritage journeys. Readability and tap-target sizing matter more than density. |
| Domain | `sanchaari.in` |
| Reference vibe | Editorial travel print (Condé Nast Traveller, Cottage Garden) crossed with a Tamil temple manuscript. |

---

## 2. Color palette

All colours live as CSS variables in [src/app/globals.css](src/app/globals.css) under `:root`. Use the variable, never the hex literal — the entire UI is themed by changing the value once.

### 2.1 Primary surface

| Token | Hex | Use |
|---|---|---|
| `--heritage-cream` | `#f7f1e6` | Default page background (the "paper") — applied to `body.is-site`. |
| `--heritage-cream-2` | `#efe6d3` | Alternating section background (`.site-section--cream2`) for visual rhythm. |
| `--heritage-ivory` | `#ffffff` | Card surfaces, modal bodies, button text on dark fills. |
| `--heritage-ink` | `#1f2937` | Primary body text. Also the background of the *Ready when you are* dark CTA section (`.site-section--ink`). |

### 2.2 Type tones

| Token | Hex | Use |
|---|---|---|
| `--heritage-ink` | `#1f2937` | Body & headings on cream/ivory surfaces. |
| `--heritage-sub` | `#4b5563` | Secondary text, lead paragraphs, card descriptions. |
| `--heritage-muted` | `#6b7280` | Tertiary metadata (price labels, dates, eyebrows in some contexts). |
| `--heritage-line` | `rgba(31, 41, 55, 0.12)` | Hairline borders on cards & inputs. |
| `--heritage-line-strong` | `rgba(31, 41, 55, 0.24)` | Emphasised borders (dropdowns, focused inputs, chip outlines). |

### 2.3 Brand accents

| Token | Hex | Use |
|---|---|---|
| `--heritage-rust` | `#4C2B08` (espresso brown) | **The brand color.** Buttons, badges, eyebrow labels, date-badge fills on Celebration cards, the giant "CELEBRATION" headline, focus rings, link hover. |
| `--heritage-rust-dk` | `#2E1A04` | Darker press / hover state for primary buttons and `.is-site a:hover`. |
| `--heritage-rust-tint` | `rgba(76, 43, 8, 0.08)` | Faint 8 % wash for selected pills, accessibility cards, error banners. |
| `--heritage-gold` | `#c9a24a` | Secondary accent — gold star on rating pills, italic Fraunces taglines on cards, "Top rated" outline badge, hero gold eyebrows on darker backgrounds. |
| `--heritage-gold-dk` | `#a8842f` | Hover state for `.btn--gold`. |
| `--heritage-teal` | `#0d6b6b` | Reserved — used only by the home-page hero teal background (pre-`.is-site` zone). |

### 2.4 Shadows

| Token | Value | Use |
|---|---|---|
| `--heritage-shadow` | `0 0.75rem 2rem rgba(31, 41, 55, 0.08)` | Default card resting shadow. |
| `--heritage-shadow-lg` | `0 1.5rem 3rem rgba(31, 41, 55, 0.14)` | Card hover, modal, dropdown panel. |

### 2.5 Outside-the-inner-site palette (hero zone only)

The home-page hero (before `.is-site` is applied) uses a teal jewel-tone palette. These tokens are kept separate from the heritage palette and should **not** be reused on inner pages.

| Token | Hex | Where |
|---|---|---|
| `--bg-primary` | `#1a8a8a` | Hero background base. |
| `--bg-dark` | `#0d5e5e` | Hero gradient end. |
| `--green-primary` | `#2ecc71` | "Explore" pill button on hero. |
| `--purple-accent` | `#7c5cbf` | Hero glow. |
| `--gold-star` | `#f1c40f` | Hero rating star. |

---

## 3. Typography

Four font families, all wired through `next/font` in [src/app/layout.tsx](src/app/layout.tsx) and exposed as CSS variables on `<body>`.

| Variable | Family | Weights | Use |
|---|---|---|---|
| `--font-fraunces` | **Fraunces** (Google) | variable opsz | **Headings, serif accents, italic taglines.** All H1–H3 on inner pages. Card titles. Italic gold taglines under state names. |
| `--font-poppins` | **Poppins** (Google) | 300, 400, 500, 600, 700 | **Body text, buttons, eyebrows, navigation, meta lines.** The default `font-family` on `<body>`. |
| `--font-manrope` | **Manrope** (Google) | 400–700 | Alternate sans for specialty UI (some filters, some breadcrumbs). |
| `--font-instrument-serif` | **Instrument Serif** (local) | 400 reg + italic | Display accents — large editorial pull quotes, hero overlays. |

### 3.1 Fluid type scale

Defined under `:root`:

| Token | Range | Use |
|---|---|---|
| `--font-size-base` | `clamp(1rem, 1.05vw, 1.125rem)` (16–18 px) | Default body baseline. |
| `--font-size-body` | `clamp(1.0625rem, 1.1vw, 1.1875rem)` (17–19 px) | Long-form prose on inner pages — **slightly larger than base** because senior readability matters. |
| `--font-size-lg` | `clamp(1.125rem, 1.2vw, 1.3125rem)` (18–21 px) | Section leads, hero subtitles. |

### 3.2 Typographic patterns

- **Headlines:** Fraunces, weights 500–700, with mild negative `letter-spacing` (`-0.02em`). H1 on hero pages goes `clamp(2.25rem, 5vw, 4rem)`.
- **The "CELEBRATION" treatment:** Poppins 800 uppercase in espresso (`--heritage-rust`), `clamp(2.75rem, 8vw, 5.5rem)`, tight tracking. Used only once on the homepage as the brand display moment.
- **Card titles:** Fraunces 600, 1.0625–1.25 rem.
- **Italic taglines under titles:** Fraunces italic in `--heritage-gold`, sentence case ("Backwaters and quiet sanctums").
- **Eyebrow labels** (`.eyebrow`): Poppins 600, uppercase, `letter-spacing: 0.18em`, `font-size: 0.75rem`, color `--heritage-rust`. Always preceded by a `1.75rem × 1px` rust rule via `::before`. The italic Fraunces variant (Celebration eyebrow "Every day a") drops the rule and uses sentence case.

---

## 4. Spacing & layout

### 4.1 Layout tokens (in `:root`)

| Token | Value | Use |
|---|---|---|
| `--site-max` | `88rem` (~1408 px) | Default content cap (`.site-container`). |
| `--site-max-wide` | `96rem` (~1536 px) | Wider cap for listing + sidebar pages (`.site-container--wide`). |
| `--site-pad-x` | `clamp(1.25rem, 4vw, 3.25rem)` | Horizontal page padding. |
| `--section-pad-y` | `clamp(3.5rem, 7vw, 6.5rem)` | Vertical rhythm between sections. |
| `--nav-height` | `4.375rem` (70 px) | Sticky header height; used to offset sticky elements (`top: calc(var(--nav-height) + 5rem)`). |
| `--tap-target` | `2.75rem` (44 px) | Minimum height for all interactive controls — buttons, selects, links in nav. **Non-negotiable, senior-friendly.** |

### 4.2 Section structure

Every section follows the same scaffold:

```html
<section class="site-section">
  <div class="site-container">
    <span class="eyebrow">Five South Indian states</span>
    <h2 class="section-title">Begin where your heart calls you</h2>
    <p class="section-lead">Tamil Nadu, Kerala …</p>
    <!-- grid / cards / content -->
  </div>
</section>
```

Variants: `.site-section--cream2` (warmer cream alt), `.site-section--ink` (dark CTA), `.site-section--wide` containers, the `home-celebrations` and `celeb-hub` variants.

### 4.3 Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `0.5rem` | Date badges, inline pills, small inputs. |
| `--radius-md` | `0.875rem` | Internal panels, dropdown sheets. |
| `--radius-lg` | `1.25rem` | Cards, modals, dialogs. |
| `--radius-pill` | `999rem` | Buttons, eyebrow chips, filter chips, dropdown buttons. |

### 4.4 Motion

| Token | Value | Use |
|---|---|---|
| `--transition-fast` | `0.3s ease` | Color, background, opacity changes (buttons, links). |
| `--transition-medium` | `0.6s cubic-bezier(0.4, 0, 0.2, 1)` | Card hover lifts, image zoom. |
| `--transition-slow` | `0.8s cubic-bezier(0.4, 0, 0.2, 1)` | Reveal fades. |
| `--transition-slide` | `1s cubic-bezier(0.65, 0, 0.35, 1)` | Hero slider. |
| `--ease-out-soft` | `cubic-bezier(0.22, 1, 0.36, 1)` | One-off soft eases. |

All scroll-reveal animation goes through the [Reveal](src/components/site/Reveal.tsx) component (IntersectionObserver + CSS transition; respects `prefers-reduced-motion`). The Reveal opts in via `delay={0|1|2|3|4}` for staggered card grids.

---

## 5. Component patterns

### 5.1 Buttons (`.btn`)

Pill-shaped, 44 px min-height, Poppins 600. Variants:

| Class | Look |
|---|---|
| `.btn--primary` | Espresso fill, white text. Default CTA. |
| `.btn--ghost` | Transparent w/ ink border. Inverts to ink fill + cream text on hover. Used for secondary actions. |
| `.btn--gold` | Gold fill, ink text. Used sparingly on light surfaces. |
| `.btn--whatsapp` | WhatsApp green fill. Live contact only. |
| `.btn--lg` | Modifier: bumps padding to `1.125rem 2rem` and font to `1.0625rem`. |

Inside `.is-site`, button text is locked via explicit `.is-site .btn--primary { color: #fff; }` rules (see [globals.css line 2392+](src/app/globals.css#L2392)) — necessary because the site-wide `.is-site a` selector would otherwise tint anchor-rendered buttons rust.

### 5.2 Cards

Three card families are in active use:

1. **`.card` (generic / package cards)** — ivory background, `--heritage-line` border, `--radius-lg`, hover lifts `translateY(-4px) scale(1.015)` to `--heritage-shadow-lg`. See [PackageCard.tsx](src/components/site/PackageCard.tsx).
2. **`.home-state-card` (states grid)** — `3 / 4` portrait image with dark gradient overlay; title in white Fraunces over the image, italic gold tagline. See [HomeBelow.tsx](src/components/site/HomeBelow.tsx#L142-L188).
3. **`.celeb-card` (celebrations)** — ivory body, `4 / 3` image with red **date badge** (`--heritage-rust`) top-left, hover lift. Reusable via [CelebrationCard](src/components/site/CelebrationCard.tsx). CSS lives in [globals.css](src/app/globals.css#L2475+) so the homepage strip, hub, and detail-page related grid share styling identically.

### 5.3 Filters & chips

Used on `/tours` ([Filters.tsx](src/components/site/Filters.tsx)) and `/celebrations` ([page.tsx](src/app/%28site%29/celebrations/page.tsx)). Pattern:

- Filter dropdown buttons: pill, ivory background, `--heritage-line-strong` border, focused state adds a 3 px espresso glow.
- Applied chips: small pill, ivory background, `×` icon in espresso. Click clears the chip.
- "Clear All" button: text-style espresso link with chevron `×` on the right.

### 5.4 Forms

Inputs are pill-shaped, `--heritage-ivory` background, `--heritage-line-strong` border, focus ring is the 8 % espresso wash. Error pills use `--heritage-rust-tint` background with `--heritage-rust-dk` text. See [InquiryForm.tsx](src/components/site/InquiryForm.tsx).

### 5.5 Hero treatments

Two hero patterns:

1. **Full-bleed image hero** — `<Image fill>` with a `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%)` overlay (`...__shade`), breadcrumb floats top, eyebrow → H1 → italic gold subtitle at bottom. See [temples/[temple]/page.tsx](src/app/%28site%29/temples/%5Btemple%5D/page.tsx) and [celebrations/[slug]/page.tsx](src/app/%28site%29/celebrations/%5Bslug%5D/page.tsx).
2. **Centered hub hero** — image + darker gradient, centered breadcrumb / title / lead / search bar. Used on [celebrations/page.tsx](src/app/%28site%29/celebrations/page.tsx).

### 5.6 Modal / dialog

Native `<dialog>` element, no library. `--heritage-ivory` body, `--radius-lg`, `--heritage-shadow-lg`, backdrop `rgba(15, 23, 42, 0.65)` + 2 px blur. Native ESC and backdrop-click close behavior.

---

## 6. Implementation conventions

- **CSS lives inline** in each component via `<style>{`...`}</style>` blocks — not CSS modules, not Tailwind, not styled-components. The exception is `.is-site` cross-cutting rules and shared card styles, which live in [globals.css](src/app/globals.css).
- **No utility framework.** No Tailwind, no shadcn, no Bootstrap. Class names are BEM-ish (`pkg-card__media`, `celeb-card__date`, `home-celebrations__title`).
- **`.is-site` wrapper.** Every page under `src/app/(site)/` is wrapped by [SiteBodyClass](src/components/site/SiteBodyClass.tsx) which adds `is-site` to `<body>`. Inner-site rules are namespaced with `.is-site` so they don't leak to the homepage hero zone. When adding a custom-classed anchor (e.g. `.pkg-card__cta`), **prefix with `.is-site`** to outrank the global `.is-site a` color rule.
- **All anchors that look like buttons must explicitly set their own color** — `.is-site a { color: var(--heritage-rust); }` is the default, so anchor-rendered buttons need either `.btn`-family classes (which have explicit overrides) or their own `.is-site .<your-class>` selector.
- **Next.js 16, App Router.** Layouts are server components by default; opt into `"use client"` only when you need state or browser APIs (filters, modals, sliders).
- **Images** always use `next/image`. Remote hosts whitelisted in [next.config.ts](next.config.ts): `images.unsplash.com`, `images.pexels.com`, `upload.wikimedia.org`, `commons.wikimedia.org`, `tripandtales.com`. Local assets live under [public/images/](public/images/).
- **Reveal animation** — wrap any element that should fade-up on scroll: `<Reveal delay={i % 4}>...</Reveal>`. Skip it for above-the-fold hero copy (it's an entrance, not a layout primitive).
- **Senior-friendly defaults.** `--tap-target: 2.75rem` everywhere; body text in the 17–19 px band; minimum line-height 1.55 on prose.

---

## 7. Section / page directory at a glance

| Route | Purpose | Hero style | Cards |
|---|---|---|---|
| `/` | Homepage — hero slider → tour strip → states grid → Celebration strip → reviews → CTA. | Full-screen teal jewel hero (outside `.is-site`); cream below. | PackageCard, state image cards, CelebrationCard. |
| `/tours` | Tour listing with sidebar Filters. | Compact eyebrow + H1 in cream container. | PackageCard. |
| `/tours/[slug]` | Tour detail with sticky booking. | Full-bleed image hero. | Related PackageCard. |
| `/states` and `/states/[state]` | State hub + detail. | Full-bleed image hero. | Mix of TempleCard + PackageCard. |
| `/temples/[temple]` | Temple detail. | Full-bleed image hero. | Related TempleCard, related PackageCard. |
| `/circuits` and `/circuits/[circuit]` | Heritage circuits. | Full-bleed image hero. | CircuitCard. |
| `/celebrations` | Festivals & events hub with filter chips. | Centered hero with search bar. | CelebrationCard. |
| `/celebrations/[slug]` | Festival detail page. | Full-bleed image hero with red date badge. | Related CelebrationCard. |
| `/senior-companion`, `/become-a-companion`, `/contact`, `/about`, `/tours/custom` | Support pages. | Compact eyebrow + H1. | — |

---

## 8. Adding a new section — quick checklist

1. Wrap with `<section className="site-section">` (add `--cream2` or `--ink` if you want alternating background).
2. Open with `<Reveal>` for entrance animation.
3. Inside: `<span className="eyebrow">…</span>`, `<h2 className="section-title">…</h2>`, optional `<p className="section-lead">…</p>`.
4. Use existing card components if the data fits — don't roll a new card style unless it's a deliberate, named pattern.
5. Style additions go in a single inline `<style>{`...`}</style>` block at the end of the component, using only heritage CSS variables — never hex literals.
6. Responsive breakpoints: design for 1408 px, then add fallbacks at `@media (max-width: 1100px)`, `960px`, `720px`, `480px`.
7. Run `npx tsc --noEmit` and `npm run lint` before considering it done.
