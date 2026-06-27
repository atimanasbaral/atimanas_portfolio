"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border bg-sidebar px-2 py-2 md:hidden"
      aria-label="Mobile"
    >
      {NAV_ITEMS.slice(0, 5).map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] ${
              active ? "text-accent-violet" : "text-text-faint"
            }`}
          >
            <span className="text-base">{item.label.charAt(0)}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
