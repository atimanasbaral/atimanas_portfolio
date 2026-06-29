export type NavItem = {
  label: string;
  href: string;
  icon: string;
  topLabel: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: "Home", topLabel: "HOME" },
  { label: "Lore", href: "/lore", icon: "BookOpen", topLabel: "LORE" },
  { label: "Skills", href: "/skills", icon: "Zap", topLabel: "SKILLS" },
  { label: "Experience", href: "/experience", icon: "Briefcase", topLabel: "EXPERIENCE" },
  { label: "Projects", href: "/projects", icon: "FolderKanban", topLabel: "PROJECTS" },
  { label: "Certs", href: "/certifications", icon: "Award", topLabel: "CERTIFICATIONS" },
  { label: "Blog", href: "/blog", icon: "Newspaper", topLabel: "BLOG" },
  { label: "Contact", href: "/contact", icon: "Mail", topLabel: "CONTACT" },
];

export const TOP_NAV_ITEMS = NAV_ITEMS.filter((item) => item.href !== "/");
