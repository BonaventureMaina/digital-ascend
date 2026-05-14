import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

export const prerender = true;

export function load() {
  const blogDir = resolve('src/content/blog');
  const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));

  const posts = files.map(file => {
    const raw = readFileSync(resolve(blogDir, file), 'utf-8');
    const { data } = matter(raw);
    const slug = file.replace('.md', '');

    let formattedDate = 'Unknown date';
    try {
      if (data.date) {
        formattedDate = format(data.date, 'MMMM d, yyyy');
      }
    } catch { /* leave as unknown */ }

    return {
      slug,
      title: data.title,
      date: formattedDate,
      description: data.description || '',
    };
  });

  // Sort by date descending (assuming ISO date strings)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return { posts };
}
