<script lang="ts">
  let { data, form } = $props();
  const authenticated = () => data.authenticated;
  const error = () => form?.error ?? '';
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-sm mx-auto px-4 py-16">
    {#if authenticated()}
      <h1 class="text-2xl font-bold mb-6 text-white">Admin</h1>
      <div class="space-y-3">
        <a href="/admin/subscribers" class="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors no-underline">
          <span class="font-semibold text-amber-400">Subscribers</span>
          <span class="text-sm text-gray-400 block">Manage email list</span>
        </a>
        <a href="/admin/blog" class="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors no-underline">
          <span class="font-semibold text-amber-400">Blog Posts</span>
          <span class="text-sm text-gray-400 block">Manage blog content</span>
        </a>
      </div>

      <form method="POST" action="?/logout" class="mt-8">
        <button type="submit" class="text-sm text-gray-400 hover:text-red-400 underline transition-colors">
          Log out
        </button>
      </form>
    {:else}
      <h1 class="text-2xl font-bold mb-6 text-white">Admin Login</h1>

      <form method="POST" action="?/login" class="space-y-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-300 mb-1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
          {#if error()}
            <p class="text-red-400 text-sm mt-1">{error()}</p>
          {/if}
        </div>
        <button type="submit" class="w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors">
          Log In
        </button>
      </form>
    {/if}
  </div>
</div>
