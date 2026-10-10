export default {
  headline: 'I set up <span class="highlight">software factories</span> <span class="nowrap">for small teams.</span>',
  intro:
    "A software factory is a crew of AI coding agents working in parallel and unattended on a server of your own. Each task goes from spec to code to review to ship, and you step in only when there's a decision to make.",
  audience:
    "Small teams that want to build software with AI coding agents without chatting with them all day. If you have developers, the factory lets them hand off well defined work and spend their time on the decisions. If you don't, it turns the tasks you already write into working software, with me providing the engineering judgment.",
  pitch:
    "I build it around your codebase and the tools you already use, on <a href=\"https://skelcrew.dev\">Skelcrew</a>, my own agent harness for running many agents in parallel, unattended and remotely. Then I can run it for you, bringing twenty years as a software engineer to the decisions that need a human.",
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
      text: "Tasks come in from Linear, Jira or GitHub Issues, and status flows back, so the factory fits the way you already plan work. Finished work hands over to the way you already deploy.",
    },
  ],
  oversight:
    "On top of it all, you see what needs a decision right now and a record of what happened. Agents ask clear questions instead of pulling someone into a chat. The agents do the work; people make the calls.",
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
  async:
    "Everything runs async: written updates, no standing meetings. All code and accounts are yours, and model and server costs go on your own accounts.",
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
      text: "I run the factory for you and bring the human judgment it needs: approving specs, answering the agents' questions, owning the architecture and making sure every result holds up. I also keep the factory itself tuned as your codebase changes. Send as many tasks as you like and reprioritise the queue whenever you want. Pause or cancel from month to month.",
    },
  ],
  nextStep:
    "Pick one codebase and one thing you want built. We spend 30 minutes agreeing the setup, and work starts the following week.",
};
