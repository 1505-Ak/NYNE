# NYNE Focus — Product Requirements Document

## Original Problem Statement
Build a landing page website for the energy drink brand **NYNE Focus**, targeting high-performing professionals. Strictly follow brand guidelines: light theme, Open Sans font, colours Black `#003342`, White, Ocean Blue `#4FACFE`, Sky Blue `#00F2FE`, Lemon Sun `#FFFE97`.

## Core Sections (Required)
1. **Hero** — "Take back your focus" headline, sub-copy, Shop Now CTA
2. **Problem** — Why high performers struggle with current fuels (coffee/energy drinks/etc.)
3. **Product** — NYNE Focus Lemon Ginger, add-to-cart, "What you'll feel" benefits
4. **Ingredients** — 10 nootropics w/ dosages & benefits
5. **Comparison** — NYNE vs Coffee / Energy Drinks / Pre-Workout
6. **FAQs** — 4 specified questions
7. **CTA** — 15% off first order, email capture (Klaviyo)

## Stack
- React (CRA) + Tailwind CSS + framer-motion + lucide-react
- Single-page (`/app/frontend/src/pages/LandingPage.jsx`)
- No backend yet

## Implemented (Feb 2026)

### Core
- All 7 sections built with strict copy & brand colours.
- Sticky header, responsive, mobile menu.
- Wave SVG transitions between sections.

### Visual Polish / "Funky Yet Sensible" Pass (latest)
- **Hero**: shimmer-gradient "Your Focus.", rotated sticker badge, trust-row w/ avatar chips, animated scroll cue, floating gradient blobs, grain overlay.
- **Problem**: asymmetric 7/5 grid — tilted sticker cards with numbered tags (01 · The Afternoon Slump), floating tilted pouring-can image, circular "Built for High Performers" badge, polaroid sticker "Pour. Focus. Ship it.", spinning dashed-circle decorations, grain overlay.
- **Product**: floating can animation, rotating conic-gradient halo ring, "NEW Lemon Ginger" tilted sticker, strike-through MSRP ($69.99 → $59.99, Save 14%), animated blobs, shimmer "FOCUS" text.
- **Marquee** (NEW): dual-tape rotated scroller with slogans (NO CRASH · NO JITTERS · 8 NOOTROPICS · …).
- **Ingredients**: gradient top-bar on cards with tilt-hover.
- **Comparison**: WINNER badge on NYNE column.
- **CTA**: floating sparkle particles, animated blobs, shimmer headline "What To Do."
- **Footer**: wavy top transition, text-logo NYNE FOCUS (white + sky-blue) blending into dark navy (no awkward white bg).

### Custom CSS Effects (`index.css`)
- Grain / noise overlays (`.grain`, `.grain-light`, `.noise-dark`)
- Float animations (`.float-slow`, `.float-med`, `.float-sm`)
- Gradient shimmer text (`.shimmer-text`)
- Marquee track (`.marquee-track`, `.fast`, paused on hover)
- Conic rotating halo (`.spin-slow`)
- Sticker shadow (`.sticker`)

## Open Tasks (Prioritised)

### P0 — Pending Integrations (awaiting user credentials)
- **Shopify Add-to-Cart** — need Shopify store URL / product permalink
- **Klaviyo email signup** — need Public API Key + List ID for 15% off flow
- **Contact email** — user to provide, replace `hello@nynefocus.com` placeholder in footer

### P1 — Enhancements
- Testimonial/quote section (text reviews from pro athletes / founders)
- "Featured in" press logo strip
- Cart badge indicator on quantity change
- Accessibility pass (focus rings, aria-labels on icon buttons)

### P2 — Nice to Have
- Dark mode
- Product variants (future flavours)
- Subscription / bundle upsell on PDP
- Analytics events (GA4 / Plausible)

## Files of Reference
- `/app/frontend/src/pages/LandingPage.jsx` — all sections
- `/app/frontend/src/index.css` — custom effects + brand CSS variables
- `/app/frontend/src/App.css` — component styling
- `/app/frontend/package.json` — dependencies (framer-motion added)

## Credentials
N/A (static frontend only)

## Changelog
- **Feb 2026 session 1**: Built 7 sections, brand styling, wave transitions.
- **Feb 2026 session 2 (latest)**: Problem section + footer redesign per Magic Mind reference; major visual-polish pass — grain, floats, shimmer, marquee, conic halos, sticker accents. Added new MarqueeSection between Product and Ingredients.
