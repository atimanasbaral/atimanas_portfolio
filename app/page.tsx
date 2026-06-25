export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
      <h1 className="font-display text-6xl text-glow-violet" style={{ color: "var(--color-accent-violet)" }}>
        ATIMANAS BARAL
      </h1>
      <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
        Phase 2 — Design system live ✓
      </p>
      <div className="flex gap-4">
        <div className="px-4 py-2 rounded" style={{ background: "var(--color-accent-violet)", color: "#fff" }}>
          Violet accent
        </div>
        <div className="px-4 py-2 rounded" style={{ background: "var(--color-accent-cyan)", color: "#0a0c12" }}>
          Cyan accent
        </div>
        <div className="px-4 py-2 rounded" style={{ background: "var(--color-bg-elevated)", color: "var(--color-text-primary)" }}>
          Elevated surface
        </div>
      </div>
    </main>
  );
}
