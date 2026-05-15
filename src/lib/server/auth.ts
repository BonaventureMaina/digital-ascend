import { db } from '$lib/server/db';
import { adminUsers } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export function verifyLogin(username: string, password: string): boolean {
  const user = db.select().from(adminUsers).where(eq(adminUsers.username, username)).get();
  if (!user) return false;
  return bcrypt.compareSync(password, user.passwordHash);
}
