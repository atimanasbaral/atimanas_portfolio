const fs = require("fs");

const content = `"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ProjectId = "agrivoltaic" | "stock" | "notebook";

const PROJECTS = [
  {
    id: "agrivoltaic" as const,
    quest: "QUEST #001",
    title: "Agrivoltaic System Automation",
    subtitle: "Weather-aware solar forecasting with real-time energy analytics and crop stress monitoring.",
    description: "Built a full ML pipeline that ingests live weather data, forecasts solar yield using TensorFlow, and displays an interactive Power BI-style dashboard. The system automatically adjusts panel angles based on cloud cover predictions, improving energy output by 18%.",
    difficulty: "A-RANK",
    reward: "ML Forecasting + Energy Intelligence",
    tags: ["Python", "TensorFlow", "IoT", "Power BI"],
    color: "#f7a928",
    colorDim: "rgba(247,169,40,0.15)",
    icon: "solar",
  },
  {
    id: "stock" as const,
    quest: "QUEST #002",
    title: "Real-Time Stock Prediction",
    subtitle: "Trading terminal with momentum signals, risk scoring, and backtesting engine.",
    description: "Engineered a quant trading terminal using Scikit-Learn and Pandas that processes live market feeds, generates BUY/HOLD signals with 73% backtested accuracy, and visualises VaR in real time. Sub-100ms signal latency.",
    difficulty: "S-RANK",
    reward: "Quant Signals + Market Analytics",
    tags: ["Python", "Pandas", "Scikit-Learn", "APIs"],
    color: "#00d4ff",
    colorDim: "rgba(0,212,255,0.12)",
    icon: "chart",
  },
  {
    id: "notebook" as const,
    quest: "QUEST #003",
    title: "AI Notebook Application",
    subtitle: "Flutter productivity SaaS with AI assistant, task manager, and smart note prioritisation.",
    description: "Designed and shipped a cross-platform Flutter app targeting Windows and Android. Features SQLite-backed notes, Hive task manager, and an embedded AI assistant that scores focus and prioritises work using Riverpod state management.",
    difficulty: "A-RANK",
    reward: "Flutter Product + AI Workflow",
    tags: ["Flutter", "Firebase", "SQLite", "Hive"],
    color: "#6d4aff",
    colorDim: "rgba(109,74,255,0.12)",
    icon: "ai",
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<ProjectId>("agrivoltaic");
  const active = PROJECTS.find((p) => p.id === activeProject)!;

  return (
    <main className="min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <section className="relative border-b border-border px-6 pb-12 pt-24 md:px-16">
        <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 80% 20%, rgba(109,74,255,0.22), transparent 34%), linear-gradient(120deg, rgba(0,212,255,0.08), transparent 36%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <motion.p className="text-xs uppercase tracking-widest text-steel-light" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>Project Worlds</motion.p>
          <motion.div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div>
              <h1 className="font-display text-5xl leading-none md:text-8xl">QUEST LOG</h1>
              <p className="mt-4 max-w-2xl text-sm text-text-muted">Not screenshots. Working product simulations — drag the sliders, watch the data react.</p>
            </div>
            <Link href="/" className="w-fit rounded-full border border-steel px-5 py-3 text-xs font-semibold uppercase tracking-widest text-text-muted transition hover:border-accent-violet hover:text-text-primary">Back Home</Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:px-16 lg:grid-cols-[400px_1fr]">
        <div className="space-y-4">
          {PROJECTS.map((project, index) => {
            const selected = project.id === activeProject;
            return (
              <motion.button key={project.id} onClick={() => setActiveProject(project.id)}
                className="group w-full rounded-xl border-2 p-5 text-left transition-all duration-300"
                style={{
                  background: selected ? project.colorDim : "var(--color-bg-surface)",
                  borderColor: selected ? project.color : "var(--color-border)",
                  boxShadow: selected ? ("0 0 24px " + project.color + "33, 4px 4px 0 rgba(0,0,0,0.3)") : "none",
                }}
                initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.08 }}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: project.color }}>{project.quest}</span>
                  <span className="rounded-full border px-2 py-1 text-[10px] font-bold"
                    style={{ borderColor: project.color, color: project.color, background: project.color + "15" }}>
                    {project.difficulty}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl leading-tight text-text-primary">{project.title}</h2>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                      style={{ background: project.color + "18", border: ("1px solid " + project.color + "40"), color: project.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {selected && (
                  <motion.div className="mt-4 h-0.5 rounded-full" style={{ background: ("linear-gradient(90deg, " + project.color + ", transparent)") }}
                    initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} />
                )}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeProject} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }} className="rounded-xl border-2 overflow-hidden"
            style={{ borderColor: active.color, boxShadow: ("0 0 32px " + active.color + "22, 6px 6px 0 rgba(0,0,0,0.25)") }}>
            <div className="p-5 border-b-2" style={{ borderColor: active.color + "40", background: active.colorDim }}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: active.color }}>{active.quest} — LIVE DEMO</p>
                  <h2 className="font-display text-2xl text-text-primary">{active.title}</h2>
                  <p className="mt-2 text-sm text-text-muted max-w-xl leading-relaxed">{active.description}</p>
                </div>
                <span className="rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest"
                  style={{ background: ("linear-gradient(135deg, " + active.color + ", " + active.color + "cc)"), color: "#fff", boxShadow: ("3px 3px 0 rgba(0,0,0,0.5), 0 0 16px " + active.color + "55") }}>
                  INTERACTIVE
                </span>
              </div>
            </div>
            {activeProject === "agrivoltaic" && <AgrivoltaicDemo color={active.color} />}
            {activeProject === "stock" && <StockDemo color={active.color} />}
            {activeProject === "notebook" && <NotebookDemo color={active.color} />}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}

function AgrivoltaicDemo({ color }: { color: string }) {
  const [sunlight, setSunlight] = useState(72);
  const [clouds, setClouds] = useState(22);
  const [temperature, setTemperature] = useState(29);
  const forecast = Math.max(8, Math.round(sunlight * 1.18 - clouds * 0.42 + temperature * 0.55));
  const cropStress = Math.max(4, Math.round(temperature * 1.4 + clouds * 0.15 - sunlight * 0.25));
  const efficiency = Math.min(99, Math.round(forecast / 1.2));

  return (
    <div className="grid gap-4 p-5 xl:grid-cols-[1fr_260px]">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Solar Yield", value: (forecast + " kWh"), color: "#f7a928" },
            { label: "Efficiency", value: (efficiency + "%"), color: "#00d4ff" },
            { label: "Crop Stress", value: (cropStress + "%"), color: cropStress > 40 ? "#ff5f5f" : "#27c93f" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg p-3 border" style={{ background: stat.color + "12", borderColor: stat.color + "40" }}>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: stat.color }}>{stat.label}</p>
              <p className="font-display text-2xl" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
          <p className="text-[10px] uppercase tracking-widest mb-3 text-text-faint">Hourly Solar Yield Forecast</p>
          <div className="flex items-end gap-1.5" style={{ height: "100px" }}>
            {Array.from({ length: 12 }).map((_, i) => {
              const h = Math.max(10, Math.round(forecast * (0.42 + Math.sin(i / 2) * 0.16 + i / 32)));
              const isPeak = i >= 3 && i <= 9;
              return (
                <motion.div key={i} className="flex-1 rounded-t"
                  style={{ background: isPeak ? ("linear-gradient(to top, " + color + ", #00d4ff)") : "var(--color-border)" }}
                  initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i * 0.04 }} />
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-text-faint"><span>6AM</span><span>12PM</span><span>6PM</span></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[{ label: "Solar Array", status: "ONLINE", c: "#27c93f" }, { label: "Weather API", status: "LIVE", c: "#00d4ff" }, { label: "ML Model", status: "ACTIVE", c: color }].map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full px-3 py-1.5 border text-xs font-bold"
              style={{ borderColor: b.c + "50", background: b.c + "12" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: b.c }} />
              <span style={{ color: b.c }}>{b.label}: {b.status}</span>
            </div>
          ))}
        </div>
      </div>
      <ControlPanel color={color} controls={[["Sunlight %", sunlight, setSunlight], ["Cloud Cover", clouds, setClouds], ["Temperature", temperature, setTemperature]]} />
    </div>
  );
}

function StockDemo({ color }: { color: string }) {
  const [risk, setRisk] = useState(55);
  const [momentum, setMomentum] = useState(68);
  const prices = useMemo(() => Array.from({ length: 22 }).map((_, i) => 42 + Math.sin(i * 0.8) * 8 + i * (momentum / 95) - risk / 18), [momentum, risk]);
  const signal = momentum - risk > 12 ? "BUY" : risk - momentum > 8 ? "HOLD" : "WATCH";
  const signalColor = signal === "BUY" ? "#27c93f" : signal === "HOLD" ? "#f7a928" : "#ff5f5f";
  const accuracy = Math.round(61 + momentum / 5 - risk / 12);

  return (
    <div className="grid gap-4 p-5 xl:grid-cols-[1fr_260px]">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Signal", value: signal, color: signalColor },
            { label: "Accuracy", value: (accuracy + "%"), color },
            { label: "PnL Sim", value: ("+" + ((momentum - risk) * 0.8).toFixed(1) + "%"), color: "#27c93f" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg p-3 border" style={{ background: stat.color + "12", borderColor: stat.color + "40" }}>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: stat.color }}>{stat.label}</p>
              <p className="font-display text-2xl" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
          <p className="text-[10px] uppercase tracking-widest mb-2 text-text-faint">ATMN — Price Prediction</p>
          <svg viewBox="0 0 640 160" className="w-full h-40">
            <defs>
              <linearGradient id="sg" x1="0" x2="1"><stop stopColor={color} /><stop offset="1" stopColor="#00d4ff" /></linearGradient>
            </defs>
            {Array.from({ length: 4 }).map((_, i) => <line key={i} x1="0" x2="640" y1={30 + i * 32} y2={30 + i * 32} stroke="var(--color-border)" />)}
            <polyline fill="none" stroke="url(#sg)" strokeWidth="3" points={prices.map((p, i) => (i * 30) + "," + (145 - p * 1.5)).join(" ")} />
            {prices.map((p, i) => <circle key={i} cx={i * 30} cy={145 - p * 1.5} r="3" fill={color} opacity="0.7" />)}
            <line x1="0" x2="640" y1={signal === "BUY" ? 50 : 90} y2={signal === "BUY" ? 50 : 90} stroke={signalColor} strokeWidth="1.5" strokeDasharray="6 3" />
            <text x="8" y={signal === "BUY" ? 44 : 84} fontSize="10" fill={signalColor} fontWeight="bold">{signal} ZONE</text>
          </svg>
        </div>
        <div className="flex flex-wrap gap-2">
          {[{ label: "Market Feed", status: "LIVE", c: "#27c93f" }, { label: "ML Model", status: "RUNNING", c: color }, { label: "Risk Engine", status: "ACTIVE", c: "#f7a928" }].map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full px-3 py-1.5 border text-xs font-bold"
              style={{ borderColor: b.c + "50", background: b.c + "12" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: b.c }} />
              <span style={{ color: b.c }}>{b.label}: {b.status}</span>
            </div>
          ))}
        </div>
      </div>
      <ControlPanel color={color} controls={[["Momentum", momentum, setMomentum], ["Risk Level", risk, setRisk]]} />
    </div>
  );
}

function NotebookDemo({ color }: { color: string }) {
  const [focus, setFocus] = useState(64);
  const [tasks, setTasks] = useState(4);
  const assistantScore = Math.min(99, Math.round(focus + tasks * 5));
  const [activeNote, setActiveNote] = useState(0);
  const notes = [
    { title: "Build forecast dashboard", tag: "ML", color: "#f7a928" },
    { title: "Refine ML case study", tag: "Research", color: "#00d4ff" },
    { title: "Prepare recruiter story", tag: "Career", color },
  ];

  return (
    <div className="grid gap-4 p-5 xl:grid-cols-[1fr_260px]">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "AI Score", value: (assistantScore + "/100"), color },
            { label: "Open Tasks", value: tasks.toString(), color: "#f7a928" },
            { label: "Focus", value: (focus + "%"), color: focus > 70 ? "#27c93f" : "#ff5f5f" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg p-3 border" style={{ background: stat.color + "12", borderColor: stat.color + "40" }}>
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: stat.color }}>{stat.label}</p>
              <p className="font-display text-2xl" style={{ color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
            <p className="text-[10px] uppercase tracking-widest mb-3 text-text-faint">Smart Notes</p>
            <div className="space-y-2">
              {notes.map((note, i) => (
                <div key={note.title} onClick={() => setActiveNote(i)} className="rounded-lg p-3 cursor-pointer border transition-all"
                  style={{ background: activeNote === i ? note.color + "15" : "var(--color-bg-surface)", borderColor: activeNote === i ? note.color : "var(--color-border)" }}>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-text-primary">{note.title}</p>
                    <span className="text-[10px] rounded-full px-2 py-0.5 font-bold" style={{ background: note.color + "20", color: note.color }}>{note.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
            <p className="text-[10px] uppercase tracking-widest mb-3 text-text-faint">AI Assistant</p>
            <div className="rounded-lg p-3 border-l-4 text-xs leading-relaxed"
              style={{ background: color + "10", borderColor: color, color: "var(--color-text-primary)" }}>
              <span style={{ color }} className="font-bold">AI: </span>
              {assistantScore > 80 ? "Peak performance. Ship the dashboard now." : assistantScore > 60 ? "Good momentum. Prioritise ML case study." : "Low focus. Take a 10-min break first."}
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1"><span className="text-text-faint">Focus</span><span style={{ color }} className="font-bold">{focus}%</span></div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                <motion.div className="h-full rounded-full" style={{ background: ("linear-gradient(90deg, " + color + ", #00d4ff)") }}
                  animate={{ width: (focus + "%") }} transition={{ duration: 0.5 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ControlPanel color={color} controls={[["Focus Level", focus, setFocus], ["Open Tasks", tasks, setTasks]]} maxOverrides={{ "Open Tasks": 9 }} />
    </div>
  );
}

function ControlPanel({ controls, color, maxOverrides = {} }: { controls: [string, number, (v: number) => void][]; color: string; maxOverrides?: Record<string, number> }) {
  return (
    <div className="rounded-lg border p-5" style={{ background: "var(--color-bg-primary)", borderColor: color + "30" }}>
      <div className="flex items-center gap-2 mb-5">
        <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: color }} />
        <p className="text-xs uppercase tracking-widest text-text-faint">Live Controls</p>
      </div>
      <div className="space-y-6">
        {controls.map(([label, value, setValue]) => (
          <label key={label} className="block">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-text-muted">{label}</span>
              <span className="font-black text-xs rounded-full px-2 py-0.5" style={{ background: color + "20", color }}>{value}</span>
            </div>
            <input type="range" min="0" max={maxOverrides[label] ?? 100} value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: color }} />
          </label>
        ))}
      </div>
      <p className="mt-6 text-[10px] text-text-faint">Drag sliders to interact with the live simulation.</p>
    </div>
  );
}
`;

fs.writeFileSync("D:/atimanas_portfolio/app/projects/page.tsx", content);
console.log("Projects page rewritten");
