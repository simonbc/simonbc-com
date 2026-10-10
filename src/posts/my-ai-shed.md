---
title: My AI shed
date: 2026-10-05
description: I moved my coding agents off my laptop and onto a small server, and it changed how working with them feels.
draft: false
---

This morning I finally got around to building myself an AI shed, as David Heinemeier Hansson calls it: a small server of my own where the agents live and work.

## The setup

It's a small Hetzner server behind Tailscale, with Herdr and [Skelcrew](https://skelcrew.dev) on it.

Tailscale puts the server on a private network with my own devices, so I can reach it from my laptop or my phone without opening it up to the internet. Herdr and Skelcrew run on the server itself, so the agents keep working whether or not I'm connected.

## Closing the lid

Now my agents run there instead of on my laptop. I can close the lid, go for a walk, check in from my phone, and come back to finished tasks.

It has the same sandbox feel that claude.ai gives me, but with terminal access and Skelcrew running the agent workflows.

## A window into the work

It seems like a small thing, but it really changes how working with agents feels. My laptop stops being where everything happens and becomes a window into it.

That fits with what I wrote a few days ago about [optimising for programmer happiness](/writing/optimising-for-programmer-happiness/). When the agents run somewhere else, I'm not tied to a screen to keep the work going. I can step away, and the work is still there when I come back.
