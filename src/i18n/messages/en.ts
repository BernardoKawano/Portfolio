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
      caseStudy: "Detailed case",
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
    },
    lumaDemos: {
      sectionTitle: "How data goes in, is processed, and comes out",
      sectionSubtitle:
        "Ideal in-product journey (illustrative, no live API): landing through calendar to month totals.",
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
