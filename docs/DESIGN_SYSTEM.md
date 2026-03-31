# DESIGN_SYSTEM

## Typography
- `font.primary`: `"Gotham", "Inter", "Manrope", "system-ui", sans-serif`
- `font.mono`: `"ui-monospace", "SFMono-Regular", "Menlo", monospace`
- `text.display`: `clamp(2.2rem, 7vw, 4.5rem)` / `700` / `1.05`
- `text.h1`: `clamp(1.8rem, 4.6vw, 3rem)` / `650` / `1.1`
- `text.h2`: `clamp(1.4rem, 3vw, 2rem)` / `600` / `1.2`
- `text.body-lg`: `1.125rem` / `450` / `1.7`
- `text.body`: `1rem` / `420` / `1.65`
- `text.caption`: `0.875rem` / `500` / `1.4`

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

## Radii
- `radius.sm`: `0.5rem`
- `radius.md`: `0.875rem`
- `radius.lg`: `1rem`
- `radius.xl`: `1.25rem`
- `radius.pill`: `9999px`

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

### Dark
- `bg.primary`: `#0e0f12`
- `bg.surface`: `#15171b`
- `fg.primary`: `#f4f4f4`
- `fg.secondary`: `#c7c7c7`
- `fg.muted`: `#9a9a9a`
- `line.subtle`: `#2a2c31`
- `accent.primary`: `#f3f4f6`
- `accent.contrast`: `#101215`

## Shadows
- `shadow.card`: `0 10px 30px rgba(0, 0, 0, 0.06)`
- `shadow.card-dark`: `0 12px 32px rgba(0, 0, 0, 0.38)`

## Motion
- `motion.fast`: `160ms`
- `motion.base`: `220ms`
- `motion.slow`: `320ms`
- `easing.standard`: `cubic-bezier(0.22, 1, 0.36, 1)`

## Component Contracts
- `Button`: `primary`, `secondary`, `ghost`
- `Card`: `surface`, `outline`
- `Section`: `default`, `dense`
- `Chip`: stack tag compacta

## Notes
- Todos os valores visuais devem referenciar este documento.
- Evitar valores hardcoded fora de `globals.css` e componentes base.
