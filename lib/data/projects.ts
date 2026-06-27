export type Project = {
  slug: string;
  quest: string;
  title: string;
  subtitle: string;
  difficulty: string;
  reward: string;
  tags: string[];
  gradient: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "options-mispricing-hunter",
    quest: "QUEST #001",
    title: "Options Mispricing Hunter",
    subtitle: "ML over Black-Scholes residuals with 73% directional accuracy on NSE options.",
    difficulty: "S-RANK",
    reward: "Quant Signals + Live Paper Trading",
    tags: ["Python", "XGBoost", "LightGBM", "FastAPI", "MLflow"],
    gradient: "linear-gradient(135deg, rgba(109,74,255,0.3), rgba(0,212,255,0.12))",
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    slug: "monte-carlo-var-engine",
    quest: "QUEST #002",
    title: "Monte Carlo VaR Engine",
    subtitle: "Basel II–compliant VaR with Kupiec/Christoffersen backtesting for NIFTY50 portfolios.",
    difficulty: "A-RANK",
    reward: "Portfolio Risk Intelligence",
    tags: ["Python", "NumPy", "SciPy", "Backtesting"],
    gradient: "linear-gradient(135deg, rgba(109,74,255,0.22), rgba(102,204,255,0.08))",
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    slug: "snowflake-ecommerce-dwh",
    quest: "QUEST #003",
    title: "Snowflake E-Commerce Data Warehouse",
    subtitle: "Star-schema warehouse ingesting 5M+ daily transactions with 40% query improvement.",
    difficulty: "A-RANK",
    reward: "Real-Time Analytics Platform",
    tags: ["Snowflake", "PostgreSQL", "ETL", "Power BI"],
    gradient: "linear-gradient(135deg, rgba(102,204,255,0.28), rgba(36,107,255,0.18))",
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    slug: "cnn-int8-quantization",
    quest: "QUEST #004",
    title: "CNN INT8 Quantization Pipeline",
    subtitle: "3.2× inference speedup and 60% size reduction retaining 95.4% top-1 accuracy.",
    difficulty: "B-RANK",
    reward: "Edge ML Deployment",
    tags: ["PyTorch", "ONNX", "TensorRT", "INT8"],
    gradient: "linear-gradient(135deg, rgba(109,74,255,0.22), rgba(255,255,255,0.06))",
    githubUrl: "",
    demoUrl: "",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
