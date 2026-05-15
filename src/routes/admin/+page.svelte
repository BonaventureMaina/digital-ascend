<script lang="ts">
  let { data, form } = $props();
  const authenticated = () => data.authenticated;
  const error = () => form?.error ?? '';
</script>

<div class="max-w-sm mx-auto mt-16">
  {#if authenticated()}
    <h1 class="text-2xl font-bold mb-6">Admin</h1>
    <div class="space-y-3">
      <a href="/admin/subscribers" class="block bg-white border rounded p-4 hover:shadow no-underline dark:bg-white/5 dark:border-white/10 dark:text-white">
        <span class="font-semibold text-indigo-700 dark:text-amber-400">Subscribers</span>
        <span class="text-sm text-gray-500 block dark:text-gray-400">Manage email list</span>
      </a>
      <a href="/admin/blog" class="block bg-white border rounded p-4 hover:shadow no-underline dark:bg-white/5 dark:border-white/10 dark:text-white">
        <span class="font-semibold text-indigo-700 dark:text-amber-400">Blog Posts</span>
        <span class="text-sm text-gray-500 block dark:text-gray-400">Manage blog content</span>
      </a>
    </div>

    <form method="POST" action="?/logout" class="mt-8">
      <button type="submit" class="text-sm text-gray-500 hover:text-red-600 underline dark:text-gray-400 dark:hover:text-red-400">
        Log out
      </button>
    </form>
  {:else}
    <h1 class="text-2xl font-bold mb-4 dark:text-white">Admin Login</h1>

    <form method="POST" action="?/login" class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium dark:text-gray-300">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          class="mt-1 w-full rounded border-gray-300 shadow-sm p-2 dark:bg-white/10 dark:border-white/20 dark:text-white"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium dark:text-gray-300">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          class="mt-1 w-full rounded border-gray-300 shadow-sm p-2 dark:bg-white/10 dark:border-white/20 dark:text-white"
        />
        {#if error()}
          <p class="text-red-600 text-sm mt-1">{error()}</p>
        {/if}
      </div>
      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">
        Log In
      </button>
    </form>
  {/if}
</div>
