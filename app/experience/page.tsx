"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const METRICS = [
  { value: 170, suffix: "+", label: "Calls Processed / Day", accent: "#6d4aff", icon: "◎" },
  { value: 95,  suffix: "%", label: "Detection Precision",   accent: "#00d4ff", icon: "⚡" },
  { value: 80,  suffix: "+", label: "Fraud Accounts Flagged",accent: "#6d4aff", icon: "◈" },
  { value: 40,  suffix: "%", label: "Validation Improvement",accent: "#00d4ff", icon: "✦" },
  { value: 30,  suffix: "%", label: "Review Time Reduction", accent: "#f7a928", icon: "◆" },
];

const TIMELINE = [
  {
    period: "Jun 2024 – Present",
    role: "Data Analyst Intern",
    company: "BlackBuck",
    location: "Bengaluru, India",
    bullets: [
      "Processed 170+ daily fraud-detection calls using SQL pipelines and Python scripts.",
      "Built a real-time anomaly dashboard that surfaced patterns 30% faster than prior tooling.",
      "Improved validation accuracy by 40% through feature engineering on transaction metadata.",
      "Flagged 80+ fraudulent accounts by identifying behavioural signatures in call-centre logs.",
    ],
    tags: ["Python", "SQL", "Power BI", "Pandas", "Fraud Detection"],
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen" style={{ background: "#050608" }}>

      {/* Header */}
      <section
        className="relative overflow-hidden px-8 py-24 md:px-20"
        style={{
          background: "linear-gradient(135deg, #050608 0%, #0a0d14 60%, #111827 100%)",
          borderBottom: "1px solid #1e2236",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(109,74,255,0.18) 0%, transparent 50%)",
          }}
        />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs uppercase tracking-widest" style={{ color: "#6f7694" }}>
            Mission Dashboard
          </p>
          <h1
            className="font-display leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#E8EEFF" }}
          >
            EXPERIENCE
          </h1>
          <p className="mt-4 max-w-xl text-sm" style={{ color: "#9aa0b8" }}>
            Real missions. Real impact. Every number below is a result — not a resume line.
          </p>
        </motion.div>
      </section>

      {/* Metrics dashboard */}
      <section className="px-8 py-16 md:px-20">
        <p className="mb-8 text-xs uppercase tracking-widest" style={{ color: "#6f7694" }}>
          BlackBuck · Live Stats
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="rounded-xl p-6"
              style={{
                background: "#0a0d14",
                border: "1px solid #1e2236",
                borderTop: `2px solid ${metric.accent}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                boxShadow: `0 0 24px ${metric.accent}33`,
                borderColor: metric.accent,
              }}
            >
              <span className="text-xl" style={{ color: metric.accent }}>
                {metric.icon}
              </span>
              <p
                className="mt-3 font-display text-4xl"
                style={{ color: metric.accent }}
              >
                <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              </p>
              <p
                className="mt-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#9aa0b8" }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activity chart */}
      <section
        className="mx-8 mb-12 rounded-xl md:mx-20"
        style={{ background: "#0a0d14", border: "1px solid #1e2236" }}
      >
        <div className="border-b p-6" style={{ borderColor: "#1e2236" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "#6f7694" }}>
            Daily Call Volume — Simulated 30-day trend
          </p>
        </div>
        <div className="p-6">
          <div
            className="flex items-end gap-1.5"
            style={{ height: "120px" }}
          >
            {Array.from({ length: 30 }).map((_, i) => {
              const height = 30 + Math.abs(Math.sin(i * 0.7) * 60 + Math.cos(i * 0.3) * 25);
              const isHigh = height > 70;
              return (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    background: isHigh
                      ? "linear-gradient(to top, #6d4aff, #00d4ff)"
                      : "linear-gradient(to top, #1e2236, #3d4663)",
                  }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}px` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.6 }}
                />
              );
            })}
          </div>
          <div className="mt-3 flex justify-between text-xs" style={{ color: "#555a7a" }}>
            <span>Day 1</span>
            <span>Day 15</span>
            <span>Day 30</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 pb-20 md:px-20">
        <p className="mb-10 text-xs uppercase tracking-widest" style={{ color: "#6f7694" }}>
          Professional Timeline
        </p>
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            className="relative border-l pl-8 pb-12"
            style={{ borderColor: "#1e2236" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Timeline dot */}
            <div
              className="absolute -left-2 top-0 h-4 w-4 rounded-full"
              style={{
                background: "#6d4aff",
                boxShadow: "0 0 12px rgba(109,74,255,0.8)",
              }}
            />

            <div
              className="rounded-xl p-6 md:p-8"
              style={{ background: "#0a0d14", border: "1px solid #1e2236" }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#6d4aff" }}
                  >
                    {item.period}
                  </p>
                  <h2
                    className="mt-1 font-display text-3xl"
                    style={{ color: "#E8EEFF" }}
                  >
                    {item.role}
                  </h2>
                  <p className="mt-1 text-sm" style={{ color: "#9aa0b8" }}>
                    {item.company} · {item.location}
                  </p>
                </div>
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{
                    background: "rgba(109,74,255,0.12)",
                    border: "1px solid #6d4aff",
                    color: "#00d4ff",
                  }}
                >
                  Active
                </span>
              </div>

              {/* Bullets */}
              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "#9aa0b8" }}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.07 }}
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "#6d4aff" }}
                    />
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border px-3 py-1 text-xs"
                    style={{ borderColor: "#1e2236", color: "#6f7694" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <div className="flex justify-center gap-4 pb-16 flex-wrap">
        <Link
          href="/projects"
          className="rounded-full px-6 py-3 text-sm font-medium"
          style={{ background: "#6d4aff", color: "#fff" }}
        >
          View My Projects
        </Link>
        <Link
          href="/"
          className="rounded-full px-6 py-3 text-sm font-medium"
          style={{ border: "1px solid #3d4663", color: "#9aa0b8" }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}