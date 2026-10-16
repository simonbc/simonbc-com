export default {
  headline:
    'I set up <span class="highlight">AI coding agents</span> <span class="nowrap">for small teams.</span>',
  intro:
    "I call the setup a software factory: a crew of agents working in parallel and unattended on a server. Each task goes from spec to code to review to ship, and people step in only when there's a decision to make.",
  pitch:
    "I build mine on <a href=\"https://skelcrew.dev\">Skelcrew</a>, my own agent harness, and bring twenty years as a software engineer to the decisions that need a human.",

  factory: {
    intro:
      "For teams with developers who want to build with AI coding agents without chatting with them all day. I set up a factory around your codebase and the tools you already use, and we start building with it right away. From there I pair with your developers until they run it themselves, or I stay on and run it for you, whichever suits you.",
    layers: [
      {
        title: "Where agents run",
        text: "A server of your own, so agents keep working unattended while you're elsewhere. Each agent gets its own git worktree, so many of them can work at once without tripping over each other.",
      },
      {
        title: "What agents know",
        text: "An AGENTS.md, skills and conventions written for your codebase, plus connections to where your specs, docs and test plans live, so agents follow your rules and work from the same sources your developers do.",
      },
      {
        title: "How work moves",
        text: "A Skelcrew pipeline: spec, build, review and verification, with each step passing before the next. Many tasks move through it at once, and each lands as a pull request that links back to its task and spec and runs through your CI, so every change stays reviewed and traceable.",
      },
      {
        title: "Where tasks come from",
        text: "Tasks come in from the tool you already plan work in. Skelcrew connects to tools through plugins, and if yours doesn't have one yet, I build it as part of the setup.",
      },
      {
        title: "Boundaries agents can work in",
        text: "Clear module boundaries with tests around them, so an agent can change one part without reaching into the rest. Where they're missing, we start with the parts of the codebase you touch most.",
      },
      {
        title: "Cost and control",
        text: "Usage and cost tracked per task, and a say in which models run where and what code leaves your network, with self-hosted models where you need them.",
      },
    ],
    oversight:
      "Agents ask clear questions instead of pulling someone into a chat. The agents do the work; your developers make the calls.",
    ownership:
      "Skelcrew will be open source, so you can keep running your factory without me. All code and accounts are yours, and model and server costs go on your own accounts.",
  },

  nextStep:
    "Pick one codebase you want a factory for. We spend 30 minutes agreeing the scope, and work starts the following week.",
};
