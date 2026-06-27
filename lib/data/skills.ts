export type SkillCategory = {
  category: string;
  icon: string;
  tools: string;
  level: number;
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Data Engineering",
    icon: "◎",
    tools: "Snowflake, PostgreSQL, BigQuery, AWS, ETL, Star Schema",
    level: 90,
  },
  {
    category: "ML / Analytics",
    icon: "⚡",
    tools: "XGBoost, LightGBM, PyTorch, TensorFlow, MLflow, ONNX",
    level: 92,
  },
  {
    category: "Quant Finance",
    icon: "◈",
    tools: "VaR, Black-Scholes, IV Surface, Greeks, Backtesting",
    level: 88,
  },
  {
    category: "Languages",
    icon: "</>",
    tools: "Python, SQL, R, C++ (learning)",
    level: 85,
  },
  {
    category: "DevOps / Tools",
    icon: "✦",
    tools: "Docker, FastAPI, Git, Linux, REST APIs",
    level: 78,
  },
];

export const stackTags = [
  "Python",
  "SQL",
  "TypeScript",
  "Snowflake",
  "XGBoost",
  "LightGBM",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Next.js",
  "React",
  "PostgreSQL",
  "Docker",
  "AWS",
  "MLflow",
  "Power BI",
  "Airflow",
  "dbt",
  "Spark",
];

export const learningTags = ["Airflow", "dbt", "Spark", "C++"];

export const skillStats = [
  { value: "20+", label: "Projects Built", accent: "violet" as const },
  { value: "5M+", label: "Daily Records Processed", accent: "cyan" as const },
  { value: "73%", label: "Model Accuracy", accent: "violet" as const },
  { value: "∞", label: "Passion for Innovation", accent: "gold" as const },
];
