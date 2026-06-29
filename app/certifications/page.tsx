"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/data/certifications";
import Link from "next/link";

const CERT_META: Record<string, {
  color: string;
  bg: string;
  border: string;
  logo: string;
  category: string;
  description: string;
  skills: string[];
  issuer: string;
  credentialId?: string;
  level: "Foundation" | "Intermediate" | "Advanced" | "Professional";
}> = {
  HackerRank: {
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.3)",
    logo: "HR",
    category: "Database & SQL",
    description: "Demonstrated advanced SQL proficiency including complex joins, window functions, CTEs, subqueries, and performance optimization techniques.",
    skills: ["Window Functions", "CTEs", "Complex Joins", "Subqueries", "Query Optimization"],
    issuer: "HackerRank",
    credentialId: "HR-SQL-ADV-2026",
    level: "Advanced",
  },
  Citi: {
    color: "#f7a928",
    bg: "rgba(247,169,40,0.08)",
    border: "rgba(247,169,40,0.3)",
    logo: "C",
    category: "Finance & Banking",
    description: "Completed Citi's virtual experience program covering investment banking, capital markets, financial modeling, and client management workflows.",
    skills: ["Financial Modeling", "Capital Markets", "Investment Banking", "Client Management"],
    issuer: "Citi (Forage)",
    credentialId: "CITI-FIN-2024",
    level: "Intermediate",
  },
  HSBC: {
    color: "#e8192c",
    bg: "rgba(232,25,44,0.08)",
    border: "rgba(232,25,44,0.3)",
    logo: "HSBC",
    category: "Finance & Banking",
    description: "Completed HSBC's virtual banking experience covering global banking operations, risk management, compliance, and sustainable finance principles.",
    skills: ["Global Banking", "Risk Management", "Compliance", "Sustainable Finance"],
    issuer: "HSBC (Forage)",
    credentialId: "HSBC-BANK-2024",
    level: "Intermediate",
  },
  Google: {
    color: "#34a853",
    bg: "rgba(52,168,83,0.08)",
    border: "rgba(52,168,83,0.3)",
    logo: "G",
    category: "Data Analysis",
    description: "Completed Google's professional certificate in data analysis using R — covering data cleaning, transformation, visualization and statistical analysis with ggplot2 and tidyverse.",
    skills: ["R Programming", "ggplot2", "tidyverse", "Data Cleaning", "Statistical Analysis"],
    issuer: "Google / Coursera",
    credentialId: "GOOG-R-2025",
    level: "Professional",
  },
  Cisco: {
    color: "#1ba0d7",
    bg: "rgba(27,160,215,0.08)",
    border: "rgba(27,160,215,0.3)",
    logo: "◎",
    category: "Networking",
    description: "Gained foundational knowledge in computer networking including OSI/TCP-IP models, IP addressing, subnetting, routing protocols, and network security basics.",
    skills: ["TCP/IP", "OSI Model", "Subnetting", "Routing Protocols", "Network Security"],
    issuer: "Cisco Networking Academy",
    credentialId: "CSCO-NET-2024",
    level: "Foundation",
  },
};

const LEVEL_COLOR: Record<string, string> = {
  Foundation: "#6b8aaa",
  Intermediate: "#f7a928",
  Advanced: "#00d4ff",
  Professional: "#6d4aff",
};

const CATEGORIES = ["All", "Database & SQL", "Finance & Banking", "Data Analysis", "Networking"];

export default function CertificationsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = certifications.filter(c => {
    if (filter === "All") return true;
    return CERT_META[c.name]?.category === filter;
  });

  const selectedCert = certifications.find(c => c.name === selected);
  const selectedMeta = selected ? CERT_META[selected] : null;

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-primary)" }}>

      {/* Hero */}
      <section className="relative overflow-hidden px-8 md:px-20 py-20"
        style={{ background: "linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-surface) 100%)", borderBottom: "1px solid var(--color-border)" }}>
        {/* Animated grid bg */}
        <motion.div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(var(--color-accent-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-violet) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />

        <div className="relative z-10 max-w-2xl">
          <motion.p className="mb-3 text-xs font-bold uppercase tracking-[0.4em]"
            style={{ color: "var(--color-accent-violet)" }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Continuous Growth
          </motion.p>
          <motion.h1 className="font-display leading-none"
            style={{ fontSize: "clamp(3rem,8vw,6rem)", color: "var(--color-text-primary)", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
            CERTIFICATIONS
          </motion.h1>
          <motion.p className="mt-4 text-base leading-relaxed max-w-lg"
            style={{ color: "var(--color-text-muted)" }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            Every credential is a checkpoint — proof of deliberate skill-building across data, finance, and engineering domains.
          </motion.p>
        </div>

        {/* Floating cert count */}
        <motion.div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block text-right"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <div className="font-display" style={{ fontSize: "7rem", lineHeight: 1, color: "var(--color-accent-violet)", opacity: 0.15 }}>
            {certifications.length}
          </div>
          <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-text-faint)" }}>Credentials</p>
        </motion.div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-0 z-30 px-8 md:px-20 py-3 flex items-center gap-3 flex-wrap"
        style={{ background: "rgba(5,6,8,0.9)", borderBottom: "1px solid var(--color-border)", backdropFilter: "blur(12px)" }}>
        {CATEGORIES.map((cat, i) => (
          <motion.button key={cat}
            onClick={() => setFilter(cat)}
            className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-all"
            style={{
              background: filter === cat ? "var(--color-accent-violet)" : "var(--color-bg-surface)",
              color: filter === cat ? "#fff" : "var(--color-text-muted)",
              border: `1px solid ${filter === cat ? "var(--color-accent-violet)" : "var(--color-border)"}`,
            }}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            {cat}
          </motion.button>
        ))}
        <span className="ml-auto text-xs" style={{ color: "var(--color-text-faint)" }}>
          {filtered.length} credential{filtered.length !== 1 ? "s" : ""}
        </span>
      </section>

      {/* Main layout */}
      <section className="px-8 md:px-20 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Cards grid */}
          <div>
            <motion.div className="grid gap-5 sm:grid-cols-2" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((cert, i) => {
                  const meta = CERT_META[cert.name];
                  if (!meta) return null;
                  const isSelected = selected === cert.name;
                  const isHovered = hovered === cert.name;

                  return (
                    <motion.div key={cert.name}
                      layout
                      initial={{ opacity: 0, y: 24, rotate: -2 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setSelected(isSelected ? null : cert.name)}
                      onHoverStart={() => setHovered(cert.name)}
                      onHoverEnd={() => setHovered(null)}
                      whileHover={{ y: -5, rotate: 0.5 }}
                      className="ink-frame relative overflow-hidden rounded-xl p-6 cursor-pointer"
                      style={{
                        background: isSelected ? meta.bg : "var(--color-bg-surface)",
                        border: `2px solid ${isSelected ? meta.color : isHovered ? meta.border : "var(--color-border)"}`,
                        boxShadow: isSelected ? `0 8px 32px ${meta.color}30, 4px 4px 0 rgba(0,0,0,0.5)` : "4px 4px 0 rgba(0,0,0,0.5)",
                        transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
                      }}>

                      {/* Corner badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-bold px-2 py-1 rounded-md"
                          style={{ background: `${LEVEL_COLOR[meta.level]}20`, color: LEVEL_COLOR[meta.level], border: `1px solid ${LEVEL_COLOR[meta.level]}40` }}>
                          {meta.level}
                        </span>
                      </div>

                      {/* Logo mark */}
                      <motion.div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl font-display text-lg font-black"
                        style={{ background: meta.bg, border: `2px solid ${meta.border}`, color: meta.color, boxShadow: `0 0 20px ${meta.color}30` }}
                        animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.4 }}>
                        {meta.logo}
                      </motion.div>

                      <h3 className="font-display text-xl" style={{ color: "var(--color-text-primary)" }}>{cert.name}</h3>
                      <p className="mt-1 text-sm" style={{ color: meta.color }}>{cert.subtitle}</p>
                      <p className="mt-1 text-xs" style={{ color: "var(--color-text-faint)" }}>{cert.year}</p>

                      {/* Category tag */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs px-2 py-1 rounded-md"
                          style={{ background: "var(--color-bg-elevated)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>
                          {meta.category}
                        </span>
                        <motion.span className="text-xs font-bold" style={{ color: meta.color }}
                          animate={{ x: isSelected ? 0 : isHovered ? 3 : 0 }}>
                          {isSelected ? "▼ Close" : "Details →"}
                        </motion.span>
                      </div>

                      {/* Glow pulse when selected */}
                      {isSelected && (
                        <motion.div className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{ background: `radial-gradient(circle at 50% 50%, ${meta.color}10, transparent 70%)` }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }} />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <AnimatePresence mode="wait">
              {selectedCert && selectedMeta ? (
                <motion.div key={selectedCert.name}
                  initial={{ opacity: 0, x: 30, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="ink-frame rounded-xl overflow-hidden"
                  style={{ border: `2px solid ${selectedMeta.color}50`, boxShadow: `0 12px 48px ${selectedMeta.color}20, 4px 4px 0 rgba(0,0,0,0.6)` }}>

                  {/* Header */}
                  <div className="p-6" style={{ background: selectedMeta.bg, borderBottom: `1px solid ${selectedMeta.border}` }}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl font-display text-xl font-black"
                        style={{ background: `${selectedMeta.color}20`, border: `2px solid ${selectedMeta.color}`, color: selectedMeta.color }}>
                        {selectedMeta.logo}
                      </div>
                      <div>
                        <h2 className="font-display text-2xl" style={{ color: "var(--color-text-primary)" }}>{selectedCert.name}</h2>
                        <p style={{ color: selectedMeta.color }}>{selectedCert.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Meta info */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Issuer", value: selectedMeta.issuer },
                        { label: "Year", value: selectedCert.year },
                        { label: "Level", value: selectedMeta.level },
                        { label: "Credential ID", value: selectedMeta.credentialId ?? "N/A" },
                      ].map(item => (
                        <div key={item.label} className="rounded-lg p-3"
                          style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)" }}>
                          <p className="text-xs mb-1" style={{ color: "var(--color-text-faint)" }}>{item.label}</p>
                          <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{item.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-text-faint)" }}>About</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{selectedMeta.description}</p>
                    </div>

                    {/* Skills */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-text-faint)" }}>Skills Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedMeta.skills.map((skill, i) => (
                          <motion.span key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.06 }}
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: `${selectedMeta.color}15`, color: selectedMeta.color, border: `1px solid ${selectedMeta.color}40` }}>
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Level bar */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-text-faint)" }}>Proficiency Level</p>
                        <span className="text-xs font-bold" style={{ color: selectedMeta.color }}>{selectedMeta.level}</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                        <motion.div className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${selectedMeta.color}, ${selectedMeta.color}aa)` }}
                          initial={{ width: 0 }}
                          animate={{ width: selectedMeta.level === "Foundation" ? "30%" : selectedMeta.level === "Intermediate" ? "60%" : selectedMeta.level === "Advanced" ? "80%" : "95%" }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
                      </div>
                    </div>

                    {/* Close button */}
                    <motion.button
                      onClick={() => setSelected(null)}
                      className="w-full rounded-lg py-3 text-xs font-bold uppercase tracking-widest"
                      style={{ background: `${selectedMeta.color}15`, color: selectedMeta.color, border: `1px solid ${selectedMeta.color}40` }}
                      whileHover={{ background: `${selectedMeta.color}25` }}
                      whileTap={{ scale: 0.98 }}>
                      Close Details
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="placeholder"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="ink-frame rounded-xl p-8 text-center"
                  style={{ border: "2px dashed var(--color-border)", background: "var(--color-bg-surface)" }}>
                  <div className="text-5xl mb-4 opacity-30">🏅</div>
                  <p className="font-display text-lg mb-2" style={{ color: "var(--color-text-muted)" }}>Select a Certification</p>
                  <p className="text-sm" style={{ color: "var(--color-text-faint)" }}>Click any card to view full credential details, skills covered, and proficiency level.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats strip */}
            <motion.div className="mt-6 grid grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              {[
                { label: "Total", value: certifications.length, color: "var(--color-accent-violet)" },
                { label: "Domains", value: new Set(certifications.map(c => CERT_META[c.name]?.category)).size, color: "var(--color-accent-cyan)" },
                { label: "2024–26", value: "Active", color: "var(--color-accent-gold)" },
              ].map(stat => (
                <div key={stat.label} className="ink-frame rounded-lg p-3 text-center"
                  style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="font-display text-2xl" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--color-text-faint)" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-8 md:px-20 py-12 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
        <motion.p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "var(--color-text-faint)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Always Learning
        </motion.p>
        <motion.h2 className="font-display text-3xl mb-6" style={{ color: "var(--color-text-primary)" }}
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          MORE CREDENTIALS IN PROGRESS
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["AWS Cloud Practitioner", "TensorFlow Developer", "dbt Analytics Engineer", "Tableau Desktop Specialist"].map((cert, i) => (
            <motion.span key={cert}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-full px-4 py-2 text-xs font-semibold"
              style={{ background: "var(--color-bg-surface)", border: "1px dashed var(--color-accent-violet)", color: "var(--color-accent-violet)" }}>
              ⏳ {cert}
            </motion.span>
          ))}
        </div>
        <Link href="/skills"
          className="btn-outline inline-flex items-center gap-2">
          View Full Skills Stack →
        </Link>
      </section>

    </main>
  );
}
