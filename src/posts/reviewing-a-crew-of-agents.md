---
title: Reviewing a crew of agents without reading every diff
date: 2026-10-10
description: When agents work in parallel, the bottleneck is no longer writing code. It's how much a human has to review. Here's the process I'm designing around that.
draft: true
---

When you run a crew of coding agents in parallel, writing code stops being the bottleneck. Agents can work on many tasks at once, unattended. I can't. Every spec, question and pull request that needs my judgment goes through one person with one pair of eyes.

So the question I keep coming back to is: how do you design a way of working where human review is the only scarce resource, and you spend it where it matters most?

This is the process I'm building into Skelcrew and into the way I work with clients. It's still taking shape, but the principles have become clear.

## Review intent, not code

The cheapest place to catch a mistake is the spec. A wrong spec costs a whole build cycle. A wrong line of code costs a fix.

So I want to spend my hardest thinking before anything is built: reading the spec, and approving the acceptance criteria and tests along with it. Once I've agreed what "done" means, a passing run tells me the code meets it. I don't need to read every line to know that.

My [agent skills experiment](/writing/do-agent-skills-matter/) pointed the same way. All three agents tripped over the same gaps in my design, and some of the "bugs" were really spec problems. More review at the start means less at the end.

## Let machines check first

A finished task shouldn't reach me as a bare diff. It should arrive with evidence:

- what changed, in a few sentences
- which acceptance criteria passed, and how each was checked
- screenshots or a short recording from a preview, for anything visible
- risk flags: new dependencies, schema changes, auth, payments, deleted code
- anything the reviewing agent was unsure about

Reading that should take a couple of minutes. I open the diff when something in it tells me to, not by default.

## Not everything needs the same review

Some changes are low risk: copy, styling, an isolated bit of UI. Those can merge once the checks pass, with me looking at a sample afterwards. Features that follow existing patterns get a read of the evidence and a skim of the diff. Changes to the data model, auth, payments or architecture get a full review, ideally before the build even starts.

Agents suggest a risk level when they write the spec, and I confirm it when I approve. It isn't fixed either. As a part of the codebase proves reliable, more of it can move to the lighter end.

## Design the code for review

On a greenfield project, part of the work is shaping the code so review has somewhere to focus. I want a small core that gets careful review: the data model, auth, the rules of the business, and the interfaces everything else uses. Around it go slices: features that build on the core and talk to each other through those interfaces.

The core changes rarely and gets my full attention. The slices change all the time. Because a slice can only reach the rest of the system through interfaces I've reviewed, a mistake in one stays in that slice.

That makes slices safe to hand to agents with light review. It even makes them safe for the non-developers on a team to vibe code: they can describe a new screen or a change to a workflow, let an agent build it, and check the result themselves, without being able to break what everything else depends on.

It also makes the risk levels almost automatic. A change inside a slice is low risk. A change to the core is high risk, whoever asks for it.

## Batch the attention

Being pulled into a conversation every time an agent has a question is what makes this work [so draining](/writing/thrilling-and-draining/). So questions and finished work should queue up, and I go through them at set times instead of being interrupted all day.

When an agent needs a decision, it asks a clear question with options and a recommendation. Answering that takes seconds. An open question takes a conversation.

The queue should be sorted by what unblocks the most work, not by what arrived first.

## Never review the same thing twice

Every correction I make should go back into the factory: into AGENTS.md, a skill or a check, so the same mistake doesn't come back. Review time on a codebase should go down over time. If it doesn't, the factory isn't learning, and that's the thing to fix.

## Working with clients

I don't have a fixed process for client work yet, and I expect it to differ from project to project. But a rough shape keeps showing up: a burst of review at the start, while goals are turned into specs and acceptance criteria, then long stretches where agents build unattended and I work through the queue, and finally the client checking the result on a preview against what we agreed.

Whatever the shape, one rule seems right: how much work is in progress at once should be set by how much I can review, not by how many agents can run. If the queue grows faster than I can clear it, the agents slow down, not me.

## Measuring it

The number I want to watch is review minutes per task, split into time spent on specs and time spent on results. It tells me which rules to loosen, which codebases need better context, and how much work I can take on without the quality slipping.

I'll write more as I learn what actually holds up in practice. If you're running agents in parallel too, I'd like to hear how you handle review.
