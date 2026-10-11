/* Detail text for each skill tree node. Applied onto window.SKILL_TREE. */
(function () {
  'use strict';
  var texts = {

    /* Stillness and attention */

    'breath': {
      idea: 'In the Theravada tradition, anapanasati, mindfulness of breathing in and out, is a core meditation the Buddha taught. You rest attention on the breath as it is, without controlling it. Teachers often say the training is in the returning: noticing you have drifted and coming back, again and again.',
      practice: 'Three times today, say before email, after lunch and before leaving work, follow ten breaths without changing them, counting each out-breath. If you lose count, start again at one. If watching the breath makes you tense, rest attention on your feet instead.',
      deeper: 'The Anapanasati Sutta (Majjhima Nikaya 118), the Buddha’s own instructions; counting breaths is a later aid from the commentaries. Bhante Gunaratana’s Mindfulness in Plain English is a clear guide.'
    },

    'jesus-prayer': {
      idea: 'Desert monks repeated short prayers all day; over centuries that habit became the Jesus Prayer, still central to Eastern Orthodoxy. Said slowly, often with the breath, it seeks hesychia, a stillness in which the heart attends to God. Its teachers call it a confession of faith, and stress the Name of Jesus over method.',
      practice: 'While walking or washing up, say the prayer slowly under your breath: “Lord Jesus Christ, Son of God” as you breathe in, “have mercy on me, a sinner” as you breathe out. When you drift, start again. If you don’t pray, try Breath attention instead.',
      deeper: 'The Way of a Pilgrim, a 19th-century Russian account of a wanderer who learns this prayer from the Philokalia. For its roots, The Sayings of the Desert Fathers, translated by Benedicta Ward.'
    },

    'zazen': {
      idea: 'Zazen is seated meditation, the centre of Zen practice. In the Soto school Dogen taught shikantaza, “just sitting”: upright and still, you let thoughts come and go without chasing them or pushing them away. Dogen held that practice and awakening are one, so the sitting is not a means to something later.',
      practice: 'Sit for ten minutes on a cushion or the front of a firm chair, back upright, eyes half open and resting on the floor a metre or so ahead. Don’t hold onto the breath or a word; just sit, noticing thoughts arrive and leave. When the time is up, stand slowly.',
      deeper: 'Dogen, Fukanzazengi (Universal Recommendation for Zazen), a few pages of instructions. Many Zen centres offer an introduction to zazen for newcomers, often for a small donation.'
    },

    'examen': {
      idea: 'Ignatius of Loyola, founder of the Jesuits, taught a daily examen: give thanks, ask grace to know your sins, review the day, ask pardon, resolve to amend (Spiritual Exercises 43). Jesuits today often add his rules for discernment, reading ordinary feelings as signs: consolation moves you toward God, desolation away.',
      practice: 'Tonight before sleep, give thanks for one thing, then ask for light to see the day honestly (if you don’t pray, just intend it). Replay the day, noticing one moment of consolation and one of desolation. Ask pardon where it is due, then look toward tomorrow.',
      deeper: 'Ignatius, Spiritual Exercises 43 for his five points, and 313 to 336 for his rules on consolation and desolation. Jim Manney’s A Simple, Life-Changing Prayer is a short modern guide.'
    },

    'dhikr': {
      idea: 'Dhikr means remembrance: repeating names of God or short phrases such as “la ilaha illa’llah” (there is no god but God), alone or in a gathering, to keep the heart turned toward God. Sufi orders join it to breath, rhythm and sometimes movement. The Qur’an says hearts find rest in the remembrance of God (13:28).',
      practice: 'On one walk today, keep a short phrase going under your breath in time with your steps. Many Muslims use “subhan Allah” (glory be to God) or “alhamdulillah” (praise be to God). If you are not Muslim, choose a few words you mean. When you drift, start again.',
      deeper: 'A Sufi dhikr gathering; many orders meet weekly, often on Thursday evenings, and some welcome visitors who ask first. William Chittick’s Sufism: A Beginner’s Guide is a clear introduction.'
    },

    'waiting-worship': {
      idea: 'In an unprogrammed Quaker meeting, people sit together in silence, usually for an hour, with no minister, sermon or set words. Anyone may stand and speak if they feel moved by the Spirit; often few do. Friends call this waiting worship: waiting together on God, or the Inward Light. Some Friends today are nontheist.',
      practice: 'For a small version at home, sit in silence for twenty minutes, with someone else if you can. Don’t aim for an empty mind; wait, and notice what comes. If something rises that seems to need saying, say it simply, then let the quiet return.',
      deeper: 'A Quaker meeting for worship; most meetings welcome visitors and expect nothing of them. Britain Yearly Meeting’s Advices and Queries is a short, plain guide to how Friends live.'
    },

    'sabbath': {
      idea: 'Shabbat, from Friday sunset to Saturday nightfall, is a weekly stop: observant Jews refrain from creative work, following detailed rabbinic law. Abraham Joshua Heschel called it “a palace in time” (The Sabbath, 1951): holiness in time rather than in a place, a day for being rather than making, and for meeting God.',
      practice: 'Set aside three hours on a free day. Don’t work, buy, fix or produce anything, and keep screens off. Eat, walk, talk, rest. Mark the start and end with a small act, like lighting a candle. This is a borrowed taste of Shabbat, not the observance itself.',
      deeper: 'Abraham Joshua Heschel, The Sabbath (1951), short and lyrical. Many synagogues welcome visitors to a Friday evening service, and some communities host open Shabbat dinners.'
    },

    'sitting-forgetting': {
      idea: 'In chapter 6 of the Zhuangzi, Yan Hui tells Confucius he has forgotten benevolence and righteousness, then rites and music, and now can “sit and forget” (zuowang): let go of body, senses and cleverness until he is one with the Great Thoroughfare. Confucius, his teacher in the story, asks to become his follower.',
      practice: 'Sit for ten minutes with nothing to do. Instead of holding attention, let things drop as they come up: the plan for later, the day’s worries, even the effort to meditate. If it feels unsettling, open your eyes. This is an adaptation: Zhuangzi gives no method.',
      deeper: 'Zhuangzi, chapter 6 on sitting and forgetting, and chapter 4 on the fasting of the heart-mind (xinzhai). Burton Watson’s translation is clear and often funny.'
    },

    /* Letting go and flow */

    'wu-wei': {
      idea: 'Wu wei, often translated “non-action”, means acting without forcing: moving with how things are already moving, not against them. A central image in the Daodejing is water, soft and yielding, which still wears down what is hard (chapters 8 and 78). Much of it advises rulers to govern without forcing (37 and 57).',
      practice: 'Pick one thing you have been pushing on: a stuck email thread, an argument, a plan that won’t come together. For today, stop pushing. Do only what has an obvious opening, and let the rest sit. Notice what moves on its own.',
      deeper: 'Daodejing, chapters 8, 37 and 78. D. C. Lau’s translation (Penguin) is careful; Ursula K. Le Guin’s 1997 version is looser and a pleasure to read.'
    },

    'control': {
      idea: 'Epictetus, born a slave, taught that some things are up to us (eph’ hemin): our judgements, impulses, desires and aversions; and some are not: body, property, reputation, public office. The Enchiridion opens with this. Most misery, the Stoics thought, comes from treating the second kind as if it were the first.',
      practice: 'Take today’s biggest worry. Split it into what is up to you (for Epictetus, only your own judgements and choices) and what is not, such as how your efforts turn out. Decide how you will respond. When your mind drifts to the rest, say “not up to me” and return.',
      deeper: 'Epictetus, Enchiridion 1 and 5, compiled by his student Arrian. The whole handbook is about fifty short sections; Robin Hard’s Oxford translation is plain and modern.'
    },

    'karma-yoga': {
      idea: 'In the Bhagavad Gita, Arjuna freezes before battle and Krishna teaches him karma yoga, the path of action: “You have a right to your actions, but never to their fruits” (2.47, common rendering). Krishna asks Arjuna to offer every action to him (3.30, 9.27), so the work becomes an offering rather than a bid for reward.',
      practice: 'Choose one task today that doesn’t need a quick reply. Do it as well as you can, as an offering (in the Gita, to Krishna; otherwise, to the work itself), not a bid for approval. Then let go of how it is received, and don’t check for reactions until tomorrow.',
      deeper: 'Bhagavad Gita, chapters 2 and 3, especially 2.47 to 2.48 and 3.19. Eknath Easwaran’s translation, with his introductions to each chapter, is accessible.'
    },

    'impermanence': {
      idea: 'Anicca, impermanence, is the first of three marks the Buddha saw in all experience, with dukkha (unsatisfactoriness) and anatta (non-self). Everything conditioned arises and passes, including moods, sensations and the sense of who you are. Seeing this closely, the tradition holds, loosens the grip of craving.',
      practice: 'A few times today, watch something plainly changing for a minute: a sound, a cup of tea cooling, the light in a room. Then try the same with a mild feeling, like boredom or impatience: notice when it began, how it shifts, and when it has gone.',
      deeper: 'Digha Nikaya 16, the Buddha’s last days, ending with the teaching that all conditioned things pass away. Joseph Goldstein’s Insight Meditation is a clear modern guide.'
    },

    'tawakkul': {
      idea: 'Tawakkul is trust in God, and in Islamic teaching it follows effort rather than replacing it. In a hadith collected by al-Tirmidhi, a man asks whether to tie his camel or trust God, and the Prophet answers: tie it, and trust (paraphrased). The believer does their part fully, then leaves the outcome with God.',
      practice: 'Pick one thing you are anxious about. Do every sensible thing that is yours to do today: send the email, make the call, prepare. Then hand over the outcome. If you pray, put it into words; if not, tell yourself plainly that you have done your part.',
      deeper: 'Qur’an 3:159 and 65:3. Al-Ghazali treats tawakkul at length in Book 35 of his Revival of the Religious Sciences, translated by David Burrell as Faith in Divine Unity and Trust in Divine Providence.'
    },

    'all-shall-be-well': {
      idea: 'Julian of Norwich, an English anchoress, had sixteen visions in 1373. Troubled that God allowed sin, she writes that Christ told her: “Sin is behovely [fitting], but all shall be well, and all shall be well, and all manner of thing shall be well” (Revelations of Divine Love, ch. 27). Unusually, she saw no wrath in God.',
      practice: 'When a worry loops today, say Julian’s line slowly, as a prayer if you pray or simply as words to rest on. Let it sit beside the worry rather than cover it up. Then do the next small thing that is yours to do.',
      deeper: 'Julian of Norwich, Revelations of Divine Love, chapters 5 and 27 (the hazelnut, and all shall be well). Elizabeth Spearing’s Penguin translation reads easily.'
    },

    'useless-tree': {
      idea: 'In chapter 4 of the Zhuangzi, a carpenter dismisses a huge shrine oak as worthless timber. That night the tree appears in his dream and asks: if I had been useful, would I have grown this big? The chapter ends with the line that everyone knows the use of the useful, but nobody knows the use of the useless.',
      practice: 'Spend half an hour today on something with no use at all: wander with no destination, watch clouds, doodle. If you catch yourself turning it into self-improvement, let that go too.',
      deeper: 'Zhuangzi, the end of chapter 1 (Huizi’s useless tree) and chapter 4 (Carpenter Shi and the oak), in Burton Watson’s The Complete Works of Zhuangzi.'
    },

    'wabi-sabi': {
      idea: 'Wabi and sabi are old Japanese ideas, joined as “wabi-sabi” mainly in modern times. Wabi began as the loneliness of living apart and came to mean quiet simplicity; sabi is the beauty of age, like patina or moss. In wabi tea, Sen no Rikyu prized plain, uneven bowls, like Chojiro’s Raku ware, over polished Chinese ones.',
      practice: 'Choose one worn object you use every day: a mug, a chopping board, a jacket. Look at it for a minute as if it were in a museum, taking in the chips, the fading, the marks of your hands. Leave it as it is, and use it with a little more care today.',
      deeper: 'Leonard Koren, Wabi-Sabi for Artists, Designers, Poets and Philosophers (1994), short and clear. Okakura Kakuzo’s The Book of Tea (1906) gives the older background.'
    },

    /* Character and practice */

    'evening-review': {
      idea: 'Seneca took the habit of a nightly review from the school of Sextius. Sextius asked: what fault have I resisted, in what way am I better? Seneca, once the lamp was out and his wife silent, went over his whole day, deeds and words, then pardoned himself and warned himself not to slip again (On Anger 3.36, paraphrased).',
      practice: 'Tonight, once the lights are off, go back over the day from the morning. Ask questions in Sextius’s spirit: what did I handle well, where did I slip, what will I do differently tomorrow? Be as fair to yourself as you would be to a friend, then let it rest.',
      deeper: 'Seneca, On Anger 3.36, a single page. His Letters to Lucilius, in the Penguin selection Letters from a Stoic, show the same habit of self-examination at work.'
    },

    'middot': {
      idea: 'Mussar is a Jewish path of character work, organised as a movement in 19th-century Lithuania by Israel Salanter. Its unit is the middah (plural middot), a soul-trait like patience or humility. Most have a healthy middle; for pride and anger, Maimonides urged the far end. Mussar serves a life of observance before God.',
      practice: 'Pick one trait to watch this week: patience (savlanut), humility (anavah) or generosity (nedivut). Write it where you will see it each morning. Each evening, recall one moment when you showed too much of it, too little, or about the right amount.',
      deeper: 'Alan Morinis, Everyday Holiness (2007), the most accessible modern guide to Mussar, with a chapter on each middah. Many communities run Mussar study groups.'
    },

    'accounting': {
      idea: 'Cheshbon ha-nefesh, an accounting of the soul, means tracking your traits honestly. In a book of that name (early 1800s), Menachem Mendel Lefin, an Enlightenment-minded scholar, set out thirteen middot and a weekly chart, adapting Benjamin Franklin. Israel Salanter later reprinted it, and it became a Mussar classic.',
      practice: 'Pick one middah to watch today: patience, order or humility. Each time something tests it, make a mark: a tick on your hand or a note on your phone. Don’t judge the marks; just count them. Tonight, look at them and write one line.',
      deeper: 'Menachem Mendel Lefin, Cheshbon HaNefesh, available in English. Benjamin Franklin’s Autobiography, Part Two, describes the chart Lefin adapted.'
    },

    'self-cultivation': {
      idea: 'For Confucius, character is formed by practice within relationships. Li, ritual propriety, is the whole body of inherited rites, from ancestral offerings and mourning to how you greet and sit, and trains feeling as well as conduct. To restrain the self and return to li is ren, humaneness (Analects 12.1, paraphrased).',
      practice: 'Pick one small rite you usually rush, like a greeting, a shared meal or a goodbye, and do it fully. Tonight, ask the three questions Confucius’s student Zengzi asked daily (Analects 1.4): did I do my best, was I trustworthy, did I practise what I learned?',
      deeper: 'Analects 1.4, 12.1 and 15.24. Edward Slingerland’s translation (Hackett, 2003) includes traditional commentary on each passage.'
    },

    'rule-of-life': {
      idea: 'In the 6th century Benedict of Nursia wrote a short Rule for monks living together, balancing prayer, work, study, meals and sleep. He called it a little rule for beginners (RB 73), and asked that everyday utensils be treated as vessels of the altar (RB 31). Many lay Christians keep a rule of life too.',
      practice: 'Write down four short lines for an ordinary week, one each for prayer or quiet, work, rest and other people. Keep each small and concrete, such as ten quiet minutes before breakfast. Live with it for a week, then revise it.',
      deeper: 'The Rule of St Benedict, especially the Prologue and chapters 4 and 48; it is short. Joan Chittister’s commentary, The Rule of Benedict, reads it for ordinary life.'
    },

    'golden-mean': {
      idea: 'Aristotle held that a virtue (arete, excellence) is a settled state at a mean between two vices, like courage between cowardice and rashness. Practical wisdom (phronesis) finds the mean for you and the situation, and practice forms the virtue: we become brave by doing brave acts (Nicomachean Ethics 2, paraphrased).',
      practice: 'Take one virtue, say good temper. Aristotle sets it between flaring up too easily and never getting angry even when you should. Today, in one real moment, notice which way you lean, and take a small step toward the middle.',
      deeper: 'Aristotle, Nicomachean Ethics, Book 2, on how virtues are formed and the mean. Edith Hall’s Aristotle’s Way (2018) is a friendly guide for daily life.'
    },

    'right-speech': {
      idea: 'Right speech (samma vaca) is the third factor of the Noble Eightfold Path: refraining from lying, divisive speech, harsh speech and idle chatter. In one discourse the Buddha says he speaks only what is true and beneficial, and knows the right time to say it, welcome or not (Majjhima Nikaya 58, paraphrased).',
      practice: 'For one day, before you speak in any charged moment, run three checks: is it true, is it helpful, is this the right time? Take special care with talk about people who are not there. Notice what you leave unsaid, and what you say differently.',
      deeper: 'Majjhima Nikaya 58 (Abhaya Sutta), and Anguttara Nikaya 5.198 on the five marks of well-spoken words. Thanissaro Bhikkhu’s translations are free on Access to Insight.'
    },

    'greater-struggle': {
      idea: 'Jihad means striving. A saying attributed to the Prophet, returning from battle, calls the struggle with the self the greater jihad; scholars judge its chain weak, but Sufis made it central. They read three Qur’anic phrases as stages of the nafs, the ego: commanding evil (12:53), reproaching (75:2), at peace (89:27).',
      practice: 'Pick one craving that tends to run you, like the urge to win an argument or check your phone. Each time it pulls today, pause for one breath and name it before you act. Many Muslims would add a dhikr such as “astaghfirullah” (I seek God’s forgiveness).',
      deeper: 'Al-Ghazali, Revival of the Religious Sciences, Book 22, in T. J. Winter’s translation, Al-Ghazali on Disciplining the Soul (Islamic Texts Society).'
    },

    /* Love and other people */

    'ubuntu': {
      idea: 'Ubuntu is a Southern African ethic summed up in the Nguni saying “umuntu ngumuntu ngabantu”: a person is a person through other persons. Personhood is achieved and can be lost: of someone cruel, people may say “he is not a person”. Desmond Tutu wrote that we are diminished when others are diminished (paraphrased).',
      practice: 'Find one person you see often but don’t really know: a neighbour, a colleague on another team, someone who serves you each week. Learn their name, use it, and at a natural moment ask them one question that isn’t small talk. Listen to the answer.',
      deeper: 'Desmond Tutu, No Future Without Forgiveness (1999), on ubuntu and South Africa’s Truth and Reconciliation Commission. For the philosophy, Mogobe Ramose, African Philosophy through Ubuntu.'
    },

    'ren': {
      idea: 'Ren, often translated humaneness, is the central virtue of the Analects: the quality of a person who treats others well. Asked what it is, Confucius answered simply, love people (12.22). Its everyday rule is shu, reciprocity: do not impose on others what you would not want for yourself (15.24, paraphrased).',
      practice: 'Pick someone you are on good terms with and have a role toward, as child, parent, colleague or friend. Before you act toward them today, ask what you would want in their place, and do that. Notice what the role asks of you, and what you are glad to give.',
      deeper: 'Analects, books 4, 12 and 15. Annping Chin’s translation (Penguin, 2014) has helpful notes. Mencius 2A.6, the child at the well, shows where ren begins.'
    },

    'metta': {
      idea: 'Metta, loving-kindness, is goodwill wished for others without conditions. The Karaniya Metta Sutta asks for it to reach all beings, as a mother protects her only child (paraphrased). Theravada teachers build it in stages, starting with yourself or someone easy and widening out to strangers and difficult people.',
      practice: 'On your commute or in a queue, silently offer a phrase to people you pass: “May you be well. May you be at ease.” Include at least one person who irritates you. If that is hard, start with yourself or someone you love, then widen out.',
      deeper: 'The Karaniya Metta Sutta (Sutta Nipata 1.8), only a few verses. Sharon Salzberg’s Lovingkindness (1995) is the classic practical guide.'
    },

    'tikkun-olam': {
      idea: 'Tikkun olam means repairing the world. It began as a legal phrase in the Mishnah, took on a mystical sense in Lurianic Kabbalah, where it means gathering scattered sparks of holiness, and now names Jewish social action. Tarfon says you need not finish the work, but are not free to stop (Pirkei Avot 2:16, paraphrased).',
      practice: 'Pick one small broken thing in your shared world: a hazard to report, a neighbour’s errand, a wrong you could put right with a phone call. Fix it, or start to, this week. Then find out who is already working on it and whether you could join them.',
      deeper: 'Pirkei Avot, chapter 2, short and full of practical advice (Tarfon’s saying is 2:21 in some editions). Jonathan Sacks, To Heal a Fractured World (2005), on the ethics of responsibility.'
    },

    'option-for-poor': {
      idea: 'Liberation theology grew in Latin America from the late 1960s and reads the Bible from the side of the poor. Its key phrase, the preferential option for the poor, holds that God has a special care for those pushed to the margins, and so must the church. It measures faith by what it does for them.',
      practice: 'Find out one concrete need near you: a food bank’s shortage list, a shelter’s wish list, a neighbour who can’t get out. Do one thing about it this week. Then ask the liberation theologians’ next question: why is this need here at all?',
      deeper: 'Gustavo Gutiérrez, A Theology of Liberation (1971). For a shorter, more personal way in, Óscar Romero’s homilies, collected as The Violence of Love.'
    },

    'sadaqah': {
      idea: 'Sadaqah is voluntary giving, distinct from zakat, the obligatory annual alms. Its root is shared with sidq, truthfulness. In well-known hadiths the Prophet counts even a smile, or clearing harm from a path, as sadaqah (paraphrased). The Qur’an praises giving in secret (2:271), done to seek the face of God (2:272).',
      practice: 'Do one act of giving today that nobody will credit you for: smile at someone who looks worn out, clear an obstacle off a pavement, pay for the next person’s coffee, or give something to someone who asks. Don’t mention it.',
      deeper: 'Qur’an 2:261 to 2:274, a passage on giving that includes the seed growing seven ears. Many mosques run food drives and welcome volunteers of any faith.'
    },

    'tonglen': {
      idea: 'Tonglen, “sending and taking”, comes from the Tibetan lojong (mind training) teachings associated with Atisha. On the in-breath you imagine taking in another’s suffering; on the out-breath you send them ease. It deliberately reverses the habit of pulling in what is pleasant and pushing away what is not.',
      practice: 'Start small. When you see a stranger mildly struggling today, say someone late for a bus, take a few breaths for them, in with their difficulty and out with ease. Then help if you can. If you are carrying a lot yourself, or it feels heavy, just wish them well.',
      deeper: 'Pema Chödrön, Start Where You Are (1994), a commentary on the Seven Points of Mind Training with clear tonglen instructions.'
    },

    'reciprocity': {
      idea: 'Robin Wall Kimmerer, a Potawatomi botanist, describes the Honorable Harvest in Braiding Sweetgrass: unwritten guidelines for taking from the land. Ask permission and abide by the answer, never take the first or more than half, share, give thanks, and give a gift back (paraphrased). She notes details vary by culture.',
      practice: 'Before you take something living today, such as herbs, a flower or blackberries, pause and ask, ready to leave it if the answer feels like no. Don’t take the first; take no more than half; say thanks. Then give something back, like water for a street tree.',
      deeper: 'Robin Wall Kimmerer, Braiding Sweetgrass (2013), the chapter “The Honorable Harvest”. Her short book The Serviceberry (2024) carries the idea into gift economies.'
    },

    /* Meaning and making */

    'frankl': {
      idea: 'Viktor Frankl, a Viennese psychiatrist who survived Auschwitz and other camps, held that the deepest human drive is a will to meaning. He named three sources: creating a work or doing a deed, loving someone or experiencing something, and the attitude you take to suffering you cannot avoid.',
      practice: 'Tonight, write down one thing for each of Frankl’s three sources: something you made or did today, something or someone you loved or took in, and something hard you met in your own way. If one is empty, that is worth noticing too.',
      deeper: 'Viktor Frankl, Man’s Search for Meaning (1946). Part One is his memoir of the camps; Part Two is a short account of logotherapy, his therapy built around meaning.'
    },

    'freedom': {
      idea: 'Sartre and de Beauvoir held that existence precedes essence: there is no fixed human nature, so you make yourself through your choices. Hiding from that freedom behind a role or a rule is bad faith (mauvaise foi). De Beauvoir added that freedom is always lived in a real situation, bound up with other people’s.',
      practice: 'Each time you think or say “I have to” today, check whether it is really “I’m choosing to, because”. Where it is, say that version and finish the sentence. Where it isn’t a choice, notice what limits you: part of what de Beauvoir called your situation.',
      deeper: 'Sartre, Existentialism Is a Humanism (1946), a short lecture. Simone de Beauvoir, The Ethics of Ambiguity (1947), on why my freedom needs yours.'
    },

    'absurd': {
      idea: 'For Albert Camus the absurd is the clash between our hunger for meaning and the silence of the world. He rejected suicide and the leap of faith, which he called philosophical suicide, and argued for revolt: living fully and lucidly anyway. His image is Sisyphus; the essay ends: “One must imagine Sisyphus happy.”',
      practice: 'Pick one task you repeat endlessly, like the dishes or a commute. Do it today with full attention, without waiting for it to mean something more. Camus was most interested in Sisyphus walking back down for his rock, aware of his fate and unbroken.',
      deeper: 'Albert Camus, The Myth of Sisyphus (1942); the final chapter is only a few pages. Camus refused the existentialist label, though he is often read with Sartre. The Plague (1947) shows revolt in action.'
    },

    'svadharma': {
      idea: 'Svadharma means your own dharma: the duty or path that fits who and where you are. The Gita says it is better to do your own imperfectly than another’s well (3.35, paraphrased). In the text it is bound up with caste duty; many modern readers take it more broadly, as the work that fits your own nature.',
      practice: 'Write down one duty that is clearly yours, given who and where you are, and one you have taken on that really belongs to someone else. This week, give the first a little more care, even twenty minutes, and do it well without needing it to impress anyone.',
      deeper: 'Bhagavad Gita 3.35 and 18.41 to 18.48. Stephen Cope’s The Great Work of Your Life (2012) is a modern reading of the Gita built around dharma.'
    },

    'leap': {
      idea: 'Søren Kierkegaard attacked comfortable Christianity and argued that the truths that matter must be lived by the single individual, not only agreed with. For him faith is a passionate commitment made without proof, a decision reason cannot finish for you. “Leap of faith” is a later summary, not his phrase.',
      practice: 'Pick one good thing you will do today and ask honestly why: for its own sake, for reward, or to avoid blame? Just notice the answer. Kierkegaard’s Purity of Heart Is to Will One Thing holds that only the Good, for him God, can be willed wholeheartedly.',
      deeper: 'Kierkegaard, Fear and Trembling (1843), on Abraham and faith. Provocations, a selection of short readings compiled by Charles E. Moore, is a gentler way in.'
    },

    'let-life-speak': {
      idea: '“Let your life speak” is a Quaker saying, often traced to George Fox’s 1656 advice that Friends’ “carriage and life may preach”. Friends speak of leadings, guidance felt as coming from God, and test them slowly. For big decisions a clearness committee of a few Friends asks honest questions and gives no advice.',
      practice: 'Before a decision this week, ask two or three people you trust to spend half an hour only asking you questions: no advice, no stories of their own. Answer honestly and notice what you hear yourself say. This is a small version of a clearness committee.',
      deeper: 'Parker J. Palmer, Let Your Life Speak (2000), short and personal. His essay The Clearness Committee, free from the Center for Courage & Renewal, explains the process step by step.'
    },

    'ikigai': {
      idea: 'In everyday Japanese, ikigai is whatever makes life feel worth living, and it is often small: a garden, a grandchild’s visits, the morning walk with friends. The popular four-circle Venn diagram (love, skill, need, pay) is Andrés Zuzunaga’s diagram of purpose, relabelled ikigai by a Western blogger in 2014.',
      practice: 'Each evening this week, write down one small thing from the day that made you glad to be alive, however ordinary: a conversation, a meal, a job done well. At the end of the week, read the list. In everyday Japanese usage, those count as ikigai.',
      deeper: 'Ken Mogi, The Little Book of Ikigai (2017), by a Japanese neuroscientist who keeps the everyday sense. Gordon Mathews’s What Makes Life Worth Living? (1996) studies it in real lives.'
    },

    'humanism': {
      idea: 'Secular humanists hold that this is the one life we know we have, and that people can live ethical, meaningful lives without the supernatural, using reason, evidence and compassion. For them, meaning is made together, in what we do for each other. Much of their ethics widens the circle of whose wellbeing counts.',
      practice: 'Do one thing today that helps people you will never meet: report a broken streetlight, correct a mistake in a public resource, check whether you can give blood, or give to a cause with good evidence behind it.',
      deeper: 'Sarah Bakewell, Humanly Possible (2023), a warm history of seven centuries of humanist thought. Many towns have humanist groups that meet for talks and volunteering.'
    },

    /* Wonder and mystery */

    'pale-blue-dot': {
      idea: 'In 1990, at Carl Sagan’s urging, Voyager 1 looked back from about 6 billion kilometres away and photographed Earth as a dot smaller than a pixel, caught in a band of scattered sunlight. Sagan saw in it a lesson in humility, and a duty to deal more kindly with one another (Pale Blue Dot, 1994, paraphrased).',
      practice: 'Tonight, look up the Pale Blue Dot photograph and find Earth in it. Spend a full minute with it. Then place the day’s biggest irritation on that dot, and notice what shrinks and what still matters.',
      deeper: 'Carl Sagan, Pale Blue Dot (1994), chapter 1, which holds his reflection on the image. Recordings of him reading the passage are easy to find.'
    },

    'view-from-above': {
      idea: 'Marcus Aurelius pictured human life from a great height: crowds, farms, weddings, funerals, all brief against the whole of time and space (Meditations 7.48 and 9.30, paraphrased). Pierre Hadot called this the view from above. Marcus used it to shrink petty worries and to see how much he shared with everyone below.',
      practice: 'Sit for five minutes and picture yourself rising above where you are: your room, your street, your city, the country, the planet. Look down at people going about their day, including you. Then come back down and notice how today’s worries look.',
      deeper: 'Marcus Aurelius, Meditations 7.48, 9.30 and 12.24, in Gregory Hays’s readable translation. Pierre Hadot’s The Inner Citadel explains the exercise.'
    },

    'beginners-mind': {
      idea: 'Shoshin, beginner’s mind, means meeting something openly, as if for the first time, even if you know it well. Shunryu Suzuki, who taught Soto Zen in San Francisco, wrote: “In the beginner’s mind there are many possibilities, but in the expert’s there are few” (Zen Mind, Beginner’s Mind, 1970).',
      practice: 'Sit for five minutes as if you had never sat before, with no thought of achievement; Suzuki taught beginner’s mind first as the spirit of zazen. Later, do one thing you know well, like a recipe or a route, slowly, and notice three things you often miss.',
      deeper: 'Shunryu Suzuki, Zen Mind, Beginner’s Mind (1970), short talks with a one-page prologue. Many Zen centres hold beginners’ evenings open to anyone.'
    },

    'butterfly': {
      idea: 'At the end of chapter 2 of the Zhuangzi, Zhuang Zhou dreams he is a butterfly, flitting happily, with no idea he is Zhou. He wakes and cannot tell whether he is a man who dreamed of being a butterfly or a butterfly dreaming he is a man. Yet there must be some distinction, he says: this is the transformation of things.',
      practice: 'A few times today, pause and ask how this moment looks to someone or something else here: a child, a bird on the sill, the person across the table. Hold that view for a moment without deciding which is the real one. An exercise after Zhuangzi.',
      deeper: 'Zhuangzi, chapter 2 (“Discussion on Making All Things Equal” in Burton Watson’s version), which ends with the dream. Brook Ziporyn’s translation (Hackett, 2009) has helpful notes.'
    },

    'radical-amazement': {
      idea: 'Rabbi Abraham Joshua Heschel, who marched with Martin Luther King Jr. at Selma, taught that faith begins in radical amazement: astonishment that anything exists at all. Taking the world for granted, he held, is a kind of blindness. For him awe comes before belief, and it leads toward God.',
      practice: 'Before each thing you eat or drink today, pause and say one line of thanks, in your own words if you don’t use the traditional Jewish blessings. If you see something remarkable, such as a rainbow or a tree in blossom, say one for that too.',
      deeper: 'Abraham Joshua Heschel, God in Search of Man (1955), the chapters on wonder and awe. I Asked for Wonder, a short selection edited by Samuel Dresner, is a gentler start.'
    },

    'reed-flute': {
      idea: 'Rumi’s Masnavi opens with a reed flute: “Listen to the reed how it tells a tale, complaining of separations” (Nicholson’s translation). Cut from its reed bed, it cries with longing to return. For Sufis the reed is the soul parted from its source in God, and the ache of separation is itself a sign of love.',
      practice: 'Notice one moment today when you miss something: a person, a place, an earlier version of yourself. Stay with the feeling for a minute, gently, and ask what it is longing for; stop if it is too raw. Rumi read longing as a pull toward its source.',
      deeper: 'Rumi, Masnavi, Book 1, the first eighteen couplets, the Song of the Reed. Jawid Mojaddedi’s translation (Oxford World’s Classics) stays closer to the Persian than Coleman Barks’s versions.'
    },

    'cloud-of-unknowing': {
      idea: 'The Cloud of Unknowing, an anonymous 14th-century English guide, teaches that God is reached by love, not by thought. You put all you know beneath a “cloud of forgetting” and beat on the darkness above with a short word such as “God” or “love”. This apophatic way, knowing by unknowing, is rarely heard from the pulpit.',
      practice: 'Sit for ten minutes where you won’t be interrupted. Choose one short word, such as “God” or “love” (ch. 7), and let it carry a wordless longing toward God. When thoughts come, the Cloud says to strike them down with that word, beneath the cloud of forgetting.',
      deeper: 'The Cloud of Unknowing, chapters 3 to 7, in A. C. Spearing’s Penguin translation. Thomas Keating’s Open Mind, Open Heart (1986) teaches Centering Prayer, a modern practice built on it.'
    },

    'mono-no-aware': {
      idea: 'Mono no aware, roughly “the pathos of things”, is a deep sensitivity to how things move us. Motoori Norinaga (1730 to 1801) saw it as the heart of The Tale of Genji and of Japanese poetry, and for him it covered joy as well as sorrow. Today it usually means a bittersweet pang at things passing, like falling blossom.',
      practice: 'Choose something that won’t last: blossom, late afternoon light, the last warm evening of the season, a friend’s visit. Give it a few minutes of full attention today, knowing it is passing, and let yourself feel whatever that brings without trying to hold on.',
      deeper: 'Yoshida Kenko, Essays in Idleness (about 1330), especially section 137 on cherry blossoms and the moon. Donald Keene’s translation is the standard one in English.'
    },

    'god-or-nature': {
      idea: 'Baruch Spinoza (1632 to 1677) held that there is one infinite substance: Deus sive Natura, God or Nature. For him God is not a person outside the world who plans and judges, but nature as the active, self-causing whole. Understanding how all things follow from it brings what he called the intellectual love of God.',
      practice: 'When something annoys you, try Spinoza’s move: ask what caused it, and what caused that, until it looks like part of a long chain of nature, not an attack on you. Notice whether understanding changes the feeling, as he claimed (Ethics 5, Propositions 3 and 6).',
      deeper: 'Spinoza, Ethics, the appendix to Part 1 and Part 5. Steven Nadler’s Think Least of Death (2020) is a clear guide to living by Spinoza’s ideas.'
    }
  };

  var T = window.SKILL_TREE;
  Object.keys(texts).forEach(function (id) {
    var node = T && T.nodeById[id];
    if (!node) return;
    node.idea = texts[id].idea; node.practice = texts[id].practice; node.deeper = texts[id].deeper;
  });
})();
