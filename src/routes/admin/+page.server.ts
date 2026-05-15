import { fail, redirect } from '@sveltejs/kit';
import { verifyLogin } from '$lib/server/auth';

export function load({ cookies }) {
  const session = cookies.get('admin_session');
  const authenticated = session === 'valid';
  return { authenticated };
}

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    if (!username || !password) {
      return fail(401, { error: 'Username and password are required.' });
    }

    if (!verifyLogin(username, password)) {
      return fail(401, { error: 'Invalid username or password.' });
    }

    cookies.set('admin_session', 'valid', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
    });

    throw redirect(303, '/admin');
  },

  logout: async ({ cookies }) => {
    cookies.delete('admin_session', { path: '/' });
    throw redirect(303, '/admin');
  },
};
