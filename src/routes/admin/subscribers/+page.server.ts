import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { subscribers } from '$lib/server/db/schema';

export function load({ cookies }) {
  const token = cookies.get('admin_token');
  if (token !== env.ADMIN_PASSWORD) {
    throw redirect(303, '/admin');
  }

  const list = db.select().from(subscribers).all();

  return {
    subscribers: list
  };
}
