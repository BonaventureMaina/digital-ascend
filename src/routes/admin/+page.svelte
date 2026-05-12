<script lang="ts">
  let { form } = $props();
  const error = form?.error ?? '';
  const success = form?.success ?? false;
</script>

<div class="max-w-sm mx-auto mt-16">
  <h1 class="text-2xl font-bold mb-4">Admin Login</h1>

  {#if success}
    <p class="text-green-700 bg-green-50 p-3 rounded text-sm mb-4">
      Logged in! <a href="/admin/subscribers" class="underline">Go to subscriber list</a>.
    </p>
  {:else}
    <form method="POST" action="?/login" class="space-y-4">
      <div>
        <label for="password" class="block text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          class="mt-1 w-full rounded border-gray-300 shadow-sm p-2"
        />
        {#if error}
          <p class="text-red-600 text-sm mt-1">{error}</p>
        {/if}
      </div>
      <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">
        Log In
      </button>
    </form>
  {/if}
</div>
