import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { generateSlug } from '$lib/utils/slug';

export function load({ params, cookies }) {
  const token = cookies.get('admin_token');
  if (token !== env.ADMIN_PASSWORD) throw redirect(303, '/admin');

  const id = parseInt(params.id, 10);
  if (isNaN(id)) throw error(404, 'Post not found');

  const post = db.select().from(posts).where(eq(posts.id, id)).get();
  if (!post) throw error(404, 'Post not found');

  return { post };
}

export const actions = {
  default: async ({ request, params, cookies }) => {
    const token = cookies.get('admin_token');
    if (token !== env.ADMIN_PASSWORD) throw redirect(303, '/admin');

    const id = parseInt(params.id, 10);
    if (isNaN(id)) throw error(404, 'Post not found');

    const data = await request.formData();
    const title = (data.get('title') as string).trim();
    const description = (data.get('description') as string).trim();
    const content = (data.get('content') as string).trim();
    let date = (data.get('date') as string).trim();

    if (!title || !content) {
      return { success: false, error: 'Title and content are required.' };
    }

    let slug = generateSlug(title);

    if (!date) {
      date = new Date().toISOString().split('T')[0];
    }

    const existing = db.select().from(posts).where(eq(posts.slug, slug)).get();
    if (existing && existing.id !== id) {
      slug = slug + '-' + Date.now().toString().slice(-4);
    }

    db.update(posts)
      .set({ title, slug, description, content, date })
      .where(eq(posts.id, id))
      .run();

    throw redirect(303, '/admin/blog');
  }
};
