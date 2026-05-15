<script lang="ts">
  let submitted = $state(false);
  let error = $state('');

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xzdolole', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        submitted = true;
        error = '';
      } else {
        const data = await response.json();
        error = data.error || 'Something went wrong. Please try again.';
      }
    } catch {
      error = 'Network error. Please check your connection.';
    }
  }
</script>

<div class="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-amber-400/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative z-10 max-w-3xl mx-auto text-center px-4 py-16">
    <p class="text-amber-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">A New Theatre Company</p>

    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Digital Ascend
      <span class="block text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-gray-300">Arts Production</span>
    </h1>

    <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
      Original one‑act plays for the stage and the screen.<br />
      Debut production: <em class="text-amber-400 not-italic">The Last Row</em> — coming soon.
    </p>

    <!-- PDF Download -->
    <div class="mb-10">
      <a href="/the-last-row-preview.pdf" download class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors text-lg">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Download Preview Script (PDF)
      </a>
      <p class="text-gray-400 text-sm mt-3">Scenes 1–4 — free to read and share.</p>
    </div>

    <!-- Email Signup (Formspree) -->
    <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto mb-10">
      <h2 class="text-lg font-semibold mb-3">Stay Updated</h2>
      <p class="text-sm text-gray-400 mb-4">
        Be the first to know about new scenes, ticket releases, and streaming announcements.
      </p>

      {#if submitted}
        <p class="text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-3 text-sm">
          You're on the list! Thank you.
        </p>
      {:else}
        <form onsubmit={handleSubmit} class="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            class="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
          <button type="submit" class="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors">
            Notify Me
          </button>
        </form>
        {#if error}
          <p class="text-red-400 text-sm mt-2">{error}</p>
        {/if}
      {/if}
    </div>

    <div class="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
      <a href="/shows" class="hover:text-amber-400 transition-colors">Shows</a>
      <a href="/blog" class="hover:text-amber-400 transition-colors">Blog</a>
      <a href="/stream" class="hover:text-amber-400 transition-colors">Stream</a>
      <a href="/tickets" class="hover:text-amber-400 transition-colors">Tickets</a>
    </div>
  </div>
</div>
