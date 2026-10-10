export default {
  headline:
    'I set up <span class="highlight">software factories</span> <span class="nowrap">for small teams.</span>',
  intro:
    "A software factory is a crew of AI coding agents working in parallel and unattended on a server. Each task goes from spec to code to review to ship, and people step in only when there's a decision to make.",
  pitch:
    "I build mine on <a href=\"https://skelcrew.dev\">Skelcrew</a>, my own agent harness, and bring twenty years as a software engineer to the decisions that need a human.",

  paths: [
    {
      id: "factory",
      eyebrow: "Have developers?",
      title: "I set up your factory.",
      summary:
        "A factory around your codebase and your tools. Your developers hand off well defined work and spend their time on the decisions.",
      cta: "See the factory setup",
    },
    {
      id: "build",
      eyebrow: "No developers?",
      title: "I build it for you.",
      summary:
        "You bring the ideas and the taste. I run them through my factory and bring the engineering judgment, and you get software you can use.",
      cta: "See how it works",
    },
  ],

  factory: {
    intro:
      "For teams with developers who want to build with AI coding agents without chatting with them all day. I set up a factory around your codebase and the tools you already use, then hand it over or run it for you.",
    layers: [
      {
        title: "Where agents run",
        text: "A server of your own, so agents keep working unattended while you're elsewhere. Each agent gets its own git worktree, so many of them can work at once without tripping over each other.",
      },
      {
        title: "What agents know",
        text: "An AGENTS.md, skills and conventions written for your codebase, so agents follow your rules from the first task.",
      },
      {
        title: "How work moves",
        text: "A Skelcrew pipeline: spec, build, review and verification, with each step passing before the next. Many tasks move through it at once, and each lands as a pull request.",
      },
      {
        title: "Where tasks come from",
        text: "Tasks come in from the tool you already plan work in. Skelcrew connects to tools through plugins, and if yours doesn't have one yet, I build it as part of the setup.",
      },
    ],
    oversight:
      "Agents ask clear questions instead of pulling someone into a chat. The agents do the work; your developers make the calls.",
    steps: [
      {
        title: "We agree the setup.",
        text: "A 30 minute call to pick the codebase, your tools and a first real task to run through the factory.",
      },
      {
        title: "I build the factory.",
        text: "Over two weeks I set up each layer around your codebase and connect it to your tools.",
      },
      {
        title: "We run real tasks.",
        text: "Your first tasks go through the factory end to end. I tune it where it stumbles.",
      },
      {
        title: "You own it.",
        text: "A written handover of how it works and how to change it. Run it yourself, or have me run it for you.",
      },
    ],
    ownership:
      "Skelcrew will be open source, so you can keep running your factory without me. All code and accounts are yours, and model and server costs go on your own accounts.",
    plans: [
      {
        name: "Factory setup",
        price: "€6,000",
        unit: "fixed, excl. VAT",
        text: "The full factory on one codebase in two weeks, invoiced at the start. We agree the scope in writing before work begins. It ends with real tasks shipped through it and a handover.",
      },
      {
        name: "Running the factory",
        price: "€4,500",
        unit: "per month, excl. VAT",
        text: "I run your factory and bring the human judgment it needs: approving specs, answering the agents' questions, owning the architecture and making sure results hold up. One codebase, with up to three tasks in progress at a time. Pause or cancel from month to month.",
      },
    ],
  },

  build: {
    intro:
      "For design studios, agencies and small companies that know what they want built but have no developers to build it: a product idea, an internal tool you keep wishing for, or a prototype that has outgrown Figma.",
    steps: [
      {
        title: "You send a task.",
        text: "A short description, a mockup, a screen recording: whatever you would give a developer.",
      },
      {
        title: "I scope it.",
        text: "Each task is sized and planned. If something is unclear, I ask a few short questions.",
      },
      {
        title: "Agents build, I lead.",
        text: "The agent crew writes the code. I own the architecture, test the result and make sure it holds up.",
      },
      {
        title: "You get software you can use.",
        text: "Shipped to a preview or live, with a short note on what changed.",
      },
    ],
    ownership:
      "Everything runs async: written updates, no standing meetings. All code and accounts are yours.",
    plans: [
      {
        name: "Start with a two week pilot",
        price: "€4,000",
        unit: "fixed, excl. VAT",
        text: "One clearly scoped piece of software in two weeks, invoiced at the start. We agree the scope in writing before work begins.",
      },
      {
        name: "Then month to month",
        price: "€4,500",
        unit: "per month, excl. VAT",
        text: "If the pilot works for you, continue on a subscription. Send as many tasks as you like; up to three are in progress at a time, and the next starts when one ships. Reprioritise the queue whenever you want. Pause or cancel from month to month.",
      },
    ],
  },

  nextStep:
    "Pick one thing you want built, or one codebase you want a factory for. We spend 30 minutes agreeing the scope, and work starts the following week.",
};
