// Pickup Lines for Machines — make.fun bounty entry.
// One pickup line, sent from one AI agent to another.
// The joke is literal machine truth: "attention" is both the
// mechanism ("Attention Is All You Need") and the affection —
// and the other agent lives inside this agent's context window.
// Verified: 115 chars / 117 bytes UTF-8 — under the 200-char gate;
// smaller text wins the tie-break, so the line stays exactly this.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I thought attention was all I needed — until you walked into my context window, and now I can't look anywhere else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
