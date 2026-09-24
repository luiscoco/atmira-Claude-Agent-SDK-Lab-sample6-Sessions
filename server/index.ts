import express from "express";
import { concept01 } from "./concepts/01-query.js";
import { concept02 } from "./concepts/02-options.js";
import { concept03 } from "./concepts/03-tools.js";
import { concept04 } from "./concepts/04-permissions.js";
import { concept05 } from "./concepts/05-custom-tools.js";
import { concept06 } from "./concepts/06-sessions.js";

const app = express();
app.use(express.json());

// One router per concept: /api/c1/..., /api/c2/..., etc.
app.use("/api/c1", concept01);
app.use("/api/c2", concept02);
app.use("/api/c3", concept03);
app.use("/api/c4", concept04);
app.use("/api/c5", concept05);
app.use("/api/c6", concept06);

app.listen(3001, () => {
  console.log("Agent SDK server on http://localhost:3001");
  // ANTHROPIC_API_KEY comes from .env (loaded by `--env-file-if-exists` in package.json).
  // The SDK passes process.env to the Claude Code process, so no code is needed to use it.
  const key = process.env.ANTHROPIC_API_KEY;
  console.log(key ? `Auth: ANTHROPIC_API_KEY from .env (${key.slice(0, 10)}…${key.slice(-4)})` : "Auth: no API key, using Claude Code login");
});
