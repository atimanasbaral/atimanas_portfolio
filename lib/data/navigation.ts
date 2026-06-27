export type NavItem = {
  label: string;
  href: string;
  icon: string;
  topLabel: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: "home", topLabel: "HOME" },
  { label: "Lore", href: "/lore", icon: "lore", topLabel: "LORE" },
  { label: "Skills", href: "/skills", icon: "skills", topLabel: "SKILLS" },
  { label: "Experience", href: "/experience", icon: "experience", topLabel: "EXPERIENCE" },
  { label: "Projects", href: "/projects", icon: "projects", topLabel: "PROJECTS" },
  { label: "Certs", href: "/certifications", icon: "certs", topLabel: "CERTIFICATIONS" },
  { label: "Blog", href: "/blog", icon: "blog", topLabel: "BLOG" },
  { label: "Contact", href: "/contact", icon: "contact", topLabel: "CONTACT" },
];

export const TOP_NAV_ITEMS = NAV_ITEMS.filter((item) => item.href !== "/");
