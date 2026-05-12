import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export function load({ cookies }) {
  const token = cookies.get('admin_token');
  if (token !== env.ADMIN_PASSWORD) throw redirect(303, '/admin');

  const list = db.select().from(posts).orderBy(desc(posts.date)).all();
  return { posts: list };
}

export const actions = {
  delete: async ({ request, cookies }) => {
    const token = cookies.get('admin_token');
    if (token !== env.ADMIN_PASSWORD) throw redirect(303, '/admin');

    const data = await request.formData();
    const id = parseInt(data.get('id') as string, 10);

    if (!id || isNaN(id)) {
      return { success: false, error: 'Invalid post ID.' };
    }

    db.delete(posts).where(eq(posts.id, id)).run();
    throw redirect(303, '/admin/blog');
  }
};
