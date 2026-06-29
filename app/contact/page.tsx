"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data/profile";
import Link from "next/link";

const CONTACT_METHODS = [
  {
    id: "email",
    label: "Send Email",
    sublabel: profile.email,
    icon: "✉️",
    color: "#6d4aff",
    action: `mailto:${profile.email}?subject=Hey Atimanas — Let's Connect&body=Hi Atimanas,%0D%0A%0D%0AI came across your portfolio and would love to connect.%0D%0A%0D%0A`,
    cta: "Open Email Client",
    external: false,
  },
  {
    id: "linkedin",
    label: "Connect on LinkedIn",
    sublabel: "linkedin.com/in/atimanasbaral",
    icon: "💼",
    color: "#0a66c2",
    action: profile.linkedin,
    cta: "Open LinkedIn",
    external: true,
  },
  {
    id: "github",
    label: "View GitHub",
    sublabel: "github.com/atimanasbaral",
    icon: "🐙",
    color: "#e0e0e0",
    action: profile.github,
    cta: "Open GitHub",
    external: true,
  },
  {
    id: "phone",
    label: "Call / WhatsApp",
    sublabel: profile.phone,
    icon: "📱",
    color: "#25d366",
    action: `https://wa.me/919861041381?text=Hi%20Atimanas%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!`,
    cta: "Open WhatsApp",
    external: true,
  },
  {
    id: "resume",
    label: "Download Resume",
    sublabel: "Latest CV — PDF",
    icon: "📄",
    color: "#f7a928",
    action: profile.resumePath,
    cta: "Download PDF",
    external: true,
  },
];

const QUICK_SUBJECTS = [
  "Open to Work — Let's Talk",
  "Freelance / Contract Inquiry",
  "Collaboration Opportunity",
  "Just Saying Hi 👋",
];

export default function ContactPage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState(QUICK_SUBJECTS[0]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-primary)" }}>

      {/* Hero */}
      <section className="relative overflow-hidden px-8 md:px-20 py-20"
        style={{ background: "linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-surface) 100%)", borderBottom: "1px solid var(--color-border)" }}>

        {/* Animated bg grid */}
        <motion.div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(var(--color-accent-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-violet) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />

        {/* Glow orbs */}
        <motion.div className="absolute right-20 top-10 rounded-full pointer-events-none"
          style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(109,74,255,0.15), transparent 70%)", filter: "blur(40px)" }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute left-1/3 bottom-0 rounded-full pointer-events-none"
          style={{ width: 200, height: 200, background: "radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)", filter: "blur(30px)" }}
          animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />

        <div className="relative z-10 max-w-2xl">
          <motion.p className="mb-3 text-xs font-bold tracking-[0.4em] uppercase"
            style={{ color: "var(--color-accent-violet)" }}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Mission Control
          </motion.p>
          <motion.h1 className="font-display leading-none mb-4"
            style={{ fontSize: "clamp(3rem,9vw,7rem)", color: "var(--color-text-primary)", textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
            CONTACT
          </motion.h1>
          <motion.p className="text-base leading-relaxed max-w-md"
            style={{ color: "var(--color-text-muted)" }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            Open to roles in data engineering, quant analytics & ML. Let's build something that matters.
          </motion.p>

          {/* Availability badge */}
          <motion.div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "rgba(39,201,63,0.1)", border: "1px solid rgba(39,201,63,0.4)" }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
            <motion.div className="h-2 w-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-xs font-bold text-green-400">Open to Work — Bengaluru & Remote</span>
          </motion.div>
        </div>
      </section>

      {/* Contact methods grid */}
      <section className="px-8 md:px-20 py-14">
        <motion.div className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: "var(--color-text-faint)" }}>Reach Out</p>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_METHODS.map((method, i) => (
            <motion.a
              key={method.id}
              href={method.action}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              download={method.id === "resume" ? "Atimanas_Baral_Resume.pdf" : undefined}
              className="ink-frame relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 no-underline"
              style={{
                background: hovered === method.id ? `${method.color}10` : "var(--color-bg-surface)",
                border: `2px solid ${hovered === method.id ? method.color + "60" : "var(--color-border)"}`,
                boxShadow: hovered === method.id ? `0 12px 40px ${method.color}20, 4px 4px 0 rgba(0,0,0,0.5)` : "4px 4px 0 rgba(0,0,0,0.5)",
                transition: "all 0.2s",
              }}
              initial={{ opacity: 0, y: 24, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHovered(method.id)}
              onHoverEnd={() => setHovered(null)}>

              {/* Glow */}
              <motion.div className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 40%, ${method.color}12, transparent 70%)` }}
                animate={{ opacity: hovered === method.id ? 1 : 0 }} transition={{ duration: 0.3 }} />

              <div className="relative z-10 flex items-center justify-between">
                <motion.div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{ background: `${method.color}18`, border: `1.5px solid ${method.color}40` }}
                  animate={hovered === method.id ? { scale: 1.1, rotate: [-5, 5, 0] } : { scale: 1 }}
                  transition={{ duration: 0.4 }}>
                  {method.icon}
                </motion.div>
                <motion.span className="text-lg" style={{ color: method.color }}
                  animate={{ x: hovered === method.id ? 3 : 0 }}>
                  ↗
                </motion.span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-lg mb-1" style={{ color: "var(--color-text-primary)" }}>{method.label}</h3>
                <p className="text-xs" style={{ color: "var(--color-text-faint)" }}>{method.sublabel}</p>
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{ background: `${method.color}15`, color: method.color, border: `1px solid ${method.color}30` }}>
                  {method.cta} →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Quick email composer */}
      <section className="px-8 md:px-20 py-10 pb-16">
        <motion.div className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: "var(--color-text-faint)" }}>Quick Email</p>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </motion.div>

        <motion.div className="ink-frame rounded-2xl overflow-hidden max-w-2xl"
          style={{ border: "2px solid var(--color-border)", background: "var(--color-bg-surface)" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}>

          {/* Terminal top bar */}
          <div className="flex items-center gap-2 px-4 py-3" style={{ background: "var(--color-bg-elevated)", borderBottom: "1px solid var(--color-border)" }}>
            <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f56" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#27c93f" }} />
            <span className="ml-2 text-xs" style={{ color: "var(--color-text-faint)", fontFamily: "monospace" }}>new-message.eml</span>
          </div>

          <div className="p-6 space-y-4">
            {/* To */}
            <div className="flex items-center gap-3 pb-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <span className="text-xs font-bold w-12" style={{ color: "var(--color-text-faint)" }}>TO</span>
              <div className="flex items-center gap-2 flex-1">
                <span className="text-sm" style={{ color: "var(--color-text-primary)" }}>{profile.email}</span>
                <motion.button onClick={copyEmail}
                  className="ml-auto text-xs px-2 py-1 rounded-md font-bold"
                  style={{ background: "var(--color-bg-elevated)", color: copied ? "#27c93f" : "var(--color-text-faint)", border: "1px solid var(--color-border)" }}
                  whileTap={{ scale: 0.95 }}>
                  <AnimatePresence mode="wait">
                    <motion.span key={copied ? "copied" : "copy"}
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}>
                      {copied ? "✓ Copied!" : "Copy"}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Subject quick picks */}
            <div className="pb-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <span className="text-xs font-bold" style={{ color: "var(--color-text-faint)" }}>SUBJECT</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {QUICK_SUBJECTS.map(s => (
                  <button key={s} onClick={() => setSubject(s)}
                    className="text-xs px-3 py-1.5 rounded-full transition-all"
                    style={{
                      background: subject === s ? "var(--color-accent-violet)" : "var(--color-bg-elevated)",
                      color: subject === s ? "#fff" : "var(--color-text-muted)",
                      border: `1px solid ${subject === s ? "var(--color-accent-violet)" : "var(--color-border)"}`,
                    }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Send button */}
            <motion.a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=Hi%20Atimanas%2C%0D%0A%0D%0A`}
              className="flex items-center justify-center gap-3 w-full rounded-xl py-4 font-display text-sm font-bold uppercase tracking-widest text-white no-underline"
              style={{ background: "linear-gradient(135deg, var(--color-accent-violet), var(--color-accent-cyan))", boxShadow: "0 8px 24px rgba(109,74,255,0.35)" }}
              whileHover={{ scale: 1.02, boxShadow: "0 12px 32px rgba(109,74,255,0.5)" }}
              whileTap={{ scale: 0.98 }}>
              <span>✉️</span>
              Send Email — {subject}
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Bottom strip */}
      <section className="px-8 md:px-20 py-10 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
        <motion.p className="text-xs uppercase tracking-[0.4em] mb-2" style={{ color: "var(--color-text-faint)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Location
        </motion.p>
        <motion.p className="font-display text-2xl mb-6" style={{ color: "var(--color-text-primary)" }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          BENGALURU, INDIA 🇮🇳 — OPEN TO REMOTE
        </motion.p>
        <Link href="/" className="btn-outline">← Back to Home</Link>
      </section>

    </main>
  );
}
