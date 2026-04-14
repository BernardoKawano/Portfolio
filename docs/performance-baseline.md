# Performance Baseline (CWV)

## Objetivo
- Melhorar LCP/INP/CLS nas rotas `/{locale}` e `/{locale}/projects`.
- Estabelecer baseline para comparação em cada PR.

## Metas (p75)
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

## Baseline técnico (build de produção)
Comando executado: `npm run build`

Antes das otimizações:
- `/{locale}`: `15.2 kB` (route size), `143 kB` first load JS
- `/{locale}/projects`: `27.8 kB` (route size), `156 kB` first load JS
- Shared first load JS: `80.5 kB`
- Middleware bundle: `54.8 kB`

Depois das otimizações:
- `/{locale}`: `6.9 kB` (route size), `140 kB` first load JS
- `/{locale}/projects`: `3.6 kB` (route size), `96.9 kB` first load JS
- Shared first load JS: `80.7 kB`
- Middleware bundle: `54.8 kB`

## Baseline Lighthouse
- Tentativa local bloqueada por ausência de Chrome no ambiente CLI.
- Erro observado: `No Chrome installations found`.
- Scripts adicionados para repetir medição quando o navegador estiver disponível:
  - `npm run perf:lighthouse:pt`
  - `npm run perf:lighthouse:projects`

## Como repetir medição (planejar -> executar -> avaliar -> replanejar -> documentar)
1. `npm run perf:ci`
2. `npm run dev`
3. Executar scripts Lighthouse (3-5 vezes por rota, usar mediana).
4. Comparar com este baseline e registrar ganhos/perdas.
5. Documentar resultado no changelog.
