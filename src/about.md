---
layout: page.njk
title: About
permalink: /about/
---

I'm Simon Carstensen. I'm building [Skel](https://skel.run) as a startup, and I've been building software for twenty years. I live in Denmark.

## Where I come from

I started out in Y Combinator's first batch in 2005, co-founding Infogami with Aaron Swartz, and in 2007 we built the original Jottit together. Since then I've worked as a full stack developer in JavaScript and Python, from early products to the core of an ERP system at TRAEDE, where orders, invoices and credit notes had to come out right every time.

That background shapes how I work with agents. They write code fast, but someone still has to decide what to build, keep the architecture sound and know when the result holds up.

## What I do now

In recent years my focus has been using AI in the development process: agentic coding tools, MCP servers, and my own agent harness. That harness has become [Skel](https://skel.run), which I now work on full time as a startup, with open source at its heart. I'm looking for developers and teams to work closely with, and a co-founder for the business side.

I write about what I learn, from [whether agent skills matter](/writing/do-agent-skills-matter/) to [why we're all becoming factory engineers](/writing/factory-engineers/).

Email: [{{ site.email }}](mailto:{{ site.email }}){% for profile in site.profiles %} · [{{ profile.name }}]({{ profile.url }}){% endfor %}
