export type Certification = {
  name: string;
  subtitle: string;
  mark: string;
  year: string;
  accent?: "cyan" | "default";
};

export const certifications: Certification[] = [
  {
    name: "HackerRank",
    subtitle: "SQL (Advanced)",
    mark: "HR",
    year: "Jan 2026",
  },
  {
    name: "Citi",
    subtitle: "Finance Virtual Experience",
    mark: "C",
    year: "2024",
  },
  {
    name: "HSBC",
    subtitle: "Banking Virtual Experience",
    mark: "HSBC",
    year: "2024",
  },
  {
    name: "Google",
    subtitle: "Data Analysis with R",
    mark: "G",
    year: "Jan 2025",
    accent: "cyan",
  },
  {
    name: "Cisco",
    subtitle: "Introduction to Networking",
    mark: "CSCO",
    year: "Jun 2024",
  },
];
