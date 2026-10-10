---
title: Do agent skills matter?
date: 2026-10-09
description: I had three coding agents build the same core of Skelcrew with and without skills. Skills helped, but a plain AGENTS.md mattered almost as much and cost nothing.
draft: false
---

I ran a quick test to find out. The short answer is yes, but a plain AGENTS.md matters almost as much, and it costs nothing.

## The experiment

I'm building the fourth version of Skelcrew, a tool that runs coding agents unattended. When it was time to build the core, the part that decides what agents are allowed to do, I stopped to run a small experiment.

Three agents, all Claude Opus 5.5 in Claude Code, built the same core from the same design docs, with no human in the loop. Each got a different setup:

1. **AGENTS.md and skills.** The AGENTS.md is the file of project rules every agent reads first. On top of it, this agent had three short skills: write the spec, write the code, review it. It looped through them one part at a time.
2. **AGENTS.md only.**
3. **Nothing.** No AGENTS.md and no skills.

## The results

| Setup | Bugs | Time |
|---|---|---|
| AGENTS.md and skills | about 3 | 117 minutes |
| AGENTS.md only | about 6 | 70 minutes |
| Nothing | about 8 | 70 minutes |

The agent with nothing also skipped writing tests first, and it threw errors where my AGENTS.md says not to.

## What I took away

**An AGENTS.md is the cheapest gain you can get.** It's one file, and every agent reads it.

**Skills halved the bugs, but they weren't free.** The skills run took about 1.7 times as long (117 minutes against 70) and cost twice as much.

**The gain came from reviewing each part as it was built, not from writing more tests.** The skills agent wrote more tests, but they weren't much better at catching mistakes.

**Some bugs were really spec problems.** All three agents tripped over the same gaps in my design.

## Next

I did just one run per setup, so treat this as a signal, not solid proof. Next I'll try the same setup in Rust, to see if the language changes anything.
