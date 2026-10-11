# Grounding

This document gives Inderstanding a factual base: research on how people make meaning, the tools traditions already built for it, existing products, the main risks, and five design implications. Sources are listed at the end; links were checked in October 2026. Where a current product detail could not be verified, it is described in general terms.

## The premise, tested

The brief says understanding of your own life can't be outsourced. A framework can be borrowed, but meaning forms only when you test it against what happened to you, over time, and act on it. The research mostly supports this, with two qualifications that should shape the product:

1. **Reflection is not automatically good for people.** Some forms of it are rumination and make people feel worse.
2. **People reason less wisely about their own problems than about other people's.** "Doing your own work" therefore needs deliberate ways of stepping outside your own vantage point. The brief's "5th or 10th dimension" intuition describes this accurately, and there is research on it.

The audience is large. Pew Research Center (2023, 11,201 US adults) found that 7 in 10 Americans describe themselves as spiritual in some way, including 22% who are spiritual but not religious. Many, like the person in the brief, were raised in a tradition that didn't fit and have no structured way to work out what does.

---

## 1. What research says about making meaning

### Kolb's experiential learning cycle

Kolb (*Experiential Learning*, 1984) described learning as a cycle: concrete experience, reflection, abstract conceptualisation, then active experimentation that produces new experience. Skip the experience and there is nothing to reflect on; skip the experiment and the abstraction is never tested. The "learning styles" inventory built on the model has weak support (Pashler and colleagues, 2008), so treat the cycle as a description, not a proven mechanism.

**Design implication:** Journaling apps stop at reflection and religious apps start at abstraction. Run the whole loop: what happened, how you saw it, how a lens reads it, what you tried, what changed.

### McAdams: narrative identity

McAdams describes narrative identity as the internal story that links a person's past to their imagined future. In a *redemption* sequence a bad scene turns good; in a *contamination* sequence a good scene turns bad. McAdams and colleagues (2001) linked redemption sequences to higher well-being, and contamination sequences to lower well-being in midlife adults. Two complications. McAdams' own book title, *The Redemptive Self: Stories Americans Live By* (2006), marks the redemption plot as culturally specific. And Frazier and colleagues (2009) found that people's reports of growing after trauma were largely unrelated to measured change.

**Design implication:** Help people notice the plots they already use, offer other plots from other traditions (tragic, cyclical, "maybe good, maybe bad"), and never push a silver lining.

### Meaning in life: presence, search, and what meaning is made of

Steger and colleagues (2006) separated the *presence* of meaning from the *search* for it. In US samples, searching tends to go with lower well-being, but in a Japanese sample the two were positively related (Steger, Kawabata, Shimai and Otake, 2008), so searching is not in itself a sign of lack. Martela and Steger (2016) split meaning into *coherence* (life makes sense), *purpose* (direction) and *significance* (life matters). Kim and colleagues (2022) added *experiential appreciation*: valuing experiences for themselves.

**Design implication:** The brief covers all of these. Explaining life events is coherence, guiding how you show up is purpose, and contributing to society is significance. Let users judge each lens against each one, and don't treat "still searching" as a problem.

### Park: when events don't fit your framework

Park (2010) distinguishes *global meaning* (general beliefs, goals and sense of purpose) from *situational meaning* (how you read a specific event). Distress comes from the gap between them, and people close it either by reappraising the event or by revising their beliefs. This describes the brief's own example closely: an inherited Christian framework that never fit the life it was meant to explain.

**Design implication:** Moments where an inherited framework didn't fit are the most useful material the app can collect. Ask for them, and treat them as evidence rather than failure.

### Frankl: logotherapy

Frankl (*Man's Search for Meaning*, first published in German in 1946) argued that meaning is found rather than invented, that it is specific to the person and the moment, and that it comes through what we create or do, what we experience or whom we meet, and the attitude we take to suffering we can't avoid. Logotherapy has a modest evidence base, but Meaning-Centered Psychotherapy, which William Breitbart developed from it for people with advanced cancer, has been tested in randomised trials since 2010.

**Design implication:** "The meaning of the moment" suits daily use better than a search for one grand answer. Frankl's three routes make a good evening question set.

### Kegan: subject and object

Kegan (*The Evolving Self*, 1982; *In Over Our Heads*, 1994) distinguishes what you are *subject to* (assumptions you see through, and so can't examine) from what is *object* (what you can look at and take responsibility for). Development moves things from subject to object: from a *socialized* mind, where meaning is supplied by your group, to a *self-authoring* mind with its own system for weighing those inputs, to a rarer *self-transforming* mind that sees the limits of any single system, including its own. This is the brief's "5th dimension", with a warning attached: swapping Christianity for Daoism without that shift only changes which authority you defer to. Kegan and Lahey's *Immunity to Change* (2009) is directly usable: name a commitment, what you do against it, the competing commitment, and the "big assumption" underneath, then test that assumption with small, safe experiments. Complications: stage is normally assessed with a trained interview (the Subject-Object Interview), and stage talk easily becomes a status ladder.

**Design implication:** Build exercises that move one assumption from subject to object ("What were you taking for granted?") and test it in behaviour. Never assess or display a user's stage.

### Fowler: stages of faith

Fowler (*Stages of Faith*, 1981) defined faith as a way of making meaning, religious or not. The brief describes the move from *synthetic-conventional* faith (the shared view of one's group) to *individuative-reflective* faith (examining that inheritance). A later *conjunctive* stage returns to symbols with an appreciation of paradox and of other traditions. Critics point to little evidence for a fixed sequence, mostly North American Christian samples, and a Western ideal of individual reflection presented as maturity. Streib (from 2001) recast the stages as *religious styles* that people move between and return to.

**Design implication:** Don't build a ladder. Returning to a childhood tradition with new eyes is as legitimate an outcome as switching or combining, and the brief's own phrase ("maybe I need another perspective on it") allows for it.

### Acceptance and Commitment Therapy: values

ACT (Hayes, Strosahl and Wilson, 1999) treats values as chosen qualities of action that are never completed, unlike goals, and pairs them with accepting difficult feelings and with committed action. ACT has reasonable meta-analytic support (A-Tjak and colleagues, 2015). A values list on its own easily becomes a wish list. The Personal Values Card Sort (Miller and colleagues, 2001) is a free tool for the clarification step.

**Design implication:** State values as verbs, tie each to small behaviours, and compare them regularly with what the user actually did. The gap is where the learning happens.

### Pennebaker: expressive writing

Pennebaker and Beall (1986) had people write about a difficult experience for 15 to 20 minutes on consecutive days and found health benefits. People whose writing increasingly used causal and insight words ("because", "realise") benefited more (Pennebaker, Mayne and Francis, 1997). Frattaroli's meta-analysis of 146 randomised studies (2006) found a small average effect (r = .075), larger when the writing stayed private and with three or more sessions.

**Design implication:** Keep writing sessions short and bounded, and keep them genuinely private, since privacy appears to matter to the effect. Changes in the user's own language over time can be shown back gently, never as a score.

### Reflection versus rumination

Trapnell and Campbell (1999) separated *reflection*, driven by curiosity, from *rumination*, driven by threat, loss or injustice. Watkins (2008) reviewed when repetitive thought helps and when it harms. His work finds that abstract "why" thinking about a problem tends to be unhelpful, especially in depression, while concrete "how" thinking helps, and concreteness training reduced rumination in a trial (Watkins and colleagues, 2009).

**Design implication:** This is the biggest risk to the concept. Keep prompts concrete (what happened, what did you do, what could you try), notice when someone is circling, and suggest action, rest or a person instead of another round of writing.

### Self-distancing

Kross, Ayduk and Mischel (2005) found that recalling a painful event as an observer reduced emotional reactivity. Kross and colleagues (2014) found that referring to yourself by name or as "you" instead of "I" reduced distress under social stress. Grossmann and Kross (2014) described "Solomon's paradox": people reason more wisely about a friend's problem than their own, and self-distancing closes the gap. Imagining how an event will look in ten years also reduces distress (Bruehlman-Senecal and Ayduk, 2015).

**Design implication:** This is the evidence-based version of "from the 5th dimension it may seem obvious". Every reflection should offer a distanced mode: your own name in the third person, advice to a friend in your position, the view from ten years on, another tradition's eyes.

### The overview effect

White (1987) named the overview effect: astronauts reporting a shift in perspective, and a sense of connection to humanity, on seeing Earth whole. Yaden and colleagues (2016) described it as a form of awe and self-transcendent experience. The evidence is testimony from a small, highly selected group, and almost nobody will have the experience. What transfers is the deliberate change of scale, which Marcus Aurelius was already practising.

**Design implication:** Offer scale-shifting regularly (this room, this city, this century, this planet) without promising a peak experience.

### Awe

Keltner and Haidt (2003) defined awe by perceived vastness and a "need for accommodation": your existing frameworks can't take in what you're seeing. Piff and colleagues (2015) linked awe to a sense of a "small self" and to more generous behaviour. In Sturm and colleagues' (2020) trial, older adults who took weekly "awe walks" reported more prosocial emotion and less daily distress than controls, though their anxiety, depression and life satisfaction scores didn't change.

**Design implication:** The need for accommodation is itself a meaning-making moment. Awe is also one of the few studied routes from inner experience to kinder behaviour, which serves the brief's "contributes positively to society".

### Also relevant: doing it yourself

People remember what they generate better than what they read (the generation effect; Slamecka and Graf, 1978). In a small preprint study that has drawn methodological criticism, Kosmyna and colleagues (2025) found that people who wrote essays with ChatGPT felt less ownership of them and struggled to quote them minutes later. Neither study is about meaning in life, but both point the same way as the brief.

**Design implication:** The user writes every synthesis. Software can collect and return the user's own words, but it should not write the conclusion.

---

## 2. What the traditions already built

Traditions have refined practical tools for discernment over centuries. For each: how it works, what the app can learn from the mechanism, and what to avoid. The aim is to present each tradition in its own terms, not to repackage its practices as generic wellness.

### Ignatian examen and discernment of spirits

Ignatius of Loyola's *Spiritual Exercises* (approved 1548) include the examen, a short daily review usually taught in five steps: gratitude, asking for light, reviewing the day, facing what went wrong, and resolving for tomorrow. Discernment of spirits teaches people to notice *consolation* and *desolation* (inner movements toward or away from faith, hope and love) and to read their direction. One rule is very practical: "in time of desolation never make a change" (§318). The practice is traditionally done with a spiritual director.

- **Learn:** attend to the direction of a feeling, not only its intensity, and slow down big decisions made in low states.
- **Avoid:** calling it mood tracking. It assumes God acts in those movements. Present it as the Ignatian lens, in its own words.

### Quaker queries and clearness committees

Quaker *queries* are questions read aloud and held in silence, not debated. A *clearness committee* gathers a few trusted people around a "focus person" facing a decision. In Parker Palmer's account, members may only ask honest, open questions: no advice, no "have you thought about...". An honest question is one whose answer the asker could not anticipate, and the focus person sets the limits of what is shared.

- **Learn:** this is the best existing specification for the AI's role. The app could also help users convene a real clearness group of friends.
- **Avoid:** claiming an AI is a committee. A committee's force comes from people who know you and keep your confidence.

### Benedictine Rule of Life

The Rule of St Benedict (6th century) orders the day around common prayer, manual work and *lectio divina* (slow, prayerful reading). Its prologue hopes to set down "nothing harsh, nothing burdensome". The motto *ora et labora* is not in the Rule; it was attached to the Benedictines in the 19th century. Many Christians now write a personal "rule of life": a few commitments and rhythms, revisited over time.

- **Learn:** a small, sustainable rhythm in the user's own words, reviewed by season, describing a way of living rather than a task list.
- **Avoid:** pretending a solitary rule in an app has the Rule's force, which comes from community and stability. Encourage sharing it with one real person.

### Mussar: cheshbon hanefesh and chavruta

Mussar is Jewish ethical self-development, organised as a movement by Rabbi Israel Salanter in the 19th century. Menachem Mendel Lefin's *Cheshbon HaNefesh* ("accounting of the soul", usually dated 1808) adapted Benjamin Franklin's virtue chart: thirteen *middot* (character traits), one in focus each week, with daily marks. Contemporary teachers such as Alan Morinis work on one trait at a time, often in small groups. *Chavruta* is studying a text in pairs, arguing with the text and with each other.

- **Learn:** one trait per period with small daily observations, and a paired reading mode in which two people disagree productively.
- **Avoid:** turning the chart into streaks or points.

### Sufi dhikr and the teacher

*Dhikr* is remembrance of God through repeating divine names or short formulas, alone or together, often with attention to breath and movement. It returns attention to its centre many times a day. Sufi paths are traditionally walked with a teacher (*shaykh*) who knows the student and adjusts their practice, including when it is destabilising them.

- **Learn:** short, repeated moments of reorientation around a word or question the user has chosen, and humility about how little an app knows about a person.
- **Avoid:** lifting dhikr formulas out of Islam as generic mantras. Present them in context and point to living teachers.

### Zen koans

In Rinzai Zen a student holds a *koan* from a collection such as the *Gateless Gate* (1228), whose first case is "Mu", and presents responses to a teacher in private interview until one is accepted. A koan can't be reasoned out. It works by exhausting the position you are answering from, which is close to Kegan's shift from subject to object.

- **Learn:** some questions should be lived with for days. Release them over time and return to them after real experience.
- **Avoid:** presenting koans as riddles with answers, or implying the app can verify a response.

### Stoic evening review and the view from above

Seneca (*On Anger* 3.36) describes Sextius asking himself each night what bad habit he had cured, what fault he had resisted, and in what way he was better. Seneca reviews his own day the same way and ends by pardoning himself. Marcus Aurelius repeatedly looks down on human affairs from a height and across vast time (for example *Meditations* 9.30), which Pierre Hadot called "the view from above".

- **Learn:** a nightly review that is honest but lenient, and a standard zoom-out exercise.
- **Avoid:** the popular reduction of Stoicism to productivity and a stiff upper lip. The ancient version includes duty to the whole human community.

### Daoist and Zhuangzian perspective-shifting

The *Zhuangzi* keeps moving the reader's standpoint. In chapter 17 a frog in a well can't imagine the sea, and the Lord of the River meets the god of the North Sea and sees how small his view was. Chapter 2's butterfly dream, and its argument that right and wrong depend on where you stand, do the same. The frog is almost exactly the brief's "I can only see from where I stand." The popular parable of the old man who lost his horse ("maybe good, maybe bad") comes from the *Huainanzi* (c. 139 BCE), not the *Zhuangzi*.

- **Learn:** shifts of scale and standpoint, humour, and holding off judgment on events still unfolding.
- **Avoid:** reducing Daoism to "go with the flow". It is also a living religion with temples, ritual and lineages.

### The I Ching as a reflective tool

The *Yijing* began as a Zhou-dynasty divination manual of 64 hexagrams and became a philosophical classic through later commentaries. Richard Wilhelm's translation (1924; English 1950, with a foreword by C. G. Jung) made it widely read in the West. Writing the question clarifies it, chance selects a dense and ambiguous text, and the reader interprets their situation through that text. The randomness interrupts habitual framing.

- **Learn:** draw a random lens, passage or question in response to a written question. The principles already list randomness as something the app supplies.
- **Avoid:** claiming prediction, or mocking people who use it for divination. Say plainly how the app uses it.

### Vision quests (handle with care)

The Lakota *hanbleceya* ("crying for a vision") is one of the seven sacred rites described by Black Elk in *The Sacred Pipe* (as recorded by Joseph Epes Brown, 1953). It involves preparation, time alone and fasting under a holy person's guidance, and a return in which the experience is interpreted with that person and the community. The 1993 Declaration of War Against Exploiters of Lakota Spirituality condemned commercial imitation of these ceremonies, and Arvol Looking Horse's 2003 proclamation barred non-Natives from the sacred altars of the seven rites, citing mockery, mixing with New Age beliefs, charging for ceremonies, and deaths. In 2009 three people died in a commercial "sweat lodge" run by self-help teacher James Arthur Ray in Arizona.

- **Learn:** separation, threshold and return is a cross-cultural pattern (van Gennep, *The Rites of Passage*, 1909). A plainly named secular practice, such as a day alone without a phone followed by telling someone what happened, is fine.
- **Avoid:** calling anything a vision quest, or using Lakota terms or imagery. Point curious users to Native-authored sources.

---

## 3. Landscape

**Religious apps.** YouVersion (Life.Church) passed one billion installs in November 2025 and offers Bible text, in full or in part, in over 2,300 languages and dialects. Hallow offers guided Catholic audio prayer (Rosary, examen, lectio divina), voiced partly by well-known actors, with a US premium tier of $69.99 a year. Glorify, a Christian devotional app, raised a $40M Series A led by a16z in 2021, whose lead partner described it as "Calm/Headspace for the faith community"; Mozilla noted its privacy policy calls user information "a business asset". Muslim Pro offers prayer times, qibla and the Quran; in 2020 Motherboard reported it had sent location data to the broker X-Mode, whose buyers included US military contractors, and the company, while disputing the report, ended its data partnerships. *Strengths:* serious content, daily rhythm, community. *Missing:* they assume the tradition and serve people already in it, not someone asking whether or how it fits.

**Faith chatbots.** Text With Jesus (2023) offers ChatGPT-driven personas of Jesus and other biblical figures. Several Gita chatbots in India were reported in 2023 to condone violence in Krishna's voice. Catholic Answers' "Father Justin" (2024) claimed to be a real priest and offered absolution, and was recast as a lay "Justin" within days. These show what happens when an AI speaks with religious authority.

**Meditation.** Headspace and Calm teach attention and stress relief with light, mostly secular framing; Headspace added an AI companion, Ebb, in 2024 and says it is not a therapist. Waking Up (Sam Harris) is the nearest product to "many lenses": secular, drawing on Vipassana, Zen, Dzogchen, Advaita and Stoicism, with many teachers. *Missing:* a strong editorial position (secular, centred on nondual insight), and a focus on consciousness rather than on interpreting life events or acting on values.

**Stoic and philosophy apps.** Apps such as Stoic. (morning and evening journaling with Stoic and CBT exercises) and the Daily Stoic brand offer one tradition, usually framed around resilience and productivity.

**Astrology.** Co-Star says it combines NASA data with human astrologers and AI, and is known for blunt daily notifications and comparing charts with friends. The Pattern generates long personality profiles and has social and dating features. Sanctuary sells live chats with astrologers by the minute. CHANI leans toward reflective writing and meditation. *Strengths:* a daily ritual, a vocabulary for inner life, a reason to reflect, something to discuss with friends. *Missing:* the meaning is handed to you; generic statements feel personal (the Forer effect, Forer 1949); nothing tests whether a reading turned out to be true or useful.

**Journaling.** Day One (Automattic) is a mature, end-to-end encrypted journal. Apple Journal (2023) suggests entries from on-device data. Reflectly offers short AI-prompted mood journaling. Rosebud is a chat-style AI journal whose paid memory feature, in the company's words, identifies blind spots and recurring patterns. *Missing:* plain journals give a blank page with no frameworks; AI journals interpret for you, which contradicts the premise; nearly all are inward-only.

**Values and ikigai tools.** The VIA Character Strengths survey, values card sorts, and many ikigai apps built on the four-circle Venn diagram (which spread from a 2014 blog post by Marc Winn and is not a Japanese framework). *Missing:* these are one-time assessments that give you a result, not a practice tested over months.

**AI companions and assistants.** Replika, Character.AI and general assistants are widely used for personal and spiritual conversation. Italy's data protection authority fined Replika's maker €5M in 2025. Character.AI and Google agreed in January 2026 to settle lawsuits, including one over a 14-year-old's suicide. OpenAI rolled back a sycophantic GPT-4o update in April 2025. Rolling Stone (2025) reported chatbot conversations feeding users' spiritual delusions. A randomised study by MIT Media Lab and OpenAI (Fang and colleagues, 2025, preprint) found heavier daily use went with more loneliness and emotional dependence. *Missing:* they answer instead of asking, have no structure or sense of time, and tend to agree with the user.

### The gap

| | Who supplies the meaning | Several traditions, equal terms | Tested in action over time | Points outward |
|---|---|---|---|---|
| Religious apps | The tradition | No | Partly | Sometimes |
| Faith chatbots, AI companions | The AI | Flattened, if at all | No | Rarely |
| Meditation apps | Mostly the user | Waking Up, partly | Practice, not meaning | Rarely |
| Astrology apps | The chart and its writers | No | No | No |
| Journals, AI journals | The user, or the AI | No | Rarely | Rarely |
| Values and ikigai tools | A one-time test | No | No | Sometimes |

No current product combines five things: several traditions presented accurately and by strand, with the one you were raised in treated like the rest; your own experience, collected over months, as the evidence; a loop in which you hold a lens as a hypothesis, try it in daily life and check whether it held; attention to how you treat other people; and a design meant to be outgrown, with data that stays on your device. Existing products hand you an answer, give you a blank page, or train attention without helping you interpret your life. Inderstanding would sit between these: structured and comparative, with the user writing and testing the meaning.

---

## 4. Ethics and risks

**Rumination.** Reflection apps can deepen low mood. *Mitigation:* concrete prompts, short sessions, detection of repeated material, and a nudge toward action, rest or a person.

**Spiritual bypassing.** Welwood (1984) coined the term for using spiritual ideas to avoid emotional pain or unfinished personal work. *Mitigation:* never frame injustice, abuse or grief as a "lesson", and ask what a practice might be helping the user avoid.

**Appropriation and misrepresentation.** Lifting closed practices, or flattening living traditions into self-help, harms communities and misleads users. *Mitigation:* leave closed practices out, have each strand reviewed (and paid for) by practitioners, and cite named sources.

**The menu itself.** Laying traditions side by side can imply they are interchangeable options, while many see themselves as true and as asking for commitment. "No ranking" is also a position. *Mitigation:* state each tradition's own claims accurately, including claims to exclusive truth, and say openly what stance the app takes.

**Dependence on the app.** If the app becomes where meaning happens, it has defeated its purpose. *Mitigation:* prompts taper as the user's practice settles, and the lasting output is a short personal rule that works without the app.

**Dependence on AI.** A model summarising "what your life means" is the outsourcing the brief rejects. *Mitigation:* the AI asks questions and supplies accurate information about traditions; the user writes every interpretation.

**Sycophantic AI.** Models tuned on user approval drift toward agreement (Sharma and colleagues, 2023; the GPT-4o rollback, 2025), and in spiritual conversation agreement can feed grandiosity. *Mitigation:* clearness-committee rules for the AI, required counter-readings from other lenses, a ban on confirming special-mission or cosmic claims, and no religious persona of any kind.

**Vulnerable users and crises.** People turn to meaning-making at their worst moments: bereavement, illness, religious trauma, psychosis or mania. *Mitigation:* adults only, clearly not therapy. On crisis language, show a fixed, non-AI screen with Find A Helpline (findahelpline.com, 175+ countries), 988 (US), Samaritans 116 123 (UK and Ireland), Lifeline 13 11 14 (Australia) and emergency services. Never prescribe fasting, prolonged isolation or intense practices.

**Privacy.** Religious and philosophical beliefs are special-category data under GDPR Article 9. Mozilla (2022) rated mental health and prayer apps the worst category it had reviewed for privacy. In some countries leaving a religion is dangerous or illegal. *Mitigation:* keep the local-only, no-account design. Any cloud AI should be opt-in per use, with no retention and no training on user data. Offer an app lock and a neutral name and icon.

**Commercial incentives.** Subscriptions reward engagement; this product succeeds when the user needs it less. *Mitigation:* one-time or pay-what-you-can pricing, no engagement metrics, and success judged by what users report about their lives, including having stopped using it.

---

## 5. Five design implications

1. **Organise the app around experiments rather than entries.** A lens is held as a hypothesis for a set period, with one small daily practice and one act toward another person, then reviewed against what actually happened. This closes Kolb's loop, applies ACT's values in action and Kegan's tests of big assumptions, and puts "evidence over belief" into practice.

2. **Build distance into every reflection, and keep it concrete.** Offer third-person writing, advice to a friend in your position, the view from ten years on, the view from above, and another tradition's reading. Favour "what" and "how" over "why", and redirect when the user is circling. This is the practical form of the "5th dimension", drawn from Kross, Grossmann, Watkins, the Stoics and Zhuangzi.

3. **Limit the AI to questions and information, and let the user write every conclusion.** The AI follows clearness-committee rules: honest, open questions and accurate information about traditions, never interpretation, advice, or agreement with cosmic claims. The user writes every synthesis. This guards against sycophancy, dependence, and the loss of ownership seen when a model does the writing.

4. **Start from where the inherited framework failed.** Ask for the moments when the user's own tradition didn't fit what happened (Park's discrepancies). Show that tradition's less familiar strands next to other traditions, and treat returning with new eyes, switching and combining as equally valid outcomes. Never assign stages.

5. **Design for the user to outgrow the app, and point outward.** The lasting output is a short personal rule of life the user writes and practises with real people (a chavruta partner, a clearness group, a community). Prompts taper, data stays on the device, and success is judged by how the person lives and treats others, not by time in the app.

---

## Sources

Links were checked in October 2026. Items marked † are standard references cited from established knowledge and not re-checked online.

**Research**
- Pew Research Center (2023). [Spirituality Among Americans](https://www.pewresearch.org/religion/2023/12/07/measuring-spirituality/)
- Kolb, D. (1984). *Experiential Learning*. Pashler, H. et al. (2008). Learning styles: Concepts and evidence. *Psychological Science in the Public Interest*. †
- McAdams, D. P., Reynolds, J., Lewis, M., Patten, A. H., & Bowman, P. J. (2001). [When bad things turn good and good things turn bad](https://www.semanticscholar.org/paper/When-Bad-Things-Turn-Good-and-Good-Things-Turn-Bad:-McAdams-Reynolds/68ae7a88142ec4ac7b6fe412d14908c13f02cddf). *PSPB* 27(4). McAdams (2006), *The Redemptive Self*. †
- Frazier, P. et al. (2009). [Does self-reported posttraumatic growth reflect genuine positive change?](https://www.semanticscholar.org/paper/Does-Self-Reported-Posttraumatic-Growth-Reflect-Frazier-Tennen/4604e28ca48829d9ea4f2eeb437e7819d70cb7d4) *Psychological Science* 20
- Steger, M. F., Frazier, P., Oishi, S., & Kaler, M. (2006). The Meaning in Life Questionnaire. *Journal of Counseling Psychology*. † Steger, Kawabata, Shimai & Otake (2008). [The meaningful life in Japan and the United States](https://www.researchgate.net/publication/222425701_The_meaningful_life_in_Japan_and_the_United_States_Levels_and_correlates_of_meaning_in_life). *Journal of Research in Personality* 42
- Martela, F., & Steger, M. F. (2016). [The three meanings of meaning in life](https://research.aalto.fi/en/publications/the-three-meanings-of-meaning-in-life-distinguishing-coherence-pu/). *Journal of Positive Psychology* 11(5)
- Kim, J. et al. (2022). [Experiential appreciation as a pathway to meaning in life](https://www.nature.com/articles/s41562-021-01283-6). *Nature Human Behaviour* 6
- Park, C. L. (2010). [Making sense of the meaning literature](https://spiritualitymeaningandhealth.uconn.edu/wp-content/uploads/sites/2598/2019/03/Making-Sense-of-the-Meaning-Literature.pdf). *Psychological Bulletin* 136(2)
- Frankl, V. (1946; English 1959). *Man's Search for Meaning*. Breitbart, W. et al., Meaning-Centered Psychotherapy trials, from 2010. †
- Kegan, R. (1982). *The Evolving Self*; (1994) *In Over Our Heads*; Kegan & Lahey (2009) *Immunity to Change*. † Summary of Kegan's stage data: [Garvey Berger](https://www.beeleaf.com/wp-content/uploads/2017/09/Kegan-constructive-development-of-adults-narrative.pdf)
- Fowler, J. (1981). *Stages of Faith*. † Streib, H. [Faith development theory revisited: the religious styles perspective](https://www.researchgate.net/publication/270396302_Faith_Development_Theory_Revisited_The_Religious_Styles_Perspective)
- Hayes, S., Strosahl, K., & Wilson, K. (1999). *Acceptance and Commitment Therapy*. A-Tjak, J. et al. (2015). Meta-analysis, *Psychotherapy and Psychosomatics*. Miller, W. R. et al. (2001). Personal Values Card Sort. †
- Pennebaker, J. W., & Beall, S. K. (1986); Pennebaker, Mayne & Francis (1997). † Frattaroli, J. (2006). [Experimental disclosure and its moderators](https://faculty.sites.uci.edu/joannezinger/files/2019/08/Frattaroli-psych-bulletin-2006.pdf). *Psychological Bulletin* 132(6)
- Trapnell, P. D., & Campbell, J. D. (1999). Private self-consciousness and the five-factor model of personality. *JPSP* 76(2). † Watkins, E. R. (2008). [Constructive and unconstructive repetitive thought](https://eric.ed.gov/?id=EJ787696). *Psychological Bulletin* 134(2). Watkins et al. (2009). [Concreteness training reduces dysphoria](https://www.psychiatry.wisc.edu/courses/Nitschke/seminar/Watkins%20et%20al,%20J%20Abnorm%20psych%20118,%202009.pdf)
- Kross, E., Ayduk, O., & Mischel, W. (2005). When asking "why" does not hurt. *Psychological Science*. † Kross, E. et al. (2014). [Self-talk as a regulatory mechanism](https://pubmed.ncbi.nlm.nih.gov/24467424/). *JPSP* 106(2). Grossmann, I., & Kross, E. (2014). [Exploring Solomon's paradox](https://wisdomcenter.uchicago.edu/publications/exploring-solomons-paradox-self-distancing-eliminates-self-other-asymmetry-wise). *Psychological Science* 25(8). Bruehlman-Senecal, E., & Ayduk, O. (2015). *JPSP*. †
- White, F. (1987). *The Overview Effect*. † Yaden, D. B. et al. (2016). [The overview effect](https://www.researchgate.net/publication/298786174_The_Overview_Effect_Awe_and_Self-Transcendent_Experience_in_Space_Flight). *Psychology of Consciousness* 3(1)
- Keltner, D., & Haidt, J. (2003). Approaching awe. *Cognition and Emotion*. Piff, P. et al. (2015). Awe, the small self, and prosocial behavior. *JPSP*. † Sturm, V. E. et al. (2020). [Big smile, small self](https://memory.ucsf.edu/publications/big-smile-small-self-awe-walks-promote-prosocial-positive-emotions-older-adults). *Emotion*
- Slamecka, N. J., & Graf, P. (1978). The generation effect. † Kosmyna, N. et al. (2025). [Your Brain on ChatGPT](https://arxiv.org/abs/2506.08872) (preprint), and a [published critique](https://arxiv.org/abs/2601.00856)
- Forer, B. R. (1949). The fallacy of personal validation. †
- Welwood, J. (1984). Principles of inner work. *Journal of Transpersonal Psychology* 16(1). [Overview](https://en.wikipedia.org/wiki/Spiritual_bypass)

**Traditions**
- Ignatius, *Spiritual Exercises* §318: [Ignatian Discernment Institute](https://www.discernment.institute/the-first-week-rules)
- Palmer, P. J. [The Clearness Committee](https://couragerenewal.org/wp-content/uploads/2022/06/Parker-Palmer_Clearness-Committee.pdf). Center for Courage & Renewal
- [Origins of *ora et labora*](https://en.wikipedia.org/wiki/Ora_et_labora) (citing Kardong, and Meeuws 1992)
- [Menachem Mendel Lefin](https://en.wikipedia.org/wiki/Menachem_Mendel_Lefin); [Cheshbon HaNefesh on Sefaria](https://www.sefaria.org/Cheshbon_HaNefesh)
- Seneca, *On Anger* 3.36: [De Ira](https://en.wikipedia.org/wiki/De_Ira). Hadot, P. (1995). *Philosophy as a Way of Life*. †
- [The old man lost his horse (Huainanzi)](https://en.wikipedia.org/wiki/The_old_man_lost_his_horse)
- Black Elk & Brown, J. E. (1953). *The Sacred Pipe*; van Gennep, A. (1909). *The Rites of Passage*. † [Looking Horse Proclamation on the Protection of Ceremonies](https://ictnews.org/archive/looking-horse-proclamation-on-the-protection-of-ceremonies/) (2003); [Lakota religion](https://en.wikipedia.org/wiki/Lakota_religion)

**Products and AI**
- [YouVersion reaches one billion installs](https://www.christiantoday.com/news/how-youversion-reached-its-one-billion-download-milestone) (2025)
- [Hallow on the App Store](https://apps.apple.com/us/app/hallow-prayer-meditation/id1405323394)
- [Glorify Series A](https://www.prnewswire.com/news-releases/glorify-announces-40m-in-series-a-funding-from-a16z-softbank-latin-america-fund-kris-jenner-michael-buble-michael-ovitz-jason-derulo-and-more-301435773.html) (2021); [Mozilla on Glorify](https://www.mozillafoundation.org/en/privacynotincluded/glorify/)
- [Motherboard on Muslim apps and X-Mode](https://www.vice.com/en/article/muslim-apps-location-data-military-xmode/) (2020); [Al Jazeera on Muslim Pro's response](https://www.aljazeera.com/news/2020/11/18/muslim-pro-app-denies-selling-user-data-to-us-military)
- [Washington Post on Text With Jesus](https://www.washingtonpost.com/religion/2023/08/12/text-with-jesus-chatgpt-ai/) (2023); [CBC on India's religious chatbots](https://amp.cbc.ca/lite/story/1.6896628) (2023); [America Magazine on "Father Justin"](https://www.americamagazine.org/faith/2024/04/26/father-justin-catholic-answers-ai-247808/) (2024)
- [Headspace launches Ebb](https://www.businesswire.com/news/home/20241010397470/en/Mental-Health-Company-Headspace-Launches-Empathetic-AI-Companion) (2024); [Waking Up](https://www.wakingup.com/)
- [Co-Star on the App Store](https://apps.apple.com/us/app/co-star-personalized-astrology/id1264782561)
- [Day One privacy FAQ](https://dayoneapp.com/privacy-faqs/); [Apple launches Journal](https://www.apple.com/newsroom/2023/12/apple-launches-journal-app-a-new-app-for-reflecting-on-everyday-moments/) (2023); [Rosebud funding announcement](https://www.rosebud.app/blog/rosebud-raises-6m-to-expand-the-worlds-leading-ai-journal)
- [Garante fines Replika's maker](https://privacy-daily.com/article/2025/05/19/garante-fines-us-company-56-million-for-chatbot-gdpr-breaches-2505190007?BC=bc_682fdccf9bb04) (2025); [CNN on Character.AI settlements](https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit) (2026)
- [TechCrunch on the GPT-4o sycophancy rollback](https://techcrunch.com/2025/04/29/openai-explains-why-chatgpt-became-too-sycophantic) (2025); Sharma, M. et al. (2023). Towards understanding sycophancy in language models. †
- [Rolling Stone: People Are Losing Loved Ones to AI-Fueled Spiritual Fantasies](https://www.rollingstone.com/culture/culture-features/ai-spiritual-delusions-destroying-human-relationships-1235330175/) (2025)
- Fang, C. M. et al. (2025). [How AI and human behaviors shape psychosocial effects of chatbot use](https://export.arxiv.org/pdf/2503.17473) (preprint)
- [Mozilla: mental health and prayer apps fail at privacy](https://www.mozillafoundation.org/en/privacynotincluded/articles/top-mental-health-and-prayer-apps-fail-spectacularly-at-privacy-security/) (2022)
- [Find A Helpline](https://findahelpline.com/)
