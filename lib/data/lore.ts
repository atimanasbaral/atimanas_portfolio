export type LoreChapter = {
  id: string;
  year: string;
  tag: string;
  title: string;
  description: string;
  status: "COMPLETED" | "ACTIVE" | "UNLOCKING";
  color: string;
};

export const loreChapters: LoreChapter[] = [
  {
    id: "eee",
    year: "2022 – 2025",
    tag: "Ch.1 — The Circuit Arc",
    title: "Electrical Engineering at VSSUT.",
    description:
      "Learned to debug circuits before debugging pipelines. Probability, linear algebra, and microprocessors secretly trained me for quant work.",
    status: "COMPLETED",
    color: "#6d4aff",
  },
  {
    id: "python",
    year: "2023 – 2024",
    tag: "Ch.2 — The Python Awakening",
    title: "Discovered that import pandas beats manual Excel.",
    description:
      "Went from EEE labs to scripting automation. SQL entered the chat. The grind became real.",
    status: "COMPLETED",
    color: "#6d4aff",
  },
  {
    id: "ai",
    year: "2022 – 2024",
    tag: "Ch.3 — The ML Dojo",
    title: "AI workshops and innovation cell leadership.",
    description:
      "Delivered ML workshops for 80+ students rated 4.6/5. Built CNN quantization pipelines. The models started shipping.",
    status: "COMPLETED",
    color: "#6d4aff",
  },
  {
    id: "quant",
    year: "2025",
    tag: "Ch.4 — Quant Finance Mode",
    title: "VaR engines and options mispricing hunters.",
    description:
      "Black-Scholes said fair price. XGBoost said bet against it. 73% directional accuracy on NSE options data.",
    status: "COMPLETED",
    color: "#00d4ff",
  },
  {
    id: "blackbuck",
    year: "Sep 2025 – Mar 2026",
    tag: "Ch.5 — The Arena",
    title: "Fraud Analyst at BlackBuck.",
    description:
      "170+ calls per day, >95% labeling precision, 80+ high-risk accounts flagged weekly. Real fraud. Real stakes.",
    status: "COMPLETED",
    color: "#6d4aff",
  },
  {
    id: "mission",
    year: "Now — Future",
    tag: "Ch.6 — Current Mission",
    title: "Build. Ship. Impact.",
    description:
      "Seeking high-impact roles in data engineering, quant analytics, or ML engineering at fintech and HFT organizations in Bengaluru.",
    status: "ACTIVE",
    color: "#00d4ff",
  },
];

export const lorePreviewPanels = [
  {
    year: "2022",
    title: "The Circuit",
    text: "EEE degree unlocked. Curiosity upgraded to obsession.",
    tone: "from-white to-slate-300",
  },
  {
    year: "2024",
    title: "The Code",
    text: "Python, SQL, and ML workshops for 80+ students.",
    tone: "from-slate-200 to-zinc-500",
  },
  {
    year: "2025",
    title: "The Quant",
    text: "Options mispricing at 73% accuracy. VaR engine shipped.",
    tone: "from-zinc-100 to-slate-600",
  },
  {
    year: "2026",
    title: "The Arena",
    text: "BlackBuck fraud ops. Then back to building full-time.",
    tone: "from-slate-300 to-zinc-800",
  },
  {
    year: "Future",
    title: "The Mission",
    text: "Fintech. HFT. Signals that move capital.",
    tone: "from-white to-slate-500",
  },
];
