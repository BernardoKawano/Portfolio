# Bernardo Kawano — Portfolio

Personal portfolio built with Next.js, showcasing AI engineering projects and operational automations.

## Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion
- **i18n:** Custom dictionary-based (PT / EN)
- **Testing:** Vitest

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layouts
│   └── [locale]/     # Locale-based routing (pt, en)
├── components/       # UI components & page sections
│   ├── layout/       # Header, Footer
│   ├── sections/     # Home sections (Hero, Projects, Metrics, Process)
│   ├── projects/     # Project walkthrough components
│   └── ui/           # Primitives (Button, Card, ThemeToggle)
├── config/           # Site config & navigation
├── content/          # Project data definitions
├── i18n/messages/    # PT and EN translation dictionaries
└── lib/              # Utilities (i18n, theme, cn)
```

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm run dev`   | Start dev server       |
| `npm run build` | Production build       |
| `npm run lint`  | ESLint check           |
| `npm test`      | Run Vitest test suite  |

## License

MIT
