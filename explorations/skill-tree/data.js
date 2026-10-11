/* Skill tree sketches: shared content model, questions and scoring.
   Every view draws from window.SKILL_TREE and the profile returned by
   window.SKILL_TREE.score(answers). Views never change this data. */
(function () {
  'use strict';

  /* Six branches. Each is a question a person can be living with,
     not a religion. Traditions appear across several branches. */
  var branches = [
    { id: 'stillness', name: 'Stillness and attention', short: 'Stillness',
      question: 'How do I get quiet enough to notice what is actually here?' },
    { id: 'letting-go', name: 'Letting go and flow', short: 'Letting go',
      question: 'How do I stop gripping what I cannot control?' },
    { id: 'character', name: 'Character and practice', short: 'Character',
      question: 'How do I become, day by day, the person I mean to be?' },
    { id: 'others', name: 'Love and other people', short: 'Others',
      question: 'What do I owe the people around me, and how do I give it?' },
    { id: 'meaning', name: 'Meaning and making', short: 'Meaning',
      question: 'What is my life for, and who gets to decide?' },
    { id: 'wonder', name: 'Wonder and mystery', short: 'Wonder',
      question: 'How do I live alongside what is bigger than me?' }
  ];

  var traditions = {
    christianity: 'Christianity', judaism: 'Judaism', islam: 'Islam',
    hinduism: 'Hinduism', buddhism: 'Buddhism', daoism: 'Daoism',
    confucianism: 'Confucianism', stoicism: 'Stoicism', greek: 'Greek philosophy',
    existentialism: 'Existentialism', humanism: 'Humanism', ubuntu: 'Ubuntu',
    japanese: 'Japanese thought', reciprocity: 'Reciprocity', spinoza: 'Spinoza'
  };

  /* Ranks a person can give a node. This is the "progress" half of the
     skill tree: it only moves when the person says they did something. */
  var ranks = [
    { value: 0, name: 'Not yet' },
    { value: 1, name: 'Heard of it' },
    { value: 2, name: 'Tried it' },
    { value: 3, name: 'Kept it' }
  ];

  /* Node fields
     id, name (max 28 chars, what views label), tradition (key of traditions),
     strand (finer label), branch, depth (1 = a way in, 2 = going further,
     3 = deep end), from (nodes in the same branch this builds on),
     kind ('idea' or 'practice'), tags, door (a less familiar strand of a
     major tradition), theistic (assumes God or the divine),
     idea / practice / deeper (detail text shown in the shared panel). */
  function n(id, name, tradition, strand, branch, depth, from, kind, opts) {
    opts = opts || {};
    return {
      id: id, name: name, tradition: tradition, strand: strand, branch: branch,
      depth: depth, from: from, kind: kind, tags: opts.tags || [],
      door: !!opts.door, theistic: !!opts.theistic,
      idea: '', practice: '', deeper: ''
    };
  }

  var nodes = [
    // Stillness and attention
    n('breath', 'Breath attention', 'buddhism', 'Theravada', 'stillness', 1, [], 'practice', { tags: ['solo', 'body'] }),
    n('jesus-prayer', 'Prayer of the heart', 'christianity', 'Desert Fathers and Mothers', 'stillness', 1, [], 'practice', { tags: ['solo', 'experiential'], door: true, theistic: true }),
    n('zazen', 'Just sitting (zazen)', 'buddhism', 'Zen', 'stillness', 2, ['breath'], 'practice', { tags: ['solo', 'body'] }),
    n('examen', 'The examen', 'christianity', 'Ignatian', 'stillness', 2, ['jesus-prayer'], 'practice', { tags: ['solo', 'experiential'], door: true, theistic: true }),
    n('dhikr', 'Remembrance (dhikr)', 'islam', 'Sufism', 'stillness', 2, ['jesus-prayer'], 'practice', { tags: ['experiential', 'body'], theistic: true }),
    n('waiting-worship', 'Waiting in silence', 'christianity', 'Quaker', 'stillness', 2, ['breath'], 'practice', { tags: ['communal', 'experiential'], door: true, theistic: true }),
    n('sabbath', 'Sabbath', 'judaism', 'Rabbinic, after Heschel', 'stillness', 3, ['examen'], 'practice', { tags: ['communal', 'structured'], theistic: true }),
    n('sitting-forgetting', 'Sitting and forgetting', 'daoism', 'Zhuangzi', 'stillness', 3, ['zazen'], 'practice', { tags: ['solo', 'experiential'] }),

    // Letting go and flow
    n('wu-wei', 'Wu wei', 'daoism', 'Laozi', 'letting-go', 1, [], 'idea', { tags: ['nature'] }),
    n('control', 'What is up to us', 'stoicism', 'Epictetus', 'letting-go', 1, [], 'idea', {}),
    n('karma-yoga', 'Action without grasping', 'hinduism', 'Bhagavad Gita', 'letting-go', 2, ['control'], 'practice', { theistic: true }),
    n('impermanence', 'Impermanence (anicca)', 'buddhism', 'Theravada', 'letting-go', 2, ['wu-wei'], 'idea', {}),
    n('tawakkul', 'Trust (tawakkul)', 'islam', 'Quran and hadith', 'letting-go', 2, ['control'], 'idea', { theistic: true }),
    n('all-shall-be-well', 'All shall be well', 'christianity', 'Julian of Norwich', 'letting-go', 3, ['tawakkul'], 'idea', { tags: ['experiential'], door: true, theistic: true }),
    n('useless-tree', 'The useless tree', 'daoism', 'Zhuangzi', 'letting-go', 3, ['wu-wei'], 'idea', { tags: ['nature'] }),
    n('wabi-sabi', 'Wabi-sabi', 'japanese', 'Aesthetics', 'letting-go', 3, ['impermanence'], 'idea', { tags: ['nature'] }),

    // Character and practice
    n('evening-review', 'Evening review', 'stoicism', 'Seneca', 'character', 1, [], 'practice', { tags: ['solo', 'structured'] }),
    n('middot', 'Soul-traits (middot)', 'judaism', 'Mussar', 'character', 1, [], 'idea', { tags: ['structured'], door: true, theistic: true }),
    n('accounting', 'Accounting of the soul', 'judaism', 'Mussar', 'character', 2, ['middot'], 'practice', { tags: ['structured'], door: true }),
    n('self-cultivation', 'Ritual practice (li)', 'confucianism', 'Analects', 'character', 2, ['evening-review'], 'practice', { tags: ['communal', 'structured'] }),
    n('rule-of-life', 'A rule of life', 'christianity', 'Benedictine', 'character', 2, ['middot'], 'practice', { tags: ['communal', 'structured'], door: true }),
    n('golden-mean', 'The mean', 'greek', 'Aristotle', 'character', 2, ['evening-review'], 'idea', {}),
    n('right-speech', 'Right speech', 'buddhism', 'Eightfold Path', 'character', 3, ['self-cultivation'], 'practice', { tags: ['structured'] }),
    n('greater-struggle', 'The greater struggle', 'islam', 'Sufism', 'character', 3, ['accounting'], 'idea', { theistic: true }),

    // Love and other people
    n('ubuntu', 'Ubuntu', 'ubuntu', 'Southern African', 'others', 1, [], 'idea', { tags: ['communal'] }),
    n('ren', 'Humaneness (ren)', 'confucianism', 'Analects', 'others', 1, [], 'idea', { tags: ['communal'] }),
    n('metta', 'Loving-kindness (metta)', 'buddhism', 'Theravada', 'others', 2, ['ren'], 'practice', { tags: ['solo'] }),
    n('tikkun-olam', 'Repairing the world', 'judaism', 'Tikkun olam', 'others', 2, ['ubuntu'], 'practice', { tags: ['communal'] }),
    n('option-for-poor', 'Standing with the poor', 'christianity', 'Liberation theology', 'others', 2, ['ubuntu'], 'practice', { tags: ['communal'], door: true, theistic: true }),
    n('sadaqah', 'Giving (sadaqah)', 'islam', 'Quran and hadith', 'others', 2, ['ren'], 'practice', { theistic: true }),
    n('tonglen', 'Sending and taking', 'buddhism', 'Tibetan Mahayana', 'others', 3, ['metta'], 'practice', { tags: ['solo'] }),
    n('reciprocity', 'The Honorable Harvest', 'reciprocity', 'Robin Wall Kimmerer', 'others', 3, ['tikkun-olam'], 'practice', { tags: ['nature'] }),

    // Meaning and making
    n('frankl', 'The will to meaning', 'existentialism', 'Viktor Frankl', 'meaning', 1, [], 'idea', {}),
    n('freedom', 'Freedom and responsibility', 'existentialism', 'Sartre and de Beauvoir', 'meaning', 1, [], 'idea', {}),
    n('absurd', 'The absurd and revolt', 'existentialism', 'Albert Camus', 'meaning', 2, ['freedom'], 'idea', {}),
    n('svadharma', 'Your own path (svadharma)', 'hinduism', 'Bhagavad Gita', 'meaning', 2, ['frankl'], 'idea', {}),
    n('leap', 'The leap', 'christianity', 'Kierkegaard', 'meaning', 2, ['freedom'], 'idea', { tags: ['experiential'], door: true, theistic: true }),
    n('let-life-speak', 'Let your life speak', 'christianity', 'Quaker', 'meaning', 3, ['svadharma'], 'practice', { tags: ['experiential'], door: true, theistic: true }),
    n('ikigai', 'Ikigai, the small kind', 'japanese', 'Everyday usage', 'meaning', 3, ['frankl'], 'idea', {}),
    n('humanism', 'Meaning made together', 'humanism', 'Secular humanism', 'meaning', 3, ['absurd'], 'idea', { tags: ['communal'] }),

    // Wonder and mystery
    n('pale-blue-dot', 'The pale blue dot', 'humanism', 'Carl Sagan', 'wonder', 1, [], 'idea', { tags: ['nature'] }),
    n('view-from-above', 'The view from above', 'stoicism', 'Marcus Aurelius', 'wonder', 1, [], 'practice', {}),
    n('beginners-mind', "Beginner's mind", 'buddhism', 'Zen', 'wonder', 2, ['view-from-above'], 'practice', { tags: ['experiential'] }),
    n('butterfly', 'The butterfly dream', 'daoism', 'Zhuangzi', 'wonder', 2, ['pale-blue-dot'], 'idea', {}),
    n('radical-amazement', 'Radical amazement', 'judaism', 'Abraham Joshua Heschel', 'wonder', 2, ['pale-blue-dot'], 'idea', { door: true, theistic: true }),
    n('reed-flute', 'The reed flute', 'islam', 'Rumi', 'wonder', 2, ['view-from-above'], 'idea', { tags: ['experiential'], theistic: true }),
    n('cloud-of-unknowing', 'The cloud of unknowing', 'christianity', 'Apophatic mystics', 'wonder', 3, ['radical-amazement'], 'practice', { tags: ['experiential'], door: true, theistic: true }),
    n('mono-no-aware', 'Mono no aware', 'japanese', 'Aesthetics', 'wonder', 3, ['butterfly'], 'idea', { tags: ['nature'] }),
    n('god-or-nature', 'God or Nature', 'spinoza', 'Ethics', 'wonder', 3, ['butterfly'], 'idea', { tags: ['nature'] })
  ];

  /* Echoes: the same insight turning up in different traditions. These are
     the cross-links between branches, and the most useful thing a tree like
     this can show someone who found one tradition flat. */
  var echoes = [
    { id: 'not-forcing', label: 'Not forcing what you cannot control',
      nodes: ['wu-wei', 'control', 'karma-yoga', 'tawakkul', 'all-shall-be-well'] },
    { id: 'day-review', label: 'Looking back over the day',
      nodes: ['evening-review', 'examen', 'accounting', 'self-cultivation'] },
    { id: 'repeated-word', label: 'A repeated word or breath',
      nodes: ['breath', 'jesus-prayer', 'dhikr'] },
    { id: 'passing', label: 'Everything passes',
      nodes: ['impermanence', 'wabi-sabi', 'mono-no-aware'] },
    { id: 'made-by-others', label: 'You are made by other people',
      nodes: ['ubuntu', 'ren', 'humanism', 'reciprocity'] },
    { id: 'scale', label: 'Seeing yourself at another scale',
      nodes: ['pale-blue-dot', 'view-from-above', 'butterfly'] },
    { id: 'not-knowing', label: 'Not knowing as a way in',
      nodes: ['beginners-mind', 'cloud-of-unknowing', 'useless-tree', 'sitting-forgetting'] },
    { id: 'own-work', label: 'Your own work, done for its own sake',
      nodes: ['svadharma', 'let-life-speak', 'karma-yoga', 'ikigai'] },
    { id: 'repair', label: 'Repair and justice',
      nodes: ['tikkun-olam', 'option-for-poor', 'sadaqah'] },
    { id: 'stopping', label: 'Stopping on purpose',
      nodes: ['sabbath', 'waiting-worship', 'zazen'] }
  ];

  /* Questions. Each option can carry:
     w      branch weights (how the answer pulls toward a branch)
     flags  facts remembered about the person (e.g. grewUp)
     boost  adjustments to specific nodes: { match, delta, why }
            match keys: tradition, door, theistic, kind, tag, branch */
  var quiz = [
    { id: 'q1', short: 'When things go wrong', prompt: 'When something goes badly wrong, what do you reach for first?', options: [
      { id: 'alone', label: 'Time alone to let it settle', w: { stillness: 2, 'letting-go': 1 } },
      { id: 'why', label: 'Working out why it happened', w: { meaning: 2, character: 1 } },
      { id: 'person', label: 'Someone to talk to', w: { others: 2 } },
      { id: 'act', label: 'Something I can do about it', w: { character: 2, meaning: 1 } },
      { id: 'accept', label: 'Accepting it and moving on', w: { 'letting-go': 2 } }
    ] },
    { id: 'q2', short: 'Most like yourself', prompt: 'Where do you feel most like yourself?', options: [
      { id: 'outdoors', label: 'Outdoors, somewhere big', w: { wonder: 2, stillness: 1 }, boost: [{ match: { tag: 'nature' }, delta: 0.08, why: 'You feel most like yourself outdoors.' }] },
      { id: 'conversation', label: 'In a long conversation', w: { others: 2, meaning: 1 } },
      { id: 'making', label: 'Making or fixing something', w: { meaning: 2, character: 1 } },
      { id: 'quiet', label: 'On my own, in quiet', w: { stillness: 2 } },
      { id: 'helping', label: 'Helping someone', w: { others: 2, character: 1 } },
      { id: 'learning', label: 'Learning something new', w: { wonder: 1, meaning: 1 } }
    ] },
    { id: 'q3', short: 'What you grew up with', prompt: 'What did you grow up with?', options: [
      { id: 'christianity', label: 'Christianity', flags: { grewUp: 'christianity' }, boost: [{ match: { tradition: 'christianity', door: true }, delta: 0.3, why: 'A less familiar door into Christianity, which you grew up with.' }] },
      { id: 'judaism', label: 'Judaism', flags: { grewUp: 'judaism' }, boost: [{ match: { tradition: 'judaism', door: true }, delta: 0.3, why: 'A less familiar door into Judaism, which you grew up with.' }] },
      { id: 'islam', label: 'Islam', flags: { grewUp: 'islam' }, boost: [{ match: { tradition: 'islam' }, delta: 0.2, why: 'A strand of Islam, which you grew up with, that is often taught less.' }] },
      { id: 'hinduism', label: 'Hinduism', flags: { grewUp: 'hinduism' }, boost: [{ match: { tradition: 'hinduism' }, delta: 0.2, why: 'From the Gita, part of the tradition you grew up with.' }] },
      { id: 'buddhism', label: 'Buddhism', flags: { grewUp: 'buddhism' }, boost: [{ match: { tradition: 'buddhism' }, delta: 0.15, why: 'From Buddhism, which you grew up with, possibly a strand you met less.' }] },
      { id: 'none', label: 'No religion', flags: { grewUp: 'none' } },
      { id: 'mixed', label: 'A mix, or something else', flags: { grewUp: 'mixed' } }
    ] },
    { id: 'q4', short: 'What didn’t land', prompt: 'If you grew up with a tradition, what didn’t land?', options: [
      { id: 'told', label: 'Being told what to believe', w: { wonder: 1, meaning: 1 }, flags: { didntLand: 'told' }, boost: [{ match: { tag: 'experiential' }, delta: 0.1, why: 'Starts from experience rather than belief, since being told what to believe didn’t land.' }] },
      { id: 'rules', label: 'Rules and guilt', w: { 'letting-go': 1, wonder: 1 }, flags: { didntLand: 'rules' }, boost: [{ match: { tag: 'structured' }, delta: -0.1, why: 'Fairly structured, and rules were what didn’t land. Still here if you want it.' }] },
      { id: 'distant', label: 'It felt far from real life', w: { character: 1, others: 1 }, flags: { didntLand: 'distant' }, boost: [{ match: { kind: 'practice' }, delta: 0.08, why: 'Something you do, not just think about, since the tradition felt far from real life.' }] },
      { id: 'community', label: 'The people more than the ideas', w: { stillness: 1 }, flags: { didntLand: 'community' }, boost: [{ match: { tag: 'communal' }, delta: -0.08, why: 'Done with other people, and the community was what didn’t land.' }] },
      { id: 'landed', label: 'It did land. I want to go deeper', flags: { didntLand: 'none', deepen: true }, boost: [{ match: { door: true }, delta: 0.1, why: 'A deeper strand, since you want to go further into what you know.' }] },
      { id: 'na', label: 'Doesn’t apply to me', flags: { didntLand: 'na' } }
    ] },
    { id: 'q5', short: 'God or something larger', prompt: 'How do you feel about God, or something larger than us?', options: [
      { id: 'believe', label: 'I believe', flags: { theism: 'yes' }, boost: [{ match: { theistic: true }, delta: 0.1, why: 'Assumes God, which fits what you said you believe.' }] },
      { id: 'open', label: 'Open, not sure', w: { wonder: 1 }, flags: { theism: 'open' } },
      { id: 'awe', label: 'No, but awe matters to me', w: { wonder: 2 }, flags: { theism: 'no-awe' }, boost: [{ match: { theistic: true }, delta: -0.12, why: 'Assumes God, which you said you don’t believe in. It may still read well as poetry.' }] },
      { id: 'no', label: 'No, and I’d rather leave it out', flags: { theism: 'no' }, boost: [{ match: { theistic: true }, delta: -0.3, why: 'Assumes God, which you’d rather leave out. Still here if you want to look.' }] }
    ] },
    { id: 'q6', short: 'What you want more of', prompt: 'What do you want more of?', options: [
      { id: 'calm', label: 'Calm', w: { stillness: 2, 'letting-go': 1 } },
      { id: 'courage', label: 'Courage', w: { character: 2, meaning: 1 } },
      { id: 'connection', label: 'Connection', w: { others: 2 } },
      { id: 'direction', label: 'A sense of direction', w: { meaning: 2 } },
      { id: 'wonder', label: 'Wonder', w: { wonder: 2 } },
      { id: 'lightness', label: 'Lightness, less gripping', w: { 'letting-go': 2 } }
    ] },
    { id: 'q7', short: 'The tension you live with', prompt: 'Which tension do you live with most?', options: [
      { id: 'control', label: 'Control versus letting go', w: { 'letting-go': 2 } },
      { id: 'self-others', label: 'What I want versus what others need', w: { others: 1, character: 1 } },
      { id: 'freedom', label: 'Freedom versus commitment', w: { meaning: 2 } },
      { id: 'busy', label: 'Busy versus present', w: { stillness: 2 } },
      { id: 'certainty', label: 'Certainty versus mystery', w: { wonder: 2 } },
      { id: 'ideals', label: 'Who I am versus who I mean to be', w: { character: 2 } }
    ] },
    { id: 'q8', short: 'How you take things in', prompt: 'How do you take things in best?', options: [
      { id: 'reading', label: 'Reading and thinking', boost: [{ match: { kind: 'idea' }, delta: 0.06, why: 'An idea to read and think about, which is how you take things in.' }] },
      { id: 'doing', label: 'Doing it and seeing', boost: [{ match: { kind: 'practice' }, delta: 0.08, why: 'A practice to try, since you learn by doing.' }] },
      { id: 'talking', label: 'Talking it through', w: { others: 1 }, boost: [{ match: { tag: 'communal' }, delta: 0.08, why: 'Done with other people, and you learn by talking things through.' }] },
      { id: 'sitting', label: 'Sitting with it for a while', w: { stillness: 1 } }
    ] },
    { id: 'q9', short: 'Alone or with others', prompt: 'Do you work things out better alone or with others?', options: [
      { id: 'alone', label: 'Mostly alone', boost: [{ match: { tag: 'solo' }, delta: 0.05, why: 'Something you can do on your own.' }, { match: { tag: 'communal' }, delta: -0.05, why: 'Usually done with others, and you work things out alone.' }] },
      { id: 'few', label: 'With one or two people', w: { others: 1 } },
      { id: 'group', label: 'In a group', w: { others: 1 }, boost: [{ match: { tag: 'communal' }, delta: 0.08, why: 'Done with other people, which suits how you work things out.' }] }
    ] },
    { id: 'q10', short: 'Proud at 80', prompt: 'Picture yourself at 80, proud of your life. What is in the picture?', options: [
      { id: 'people', label: 'People I was good to', w: { others: 2 } },
      { id: 'made', label: 'Something I built or made', w: { meaning: 2 } },
      { id: 'peace', label: 'Being at peace', w: { 'letting-go': 1, stillness: 1 } },
      { id: 'word', label: 'Having lived by my word', w: { character: 2 } },
      { id: 'curious', label: 'Having stayed curious', w: { wonder: 2 } }
    ] }
  ];

  /* Example answers for a made-up person: raised Christian, it never quite
     struck a chord, curious whether Daoism fits better. Shown as examples. */
  var sampleAnswers = {
    q1: 'alone', q2: 'outdoors', q3: 'christianity', q4: 'told', q5: 'open',
    q6: 'lightness', q7: 'control', q8: 'doing', q9: 'few', q10: 'peace'
  };

  var nodeById = {};
  nodes.forEach(function (x) { nodeById[x.id] = x; });
  var branchById = {};
  branches.forEach(function (b) { branchById[b.id] = b; });

  function matches(node, m) {
    if (m.tradition && node.tradition !== m.tradition) return false;
    if (m.branch && node.branch !== m.branch) return false;
    if (m.kind && node.kind !== m.kind) return false;
    if (m.tag && node.tags.indexOf(m.tag) === -1) return false;
    if (typeof m.door === 'boolean' && node.door !== m.door) return false;
    if (typeof m.theistic === 'boolean' && node.theistic !== m.theistic) return false;
    return true;
  }

  function round(x) { return Math.round(x * 100) / 100; }

  // The most weight each branch can receive across the whole quiz.
  var capacity = {};
  branches.forEach(function (b) {
    capacity[b.id] = 0;
    quiz.forEach(function (q) {
      var best = 0;
      q.options.forEach(function (o) { if (o.w && o.w[b.id] > best) best = o.w[b.id]; });
      capacity[b.id] += best;
    });
  });

  var START_MIN = 0.3, RELEVANT_MIN = 0.5, RELEVANT_MAX = 9;

  /* Turn answers into a profile. Pure function; same answers, same result.
     Returns:
       answered       number of questions answered
       flags          remembered facts (grewUp, theism, didntLand, deepen)
       branches       { id: { raw, pull (0..1), reasons: [{ q, prompt, answer, weight }] } }
       order          branch ids, strongest pull first
       nodes          { id: { score (0..1), state, door, reasons: [text] } }
                      state: 'start' | 'relevant' | 'stretch' | 'quiet'
       start, stretch arrays of node ids
     Nothing is hidden: 'quiet' nodes are simply not highlighted. */
  function score(answers) {
    answers = answers || {};
    var raw = {}, reasons = {}, flags = {}, boosts = [], answered = 0;
    branches.forEach(function (b) { raw[b.id] = 0; reasons[b.id] = []; });

    quiz.forEach(function (q) {
      var opt = null;
      q.options.forEach(function (o) { if (o.id === answers[q.id]) opt = o; });
      if (!opt) return;
      answered++;
      Object.keys(opt.w || {}).forEach(function (b) {
        raw[b] += opt.w[b];
        reasons[b].push({ q: q.id, prompt: q.short, answer: opt.label, weight: opt.w[b] });
      });
      Object.keys(opt.flags || {}).forEach(function (k) { flags[k] = opt.flags[k]; });
      (opt.boost || []).forEach(function (bo) { boosts.push(bo); });
    });

    // Some branches are fed by more options than others, so each branch is
    // measured against the most it could have received, then scaled so the
    // strongest branch reads 1.
    var ratio = {}, max = 0;
    branches.forEach(function (b) {
      ratio[b.id] = capacity[b.id] ? raw[b.id] / capacity[b.id] : 0;
      if (ratio[b.id] > max) max = ratio[b.id];
    });
    var out = { answered: answered, flags: flags, branches: {}, order: [], nodes: {}, start: [], stretch: [] };
    branches.forEach(function (b) {
      out.branches[b.id] = {
        raw: raw[b.id],
        pull: max ? round(ratio[b.id] / max) : 0,
        reasons: reasons[b.id].slice().sort(function (a, c) { return c.weight - a.weight; })
      };
    });
    out.order = branches.map(function (b) { return b.id; }).sort(function (a, c) {
      return out.branches[c].pull - out.branches[a].pull;
    });

    nodes.forEach(function (node) {
      var br = out.branches[node.branch];
      var s = answered ? 0.12 + 0.62 * br.pull - 0.06 * (node.depth - 1) : 0;
      var why = [];
      if (answered && br.pull >= 0.4) {
        var top = br.reasons.slice(0, 2).map(function (r) { return '“' + r.answer + '”'; });
        if (top.length) why.push('Your answers pull toward ' + branchById[node.branch].name.toLowerCase() + ': ' + top.join(' and ') + '.');
      }
      if (answered) {
        boosts.forEach(function (bo) {
          if (matches(node, bo.match)) { s += bo.delta; why.push(bo.why); }
        });
      }
      s = Math.max(0, Math.min(1, s));
      out.nodes[node.id] = {
        score: round(s), state: 'quiet', reasons: why,
        door: !!(node.door && flags.grewUp && flags.grewUp === node.tradition)
      };
    });

    if (answered) {
      // Start here: the three strongest ways in (depth 1), at most two per branch.
      var ways = nodes.filter(function (x) { return x.depth === 1; }).sort(function (a, c) {
        return out.nodes[c.id].score - out.nodes[a.id].score;
      });
      var perBranch = {};
      ways.forEach(function (x) {
        if (out.start.length >= 3 || out.nodes[x.id].score < START_MIN) return;
        perBranch[x.branch] = (perBranch[x.branch] || 0) + 1;
        if (perBranch[x.branch] > 2) return;
        out.start.push(x.id);
        out.nodes[x.id].state = 'start';
      });
      // Relevant: the next strongest nodes, capped so the highlight means something.
      nodes.filter(function (x) {
        var r = out.nodes[x.id];
        return r.state === 'quiet' && r.score >= RELEVANT_MIN;
      }).sort(function (a, c) {
        return out.nodes[c.id].score - out.nodes[a.id].score;
      }).slice(0, RELEVANT_MAX).forEach(function (x) { out.nodes[x.id].state = 'relevant'; });
      // Stretch: one way in from the branch the answers pulled least toward.
      var weakest = out.order[out.order.length - 1];
      var options = nodes.filter(function (x) {
        return x.branch === weakest && x.depth === 1 && out.nodes[x.id].state === 'quiet';
      }).sort(function (a, c) { return out.nodes[c.id].score - out.nodes[a.id].score; });
      if (options.length) {
        var st = options[0];
        out.stretch.push(st.id);
        out.nodes[st.id].state = 'stretch';
        out.nodes[st.id].reasons.unshift('A stretch. Your answers pulled least toward ' + branchById[weakest].name.toLowerCase() +
          ', so this is the branch you would probably skip. Pushing back on something tells you about yourself too.');
      }
    }
    return out;
  }

  window.SKILL_TREE = {
    branches: branches,
    traditions: traditions,
    ranks: ranks,
    nodes: nodes,
    echoes: echoes,
    quiz: quiz,
    sampleAnswers: sampleAnswers,
    nodeById: nodeById,
    branchById: branchById,
    score: score
  };
})();
