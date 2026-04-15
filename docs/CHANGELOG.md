# Changelog

## 2026-04-15

- Dark mode: logos de projetos agora preservam as cores originais (remoção de invert/brightness) com contêiner neutro para contraste.
- Design system: adicionada escala `gray.50-900` em light/dark, mapeada no Tailwind e documentada.
- Conteúdo: `ProjectCopy` agora aceita trechos semânticos com ênfase (`strong`) para negrito parcial em textos.
- UI: renderização de textos de projetos atualizada para interpretar trechos semânticos com fallback para string simples.
- Demos: timings centralizados em `src/config/demoTiming.ts` e autoplay/animações desacelerados para leitura mais confortável.
