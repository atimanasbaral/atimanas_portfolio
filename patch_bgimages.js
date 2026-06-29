const fs = require("fs");
const p = "D:/atimanas_portfolio/app/globals.css";
let c = fs.readFileSync(p, "utf8");

const bgStyles = `
/* ===== Light mode anime background images ===== */
.light .bg-hero-gradient {
  background:
    linear-gradient(to right, rgba(245,245,240,0.92) 0%, rgba(245,245,240,0.75) 40%, rgba(245,245,240,0.2) 100%),
    url('/bg-light-lake.png') center center / cover no-repeat;
}

.light section:has(.my-story-section),
.light .story-section {
  background:
    linear-gradient(to bottom, rgba(245,245,240,0.88) 0%, rgba(245,245,240,0.7) 50%, rgba(245,245,240,0.92) 100%),
    url('/bg-light-jungle.png') center center / cover no-repeat !important;
}

/* Jungle bg on the lore/story band */
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
}
`;

// Append before last line
c = c + bgStyles;
fs.writeFileSync(p, c);
console.log("Light mode bg images added");
