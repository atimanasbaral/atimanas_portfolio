export type ExperienceMetric = {
  value: string;
  label: string;
  icon: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  metrics: ExperienceMetric[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: "BlackBuck",
    role: "Fraud Analyst",
    period: "Sep 2025 – Mar 2026",
    location: "Bengaluru",
    highlights: [
      "Processed and classified 170+ call recordings per day with fraud-indicator tagging.",
      "Engineered cross-validation workflows cutting reconciliation discrepancies by ~40%.",
      "Flagged 80+ high-risk user accounts per week through pattern-based anomaly detection.",
      "Reduced fraud-case review turnaround by ~30% via structured batch-review process.",
    ],
    metrics: [
      { value: "170+", label: "Calls Processed Per Day", icon: "📞" },
      { value: ">95%", label: "Labeling Precision", icon: "🎯" },
      { value: "~40%", label: "Reconciliation Improvement", icon: "📊" },
      { value: "80+", label: "High-Risk Accounts Flagged Weekly", icon: "🚨" },
      { value: "~30%", label: "Review Turnaround Reduction", icon: "⚡" },
    ],
  },
];
