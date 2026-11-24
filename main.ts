// Two Days of Quiet Dread — one code review comment approving a PR
// with quiet existential dread. The program writes the comment to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR) and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Approved. All checks are green, which is exactly what the last three incidents said right before they happened.";

// The gate allows 1 to 140 characters of UTF-8 text; refuse to write
// anything outside that range instead of shipping an invalid entry.
if (line.length < 1 || line.length > 140) {
  throw new Error(`review comment must be 1-140 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
