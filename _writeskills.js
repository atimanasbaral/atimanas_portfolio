const fs = require('fs');

fs.mkdirSync('app/skills', { recursive: true });

const code = `"use client";
import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Data Analytics",
    icon: "◎",
    tools: "Power BI, Tableau, Excel, SQL, Python",
    level: 95,
    color: "#6d4aff",
  },
  {
    category: "AI & Machine Learning",
    icon: "⚡",
    tools: "Scikit-Learn, TensorFlow, PyTorch, OpenCV",
    level: 90,
    color: "#6d4aff",
  },
  {
    category: "Programming",
    icon: "</>",
    tools: "Python, C++, SQL, JavaScript, TypeScript",
    level: 85,
    color: "#6d4aff",
  },
  {
    category: "Web & App Development",
    icon: "◈",
    tools: "Next.js, React, Flutter, Firebase, Node.js",
    level: 80,
    color: "#6d4aff",
  },
  {
    category: "Cloud & Tools",
    icon: "✦",
    tools: "AWS, Azure, Git, Docker, VS Code",
    level: 75,
    color: "#6d4aff",
  },
];

const STACK_TAGS = [
  "Python", "SQL", "TypeScript", "Flutter", "FastAPI",
  "XGBoost", "LightGBM", "TensorFlow", "PyTorch",
  "Next.js", "React", "Node.js", "PostgreSQL", "Docker",
  "AWS", "Azure", "Git", "Spark", "Airflow", "dbt",
];

const IN_PROGRESS = ["Spark", "Airflow", "dbt", "C++"];

export default function SkillsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0c12" }}>

      {/* Hero band */}
      <section className="relative flex items-center justify-between px-8 md:px-20 py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0c12 0%, #11131c 50%, #1a1d2e 100%)", borderBottom: "1px solid #1e2236" }}>

        {/* Left — text */}
        <motion.div className="max-w-lg z-10"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <p className="mb-2 text-xs tracking-widest uppercase" style={{ color: "#6f7694" }}>
            スキルは私の武器だ。
          </p>
          <h1 className="font-display text-6xl md:text-8xl mb-4" style={{ color: "#d8d9e8" }}>
            MY SKILLS
          </h1>
          <p className="text-sm mb-8" style={{ color: "#9aa0b8" }}>
            Every skill is forged daily. To surpass yesterday.
          </p>
          <a href="/projects"
            className="rounded-full px-6 py-3 text-sm font-medium inline-block transition-all"
            style={{ background: "#6d4aff", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(109,74,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
            VIEW ALL SKILLS
          </a>
        </motion.div>

        {/* Right — skill bars */}
        <motion.div className="hidden md:flex flex-col gap-5 w-96 z-10"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {SKILLS.map((skill, i) => (
            <div key={skill.category}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm" style={{ color: "#6d4aff" }}>{skill.icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#d8d9e8" }}>{skill.category}</span>
                </div>
                <span className="text-xs font-bold" style={{ color: "#6d4aff" }}>{skill.level}%</span>
              </div>
              <p className="text-xs mb-2" style={{ color: "#555a7a" }}>{skill.tools}</p>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#1e2236" }}>
                <motion.div className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #6d4aff, #00d4ff)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Avatar */}
        <div className="absolute right-0 bottom-0 h-full w-64 hidden xl:block opacity-20 pointer-events-none">
          <img src="/avatar.png" alt="" className="h-full w-full object-cover object-top" />
        </div>
      </section>

      {/* Stack tags */}
      <section className="px-8 md:px-20 py-16">
        <p className="mb-6 text-xs tracking-widest uppercase" style={{ color: "#6f7694" }}>
          Full Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {STACK_TAGS.map((tag) => {
            const inProgress = IN_PROGRESS.includes(tag);
            return (
              <motion.span key={tag}
                className="rounded-full px-4 py-2 text-sm font-medium"
                style={{
                  background: inProgress ? "transparent" : "#11131c",
                  border: inProgress ? "1px dashed #3d4663" : "1px solid #1e2236",
                  color: inProgress ? "#555a7a" : "#9aa0b8",
                }}
                whileHover={{ scale: 1.05, borderColor: "#6d4aff", color: "#d8d9e8" }}
                transition={{ duration: 0.15 }}>
                {tag}
                {inProgress && <span className="ml-2 text-xs" style={{ color: "#3d4663" }}>wip</span>}
              </motion.span>
            );
          })}
        </div>
      </section>

      {/* Skill cards grid */}
      <section className="px-8 md:px-20 pb-20">
        <p className="mb-8 text-xs tracking-widest uppercase" style={{ color: "#6f7694" }}>
          Skill Tree
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <motion.div key={skill.category}
              className="rounded-xl p-6"
              style={{ background: "#11131c", border: "1px solid #1e2236", borderTop: "2px solid #6d4aff" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ borderColor: "#6d4aff", boxShadow: "0 0 20px rgba(109,74,255,0.15)" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl" style={{ color: "#6d4aff" }}>{skill.icon}</span>
                <span className="font-display text-2xl" style={{ color: "#6d4aff" }}>{skill.level}</span>
              </div>
              <h3 className="font-display text-base mb-1" style={{ color: "#d8d9e8" }}>{skill.category}</h3>
              <p className="text-xs" style={{ color: "#555a7a" }}>{skill.tools}</p>
              <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: "#1e2236" }}>
                <motion.div className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #6d4aff, #00d4ff)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="flex justify-center gap-4 pb-16 flex-wrap">
        <a href="/projects" className="rounded-full px-6 py-3 text-sm font-medium"
          style={{ background: "#6d4aff", color: "#fff" }}>
          View My Projects
        </a>
        <a href="/" className="rounded-full px-6 py-3 text-sm font-medium"
          style={{ border: "1px solid #3d4663", color: "#9aa0b8" }}>
          Back to Home
        </a>
      </div>
    </main>
  );
}`;

fs.writeFileSync('app/skills/page.tsx', code);
console.log('Done');