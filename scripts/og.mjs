// Renders the /og page to public/og-image.jpg (1200x630).
// Usage: start the dev server (npm run dev), then: npm run og [-- http://localhost:4321]
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';

const base = process.argv[2] ?? 'http://localhost:4321';
const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error('No Chrome or Edge found. Set CHROME_PATH.');

const dir = mkdtempSync(join(tmpdir(), 'og-'));
const shot = join(dir, 'og.png');
execFileSync(browser, [
  '--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', '--virtual-time-budget=8000',
  `--screenshot=${shot}`, `${base}/og`,
], { stdio: 'inherit' });

const out = 'public/og-image.jpg';
await sharp(shot).resize(1200, 630).jpeg({ quality: 86, mozjpeg: true }).toFile(out);
const { size } = await import('node:fs').then((fs) => fs.statSync(out));
console.log(`Wrote ${out} (${Math.round(size / 1024)} KB)`);
rmSync(dir, { recursive: true, force: true });
