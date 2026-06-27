"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOP_NAV_ITEMS } from "@/lib/data/navigation";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="topnav-shell fixed top-0 right-0 z-40 flex items-center justify-between border-b border-border bg-topnav px-6 py-4 backdrop-blur-md md:left-sidebar">
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Section">
        <Link
          href="/"
          className={`topnav-link ${pathname === "/" ? "topnav-link-active" : ""}`}
        >
          HOME
        </Link>
        {TOP_NAV_ITEMS.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`topnav-link ${active ? "topnav-link-active" : ""}`}
            >
              {item.topLabel}
            </Link>
          );
        })}
      </nav>
      <p className="font-display text-xs tracking-[0.35em] text-text-faint lg:hidden">ATIMANAS</p>
      <p className="hidden text-xs text-text-muted lg:block">Portfolio v1</p>
    </header>
  );
}
