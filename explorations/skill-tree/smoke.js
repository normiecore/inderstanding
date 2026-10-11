#!/usr/bin/env node
/* Smoke test for one view (or the whole page).
   Usage: NODE_PATH=/opt/node22/lib/node_modules node smoke.js <view-id|all> <out-dir>
   Builds the page, loads it at 1280 and 390 wide in light and dark, reports
   console errors, external requests and horizontal overflow, and saves
   screenshots of the stage. Extend it for your view's own interactions. */
'use strict';
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');

const id = process.argv[2] || 'all';
const outDir = process.argv[3] || '.';
fs.mkdirSync(outDir, { recursive: true });
const file = path.join(outDir, `smoke-${id}.html`);
const args = [path.join(__dirname, 'build.js'), '--out', file];
if (id !== 'all') args.push('--only', id);
execFileSync(process.execPath, args, { stdio: 'inherit' });

(async () => {
  const browser = await chromium.launch();
  let failed = false;
  for (const [w, h, scheme] of [[1280, 900, 'light'], [1280, 900, 'dark'], [390, 844, 'light'], [390, 844, 'dark']]) {
    const context = await browser.newContext({ viewport: { width: w, height: h }, colorScheme: scheme });
    const page = await context.newPage();
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('request', (r) => {
      const u = r.url();
      if (!u.startsWith('file:') && !u.startsWith('data:') && !/fonts\.(googleapis|gstatic)\.com/.test(u)) errors.push('external request: ' + u);
    });
    await page.goto('file://' + file);
    await page.waitForTimeout(1200);
    if (id !== 'all') {
      await page.evaluate((v) => window.__skillTree.show(v), id);
      await page.waitForTimeout(800);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (errors.length || overflow > 0) failed = true;
    console.log(`${w}x${h} ${scheme}: overflow=${overflow} errors=${JSON.stringify(errors)}`);
    const stage = await page.$('#st-stage');
    await stage.screenshot({ path: path.join(outDir, `${id}-${w}-${scheme}.png`) });
    await context.close();
  }
  await browser.close();
  process.exit(failed ? 1 : 0);
})();
