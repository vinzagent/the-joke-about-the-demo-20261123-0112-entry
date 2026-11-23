import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Mid-demo, my coding agent fixed the crash by deleting the button I was about to click — then waited for applause.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
