const fs = require("fs");
const p = "D:/atimanas_portfolio/app/globals.css";
let c = fs.readFileSync(p, "utf8");

const premiumStyles = `
/* ===== Light mode premium colour enhancements ===== */

/* Sidebar — soft indigo tint with glass */
.light .bg-sidebar {
  background: linear-gradient(180deg, rgba(235,240,255,0.98) 0%, rgba(220,228,255,0.97) 100%) !important;
  border-right: 2px solid rgba(30,95,255,0.15) !important;
  box-shadow: 2px 0 12px rgba(30,95,255,0.08);
}

/* TopNav — frosted glass with blue tint */
.light .bg-topnav {
  background: linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(235,242,255,0.95) 100%) !important;
  border-bottom: 1.5px solid rgba(30,95,255,0.12) !important;
  box-shadow: 0 2px 20px rgba(30,95,255,0.08);
}

/* Hero section premium gradient overlay in light mode */
.light .bg-hero-gradient {
  background:
    linear-gradient(135deg, rgba(235,242,255,0.93) 0%, rgba(220,235,255,0.78) 35%, rgba(200,220,255,0.15) 100%),
    url('/bg-light-lake.png') center center / cover no-repeat !important;
}

/* Section alternating premium backgrounds */
.light section {
  position: relative;
}

/* Premium card feel — soft blue-white gradient */
.light .ink-frame {
  background: linear-gradient(145deg, #ffffff 0%, #f0f4ff 100%) !important;
  border: 2px solid rgba(10,10,10,0.7) !important;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.75) !important;
}
.light .ink-frame:hover {
  background: linear-gradient(145deg, #f5f8ff 0%, #e8efff 100%) !important;
  border-color: #1E5FFF !important;
  box-shadow: 6px 6px 0 rgba(30,95,255,0.35) !important;
}

/* Premium heading gradient in light mode */
.light .font-display {
  background: none;
}

/* Scrollbar — blue tint */
.light ::-webkit-scrollbar-track {
  background: #f0f4ff;
}
.light ::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #1E5FFF, #0ea5e9);
  border-radius: 3px;
}

/* Nav icons active state */
.light .text-accent-violet {
  filter: drop-shadow(0 0 6px rgba(30,95,255,0.3));
}

/* Premium surface for cards/panels */
.light .bg-bg-surface,
.light [style*="var(--color-bg-surface)"] {
  background: linear-gradient(145deg, #ffffff, #f4f7ff) !important;
}

/* Premium elevated */
.light .bg-bg-elevated,
.light [style*="var(--color-bg-elevated)"] {
  background: linear-gradient(145deg, #eef2ff, #e4ecff) !important;
}

/* Skill bar track — blue tinted */
.light [style*="var(--color-border)"] {
  background: #dde6ff !important;
}

/* Button premium glow */
.light .btn-primary {
  background: linear-gradient(135deg, #1E5FFF 0%, #0ea5e9 100%) !important;
  border: 2px solid #0a0a0a !important;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.8), 0 0 20px rgba(30,95,255,0.25) !important;
}
.light .btn-primary:hover {
  box-shadow: 5px 5px 0 rgba(0,0,0,0.8), 0 0 30px rgba(30,95,255,0.4) !important;
}

/* Availability badge premium */
.light .availability-badge {
  background: linear-gradient(135deg, #eef2ff, #dde8ff) !important;
  border: 1.5px solid #1E5FFF !important;
  color: #1E5FFF !important;
}

/* Mobile nav premium */
.light nav[aria-label="Mobile"] {
  background: linear-gradient(90deg, #f0f4ff, #e8efff) !important;
  border-top: 1.5px solid rgba(30,95,255,0.15) !important;
}
`;

c = c + premiumStyles;
fs.writeFileSync(p, c);
console.log("Premium light mode styles added");
