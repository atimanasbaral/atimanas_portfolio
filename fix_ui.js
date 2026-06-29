const fs = require("fs");
const p = "D:/atimanas_portfolio/app/page.tsx";
let c = fs.readFileSync(p, "utf8");

// Hide replay intro button in production - make it invisible but keep functionality
c = c.replace(
  'className="text-xs" style={{ color: "var(--color-text-faint)" }}',
  'className="text-xs opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ color: "var(--color-text-faint)" }}'
);

fs.writeFileSync(p, c);
console.log("Replay intro button hidden");
