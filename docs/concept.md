# Inderstanding: concept

## The problem

People have always used frameworks to make sense of what happens to them: a religion, a philosophy, astrology, tarot, a therapist's model. The framework offers a vocabulary and a set of questions. The meaning itself only forms when a person holds their own experiences up against it, over time, and notices what fits.

That last part can't be outsourced. An AI can explain Daoism well. It can't tell you whether Daoism is true to your life, because it hasn't lived your life and you haven't yet tested Daoism against it.

The common failure is that people get one framework handed to them early (often a religion), it either fits or it doesn't, and if it doesn't they're left with nothing structured. Someone raised Christian who never felt it may have only ever seen one door into a large house. Or a different house may suit them better. Either way, they can only see from where they stand.

## What Inderstanding is

A set of tools that help a person build their own working philosophy out of their own experiences, by lending them other vantage points (traditions, time, other people, chance, distance), and then keep that philosophy honest by testing it against daily life.

It gives frameworks, questions, time and mirrors. It never gives conclusions.

## The loop

Every tool sits somewhere on one cycle. It closely follows Kolb's experiential learning cycle (experience, reflection, conceptualisation, experimentation), which is a useful reminder that skipping any stage produces opinions rather than understanding.

1. **Gather.** Collect the raw material: moments from your life that mattered, with how they felt. Without this, everything else is abstract.
2. **Look from elsewhere.** See that material from vantage points you can't reach alone: other traditions, your future self, the person affected by your choice, a random question, the long view.
3. **Try it in the world.** Practise a tradition's habits in an ordinary day and notice what moves you. Reading about wu wei and trying it for a day are different kinds of knowledge.
4. **State it and test it.** Write down what you've come to believe, in your own words, and check each day whether you lived it. What happens becomes new material for step 1.

## What "seeing from the 5th dimension" means in practice

You can't literally step outside your own life. You can approximate it in a handful of ways, and each tool uses one or more:

| Vantage | What it gives you | Where it shows up |
|---|---|---|
| Other traditions | Questions and frames your upbringing never offered | Prism, Council, Question Deck, The Long Way |
| Time | Patterns that only show across years, and your past and future selves | Vantage, Working Creed (strata), Council (review dates) |
| Aggregation | Things that are invisible in one moment but obvious across fifty | Prism resonance map, Vantage observations |
| Distance | Seeing yourself in the third person, or from above | Vantage "view from above", Council's personal seats |
| Other people | What people who know you can see that you can't | Council (person affected), idea bank (clearness circles) |
| Chance | Knocking you out of your habitual line of thought | Question Deck |

This also lines up with Robert Kegan's subject-object idea: what you're embedded in, you can't see; growth is when it becomes something you can look at. See [grounding.md](grounding.md).

## The six prototypes

All six are in `apps/`, each a single HTML file that runs offline in a browser and stores data only on your device.

| Tool | Loop stage | Interaction | Rhythm |
|---|---|---|---|
| **Vantage** | Gather | Your experiences are stars. You draw and name your own constellations, then shift vantage and watch the figures stretch or break | Occasional |
| **Prism** | Look from elsewhere | One real moment, read through 18+ traditions and strands. You mark what lands and what you push back on. A resonance map builds from evidence | Weekly |
| **The Question Deck** | Look from elsewhere | A tarot-like ritual where every card is a question from a tradition, never an answer. Your answers become a book you wrote | Daily |
| **Council** | Look from elsewhere, then state | Bring a real decision to a table of tradition voices and personal seats. You rule as chair, and rulings become personal case law with precedent | When a decision comes up |
| **The Long Way** | Try it in the world | A 40-day walk, one practice per day from a tradition, done in your actual day. Ends in a Rule of Life you write | Seasonal |
| **Working Creed** | State it and test it | A few lines in your own words, one surfaced each morning as your bearing, checked each evening. Revisions kept as strata | Daily |

## How they'd combine into one product

The six are deliberately separate so each idea can be judged on its own. Combined, they'd share one unit of data, the **moment**, and pass things between each other:

- A moment logged in Vantage can be sent through Prism.
- A moment that contains a choice can go to Council.
- Prism's resonance map decides which traditions The Long Way draws from first.
- The Long Way's Rule of Life and Council's principles become candidate lines for the Working Creed.
- A Working Creed line that keeps drifting becomes a moment worth looking at in Prism or Council.

A plausible shape for daily use:

- **Each morning (30 seconds):** today's bearing from your creed, optionally one drawn question.
- **Each evening (1 minute):** did the bearing hold; answer the question in a line.
- **Weekly (10 minutes):** one moment through Prism, or a Council hearing if something is pending.
- **Seasonally:** a 40-day walk.
- **Yearly:** read your strata and your casebook. See what changed.

Most of the time it's a short ritual. The heavier tools are rooms you go into when life hands you material.

## Where AI fits, and where it doesn't

The prototypes use no AI on purpose: they show the structure works without it. If AI were added, these are the lines:

**Useful roles**
- Asking a better follow-up question when an answer is thin.
- Reflecting patterns back with direct citations to the user's own words ("You used the word 'trapped' in four entries, all about work").
- Voicing a tradition's perspective in Council or Prism, clearly labelled, with sources, and checked for accuracy.
- Noticing when reflection has turned into rumination and suggesting a different mode (go do a practice, close the app).

**Off limits**
- Telling the user what an experience means.
- Recommending a religion or philosophy.
- Writing creed lines or rulings for the user.
- Becoming a companion the user depends on.

**One rule:** nothing an AI writes enters the user's record unless the user rewrites it in their own words.

## What the research adds

[grounding.md](grounding.md) sharpened a few things the prototypes only partly do yet:

- **Experiments over entries.** The strongest unit is a lens held as a hypothesis for a set period, with a daily practice and one act toward another person, then reviewed against what happened. The Long Way and Working Creed are closest to this; a combined product should make it the default shape.
- **Distance, kept concrete.** Third-person writing, advice to a friend in your position, the ten-year view. Asking "what" and "how" rather than "why" keeps reflection from sliding into rumination.
- **Start where the inherited tradition didn't fit.** Ask for the specific moments your own tradition failed to explain. Returning to it with new eyes, switching and combining are all valid outcomes.
- **Safety.** People reach for meaning at their worst moments. A real product needs a fixed, non-AI crisis screen with helplines, should state plainly that it isn't therapy, and should never prescribe fasting, isolation or intense practices. The prototypes don't include this yet.

## Decisions for you

- **One app or a family of small tools?** A single app is easier to keep using. Separate tools are easier to understand and to build.
- **Solo or social?** Several of the strongest ideas involve other people (see the clearness circle idea in [idea-bank.md](idea-bank.md)). That brings privacy and safety work with it.
- **AI or not?** Possible with the rules above, but the product stands without it, and "no AI reads your inner life" is a real selling point.
- **Business model.** A product like this should be judged by whether people eventually need it less. That conflicts with engagement-driven models. Worth deciding early.

## Suggested next step

Use them yourself for two weeks before choosing. Working Creed and the Question Deck daily, Prism once or twice a week, Council when a real decision comes up, and start The Long Way if one of the others makes you curious about a tradition. Notice which ones you go back to without being reminded.

## Other documents

- [principles.md](principles.md): the rules every tool follows.
- [idea-bank.md](idea-bank.md): 30+ further directions, including ones that aren't apps at all.
- [grounding.md](grounding.md): the research, the traditions' own tools, existing products, and risks.
