// warning-label-for-humans
// The safety warning that should come printed on every human: runs on
// caffeine and spite, do not operate before coffee, may start a new hobby
// at 2 a.m. Funny first, plausible second — and entirely accurate.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-160 characters (this label: 109 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "WARNING: This human runs on caffeine and spite. Do not operate before coffee. May start a new hobby at 2 a.m.";

const points = [...text].length;
if (points < 1 || points > 160 || text.trim().length === 0) {
  throw new Error(`entry must be 1-160 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
