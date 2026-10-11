#!/usr/bin/env node
/* Builds the single-file sketch page from shell.html, data.js and views/.
   Usage:
     node build.js                      all views -> index.html
     node build.js --only grove,rings   just those views (plus the list)
     node build.js --out /tmp/x.html    write somewhere else
   Content is data.js plus texts.js (if present).
   A view is views/<id>.js, with optional views/<id>.css and
   views/<id>.fonts.txt (Google Fonts "family=..." parts, one per line). */
'use strict';
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const ORDER = ['tech-tree', 'transit', 'grove', 'constellation', 'fog-map', 'rings', 'route'];

function arg(name) {
  const i = process.argv.indexOf(name);
  return i === -1 ? null : process.argv[i + 1];
}

const only = arg('--only') ? arg('--only').split(',').map((s) => s.trim()).filter(Boolean) : null;
const out = arg('--out') || path.join(dir, 'index.html');

const viewDir = path.join(dir, 'views');
const present = fs.existsSync(viewDir)
  ? fs.readdirSync(viewDir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3))
  : [];
let ids = ORDER.filter((id) => present.includes(id))
  .concat(present.filter((id) => !ORDER.includes(id)).sort());
if (only) ids = ids.filter((id) => only.includes(id));

function read(p) { return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; }

const css = ids.map((id) => {
  const c = read(path.join(viewDir, id + '.css'));
  return c ? `/* ---- view: ${id} ---- */\n${c}` : '';
}).filter(Boolean).join('\n');

const js = ids.map((id) => `/* ---- view: ${id} ---- */\n${read(path.join(viewDir, id + '.js'))}`).join('\n');

const families = [];
ids.forEach((id) => {
  read(path.join(viewDir, id + '.fonts.txt')).split('\n').map((l) => l.trim()).filter(Boolean).forEach((f) => {
    if (!families.includes(f)) families.push(f);
  });
});
const fontLink = families.length
  ? `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${families.join('&')}&display=swap">`
  : '';

// texts.js (optional) fills in each node's idea, practice and deeper text.
const data = read(path.join(dir, 'data.js')) + '\n' + read(path.join(dir, 'texts.js'));
for (const [name, text] of [['data.js', data], ['view scripts', js]]) {
  if (/<\/script/i.test(text)) throw new Error(`${name} contains "</script", which would end the inline script early.`);
}

let html = read(path.join(dir, 'shell.html'));
const put = (marker, value) => {
  if (!html.includes(marker)) throw new Error('shell.html is missing ' + marker);
  html = html.split(marker).join(value);
};
put('<!--{{VIEW_FONTS}}-->', fontLink);
put('/*{{VIEW_CSS}}*/', css);
put('/*{{DATA}}*/', data);
put('/*{{VIEWS}}*/', js);

fs.writeFileSync(out, html);
console.log(`Built ${path.relative(process.cwd(), out) || out} with views: ${ids.concat('list').join(', ')} (${html.length} bytes)`);
