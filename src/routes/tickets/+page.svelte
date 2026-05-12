<script lang="ts">
  let { form } = $props();

  const errors = form?.errors ?? {};
  const values = form?.values ?? {};
  const booking = form?.booking ?? null;
  const success = form?.success ?? false;
</script>

<div class="max-w-xl mx-auto">
  <h1 class="text-3xl font-bold mb-6">Tickets</h1>

  {#if success && booking}
    <div class="bg-green-50 border border-green-200 rounded-lg p-6">
      <h2 class="text-xl font-semibold text-green-800 mb-2">Booking Confirmed</h2>
      <p class="text-sm text-green-700 mb-4">Reference: <strong>{booking.ref}</strong></p>

      <div class="bg-white p-4 rounded border border-green-100 space-y-2 text-sm">
        <p><strong>Show:</strong> {booking.show}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Tickets:</strong> {booking.quantity}</p>
        <p><strong>Name:</strong> {booking.name}</p>
        <p><strong>Email:</strong> {booking.email}</p>
      </div>

      <p class="mt-4 text-sm text-green-700">This is a simulated booking. No payment has been taken.</p>
      <button
        onclick={() => window.print()}
        class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700"
      >
        Print Ticket
      </button>
    </div>
  {:else}
    <form method="POST" class="space-y-4">
      <div>
        <label for="show" class="block text-sm font-medium">Show</label>
        <select id="show" name="show" class="mt-1 w-full rounded border-gray-300 shadow-sm p-2">
          <option value="">-- Select --</option>
          <option value="The Last Row" selected={values.show === 'The Last Row'}>The Last Row</option>
        </select>
        {#if errors.show}<p class="text-red-600 text-sm mt-1">{errors.show}</p>{/if}
      </div>

      <div>
        <label for="date" class="block text-sm font-medium">Date</label>
        <input type="date" id="date" name="date" value={values.date ?? ''} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
        {#if errors.date}<p class="text-red-600 text-sm mt-1">{errors.date}</p>{/if}
      </div>

      <div>
        <label for="quantity" class="block text-sm font-medium">Tickets (max 4)</label>
        <input type="number" id="quantity" name="quantity" min="1" max="4" value={values.quantity ?? 1} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
        {#if errors.quantity}<p class="text-red-600 text-sm mt-1">{errors.quantity}</p>{/if}
      </div>

      <div>
        <label for="name" class="block text-sm font-medium">Your Name</label>
        <input type="text" id="name" name="name" value={values.name ?? ''} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
        {#if errors.name}<p class="text-red-600 text-sm mt-1">{errors.name}</p>{/if}
      </div>

      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input type="email" id="email" name="email" value={values.email ?? ''} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
        {#if errors.email}<p class="text-red-600 text-sm mt-1">{errors.email}</p>{/if}
      </div>

      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Book Now (Simulated)
      </button>
    </form>
  {/if}
</div>
