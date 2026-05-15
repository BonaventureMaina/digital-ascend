import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));

const scenes = [
  'the-last-row-scene-1-the-empty-dressing-room',
  'the-last-row-scene-2-the-proposition',
  'the-last-row-scene-3-the-mirror',
  'the-last-row-scene-4-the-notes',
];

const htmlParts = [];

for (const slug of scenes) {
  const mdPath = resolve(__dirname, '..', 'src', 'content', 'blog', `${slug}.md`);
  if (!existsSync(mdPath)) {
    console.warn(`⚠️  Missing markdown for ${slug}, skipping.`);
    continue;
  }
  const rawMd = readFileSync(mdPath, 'utf-8');
  // Remove YAML frontmatter
  const contentStart = rawMd.indexOf('---', 3);
  const mdContent = contentStart > -1 ? rawMd.slice(contentStart + 3).trim() : rawMd;
  const html = marked(mdContent);
  htmlParts.push(`<h2 style="page-break-before: always;">${slug.replace(/-/g, ' ').toUpperCase()}</h2>\n${html}`);
}

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>The Last Row – Preview Script</title>
<style>
  body { font-family: Georgia, serif; color: #1a1a1a; line-height: 1.6; max-width: 700px; margin: 0 auto; padding: 40px 20px; }
  h1 { font-size: 2.2em; margin-bottom: 0.2em; color: #4f46e5; }
  h2 { font-size: 1.5em; margin-top: 2em; color: #b45309; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
  strong { color: #111; }
  em { color: #555; }
  .footer { margin-top: 60px; font-size: 0.8em; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
</style>
</head>
<body>
<h1>THE LAST ROW</h1>
<p class="subtitle" style="font-size: 1.1em; color: #666; margin-bottom: 2em;">A one‑act play by Digital Ascend Arts Production<br>
Preview Script — Scenes 1–4</p>
${htmlParts.join('\n')}
<div class="footer">
<p>© 2026 Digital Ascend Arts Production. All rights reserved.</p>
<p>For the complete play, performance rights, or licensing inquiries: visit digital-ascend.pages.dev</p>
</div>
</body>
</html>`;

const outDir = resolve(__dirname, '..', 'static');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const pdfPath = resolve(outDir, 'the-last-row-preview.pdf');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '20mm', bottom: '20mm' } });
  await browser.close();
  console.log('✅ PDF generated at', pdfPath);
})();
