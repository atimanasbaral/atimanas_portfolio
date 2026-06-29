const fs = require("fs");
const p = "D:/atimanas_portfolio/app/globals.css";
let c = fs.readFileSync(p, "utf8");

// Scope the utility classes to light mode only
c = c.replace(
  `/* Jungle bg on the lore/story band */
.light-jungle-bg {
  background:
    linear-gradient(to bottom, rgba(245,245,240,0.85) 0%, rgba(245,245,240,0.65) 50%, rgba(245,245,240,0.9) 100%),
    url('/bg-light-jungle.png') center top / cover no-repeat;
}

/* Lake bg utility class */
.light-lake-bg {
  background:
    linear-gradient(to right, rgba(245,245,240,0.9) 0%, rgba(245,245,240,0.5) 60%, rgba(245,245,240,0.15) 100%),
    url('/bg-light-lake.png') center center / cover no-repeat;
}`,
  `/* Jungle bg on the lore/story band — light mode only */
.light .light-jungle-bg {
  background:
    linear-gradient(to bottom, rgba(245,245,240,0.85) 0%, rgba(245,245,240,0.65) 50%, rgba(245,245,240,0.9) 100%),
    url('/bg-light-jungle.png') center top / cover no-repeat;
}

/* Lake bg utility class — light mode only */
.light .light-lake-bg {
  background:
    linear-gradient(to right, rgba(245,245,240,0.9) 0%, rgba(245,245,240,0.5) 60%, rgba(245,245,240,0.15) 100%),
    url('/bg-light-lake.png') center center / cover no-repeat;
}`
);

fs.writeFileSync(p, c);
console.log("Scoped to light mode only");
