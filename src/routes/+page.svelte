<script lang="ts">
  let { form } = $props();
  const success = () => form?.success ?? false;
  const error = () => form?.error ?? '';
</script>

<div class="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <!-- Spotlight effect -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-amber-400/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative z-10 max-w-3xl mx-auto text-center px-4 py-16">
    <!-- Tagline -->
    <p class="text-amber-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">A New Theatre Company</p>

    <!-- Title -->
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Digital Ascend
      <span class="block text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-gray-300">Arts Production</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
      Original one‑act plays for the stage and the screen.<br />
      Debut production: <em class="text-amber-400 not-italic">The Last Row</em> — coming soon.
    </p>

    <!-- Email Signup -->
    <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto mb-10">
      <h2 class="text-lg font-semibold mb-3">Be the First to Know</h2>
      <p class="text-sm text-gray-400 mb-4">
        Sign up for updates, ticket releases, and streaming announcements.
      </p>

      {#if success()}
        <p class="text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-3 text-sm">
          You're on the list! We'll be in touch.
        </p>
      {:else}
        <form method="POST" action="?/subscribe" class="flex flex-col sm:flex-row gap-3">
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
        {#if error()}
          <p class="text-red-400 text-sm mt-2">{error()}</p>
        {/if}
      {/if}
    </div>

    <!-- Navigation links -->
    <div class="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
      <a href="/shows" class="hover:text-amber-400 transition-colors">Shows</a>
      <a href="/blog" class="hover:text-amber-400 transition-colors">Blog</a>
      <a href="/stream" class="hover:text-amber-400 transition-colors">Stream</a>
      <a href="/tickets" class="hover:text-amber-400 transition-colors">Tickets</a>
    </div>
  </div>
</div>
