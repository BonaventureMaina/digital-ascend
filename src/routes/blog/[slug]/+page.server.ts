import { marked } from 'marked';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { format } from 'date-fns';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const { slug } = params;

  try {
    const filePath = resolve(`src/content/blog/${slug}.md`);
    const raw = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const html = marked(content);

    return {
      title: data.title,
      date: format(data.date, 'MMMM d, yyyy'),
      description: data.description,
      html
    };
  } catch {
    throw error(404, 'Post not found');
  }
}
