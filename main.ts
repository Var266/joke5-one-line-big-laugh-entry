// One Line, Big Laugh — make.fun entry
// Writes a single original one-liner (82 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I told my therapist I hear voices; she billed the loudest one as a second patient.";

// Guard the gate: the entry must be 1-200 characters, no trailing newline
// so the file holds exactly the joke and nothing else.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
