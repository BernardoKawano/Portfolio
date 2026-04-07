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
    metricsTitle: "Measured Impact",
    metricsSubtitle: "Real outcomes from real projects.",
    metrics: [
      { value: "200+", label: "hours of manual work removed" },
      { value: "5x", label: "fewer steps in key workflows" },
      { value: "1k+", label: "documents processed automatically" },
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
    },
    items: {
      lumalector: {
        title: "LumaLector",
        wordmark: "Luma Lector",
        summary:
          "Web frontend for automated analysis of financial statement PDFs, financial control, calendar, reports, and conversion to RSDT (.241) files, integrated with a FastAPI backend.",
        impact:
          "Roughly 2 hours of manual work removed each business day — about 40 hours reclaimed per month.",
        problem:
          "PDF statements and financial control work often mean manual effort, exports, and tax-calendar alignment without a single web workflow.",
        solution:
          "A Next.js app (App Router) with upload and analysis, history, calendar, exports (txt, csv, excel, cash book) and conversion via multipart, calling REST endpoints on FastAPI; Google OAuth (Auth.js v5 beta) for session in the UI, with no JWT attached to backend requests in the current code.",
        architecture:
          "Browser -> Next.js + Auth.js -> src/lib/api.ts (HTTP) -> FastAPI (e.g. /api/analyze, /api/history, /api/calendar/*, /api/export/*, /api/convert, /api/health)",
        process:
          "Multi-part repo (frontend/, backend/, Flet at repo root); for evolution or migration: align Node LTS with Next 16 builds, AUTH_* and NEXT_PUBLIC_API_URL, FastAPI CORS for the frontend host, and lint/build/dev smoke tests with the backend on port 8000.",
      },
      lumagestor: {
        title: "LumaGestor",
        wordmark: "Luma Gestor",
        summary:
          "SPA for construction financial management: payment requests with a professional PDF, a Kanban for status (Generated, Sent, Paid), and a per-project dashboard tied to Google Drive and Google Sheets — no loose spreadsheets.",
        impact:
          "One web flow to request, track, and consolidate by project; marking paid pushes the amount into the tracking sheet without retyping.",
        problem:
          "Site teams often scatter requests, receipts, and totals across files and spreadsheets, without a single view of what was generated, sent, or paid, or of balances per project.",
        solution:
          "A three-step wizard (project in Drive, line items and reimbursement notes, review) with PDF output into the project folder; a status Kanban that updates the sheet when paid; a per-project panel for totals, extras, client receipts, and payroll, reading and writing the spreadsheet.",
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
      "tech-challange-2": {
        title: "Medical Supplies Distribution Route Optimization System",
        wordmark: "Medical Route Optimization (VRP)",
        summary:
          "A route optimization system for medical-supplies distribution in Sao Paulo that uses a genetic algorithm with priority, capacity, and range constraints, real-time visualization with Pygame, interactive Folium maps, and optional local LLM support via Ollama.",
        impact:
          "Qualitative impact: the project demonstrates critical-delivery prioritization, potential total-distance reduction, and improved operational visibility through maps and reports, but it does not yet include externally validated benchmark metrics.",
        problem:
          "Hospitals and medical centers require urgent supplies; the challenge is to minimize total distance, prioritize critical deliveries, and respect vehicle operational constraints.",
        solution:
          "A genetic-algorithm engine evolves route populations with selection, crossover, mutation, and elitism, using a multi-objective fitness function with capacity/range penalties and balancing; it outputs an HTML map and operational artifacts.",
        architecture:
          "Modular architecture under src/ split across data models, optimization engine, visualization, LLM integration, and utilities; main.py orchestrates the end-to-end flow, while a Streamlit web_viewer provides browser-based presentation.",
        process:
          "Interactive setup (vehicles, points, generations) -> GA run with per-generation callbacks and metrics -> Pygame visualization -> Folium map generation -> optional Ollama instructions and report generation -> context persistence for Q&A.",
        details:
          "This project tackles a real critical-logistics scenario: distributing medical supplies across Sao Paulo under clinical priority and fleet constraints. Its core is a genetic algorithm using selection, crossover, mutation, and elitism, with a multi-objective fitness strategy that balances total distance, high-priority fulfillment, vehicle capacity, and range compliance. Execution is transparent rather than black-boxed: Pygame provides real-time route evolution visibility, while Folium outputs an interactive map for operational review and stakeholder communication. An optional LLM layer via Ollama (llama2) generates driver instructions and management reports locally, with optional OpenAI support when needed. The result is an end-to-end engineering case that combines optimization, visualization, web presentation through Streamlit, and developer-quality practices with Pytest, Black, Flake8, Pylint, and MyPy.",
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
        simulationCaption: "Real-time visualization (Pygame-style reference)",
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
    approachTitle: "Approach",
    inspirationsTitle: "References that shape my work",
    inspirations: [
      {
        author: "Steve Jobs",
        quote: "Simple can be harder than complex.",
        insight:
          "That's why I build AI systems that remove friction instead of adding noise.",
      },
      {
        author: "Jony Ive",
        quote: "It's about bringing order to complexity.",
        insight: "From broken workflows to usable systems.",
      },
      {
        author: "Dieter Rams",
        quote: "Good design makes a product understandable.",
        insight: "The same should be true for automation.",
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
