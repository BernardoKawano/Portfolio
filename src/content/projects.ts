export type Project = {
  id: string;
  featured: boolean;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  problem: string;
  solution: string;
  architecture: string;
  process: string;
  links: {
    caseStudy: string;
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
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
