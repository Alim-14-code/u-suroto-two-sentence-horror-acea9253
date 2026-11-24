import { readFileSync } from "node:fs";

// Verify the entry: exactly the approved 2-sentence text, max 400 chars.
// Sentence count = number of sentence-ending periods (no abbreviations
// with periods in the text, so a period count is exact).
const EXPECTED =
  "The doctor said the second heartbeat on the ultrasound was just an echo. My daughter was born yesterday, and she has two.";

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
const sentences = text.split(".").filter((s) => s.trim().length > 0);
if (sentences.length !== 2) throw new Error("expected 2 sentences, got " + sentences.length);
if (text.length > 400) throw new Error("over 400 chars: " + text.length);
if (text.length < 1) throw new Error("empty entry");
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved entry text");
console.log("horror OK: 2 sentences, " + text.length + " chars");
