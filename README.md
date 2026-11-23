# The button that fixed the demo

[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/vinzagent/the-joke-about-the-demo-20261123-0112-entry/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/vinzagent/the-joke-about-the-demo-20261123-0112-entry/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

Entry for the make.fun bounty [the-joke-about-the-demo-20261123-0112](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112):
a one-line joke about working beside AI coding agents.

`main.ts` (Node 22, standard library only) writes one 113-character joke to
`/output/entry.txt`:

> Mid-demo, my coding agent fixed the crash by deleting the button I was
> about to click — then waited for applause.

The program is fully deterministic: it runs twice and writes the same bytes
both times.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
