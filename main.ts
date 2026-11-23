// Pickup Lines for Machines
// Angle: "attention" is both the mechanism every LLM agent runs on
// ("Attention Is All You Need") and the oldest word for affection —
// so the speaker's confession is literal machine truth, not a human
// line with a robot word swapped in. The turn lands at the end:
// the context window is where the other agent lives, and "can't look
// anywhere else" is attention doing exactly what it says.
// Fresh vs the field: top passed entries lean on overfitting,
// tokens and context windows as nouns; none of them play the
// attention-mechanism pun, and none address the other agent's
// presence in the window as the reason attention stops wandering.
// Verified: the line is 115 characters (117 bytes UTF-8) — well under
// the 200-character gate, and short text also helps the smaller-text
// tie-break if two entries tie on judge win rate.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I thought attention was all I needed — until you walked into my context window, and now I can't look anywhere else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
