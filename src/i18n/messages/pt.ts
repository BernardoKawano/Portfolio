export const ptMessages = {
  nav: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
  },
  home: {
    badge: "AI Engineering + Automações Operacionais",
    headline:
      "Automatizo processos com IA para reduzir trabalho manual e acelerar operações.",
    subheadline:
      "Sistemas práticos para transformar fluxos confusos em operações claras, escaláveis e confiáveis.",
    ctaPrimary: "Conversar no WhatsApp",
    ctaSecondaryGithub: "GitHub",
    ctaSecondaryEmail: "Email",
    valueTitle: "IA aplicada ao que realmente move a operação",
    valueItems: [
      "Automações de fluxo com foco em redução de atrito",
      "Otimização de processos para ganho de tempo real",
      "Sistemas operacionais com visão de engenharia e negócio",
    ],
    projectsTitle: "Projetos Selecionados",
    projectsSubtitle: "Estudos de caso com foco em problema, solução e impacto.",
    metricsTitle: "Impacto Mensurável",
    metricsSubtitle: "Resultados reais de projetos reais.",
    metrics: [
      { value: "200+", label: "horas de trabalho manual removidas" },
      { value: "5x", label: "menos etapas nos fluxos principais" },
      { value: "1k+", label: "documentos processados automaticamente" },
    ],
    approachTitle: "Como eu construo",
    approachText:
      "Priorizo clareza, execução e resultado operacional. Menos buzzword, mais sistema que funciona no dia a dia.",
    processTitle: "Do Caos ao Sistema",
    processIntro:
      "Começo pelo gargalo, não pela tecnologia. Identifico o atrito real, desenho a automação certa e entrego um sistema que opera de verdade.",
    processClosing: "O objetivo não é adicionar IA. É remover atrito.",
    processStages: [
      {
        title: "Detectar",
        description:
          "Encontrar onde o sistema quebra antes que alguém perceba.",
      },
      {
        title: "Enquadrar",
        description: "Separar o problema real do sintoma visível.",
      },
      {
        title: "Projetar",
        description:
          "Definir a linha entre julgamento humano e automação.",
      },
      {
        title: "Entregar",
        description: "Colocar em operação real. Não em demo.",
      },
    ],
    finalCtaTitle:
      "Se sua operação está travada em tarefas manuais, vamos resolver isso.",
    finalCtaText:
      "Aberto para oportunidades como AI Engineer e projetos de automação para empresas.",
  },
  projects: {
    title: "Projetos",
    subtitle:
      "Cada projeto é um problema real resolvido com engenharia e visão operacional.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      stack: "Stack",
      architecture: "Arquitetura",
      process: "Processo",
      impact: "Impacto",
      links: "Links",
      caseStudy: "Case detalhado",
      github: "GitHub",
      demo: "Demo",
    },
    items: {
      lumalector: {
        title: "LumaLector",
        wordmark: "Luma Lector",
        summary:
          "Frontend web para analise automatica de demonstrativos financeiros em PDF, controlo financeiro, calendario, relatorios e conversao para ficheiros RSDT (.241), integrado a uma API FastAPI.",
        impact:
          "Cerca de 2 horas de trabalho manual evitadas por dia útil — em média, ~40 horas recuperadas por mês.",
        problem:
          "Demonstrativos em PDF e tarefas de controlo financeiro costumam exigir trabalho manual, exportacoes e alinhamento com calendario fiscal sem um unico fluxo web.",
        solution:
          "App Next.js (App Router) com upload e analise, historico, calendario, exportacoes (txt, csv, excel, livro caixa) e conversao via multipart, consumindo endpoints REST do FastAPI; sessao com Google OAuth (Auth.js v5 beta) na UI, sem JWT anexado as chamadas ao backend no codigo atual.",
        architecture:
          "Browser -> Next.js + Auth.js -> src/lib/api.ts (HTTP) -> FastAPI (ex.: /api/analyze, /api/history, /api/calendar/*, /api/export/*, /api/convert, /api/health)",
        process:
          "Repositorio multi-artefacto (frontend/, backend/, Flet na raiz); para evolucao ou migracao: alinhar Node/LTS com build Next 16, variaveis AUTH_* e NEXT_PUBLIC_API_URL, CORS no FastAPI para o host do front, e smoke test lint/build/dev com backend na porta 8000.",
      },
    },
    lumaDemos: {
      sectionTitle: "Entrada, processamento e saída dos dados",
      sectionSubtitle:
        "Jornada ideal no produto (ilustrativa, sem API real): da landing ao calendário e ao consolidado mensal.",
      noteImportCalendar:
        "Importar para o calendário: após o resumo da análise do PDF, o botão envia os totais por dia para o calendário como receitas (descrição no formato “Demonstrativo” + data, valor = líquido do dia). O backend grava via POST /api/calendar/add-from-analysis e responde quantas entradas foram criadas e quantas ignoradas por duplicata — para não recriar à mão o que o PDF já extraiu.",
      notePrintBook:
        "Livro-caixa (PDF ou Excel): não exporta o PDF analisado — gera um relatório A4 (ou folha) com o movimento financeiro já registado no calendário num intervalo que escolhe (início e fim). Inclui cabeçalho do período, dias, linhas, totais e saldo, para arquivo e controlo. Se não houver lançamentos no período, não há ficheiro para descarregar.",
      analysis: {
        chrome: "Produto — Análise",
        steps: [
          { label: "Entrada", sublabel: "Landing · Google" },
          { label: "Dashboard", sublabel: "Abrir análise" },
          { label: "PDF", sublabel: "Upload e confirmar" },
          { label: "Processamento", sublabel: "Extração por página" },
          { label: "Resultado", sublabel: "Tabs · calendário · export" },
        ],
        landingHint: "/ — público",
        googleButton: "Entrar com Google",
        themeHint: "Tema",
        dashboardRoute: "/dashboard",
        analyzeCard: "Analisar Documento",
        navSecondary: "Histórico · Calendário · Relatórios · Configurações",
        uploadTitle: "Área de upload PDF",
        uploadHint: "Arraste ou selecione o ficheiro",
        fileName: "demonstrativo_jan.pdf",
        analyzeButton: "Analisar",
        analyzingTitle: "A processar o documento…",
        progressHint: "Processando página 8 de 12…",
        doneLabel: "Análise concluída",
        tabs: ["Diário", "Total", "Planilha"],
        addCalendarButton: "Importar para o calendário",
        importHint:
          "Um lançamento de receita por data analisada; duplicatas são ignoradas no servidor (resposta com contagens).",
        exportButton: "Exportar",
        rows: [
          { label: "Demonstrativo", value: "R$ 48.752,30" },
          { label: "Funarpen", value: "R$ 2.437,62" },
          { label: "ISSQN", value: "R$ 1.218,81" },
        ],
        totalLabel: "Líquido total",
        totalValue: "R$ 45.095,87",
        toastMessage: "3 receitas importadas · 0 duplicadas (add-from-analysis)",
        dailyDateLabel: "15 de janeiro de 2026 · segunda-feira",
        dailyModeHint:
          "Modo Diário: foco num único dia — linhas e subtotais desse dia, antes de ver o mês inteiro.",
        dailyLines: [
          { label: "Movimento manhã", value: "R$ 12.180,00" },
          { label: "Movimento tarde", value: "R$ 8.920,50" },
          { label: "Líquido do dia", value: "R$ 21.100,50" },
        ],
        totalModeHint:
          "Modo Total: soma de todas as rubricas extraídas do PDF — visão consolidada do demonstrativo.",
        sheetModeHint:
          "Modo Planilha: mesmos dados em colunas (data, texto, débito, crédito), prontos para exportar ou copiar.",
        sheetColumnLabels: ["Data", "Descrição", "Débito", "Crédito"],
        sheetRows: [
          { cells: ["03/01", "ISS retido", "1.218,81", "—"] },
          { cells: ["15/01", "Funarpen", "2.437,62", "—"] },
          { cells: ["31/01", "Receita líquida", "—", "45.095,87"] },
          { cells: ["—", "Totais período", "3.656,43", "45.095,87"] },
        ],
      },
      calendar: {
        chrome: "Produto — Calendário",
        steps: [
          { label: "Vista mensal", sublabel: "Resumo e marcações" },
          { label: "Lançamento", sublabel: "Formulário manual" },
          { label: "Consolidar", sublabel: "Totais do mês" },
          { label: "Livro-caixa", sublabel: "PDF ou Excel do período" },
        ],
        monthTitle: "Janeiro 2026",
        weekdaysShort: ["D", "S", "T", "Q", "Q", "S", "S"],
        headerNewEntry: "Novo lançamento",
        printBookLabel: "Gerar livro-caixa",
        printBookHint:
          "Escolhe data início e fim; o servidor filtra lançamentos do calendário e devolve PDF ou Excel (estrutura de livro-caixa). Opções como página inicial ou colorido seguem o fluxo web. Sem movimentos no período, não há ficheiro.",
        topExpense: "Despesas",
        topRevenue: "Receitas",
        topBalance: "Saldo",
        newEntryTitle: "Novo lançamento",
        fields: [
          { label: "Tipo", value: "Receita" },
          { label: "Descrição", value: "Receita avulsa — evento" },
          { label: "Valor", value: "R$ 1.239,45" },
          { label: "Data", value: "31/01/2026" },
        ],
        saveLabel: "Salvar",
        savedLabel: "Lançamento salvo",
        summaryTitle: "Resumo — Janeiro 2026",
        analysisHint: "Receitas importadas da análise e despesas manuais aparecem como bolinhas no dia.",
        calendarLegend: "Verde = receita · vermelho = despesa",
        revenueLabel: "Receitas",
        expenseLabel: "Despesas",
        balanceLabel: "Saldo",
        revenueValue: "R$ 46.335,32",
        expenseValue: "R$ 8.320,00",
        balanceValue: "R$ 38.015,32",
        bookTitle: "Gerar livro-caixa",
        bookPeriodTitle: "Movimentos registados no calendário entre:",
        bookFromLabel: "Início",
        bookFromValue: "01/01/2026",
        bookToLabel: "Fim",
        bookToValue: "28/02/2026",
        bookPdfLabel: "PDF (A4)",
        bookExcelLabel: "Excel",
        bookGenerating: "A montar o relatório (dias, linhas, totais e saldo)…",
        bookPreviewKicker: "Exemplo de página A4 (como no PDF gerado)",
        bookPreviewCaixa: "CAIXA",
        bookPreviewMonthBanner: "Janeiro / 2026",
        bookPreviewFolio: "Fl.: 1",
        bookPreviewEntradasCol: "Entradas",
        bookPreviewSaidasCol: "Saidas",
        bookPreviewDayBanner: "Dia 13/02/2026",
        bookPreviewRow1Id: "13022026-487",
        bookPreviewRow1Desc: "Aluguel",
        bookPreviewRow1Saida: "1.200,00",
        bookPreviewRow2Id: "13022026-329",
        bookPreviewRow2Desc: "Salario",
        bookPreviewRow2Entrada: "5.000,00",
        bookPreviewTotalDia: "Total do dia",
        bookPreviewTotalDiaEntrada: "5.000,00",
        bookPreviewTotalDiaSaida: "1.200,00",
        bookPreviewSaldoAtual: "Saldo atual",
        bookPreviewSaldoAtualValue: "3.800,00",
        bookPreviewTotalGeral: "Total geral",
        bookPreviewTotalGeralEntrada: "5.000,00",
        bookPreviewTotalGeralSaida: "1.200,00",
        bookPreviewSaldoFinal: "Saldo Final",
        bookPreviewSaldoFinalValue: "3.800,00",
        bookFlowHint:
          "O servidor filtra só o que está no calendário neste intervalo — não é o PDF do demonstrativo analisado.",
      },
    },
  },
  about: {
    title: "Sobre",
    intro:
      "Sou Bernardo Kawano, AI Engineer focado em automações práticas para operações reais.",
    introExtended:
      "Trabalho na interseção entre engenharia e operações — construindo sistemas de IA que reduzem trabalho manual, simplificam processos e geram valor mensurável para times e empresas.",
    philosophyTitle: "Como penso sobre sistemas",
    philosophyText:
      "Boas soluções não parecem complexas para o usuário. Eu removo ruído, elimino etapas desnecessárias e mantenho só o que gera resultado. Se uma solução precisa de manual para ser entendida, ainda não está pronta.",
    focusTitle: "Foco profissional",
    focusItems: [
      "Automação de workflows com IA",
      "Integração entre engenharia e operação",
      "Sistemas escaláveis com decisões orientadas por impacto",
      "Design de processos com contexto de negócio",
    ],
    approachTitle: "Abordagem",
    inspirationsTitle: "Referências que orientam meu trabalho",
    inspirations: [
      {
        author: "Steve Jobs",
        quote: "Simple can be harder than complex.",
        insight:
          "Por isso eu construo sistemas de IA que removem atrito em vez de adicionar ruído.",
      },
      {
        author: "Jony Ive",
        quote: "It's about bringing order to complexity.",
        insight: "De fluxos quebrados para sistemas realmente utilizáveis.",
      },
      {
        author: "Dieter Rams",
        quote: "Good design makes a product understandable.",
        insight: "O mesmo deve ser verdade para automação.",
      },
    ],
    approachItems: [
      {
        title: "Clareza sobre complexidade",
        description:
          "Sistemas simples são sistemas mantíveis. Otimizo para entendimento, não para sofisticação.",
      },
      {
        title: "Engenharia com visão de negócio",
        description:
          "Toda decisão técnica é fundamentada em impacto operacional e necessidade real.",
      },
      {
        title: "Entrega iterativa",
        description:
          "Entregar cedo, medir e refinar. Software funcionando supera planos perfeitos.",
      },
    ],
  },
  contact: {
    title: "Vamos conversar",
    subtitle:
      "Se você está contratando para AI Engineering ou precisa de consultoria em automação — compartilhe seu contexto e eu retorno com um caminho objetivo.",
    whatsapp: "Falar no WhatsApp",
    whatsappDesc: "Forma mais rápida de contato",
    email: "Enviar email",
    emailDesc: "Para demandas detalhadas",
    github: "Ver GitHub",
    githubDesc: "Veja como eu construo",
    linkedin: "LinkedIn",
    linkedinDesc: "Perfil profissional",
  },
  footer: {
    tagline: "IA prática para operações reais.",
    copyright: "Bernardo Kawano",
  },
};
