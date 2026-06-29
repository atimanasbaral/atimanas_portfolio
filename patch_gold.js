const fs = require("fs");
const p = "D:/atimanas_portfolio/app/globals.css";
let c = fs.readFileSync(p, "utf8");

const goldStyles = `
/* ===== Light mode GOLD premium theme ===== */

/* Gold CSS variable overrides in light mode */
.light {
  --color-accent-violet:     #c9960c;
  --color-accent-violet-dim: #b8860b;
  --color-accent-cyan:       #d4a017;
  --color-accent-cyan-dim:   #e6b800;
  --color-border-glow:       rgba(201,150,12,0.35);
}

/* Sidebar — warm cream with gold border */
.light .bg-sidebar {
  background: linear-gradient(180deg, #fffdf5 0%, #fff8e7 100%) !important;
  border-right: 2px solid rgba(201,150,12,0.3) !important;
  box-shadow: 2px 0 16px rgba(201,150,12,0.1) !important;
}

/* TopNav — white with gold shimmer */
.light .bg-topnav {
  background: linear-gradient(90deg, #ffffff 0%, #fffbf0 50%, #fff8e1 100%) !important;
  border-bottom: 2px solid rgba(201,150,12,0.25) !important;
  box-shadow: 0 2px 20px rgba(201,150,12,0.1) !important;
}

/* Hero — warm cream + lake bg */
.light .bg-hero-gradient,
.light .light-lake-bg {
  background:
    linear-gradient(135deg, rgba(255,253,245,0.94) 0%, rgba(255,248,225,0.78) 35%, rgba(255,244,200,0.12) 100%),
    url('/bg-light-lake.png') center center / cover no-repeat !important;
}

/* Jungle section */
.light .light-jungle-bg {
  background:
    linear-gradient(to bottom, rgba(255,253,245,0.88) 0%, rgba(255,248,225,0.65) 50%, rgba(255,253,245,0.92) 100%),
    url('/bg-light-jungle.png') center top / cover no-repeat !important;
}

/* Cards — cream white with gold shadow */
.light .ink-frame {
  background: linear-gradient(145deg, #ffffff 0%, #fffbf0 100%) !important;
  border: 2.5px solid #0a0a0a !important;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.8), 0 0 0 1px rgba(201,150,12,0.15) !important;
}
.light .ink-frame:hover {
  background: linear-gradient(145deg, #fffdf5 0%, #fff8e1 100%) !important;
  border-color: #c9960c !important;
  box-shadow: 6px 6px 0 rgba(0,0,0,0.75), 0 0 16px rgba(201,150,12,0.3) !important;
  transform: translate(-2px, -2px);
}

/* Primary button — gold gradient */
.light .btn-primary {
  background: linear-gradient(135deg, #c9960c 0%, #e6b800 50%, #c9960c 100%) !important;
  border: 2px solid #0a0a0a !important;
  color: #0a0a0a !important;
  font-weight: 800 !important;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.85), 0 0 20px rgba(201,150,12,0.3) !important;
}
.light .btn-primary:hover {
  box-shadow: 5px 5px 0 rgba(0,0,0,0.85), 0 0 32px rgba(201,150,12,0.5) !important;
}

/* Outline button — gold border */
.light .btn-outline {
  border: 2px solid #0a0a0a !important;
  color: #0a0a0a !important;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.5) !important;
}
.light .btn-outline:hover {
  border-color: #c9960c !important;
  box-shadow: 5px 5px 0 rgba(201,150,12,0.4) !important;
}

/* Scrollbar — gold */
.light ::-webkit-scrollbar-track { background: #fffbf0; }
.light ::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #c9960c, #e6b800);
  border-radius: 3px;
}
.light ::-webkit-scrollbar-thumb:hover { background: #b8860b; }

/* Selection — gold */
.light ::selection {
  background: #c9960c;
  color: #fff;
}

/* Availability badge — gold */
.light .availability-badge {
  background: linear-gradient(135deg, #fffbf0, #fff3cc) !important;
  border: 1.5px solid #c9960c !important;
  color: #b8860b !important;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.6) !important;
}

/* Social links — gold hover */
.light .social-link:hover { color: #c9960c !important; }

/* Nav active icon — gold */
.light .text-accent-violet {
  filter: drop-shadow(0 0 4px rgba(201,150,12,0.4));
}

/* Topnav links — gold active */
.light .topnav-link-active { color: #c9960c !important; }
.light .topnav-link:hover  { color: #b8860b !important; }

/* Skill bars — gold gradient */
.light .skill-bar,
.light [style*="accent-violet.*accent-cyan"] {
  background: linear-gradient(90deg, #c9960c, #e6b800) !important;
}

/* SFX text — gold stroke */
.light .sfx-text {
  color: #fffbf0 !important;
  -webkit-text-stroke: 2px #c9960c !important;
}

/* Avatar ring — gold spin */
.light .avatar-ring-spin {
  background: conic-gradient(from 0deg, #c9960c, #e6b800, #f7d060, #c9960c) !important;
}

/* Mobile nav — cream gold */
.light nav[aria-label="Mobile"] {
  background: linear-gradient(90deg, #fffdf5, #fff8e7) !important;
  border-top: 2px solid rgba(201,150,12,0.2) !important;
}

/* Card surfaces */
.light .bg-bg-surface { background: linear-gradient(145deg, #ffffff, #fffcf5) !important; }
.light .bg-bg-elevated { background: linear-gradient(145deg, #fffbf0, #fff3d6) !important; }
`;

c = c + goldStyles;
fs.writeFileSync(p, c);
console.log("Gold premium light theme applied");
