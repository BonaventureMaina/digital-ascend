import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export function load({ cookies }) {
  const token = cookies.get('admin_token');
  if (token !== env.ADMIN_PASSWORD) throw redirect(307, '/admin');
}

export const actions = {
  default: async ({ request, cookies }) => {
    const token = cookies.get('admin_token');
    if (token !== env.ADMIN_PASSWORD) throw redirect(307, '/admin');

    const data = await request.formData();
    const title = (data.get('title') as string).trim();
    let slug = (data.get('slug') as string).trim().toLowerCase().replace(/\s+/g, '-');
    const description = (data.get('description') as string).trim();
    const content = (data.get('content') as string).trim();
    let date = (data.get('date') as string).trim();

    if (!title || !content) {
      return { success: false, error: 'Title and content are required.' };
    }

    if (!slug) {
      slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    if (!date) {
      date = new Date().toISOString().split('T')[0];
    }

    const existing = db.select().from(posts).where(eq(posts.slug, slug)).get();
    if (existing) {
      slug = slug + '-' + Date.now().toString().slice(-4);
    }

    db.insert(posts).values({
      slug,
      title,
      description,
      content,
      date,
      createdAt: new Date().toISOString()
    }).run();

    throw redirect(302, '/admin/blog');
  }
};
