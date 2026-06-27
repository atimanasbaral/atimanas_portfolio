"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "@/components/ui/Avatar";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_ITEMS } from "@/lib/data/navigation";
import { profile } from "@/lib/data/profile";

const ICONS: Record<string, string> = {
  home: "⌂",
  lore: "◎",
  skills: "⚡",
  experience: "◆",
  projects: "◈",
  certs: "✦",
  blog: "✐",
  contact: "✉",
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar-shell fixed left-0 top-0 bottom-0 z-50 hidden md:flex w-sidebar flex-col items-center justify-between border-r border-border bg-sidebar py-6">
      <div className="flex flex-col items-center gap-4">
        <Avatar src={profile.avatarPath} alt={profile.name} size="lg" />
        <span className="font-display text-[10px] leading-tight text-accent-violet [writing-mode:vertical-rl]">
          {profile.firstName.toUpperCase()}
        </span>
      </div>

      <nav className="flex flex-col items-center gap-5" aria-label="Primary">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-1"
              aria-current={active ? "page" : undefined}
            >
              <span
                className={`text-lg transition-all duration-base group-hover:scale-125 ${
                  active ? "text-accent-violet text-glow-violet" : "text-steel group-hover:text-accent-cyan"
                }`}
              >
                {ICONS[item.icon]}
              </span>
              <span className={`text-[10px] ${active ? "text-text-primary" : "text-text-faint"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-4">
        <ThemeToggle compact />
        <div className="flex flex-col items-center gap-2">
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              in
            </a>
          ) : null}
          {profile.github ? (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              gh
            </a>
          ) : null}
          <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email">
            @
          </a>
        </div>
        <span className="availability-badge">{profile.availability}</span>
      </div>
    </aside>
  );
}
