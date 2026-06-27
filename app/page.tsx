"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import IntroSequence from "@/components/IntroSequence";

const CyberpunkScene = dynamic(() => import("../components/CyberpunkScene"), { ssr: false });

const ROLES = [
  "Data Engineer",
  "AI / ML Engineer",
  "Quant-Curious Analyst",
  "Builder of Things That Ship",
];

const FEATURED_PROJECTS = [
  {
    title: "Agrivoltaic System Automation",
    description: "Weather-aware solar forecasting dashboard with simulated energy analytics.",
    tags: ["Python", "TensorFlow", "IoT", "Power BI"],
    gradient: "linear-gradient(135deg, rgba(102,204,255,0.28), rgba(36,107,255,0.18))",
  },
  {
    title: "Real-Time Stock Prediction",
    description: "Trading terminal concept with momentum, risk, signals, and backtesting.",
    tags: ["Python", "Pandas", "Scikit-Learn", "APIs"],
    gradient: "linear-gradient(135deg, rgba(109,74,255,0.3), rgba(102,204,255,0.12))",
  },
  {
    title: "AI Notebook Application",
    description: "Mini productivity SaaS with notes, tasks, and AI assistant workflow.",
    tags: ["Flutter", "Firebase", "SQLite", "Hive"],
    gradient: "linear-gradient(135deg, rgba(109,74,255,0.22), rgba(255,255,255,0.06))",
  },
];

const STORY_PANELS = [
  { year: "2008", title: "The Beginning", text: "Curious mind with big dreams.", tone: "from-white to-slate-300" },
  { year: "2014", title: "The Struggle", text: "Challenges that built resilience.", tone: "from-slate-200 to-zinc-500" },
  { year: "2018", title: "The Discovery", text: "Found passion in data and code.", tone: "from-zinc-100 to-slate-600" },
  { year: "2020", title: "The Transformation", text: "Building AI solutions and real projects.", tone: "from-slate-300 to-zinc-800" },
  { year: "Future", title: "The Mission", text: "Creating impact and building my future.", tone: "from-white to-slate-500" },
];

const SKILLS = [
  { label: "Data Analytics", tools: "Python, SQL, Power BI, Tableau, Excel", level: 95, icon: "o" },
  { label: "Machine Learning", tools: "Scikit-Learn, TensorFlow, PyTorch, OpenCV", level: 90, icon: "*" },
  { label: "Programming", tools: "Python, C++, SQL, JavaScript, TypeScript", level: 85, icon: "<>" },
  { label: "Web Development", tools: "Next.js, React, Tailwind, Node.js", level: 80, icon: "#" },
  { label: "Cloud & DevOps", tools: "AWS, Azure, Docker, Git, CI/CD", level: 75, icon: "@" },
];

const CERTIFICATIONS = [
  { name: "HSBC", subtitle: "Job Simulation", mark: "HSBC" },
  { name: "J.P. Morgan", subtitle: "Quantitative Research", mark: "JPM" },
  { name: "Microsoft", subtitle: "Data Analytics Certification", mark: "MS" },
  { name: "Google", subtitle: "AI Essentials", mark: "G" },
];

const STATS = [
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Certifications Earned" },
  { value: "5+", label: "Internships & Experience" },
  { value: "1000+", label: "Hours Of Learning" },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [checked, setChecked] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    queueMicrotask(() => {
      const seen = localStorage.getItem("hasSeenIntro");
      setShowIntro(!seen);
      setChecked(true);
    });
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
    <div className="relative min-h-screen overflow-hidden bg-bg-primary">
        <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient">

          <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
            <CyberpunkScene />
          </div>

          <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 70% 42%, rgba(36,107,255,0.28) 0%, transparent 52%), radial-gradient(circle at 90% 28%, rgba(102,204,255,0.12), transparent 30%)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-0 h-72 opacity-70" style={{ backgroundImage: "linear-gradient(to top, var(--color-bg-primary) 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-0 flex h-64 items-end gap-2 px-8 opacity-70">
            {Array.from({ length: 38 }).map((_, i) => (
              <div key={i} className="relative flex-1"
                style={{ height: `${52 + (i * 37) % 180}px`, background: "var(--color-bg-elevated)", borderTop: "1px solid rgba(102,204,255,0.28)" }}>
                <div className="absolute inset-2 opacity-60"
                  style={{ backgroundImage: "linear-gradient(var(--color-accent-violet) 2px, transparent 2px)", backgroundSize: "100% 18px" }} />
              </div>
            ))}
          </div>

          <div className="absolute right-24 bottom-0 z-10 h-[90%] w-auto hidden md:block">
            <img src="/avatar.png" alt="Atimanas Baral" className="h-full w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 0 40px rgba(36,107,255,0.4))" }} />
          </div>

          <motion.div className="absolute z-20 hidden lg:block" style={{ right: "22rem", top: "8rem" }}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
            <div className="relative max-w-[220px] px-7 py-6 text-center text-lg font-black uppercase leading-snug"
              style={{ background: "#fff", color: "var(--color-bg-primary)", clipPath: "polygon(6% 16%, 20% 6%, 29% 14%, 43% 5%, 52% 17%, 68% 7%, 75% 19%, 94% 12%, 86% 34%, 96% 48%, 84% 60%, 92% 84%, 68% 78%, 57% 94%, 45% 79%, 26% 91%, 23% 72%, 5% 78%, 14% 55%, 3% 41%, 17% 32%)" }}>
              Data is not just numbers. It is the blueprint of the future.
            </div>
          </motion.div>

          <div className="absolute top-20 right-4 z-20 hidden xl:flex flex-col gap-1">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-16 h-20 rounded overflow-hidden"
                style={{ border: "1px solid var(--color-steel)", background: "var(--color-bg-surface)" }}>
                <img src="/avatar.png" alt="" className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(80%) contrast(1.2)" }} />
              </div>
            ))}
          </div>

          <div className="relative z-20 px-8 md:px-12 max-w-2xl">
            <motion.div className="mb-4 w-fit -skew-x-12 px-5 py-2"
              style={{ background: "linear-gradient(90deg, var(--color-accent-violet), rgba(36,107,255,0.2))" }}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="block skew-x-12 text-sm font-black uppercase tracking-widest text-white">Hello, I am</span>
            </motion.div>
            <motion.h1 className="font-display leading-none mb-2"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "var(--color-text-primary)" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              ATIMANAS
            </motion.h1>
            <motion.h1 className="font-display leading-none mb-6"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "var(--color-accent-violet)", textShadow: "0 0 40px rgba(36,107,255,0.5)" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              BARAL
            </motion.h1>
            <motion.p className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              DATA ANALYST | AI ENGINEER
            </motion.p>
            <motion.p className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              MACHINE LEARNING ENTHUSIAST
            </motion.p>
            <motion.div className="h-7 overflow-hidden mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <AnimatePresence mode="wait">
                <motion.p key={roleIndex} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }} className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
            <motion.div className="flex gap-3 flex-wrap" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <a href="/projects" className="rounded-full px-6 py-3 text-sm font-medium transition-all"
                style={{ background: "var(--color-accent-violet)", color: "#fff" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(36,107,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
                EXPLORE MY WORK
              </a>
              <a href="/resume" className="rounded-full px-6 py-3 text-sm font-medium transition-all flex items-center gap-2"
                style={{ border: "1px solid var(--color-steel)", color: "var(--color-text-primary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-accent-violet)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-steel)")}>
                DOWNLOAD RESUME
              </a>
            </motion.div>
            <motion.div className="mt-10 flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "var(--color-steel-light)" }}>
                <div className="w-1 h-1 rounded-full" style={{ background: "var(--color-steel-light)" }} />
              </div>
              <span className="text-xs tracking-widest" style={{ color: "var(--color-steel-light)" }}>SCROLL DOWN</span>
            </motion.div>
          </div>
        </section>

        <section className="grid gap-6 px-6 py-10 md:grid-cols-[260px_1fr] md:px-12"
          style={{ borderTop: "1px solid var(--color-border)", background: "linear-gradient(180deg, rgba(5,6,8,1), rgba(5,6,8,1))" }}>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h2 className="font-display text-5xl leading-none" style={{ color: "var(--color-text-primary)", textShadow: "0 0 20px rgba(255,255,255,0.12)" }}>MY STORY</h2>
              <p className="mt-2 text-sm" style={{ color: "var(--color-text-primary)" }}>Every chapter shaped me.</p>
              <p className="mt-8 max-w-[220px] text-lg leading-snug" style={{ color: "var(--color-text-primary)" }}>
                From curiosity to purpose. From learning to building. From dreaming to creating impact through technology.
              </p>
            </div>
            <a href="/lore" className="group flex w-fit items-center gap-6 rounded border px-6 py-4 text-xs font-bold uppercase tracking-widest transition"
              style={{ borderColor: "var(--color-accent-violet)", color: "var(--color-accent-violet)" }}>
              View Full Journey <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
            </a>
          </div>
          <div>
            <div className="grid min-h-[300px] gap-2 md:grid-cols-5">
              {STORY_PANELS.map((panel, index) => (
                <motion.div key={panel.title}
                  className="relative flex min-h-64 flex-col justify-between overflow-hidden border-2 border-black bg-white p-4 text-black"
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${panel.tone}`} />
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(#111 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
                  <div className="absolute -bottom-8 left-1/2 h-36 w-28 -translate-x-1/2 rounded-t-full bg-black/70" />
                  <div className="relative z-10">
                    <h3 className="font-display text-xl leading-none text-black">{panel.title}</h3>
                    <p className="mt-4 text-xs font-semibold leading-relaxed">{panel.text}</p>
                  </div>
                  <p className="relative z-10 text-center text-sm font-bold text-black">{panel.year}</p>
                </motion.div>
              ))}
            </div>
            <div className="relative mt-5 h-8">
              <div className="absolute left-0 right-0 top-3 h-0.5" style={{ background: "var(--color-accent-violet)" }} />
              {STORY_PANELS.map((panel, index) => (
                <div key={panel.year} className="absolute top-1 h-5 w-5 rounded-full"
                  style={{ left: `${index * 24}%`, background: "var(--color-accent-violet)", boxShadow: "0 0 18px rgba(36,107,255,0.8)" }} />
              ))}
              <span className="absolute right-0 top-4 text-xs font-bold uppercase" style={{ color: "var(--color-text-primary)" }}>Future</span>
            </div>
          </div>
        </section>

        <section className="grid gap-8 px-6 py-12 md:px-12 xl:grid-cols-[360px_1fr_360px]"
          style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-bg-surface)" }}>
          <div className="relative min-h-[360px] overflow-hidden border"
            style={{ borderColor: "var(--color-border)", background: "radial-gradient(circle at 40% 40%, rgba(36,107,255,0.45), transparent 34%), var(--color-bg-primary)" }}>
            <img src="/avatar.png" alt="Atimanas Baral skill arc" className="absolute inset-0 h-full w-full object-cover object-top opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <a href="/skills" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5 rounded border px-6 py-4 text-xs font-bold uppercase tracking-widest"
              style={{ borderColor: "var(--color-accent-violet)", color: "var(--color-text-primary)", background: "rgba(5,6,8,0.72)" }}>
              Explore Skills <span>-&gt;</span>
            </a>
          </div>
          <div className="space-y-6 py-3">
            {SKILLS.map((skill, index) => (
              <motion.div key={skill.label} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl" style={{ color: index % 2 ? "var(--color-accent-cyan)" : "var(--color-accent-violet)" }}>{skill.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--color-text-primary)" }}>{skill.label}</h3>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{skill.tools}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--color-border)" }}>
                  <motion.div className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--color-accent-violet), var(--color-accent-cyan))" }}
                    initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.08 }} />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative min-h-[360px] overflow-hidden border p-8"
            style={{ borderColor: "var(--color-text-primary)", background: "var(--color-bg-elevated)", color: "var(--color-bg-surface)" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#111 1px, transparent 1px)", backgroundSize: "7px 7px" }} />
            <img src="/avatar.png" alt="Manga focus panel" className="absolute inset-0 h-full w-full object-cover object-top grayscale"
              style={{ mixBlendMode: "multiply", opacity: 0.55 }} />
            <div className="absolute bottom-10 left-8 max-w-[180px] rounded-full bg-white p-6 text-center text-sm font-black uppercase leading-tight shadow-2xl">
              Every day I try to be better than yesterday.
            </div>
            <div className="absolute bottom-6 right-8 font-display text-6xl" style={{ color: "var(--color-accent-violet)" }}>DON</div>
          </div>
        </section>

        <section className="px-8 py-12 md:px-12" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-steel-light)" }}>Quest Log</p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>FEATURED PROJECTS</h2>
            </div>
            <a href="/projects" className="text-xs font-semibold tracking-widest transition-colors" style={{ color: "var(--color-accent-violet)" }}>
              VIEW ALL PROJECTS
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.a key={project.title} href="/projects"
                className="group relative overflow-hidden rounded-lg p-5"
                style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border)" }}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, borderColor: "var(--color-accent-violet)" }}>
                <div className="absolute inset-x-0 top-0 h-28 opacity-80" style={{ background: project.gradient }} />
                <div className="relative mb-5 h-40 overflow-hidden rounded-md"
                  style={{ background: "var(--color-bg-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <div className="absolute left-4 right-4 top-5 flex items-end gap-2">
                    {Array.from({ length: 9 }).map((_, barIndex) => (
                      <motion.span key={barIndex} className="flex-1 rounded-t"
                        style={{ background: barIndex % 2 ? "var(--color-accent-cyan)" : "var(--color-accent-violet)" }}
                        animate={{ height: [34, 78 - barIndex * 4, 42 + barIndex * 5] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: barIndex * 0.08 }} />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 rounded border px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ borderColor: "var(--color-accent-violet)", color: "var(--color-text-primary)", background: "rgba(5,6,8,0.75)" }}>
                    Live Demo
                  </div>
                </div>
                <h3 className="relative font-display text-2xl leading-tight" style={{ color: "var(--color-text-primary)" }}>{project.title}</h3>
                <p className="relative mt-2 text-sm" style={{ color: "var(--color-text-muted)" }}>{project.description}</p>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border px-2 py-1 text-[11px]"
                      style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>{tag}</span>
                  ))}
                </div>
                <div className="relative mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                  <span className="text-xs font-semibold tracking-widest" style={{ color: "var(--color-accent-violet)" }}>OPEN PROJECT WORLD</span>
                  <span className="transition-transform group-hover:translate-x-1" style={{ color: "var(--color-accent-violet)" }}>-&gt;</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="grid gap-10 px-6 py-12 md:px-12 xl:grid-cols-[1.15fr_1fr]"
          style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-bg-surface)" }}>
          <div>
            <div className="mb-6 flex items-end gap-4">
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>CERTIFICATIONS</h2>
              <p className="pb-2 text-xs" style={{ color: "var(--color-text-muted)" }}>Continuous learning. Continuous growth.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CERTIFICATIONS.map((cert) => (
                <motion.div key={cert.name} className="relative min-h-40 overflow-hidden rounded-lg border p-5"
                  style={{ borderColor: "var(--color-border)", background: "linear-gradient(145deg, rgba(17,19,28,1), rgba(12,15,25,1))" }}
                  whileHover={{ y: -4, borderColor: "var(--color-accent-violet)" }}>
                  <div className="absolute right-3 top-3 h-8 w-8 rounded-full border opacity-20" style={{ borderColor: "var(--color-accent-violet)" }} />
                  <h3 className="text-lg font-semibold" style={{ color: "var(--color-text-primary)" }}>{cert.name}</h3>
                  <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>{cert.subtitle}</p>
                  <p className="absolute bottom-5 left-5 font-display text-2xl"
                    style={{ color: cert.name === "Google" ? "var(--color-accent-cyan)" : "var(--color-text-primary)" }}>{cert.mark}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="xl:border-l xl:pl-12" style={{ borderColor: "var(--color-steel)" }}>
            <div className="mb-6">
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>STATS</h2>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Numbers that tell the story.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((stat, index) => (
                <motion.div key={stat.label} className="rounded-lg border p-6"
                  style={{ borderColor: "var(--color-border)", background: "linear-gradient(145deg, rgba(17,19,28,1), rgba(5,6,8,1))" }}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                  <p className="font-display text-4xl"
                    style={{ color: index === 3 ? "#f7a928" : index === 2 ? "var(--color-accent-cyan)" : "var(--color-accent-violet)" }}>{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-text-primary)" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-8 py-16 md:px-12"
          style={{ borderTop: "1px solid var(--color-border)", background: "linear-gradient(120deg, rgba(36,107,255,0.18), rgba(102,204,255,0.08), rgba(5,6,8,1))" }}>
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--color-steel-light)" }}>Final Boss</p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>LETS BUILD SOMETHING AMAZING TOGETHER.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:atimanasbaral@gmail.com" className="rounded-full px-6 py-3 text-sm font-medium"
                style={{ background: "var(--color-accent-violet)", color: "#fff" }}>LETS CONNECT</a>
              <a href="/resume" className="rounded-full px-6 py-3 text-sm font-medium"
                style={{ border: "1px solid var(--color-steel)", color: "var(--color-text-primary)" }}>DOWNLOAD RESUME</a>
            </div>
          </div>
        </section>

        <div className="flex justify-center pb-6">
          <button onClick={() => { localStorage.removeItem("hasSeenIntro"); window.location.reload(); }}
            className="text-xs" style={{ color: "var(--color-text-faint)" }}>
            replay intro
          </button>
        </div>
    </div>
  );
}
