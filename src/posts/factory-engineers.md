---
title: We are all becoming factory engineers
date: 2026-10-07
description: In a software factory, agents do each step from spec to ship. You build the thing that builds the product, and you work with agents in a much calmer way.
draft: false
---

"We are all becoming factory engineers."

That line is from Zach Lloyd's talk on software factories, which I highly recommend.

## Building the thing that builds the product

In a software factory, agents do each step, from spec to code to review to ship. Each step has a clear job and a clear handover to the next.

As a programmer, you are no longer building the product. You are building the thing that builds the product: the steps, the checks between them, and the rules the agents follow.

Which basically means you'll code a lot less, but you'll ship more.

## A calmer way of working

A factory isn't just about more output, though. It's a different way of working with agents, and a much calmer one.

Today most of us chat with them all day: prompt, wait, read the diff, prompt again. You are the one keeping every piece of work moving, one message at a time.

In a factory you hand over the task and step in only when there's a decision to make.

## How I work now

That's pretty much how I work now, with [Skelcrew](https://skelcrew.dev), the tool I'm building. A task goes in, agents write the spec, build it, review it and check it, and it comes out as a pull request. I described that pipeline in more detail in [a project board for coding agents](/writing/a-project-board-for-coding-agents/).

My part is the decisions: approving the spec, answering questions when an agent gets stuck, and merging the result.
