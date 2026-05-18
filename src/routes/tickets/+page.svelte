<script lang="ts">
  let { form } = $props();
  const errors = () => form?.errors ?? {};
  const values = () => form?.values ?? {};
  const booking = () => form?.booking ?? null;
  const success = () => form?.success ?? false;
</script>

<svelte:head>
  <title>Tickets — Digital Ascend Arts Production</title>
  <meta name="description" content="Book tickets for upcoming performances by Digital Ascend Arts Production. Debut play: The Last Row." />
  <meta property="og:title" content="Tickets — Digital Ascend Arts Production" />
  <meta property="og:description" content="Book tickets for upcoming performances by Digital Ascend Arts Production. Debut play: The Last Row." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tickets — Digital Ascend Arts Production" />
  <meta name="twitter:description" content="Book tickets for upcoming performances by Digital Ascend Arts Production. Debut play: The Last Row." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-xl mx-auto px-4 py-16">
    <p class="text-amber-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Book Now</p>
    <h1 class="text-4xl md:text-5xl font-bold mb-10">Tickets</h1>

    {#if success() && booking()}
      <div class="bg-green-400/10 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm">
        <h2 class="text-xl font-semibold text-green-400 mb-2">Booking Confirmed</h2>
        <p class="text-sm text-green-300 mb-4">Reference: <strong>{booking().ref}</strong></p>
        <div class="bg-white/5 rounded-lg p-4 space-y-2 text-sm">
          <p><span class="text-gray-500">Show:</span> <span class="text-gray-200">{booking().show}</span></p>
          <p><span class="text-gray-500">Date:</span> <span class="text-gray-200">{booking().date}</span></p>
          <p><span class="text-gray-500">Tickets:</span> <span class="text-gray-200">{booking().quantity}</span></p>
          <p><span class="text-gray-500">Name:</span> <span class="text-gray-200">{booking().name}</span></p>
          <p><span class="text-gray-500">Email:</span> <span class="text-gray-200">{booking().email}</span></p>
        </div>
        <p class="mt-4 text-sm text-green-300">This is a simulated booking. No payment has been taken.</p>
        <button onclick={() => window.print()} class="mt-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors">Print Ticket</button>
      </div>
    {:else}
      <form method="POST" class="space-y-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div>
          <label for="show" class="block text-sm font-medium text-gray-300 mb-1">Show</label>
          <select id="show" name="show" class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50">
            <option value="" class="bg-gray-800">-- Select --</option>
            <option value="The Last Row" selected={values().show === 'The Last Row'} class="bg-gray-800">The Last Row</option>
          </select>
          {#if errors().show}<p class="text-red-400 text-sm mt-1">{errors().show}</p>{/if}
        </div>
        <div>
          <label for="date" class="block text-sm font-medium text-gray-300 mb-1">Date</label>
          <input type="date" id="date" name="date" value={values().date ?? ''} class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          {#if errors().date}<p class="text-red-400 text-sm mt-1">{errors().date}</p>{/if}
        </div>
        <div>
          <label for="quantity" class="block text-sm font-medium text-gray-300 mb-1">Tickets (max 4)</label>
          <input type="number" id="quantity" name="quantity" min="1" max="4" value={values().quantity ?? 1} class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          {#if errors().quantity}<p class="text-red-400 text-sm mt-1">{errors().quantity}</p>{/if}
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
          <input type="text" id="name" name="name" value={values().name ?? ''} class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          {#if errors().name}<p class="text-red-400 text-sm mt-1">{errors().name}</p>{/if}
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" id="email" name="email" value={values().email ?? ''} class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
          {#if errors().email}<p class="text-red-400 text-sm mt-1">{errors().email}</p>{/if}
        </div>
        <button type="submit" class="w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">Book Now (Simulated)</button>
      </form>
    {/if}
  </div>
</div>
