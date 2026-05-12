import { marked } from 'marked';
import matter from 'gray-matter';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { format } from 'date-fns';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export function load() {
  const blogDir = resolve('src/content/blog');
  const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));

  const posts: Post[] = files.map(file => {
    const raw = readFileSync(resolve(blogDir, file), 'utf-8');
    const { data } = matter(raw);
    const slug = file.replace('.md', '');

    return {
      slug,
      title: data.title,
      date: format(data.date, 'MMMM d, yyyy'),
      description: data.description,
    };
  });

  return { posts };
}
