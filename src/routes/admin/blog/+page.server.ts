import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export function load({ cookies }) {
  const token = cookies.get('admin_token');
  if (token !== env.ADMIN_PASSWORD) throw redirect(303, '/admin');

  const list = db.select().from(posts).orderBy(desc(posts.date)).all();
  return { posts: list };
}
