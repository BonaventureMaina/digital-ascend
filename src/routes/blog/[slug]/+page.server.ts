import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';
import { format } from 'date-fns';

export const prerender = true;

export function entries() {
  const blogDir = resolve('src/content/blog');
  const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));
  return files.map(file => ({ slug: file.replace('.md', '') }));
}

export function load({ params }) {
  const { slug } = params;
  const filePath = resolve(`src/content/blog/${slug}.md`);

  try {
    const raw = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const html = marked(content);

    return {
      title: data.title,
      date: format(data.date, 'MMMM d, yyyy'),
      description: data.description || '',
      html,
    };
  } catch {
    throw error(404, 'Post not found');
  }
}
