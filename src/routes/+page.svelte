<script lang="ts">
  let { form } = $props();
  const success = form?.success ?? false;
  const error = form?.error ?? '';
</script>

<div class="max-w-3xl mx-auto text-center">
  <h1 class="text-4xl font-bold mt-12 mb-4">
    Digital Ascend Arts Production
  </h1>
  <p class="text-lg text-gray-600 mb-10">
    Original theatre for the stage and the screen.
  </p>

  <!-- Email Signup -->
  <div class="bg-white border rounded-lg p-6 shadow-sm mb-10">
    <h2 class="text-2xl font-semibold mb-2">Be the First to Know</h2>
    <p class="text-gray-600 mb-4">
      <em>"The Last Row"</em> is in development. Sign up for updates, ticket releases, and streaming announcements.
    </p>

    {#if success}
      <p class="text-green-700 bg-green-50 border border-green-200 rounded p-3 text-sm">
        You're on the list! We'll be in touch when tickets go live.
      </p>
    {:else}
      <form method="POST" action="?/subscribe" class="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          class="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto"
        />
        <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 font-medium">
          Notify Me
        </button>
      </form>
      {#if error}
        <p class="text-red-600 text-sm mt-2">{error}</p>
      {/if}
    {/if}
  </div>

  <!-- Secondary links -->
  <div class="flex flex-wrap gap-4 justify-center text-sm text-indigo-700">
    <a href="/shows" class="hover:underline">Shows</a>
    <span class="text-gray-300">|</span>
    <a href="/blog" class="hover:underline">Blog</a>
    <span class="text-gray-300">|</span>
    <a href="/stream" class="hover:underline">Stream</a>
    <span class="text-gray-300">|</span>
    <a href="/tickets" class="hover:underline">Tickets</a>
  </div>
</div>
