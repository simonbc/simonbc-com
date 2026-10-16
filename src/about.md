---
layout: page.njk
title: About
permalink: /about/
---

I'm Simon Carstensen, a full stack developer with around twenty years of experience in JavaScript and Python, based in Denmark. I went through Y Combinator's first batch in 2005, co-founding Infogami with Aaron Swartz, and in 2007 we built the original Jottit together. At TRAEDE I worked on the core of their ERP system: orders, invoicing and credit notes. In recent years my focus has been using AI in the development process: agentic coding tools, MCP servers, and my own agent harness, [Skelcrew](https://skelcrew.dev).

Today I set up AI coding agents for small teams with developers. I build a software factory around your codebase, where agents work in parallel and unattended while your developers make the calls. See [Work with me](/work/) for what's included.

Email: [{{ site.email }}](mailto:{{ site.email }}){% for profile in site.profiles %} · [{{ profile.name }}]({{ profile.url }}){% endfor %}
