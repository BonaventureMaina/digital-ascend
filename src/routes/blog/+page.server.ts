import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { format } from 'date-fns';
import { desc } from 'drizzle-orm';

export function load() {
  const list = db.select().from(posts).orderBy(desc(posts.date)).all();

  return {
    posts: list.map(p => {
      let formattedDate = 'Unknown date';
      try {
        if (p.date) {
          formattedDate = format(p.date, 'MMMM d, yyyy');
        }
      } catch {
        // leave as 'Unknown date'
      }
      return {
        slug: p.slug,
        title: p.title,
        date: formattedDate,
        description: p.description,
      };
    })
  };
}
