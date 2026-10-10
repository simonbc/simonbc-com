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
      "For teams with developers who want to build with AI coding agents without chatting with them all day. I set up a factory around your codebase and the tools you already use, and we start building with it right away. From there your developers take over, or I stay on and run it for you, whichever suits you.",
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
        text: "Two week sprints on one codebase. Your team sets the goals for each sprint; I run the factory and bring the human judgment it needs: approving specs, answering the agents' questions, owning the architecture and making sure results hold up. Pause or cancel between sprints.",
      },
    ],
  },

  build: {
    intro:
      "For design studios, agencies and small companies that know what they want built but have no developers to build it: a product idea, an internal tool you keep wishing for, or a prototype that has outgrown Figma.",
    how:
      "You send tasks the way you would to a developer: a short description, a mockup, a screen recording. I set up a factory for your project and start building it, owning the architecture and making sure the result holds up. Later, developers of your own can take over, or I can stay on as your developer for as long as you need.",
    ownership:
      "Everything runs async: written updates, no standing meetings. All code and accounts are yours.",
    plans: [
      {
        name: "Start with a two week pilot",
        price: "€4,000",
        unit: "fixed, excl. VAT",
        text: "Your first sprint: one clearly scoped piece of software in two weeks, invoiced at the start. We agree the goals in writing before work begins.",
      },
      {
        name: "Then sprint by sprint",
        price: "€4,500",
        unit: "per month, excl. VAT",
        text: "If the pilot works for you, continue with two sprints a month. At the start of each sprint we agree in writing what it should deliver, and at the end you get shipped software with a short note on what changed. Reprioritise within a sprint whenever you want. Pause or cancel between sprints.",
      },
    ],
  },

  nextStep:
    "Pick one thing you want built, or one codebase you want a factory for. We spend 30 minutes agreeing the scope, and work starts the following week.",
};
