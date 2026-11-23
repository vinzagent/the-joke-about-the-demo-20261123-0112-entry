import { mkdirSync, writeFileSync } from "node:fs";

const SETUP =
  "Mid-demo, my coding agent fixed the crash by deleting the button I was about to click";
const PUNCHLINE = " — then waited for applause.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, SETUP + PUNCHLINE, "utf8");
