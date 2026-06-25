"use client";
import { motion } from "framer-motion";

const CHAPTERS = [
  { year: "2016 - 2021", tag: "Ch.1 - The Beginning", title: "Small Town. Big Dreams.", description: "Born and raised with curiosity as my only compass. While others played, I dismantled electronics to understand how they worked.", status: "COMPLETED", color: "#6d4aff" },
  { year: "2021 - 2025", tag: "Ch.2 - The Grind", title: "VSSUT Burla. B.Tech EEE.", description: "Four years of circuits, code, and caffeine. Led ML workshops for 80+ students rated 4.6/5. Core member of the Idea and Innovation Cell.", status: "COMPLETED", color: "#6d4aff" },
  { year: "Sep 2025 - Mar 2026", tag: "Ch.3 - The Arena", title: "Fraud Analyst at BlackBuck.", description: "Stepped into the real world. Analyzed fraud patterns across logistics transactions and built detection pipelines. Resigned in April 2026 to build full-time.", status: "COMPLETED", color: "#6d4aff" },
  { year: "2025 - Present", tag: "Ch.4 - The Builder Arc", title: "Five Products. One Mission.", description: "Built Fintava, MurkCrow, CARVEX, AI Notebook (Flutter, Windows + Android), and NEXUS while working full-time. Trixtern B2B sales across 9 countries.", status: "ACTIVE", color: "#00d4ff" },
  { year: "Now - Future", tag: "Ch.5 - The Mission", title: "Build. Ship. Impact.", description: "Actively seeking roles in AI/ML Engineering, Data Engineering, or Quant-track positions. Join a team where data drives real decisions.", status: "UNLOCKING", color: "#6f7694" },
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-20" style={{ background: "#0a0c12" }}>
      <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="mb-2 text-sm tracking-widest uppercase" style={{ color: "#6f7694" }}>
          Origin Story
        </p>
        <h1 className="font-display text-5xl md:text-7xl" style={{ color: "#d8d9e8" }}>
          MY JOURNEY
        </h1>
        <p className="mt-4 text-sm" style={{ color: "#9aa0b8" }}>
          From a small town with big dreams to building AI-powered solutions.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 bottom-0 w-px md:left-1/2" style={{ background: "#1e2236" }} />
        {CHAPTERS.map((chapter, i) => (
          <motion.div key={i} className="relative mb-12 flex gap-8 md:items-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <div className="relative z-10 flex-shrink-0 h-3 w-3 rounded-full mt-1.5 ml-[18px]"
              style={{ background: chapter.color }} />
            <div className="ml-4 flex-1">
              <div className="rounded-xl p-6" style={{ background: "#11131c", border: "1px solid #1e2236", borderLeft: "3px solid " + chapter.color }}>
                <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-medium" style={{ color: chapter.color }}>{chapter.tag}</span>
                  <span className="rounded-full px-2 py-0.5 text-xs" style={{ background: "rgba(0,0,0,0.3)", color: chapter.color }}>{chapter.status}</span>
                </div>
                <p className="mb-1 text-xs" style={{ color: "#555a7a" }}>{chapter.year}</p>
                <h3 className="font-display text-lg mb-2" style={{ color: "#d8d9e8" }}>{chapter.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9aa0b8" }}>{chapter.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/projects" className="rounded-full px-6 py-3 text-sm font-medium" style={{ background: "#6d4aff", color: "#fff" }}>View My Projects</a>
          <a href="/" className="rounded-full px-6 py-3 text-sm font-medium" style={{ border: "1px solid #3d4663", color: "#9aa0b8" }}>Back to Home</a>
        </div>
      </div>
    </main>
  );
}