const fs = require("fs");
const p = "D:/atimanas_portfolio/app/page.tsx";
let c = fs.readFileSync(p, "utf8");

// Add light-lake-bg class to hero section
c = c.replace(
  'className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient"',
  'className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient light-lake-bg"'
);

// Add light-jungle-bg class to My Story section
c = c.replace(
  'className="grid gap-6 px-6 py-10 md:grid-cols-[260px_1fr] md:px-12"',
  'className="grid gap-6 px-6 py-10 md:grid-cols-[260px_1fr] md:px-12 light-jungle-bg"'
);

fs.writeFileSync(p, c);
console.log("Hero and Story sections patched with light bg classes");
