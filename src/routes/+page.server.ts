import { db } from '$lib/server/db';
import { subscribers } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const actions = {
  subscribe: async ({ request }) => {
    const data = await request.formData();
    const email = (data.get('email') as string).trim();

    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    const existing = db.select().from(subscribers).where(eq(subscribers.email, email)).get();
    if (existing) {
      return { success: false, error: 'This email is already subscribed.' };
    }

    db.insert(subscribers).values({
      email,
      subscribedAt: new Date().toISOString()
    }).run();

    return { success: true };
  }
};
