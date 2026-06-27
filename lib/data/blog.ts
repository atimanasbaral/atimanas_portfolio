export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "black-scholes-residuals-ml",
    title: "Framing Black-Scholes Residuals as an ML Target",
    excerpt:
      "How I beat a 51% baseline by 22 percentage points on NSE options with an XGBoost/LightGBM ensemble.",
    date: "2025-11-12",
    tag: "Quant ML",
    readTime: "8 min",
  },
  {
    slug: "snowflake-star-schema-at-scale",
    title: "Star Schema at 5M+ Transactions Per Day",
    excerpt:
      "Partition pruning, clustering keys, and the 40% query win on a Snowflake warehouse.",
    date: "2025-09-03",
    tag: "Data Engineering",
    readTime: "6 min",
  },
  {
    slug: "fraud-ops-to-ml-engineer",
    title: "From Fraud Ops to Full-Time Builder",
    excerpt:
      "What BlackBuck taught me about precision, pattern detection, and shipping under pressure.",
    date: "2026-03-18",
    tag: "Career Lore",
    readTime: "5 min",
  },
];
