---
layout: page.njk
title: About
permalink: /about/
---

I'm Simon Carstensen. I help small teams build software with AI coding agents, and I've been building software myself for twenty years.

## Where I come from

I started out in Y Combinator's first batch in 2005, co-founding Infogami with Aaron Swartz, and in 2007 we built the original Jottit together. Since then I've worked as a full stack developer in JavaScript and Python, from early products to the core of an ERP system at TRAEDE, where orders, invoices and credit notes had to come out right every time.

That background is what I bring to working with agents. They write code fast, but someone still has to decide what to build, keep the architecture sound and know when the result holds up. That's the part I've been doing for twenty years.

## What I do now

In recent years my focus has been using AI in the development process: agentic coding tools, MCP servers, and my own agent harness, [Skelcrew](https://skelcrew.dev). I use it to build my own projects, Skelcrew included, with agents on a small server working in parallel and unattended. I write about what I learn, from [whether agent skills matter](/writing/do-agent-skills-matter/) to [why we're all becoming factory engineers](/writing/factory-engineers/).

## How I work with you

I'm a hands-on engineer, not a consultant with a slide deck. I set up a software factory around your codebase and the tools you already use, ship real work through it with your developers, and stay until your team runs it themselves, or keep running it for you. I'm based in Denmark. See [Work with me](/work/) for what's included.

Email: [{{ site.email }}](mailto:{{ site.email }}){% for profile in site.profiles %} · [{{ profile.name }}]({{ profile.url }}){% endfor %}
