# APP_FLOW

## Entry
1. Usuario acessa `/`.
2. Middleware detecta locale preferido (`pt` ou `en`) e redireciona para `/{locale}`.
3. Tema inicia por preferencia salva; fallback para `prefers-color-scheme`.

## Main Routes
- `/{locale}`: Home com proposta de valor, projetos em destaque, metricas e CTA final.
- `/{locale}/projects`: Galeria de estudos de caso.
- `/{locale}/about`: Posicionamento profissional e filosofia.
- `/{locale}/contact`: Conversao com prioridade para WhatsApp.

## Primary User Journeys
- Recrutador: Home -> Projects -> Contact
- Lead de consultoria: Home -> About -> Contact
- Validador tecnico: Home -> GitHub -> Projects
