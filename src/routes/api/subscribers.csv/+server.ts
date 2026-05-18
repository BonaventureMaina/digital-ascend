import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { subscribers } from '$lib/server/db/schema';

export function GET({ cookies }) {
  if (cookies.get('admin_session') !== 'valid') {
    throw redirect(303, '/admin');
  }
  const list = db.select().from(subscribers).all();
  const csv = ['email,subscribed_at']
    .concat(list.map(s => `${s.email},${s.subscribedAt}`))
    .join('\n');
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="subscribers.csv"',
    },
  });
}
