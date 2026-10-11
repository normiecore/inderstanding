# Inderstanding

Tools for building your own working philosophy out of your own experiences, then testing it against ordinary days.

Religion, philosophy and astrology give people a vocabulary and a set of questions. The meaning only forms when you hold your own life up against them and notice what fits. Nobody can do that part for you, including an AI. These prototypes lend you other places to stand (other traditions, your future self, the long view, chance) and never tell you what your life means.

## The prototypes

Each is a single HTML file in `apps/`. No build step, no accounts, no network calls beyond Google Fonts. Data stays in your browser's local storage, and each app can export and import its data as JSON.

| Tool | What it does | Rhythm |
|---|---|---|
| [Vantage](apps/vantage/index.html) | Your experiences as stars. Draw and name your own constellations, then shift vantage and watch the figures change | Occasional |
| [Prism](apps/prism/index.html) | One real moment read through many traditions; a resonance map builds from what lands and what you push back on | Weekly |
| [The Question Deck](apps/question-deck/index.html) | A tarot-style ritual where every card is a question from a tradition, never an answer | Daily |
| [Council](apps/council/index.html) | A decision heard by a council of tradition voices and personal seats; your rulings become personal case law | When needed |
| [The Long Way](apps/long-way/index.html) | A 40-day walk, one practice a day from a different tradition, ending in your own Rule of Life | Seasonal |
| [Working Creed](apps/working-creed/index.html) | Your beliefs in your own words, one line each morning as your bearing, tested each evening, revisions kept as strata | Daily |

## Running them

Open `index.html` in a browser, or serve the folder so all apps share one origin:

```sh
npx serve .
```

To use them on your phone, enable GitHub Pages for this repository (Settings, Pages, deploy from the branch that holds these files, root folder) and open the published URL.

Each app opens with example content, clearly marked. Use "Clear examples" in the app to start your own.

## Documents

- [docs/concept.md](docs/concept.md): the problem, the loop the tools sit on, how they'd combine into one product, and where AI should and shouldn't fit.
- [docs/principles.md](docs/principles.md): the rules every tool follows.
- [docs/idea-bank.md](docs/idea-bank.md): further directions, many of them not apps at all.
- [docs/grounding.md](docs/grounding.md): research on meaning-making, the traditions' own tools, existing products, and risks.
