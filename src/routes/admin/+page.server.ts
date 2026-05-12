import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';

export function load({ cookies }) {
  const token = cookies.get('admin_token');
  const authenticated = token === env.ADMIN_PASSWORD;
  return { authenticated };
}

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get('password') as string;

    if (password !== env.ADMIN_PASSWORD) {
      return fail(401, { error: 'Incorrect password.' });
    }

    cookies.set('admin_token', env.ADMIN_PASSWORD, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24
    });

    throw redirect(303, '/admin');
  },

  logout: async ({ cookies }) => {
    cookies.delete('admin_token', { path: '/' });
    throw redirect(303, '/admin');
  }
};
