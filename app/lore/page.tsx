"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { loreChapters } from "@/lib/data/lore";

export default function LorePage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-sm tracking-widest uppercase text-steel-light">Origin Lore</p>
        <h1 className="font-display text-5xl text-text-primary md:text-7xl">MY LORE</h1>
        <p className="mt-4 text-sm text-text-muted">
          From circuits and caffeine to quant signals and fraud ops — the builder arc continues.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />
        {loreChapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            className="relative mb-12 flex gap-8 md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div
              className="relative z-10 mt-1.5 ml-[18px] h-3 w-3 shrink-0 rounded-full"
              style={{ background: chapter.color }}
            />
            <div className="ml-4 flex-1">
              <div
                className="rounded-xl border border-border bg-bg-surface p-6"
                style={{ borderLeft: `3px solid ${chapter.color}` }}
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium" style={{ color: chapter.color }}>
                    {chapter.tag}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs"
                    style={{ background: "rgba(0,0,0,0.25)", color: chapter.color }}
                  >
                    {chapter.status}
                  </span>
                </div>
                <p className="mb-1 text-xs text-text-faint">{chapter.year}</p>
                <h3 className="mb-2 font-display text-lg text-text-primary">{chapter.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{chapter.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        <Link href="/projects" className="btn-primary">
          View My Projects
        </Link>
        <Link href="/" className="btn-outline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
