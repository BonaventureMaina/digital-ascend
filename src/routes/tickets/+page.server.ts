import type { Actions } from '@sveltejs/kit';

let bookingCounter = 1000; // in-memory counter (resets on server restart)

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const show = data.get('show') as string;
    const date = data.get('date') as string;
    const quantity = parseInt(data.get('quantity') as string, 10);
    const name = data.get('name') as string;
    const email = data.get('email') as string;

    // Basic validation
    const errors: Record<string, string> = {};
    if (!show) errors.show = 'Please select a show.';
    if (!date) errors.date = 'Please choose a date.';
    if (!quantity || quantity < 1 || quantity > 4) errors.quantity = '1–4 tickets only.';
    if (!name) errors.name = 'Name is required.';
    if (!email || !email.includes('@')) errors.email = 'Valid email required.';

    if (Object.keys(errors).length > 0) {
      return { errors, values: { show, date, quantity, name, email } };
    }

    const bookingRef = `ASCEND-${bookingCounter++}`;

    return {
      success: true,
      booking: {
        ref: bookingRef,
        show,
        date,
        quantity,
        name,
        email
      }
    };
  }
} satisfies Actions;
