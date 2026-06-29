"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { loreChapters } from "@/lib/data/lore";

const STATUS_COLOR: Record<string, string> = {
  COMPLETED: "#27c93f",
  ACTIVE: "#00d4ff",
  UNLOCKING: "#f7a928",
};

const STATUS_LABEL: Record<string, string> = {
  COMPLETED: "✓ Completed",
  ACTIVE: "▶ Active",
  UNLOCKING: "⏳ Unlocking",
};

function TreeNode({
  chapter,
  index,
  total,
  selected,
  onSelect,
}: {
  chapter: typeof loreChapters[0];
  index: number;
  total: number;
  selected: boolean;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const isLeft = index % 2 === 0;
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex items-start justify-center mb-0">

      {/* Left content */}
      <div className={`w-[calc(50%-32px)] ${isLeft ? "flex justify-end pr-6" : ""}`}>
        {isLeft && (
          <motion.div
            className="max-w-xs w-full cursor-pointer"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={onSelect}
            whileHover={{ x: -4 }}
          >
            <div className="ink-frame rounded-xl p-5 transition-all duration-200"
              style={{
                background: selected ? `${chapter.color}12` : "var(--color-bg-surface)",
                border: `2px solid ${selected ? chapter.color : "var(--color-border)"}`,
                boxShadow: selected ? `0 8px 32px ${chapter.color}25, 4px 4px 0 rgba(0,0,0,0.5)` : "3px 3px 0 rgba(0,0,0,0.5)",
              }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold" style={{ color: chapter.color }}>{chapter.tag}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${STATUS_COLOR[chapter.status]}18`, color: STATUS_COLOR[chapter.status], border: `1px solid ${STATUS_COLOR[chapter.status]}40` }}>
                  {STATUS_LABEL[chapter.status]}
                </span>
              </div>
              <p className="text-xs mb-2" style={{ color: "var(--color-text-faint)" }}>{chapter.year}</p>
              <h3 className="font-display text-base mb-2" style={{ color: "var(--color-text-primary)" }}>{chapter.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{chapter.description}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Center trunk */}
      <div className="flex flex-col items-center z-10 relative" style={{ width: 64 }}>
        {/* Connector line above node */}
        {index > 0 && (
          <motion.div className="w-px" style={{ background: "var(--color-border)", height: 48 }}
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }} />
        )}
        {index === 0 && <div style={{ height: 24 }} />}

        {/* Node dot */}
        <motion.div
          className="relative flex items-center justify-center cursor-pointer"
          style={{ width: 48, height: 48 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 260, damping: 18 }}
          onClick={onSelect}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}>
          {/* Pulse ring for active */}
          {chapter.status === "ACTIVE" && (
            <motion.div className="absolute inset-0 rounded-full"
              style={{ border: `2px solid ${chapter.color}`, borderRadius: "50%" }}
              animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }} />
          )}
          <div className="flex items-center justify-center rounded-full font-display text-sm font-black"
            style={{
              width: 44, height: 44,
              background: selected ? chapter.color : `${chapter.color}20`,
              border: `2px solid ${chapter.color}`,
              color: selected ? "#fff" : chapter.color,
              boxShadow: `0 0 ${selected ? 24 : 8}px ${chapter.color}${selected ? "60" : "30"}`,
              transition: "all 0.2s",
            }}>
            {index + 1}
          </div>
        </motion.div>

        {/* Connector line below node */}
        {!isLast && (
          <motion.div className="w-px flex-1" style={{ background: "var(--color-border)", minHeight: 48 }}
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }} />
        )}
        {isLast && <div style={{ height: 24 }} />}
      </div>

      {/* Right content */}
      <div className={`w-[calc(50%-32px)] ${!isLeft ? "flex justify-start pl-6" : ""}`}>
        {!isLeft && (
          <motion.div
            className="max-w-xs w-full cursor-pointer"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={onSelect}
            whileHover={{ x: 4 }}
          >
            <div className="ink-frame rounded-xl p-5 transition-all duration-200"
              style={{
                background: selected ? `${chapter.color}12` : "var(--color-bg-surface)",
                border: `2px solid ${selected ? chapter.color : "var(--color-border)"}`,
                boxShadow: selected ? `0 8px 32px ${chapter.color}25, 4px 4px 0 rgba(0,0,0,0.5)` : "3px 3px 0 rgba(0,0,0,0.5)",
              }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold" style={{ color: chapter.color }}>{chapter.tag}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${STATUS_COLOR[chapter.status]}18`, color: STATUS_COLOR[chapter.status], border: `1px solid ${STATUS_COLOR[chapter.status]}40` }}>
                  {STATUS_LABEL[chapter.status]}
                </span>
              </div>
              <p className="text-xs mb-2" style={{ color: "var(--color-text-faint)" }}>{chapter.year}</p>
              <h3 className="font-display text-base mb-2" style={{ color: "var(--color-text-primary)" }}>{chapter.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{chapter.description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function LorePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedChapter = loreChapters.find(c => c.id === selected);

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-primary)" }}>

      {/* Hero */}
      <section className="relative overflow-hidden px-8 md:px-20 py-20 text-center"
        style={{ background: "linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-surface) 100%)", borderBottom: "1px solid var(--color-border)" }}>
        <motion.div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(var(--color-accent-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-violet) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
        <motion.p className="mb-3 text-xs font-bold tracking-[0.4em] uppercase"
          style={{ color: "var(--color-accent-violet)" }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Origin Lore
        </motion.p>
        <motion.h1 className="font-display leading-none mb-4"
          style={{ fontSize: "clamp(3rem,9vw,7rem)", color: "var(--color-text-primary)", textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
          MY LORE
        </motion.h1>
        <motion.p className="text-sm max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          From circuits and caffeine to quant signals and fraud ops — the builder arc continues.
        </motion.p>
        <motion.p className="mt-4 text-xs" style={{ color: "var(--color-text-faint)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          Click any chapter node to explore ↓
        </motion.p>
      </section>

      {/* Tree */}
      <section className="px-4 md:px-12 py-16 max-w-4xl mx-auto">
        {loreChapters.map((chapter, i) => (
          <TreeNode
            key={chapter.id}
            chapter={chapter}
            index={i}
            total={loreChapters.length}
            selected={selected === chapter.id}
            onSelect={() => setSelected(selected === chapter.id ? null : chapter.id)}
          />
        ))}

        {/* End node */}
        <motion.div className="flex justify-center mt-0"
          initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}>
          <div className="flex flex-col items-center gap-2">
            <motion.div className="h-8 w-px" style={{ background: "var(--color-border)" }} />
            <div className="flex items-center justify-center rounded-full font-display text-xs font-black px-4 py-2"
              style={{ background: "var(--color-accent-violet)", color: "#fff", boxShadow: "0 0 24px rgba(109,74,255,0.5)" }}>
              NEXT CHAPTER LOADING…
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detail drawer */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 px-4"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}>
            <div className="ink-frame rounded-2xl p-6 backdrop-blur-md"
              style={{ background: `rgba(13,14,22,0.95)`, border: `2px solid ${selectedChapter.color}60`, boxShadow: `0 24px 64px ${selectedChapter.color}30` }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold mb-1" style={{ color: selectedChapter.color }}>{selectedChapter.tag} · {selectedChapter.year}</p>
                  <h3 className="font-display text-xl mb-2" style={{ color: "#fff" }}>{selectedChapter.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{selectedChapter.description}</p>
                </div>
                <button onClick={() => setSelected(null)}
                  className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>✕</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTAs */}
      <div className="flex justify-center gap-4 pb-16 flex-wrap px-6">
        <Link href="/projects" className="btn-primary">View My Projects</Link>
        <Link href="/" className="btn-outline">Back to Home</Link>
      </div>
    </main>
  );
}
