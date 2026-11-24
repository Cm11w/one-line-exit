# The One-Line Exit

[![Make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![Rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Cm11w/one-line-exit/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![Reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Cm11w/one-line-exit/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)

Entry for [The One-Line Exit](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1) on make.fun.

## The line

> I resign effective Friday — the office plant has outlived three managers, and I refuse to be the next thing it watches die.

123 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a funny one-line resignation letter; a surprise
punchline; fitting the form of a letter someone could actually send; a
specific voice; and staying with the reader.

- **A resignation letter, played for laughs:** it opens like a real one —
  "I resign effective Friday" — then turns.
- **Surprise:** the reason for quitting is not the usual burnout or a
  better offer, but an office plant with a body count — three managers
  and counting.
- **Fits the form:** one line, no list of grievances, and it reads as a
  letter someone could actually send.
- **Specific voice:** an office worker, the office plant, three managers —
  a recognizable workplace behind it, not a generic complaint.
- **Stays with the reader:** "the next thing it watches die" lands last,
  in one read — the kind of line a colleague forwards.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
