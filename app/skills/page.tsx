"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

const SKILLS = [
  { category: "Data Analytics", icon: "📊", tools: "Power BI, Tableau, Excel, SQL, Python", level: 95, color: "#6d4aff" },
  { category: "AI & Machine Learning", icon: "⚡", tools: "Scikit-Learn, TensorFlow, PyTorch, OpenCV", level: 90, color: "#00d4ff" },
  { category: "Programming", icon: "💻", tools: "Python, C++, SQL, JavaScript, TypeScript", level: 85, color: "#f7a928" },
  { category: "Web & App Development", icon: "🌐", tools: "Next.js, React, Flutter, Firebase, Node.js", level: 80, color: "#6d4aff" },
  { category: "Cloud & Tools", icon: "☁️", tools: "AWS, Azure, Git, Docker, VS Code", level: 75, color: "#00d4ff" },
];

const STACK_TAGS = [
  { name: "Python",     color: "#f7a928", wip: false },
  { name: "SQL",        color: "#00d4ff", wip: false },
  { name: "TypeScript", color: "#6d4aff", wip: false },
  { name: "Flutter",    color: "#00d4ff", wip: false },
  { name: "FastAPI",    color: "#34d399", wip: false },
  { name: "XGBoost",   color: "#f7a928", wip: false },
  { name: "LightGBM",  color: "#f7a928", wip: false },
  { name: "TensorFlow",color: "#ff6b6b", wip: false },
  { name: "PyTorch",   color: "#ff6b6b", wip: false },
  { name: "Next.js",   color: "#ffffff", wip: false },
  { name: "React",     color: "#00d4ff", wip: false },
  { name: "Node.js",   color: "#34d399", wip: false },
  { name: "PostgreSQL",color: "#6d4aff", wip: false },
  { name: "Docker",    color: "#00d4ff", wip: false },
  { name: "AWS",       color: "#f7a928", wip: false },
  { name: "Azure",     color: "#00d4ff", wip: false },
  { name: "Git",       color: "#ff6b6b", wip: false },
  { name: "Spark",     color: "#f7a928", wip: true  },
  { name: "Airflow",   color: "#34d399", wip: true  },
  { name: "dbt",       color: "#6d4aff", wip: true  },
];

/* ── Animated skill bar card ───────────────────────────────── */
function SkillCard({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="ink-frame relative overflow-hidden rounded-2xl p-6 cursor-default"
      style={{ background: "var(--color-bg-surface)", border: `2px solid ${hovered ? skill.color + "60" : "var(--color-border)"}`, boxShadow: hovered ? `0 12px 40px ${skill.color}20, 4px 4px 0 rgba(0,0,0,0.5)` : "4px 4px 0 rgba(0,0,0,0.5)", transition: "border-color 0.25s, box-shadow 0.25s" }}
      initial={{ opacity: 0, y: 32, rotate: -1 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, rotate: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Glow bg */}
      <motion.div className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 30% 50%, ${skill.color}10, transparent 70%)` }}
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }} />

      {/* Top row */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <motion.div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
          style={{ background: `${skill.color}15`, border: `1.5px solid ${skill.color}40` }}
          animate={hovered ? { scale: 1.1, rotate: [0, -8, 8, 0] } : { scale: 1 }}
          transition={{ duration: 0.4 }}>
          {skill.icon}
        </motion.div>
        <motion.span className="font-display text-4xl leading-none"
          style={{ color: skill.color, textShadow: hovered ? `0 0 20px ${skill.color}80` : "none", transition: "text-shadow 0.3s" }}>
          {skill.level}
        </motion.span>
      </div>

      <h3 className="relative z-10 font-display text-lg mb-1" style={{ color: "var(--color-text-primary)" }}>{skill.category}</h3>
      <p className="relative z-10 text-xs leading-relaxed mb-5" style={{ color: "var(--color-text-faint)" }}>{skill.tools}</p>

      {/* Progress bar */}
      <div className="relative z-10">
        <div className="flex justify-between text-xs mb-1.5">
          <span style={{ color: "var(--color-text-faint)" }}>Proficiency</span>
          <motion.span style={{ color: skill.color }}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: index * 0.1 + 0.8 }}>
            {skill.level}%
          </motion.span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
          <motion.div className="h-full rounded-full relative overflow-hidden"
            style={{ background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}>
            {/* Shimmer */}
            <motion.div className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)", backgroundSize: "200% 100%" }}
              animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.1 + 1.2 }} />
          </motion.div>
        </div>
        {/* Dot segments */}
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div key={i} className="flex-1 h-0.5 rounded-full"
              style={{ background: i < Math.round(skill.level / 10) ? skill.color : "var(--color-border)" }}
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.5 + i * 0.04, duration: 0.2 }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Floating tag ─────────────────────────────────────────── */
function StackTag({ tag, index }: { tag: typeof STACK_TAGS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      className="relative rounded-full px-4 py-2 text-sm font-medium cursor-default select-none"
      style={{
        background: hovered ? `${tag.color}18` : tag.wip ? "transparent" : "var(--color-bg-surface)",
        border: tag.wip ? `1px dashed ${tag.color}50` : `1px solid ${hovered ? tag.color + "60" : "var(--color-border)"}`,
        color: hovered ? tag.color : tag.wip ? "var(--color-text-faint)" : "var(--color-text-muted)",
        transition: "all 0.2s",
        boxShadow: hovered ? `0 4px 20px ${tag.color}25` : "none",
      }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.035, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {tag.wip && <span className="mr-1.5 text-xs opacity-60">⏳</span>}
      {tag.name}
      {tag.wip && <span className="ml-2 text-xs opacity-50">wip</span>}
    </motion.span>
  );
}

/* ── Radar chart (SVG) ───────────────────────────────────── */
function RadarChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const cx = 140, cy = 140, r = 100;
  const points = SKILLS.map((s, i) => {
    const angle = (i * 2 * Math.PI) / SKILLS.length - Math.PI / 2;
    const pct = s.level / 100;
    return { x: cx + r * pct * Math.cos(angle), y: cy + r * pct * Math.sin(angle), bx: cx + r * Math.cos(angle), by: cy + r * Math.sin(angle), label: s.category.split(" ")[0], color: s.color };
  });
  const toPath = (pts: { x: number; y: number }[]) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <motion.div className="ink-frame rounded-2xl p-6 flex flex-col items-center"
      style={{ background: "var(--color-bg-surface)", border: "2px solid var(--color-border)" }}
      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-faint)" }}>Skill Radar</p>
      <svg ref={ref} width="280" height="280" viewBox="0 0 280 280">
        {/* Grid circles */}
        {gridLevels.map((lvl) => (
          <polygon key={lvl}
            points={SKILLS.map((_, i) => {
              const angle = (i * 2 * Math.PI) / SKILLS.length - Math.PI / 2;
              return `${cx + r * lvl * Math.cos(angle)},${cy + r * lvl * Math.sin(angle)}`;
            }).join(" ")}
            fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        {/* Axes */}
        {points.map((p, i) => (
          <line key={i} x1={cx} y1={cy} x2={p.bx} y2={p.by} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        {/* Filled area */}
        <motion.path d={toPath(points)}
          fill="rgba(109,74,255,0.15)" stroke="#6d4aff" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }} />
        {/* Dots */}
        {points.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r="5"
            fill={p.color} stroke="rgba(0,0,0,0.5)" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 }} />
        ))}
        {/* Labels */}
        {points.map((p, i) => (
          <text key={i} x={p.bx + (p.bx > cx ? 8 : p.bx < cx ? -8 : 0)}
            y={p.by + (p.by > cy ? 14 : p.by < cy ? -6 : 5)}
            textAnchor={p.bx > cx ? "start" : p.bx < cx ? "end" : "middle"}
            fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="system-ui">{p.label}</text>
        ))}
      </svg>
    </motion.div>
  );
}

/* ── Main Page ───────────────────────────────────────────── */
export default function SkillsPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-primary)" }}>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden px-8 md:px-20 py-24"
        style={{ background: "linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-surface) 60%, var(--color-bg-elevated) 100%)", borderBottom: "1px solid var(--color-border)" }}>

        {/* Animated grid */}
        <motion.div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(var(--color-accent-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-violet) 1px, transparent 1px)", backgroundSize: "52px 52px" }}
          animate={{ backgroundPosition: ["0px 0px", "52px 52px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />

        {/* Floating orbs */}
        {[
          { color: "#6d4aff", x: "75%", y: "20%", size: 260, delay: 0 },
          { color: "#00d4ff", x: "85%", y: "70%", size: 180, delay: 1 },
          { color: "#f7a928", x: "60%", y: "55%", size: 140, delay: 2 },
        ].map((orb, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ left: orb.x, top: orb.y, width: orb.size, height: orb.size, background: `radial-gradient(circle, ${orb.color}18 0%, transparent 70%)`, filter: "blur(30px)", transform: "translate(-50%,-50%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: orb.delay }} />
        ))}

        <div className="relative z-10 flex items-center justify-between gap-12">
          {/* Left text */}
          <div className="max-w-lg">
            <motion.p className="mb-3 text-xs font-bold tracking-[0.4em] uppercase"
              style={{ color: "var(--color-accent-violet)" }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Skills are my weapons.
            </motion.p>
            <motion.h1 className="font-display leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem,9vw,7rem)", color: "var(--color-text-primary)", textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
              MY SKILLS
            </motion.h1>
            <motion.p className="text-sm mb-8 max-w-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              Every skill is forged daily — through projects, certifications, and shipping real systems.
            </motion.p>
            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              <Link href="/projects" className="btn-primary">View Projects</Link>
              <Link href="/certifications" className="btn-outline">Certifications</Link>
            </motion.div>

            {/* Mini stat pills */}
            <motion.div className="flex gap-4 mt-8"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              {[
                { label: "Skills", value: STACK_TAGS.length + "+" },
                { label: "Categories", value: SKILLS.length },
                { label: "Years", value: "3+" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl" style={{ color: "var(--color-accent-violet)" }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "var(--color-text-faint)" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — animated bars */}
          <motion.div className="hidden md:flex flex-col gap-4 w-96"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            {SKILLS.map((skill, i) => (
              <div key={skill.category}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span>{skill.icon}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>{skill.category}</span>
                  </div>
                  <motion.span className="text-xs font-bold tabular-nums"
                    style={{ color: skill.color }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + i * 0.1 }}>
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div className="h-full rounded-full relative overflow-hidden"
                    style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
                    <motion.div className="absolute inset-0"
                      style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)", backgroundSize: "200% 100%" }}
                      animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.15 + 1.2 }} />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skill Cards ── */}
      <section className="px-8 md:px-20 py-16">
        <motion.div className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: "var(--color-text-faint)" }}>Skill Tree</p>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          <motion.div className="h-2 w-2 rounded-full" style={{ background: "var(--color-accent-violet)" }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* ── Stack Tags + Radar ── */}
      <section className="px-8 md:px-20 py-10 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px] items-start">

          {/* Tags */}
          <div>
            <motion.div className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: "var(--color-text-faint)" }}>Full Stack</p>
              <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
            </motion.div>
            <div className="flex flex-wrap gap-2.5">
              {STACK_TAGS.map((tag, i) => (
                <StackTag key={tag.name} tag={tag} index={i} />
              ))}
            </div>
            <motion.p className="mt-6 text-xs" style={{ color: "var(--color-text-faint)" }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              ⏳ = currently learning
            </motion.p>
          </div>

          {/* Radar */}
          <RadarChart />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 md:px-20 py-14 text-center" style={{ borderTop: "1px solid var(--color-border)", background: "linear-gradient(180deg, var(--color-bg-primary), var(--color-bg-surface))" }}>
        <motion.p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "var(--color-text-faint)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          See it in action
        </motion.p>
        <motion.h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "var(--color-text-primary)", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          SKILLS APPLIED IN REAL PROJECTS
        </motion.h2>
        <motion.div className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link href="/projects" className="btn-primary">View Projects →</Link>
          <Link href="/" className="btn-outline">Back to Home</Link>
        </motion.div>
      </section>

    </main>
  );
}
