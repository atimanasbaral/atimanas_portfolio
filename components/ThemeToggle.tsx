"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
  compact?: boolean;
};

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    queueMicrotask(() => {
      const stored = localStorage.getItem("theme");
      const initial = stored === "light" ? "light" : "dark";
      setTheme(initial);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(initial);
    });
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={
        compact
          ? "rounded-full border border-border bg-bg-surface p-2 text-sm text-text-primary transition-colors duration-base hover:border-accent-violet"
          : "rounded-full border border-border bg-bg-surface px-3 py-2 text-text-primary transition-colors duration-base hover:border-accent-violet"
      }
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
