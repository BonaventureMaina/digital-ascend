import Database from 'better-sqlite3';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = resolve(__dirname, '..', 'data', 'digital-ascend.db');
const db = new Database(dbPath);

const username = 'bona';
const password = 'ascend2026';
const hash = bcrypt.hashSync(password, 10);

db.prepare('INSERT OR REPLACE INTO admin_users (username, password_hash, created_at) VALUES (?, ?, ?)').run(
  username, hash, new Date().toISOString()
);

console.log('Admin user seeded:', username);
