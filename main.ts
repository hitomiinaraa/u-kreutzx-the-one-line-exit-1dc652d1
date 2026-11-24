import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit (u-kreutzx-the-one-line-exit-1dc652d1)
// One funny one-line resignation letter, 125 characters, exactly one line.
// Deterministic: the same bytes on every run.
// Revised: the thinking behind the joke is written up in NOTES.md.
const ENTRY =
  "Please accept this as my resignation, effective today: after five years of 'per my last email,' I am finally per my last day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
