"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSequence from "@/components/IntroSequence";

const ROLES = [
  "Data Engineer",
  "AI / ML Engineer",
  "Quant-Curious Analyst",
  "Builder of Things That Ship",
];

const DEVLOG = [
  { project: "AI Notebook", entry: "Completed Task Manager with SQLite + Riverpod", status: "Building", date: "Jun 2026" },
  { project: "Fintava", entry: "Options mispricing model hit 73% directional accuracy", status: "Shipped", date: "May 2026" },
  { project: "Trixtern", entry: "Delivered 100-lead B2B pipeline across 9 EU countries", status: "Shipped", date: "Jun 2026" },
];

const STATUS_COLOR: Record<string, string> = {
  Building: "var(--color-accent-violet)",
  Shipped: "var(--color-accent-cyan)",
  Paused: "var(--color-steel-light)",
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [checked, setChecked] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem("hasSeenIntro");
    setShowIntro(!seen);
    setChecked(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  if (!checked) return <div className="min-h-screen" style={{ background: "var(--color-bg-primary)" }} />;
  if (showIntro) return <IntroSequence onComplete={() => setShowIntro(false)} />;

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden" style={{ background: "var(--color-bg-primary)" }}>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ borderBottom: "1px solid var(--color-border)", background: "rgba(10,12,18,0.85)", backdropFilter: "blur(12px)" }}>
        <span className="font-display text-lg" style={{ color: "var(--color-accent-violet)" }}>ATIMANAS.DEV</span>
        <div className="hidden gap-8 md:flex">
          {["Journey", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={"/" + item.toLowerCase()}
              className="text-sm transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}>
              {item}
            </a>
          ))}
        </div>
        <a href="/resume" className="rounded-full px-4 py-1.5 text-sm font-medium transition-all"
          style={{ border: "1px solid var(--color-accent-violet)", color: "var(--color-accent-violet)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-accent-violet)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-accent-violet)"; }}>
          Resume
        </a>
      </nav>

      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-12 md:flex-row md:items-center md:justify-between md:px-20 md:gap-12">
        <motion.div className="flex flex-col gap-6 md:max-w-xl"
          initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>

          <p className="text-sm tracking-widest" style={{ color: "var(--color-steel-light)" }}>
            夢を描き、コードで未来を創る。
          </p>

          <h1 className="font-display leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "var(--color-text-primary)" }}>
            ATIMANAS<br />
            <span className="text-glow-violet" style={{ color: "var(--color-accent-violet)" }}>BARAL</span>
          </h1>

          <div className="h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p key={roleIndex}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="text-lg font-medium" style={{ color: "var(--color-accent-cyan)" }}>
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="rounded-lg px-5 py-4 text-sm italic"
            style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)", borderLeft: "3px solid var(--color-accent-violet)" }}>
            "Data is not just numbers. It is the blueprint of the future."
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/projects" className="rounded-full px-6 py-3 text-sm font-medium transition-all"
              style={{ background: "var(--color-accent-violet)", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--glow-violet)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
              Explore Projects →
            </a>
            <a href="/journey" className="rounded-full px-6 py-3 text-sm font-medium transition-all"
              style={{ border: "1px solid var(--color-steel)", color: "var(--color-text-primary)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-accent-violet)"; e.currentTarget.style.color = "var(--color-accent-violet)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-steel)"; e.currentTarget.style.color = "var(--color-text-primary)"; }}>
              Enter Journey
            </a>
            <a href="/resume" className="rounded-full px-6 py-3 text-sm font-medium transition-all"
              style={{ border: "1px solid var(--color-steel)", color: "var(--color-text-muted)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-accent-cyan)"; e.currentTarget.style.color = "var(--color-accent-cyan)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-steel)"; e.currentTarget.style.color = "var(--color-text-muted)"; }}>
              ↓ Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div className="relative mt-12 flex-shrink-0 md:mt-0"
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
          <div className="h-72 w-72 rounded-2xl md:h-96 md:w-80"
            style={{ background: "linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-accent-violet-dim) 100%)", border: "1px solid var(--color-border-glow)", boxShadow: "var(--glow-violet)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-faint)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            [ AVATAR ]
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 text-xs"
            style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}>
            <span style={{ color: "var(--color-accent-cyan)" }}>●</span> Open to opportunities
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-8 md:px-20" style={{ borderTop: "1px solid var(--color-border)" }}>
        <p className="mb-4 text-xs tracking-widest uppercase" style={{ color: "var(--color-steel-light)" }}>Currently Building</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {DEVLOG.map((entry) => (
            <div key={entry.project} className="rounded-lg px-4 py-3"
              style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border)" }}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium" style={{ color: "var(--color-text-primary)" }}>{entry.project}</span>
                <span className="rounded-full px-2 py-0.5 text-xs"
                  style={{ background: "rgba(0,0,0,0.3)", color: STATUS_COLOR[entry.status] }}>
                  {entry.status}
                </span>
              </div>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{entry.entry}</p>
              <p className="mt-1 text-xs" style={{ color: "var(--color-text-faint)" }}>{entry.date}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center pb-6">
        <button onClick={() => { localStorage.removeItem("hasSeenIntro"); window.location.reload(); }}
          className="text-xs transition-colors" style={{ color: "var(--color-text-faint)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}>
          ↻ replay intro
        </button>
      </div>
    </main>
  );
}