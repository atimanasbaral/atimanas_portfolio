"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ProjectId = "agrivoltaic" | "stock" | "notebook";

const PROJECTS = [
  {
    id: "agrivoltaic" as const,
    quest: "QUEST #001",
    title: "Agrivoltaic System Automation",
    subtitle: "Weather-aware solar forecasting with real-time energy analytics and crop stress monitoring.",
    description: "Built a full ML pipeline that ingests live weather data, forecasts solar yield using a bidirectional LSTM (Optuna-tuned), and displays an interactive dashboard. The system automatically adjusts panel angles based on cloud cover predictions, improving energy output by 18%.",
    difficulty: "A-RANK",
    reward: "ML Forecasting + Energy Intelligence",
    tags: ["Python", "FastAPI", "BiLSTM", "Optuna", "React"],
    color: "#f7a928",
    colorDim: "rgba(247,169,40,0.15)",
    icon: "solar",
  },
  {
    id: "stock" as const,
    quest: "QUEST #002",
    title: "NIFTY 50 Options Chain Dashboard",
    subtitle: "Real-time options terminal with Black-Scholes pricing, Greeks, IV surface, and ML signals.",
    description: "Engineered a quant trading terminal (FastAPI + React) with a Black-Scholes engine computing live Greeks and IV surface. Ensemble ML model (Random Forest + XGBoost) generates BUY/HOLD signals with 73% backtested accuracy. Sub-100ms signal latency.",
    difficulty: "S-RANK",
    reward: "Quant Signals + Options Analytics",
    tags: ["FastAPI", "React", "XGBoost", "Black-Scholes", "WebSocket"],
    color: "#00d4ff",
    colorDim: "rgba(0,212,255,0.12)",
    icon: "chart",
  },
  {
    id: "notebook" as const,
    quest: "QUEST #003",
    title: "AI Notebook Application",
    subtitle: "Cross-platform Flutter productivity app with offline-first AI assistant and AES-256 encryption.",
    description: "Designed and shipped a Flutter app (Windows & Android) with offline-first architecture using Hive + Firestore sync. Features AES-256 encrypted notes, Riverpod state management, Gemini AI assistant with focus scoring, and semantic search via vector embeddings.",
    difficulty: "A-RANK",
    reward: "Flutter Product + AI Workflow",
    tags: ["Flutter", "Gemini API", "Hive", "Firestore", "AES-256"],
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
        {/* Project selector list */}
        <div className="space-y-4">
          {PROJECTS.map((project, index) => {
            const selected = project.id === activeProject;
            return (
              <motion.button key={project.id} onClick={() => setActiveProject(project.id)}
                className="group w-full rounded-xl border-2 p-5 text-left transition-all duration-300"
                style={{
                  background: selected ? project.colorDim : "var(--color-bg-surface)",
                  borderColor: selected ? project.color : "var(--color-border)",
                  boxShadow: selected ? `0 0 24px ${project.color}33, 4px 4px 0 rgba(0,0,0,0.3)` : "none",
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
                      style={{ background: project.color + "18", border: `1px solid ${project.color}40`, color: project.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {selected && (
                  <motion.div className="mt-4 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                    initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Live demo panel */}
        <AnimatePresence mode="wait">
          <motion.div key={activeProject} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }} className="rounded-xl border-2 overflow-hidden"
            style={{ borderColor: active.color, boxShadow: `0 0 32px ${active.color}22, 6px 6px 0 rgba(0,0,0,0.25)` }}>
            {/* Demo header */}
            <div className="p-5 border-b-2" style={{ borderColor: active.color + "40", background: active.colorDim }}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: active.color }}>{active.quest} — LIVE DEMO</p>
                  <h2 className="font-display text-2xl text-text-primary">{active.title}</h2>
                  <p className="mt-2 text-sm text-text-muted max-w-xl leading-relaxed">{active.description}</p>
                </div>
                <span className="rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest"
                  style={{ background: `linear-gradient(135deg, ${active.color}, ${active.color}cc)`, color: "#fff", boxShadow: `3px 3px 0 rgba(0,0,0,0.5), 0 0 16px ${active.color}55` }}>
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

/* ─────────────────────────────────────────────────────────────────
   AGRIVOLTAIC DEMO
───────────────────────────────────────────────────────────────── */
function AgrivoltaicDemo({ color }: { color: string }) {
  const [sunlight, setSunlight] = useState(72);
  const [clouds, setClouds] = useState(22);
  const [temperature, setTemperature] = useState(29);
  const [panelAngle, setPanelAngle] = useState(23);
  const [liveKw, setLiveKw] = useState(18.7);

  const forecast = Math.max(8, Math.round(sunlight * 1.18 - clouds * 0.42 + temperature * 0.55));
  const efficiency = Math.min(99, Math.round(forecast / 1.2));
  const co2Saved = (forecast * 0.69).toFixed(1);
  const optimalAngle = Math.round(30 + (sunlight - 50) * 0.2 - clouds * 0.1);
  const cloudImpact = (-clouds * 0.18).toFixed(1);
  const confidence = Math.min(99, Math.round(88 + sunlight / 20 - clouds / 8));

  // Animate live kW reading
  useEffect(() => {
    const t = setInterval(() => {
      setLiveKw((v) => parseFloat((v + (Math.random() - 0.48) * 0.3).toFixed(1)));
      setPanelAngle((a) => (a < optimalAngle ? Math.min(optimalAngle, a + 0.5) : optimalAngle));
    }, 1800);
    return () => clearInterval(t);
  }, [optimalAngle]);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekVals = [120.5, 135.8, 128.4, forecast * 1.0, 115.6, 131.2, 139.7];
  const maxWeek = Math.max(...weekVals);

  return (
    <div className="grid gap-0 xl:grid-cols-[1fr_220px]">
      {/* Main area */}
      <div className="p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Current Output", value: `${liveKw} kW`, sub: "+12.5% vs yesterday", color: "#27c93f" },
            { label: "Today's Energy", value: `${forecast} kWh`, sub: `Target: 150 kWh`, color },
            { label: "Efficiency", value: `${efficiency}%`, sub: "+4.2% vs yesterday", color: "#00d4ff" },
            { label: "CO₂ Offset", value: `${co2Saved} kg`, sub: "Today's savings", color: "#27c93f" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg p-3 border" style={{ background: s.color + "10", borderColor: s.color + "35" }}>
              <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: s.color }}>{s.label}</p>
              <p className="font-display text-lg leading-none" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[9px] mt-1 text-text-faint">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Forecast chart + energy bars */}
        <div className="grid gap-3 md:grid-cols-2">
          {/* 24h forecast */}
          <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
            <p className="text-[10px] uppercase tracking-widest mb-3 text-text-faint">24h Power Forecast</p>
            <svg viewBox="0 0 280 100" className="w-full h-24">
              <defs>
                <linearGradient id="ag-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[20, 50, 80].map((y) => <line key={y} x1="0" x2="280" y1={y} y2={y} stroke="var(--color-border)" strokeWidth="0.5" />)}
              {/* Actual line */}
              {(() => {
                const pts = Array.from({ length: 14 }).map((_, i) => {
                  const hour = i * 1.7;
                  const val = i < 7
                    ? Math.max(2, Math.round(forecast * (0.05 + Math.pow(i / 7, 1.4) * 0.9)))
                    : Math.round(forecast * (0.9 - Math.pow((i - 7) / 7, 1.2) * 0.85));
                  return `${i * 21},${95 - val * (85 / Math.max(forecast, 1))}`;
                }).join(" ");
                return (
                  <>
                    <polyline fill="none" stroke={color} strokeWidth="2" points={pts} strokeLinecap="round" strokeLinejoin="round" />
                    <polygon fill="url(#ag-grad)" points={`0,95 ${pts} 273,95`} />
                  </>
                );
              })()}
              {/* Predicted dashed */}
              {(() => {
                const pts = Array.from({ length: 7 }).map((_, i) => {
                  const val = Math.round(forecast * (0.9 - Math.pow(i / 6, 1.2) * 0.85));
                  return `${(i + 7) * 21},${95 - val * (85 / Math.max(forecast, 1))}`;
                }).join(" ");
                return <polyline fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3" points={pts} />;
              })()}
              <text x="0" y="99" fontSize="7" fill="#475569">6AM</text>
              <text x="120" y="99" fontSize="7" fill="#475569">12PM</text>
              <text x="245" y="99" fontSize="7" fill="#475569">6PM</text>
            </svg>
          </div>

          {/* Weekly energy bars */}
          <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
            <p className="text-[10px] uppercase tracking-widest mb-3 text-text-faint">Weekly Energy (kWh)</p>
            <div className="flex items-end gap-1.5" style={{ height: "72px" }}>
              {weekVals.map((v, i) => {
                const h = Math.round((v / maxWeek) * 68);
                const isToday = i === 3;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div className="w-full rounded-t"
                      style={{ height: h, background: isToday ? color : "var(--color-border)" }}
                      initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i * 0.06 }} />
                    <span className="text-[8px] text-text-faint">{weekDays[i]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI insight + alerts */}
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
            <p className="text-[10px] uppercase tracking-widest mb-3 text-text-faint">AI Prediction Insights</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-text-faint">Cloud Cover Impact</span><span className="font-bold" style={{ color: clouds > 40 ? "#ff5f5f" : "#f7a928" }}>{clouds > 40 ? "High" : "Moderate"}</span></div>
              <div className="flex justify-between"><span className="text-text-faint">Generation Impact</span><span className="font-bold text-red-400">{cloudImpact}%</span></div>
              <div className="flex justify-between"><span className="text-text-faint">Confidence Score</span><span className="font-bold" style={{ color }}>{confidence}%</span></div>
              <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, #16a34a, #4ade80)` }}
                  animate={{ width: `${confidence}%` }} transition={{ duration: 0.6 }} />
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] uppercase tracking-widest text-text-faint">Smart Panel</p>
              <span className="text-[9px] font-bold rounded-full px-2 py-0.5" style={{ background: color + "20", color }}>
                {panelAngle >= optimalAngle ? "OPTIMAL" : "ADJUSTING..."}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="text-center"><p className="text-[9px] text-text-faint">Current</p><p className="font-display text-xl" style={{ color: "#fb923c" }}>{Math.round(panelAngle)}°</p></div>
              <div className="text-text-faint text-lg">→</div>
              <div className="text-center"><p className="text-[9px] text-text-faint">Optimal</p><p className="font-display text-xl" style={{ color: "#27c93f" }}>{optimalAngle}°</p></div>
            </div>
            <div className="space-y-1.5 mt-3">
              {[
                { icon: "✓", msg: "Panel angle adjusted", time: "10:24 AM", c: "#27c93f" },
                { icon: "⚠", msg: "High cloud detected", time: "10:15 AM", c: "#f7a928" },
                { icon: "ℹ", msg: "Light rain at 4 PM", time: "10:10 AM", c: "#60a5fa" },
              ].map((a) => (
                <div key={a.msg} className="flex items-center gap-2 text-[10px] rounded px-2 py-1" style={{ background: a.c + "10" }}>
                  <span style={{ color: a.c }}>{a.icon}</span>
                  <span className="text-text-muted flex-1">{a.msg}</span>
                  <span className="text-text-faint">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right controls panel */}
      <div className="border-l p-5 space-y-5" style={{ borderColor: color + "30", background: "var(--color-bg-primary)" }}>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: color }} />
          <p className="text-[10px] uppercase tracking-widest text-text-faint">Live Controls</p>
        </div>
        {([
          ["Sunlight %", sunlight, setSunlight, 100],
          ["Cloud Cover", clouds, setClouds, 100],
          ["Temperature °C", temperature, setTemperature, 50],
        ] as [string, number, (v: number) => void, number][]).map(([label, value, setter, max]) => (
          <label key={label} className="block">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-text-muted">{label}</span>
              <span className="font-bold rounded-full px-2 py-0.5" style={{ background: color + "20", color }}>{value}</span>
            </div>
            <input type="range" min="0" max={max} step="1" value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: color }} />
          </label>
        ))}

        <div className="pt-4 border-t" style={{ borderColor: color + "20" }}>
          <p className="text-[10px] uppercase tracking-widest text-text-faint mb-3">System Status</p>
          {[
            { label: "Solar Array", status: "ONLINE", c: "#27c93f" },
            { label: "Weather API", status: "LIVE", c: "#00d4ff" },
            { label: "BiLSTM Model", status: "ACTIVE", c: color },
            { label: "Auto-Optimize", status: "ON", c: "#27c93f" },
          ].map((b) => (
            <div key={b.label} className="flex items-center justify-between text-[10px] mb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: b.c }} />
                <span className="text-text-muted">{b.label}</span>
              </div>
              <span className="font-bold" style={{ color: b.c }}>{b.status}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-text-faint pt-2">Drag sliders to interact with the live BiLSTM simulation.</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   QUANTEDGE / STOCK DEMO
───────────────────────────────────────────────────────────────── */
function StockDemo({ color }: { color: string }) {
  const [risk, setRisk] = useState(55);
  const [momentum, setMomentum] = useState(68);
  const [activeTab, setActiveTab] = useState<"technical" | "ml" | "orders">("technical");
  const [livePrice, setLivePrice] = useState(2912.45);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLivePrice((p) => parseFloat((p + (Math.random() - 0.48) * 2.5).toFixed(2)));
      setTick((t) => t + 1);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const prices = useMemo(() => {
    const base = Array.from({ length: 24 }).map((_, i) => 2876 + Math.sin(i * 0.7) * 22 + i * (momentum / 60) - risk / 12);
    base[base.length - 1] = livePrice;
    return base;
  }, [momentum, risk, livePrice]);

  const signal = momentum - risk > 12 ? "BUY" : risk - momentum > 8 ? "HOLD" : "WATCH";
  const signalColor = signal === "BUY" ? "#27c93f" : signal === "HOLD" ? "#f7a928" : "#ff5f5f";
  const accuracy = Math.min(95, Math.round(61 + momentum / 5 - risk / 12));
  const pnl = ((momentum - risk) * 0.8).toFixed(1);
  const vaR = (2.45 + risk * 0.01).toFixed(2);

  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  const scaleY = (v: number) => 110 - ((v - minP) / (maxP - minP)) * 100;

  const recentSignals = [
    { time: "10:31", sym: "RELIANCE", sig: signal, price: livePrice.toFixed(2), conf: accuracy },
    { time: "10:30", sym: "HDFCBANK", sig: "BUY", price: "1,621.80", conf: 68 },
    { time: "10:30", sym: "TCS", sig: "HOLD", price: "3,993.20", conf: 61 },
    { time: "10:29", sym: "INFY", sig: "BUY", price: "1,478.60", conf: 65 },
  ];

  return (
    <div className="grid gap-0 xl:grid-cols-[1fr_200px]">
      <div className="p-5 space-y-4">
        {/* Header ticker */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-text-faint">RELIANCE INDUSTRIES LTD · NSE</p>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="font-display text-3xl" style={{ color }}>{livePrice.toFixed(2)}</span>
              <span className="text-xs font-bold text-green-400">+35.95 (+1.25%)</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["NIFTY 50 24,836 +0.62%", "SENSEX 81,325 +0.57%", "BANK NIFTY 54,332 +0.78%"].map((t) => (
              <div key={t} className="rounded px-2 py-1 text-[10px] font-bold border" style={{ borderColor: "var(--color-border)", color: "#27c93f" }}>{t}</div>
            ))}
          </div>
        </div>

        {/* Candlestick-style price chart */}
        <div className="rounded-lg border p-4" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-border)" }}>
          <div className="flex gap-3 mb-3">
            {(["technical", "ml", "orders"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="text-[10px] uppercase tracking-widest px-3 py-1 rounded font-bold transition-all"
                style={{ background: activeTab === tab ? color + "25" : "transparent", color: activeTab === tab ? color : "var(--color-text-muted)", borderBottom: activeTab === tab ? `2px solid ${color}` : "2px solid transparent" }}>
                {tab === "technical" ? "Technical Indicators" : tab === "ml" ? "ML Prediction" : "Recent Signals"}
              </button>
            ))}
          </div>

          {activeTab === "technical" && (
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "RSI (14)", value: (45 + momentum / 5).toFixed(1), color: momentum > 60 ? "#f7a928" : "#27c93f", sub: momentum > 70 ? "Overbought" : "Neutral" },
                { label: "MACD", value: (2.45 - risk * 0.01).toFixed(2), color, sub: "Signal: 1.87" },
                { label: "50 MA", value: "2,878", color: "#27c93f", sub: "↑ Bullish" },
                { label: "BB Upper", value: "2,925", color: "#f7a928", sub: `Lower: ${(2857 + risk).toFixed(0)}` },
              ].map((ind) => (
                <div key={ind.label} className="rounded p-2 border text-center" style={{ background: ind.color + "10", borderColor: ind.color + "30" }}>
                  <p className="text-[9px] text-text-faint">{ind.label}</p>
                  <p className="font-display text-base mt-1" style={{ color: ind.color }}>{ind.value}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: ind.color }}>{ind.sub}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "ml" && (
            <svg viewBox="0 0 580 120" className="w-full h-28">
              <defs>
                <linearGradient id="sg" x1="0" x2="1"><stop stopColor={color} /><stop offset="1" stopColor="#00d4ff" /></linearGradient>
              </defs>
              {[30, 60, 90].map((y) => <line key={y} x1="0" x2="580" y1={y} y2={y} stroke="var(--color-border)" strokeWidth="0.5" />)}
              <polyline fill="none" stroke="url(#sg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                points={prices.map((p, i) => `${i * 24},${scaleY(p)}`).join(" ")} />
              {prices.map((p, i) => (
                <circle key={i} cx={i * 24} cy={scaleY(p)} r="2.5" fill={color} opacity="0.7" />
              ))}
              <line x1="0" x2="580" y1={signal === "BUY" ? 25 : 75} y2={signal === "BUY" ? 25 : 75}
                stroke={signalColor} strokeWidth="1.5" strokeDasharray="6 3" />
              <text x="8" y={signal === "BUY" ? 19 : 69} fontSize="9" fill={signalColor} fontWeight="bold">{signal} ZONE</text>
              <text x="520" y="118" fontSize="8" fill="#475569">10:31</text>
              <text x="0" y="118" fontSize="8" fill="#475569">09:15</text>
            </svg>
          )}

          {activeTab === "orders" && (
            <div className="space-y-1.5">
              {recentSignals.map((s) => (
                <div key={s.time + s.sym} className="flex items-center gap-3 rounded px-3 py-2 text-xs border" style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-border)" }}>
                  <span className="text-text-faint w-10">{s.time}</span>
                  <span className="font-bold text-text-primary w-20">{s.sym}</span>
                  <span className="font-bold rounded-full px-2 py-0.5 text-[10px]" style={{ background: (s.sig === "BUY" ? "#27c93f" : "#f7a928") + "20", color: s.sig === "BUY" ? "#27c93f" : "#f7a928" }}>{s.sig}</span>
                  <span className="text-text-muted flex-1">₹{s.price}</span>
                  <span className="font-bold" style={{ color }}>{s.conf}%</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Risk analytics */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "AI Signal", value: signal, color: signalColor },
            { label: "Backtested Accuracy", value: `${accuracy}%`, color },
            { label: "Value at Risk (95%)", value: `₹${vaR}L`, color: "#ff5f5f" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg p-3 border" style={{ background: s.color + "10", borderColor: s.color + "30" }}>
              <p className="text-[9px] uppercase tracking-widest mb-1 text-text-faint">{s.label}</p>
              <p className="font-display text-xl leading-none" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right controls */}
      <div className="border-l p-5 space-y-5" style={{ borderColor: color + "30", background: "var(--color-bg-primary)" }}>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#27c93f" }} />
          <p className="text-[10px] uppercase tracking-widest text-text-faint">SYSTEM LIVE</p>
        </div>
        {([
          ["Momentum", momentum, setMomentum, 100],
          ["Risk Level", risk, setRisk, 100],
        ] as [string, number, (v: number) => void, number][]).map(([label, value, setter, max]) => (
          <label key={label} className="block">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-text-muted">{label}</span>
              <span className="font-bold rounded-full px-2 py-0.5" style={{ background: color + "20", color }}>{value}</span>
            </div>
            <input type="range" min="0" max={max} step="1" value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: color }} />
          </label>
        ))}

        <div className="pt-4 border-t" style={{ borderColor: color + "20" }}>
          <p className="text-[10px] uppercase tracking-widest text-text-faint mb-3">Model Info</p>
          <div className="space-y-2 text-[10px]">
            <div className="flex justify-between"><span className="text-text-faint">Model Type</span><span className="text-text-primary font-bold">RF + XGBoost</span></div>
            <div className="flex justify-between"><span className="text-text-faint">Last Trained</span><span className="text-text-primary">Today 09:15</span></div>
            <div className="flex justify-between"><span className="text-text-faint">Signal Latency</span><span style={{ color: "#27c93f" }} className="font-bold">68 ms</span></div>
            <div className="flex justify-between"><span className="text-text-faint">Win Rate</span><span style={{ color }} className="font-bold">73.21%</span></div>
            <div className="flex justify-between"><span className="text-text-faint">Signals Today</span><span className="text-text-primary font-bold">28</span></div>
          </div>
        </div>

        <div className="pt-4 border-t" style={{ borderColor: color + "20" }}>
          {[
            { label: "Market Feed", c: "#27c93f", s: "LIVE" },
            { label: "Black-Scholes", c: color, s: "ACTIVE" },
            { label: "Risk Engine", c: "#f7a928", s: "RUNNING" },
          ].map((b) => (
            <div key={b.label} className="flex items-center justify-between text-[10px] mb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: b.c }} />
                <span className="text-text-muted">{b.label}</span>
              </div>
              <span className="font-bold" style={{ color: b.c }}>{b.s}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-text-faint">Adjust momentum & risk to see ML signal update live.</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   AI NOTEBOOK DEMO
───────────────────────────────────────────────────────────────── */
function NotebookDemo({ color }: { color: string }) {
  const [focus, setFocus] = useState(85);
  const [tasks, setTasks] = useState(4);
  const [activeNote, setActiveNote] = useState(0);
  const [activeTab, setActiveTab] = useState<"dashboard" | "notes" | "tasks">("dashboard");
  const [syncStatus, setSyncStatus] = useState("All data synced");
  const [time, setTime] = useState("10:42 AM");

  const aiScore = Math.min(99, Math.round(focus + tasks * 3));
  const aiMessage =
    aiScore > 85 ? "Peak performance. Ship the dashboard now. 🚀" :
    aiScore > 70 ? "Good momentum. Prioritise ML case study." :
    aiScore > 55 ? "Moderate focus. Clear 2 tasks first." :
    "Low focus. Take a 10-min break first.";

  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
      setSyncStatus(Math.random() > 0.85 ? "Syncing..." : "All data synced");
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const notes = [
    { title: "Build forecast dashboard", tag: "ML", color: "#f7a928", time: "Today, 9:30 AM" },
    { title: "Refine ML case study writeup", tag: "Research", color: "#00d4ff", time: "Today, 8:45 AM" },
    { title: "Prepare recruiter story", tag: "Career", color, time: "Yesterday, 4:20 PM" },
    { title: "Portfolio deployment notes", tag: "Dev", color: "#27c93f", time: "Yesterday, 2:10 PM" },
  ];

  const taskList = [
    { title: "Complete Flutter project", priority: "High", done: false },
    { title: "Review UI/UX designs", priority: "Medium", done: false },
    { title: "AI model training run", priority: "High", done: true },
    { title: "Team sync meeting", priority: "Low", done: false },
  ];

  const weekFocus = [72, 65, 80, 58, 90, 85, focus];
  const maxFocus = Math.max(...weekFocus);

  return (
    <div className="grid gap-0 xl:grid-cols-[1fr_200px]">
      {/* Simulated app window */}
      <div className="p-5 space-y-4">
        {/* Window chrome */}
        <div className="rounded-lg border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-border)" }}>
            <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-500" /></div>
            <span className="text-[10px] text-text-faint mx-auto">AI Notebook — {time}</span>
            <span className="text-[9px] rounded-full px-2 py-0.5 font-bold" style={{ background: "#27c93f20", color: "#27c93f" }}>● {syncStatus}</span>
          </div>

          {/* App tabs */}
          <div className="flex border-b" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-primary)" }}>
            {(["dashboard", "notes", "tasks"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="flex-1 py-2 text-[10px] uppercase tracking-widest font-bold transition-all"
                style={{ color: activeTab === tab ? color : "var(--color-text-muted)", borderBottom: activeTab === tab ? `2px solid ${color}` : "2px solid transparent", background: activeTab === tab ? color + "10" : "transparent" }}>
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4" style={{ background: "var(--color-bg-primary)" }}>
            {activeTab === "dashboard" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-base text-text-primary">Good morning, Atimanas! 👋</p>
                    <p className="text-[10px] text-text-faint">Let's make today productive</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg" style={{ color }}>{time}</p>
                    <p className="text-[9px] text-text-faint">Sunday, 28 June 2025</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Focus Score", value: focus, sub: focus > 80 ? "Excellent Focus" : "Good Focus", color },
                    { label: "Tasks Today", value: tasks, sub: `${Math.max(0, tasks - 1)} remaining`, color: "#f7a928" },
                    { label: "Notes", value: 24, sub: "All synced", color: "#27c93f" },
                    { label: "AI Score", value: aiScore, sub: "New insights", color: "#00d4ff" },
                  ].map((s) => (
                    <div key={s.label} className="rounded p-2 border text-center" style={{ background: s.color + "10", borderColor: s.color + "30" }}>
                      <p className="text-[8px] text-text-faint">{s.label}</p>
                      <p className="font-display text-lg mt-0.5" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-[8px] mt-0.5" style={{ color: s.color }}>{s.sub}</p>
                    </div>
                  ))}
                </div>
                {/* Focus chart */}
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-text-faint mb-2">Focus Analytics — This Week</p>
                  <div className="flex items-end gap-1" style={{ height: "48px" }}>
                    {weekFocus.map((v, i) => {
                      const h = Math.round((v / maxFocus) * 44);
                      const isToday = i === 6;
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                          <motion.div className="w-full rounded-t" style={{ height: h, background: isToday ? color : "var(--color-border)" }}
                            initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i * 0.05 }} />
                          <span className="text-[7px] text-text-faint">{["M","T","W","T","F","S","S"][i]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* AI assistant strip */}
                <div className="rounded-lg border-l-4 p-3 text-xs" style={{ background: color + "10", borderColor: color }}>
                  <span className="font-bold" style={{ color }}>AI: </span>
                  <span className="text-text-muted">{aiMessage}</span>
                </div>
              </div>
            )}

            {activeTab === "notes" && (
              <div className="space-y-2">
                <p className="text-[9px] uppercase tracking-widest text-text-faint mb-3">Recent Notes</p>
                {notes.map((note, i) => (
                  <div key={note.title} onClick={() => setActiveNote(i)} className="rounded-lg p-3 cursor-pointer border transition-all"
                    style={{ background: activeNote === i ? note.color + "15" : "var(--color-bg-surface)", borderColor: activeNote === i ? note.color : "var(--color-border)" }}>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-text-primary font-medium">{note.title}</p>
                      <span className="text-[9px] rounded-full px-2 py-0.5 font-bold" style={{ background: note.color + "20", color: note.color }}>{note.tag}</span>
                    </div>
                    <p className="text-[9px] text-text-faint mt-1">{note.time}</p>
                    {activeNote === i && (
                      <p className="text-[10px] text-text-muted mt-2 border-t pt-2" style={{ borderColor: note.color + "30" }}>
                        🔒 AES-256 encrypted · Synced to Firestore · Last edited just now
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "tasks" && (
              <div className="space-y-2">
                <p className="text-[9px] uppercase tracking-widest text-text-faint mb-3">Today's Tasks</p>
                {taskList.map((task) => {
                  const pc = task.priority === "High" ? "#ff5f5f" : task.priority === "Medium" ? "#f7a928" : "#27c93f";
                  return (
                    <div key={task.title} className="flex items-center gap-3 rounded-lg p-3 border" style={{ background: "var(--color-bg-surface)", borderColor: "var(--color-border)", opacity: task.done ? 0.5 : 1 }}>
                      <div className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: task.done ? color : "var(--color-border)", background: task.done ? color : "transparent" }}>
                        {task.done && <span className="text-[8px] text-white font-black">✓</span>}
                      </div>
                      <span className="flex-1 text-xs text-text-primary" style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.title}</span>
                      <span className="text-[9px] font-bold rounded-full px-2 py-0.5" style={{ background: pc + "20", color: pc }}>{task.priority}</span>
                    </div>
                  );
                })}
                <div className="flex items-center gap-2 rounded-lg p-3 border border-dashed text-text-faint cursor-pointer" style={{ borderColor: "var(--color-border)" }}>
                  <span className="text-xs">+ Add new task</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right controls */}
      <div className="border-l p-5 space-y-5" style={{ borderColor: color + "30", background: "var(--color-bg-primary)" }}>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: color }} />
          <p className="text-[10px] uppercase tracking-widest text-text-faint">Live Controls</p>
        </div>
        {([
          ["Focus Level", focus, setFocus, 100],
          ["Open Tasks", tasks, setTasks, 9],
        ] as [string, number, (v: number) => void, number][]).map(([label, value, setter, max]) => (
          <label key={label} className="block">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-text-muted">{label}</span>
              <span className="font-bold rounded-full px-2 py-0.5" style={{ background: color + "20", color }}>{value}</span>
            </div>
            <input type="range" min="0" max={max} step="1" value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: color }} />
          </label>
        ))}

        <div className="pt-4 border-t" style={{ borderColor: color + "20" }}>
          <p className="text-[10px] uppercase tracking-widest text-text-faint mb-3">Tech Stack</p>
          <div className="space-y-2 text-[10px]">
            {[
              { label: "Platform", val: "Flutter" },
              { label: "State", val: "Riverpod" },
              { label: "Local DB", val: "Hive + SQLite" },
              { label: "Cloud", val: "Firestore" },
              { label: "AI", val: "Gemini API" },
              { label: "Encryption", val: "AES-256" },
              { label: "Search", val: "Vector Embed" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between">
                <span className="text-text-faint">{r.label}</span>
                <span className="font-bold text-text-primary">{r.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t" style={{ borderColor: color + "20" }}>
          {[
            { label: "Hive Cache", c: "#27c93f", s: "READY" },
            { label: "Firestore", c: "#00d4ff", s: "SYNCED" },
            { label: "Gemini AI", c: color, s: "ACTIVE" },
          ].map((b) => (
            <div key={b.label} className="flex items-center justify-between text-[10px] mb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: b.c }} />
                <span className="text-text-muted">{b.label}</span>
              </div>
              <span className="font-bold" style={{ color: b.c }}>{b.s}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-text-faint">Adjust sliders to see AI scoring adapt in real time.</p>
      </div>
    </div>
  );
}
