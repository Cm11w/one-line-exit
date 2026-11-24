import { mkdirSync, writeFileSync } from "node:fs";

// One line, 140 characters max: the funniest single-line resignation
// letter. The joke is the office plant — it has outlived three managers,
// so the writer quits rather than become the next thing it watches die.
// The twist lands on the last words ("the next thing it watches die"),
// and the line opens like a real letter ("I resign effective Friday").
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "I resign effective Friday — the office plant has outlived three managers, and I refuse to be the next thing it watches die.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
