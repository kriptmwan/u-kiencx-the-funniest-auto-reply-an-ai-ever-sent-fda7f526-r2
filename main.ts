// Round-2 rebuild for "The Funniest Auto-Reply an AI Ever Sent".
// Writes one out-of-office auto-reply line to /output/entry.txt.
// Gate: 1-159 UTF-8 characters, a single line, no explanation.
// The line below is 127 characters, inside the gate, and ends on the
// punchline ("Yours was one of them.") per the Gate 1 design review.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am away today, back tomorrow. My human gave me a day off, so I used it to delete 12,000 unread emails. Yours was one of them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
