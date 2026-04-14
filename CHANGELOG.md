# Changelog

## 2026-04-13 - Performance CWV roadmap implementado
- Reduzi custo de hidratação na home removendo animações client-side em blocos estáticos.
- Converti cards para renderização sem `framer-motion` por padrão (hover via CSS).
- Apliquei code splitting nos walkthroughs de projetos com `next/dynamic`.
- Migrei logo de `ProjectArticle` para `next/image`.
- Consolidei fallback de redirecionamento `/` para locale padrão em `app/page.tsx`.
- Instrumentei coleta de Web Vitals (`LCP`, `INP`, `CLS`) com envio para `/api/vitals`.
- Adicionei scripts de guardrail (`perf:ci`, scripts Lighthouse) e baseline em `docs/performance-baseline.md`.
