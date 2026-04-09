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
  coreStack?: string[];
  links: ProjectLinks;
  logo?: ProjectLogo;
  privateRepo?: boolean;
};

export type StaticProject = ProjectCopy & {
  id: string;
  featured: boolean;
  stack: string[];
  coreStack?: string[];
  links: ProjectLinks;
  logo?: ProjectLogo;
  privateRepo?: boolean;
};

export type Project = StaticProject | LocalizedProject;

/** Keys mirrored under `projects.items` in pt/en message files */
export type ProjectLocaleItems = {
  lumalector: ProjectCopy;
  lumagestor: ProjectCopy;
  "tech-challenge-2": ProjectCopy;
  "tech-challenge-3": ProjectCopy;
  "tech-challenge-1": ProjectCopy;
  "multimodal-clinical-monitoring": ProjectCopy;
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
    privateRepo: true,
    coreStack: ["Next.js", "TypeScript", "FastAPI", "Auth.js"],
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
    },
  },
  {
    id: "lumagestor",
    featured: true,
    localeKey: "lumagestor",
    privateRepo: true,
    coreStack: ["React", "TypeScript", "Google Sheets API", "React PDF"],
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
    },
  },
  {
    id: "tech-challenge-1",
    featured: true,
    localeKey: "tech-challenge-1",
    coreStack: ["Python", "Scikit-learn", "Pandas", "SHAP"],
    stack: [
      "Python 3.10+",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "SHAP",
      "Docker",
    ],
    logo: {
      src: "/images/logo-onco-ai.png",
    },
    links: {
      caseStudy: "/pt/projects#tech-challenge-1",
      github: "https://github.com/BernardoKawano/FIAPTechChallange01",
      demo: "https://colab.research.google.com/github/BernardoKawano/FIAPTechChallange01/blob/main/tech-challenge-fase1/notebooks/02_colab_pipeline_publico.ipynb",
    },
  },
  {
    id: "tech-challenge-2",
    featured: true,
    localeKey: "tech-challenge-2",
    coreStack: ["Python", "DEAP", "Streamlit", "Ollama"],
    stack: [
      "Python 3.8+",
      "NumPy",
      "DEAP",
      "Web UI",
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
    logo: {
      src: "/images/logo-rota-vrp.png",
    },
    links: {
      caseStudy: "/pt/projects#tech-challenge-2",
      github: "https://github.com/BernardoKawano/Tech-Challange-2",
      demo: "https://youtu.be/kWew_1jsQjQ",
    },
  },
  {
    id: "tech-challenge-3",
    featured: true,
    localeKey: "tech-challenge-3",
    coreStack: ["PyTorch", "QLoRA", "LangGraph", "Phi-2"],
    stack: [
      "Python",
      "PyTorch",
      "Transformers",
      "PEFT (QLoRA/LoRA)",
      "LangChain",
      "LangGraph",
      "BitsAndBytes",
      "Hugging Face Datasets",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    logo: {
      src: "/images/logo-clinguard-ai.png",
    },
    links: {
      caseStudy: "/pt/projects#tech-challenge-3",
      github: "https://github.com/BernardoKawano/Tech-Challange-3",
      demo: "https://youtu.be/LfE3NgAbXyo",
    },
  },
  {
    id: "multimodal-clinical-monitoring",
    featured: true,
    localeKey: "multimodal-clinical-monitoring",
    coreStack: ["LangGraph", "YOLOv8", "PyTorch", "OpenAI API"],
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI API (gpt-4o-mini)",
      "PyTorch",
      "Ultralytics YOLOv8",
      "OpenCV",
      "Librosa",
      "Scikit-learn",
      "Azure Speech Services",
      "Azure Video Indexer",
      "Hugging Face Datasets",
      "Pytest",
    ],
    logo: {
      src: "/images/logo-medguard-ai.png",
    },
    links: {
      caseStudy: "/pt/projects#multimodal-clinical-monitoring",
      github: "https://github.com/BernardoKawano/Tech-Challange-4",
      demo: "https://youtu.be/xXdvzQmYixA",
    },
  },
];
