import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export function load({ cookies }) {
  if (cookies.get('admin_session') !== 'valid') throw redirect(303, '/admin');
  const list = db.select().from(posts).orderBy(desc(posts.date)).all();
  return { posts: list };
}

export const actions = {
  delete: async ({ request, cookies }) => {
    if (cookies.get('admin_session') !== 'valid') throw redirect(303, '/admin');
    const data = await request.formData();
    const id = parseInt(data.get('id') as string, 10);
    if (id && !isNaN(id)) {
      db.delete(posts).where(eq(posts.id, id)).run();
    }
    throw redirect(303, '/admin/blog');
  },
};
