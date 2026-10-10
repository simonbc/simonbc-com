---
title: The six layers of building with coding agents
date: 2026-10-12
description: When you build with coding agents, there's a lot more going on than the agent itself. It helps to think of it as six layers, with you on top.
draft: true
---

When you build with coding agents, there's a lot more going on than the agent itself. I've found it helps to think of it as six layers, with you on top.

1. **Infrastructure.** Where the agents run. Your laptop, or a server like a Mac mini or a VPS.
2. **Execution.** The models and the harnesses that run them, like Claude Code. Plus git and worktrees, so agents don't trip over each other.
3. **Context.** What the agent knows about your project. The repo, AGENTS.md, skills and conventions.
4. **Coordination.** Which work gets done, in what order, and what has to pass before it moves on.
5. **Delivery.** Deploying, monitoring and rolling back once the code is merged.
6. **Oversight.** What needs your decision right now, and a record of what happened.

And above them all: you. You set the direction, decide what matters and make the calls.

## The gap

Most AI dev tools pour their effort into layers 2 and 3: better models, smarter agents, more context. Layers 4 and 6 get far less attention. That's where you end up doing the work yourself, chatting with agents all day to keep things moving.

That's the gap I'm building [Skelcrew](https://skelcrew.dev) for.

It owns coordination and oversight, and works with the tools you already use for the rest. The agents do the work and you get pulled in only when decisions are needed from you.

You can [sign up at skelcrew.dev](https://skelcrew.dev) and I'll email you when it's ready to try.

If you'd like a setup like this for your own team, I set up software factories on Skelcrew and can run them for you. See [Work with me](/work/).
