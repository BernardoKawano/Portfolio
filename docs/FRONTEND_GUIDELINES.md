# FRONTEND_GUIDELINES

## Stack
- Next.js App Router
- TypeScript strict
- Tailwind CSS
- Framer Motion para interacoes sutis

## Architecture
- Rotas com locale em `src/app/[locale]`
- Conteudo centralizado em `src/config` e `src/content`
- Traducoes em `src/i18n/messages`
- Utilitarios de locale e tema em `src/lib`

## Rules
- Nao misturar copy direto em paginas quando houver chave de traducao equivalente.
- Nao adicionar funcionalidade de negocio; foco em camada visual e de apresentacao.
- Estados de hover/focus sempre explicitos para acessibilidade.
- Componentes devem ser reutilizaveis e pequenos.

## Styling
- Usar tokens definidos em `DESIGN_SYSTEM.md`.
- Evitar classes utilitarias com valores arbitrarios.
- Preservar ritmo de secoes com paddings consistentes.

## Accessibility
- Navegacao por teclado completa no header e CTAs.
- Contraste suficiente em dark e light.
- Uso de landmarks semanticos (`header`, `main`, `footer`, `nav`).
