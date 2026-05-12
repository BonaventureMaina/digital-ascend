import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

interface Subscriber {
  email: string;
  subscribedAt: string;
}

export const actions = {
  subscribe: async ({ request }) => {
    const data = await request.formData();
    const email = (data.get('email') as string).trim();

    // Basic validation
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    const filePath = resolve('data/subscribers.json');
    const raw = readFileSync(filePath, 'utf-8');
    const subscribers: Subscriber[] = JSON.parse(raw);

    // Check for duplicate
    if (subscribers.some(s => s.email === email)) {
      return { success: false, error: 'This email is already subscribed.' };
    }

    subscribers.push({
      email,
      subscribedAt: new Date().toISOString()
    });

    writeFileSync(filePath, JSON.stringify(subscribers, null, 2));

    return { success: true };
  }
};
