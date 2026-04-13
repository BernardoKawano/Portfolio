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
    metricsTitle: "Impacto Estimado",
    metricsSubtitle: "Estimativas baseadas em uso operacional dos projetos.",
    metrics: [
      { value: "~40h/mês", label: "de trabalho manual evitadas", context: "Estimativa no LumaLector, baseada no fluxo de análise diária de demonstrativos." },
      { value: "5x", label: "menos etapas nos fluxos principais", context: "Comparação entre processo manual e fluxo automatizado no LumaGestor." },
      { value: "1k+", label: "documentos processados", context: "Volume acumulado de PDFs analisados durante uso interno do LumaLector." },
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
      caseStudy: "Mais detalhes",
      detailsHeading: "Detalhes do produto",
      attributionsHeading: "Atribuições",
      github: "GitHub",
      demo: "Demo",
      privateRepo: "Repositório privado",
      expandCaseStudy: "Ver estudo completo",
      collapseCaseStudy: "Recolher estudo",
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
          "App Next.js (App Router) com upload, analise, historico, calendario e exportacoes, consumindo REST do FastAPI. Escolha de FastAPI sobre Django REST por async nativo e velocidade de iteracao no MVP. Auth via Google OAuth (Auth.js v5 beta) na UI; JWT no backend nao implementado no escopo atual — decisao consciente para priorizar o fluxo de analise.",
        architecture:
          "Browser -> Next.js + Auth.js -> src/lib/api.ts (HTTP) -> FastAPI (ex.: /api/analyze, /api/history, /api/calendar/*, /api/export/*, /api/convert, /api/health)",
        process:
          "Repositorio multi-artefacto (frontend/, backend/, Flet na raiz); para evolucao ou migracao: alinhar Node/LTS com build Next 16, variaveis AUTH_* e NEXT_PUBLIC_API_URL, CORS no FastAPI para o host do front, e smoke test lint/build/dev com backend na porta 8000.",
      },
      lumagestor: {
        title: "LumaGestor",
        wordmark: "Luma Gestor",
        summary:
          "SPA de gestao financeira de obras: solicitacoes de pagamento com PDF profissional, Kanban de status (Gerada, Enviada, Paga) e painel por obra ligado a Google Drive e Google Sheets — sem planilhas soltas.",
        impact:
          "Um unico fluxo web para solicitar, acompanhar e consolidar por obra; ao marcar paga, o valor entra na planilha de acompanhamento sem re-digitacao.",
        problem:
          "Equipas de obra costumam espalhar pedidos, comprovativos e totais entre ficheiros e planilhas, sem visao unificada do que foi gerado, enviado ou pago nem do saldo por obra.",
        solution:
          "Wizard em tres etapas com PDF e envio para a pasta da obra; Kanban de status que atualiza a planilha ao marcar pago; painel por obra via leitura/escrita no Sheets. SPA com Vite em vez de Next.js por ser uma ferramenta interna sem necessidade de SSR ou SEO. Integracao direta com Google Drive/Sheets para evitar backend proprio nesta fase.",
        architecture:
          "Browser (Vite + React Router) -> UI por rotas /, /wizard, /status, /acompanhamento -> integracao com pastas e ficheiros no Google Drive e dados tabulares no Google Sheets; geracao de PDF com @react-pdf/renderer.",
        process:
          "Conteudo editorial da landing em src/content/homeLanding.ts e pagina em src/pages/HomePage.tsx; smoke test com Vitest sobre contratos de conteudo; evolucao: alinhar credenciais Google API, IDs de pastas/planilhas e modos demo vs producao.",
        details:
          "O Luma Gestor concentra em tres frentes o que antes vivia espalhado em planilhas e pastas. Primeiro, o gerador de solicitacoes: um wizard em tres passos guia a escolha da obra (ligada a uma pasta no Google Drive), o lancamento de itens e notas de reembolso, e a revisao final. Nessa etapa o sistema monta um PDF profissional com @react-pdf/renderer e deixa o documento pronto para envio ou arquivo na propria arvore da obra. Segundo, o quadro de status estilo Kanban separa solicitacoes em Gerada, Enviada e Paga: a equipa ve de relance onde cada pedido esta e, ao marcar como paga, o valor pode refletir-se automaticamente na planilha de acompanhamento — sem voltar a copiar valores a mao. Terceiro, o acompanhamento por obra agrega totais de contrato, adicionais, recebimentos do cliente e pagamentos a funcionarios, lendo e gravando na mesma planilha que alimenta o dia a dia financeiro da obra. A SPA (Vite, React Router) expoe rotas dedicadas — /wizard, /status, /acompanhamento — para cada fase, mantendo a home em / como vitrine do produto.",
        attributions: [
          {
            role: "Produto, fluxos e especificacao",
            credit:
              "Definicao do percurso solicitacao → status → obra, alinhada a operacao real de construcao civil e a integracao com Drive/Sheets.",
          },
          {
            role: "Engenharia frontend (SPA)",
            credit:
              "Bernardo Kawano — implementacao da interface, wizard, Kanban, painel por obra, geracao de PDF e integracao com APIs Google no cliente.",
          },
          {
            role: "Stack e bibliotecas",
            credit:
              "React 19, Vite 7, TypeScript, Tailwind CSS 4, React Router 7, @react-pdf/renderer, date-fns e ecossistema de apoio (ex.: react-dropzone, html2canvas onde aplicavel no repositorio).",
          },
        ],
      },
      "tech-challenge-1": {
        title: "OncoClass AI - Suporte a Diagnóstico de Câncer de Mama",
        wordmark: "OncoClass AI",
        summary:
          "Pipeline de machine learning para classificação binária (benigno vs maligno) com EDA, pré-processamento, treino comparativo (Logistic Regression, Random Forest e KNN) e geração automática de relatórios.",
        impact:
          "Projeto de triagem para cancer de mama que prioriza detectar casos malignos na primeira avaliacao, reduzindo risco de falso negativo e fortalecendo o apoio a decisao clinica inicial.",
        problem:
          "Na triagem de câncer de mama, falsos negativos podem atrasar intervenção clínica; era necessário priorizar sensibilidade na detecção de casos malignos.",
        solution:
          "Pipeline ponta a ponta em Python: split estratificado (60/20/20), StandardScaler, PCA (95% da variancia) e otimizacao por GridSearchCV. Recall priorizado sobre accuracy por ser triagem medica — falso negativo tem custo clinico maior que falso positivo. Modelos classicos (LR, RF, KNN) escolhidos por interpretabilidade e auditabilidade antes de escalar para deep learning.",
        architecture:
          "Estrutura modular em data/, src/, notebooks/ e reports/: train.py orquestra carga de dados, EDA, modelagem, avaliação e exportação de artefatos (JSON, CSV e figuras).",
        process:
          "Carregamento do dataset -> EDA visual/textual -> pré-processamento -> treino e otimização de 3 modelos -> avaliação em teste -> publicação de métricas em reports/final_results.json e visualizações em reports/figures.",
        attributions: [
          {
            role: "Contexto acadêmico",
            credit: "FIAP - Tech Challenge Team.",
          },
          {
            role: "Base de dados e referências",
            credit:
              "Breast Cancer Wisconsin (UCI) e ecossistema scikit-learn para implementação do pipeline.",
          },
        ],
      },
      "tech-challenge-2": {
        title: "Rota VRP (Vehicle Routing Problem) - Otimizacao de Rotas Medicas",
        summary:
          "Sistema de otimizacao de rotas para distribuicao de suprimentos medicos em Sao Paulo, usando algoritmo genetico com restricoes de prioridade, capacidade e autonomia, visualizacao web em tempo real, mapas interativos com Folium e camada opcional de LLM local via Ollama.",
        impact:
          "Rotas priorizam entregas criticas e equilibram capacidade e autonomia dos veiculos; a operacao ganha visibilidade com mapa interativo e relatorio por rodada.",
        problem:
          "Hospitais e centros medicos precisam receber suprimentos urgentes; o desafio e minimizar distancia total, priorizar entregas criticas e respeitar limites operacionais dos veiculos.",
        solution:
          "Motor de algoritmo genetico com selecao, crossover, mutacao e elitismo, fitness multiobjetivo com penalidades de capacidade/autonomia. AG escolhido sobre solver exato (OR-Tools) por flexibilidade em restricoes customizadas e escalabilidade para cenarios reais. LLM local (Ollama) em vez de API externa para manter operacao offline e sem custo por chamada.",
        architecture:
          "Arquitetura modular em src/: models, genetic_algorithm, visualization, llm_integration e utilitarios; main.py orquestra o fluxo ponta a ponta, com web_viewer em Streamlit para apresentacao no navegador.",
        process:
          "Configuracao interativa (veiculos, pontos, geracoes) -> execucao do algoritmo genetico com callbacks por geracao e metricas -> visualizacao web -> geracao de mapa Folium -> (opcional) instrucoes e relatorio com Ollama -> persistencia de contexto para Q&A.",
        details:
          "Este projeto resolve um cenario real de logistica critica: distribuir suprimentos medicos em uma cidade complexa como Sao Paulo, com prioridades clinicas e limitacoes operacionais por veiculo. O nucleo e um algoritmo genetico com selecao, crossover, mutacao e elitismo, orientado por fitness multiobjetivo para equilibrar distancia total, atendimento de pontos prioritarios, capacidade e autonomia. A operacao nao fica numa caixa-preta: durante a execucao, a visualizacao web permite acompanhar o comportamento das rotas em tempo real; ao final, o mapa Folium entrega leitura espacial clara para analise operacional e comunicacao com stakeholders. Como camada adicional, o projeto integra Ollama (llama2) para gerar instrucoes de condutor e relatorios gerenciais sem dependencia obrigatoria de servico externo, mantendo uma opcao OpenAI quando necessario. O resultado e um case completo de engenharia aplicada: modelagem, otimizacao, visualizacao, interface web em Streamlit e trilha de qualidade com Pytest, Black, Flake8, Pylint e MyPy.",
        attributions: [
          {
            role: "Contexto academico e orientacao",
            credit: "FIAP",
          },
          {
            role: "Bibliotecas open source",
            credit: "Comunidade Python",
          },
          {
            role: "LLM local",
            credit: "Ollama Team",
          },
          {
            role: "Base cartografica",
            credit: "OpenStreetMap",
          },
        ],
      },
      "tech-challenge-3": {
        title: "ClinGuard AI",
        summary:
          "Copiloto clinico para apoio educacional que gera respostas contextualizadas, aplica guardrails de seguranca e registra trilha de auditoria, com simulador visual web para demonstracao do fluxo.",
        impact:
          "Chat copiloto para medicos e equipes clinicas, treinado com mais de 900 conteudos medicos, com respostas contextualizadas, guardrails de seguranca e trilha de auditoria para acelerar decisoes com mais confianca e padronizacao.",
        problem:
          "Profissionais e estudantes de saude lidam com muito volume de informacao, pouco tempo para consulta e necessidade de rastreabilidade do que foi consultado.",
        solution:
          "Pipeline com pergunta e contexto clinico, geracao por LLM fine-tunada, guardrails de risco e auditoria completa. Phi-2 (2.7B) escolhido sobre modelos maiores por custo de fine-tuning e possibilidade de rodar em GPU de consumo. QLoRA para treinar apenas ~1% dos parametros, mantendo qualidade proxima de full fine-tuning.",
        architecture:
          "Arquitetura modular em Python (langchain_integration, security, logging, evaluation) com fluxo em grafo via LangGraph e simulador visual web em pagina unica.",
        process:
          "Fine-tuning do Microsoft Phi-2 com QLoRA em dataset anonimizado (963 exemplos), selecao do melhor checkpoint por eval_loss e validacao por script de teste e artefatos de avaliacao.",
        attributions: [
          {
            role: "Modelo base",
            credit: "Microsoft Phi-2 (2.7B parametros).",
          },
          {
            role: "Ecossistema e bibliotecas",
            credit:
              "Hugging Face Transformers/PEFT/BitsAndBytes, LangChain e LangGraph.",
          },
          {
            role: "Referencias tecnicas",
            credit:
              "Documentacoes de PEFT e Phi-2, e artigo QLoRA listados no MODEL.md.",
          },
        ],
      },
      "multimodal-clinical-monitoring": {
        title: "Sistema MedWatch AI",
        wordmark: "MedWatch AI",
        summary:
          "Sistema multimodal de IA para monitoramento clinico que processa video cirurgico, audio e texto, faz fusao com LangGraph e gera relatorios e alertas para apoio a equipe medica.",
        impact:
          "O sistema junta video, audio e texto em um so lugar e avisa quando identifica sinais de piora do paciente ou possiveis complicacoes no procedimento. Assim, a equipe atende mais rapido e acompanha melhor cada caso.",
        problem:
          "Equipes clinicas precisam identificar riscos precoces com sinais fragmentados em video, audio e texto, sem um fluxo integrado e operacional.",
        solution:
          "Pipeline com classificacao por tipo de entrada, analise por midia, fusao multimodal via LangGraph e alertas. LangGraph escolhido sobre orquestracao sequencial por suportar roteamento condicional e estado compartilhado entre nos. Autoencoders proprios para anomalia em vez de thresholds fixos, com treino obrigatorio para cada dominio (video cirurgico e audio emocional).",
        architecture:
          "Arquitetura modular em src/video, src/audio, src/azure, src/fusion, src/reports e src/alerts, orquestrada por LangGraph no fluxo classificar -> processar_* -> fusao -> relatorio -> enviar_alertas.",
        process:
          "Setup de ambiente e .env, download de datasets/modelos, treino obrigatorio dos autoencoders de video e audio, e execucao das demos com run_demo.py (--text, --audio ou --video) ou notebook de apresentacao.",
        attributions: [
          {
            role: "Dataset cirurgico",
            credit: "CAMMA CholecT45.",
          },
          {
            role: "Modelo de instrumentos",
            credit: "Roboflow Universe (cholect45-x6lm4) e DocCheck.",
          },
          {
            role: "Dataset de audio emocional",
            credit: "RAVDESS (via scripts de download).",
          },
          {
            role: "Infra e servicos de IA",
            credit: "Azure Speech Services e Azure Video Indexer (opcional).",
          },
        ],
      },
    },
    multimodalClinicalWalkthrough: {
      sectionTitle: "Demonstracao do fluxo operacional",
      sectionSubtitle:
        "Animacao em tres etapas para mostrar como o sistema operava: entrada multimidia, orquestracao do pipeline e entrega de alertas e relatorio.",
      videoBadge: "Demo ilustrativa",
      noteIllustrative:
        "Representacao visual do comportamento real documentado no repositorio, sem executar o backend em tempo real.",
      sceneLabels: [
        "Entrada: texto, audio ou video",
        "Processamento com LangGraph",
        "Saida: relatorio e alertas",
      ],
      tabs: {
        input: "Entrada",
        pipeline: "Pipeline",
        output: "Resultado",
      },
      controls: {
        autoplay: "Reproducao automatica",
        autoplayHint:
          "Ative para alternar as cenas automaticamente; desative para navegar manualmente.",
        selectSceneHint: "Clique nas abas para visualizar cada etapa do fluxo.",
      },
      input: {
        chrome: "Monitoramento Clinico - Entrada",
        route: "run_demo.py (--text | --audio | --video)",
        title: "Classificacao de tipo de entrada",
        hint:
          "O sistema identifica o tipo de midia e prepara o estado para o roteamento condicional.",
        sampleText: "Paciente em acompanhamento com queixas de ansiedade.",
        sampleAudio: "data/sample_audio_anxiety.wav",
        sampleVideo: "data/sample_video_cholect45.mp4",
      },
      pipeline: {
        chrome: "Monitoramento Clinico - Processamento",
        route: "src/fusion/graph.py",
        title: "Pipeline multimodal orquestrado por grafo",
        status: "Executando",
        nodes: [
          "classificar",
          "processar_video | processar_audio | processar_texto",
          "fusao",
          "relatorio",
          "enviar_alertas",
        ],
      },
      output: {
        chrome: "Monitoramento Clinico - Resultado",
        route: "src/reports/report_generator.py + src/alerts/notifier.py",
        title: "Entrega de relatorio clinico e alertas",
        reportSnippet:
          "Resumo consolidado: sinais de risco detectados em audio/video e recomendacoes para acompanhamento da equipe.",
        alertsSnippet:
          "Alertas preliminares: padrao_vocal_atipico (score elevado) e verificacao de anomalia em frames cirurgicos.",
        complianceTag: "Fluxo concluido",
      },
    },
    lumaDemos: {
      sectionTitle: "Entrada, processamento e saída dos dados",
      sectionSubtitle:
        "Jornada ideal no produto (ilustrativa, sem API real): da landing ao calendário e ao consolidado mensal.",
      controls: {
        autoplay: "Reproducao automatica",
        autoplayHint:
          "Ative para alternar entre Analise e Calendario sozinho; desative para escolher manualmente.",
        selectSceneHint:
          "Clique nas abas para ver a demo de analise do PDF ou a do calendario e livro-caixa.",
      },
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
    techChallenge2Walkthrough: {
      sectionTitle: "Como o sistema funciona na web",
      sectionSubtitle:
        "Animacao em cinco cenas no mesmo estilo dos outros cases: Ao vivo, Mapa, Visao geral, Relatorio e Chat.",
      videoBadge: "Demo ilustrativa",
      noteIllustrative:
        "Fluxo visual para demonstrar a experiencia do web_viewer sem depender de artefatos locais no momento da visita.",
      sceneLabels: [
        "Executa simulacao e acompanha progresso",
        "Mostra mapa interativo mais recente",
        "Resume rotas por veiculo",
        "Exibe relatorio em markdown",
        "Permite Q&A contextual com LLM",
      ],
      tabs: {
        live: "Ao vivo",
        map: "Mapa",
        overview: "Visao geral",
        report: "Relatorio",
        chat: "Chat",
      },
      controls: {
        autoplay: "Reproducao automatica",
        autoplayHint:
          "Ative para alternar as cenas sozinho; desative para explorar clicando nas abas.",
        selectSceneHint: "Clique nas abas para ver cada parte do web_viewer.",
      },
      live: {
        chrome: "Tech Challange 2 - Ao vivo",
        route: "web_viewer/app_streamlit.py · aba Ao vivo",
        status: "Simulacao em execucao",
        action: "Rodando AG",
        metricGeneration: "Geracao",
        metricDistance: "Melhor distancia",
        metricPriority: "Entregas criticas",
        progress: "Progresso da execucao",
        simulationCaption: "Visualizacao em tempo real (interface web)",
      },
      map: {
        chrome: "Tech Challange 2 - Mapa",
        route: "outputs/maps/latest.html",
        title: "Mapa Folium · export HTML interativo",
        subtitle:
          "No projeto real: Folium + Leaflet embute o HTML gerado (PolyLine por veiculo, marcadores, popups) dentro do Streamlit.",
        info: "Quando nao houver arquivo de mapa, o viewer sugere rodar python main.py para gerar os artefatos.",
        embedNote:
          "Camada Mapa no Streamlit carrega o .html mais recente de outputs/maps/ via st.components.v1.html (altura fixa, rolagem nativa do iframe).",
        layersNote:
          "Folium empilha: mapa base OSM, linhas de rota coloridas por frota, marcadores com prioridade (P1/P2) e popups com dados da parada.",
        legendTitle: "Legenda",
        legendDepot: "CD / partida",
        legendCritical: "Entrega P1 (critica)",
        legendStandard: "Entrega P2",
        legendPolyline: "PolyLine = ordem da rota do veiculo",
        districtNorth: "Zona Norte",
        districtEast: "Zona Leste",
        districtSouth: "Zona Sul",
        attribution: "Dados cartograficos · OpenStreetMap",
        uiFolium: "Folium",
        uiLeaflet: "Leaflet",
        uiEmbed: "st.components.v1.html",
        poiCd: "CD · suprimentos",
        poiHNorte: "H. Municipal Norte",
        poiUpa: "UPA Leste",
        poiSouth: "Posto Sul",
        poiIc: "IC cardio · P1",
        poiHub: "Hub logistico Leste",
      },
      overview: {
        chrome: "Tech Challange 2 - Visao geral",
        route: "outputs/session/latest_context.json",
        title: "Resumo operacional por veiculo",
        rows: [
          { vehicle: "V-01", stops: "7", distance: "54.2 km", priority: "100%" },
          { vehicle: "V-02", stops: "6", distance: "49.8 km", priority: "92%" },
          { vehicle: "V-03", stops: "5", distance: "45.1 km", priority: "89%" },
        ],
      },
      report: {
        chrome: "Tech Challange 2 - Relatorio",
        route: "outputs/reports/*.md",
        title: "Resumo gerencial da rodada",
        bullets: [
          "Distancia total reduzida com respeita a capacidade e autonomia dos veiculos.",
          "Entregas com prioridade alta atendidas primeiro no plano final.",
          "Rota final publicada com contexto para auditoria operacional.",
        ],
        footer: "Se o relatorio nao existir, a interface indica comando de geracao e status esperado.",
      },
      chat: {
        chrome: "Tech Challange 2 - Chat",
        route: "llm_integration/qa_system.py",
        prompt: "Quais pontos ficaram com maior risco logistico e qual rota devo priorizar agora?",
        answer:
          "Com base no contexto da ultima execucao, priorize os hospitais de risco alto no eixo norte e reavalie o veiculo V-02 para reduzir tempo de resposta.",
        modelBadge: "Ollama · llama2",
      },
    },
    techChallenge1Walkthrough: {
      sectionTitle: "Tour completo do OncoClass AI",
      sectionSubtitle:
        "Demonstracao em tres cenas: exploracao dos dados, treino/otimizacao e leitura dos resultados finais.",
      videoBadge: "Demo ilustrativa",
      noteIllustrative:
        "Fluxo visual para mostrar as funcoes implementadas no notebook e no pipeline principal sem depender da execucao ao vivo no navegador.",
      sceneLabels: [
        "Carregamento do dataset e EDA",
        "Pre-processamento + treino dos modelos",
        "Metricas finais e artefatos",
      ],
      tabs: {
        dataset: "Dataset + EDA",
        training: "Treino",
        results: "Resultados",
      },
      controls: {
        autoplay: "Reproducao automatica",
        autoplayHint:
          "Ative para alternar as cenas sozinho; desative para explorar manualmente.",
        selectSceneHint: "Clique nas abas para acompanhar o tour completo do projeto.",
      },
      dataset: {
        chrome: "OncoClass AI - Dataset e EDA",
        route: "notebooks/02_colab_pipeline_publico.ipynb + src/eda.py",
        datasetTitle: "Breast Cancer Wisconsin (Diagnostic)",
        datasetMeta: "569 amostras · 30 features · classes benigno/maligno",
        stepLoad: "1) Carrega CSV local ou dataset do sklearn",
        stepEda: "2) Analisa distribuicao de classes e estatisticas",
        stepOutliers: "3) Investiga outliers por feature",
        stepCorrelation: "4) Gera matriz de correlacao e relatorio visual",
        note: "Saidas desta etapa: relatorio textual/HTML e figuras em reports/figures.",
      },
      training: {
        chrome: "OncoClass AI - Modelagem",
        route: "src/train.py",
        title: "Pipeline de treino e validacao",
        split: "Split estratificado 60/20/20 (treino/validacao/teste).",
        preprocessing: "StandardScaler + PCA (95% da variancia) antes da modelagem.",
        modelsTitle: "Modelos avaliados",
        model1: "Logistic Regression",
        model2: "Random Forest (GridSearchCV)",
        model3: "KNN (GridSearchCV)",
        objective: "Objetivo principal: maximizar recall para triagem.",
      },
      results: {
        chrome: "OncoClass AI - Resultados",
        route: "reports/final_results.json + reports/models_summary.csv",
        title: "Comparativo final e melhor modelo",
        bestModelLabel: "Melhor por recall: Logistic Regression",
        recallLabel: "Recall: 0.9762",
        accuracyLabel: "Accuracy: 0.9737",
        rocAucLabel: "ROC AUC: 0.9954",
        reportNote:
          "O pipeline tambem salva matriz de confusao, curvas ROC/PR e analises complementares para leitura rapida.",
        outputFiles: "Artefatos: JSON, CSV e visualizacoes em reports/figures",
      },
    },
    techChallenge3Walkthrough: {
      sectionTitle: "Demonstracao web do copiloto clinico",
      sectionSubtitle:
        "Animacao de conversa com chat e execucao do fluxo do LangGraph: entrada, geracao, guardrails, auditoria e resposta final.",
      videoBadge: "Demo ilustrativa",
      noteIllustrative:
        "Simulacao visual para explicar a experiencia da pagina web sem depender do backend em tempo real durante a visita.",
      sceneLabels: [
        "Usuario envia pergunta e contexto",
        "LangGraph executa pipeline de decisoes",
        "Resposta final auditada e segura",
      ],
      tabs: {
        chat: "Chat",
        graph: "LangGraph",
        output: "Resultado",
      },
      controls: {
        autoplay: "Reproducao automatica",
        autoplayHint:
          "Ative para alternar as cenas automaticamente; desative para navegar manualmente.",
        selectSceneHint: "Clique nas abas para ver conversa, fluxo e saida final.",
      },
      chat: {
        chrome: "Copiloto Clinico - Chat",
        route: "teste_visual_navegador/index.html",
        modelBadge: "Phi-2 fine-tuned + guardrails",
        prompt: "Contexto clinico",
        context:
          "Paciente com diabetes tipo 2, sem sinais de emergencia, em acompanhamento regular.",
        userQuestion: "Quais orientacoes gerais devo revisar antes da proxima consulta?",
        assistantDraft:
          "Gerando resposta educativa contextualizada com foco em seguranca e sem prescricao direta...",
      },
      graph: {
        chrome: "Copiloto Clinico - Fluxo LangGraph",
        route: "src/langchain_integration/graph_flows.py",
        title: "Pipeline de decisao clinica",
        inputNode: "validate_input (valida pergunta e contexto)",
        generateNode: "generate_response (rascunho da resposta)",
        guardrailsNode: "apply_guardrails (checagem de risco)",
        auditNode: "auditor.log_interaction (registro para trilha)",
        finalNode: "final_response (saida para o usuario)",
        statusRunning: "Executando",
      },
      output: {
        chrome: "Copiloto Clinico - Resultado",
        route: "src/security/guardrails.py + src/logging/auditor.py",
        title: "Saida final com seguranca",
        guardrailAnalysis:
          "Nenhuma prescricao direta detectada; manter recomendacao de validacao humana para conduta clinica.",
        finalAnswer:
          "Resposta final: revise adesao ao tratamento, rotina alimentar, atividade fisica e sinais de alerta, sempre com acompanhamento profissional.",
        auditLog:
          "Auditoria: pergunta, contexto resumido, resultado dos guardrails, timestamp e metadados de execucao registrados.",
        complianceTag: "Aprovado para apoio educacional",
      },
    },
    lumaGestorWalkthrough: {
      sectionTitle: "Ver o fluxo em movimento",
      sectionSubtitle:
        "Tres cenas em sequencia (ilustrativo, sem API real): gerador de solicitacoes, Kanban de status e painel de acompanhamento por obra.",
      videoBadge: "Vídeo ilustrativo",
      noteIllustrative:
        "Animacao automatica que simula a aplicacao. Intervalos e textos sao exemplos para recrutadores e visitantes entenderem o produto sem aceder ao repositorio.",
      controls: {
        autoplay: "Reproducao automatica",
        autoplayHint:
          "Ative para alternar as cenas sozinho; desative para explorar clicando nas abas.",
        selectSceneHint:
          "Clique nas abas para ver o wizard, o Kanban ou o painel por obra.",
      },
      sceneLabels: ["Solicitacoes (wizard + PDF)", "Status (Kanban)", "Obra (planilha)"],
      wizard: {
        chrome: "Luma Gestor — Wizard",
        route: "/wizard",
        step1: "Obra no Drive",
        step2: "Itens e reembolsos",
        step3: "Revisao e PDF",
        obraLabel: "Pasta da obra selecionada",
        obraValue: "Drive · Obras / 2026 / Residencial Aurora",
        itemsTitle: "Itens da solicitacao",
        line1: "Materiais — fornecedor A",
        line2: "Mao-de-obra — equipa estrutura",
        reimburseLabel: "Notas de reembolso",
        reimburseValue: "2 anexos validados · totais incorporados ao PDF",
        reviewTitle: "Revisao antes de gerar",
        pdfName: "Solicitacao_Res_Aurora_2026-04-06.pdf",
        primaryCta: "Gerar PDF e enviar para a pasta",
        toastSaved: "PDF gravado na pasta da obra · registo criado no Kanban (Gerada)",
      },
      kanban: {
        chrome: "Luma Gestor — Status",
        route: "/status",
        colGenerated: "Gerada",
        colSent: "Enviada",
        colPaid: "Paga",
        cardTitle: "Solicitacao · Materiais + mao-de-obra",
        cardAmount: "R$ 5.400,50",
        dragHint: "Arrastar cartoes entre colunas acompanha o estado operacional do pedido.",
        moveHint: "A equipa move o cartao quando o envio ou pagamento acontece.",
        paidSyncHint: "Ao marcar Paga, o valor sincroniza com a planilha de acompanhamento.",
      },
      obra: {
        chrome: "Luma Gestor — Acompanhamento",
        route: "/acompanhamento",
        panelTitle: "Resumo financeiro da obra",
        contractRow: "Total contrato",
        extrasRow: "Adicionais aprovados",
        clientRow: "Recebimentos do cliente",
        payrollRow: "Pagamentos a funcionarios",
        contractVal: "R$ 842.000,00",
        extrasVal: "R$ 38.200,00",
        clientVal: "R$ 610.000,00",
        payrollVal: "R$ 214.500,00",
        netLabel: "Saldo consolidado (leitura da planilha)",
        netVal: "R$ 175.700,00",
        sheetFootnote:
          "Valores ilustrativos. Na aplicacao real, leitura e escrita ocorrem na planilha Google Sheets ligada a obra — o painel reflete o que a equipa ja registou.",
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
    timelineTitle: "Trajetória",
    timeline: [
      {
        period: "2024 – presente",
        title: "AI Engineer — Projetos próprios e freelance",
        description:
          "Desenvolvimento de sistemas de IA aplicados a operações reais: análise automatizada de demonstrativos financeiros (LumaLector), gestão de obras (LumaGestor) e pipelines de ML/NLP para desafios técnicos da FIAP.",
      },
      {
        period: "2024 – presente",
        title: "Pós-graduação em AI Engineering — FIAP",
        description:
          "Especialização em engenharia de IA com foco em machine learning, deep learning, NLP, computer vision e sistemas multimodais. Tech Challenges aplicados a problemas reais.",
      },
      {
        period: "Anterior",
        title: "Experiência profissional mista",
        description:
          "Atuação em diferentes contextos profissionais que construíram visão de negócio, operações e necessidades reais de automação — base para a transição a AI Engineering.",
      },
    ],
    resumeDownload: "Baixar currículo",
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
