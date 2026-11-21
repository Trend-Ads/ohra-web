---
name: ohra-editorial-design-system
description: Design system guidelines, component templates, and UX patterns for OHRA's ultra-luxury editorial web experience. Captures the Hero bezel aesthetic, italic serif typography rules, staggered asymmetric galleries, radial dial gauge arcs, and floating pill navbar.
---

# OHRA Ultra-Luxury Editorial Design System

This skill codifies the design principles, typography, component patterns, and responsive standards developed for OHRA's luxury hospitality and property collective in Kerala, South India.

---

## 1. Core Visual Identity & Color Palette

The OHRA aesthetic balances warm architectural warmth with high-fashion editorial clarity:

| Token / Purpose | Value | Usage |
| :--- | :--- | :--- |
| **Canvas Background (Warm Light)** | `#fbf9f5` | Default page background for editorial and service sections |
| **Warm Sand / Card Fill** | `#f5f0e6` / `#ebe5d8` | Subtle card backdrops, stat dividers, and badge fills |
| **Luxury Caramel / Gold Accent** | `#faeecf` (hover: `#f7e6bc`) | High-priority pill CTA buttons, badge highlights |
| **Primary Text (High Contrast Dark)** | `#121411` / `#171717` | Clean sans-serif and editorial serif headlines |
| **Editorial Muted Text** | `#615e57` / `#737067` | Descriptive paragraphs, subtitles, and stat labels |
| **Deep Forest / Charcoal (Dark Canvas)** | `#0f120e` / `#161a15` | Hero backdrop, footer banner, and high-contrast callouts |
| **Dial Accent Lines** | `#969082` (major) / `#cfc9bc` (minor) | Precision SVG radial gauge tick marks |

---

## 2. Typography Guidelines

### The "Editorial Emphasis" Rule
Headlines combine clean, modern geometric sans-serif (`clamp()` fluid font sizing) with **italic serif accents** (`Playfair Display`, `Georgia`, or `ui-serif` italic) on key emotional words:

```tsx
<h2 className="editorial-heading">
  Our agency handles <em>all types</em> of property transactions,
  offering each client a <em>seamless</em> and <em>personalized</em> experience.
</h2>
```

```css
.editorial-heading {
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(1.9rem, 3.4vw, 3.1rem);
  font-weight: 500;
  line-height: 1.25;
  color: #141414;
}

.editorial-heading em {
  font-family: var(--font-geist-serif), "Playfair Display", Georgia, serif;
  font-style: italic;
  font-weight: 400;
}
```

---

## 3. Key Component Blueprints

### A. Floating Curvy Navbar
* **Resting state**: Clean, integrated transparent/frosted bar inside the hero frame.
* **Scrolled state**: Morphs into a floating pill with `border-radius: 999px`, frosted glass backdrop filter (`backdrop-filter: blur(16px)`), subtle bezel border (`1px solid rgba(255,255,255,0.18)`), and maximum stacking elevation (`z-index: 99999`).
* **Branding**: Clean typographic logo text (`OHRA`), no extraneous icons.

### B. Hero Section Bezel
* Framed inside a continuous rounded boundary:
  ```css
  .hero {
    border-radius: clamp(1.25rem, 2.2vw, 2.25rem);
    margin: clamp(0.4rem, 1vw, 0.85rem);
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
  }
  ```

### C. Staggered Asymmetric Portrait Gallery (Section 2 Pattern)
* 4-column responsive grid where each card has a calculated downward vertical translation (`0`, `2.5rem`, `4.75rem`, `0.75rem`).
* Features a signature dark "Action Card" with overlay title and circular arrow button (`↗`).
* Generous bottom padding (`clamp(6.5rem, 11vw, 10.5rem)`) to prevent card clipping.

### D. Radial Dial Gauge Arc (Section 3 Pattern)
* Upward concave SVG dial track spanning `-75°` to `+75°` with radial tick marks.
* 7 orbiting cards positioned along the arc with radius `460px` and angular step `20°`.
* Smooth auto-rotation (4.5s interval), pausing on hover/touch, with click-to-center selection.
* Centered pill badge, headline, subtitle, and butterscotch CTA pill with dark circle arrow (`»`).
* 4-column divided statistics row with vertical hairline rules.

---

## 4. Engineering & Styling Rules
1. **Direct CSS Classes**: Due to Next.js Turbopack custom CSS loader rules, maintain explicit global utility and component classes in `home.css` (imported into `globals.css`) rather than relying on CSS Modules (`styles.xyz`).
2. **Fluid Clamp Sizing**: Always use `clamp()` for margins, paddings, headings, and card dimensions for responsive scaling across mobile (375px), tablet (768px), desktop (1280px), and ultrawide screens.
3. **Interactive Accessibility**: All clickable cards must provide keyboard triggers (`Enter` / `Space`), `aria-label`, and clear focus rings.
