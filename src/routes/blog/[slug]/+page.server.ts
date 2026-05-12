import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { format } from 'date-fns';

export function load({ params }) {
  const post = db.select().from(posts).where(eq(posts.slug, params.slug)).get();

  if (!post) throw error(404, 'Post not found');

  const html = marked(post.content);

  return {
    title: post.title,
    date: format(post.date, 'MMMM d, yyyy'),
    description: post.description,
    html
  };
}
