export type ProjectAttribution = {
  role: string;
  credit: string;
};

export type ProjectCopy = {
  title: string;
  /** Wordmark next to the logo (e.g. "Luma Lector") */
  wordmark?: string;
  summary: string;
  impact: string;
  problem: string;
  solution: string;
  architecture: string;
  process: string;
  /** Texto longo no case study (âncora #id na página de projetos) */
  details?: string;
  /** Papéis e créditos ligados ao projeto */
  attributions?: readonly ProjectAttribution[];
};

export type ProjectLogo = {
  src: string;
};

export type ProjectLinks = {
  caseStudy: string;
  github?: string;
  demo?: string;
};

export type LocalizedProject = {
  id: string;
  featured: boolean;
  localeKey: string;
  stack: string[];
  links: ProjectLinks;
  logo?: ProjectLogo;
};

export type StaticProject = ProjectCopy & {
  id: string;
  featured: boolean;
  stack: string[];
  links: ProjectLinks;
  logo?: ProjectLogo;
};

export type Project = StaticProject | LocalizedProject;

/** Keys mirrored under `projects.items` in pt/en message files */
export type ProjectLocaleItems = {
  lumalector: ProjectCopy;
  lumagestor: ProjectCopy;
  "tech-challange-2": ProjectCopy;
};

export function isLocalizedProject(project: Project): project is LocalizedProject {
  return "localeKey" in project && Boolean(project.localeKey);
}

export function resolveProjectCopy(
  project: Project,
  items: Partial<ProjectLocaleItems> | undefined
): ProjectCopy {
  if (isLocalizedProject(project)) {
    const row = items?.[project.localeKey as keyof ProjectLocaleItems];
    if (!row) {
      throw new Error(`Missing projects.items.${project.localeKey} for locale bundle`);
    }
    return row;
  }
  return {
    title: project.title,
    wordmark: project.wordmark,
    summary: project.summary,
    impact: project.impact,
    problem: project.problem,
    solution: project.solution,
    architecture: project.architecture,
    process: project.process,
  };
}

export const projects: Project[] = [
  {
    id: "lumalector",
    featured: true,
    localeKey: "lumalector",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Auth.js",
      "Zustand",
      "FastAPI",
    ],
    logo: {
      src: "/images/luma-lector-logotipo.png",
    },
    links: {
      caseStudy: "/pt/projects#lumalector",
      github: "",
      demo: "",
    },
  },
  {
    id: "lumagestor",
    featured: true,
    localeKey: "lumagestor",
    stack: [
      "Vite 7",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "React Router 7",
      "React PDF",
    ],
    logo: {
      src: "/images/logo-luma-gestor.png",
    },
    links: {
      caseStudy: "/pt/projects#lumagestor",
      github: "",
      demo: "",
    },
  },
  {
    id: "tech-challange-2",
    featured: true,
    localeKey: "tech-challange-2",
    stack: [
      "Python 3.8+",
      "NumPy",
      "DEAP",
      "Pygame",
      "Folium",
      "Matplotlib",
      "Plotly",
      "Seaborn",
      "Ollama (llama2)",
      "Streamlit",
      "Pandas",
      "Geopy",
      "OSMnx",
      "NetworkX",
      "Pytest",
      "Black",
      "Flake8",
      "Pylint",
      "MyPy",
    ],
    links: {
      caseStudy: "/pt/projects#tech-challange-2",
      github: "https://github.com/BernardoKawano/Tech-Challange-2",
      demo: "https://youtu.be/kWew_1jsQjQ",
    },
  },
  {
    id: "ops-ai-triage",
    featured: true,
    title: "AI Ops Triage Pipeline",
    summary:
      "Fluxo de triagem operacional com classificacao automatica e roteamento inteligente.",
    stack: ["Next.js", "TypeScript", "Python", "OpenAI API"],
    impact: "TODO: X+ horas economizadas por mes",
    problem: "Times perdiam tempo com triagem manual e priorizacao inconsistente.",
    solution:
      "Automacao com classificacao contextual, regras de prioridade e notificacao automatica.",
    architecture: "Ingestion -> Enrichment -> LLM Classifier -> Action Router",
    process: "Mapeamento do fluxo atual, prototipo rapido, iteracao com stakeholders.",
    links: {
      caseStudy: "/en/projects#ops-ai-triage",
      github: "",
      demo: "",
    },
  },
  {
    id: "document-intelligence",
    featured: true,
    title: "Document Intelligence Workflow",
    summary:
      "Pipeline para leitura, extracao e estruturacao de documentos operacionais.",
    stack: ["TypeScript", "Node.js", "OCR", "PostgreSQL"],
    impact: "TODO: Z documentos processados com menos retrabalho",
    problem:
      "Documentos chegavam em formatos diferentes e exigiam entrada manual repetitiva.",
    solution:
      "Orquestracao de OCR e validacao com regras para gerar dados estruturados confiaveis.",
    architecture: "Upload -> OCR -> Parser -> Validation -> Storage",
    process: "Piloto em dados reais, medicao de erro, refinamento de regras.",
    links: {
      caseStudy: "/en/projects#document-intelligence",
      github: "",
      demo: "",
    },
  },
  {
    id: "workflow-reduction",
    featured: true,
    title: "Workflow Reduction Engine",
    summary:
      "Redesenho de processo com automacao para reduzir passos e gargalos de aprovacao.",
    stack: ["Next.js", "Framer Motion", "Supabase"],
    impact: "TODO: Y etapas reduzidas no fluxo principal",
    problem:
      "Processos longos com dependencias manuais aumentavam atrasos e erros operacionais.",
    solution:
      "Fluxo enxuto com checkpoints claros e automacoes para tarefas repetitivas.",
    architecture: "Trigger -> Decision Nodes -> Automated Actions -> Audit Log",
    process:
      "Levantamento de gargalos, desenho do novo fluxo, rollout incremental por equipe.",
    links: {
      caseStudy: "/en/projects#workflow-reduction",
      github: "",
      demo: "",
    },
  },
];
