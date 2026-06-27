"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectId = "agrivoltaic" | "stock" | "notebook";

const PROJECTS = [
  {
    id: "agrivoltaic" as const,
    quest: "QUEST #001",
    title: "Agrivoltaic System Automation",
    subtitle: "Solar forecasting, weather controls, and energy analytics.",
    difficulty: "A-RANK",
    reward: "ML Forecasting + Energy Intelligence",
    tags: ["Python", "TensorFlow", "IoT", "Power BI"],
  },
  {
    id: "stock" as const,
    quest: "QUEST #002",
    title: "Real-Time Stock Prediction",
    subtitle: "Trading terminal with indicators, prediction, and backtesting.",
    difficulty: "S-RANK",
    reward: "Quant Signals + Market Analytics",
    tags: ["Python", "Pandas", "Scikit-Learn", "APIs"],
  },
  {
    id: "notebook" as const,
    quest: "QUEST #003",
    title: "AI Notebook Application",
    subtitle: "Productivity SaaS demo with notes, tasks, and assistant flow.",
    difficulty: "A-RANK",
    reward: "Flutter Product + AI Workflow",
    tags: ["Flutter", "Firebase", "SQLite", "Hive"],
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<ProjectId>("agrivoltaic");
  const active = PROJECTS.find((project) => project.id === activeProject)!;

  return (
    <main className="min-h-screen overflow-hidden bg-bg-primary text-text-primary">
      <section className="relative border-b border-border px-6 pb-12 pt-24 md:px-16">
        <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 80% 20%, rgba(109,74,255,0.22), transparent 34%), linear-gradient(120deg, rgba(0,212,255,0.08), transparent 36%)" }} />
        <div className="relative mx-auto max-w-7xl">
          <motion.p className="text-xs uppercase tracking-widest text-steel-light" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Project Worlds
          </motion.p>
          <motion.div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div>
              <h1 className="font-display text-5xl leading-none md:text-8xl">QUEST LOG</h1>
              <p className="mt-4 max-w-2xl text-sm text-text-muted">
                Completed missions are not screenshots here. Open each quest to test a working product simulation inside the portfolio.
              </p>
            </div>
            <Link href="/" className="w-fit rounded-full border border-steel px-5 py-3 text-xs font-semibold uppercase tracking-widest text-text-muted transition hover:border-accent-violet hover:text-text-primary">
              Back Home
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:px-16 lg:grid-cols-[380px_1fr]">
        <div className="space-y-4">
          {PROJECTS.map((project, index) => {
            const selected = project.id === activeProject;
            return (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className="group w-full rounded-lg border p-5 text-left transition"
                style={{
                  background: selected ? "linear-gradient(135deg, rgba(109,74,255,0.24), rgba(17,19,28,0.98))" : "#11131c",
                  borderColor: selected ? "#6d4aff" : "#1e2236",
                  boxShadow: selected ? "0 0 28px rgba(109,74,255,0.16)" : "none",
                }}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-violet">{project.quest}</span>
                  <span className="rounded-full border border-steel px-2 py-1 text-[10px] font-bold text-text-faint">{project.difficulty}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl leading-tight text-text-primary">{project.title}</h2>
                <p className="mt-2 text-sm text-text-muted">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border border-border bg-bg-primary px-2 py-1 text-[11px] text-text-muted">{tag}</span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div key={activeProject} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-lg border border-border bg-bg-surface">
          <div className="border-b border-border p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-cyan">{active.quest} / Project World</p>
                <h2 className="mt-1 font-display text-3xl text-text-primary">{active.title}</h2>
              </div>
              <span className="rounded-full bg-accent-violet px-3 py-1 text-xs font-bold uppercase text-white">Live Demo</span>
            </div>
            <p className="mt-3 text-sm text-text-muted">Reward: {active.reward}</p>
          </div>

          {activeProject === "agrivoltaic" && <AgrivoltaicDemo />}
          {activeProject === "stock" && <StockDemo />}
          {activeProject === "notebook" && <NotebookDemo />}
        </motion.div>
      </section>
    </main>
  );
}

function AgrivoltaicDemo() {
  const [sunlight, setSunlight] = useState(72);
  const [clouds, setClouds] = useState(22);
  const [temperature, setTemperature] = useState(29);
  const forecast = Math.max(8, Math.round(sunlight * 1.18 - clouds * 0.42 + temperature * 0.55));
  const cropStress = Math.max(4, Math.round(temperature * 1.4 + clouds * 0.15 - sunlight * 0.25));

  return (
    <div className="grid gap-5 p-5 xl:grid-cols-[1fr_280px]">
      <div className="rounded-lg border border-border bg-bg-primary p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-steel-light">Solar Farm Forecast</p>
            <h3 className="font-display text-4xl text-accent-violet">{forecast} kWh</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-faint">Crop Stress</p>
            <p className="font-display text-2xl text-accent-cyan">{cropStress}%</p>
          </div>
        </div>
        <div className="grid h-64 grid-cols-12 items-end gap-2 border-b border-l border-border p-4">
          {Array.from({ length: 12 }).map((_, i) => {
            const height = Math.max(18, Math.round(forecast * (0.42 + Math.sin(i / 2) * 0.16 + i / 32)));
            return <motion.div key={i} className="rounded-t bg-gradient-to-t from-accent-violet to-accent-cyan" initial={{ height: 0 }} animate={{ height }} transition={{ delay: i * 0.03 }} />;
          })}
        </div>
        <p className="mt-4 text-xs text-text-faint">Simulated hourly yield reacts instantly to weather controls.</p>
      </div>

      <ControlPanel controls={[
        ["Sunlight", sunlight, setSunlight],
        ["Cloud Cover", clouds, setClouds],
        ["Temperature", temperature, setTemperature],
      ]} />
    </div>
  );
}

function StockDemo() {
  const [risk, setRisk] = useState(55);
  const [momentum, setMomentum] = useState(68);
  const prices = useMemo(() => Array.from({ length: 22 }).map((_, i) => 42 + Math.sin(i * 0.8) * 8 + i * (momentum / 95) - risk / 18), [momentum, risk]);
  const signal = momentum - risk > 12 ? "BUY" : risk - momentum > 8 ? "HOLD" : "WATCH";

  return (
    <div className="grid gap-5 p-5 xl:grid-cols-[1fr_280px]">
      <div className="rounded-lg border border-border bg-[#070910] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-steel-light">ATMN / Prediction Terminal</p>
            <h3 className="font-display text-4xl text-text-primary">Signal: <span className="text-accent-cyan">{signal}</span></h3>
          </div>
          <p className="rounded border border-accent-violet px-3 py-1 text-xs text-accent-violet">Backtest {Math.round(61 + momentum / 5 - risk / 12)}%</p>
        </div>
        <svg viewBox="0 0 640 260" className="mt-6 h-72 w-full">
          <defs>
            <linearGradient id="chartGlow" x1="0" x2="1">
              <stop stopColor="#6d4aff" />
              <stop offset="1" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
          {Array.from({ length: 6 }).map((_, i) => <line key={i} x1="0" x2="640" y1={40 + i * 36} y2={40 + i * 36} stroke="#1e2236" />)}
          <polyline fill="none" stroke="url(#chartGlow)" strokeWidth="4" points={prices.map((price, i) => `${i * 30},${230 - price * 2.2}`).join(" ")} />
          {prices.map((price, i) => <circle key={i} cx={i * 30} cy={230 - price * 2.2} r="3" fill="#d8d9e8" />)}
        </svg>
      </div>
      <ControlPanel controls={[
        ["Momentum", momentum, setMomentum],
        ["Risk", risk, setRisk],
      ]} />
    </div>
  );
}

function NotebookDemo() {
  const [focus, setFocus] = useState(64);
  const [tasks, setTasks] = useState(4);
  const assistantScore = Math.min(99, Math.round(focus + tasks * 5));

  return (
    <div className="grid gap-5 p-5 xl:grid-cols-[1fr_280px]">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-bg-primary p-5">
          <p className="text-xs uppercase tracking-widest text-steel-light">Today Notes</p>
          {["Build forecast dashboard", "Refine ML case study", "Prepare recruiter story"].map((note) => (
            <div key={note} className="mt-3 rounded border border-border bg-bg-surface p-3 text-sm text-text-muted">{note}</div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-bg-primary p-5">
          <p className="text-xs uppercase tracking-widest text-steel-light">AI Assistant</p>
          <div className="mt-4 rounded-lg bg-white p-4 text-sm font-semibold text-bg-primary">
            Prioritize the highest-impact project first. Your focus score is {assistantScore}/100.
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Metric label="Open Tasks" value={tasks.toString()} />
            <Metric label="Focus" value={`${focus}%`} />
          </div>
        </div>
      </div>
      <ControlPanel controls={[
        ["Focus", focus, setFocus],
        ["Tasks", tasks, setTasks],
      ]} maxOverrides={{ Tasks: 9 }} />
    </div>
  );
}

function ControlPanel({
  controls,
  maxOverrides = {},
}: {
  controls: [string, number, (value: number) => void][];
  maxOverrides?: Record<string, number>;
}) {
  return (
    <div className="rounded-lg border border-border bg-bg-primary p-5">
      <p className="mb-4 text-xs uppercase tracking-widest text-steel-light">Controls</p>
      <div className="space-y-5">
        {controls.map(([label, value, setValue]) => (
          <label key={label} className="block">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-text-muted">{label}</span>
              <span className="font-bold text-accent-violet">{value}</span>
            </div>
            <input
              type="range"
              min="0"
              max={maxOverrides[label] ?? 100}
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
              className="w-full accent-accent-violet"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border bg-bg-surface p-3">
      <p className="font-display text-2xl text-accent-violet">{value}</p>
      <p className="text-[11px] uppercase tracking-widest text-text-faint">{label}</p>
    </div>
  );
}
