"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "relative overflow-hidden rounded-full border-2 border-border bg-bg-surface p-2 text-text-primary transition-colors duration-base hover:border-accent-violet"
          : "relative overflow-hidden flex items-center gap-2 rounded-full border-2 border-border bg-bg-surface px-3 py-2 text-text-primary transition-colors duration-base hover:border-accent-violet"
      }
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center"
        >
          {theme === "dark" ? (
            <Sun size={16} strokeWidth={2} />
          ) : (
            <Moon size={16} strokeWidth={2} />
          )}
        </motion.span>
      </AnimatePresence>
      {!compact && <span className="text-xs font-bold uppercase tracking-widest">{theme === "dark" ? "Light" : "Dark"}</span>}
    </button>
  );
}
