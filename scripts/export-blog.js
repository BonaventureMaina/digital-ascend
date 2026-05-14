import Database from 'better-sqlite3';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = resolve(__dirname, '..', 'data', 'digital-ascend.db');
const contentDir = resolve(__dirname, '..', 'src', 'content', 'blog');

if (!existsSync(dbPath)) {
  console.log('No database found – skipping blog export.');
  process.exit(0);
}

const db = new Database(dbPath);
const posts = db.prepare('SELECT slug, title, description, content, date FROM posts ORDER BY date DESC').all();

if (!existsSync(contentDir)) mkdirSync(contentDir, { recursive: true });

for (const post of posts) {
  const frontmatter = `---
title: "${post.title}"
date: "${post.date}"
description: "${post.description || ''}"
---

${post.content}
`;
  writeFileSync(resolve(contentDir, `${post.slug}.md`), frontmatter, 'utf-8');
  console.log(`Exported: ${post.slug}.md`);
}

console.log(`Exported ${posts.length} posts.`);
