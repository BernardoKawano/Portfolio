export const enMessages = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  home: {
    badge: "AI Engineering + Business Automations",
    headline:
      "I build AI automations that remove manual work and improve operations.",
    subheadline:
      "Practical systems that turn messy workflows into clear, scalable, and reliable operations.",
    ctaPrimary: "Talk on WhatsApp",
    ctaSecondaryGithub: "GitHub",
    ctaSecondaryEmail: "Email",
    valueTitle: "AI applied to what actually drives operations",
    valueItems: [
      "Workflow automations designed to reduce friction",
      "Operational optimization with measurable time gains",
      "Systems built with both engineering and business logic",
    ],
    projectsTitle: "Selected Projects",
    projectsSubtitle: "Case studies focused on problem, solution, and impact.",
    metricsTitle: "Estimated Impact",
    metricsSubtitle: "Estimates based on operational use of real projects.",
    metrics: [
      { value: "~40h/mo", label: "of manual work avoided", context: "Estimate from LumaLector, based on daily statement analysis workflow." },
      { value: "5x", label: "fewer steps in key workflows", context: "Comparison between manual process and automated flow in LumaGestor." },
      { value: "1k+", label: "documents processed", context: "Cumulative PDF volume analyzed during internal use of LumaLector." },
    ],
    approachTitle: "How I work",
    approachText:
      "I prioritize clarity, execution, and operational outcomes. Less hype, more systems that teams can actually use.",
    processTitle: "From Chaos to System",
    processIntro:
      "I start with the bottleneck, not the technology. I find the real friction, design the right automation, and deliver a system that actually works.",
    processClosing: "The goal is not to add AI. The goal is to remove friction.",
    processStages: [
      {
        title: "Detect",
        description:
          "Find where the system breaks before anyone notices.",
      },
      {
        title: "Frame",
        description: "Separate the real problem from the visible symptom.",
      },
      {
        title: "Design",
        description:
          "Define the line between human judgment and automation.",
      },
      {
        title: "Deploy",
        description: "Ship to real operations. Not to a demo.",
      },
    ],
    finalCtaTitle:
      "If your operation is still slowed by manual work, let's fix that.",
    finalCtaText:
      "Open to AI Engineering roles and consulting projects focused on automation.",
  },
  projects: {
    title: "Projects",
    subtitle:
      "Each project is a real problem solved with engineering and operational thinking.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      stack: "Stack",
      architecture: "Architecture",
      process: "Process",
      impact: "Impact",
      links: "Links",
      caseStudy: "More details",
      detailsHeading: "Product details",
      attributionsHeading: "Credits",
      github: "GitHub",
      demo: "Demo",
      privateRepo: "Private repository",
      expandCaseStudy: "View full case study",
      collapseCaseStudy: "Collapse case study",
    },
    items: {
      lumalector: {
        title: "LumaLector",
        wordmark: "Luma Lector",
        summary: [
          { text: "Web frontend for " },
          { text: "automated analysis", strong: true },
          { text: " of financial statement PDFs, financial control, calendar, reports, and conversion to RSDT (.241) files, integrated with a FastAPI backend." },
        ],
        impact: [
          { text: "Roughly " },
          { text: "2 hours of manual work removed each business day", strong: true },
          { text: " — about 40 hours reclaimed per month." },
        ],
        problem:
          "PDF statements and financial control work often mean manual effort, exports, and tax-calendar alignment without a single web workflow.",
        solution:
          "Next.js app (App Router) with upload, analysis, history, calendar, and exports, calling REST endpoints on FastAPI. FastAPI chosen over Django REST for native async and faster MVP iteration. Auth via Google OAuth (Auth.js v5 beta) on the UI; JWT on backend not implemented in current scope — conscious trade-off to prioritize the analysis flow first.",
        architecture:
          "Browser -> Next.js + Auth.js -> src/lib/api.ts (HTTP) -> FastAPI (e.g. /api/analyze, /api/history, /api/calendar/*, /api/export/*, /api/convert, /api/health)",
        process:
          "Multi-part repo (frontend/, backend/, Flet at repo root); for evolution or migration: align Node LTS with Next 16 builds, AUTH_* and NEXT_PUBLIC_API_URL, FastAPI CORS for the frontend host, and lint/build/dev smoke tests with the backend on port 8000.",
      },
      lumagestor: {
        title: "LumaGestor",
        wordmark: "Luma Gestor",
        summary: [
          { text: "SPA for construction financial management with " },
          { text: "payment requests and professional PDF output", strong: true },
          { text: ", a Kanban for status (Generated, Sent, Paid), and a per-project dashboard tied to Google Drive and Google Sheets — no loose spreadsheets." },
        ],
        impact: [
          { text: "One web flow to request, track, and consolidate by project; marking paid pushes the amount into the tracking sheet " },
          { text: "without retyping", strong: true },
          { text: "." },
        ],
        problem:
          "Site teams often scatter requests, receipts, and totals across files and spreadsheets, without a single view of what was generated, sent, or paid, or of balances per project.",
        solution:
          "Three-step wizard with PDF output into the project folder; Kanban board that updates the sheet on payment; per-project panel via Sheets read/write. Vite SPA chosen over Next.js since this is an internal tool with no SSR or SEO needs. Direct Google Drive/Sheets integration to avoid a custom backend in this phase.",
        architecture:
          "Browser (Vite + React Router) -> UI on routes /, /wizard, /status, /acompanhamento -> Google Drive folders/files and tabular data in Google Sheets; PDF generation with @react-pdf/renderer.",
        process:
          "Landing copy in src/content/homeLanding.ts and page in src/pages/HomePage.tsx; Vitest checks on content contracts; next steps: align Google API credentials, folder/sheet IDs, and demo vs production modes.",
        details:
          "Luma Gestor brings three pillars together that used to live across loose spreadsheets and folders. First, the request builder: a three-step wizard walks you through picking the project (tied to a Google Drive folder), entering line items and reimbursement notes, and final review. There the app builds a professional PDF with @react-pdf/renderer and leaves the file ready to send or archive in the project tree. Second, a Kanban-style board tracks requests as Generated, Sent, and Paid: the team sees where each request sits at a glance, and marking Paid can push the amount straight into the tracking sheet — no retyping. Third, per-project tracking rolls up contract totals, approved extras, client receipts, and payroll, reading and writing the same spreadsheet that drives day-to-day financial control. The Vite + React Router SPA uses dedicated routes — /wizard, /status, /acompanhamento — for each phase, with / on the home as the product landing.",
        attributions: [
          {
            role: "Product, flows, and specification",
            credit:
              "Definition of the request → status → project journey, aligned with real construction operations and Drive/Sheets integration.",
          },
          {
            role: "Frontend engineering (SPA)",
            credit:
              "Bernardo Kawano — UI implementation, wizard, Kanban, per-project panel, PDF generation, and Google API integration on the client.",
          },
          {
            role: "Stack and libraries",
            credit:
              "React 19, Vite 7, TypeScript, Tailwind CSS 4, React Router 7, @react-pdf/renderer, date-fns, and supporting tooling (e.g. react-dropzone, html2canvas where used in the repo).",
          },
        ],
      },
      "tech-challenge-1": {
        title: "OncoClass AI - Breast Cancer Diagnostic Support",
        wordmark: "OncoClass AI",
        summary: [
          { text: "Machine learning pipeline for binary classification (benign vs malignant) with EDA, preprocessing, comparative training (Logistic Regression, Random Forest, and KNN), and " },
          { text: "automated reporting", strong: true },
          { text: "." },
        ],
        impact:
          "Breast cancer triage project built to catch malignant cases in the first screening step; on test data, Logistic Regression reached 0.976 recall, lowering false-negative risk and improving early clinical decision support.",
        problem:
          "In breast-cancer triage, false negatives can delay clinical intervention; the project needed to prioritize sensitivity for malignant-case detection.",
        solution:
          "End-to-end Python pipeline: stratified split (60/20/20), StandardScaler, PCA (95% variance), GridSearchCV optimization. Recall prioritized over accuracy because this is medical triage — false negatives carry higher clinical cost. Classical models (LR, RF, KNN) chosen for interpretability and auditability before scaling to deep learning.",
        architecture:
          "Modular structure across data/, src/, notebooks/, and reports/: train.py orchestrates data loading, EDA, modeling, evaluation, and artifact export (JSON, CSV, and figures).",
        process:
          "Dataset loading -> visual/text EDA -> preprocessing -> train and optimize 3 models -> test evaluation -> metric publishing in reports/final_results.json and figures in reports/figures.",
        attributions: [
          {
            role: "Academic context",
            credit: "FIAP - Tech Challenge Team.",
          },
          {
            role: "Dataset and references",
            credit:
              "Breast Cancer Wisconsin (UCI) plus the scikit-learn ecosystem for pipeline implementation.",
          },
        ],
      },
      "tech-challenge-2": {
        title: "Rota VRP (Vehicle Routing Problem) - Medical Route Optimization",
        summary: [
          { text: "A route optimization system for medical-supplies distribution in Sao Paulo that uses a genetic algorithm with priority, capacity, and range constraints, " },
          { text: "real-time web visualization", strong: true },
          { text: ", interactive Folium maps, and optional local LLM support via Ollama." },
        ],
        impact:
          "Routes prioritize critical deliveries while balancing vehicle capacity and range; operations gain clearer visibility through interactive maps and per-run reports.",
        problem:
          "Hospitals and medical centers require urgent supplies; the challenge is to minimize total distance, prioritize critical deliveries, and respect vehicle operational constraints.",
        solution:
          "Genetic-algorithm engine with selection, crossover, mutation, elitism, and multi-objective fitness with capacity/range penalties. GA chosen over exact solvers (OR-Tools) for flexibility with custom constraints and real-world scalability. Local LLM (Ollama) instead of external API to keep operations offline and cost-free per call.",
        architecture:
          "Modular architecture under src/ split across data models, optimization engine, visualization, LLM integration, and utilities; main.py orchestrates the end-to-end flow, while a Streamlit web_viewer provides browser-based presentation.",
        process:
          "Interactive setup (vehicles, points, generations) -> GA run with per-generation callbacks and metrics -> web visualization -> Folium map generation -> optional Ollama instructions and report generation -> context persistence for Q&A.",
        details:
          "This project tackles a real critical-logistics scenario: distributing medical supplies across Sao Paulo under clinical priority and fleet constraints. Its core is a genetic algorithm using selection, crossover, mutation, and elitism, with a multi-objective fitness strategy that balances total distance, high-priority fulfillment, vehicle capacity, and range compliance. Execution is transparent rather than black-boxed: the web visualization provides real-time route evolution visibility, while Folium outputs an interactive map for operational review and stakeholder communication. An optional LLM layer via Ollama (llama2) generates driver instructions and management reports locally, with optional OpenAI support when needed. The result is an end-to-end engineering case that combines optimization, visualization, web presentation through Streamlit, and developer-quality practices with Pytest, Black, Flake8, Pylint, and MyPy.",
        attributions: [
          {
            role: "Academic context and guidance",
            credit: "FIAP",
          },
          {
            role: "Open-source libraries",
            credit: "Python community",
          },
          {
            role: "Local LLM layer",
            credit: "Ollama Team",
          },
          {
            role: "Map foundation",
            credit: "OpenStreetMap",
          },
        ],
      },
      "tech-challenge-3": {
        title: "Safe Clinical Copilot - Enterprise Solution",
        summary: [
          { text: "A clinical copilot for educational support that generates contextualized responses, applies " },
          { text: "safety guardrails", strong: true },
          { text: ", and keeps an audit trail, with a web visual simulator to demonstrate the flow." },
        ],
        impact:
          "Question, guardrail, and audit flow makes each response traceable and safer for educational use; it reinforces responsible AI in healthcare without replacing clinical decisions.",
        problem:
          "Healthcare professionals and students face high information volume, limited time for consultation, and the need to keep traceable records of what was reviewed.",
        solution:
          "Pipeline taking clinical question plus context, generating answers with a fine-tuned LLM, checking risks through guardrails, and storing audit logs. Phi-2 (2.7B) chosen over larger models for fine-tuning cost and consumer-GPU feasibility. QLoRA to train ~1% of parameters while maintaining near-full fine-tuning quality.",
        architecture:
          "Modular Python architecture (langchain_integration, security, logging, evaluation) with a graph flow powered by LangGraph plus a single-page web visual simulator.",
        process:
          "Fine-tuning Microsoft Phi-2 with QLoRA on an anonymized dataset (963 samples), selecting the best checkpoint by eval_loss, and validating through test scripts and evaluation artifacts.",
        attributions: [
          {
            role: "Base model",
            credit: "Microsoft Phi-2 (2.7B parameters).",
          },
          {
            role: "Frameworks and libraries",
            credit:
              "Hugging Face Transformers/PEFT/BitsAndBytes, LangChain, and LangGraph.",
          },
          {
            role: "Technical references",
            credit: "PEFT docs, Phi-2 model card, and the QLoRA paper listed in MODEL.md.",
          },
        ],
      },
      "multimodal-clinical-monitoring": {
        title: "MedWatch AI System",
        wordmark: "MedWatch AI",
        summary: [
          { text: "A multimodal AI system for clinical monitoring that processes surgical video, audio, and text, performs LangGraph-based fusion, and " },
          { text: "generates reports and alerts", strong: true },
          { text: " for medical-team support." },
        ],
        impact:
          "Video, audio, and text signals are consolidated in a single flow with contextual alerts; teams gain faster triage and stronger clinical observability.",
        problem:
          "Clinical teams need early risk identification from fragmented video, audio, and text signals, but often lack an integrated operational workflow.",
        solution:
          "Pipeline with input-type classification, media-specific analysis, multimodal fusion via LangGraph, and alert dispatch. LangGraph chosen over sequential orchestration for conditional routing and shared state between nodes. Custom autoencoders for anomaly detection instead of fixed thresholds, with mandatory training per domain (surgical video and emotional audio).",
        architecture:
          "Modular architecture across src/video, src/audio, src/azure, src/fusion, src/reports, and src/alerts, orchestrated by LangGraph in the flow classify -> process_* -> fusion -> report -> send_alerts.",
        process:
          "Environment and .env setup, dataset/model download, mandatory training of video and audio autoencoders, and demo execution with run_demo.py (--text, --audio, or --video) or the presentation notebook.",
        attributions: [
          {
            role: "Surgical dataset",
            credit: "CAMMA CholecT45.",
          },
          {
            role: "Instrument detection models",
            credit: "Roboflow Universe (cholect45-x6lm4) and DocCheck.",
          },
          {
            role: "Emotional audio dataset",
            credit: "RAVDESS (downloaded through project scripts).",
          },
          {
            role: "AI infrastructure and services",
            credit: "Azure Speech Services and Azure Video Indexer (optional).",
          },
        ],
      },
    },
    multimodalClinicalWalkthrough: {
      sectionTitle: "Operational flow walkthrough",
      sectionSubtitle:
        "Three-stage animation showing how the system worked: multimodal input, pipeline orchestration, and report/alert delivery.",
      videoBadge: "Illustrative demo",
      noteIllustrative:
        "Visual representation of the behavior documented in the repository, without running the backend live.",
      sceneLabels: [
        "Input: text, audio, or video",
        "LangGraph pipeline processing",
        "Output: report and alerts",
      ],
      tabs: {
        input: "Input",
        pipeline: "Pipeline",
        output: "Output",
      },
      controls: {
        autoplay: "Autoplay",
        autoplayHint:
          "Enable automatic scene switching or disable it for manual navigation.",
        selectSceneHint: "Use the tabs to inspect each stage of the workflow.",
      },
      input: {
        chrome: "Clinical Monitoring - Input",
        route: "run_demo.py (--text | --audio | --video)",
        title: "Input-type classification",
        hint:
          "The system identifies media type first and prepares state for conditional routing.",
        sampleText: "Patient under follow-up with anxiety-related complaints.",
        sampleAudio: "data/sample_audio_anxiety.wav",
        sampleVideo: "data/sample_video_cholect45.mp4",
      },
      pipeline: {
        chrome: "Clinical Monitoring - Processing",
        route: "src/fusion/graph.py",
        title: "Graph-orchestrated multimodal pipeline",
        status: "Running",
        nodes: [
          "classify",
          "process_video | process_audio | process_text",
          "fusion",
          "report",
          "send_alerts",
        ],
      },
      output: {
        chrome: "Clinical Monitoring - Output",
        route: "src/reports/report_generator.py + src/alerts/notifier.py",
        title: "Clinical report and alert delivery",
        reportSnippet:
          "Consolidated summary: risk signals from audio/video with follow-up recommendations for the medical team.",
        alertsSnippet:
          "Preliminary alerts: atypical vocal pattern (high score) and surgical frame anomaly check.",
        complianceTag: "Flow completed",
      },
    },
    lumaDemos: {
      sectionTitle: "How data goes in, is processed, and comes out",
      sectionSubtitle:
        "Ideal in-product journey (illustrative, no live API): landing through calendar to month totals.",
      controls: {
        autoplay: "Autoplay",
        autoplayHint:
          "Turn on to cycle Analysis and Calendar automatically; turn off to pick manually.",
        selectSceneHint:
          "Click a tab to view the PDF analysis demo or the calendar and cash-book demo.",
      },
      noteImportCalendar:
        "Import to calendar: after the PDF analysis summary, the button sends per-day totals into the calendar as income (description like “Statement” plus the date, amount = net for that day). The backend persists via POST /api/calendar/add-from-analysis and returns how many rows were added vs skipped as duplicates — so you don’t retype what the PDF already extracted.",
      notePrintBook:
        "Cash book (PDF or Excel): this does not export the analyzed PDF. It builds a report from calendar entries between a start and end date you pick (A4-style layout: period header, days, lines, running totals/balance). If nothing happened in the range, there is no file to download.",
      analysis: {
        chrome: "Product — Analysis",
        steps: [
          { label: "Sign-in", sublabel: "Landing · Google" },
          { label: "Dashboard", sublabel: "Open analysis" },
          { label: "PDF", sublabel: "Upload and confirm" },
          { label: "Processing", sublabel: "Page-by-page" },
          { label: "Results", sublabel: "Tabs · calendar · export" },
        ],
        landingHint: "/ — public",
        googleButton: "Continue with Google",
        themeHint: "Theme",
        dashboardRoute: "/dashboard",
        analyzeCard: "Analyze document",
        navSecondary: "History · Calendar · Reports · Settings",
        uploadTitle: "PDF drop zone",
        uploadHint: "Drag in or pick a file",
        fileName: "statement_jan.pdf",
        analyzeButton: "Analyze",
        analyzingTitle: "Processing document…",
        progressHint: "Processing page 8 of 12…",
        doneLabel: "Analysis complete",
        tabs: ["Daily", "Total", "Sheet"],
        addCalendarButton: "Import to calendar",
        importHint:
          "One income entry per analyzed date; duplicates are ignored server-side (response shows counts).",
        exportButton: "Export",
        rows: [
          { label: "Statement total", value: "R$ 48,752.30" },
          { label: "Funarpen", value: "R$ 2,437.62" },
          { label: "ISSQN", value: "R$ 1,218.81" },
        ],
        totalLabel: "Net total",
        totalValue: "R$ 45,095.87",
        toastMessage: "3 incomes imported · 0 duplicates (add-from-analysis)",
        dailyDateLabel: "January 15, 2026 · Monday",
        dailyModeHint:
          "Daily mode: one business day in focus — line items and subtotals for that day before the month view.",
        dailyLines: [
          { label: "Morning activity", value: "R$ 12,180.00" },
          { label: "Afternoon activity", value: "R$ 8,920.50" },
          { label: "Net for the day", value: "R$ 21,100.50" },
        ],
        totalModeHint:
          "Total mode: adds every rubric pulled from the PDF — consolidated statement view.",
        sheetModeHint:
          "Sheet mode: the same data in columns (date, text, debit, credit), ready to export or copy.",
        sheetColumnLabels: ["Date", "Description", "Debit", "Credit"],
        sheetRows: [
          { cells: ["01/03", "ISS withheld", "1,218.81", "—"] },
          { cells: ["01/15", "Funarpen", "2,437.62", "—"] },
          { cells: ["01/31", "Net revenue", "—", "45,095.87"] },
          { cells: ["—", "Period totals", "3,656.43", "45,095.87"] },
        ],
      },
      calendar: {
        chrome: "Product — Calendar",
        steps: [
          { label: "Month view", sublabel: "Strip & markers" },
          { label: "Entry", sublabel: "Manual form" },
          { label: "Consolidate", sublabel: "Month totals" },
          { label: "Cash book", sublabel: "PDF or Excel for period" },
        ],
        monthTitle: "January 2026",
        weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
        headerNewEntry: "New entry",
        printBookLabel: "Generate cash book",
        printBookHint:
          "Pick start and end dates; the server filters calendar movements and returns PDF or Excel in a cash-book structure. Options like cover page or color follow the web flow. No movements in the range means no file.",
        topExpense: "Expenses",
        topRevenue: "Income",
        topBalance: "Balance",
        newEntryTitle: "New entry",
        fields: [
          { label: "Type", value: "Income" },
          { label: "Description", value: "One-off revenue — event" },
          { label: "Amount", value: "R$ 1,239.45" },
          { label: "Date", value: "01/31/2026" },
        ],
        saveLabel: "Save",
        savedLabel: "Entry saved",
        summaryTitle: "Summary — January 2026",
        analysisHint: "Imported statement days and manual expenses show as dots on each day.",
        calendarLegend: "Green = income · red = expense",
        revenueLabel: "Income",
        expenseLabel: "Expenses",
        balanceLabel: "Balance",
        revenueValue: "R$ 46,335.32",
        expenseValue: "R$ 8,320.00",
        balanceValue: "R$ 38,015.32",
        bookTitle: "Generate cash book",
        bookPeriodTitle: "Calendar movements between:",
        bookFromLabel: "Start",
        bookFromValue: "01/01/2026",
        bookToLabel: "End",
        bookToValue: "02/28/2026",
        bookPdfLabel: "PDF (A4)",
        bookExcelLabel: "Excel",
        bookGenerating: "Building the report (days, lines, totals, balance)…",
        bookPreviewKicker: "Sample A4 page (as in the generated PDF)",
        bookPreviewCaixa: "CASH",
        bookPreviewMonthBanner: "January / 2026",
        bookPreviewFolio: "Pg.: 1",
        bookPreviewEntradasCol: "Income",
        bookPreviewSaidasCol: "Outgoings",
        bookPreviewDayBanner: "Day 02/13/2026",
        bookPreviewRow1Id: "13022026-487",
        bookPreviewRow1Desc: "Rent",
        bookPreviewRow1Saida: "1,200.00",
        bookPreviewRow2Id: "13022026-329",
        bookPreviewRow2Desc: "Salary",
        bookPreviewRow2Entrada: "5,000.00",
        bookPreviewTotalDia: "Day total",
        bookPreviewTotalDiaEntrada: "5,000.00",
        bookPreviewTotalDiaSaida: "1,200.00",
        bookPreviewSaldoAtual: "Current balance",
        bookPreviewSaldoAtualValue: "3,800.00",
        bookPreviewTotalGeral: "Grand total",
        bookPreviewTotalGeralEntrada: "5,000.00",
        bookPreviewTotalGeralSaida: "1,200.00",
        bookPreviewSaldoFinal: "Final balance",
        bookPreviewSaldoFinalValue: "3,800.00",
        bookFlowHint:
          "The server filters only what is on the calendar in this range — not the analyzed statement PDF.",
      },
    },
    techChallenge2Walkthrough: {
      sectionTitle: "How the web viewer works",
      sectionSubtitle:
        "Five-scene animation matching the same style as other case studies: Live, Map, Overview, Report, and Chat.",
      videoBadge: "Illustrative demo",
      noteIllustrative:
        "Visual flow to communicate the web_viewer experience without relying on local artifacts at viewing time.",
      sceneLabels: [
        "Runs simulation and tracks progress",
        "Shows latest interactive map",
        "Summarizes routes per vehicle",
        "Displays markdown report",
        "Enables contextual LLM Q&A",
      ],
      tabs: {
        live: "Live",
        map: "Map",
        overview: "Overview",
        report: "Report",
        chat: "Chat",
      },
      controls: {
        autoplay: "Autoplay",
        autoplayHint:
          "Turn on to cycle scenes automatically; turn off to explore by clicking tabs.",
        selectSceneHint: "Click a tab to jump to that part of the web viewer.",
      },
      live: {
        chrome: "Tech Challange 2 - Live",
        route: "web_viewer/app_streamlit.py · Live tab",
        status: "Simulation running",
        action: "GA in progress",
        metricGeneration: "Generation",
        metricDistance: "Best distance",
        metricPriority: "Critical deliveries",
        progress: "Execution progress",
        simulationCaption: "Real-time visualization (web interface)",
      },
      map: {
        chrome: "Tech Challange 2 - Map",
        route: "outputs/maps/latest.html",
        title: "Folium map · interactive HTML export",
        subtitle:
          "In the real project: Folium + Leaflet embed the generated HTML (PolyLines per vehicle, markers, popups) inside Streamlit.",
        info: "If no map file exists, the viewer suggests running python main.py to generate artifacts.",
        embedNote:
          "The Streamlit Map tab loads the newest outputs/maps/*.html via st.components.v1.html (fixed height, native iframe scrolling).",
        layersNote:
          "Folium stacks: OSM basemap, colored route Polylines per fleet, priority markers (P1/P2), and per-stop popups.",
        legendTitle: "Legend",
        legendDepot: "Depot / start",
        legendCritical: "Delivery P1 (critical)",
        legendStandard: "Delivery P2",
        legendPolyline: "PolyLine = vehicle stop order",
        districtNorth: "North",
        districtEast: "East",
        districtSouth: "South",
        attribution: "Map data · OpenStreetMap",
        uiFolium: "Folium",
        uiLeaflet: "Leaflet",
        uiEmbed: "st.components.v1.html",
        poiCd: "DC · supplies",
        poiHNorte: "Municipal Hospital North",
        poiUpa: "ER East",
        poiSouth: "South aid post",
        poiIc: "IC cardio · P1",
        poiHub: "East logistics hub",
      },
      overview: {
        chrome: "Tech Challange 2 - Overview",
        route: "outputs/session/latest_context.json",
        title: "Operational summary per vehicle",
        rows: [
          { vehicle: "V-01", stops: "7", distance: "54.2 km", priority: "100%" },
          { vehicle: "V-02", stops: "6", distance: "49.8 km", priority: "92%" },
          { vehicle: "V-03", stops: "5", distance: "45.1 km", priority: "89%" },
        ],
      },
      report: {
        chrome: "Tech Challange 2 - Report",
        route: "outputs/reports/*.md",
        title: "Management summary for the run",
        bullets: [
          "Total distance reduced while respecting vehicle capacity and range.",
          "High-priority deliveries are served first in the final plan.",
          "Final route is published with context for operational auditability.",
        ],
        footer: "If report artifacts are missing, the UI recommends the generation command and expected status.",
      },
      chat: {
        chrome: "Tech Challange 2 - Chat",
        route: "llm_integration/qa_system.py",
        prompt: "Which points have the highest logistics risk and which route should I prioritize now?",
        answer:
          "Based on the latest run context, prioritize high-risk hospitals in the north corridor and rebalance vehicle V-02 to reduce response time.",
        modelBadge: "Ollama · llama2",
      },
    },
    techChallenge1Walkthrough: {
      sectionTitle: "Full OncoClass AI walkthrough",
      sectionSubtitle:
        "Three-scene walkthrough: data exploration, model training/optimization, and final results review.",
      videoBadge: "Illustrative demo",
      noteIllustrative:
        "Visual flow that shows the implemented notebook and pipeline functions without requiring live execution in the browser.",
      sceneLabels: [
        "Dataset loading and EDA",
        "Preprocessing + model training",
        "Final metrics and artifacts",
      ],
      tabs: {
        dataset: "Dataset + EDA",
        training: "Training",
        results: "Results",
      },
      controls: {
        autoplay: "Autoplay",
        autoplayHint:
          "Turn on to cycle scenes automatically; turn off to inspect each scene manually.",
        selectSceneHint: "Use tabs to follow the complete project walkthrough.",
      },
      dataset: {
        chrome: "OncoClass AI - Dataset and EDA",
        route: "notebooks/02_colab_pipeline_publico.ipynb + src/eda.py",
        datasetTitle: "Breast Cancer Wisconsin (Diagnostic)",
        datasetMeta: "569 samples · 30 features · benign/malignant classes",
        stepLoad: "1) Load local CSV or sklearn dataset",
        stepEda: "2) Inspect class distribution and descriptive stats",
        stepOutliers: "3) Analyze per-feature outliers",
        stepCorrelation: "4) Build correlation matrix and visual report",
        note: "Outputs from this stage: text/HTML reports and figures under reports/figures.",
      },
      training: {
        chrome: "OncoClass AI - Modeling",
        route: "src/train.py",
        title: "Training and validation pipeline",
        split: "Stratified 60/20/20 split (train/validation/test).",
        preprocessing: "StandardScaler + PCA (95% explained variance) before modeling.",
        modelsTitle: "Evaluated models",
        model1: "Logistic Regression",
        model2: "Random Forest (GridSearchCV)",
        model3: "KNN (GridSearchCV)",
        objective: "Main objective: maximize recall for triage support.",
      },
      results: {
        chrome: "OncoClass AI - Results",
        route: "reports/final_results.json + reports/models_summary.csv",
        title: "Final comparison and top model",
        bestModelLabel: "Best by recall: Logistic Regression",
        recallLabel: "Recall: 0.9762",
        accuracyLabel: "Accuracy: 0.9737",
        rocAucLabel: "ROC AUC: 0.9954",
        reportNote:
          "The pipeline also stores confusion matrices, ROC/PR curves, and complementary analysis plots for quick review.",
        outputFiles: "Artifacts: JSON, CSV, and visualizations in reports/figures",
      },
    },
    techChallenge3Walkthrough: {
      sectionTitle: "Clinical copilot web demo",
      sectionSubtitle:
        "Animated chat conversation plus LangGraph execution flow: input, generation, guardrails, audit, and final response.",
      videoBadge: "Illustrative demo",
      noteIllustrative:
        "Visual simulation to explain the web-page experience without requiring live backend execution at viewing time.",
      sceneLabels: [
        "User sends question and context",
        "LangGraph runs the decision pipeline",
        "Audited and safer final answer",
      ],
      tabs: {
        chat: "Chat",
        graph: "LangGraph",
        output: "Output",
      },
      controls: {
        autoplay: "Autoplay",
        autoplayHint: "Enable auto scene switching or disable to navigate manually.",
        selectSceneHint: "Use tabs to view conversation, graph flow, and final output.",
      },
      chat: {
        chrome: "Clinical Copilot - Chat",
        route: "teste_visual_navegador/index.html",
        modelBadge: "Phi-2 fine-tuned + guardrails",
        prompt: "Clinical context",
        context:
          "Patient with type 2 diabetes, no emergency signs, under regular follow-up care.",
        userQuestion: "Which general guidance should I review before the next consultation?",
        assistantDraft:
          "Generating educational contextual response with safety constraints and no direct prescription...",
      },
      graph: {
        chrome: "Clinical Copilot - LangGraph Flow",
        route: "src/langchain_integration/graph_flows.py",
        title: "Clinical decision pipeline",
        inputNode: "validate_input (question/context checks)",
        generateNode: "generate_response (draft answer)",
        guardrailsNode: "apply_guardrails (risk checks)",
        auditNode: "auditor.log_interaction (trace logging)",
        finalNode: "final_response (user-facing output)",
        statusRunning: "Running",
      },
      output: {
        chrome: "Clinical Copilot - Output",
        route: "src/security/guardrails.py + src/logging/auditor.py",
        title: "Safety-aware final output",
        guardrailAnalysis:
          "No direct prescription detected; keep explicit reminder for human clinical validation.",
        finalAnswer:
          "Final answer: review treatment adherence, food routine, physical activity, and warning signs with professional follow-up.",
        auditLog:
          "Audit trail: question, summarized context, guardrail result, timestamp, and execution metadata are recorded.",
        complianceTag: "Approved for educational support",
      },
    },
    lumaGestorWalkthrough: {
      sectionTitle: "See the flow in motion",
      sectionSubtitle:
        "Three scenes in sequence (illustrative, no live API): request builder, status Kanban, and per-project tracking.",
      videoBadge: "Illustrative video",
      noteIllustrative:
        "Auto-playing animation that simulates the app. Timing and numbers are samples so visitors understand the product without opening the repo.",
      controls: {
        autoplay: "Autoplay",
        autoplayHint:
          "Turn on to cycle scenes automatically; turn off to explore by clicking tabs.",
        selectSceneHint:
          "Click a tab to view the wizard, Kanban board, or per-project panel.",
      },
      sceneLabels: ["Requests (wizard + PDF)", "Status (Kanban)", "Project (sheet)"],
      wizard: {
        chrome: "Luma Gestor — Wizard",
        route: "/wizard",
        step1: "Project in Drive",
        step2: "Items & reimbursements",
        step3: "Review & PDF",
        obraLabel: "Selected project folder",
        obraValue: "Drive · Projects / 2026 / Residencial Aurora",
        itemsTitle: "Request line items",
        line1: "Materials — vendor A",
        line2: "Labor — framing crew",
        reimburseLabel: "Reimbursement notes",
        reimburseValue: "2 attachments validated · totals merged into the PDF",
        reviewTitle: "Review before generating",
        pdfName: "Request_Res_Aurora_2026-04-06.pdf",
        primaryCta: "Generate PDF and save to folder",
        toastSaved: "PDF saved to project folder · Kanban card created (Generated)",
      },
      kanban: {
        chrome: "Luma Gestor — Status",
        route: "/status",
        colGenerated: "Generated",
        colSent: "Sent",
        colPaid: "Paid",
        cardTitle: "Request · Materials + labor",
        cardAmount: "R$ 5,400.50",
        dragHint: "Dragging cards across columns mirrors the operational state of each request.",
        moveHint: "The team moves the card when sending or paying.",
        paidSyncHint: "Marking Paid syncs the amount into the tracking sheet.",
      },
      obra: {
        chrome: "Luma Gestor — Tracking",
        route: "/acompanhamento",
        panelTitle: "Project financial summary",
        contractRow: "Contract total",
        extrasRow: "Approved extras",
        clientRow: "Client receipts",
        payrollRow: "Payroll payments",
        contractVal: "R$ 842,000.00",
        extrasVal: "R$ 38,200.00",
        clientVal: "R$ 610,000.00",
        payrollVal: "R$ 214,500.00",
        netLabel: "Consolidated balance (from sheet)",
        netVal: "R$ 175,700.00",
        sheetFootnote:
          "Illustrative values. In the real app, read/write happens in the Google Sheet tied to the project — the panel reflects what the team already recorded.",
      },
    },
  },
  about: {
    title: "About",
    intro:
      "I'm Bernardo Kawano, an AI Engineer focused on practical automations for real operations.",
    introExtended:
      "I work at the intersection of engineering and operations — building AI systems that reduce manual work, simplify processes, and create measurable value for teams and companies.",
    philosophyTitle: "How I think about systems",
    philosophyText:
      "Great systems should feel obvious to use. I remove noise, eliminate unnecessary steps, and keep only what creates real value. If a solution needs a manual to be understood, it's not done yet.",
    focusTitle: "Professional focus",
    focusItems: [
      "AI workflow automation",
      "Bridging engineering and operations",
      "Scalable systems built around measurable impact",
      "Process design with business context",
    ],
    timelineTitle: "Background",
    certificateView: "View certificate",
    certificateDownload: "Download certificate",
    timeline: [
      {
        period: "2024 – present",
        title: "AI Engineer — Own projects & freelance",
        description:
          "Building AI systems for real operations: automated financial statement analysis (LumaLector), construction project management (LumaGestor), and ML/NLP pipelines for FIAP tech challenges.",
      },
      {
        period: "2024 – present",
        title: "Post-grad in AI Engineering — FIAP",
        description:
          "Specialization in AI engineering covering machine learning, deep learning, NLP, computer vision, and multimodal systems. Tech Challenges applied to real-world problems.",
      },
      {
        period: "2024",
        title: "MBA in Artificial Intelligence for Business — Faculdade Exame",
        description:
          "Completed Faculdade Exame's MBA in Artificial Intelligence for Business (specialization level), focused on strategic AI application in business contexts.",
        certificateUrl: "/certificates/mba-ia-negocios-exame.pdf",
      },
      {
        period: "2023",
        title: "CS50x — Harvard University",
        description:
          "Completed CS50x (Introduction to Computer Science), including problem sets, labs, and a final project covering core computer science foundations.",
        certificateUrl: "/certificates/cs50x-harvard.pdf",
      },
      {
        period: "Previous",
        title: "Mixed professional experience",
        description:
          "Roles across different professional contexts that built business awareness, operational thinking, and a clear understanding of where automation creates value.",
      },
    ],
    resumeDownload: "Download resume",
    approachTitle: "Approach",
    inspirationsTitle: "References that shape my work",
    inspirations: [
      {
        author: "Steve Jobs",
        quote: "Simple can be harder than complex.",
        insight:
          "Most AI solutions today only move complexity around. Simplicity is not about making something smaller; it is about understanding the system deeply enough to remove everything that should not exist.",
      },
      {
        author: "Jony Ive",
        quote: "It's about bringing order to complexity.",
        insight:
          "I work so the system performs despite complexity, not because of it. A good system absorbs chaos internally and delivers an experience that feels simple, even when it is not.",
      },
      {
        author: "Dieter Rams",
        quote: "Good design makes a product understandable.",
        insight:
          "If it needs too much explanation, it has already failed. Clarity is not aesthetics; it is functionality. Automation should not demand constant human adaptation, but align with natural user behavior.",
      },
    ],
    approachItems: [
      {
        title: "Clarity over complexity",
        description:
          "Simple systems are maintainable systems. I optimize for understanding, not cleverness.",
      },
      {
        title: "Business-aware engineering",
        description:
          "Every technical decision is grounded in operational impact and user needs.",
      },
      {
        title: "Iterative delivery",
        description:
          "Ship early, measure, and refine. Working software beats perfect plans.",
      },
    ],
  },
  contact: {
    title: "Let's talk",
    subtitle:
      "Whether you're hiring for an AI Engineering role or need automation consulting — share your context and I'll respond with a clear next step.",
    whatsapp: "Talk on WhatsApp",
    whatsappDesc: "Fastest way to reach me",
    email: "Send email",
    emailDesc: "For detailed inquiries",
    github: "View GitHub",
    githubDesc: "See how I build",
    linkedin: "LinkedIn",
    linkedinDesc: "Professional profile",
  },
  footer: {
    tagline: "Practical AI for real operations.",
    copyright: "Bernardo Kawano",
  },
};
