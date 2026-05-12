import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = data.get('password') as string;

    if (password !== env.ADMIN_PASSWORD) {
      return fail(401, { error: 'Incorrect password.' });
    }

    // Set a simple authentication cookie (prototype only)
    cookies.set('admin_token', env.ADMIN_PASSWORD, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return { success: true };
  }
};
