# DESIGN_SYSTEM

## Typography
- `font.primary`: `"Gotham", "Inter", "Manrope", "system-ui", sans-serif`
- `font.mono`: `"ui-monospace", "SFMono-Regular", "Menlo", monospace`
- `text.display`: `clamp(2.2rem, 7vw, 4.5rem)` / `700` / `1.05`
- `text.h1`: `clamp(1.8rem, 4.6vw, 3rem)` / `650` / `1.1`
- `text.h2`: `clamp(1.4rem, 3vw, 2rem)` / `600` / `1.2`
- `text.h3`: `1.25rem` / `600` / `1.3`
- `text.body-lg`: `1.125rem` / `450` / `1.7`
- `text.body`: `1rem` / `420` / `1.65`
- `text.caption`: `0.875rem` / `500` / `1.4`

All typography tokens are registered in `tailwind.config.ts` under `fontSize` with integrated `lineHeight` and `fontWeight`.

## Spacing Scale
- `space.1`: `0.25rem`
- `space.2`: `0.5rem`
- `space.3`: `0.75rem`
- `space.4`: `1rem`
- `space.6`: `1.5rem`
- `space.8`: `2rem`
- `space.10`: `2.5rem`
- `space.12`: `3rem`
- `space.16`: `4rem`
- `space.20`: `5rem`
- `space.24`: `6rem`

### Section Spacing
- `section-sm`: `3rem` — compact sections (value prop, metrics, approach)
- `section-md`: `5rem` — standard sections (featured projects, final CTA)
- `section-lg`: `7rem` — generous sections (hero bottom, page top)
- `section-xl`: `9rem` — hero top on desktop

Section spacing tokens are in `tailwind.config.ts` under `spacing` and used as `py-section-*` or `pt-section-*` / `pb-section-*`.

## Radii
- `radius.sm`: `0.5rem`
- `radius.md`: `0.875rem`
- `radius.lg`: `1rem`
- `radius.xl`: `1.25rem`
- `radius.pill`: `9999px`

All radii are registered in `tailwind.config.ts` under `borderRadius`.

## Colors
### Light
- `bg.primary`: `#f7f7f6`
- `bg.surface`: `#ffffff`
- `fg.primary`: `#121212`
- `fg.secondary`: `#4b4b4b`
- `fg.muted`: `#707070`
- `line.subtle`: `#e8e8e8`
- `accent.primary`: `#0f172a`
- `accent.contrast`: `#ffffff`
- `gray.50`: `#f9f9f8`
- `gray.100`: `#f0f0ef`
- `gray.200`: `#e2e2e1`
- `gray.300`: `#c8c8c7`
- `gray.400`: `#a6a6a5`
- `gray.500`: `#7f7f7e`
- `gray.600`: `#656564`
- `gray.700`: `#494949`
- `gray.800`: `#2f2f2f`
- `gray.900`: `#1a1a1a`

### Dark
- `bg.primary`: `#0e0f12`
- `bg.surface`: `#15171b`
- `fg.primary`: `#f4f4f4`
- `fg.secondary`: `#c7c7c7`
- `fg.muted`: `#9a9a9a`
- `line.subtle`: `#2a2c31`
- `accent.primary`: `#f3f4f6`
- `accent.contrast`: `#101215`
- `gray.50`: `#f4f4f4`
- `gray.100`: `#d8d9dc`
- `gray.200`: `#bec0c5`
- `gray.300`: `#a2a5ad`
- `gray.400`: `#878b95`
- `gray.500`: `#6f747f`
- `gray.600`: `#575d69`
- `gray.700`: `#434955`
- `gray.800`: `#2f343f`
- `gray.900`: `#1f232b`

Gray tokens must be preferred for subtle hierarchy in dark surfaces (secondary separators, tertiary labels, and low-emphasis metadata), while semantic tokens (`fg.*`, `line.*`, `bg.*`) remain the default for primary UI states.

## Shadows
- `shadow.card`: `0 10px 30px rgba(0, 0, 0, 0.06)` (light)
- `shadow.card-dark`: `0 12px 32px rgba(0, 0, 0, 0.38)` (dark)

Shadows are applied automatically via `.premium-card` in `globals.css` with dark mode variant.

## Motion
- `motion.fast`: `160ms`
- `motion.base`: `220ms`
- `motion.slow`: `320ms`
- `easing.standard`: `cubic-bezier(0.22, 1, 0.36, 1)`

Duration tokens are in `tailwind.config.ts` under `transitionDuration` (used as `duration-fast`, `duration-base`, `duration-slow`). Easing is under `transitionTimingFunction` as `ease-premium`.

## Component Contracts
- `Button` (`src/components/ui/Button.tsx`): `primary`, `secondary`, `ghost` — supports `href` for links and `onClick` for buttons
- `Card` (`src/components/ui/Card.tsx`): `surface`, `outline` — supports Framer Motion props and optional hover lift
- `MobileMenu` (`src/components/ui/MobileMenu.tsx`): overlay menu with AnimatePresence
- `ThemeToggle` (`src/components/ui/ThemeToggle.tsx`): sun/moon SVG icons
- `LanguageSwitcher` (`src/components/ui/LanguageSwitcher.tsx`): radio group with pill buttons
- `Chip`: inline stack tag (`rounded-pill border px-3 py-1 text-xs`)

## Global Styles
- `.section-shell`: centered container with `max-w-6xl` and responsive horizontal padding
- `.premium-card`: surface background, subtle border, 1rem radius, card shadow with dark variant
- `:focus-visible`: global ring with `ring-2 ring-accent-primary ring-offset-2`

## Notes
- All visual values must reference this document.
- Avoid hardcoded values outside `globals.css` and base components.
- Font stack uses CSS variable `--font-primary` for easy swap to Gotham when available.
- Editable content is centralized in `src/config/*`, `src/content/*`, and `src/i18n/messages/*`.
