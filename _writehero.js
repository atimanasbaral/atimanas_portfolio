const fs = require('fs');

const code = `"use client";
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

const STATUS_COLOR = {
  Building: "#6d4aff",
  Shipped: "#00d4ff",
  Paused: "#6f7694",
};

const NAV_ICONS = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "About", href: "/journey", icon: "◎" },
  { label: "Skills", href: "/skills", icon: "⚡" },
  { label: "Projects", href: "/projects", icon: "◈" },
  { label: "Certs", href: "/achievements", icon: "✦" },
  { label: "Blog", href: "/blog", icon: "✐" },
  { label: "Contact", href: "/contact", icon: "✉" },
];

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

  if (!checked) return <div className="min-h-screen" style={{ background: "#0a0c12" }} />;
  if (showIntro) return <IntroSequence onComplete={() => setShowIntro(false)} />;

  return (
    <div className="relative flex min-h-screen overflow-hidden" style={{ background: "#0a0c12" }}>

      {/* LEFT ICON SIDEBAR */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 hidden md:flex flex-col items-center justify-between py-8 w-16"
        style={{ background: "rgba(10,12,18,0.95)", borderRight: "1px solid #1e2236" }}>
        <div className="flex flex-col items-center gap-1">
          <span className="font-display text-xs text-center leading-tight mb-4" style={{ color: "#6d4aff", writingMode: "vertical-rl" }}>
            ATIMANAS
          </span>
        </div>
        <nav className="flex flex-col items-center gap-6">
          {NAV_ICONS.map((item) => (
            <a key={item.label} href={item.href}
              className="flex flex-col items-center gap-1 group">
              <span className="text-lg transition-all group-hover:scale-125" style={{ color: "#3d4663" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6d4aff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3d4663")}>
                {item.icon}
              </span>
              <span className="text-xs" style={{ color: "#555a7a" }}>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-xs transition-colors" style={{ color: "#3d4663" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6d4aff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3d4663")}>in</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-xs transition-colors" style={{ color: "#3d4663" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6d4aff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3d4663")}>gh</a>
        </div>
      </aside>

      {/* MAIN CONTENT — offset by sidebar */}
      <main className="flex-1 md:ml-16 relative">

        {/* TOP NAV */}
        <nav className="fixed top-0 left-16 right-0 z-40 flex items-center justify-between px-8 py-4"
          style={{ borderBottom: "1px solid #1e2236", background: "rgba(10,12,18,0.85)", backdropFilter: "blur(12px)" }}>
          <div className="flex gap-8">
            {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CERTIFICATIONS", "BLOG", "CONTACT"].map((item) => (
              <a key={item} href={"/" + item.toLowerCase().replace("certifications", "achievements")}
                className="text-xs tracking-widest transition-colors hidden lg:block"
                style={{ color: "#6f7694" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d8d9e8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6f7694")}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm" style={{ color: "#6f7694" }}>☀</button>
            <button className="text-sm" style={{ color: "#6f7694" }}>☾</button>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

          {/* Background gradient */}
          <div className="absolute inset-0 z-0"
            style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(109,74,255,0.15) 0%, transparent 60%)" }} />

          {/* Character image — full height right side */}
          <div className="absolute right-24 bottom-0 z-10 h-[90%] w-auto hidden md:block">
            <img src="/avatar.png" alt="Atimanas Baral"
              className="h-full w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 0 40px rgba(109,74,255,0.4))" }} />
          </div>

          {/* Speech bubble */}
          <motion.div
            className="absolute z-20 hidden lg:block"
            style={{ right: "22rem", top: "8rem" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}>
            <div className="relative rounded-2xl px-4 py-3 text-xs text-center max-w-[140px]"
              style={{ background: "#fff", color: "#0a0c12", lineHeight: 1.5 }}>
              データは<br />ただの数字じゃない。<br />それは未来への<br />ヒントだ。
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                style={{ borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderTop: "8px solid #fff" }} />
            </div>
          </motion.div>

          {/* Manga panels strip — top right */}
          <div className="absolute top-20 right-4 z-20 hidden xl:flex flex-col gap-1">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-16 h-20 rounded overflow-hidden"
                style={{ border: "1px solid #3d4663", background: "#11131c" }}>
                <img src="/avatar.png" alt="" className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(80%) contrast(1.2)" }} />
              </div>
            ))}
          </div>

          {/* Hero text — left side */}
          <div className="relative z-20 px-8 md:px-12 max-w-2xl">
            <motion.p className="text-sm tracking-widest mb-4"
              style={{ color: "#6f7694" }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              夢を描き、コードで未来を創る。
            </motion.p>

            <motion.h1 className="font-display leading-none mb-2"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#d8d9e8" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              ATIMANAS
            </motion.h1>
            <motion.h1 className="font-display leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#6d4aff", textShadow: "0 0 40px rgba(109,74,255,0.5)" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              BARAL
            </motion.h1>

            <motion.p className="text-lg font-semibold mb-2"
              style={{ color: "#d8d9e8" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              DATA ANALYST | AI ENGINEER
            </motion.p>
            <motion.p className="text-lg font-semibold mb-2"
              style={{ color: "#d8d9e8" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
              MACHINE LEARNING ENTHUSIAST
            </motion.p>

            <motion.div className="h-7 overflow-hidden mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <AnimatePresence mode="wait">
                <motion.p key={roleIndex}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm" style={{ color: "#9aa0b8" }}>
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div className="flex gap-3 flex-wrap"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}>
              <a href="/projects"
                className="rounded-full px-6 py-3 text-sm font-medium transition-all"
                style={{ background: "#6d4aff", color: "#fff" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(109,74,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
                EXPLORE MY WORK
              </a>
              <a href="/resume"
                className="rounded-full px-6 py-3 text-sm font-medium transition-all flex items-center gap-2"
                style={{ border: "1px solid #3d4663", color: "#d8d9e8" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6d4aff")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#3d4663")}>
                DOWNLOAD RESUME
              </a>
            </motion.div>

            <motion.div className="mt-10 flex items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1 }}>
              <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "#6f7694" }}>
                <div className="w-1 h-1 rounded-full" style={{ background: "#6f7694" }} />
              </div>
              <span className="text-xs tracking-widest" style={{ color: "#6f7694" }}>SCROLL DOWN</span>
            </motion.div>
          </div>
        </section>

        {/* CURRENTLY BUILDING STRIP */}
        <section className="px-8 md:px-12 py-8" style={{ borderTop: "1px solid #1e2236" }}>
          <p className="mb-4 text-xs tracking-widest uppercase" style={{ color: "#6f7694" }}>Currently Building</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {DEVLOG.map((entry) => (
              <div key={entry.project} className="rounded-lg px-4 py-3"
                style={{ background: "#11131c", border: "1px solid #1e2236" }}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: "#d8d9e8" }}>{entry.project}</span>
                  <span className="rounded-full px-2 py-0.5 text-xs"
                    style={{ background: "rgba(0,0,0,0.3)", color: STATUS_COLOR[entry.status] }}>
                    {entry.status}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "#9aa0b8" }}>{entry.entry}</p>
                <p className="mt-1 text-xs" style={{ color: "#555a7a" }}>{entry.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEV UTIL */}
        <div className="flex justify-center pb-6">
          <button onClick={() => { localStorage.removeItem("hasSeenIntro"); window.location.reload(); }}
            className="text-xs" style={{ color: "#555a7a" }}>
            replay intro
          </button>
        </div>
      </main>
    </div>
  );
}`;

fs.writeFileSync('app/page.tsx', code);
console.log('Done');