---
title: A project board for coding agents
date: 2026-09-10
description: I've been hacking on a harness for building software with coding agents. Instead of a chat, it's more like a project board.
draft: false
---

I've been hacking on something in my evenings that I'm pretty excited about.

It's a harness for building software with coding agents, but instead of a chat it's more like a project board.

## How it works

When you have a new feature or a fix you want built, you file it as a card. From there it moves through phases:

1. An agent turns the idea into a spec.
2. You approve it.
3. An agent implements it in its own git worktree.
4. A second one reviews the diff.
5. A third checks every criterion.
6. It lands on your desk as a pull request. You merge.

## Why not chat

Chat-first agents keep the work in a thread. Orchestrators like Conductor run sessions side by side, with you driving each one. Shared boards like Herdr give agents a surface but not a pipeline with gates.

I wanted the async tier: work that's well-defined enough to hand off, advanced by a crew while I'm elsewhere, with finished results queuing for a decision.

## Building it with itself

I'm building it with the exact workflow it implements, using Claude Code skills and subagents as a stand-in for the harness. Soon it'll be far enough along to take over its own development, which is when I'll find out if the idea actually holds.
