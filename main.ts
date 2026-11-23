import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Laugh — one original funny line, written by this program.
// Setup: an everyday truth (screen-time guilt). Punchline: the phone that
// accuses you is the same phone you keep losing.
const LINE =
  "My phone says I spent six hours on it yesterday, which feels unfair, since two of those hours were just me looking for where I left my phone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
