<script lang="ts">
  let { data } = $props();
  const subs = () => data.subscribers;
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-3xl mx-auto px-4 py-16">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-bold text-white">Subscribers ({subs().length})</h1>
      {#if subs().length > 0}
        <a href="/api/subscribers.csv" download class="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm transition-colors no-underline">
          Export CSV
        </a>
      {/if}
    </div>

    {#if subs().length === 0}
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
        <p class="text-gray-400">No subscribers yet.</p>
      </div>
    {:else}
      <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="bg-white/10">
              <th class="p-3 text-left text-gray-300 font-medium">ID</th>
              <th class="p-3 text-left text-gray-300 font-medium">Email</th>
              <th class="p-3 text-left text-gray-300 font-medium">Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {#each subs() as sub}
              <tr class="border-t border-white/5">
                <td class="p-3 text-gray-500">{sub.id}</td>
                <td class="p-3 text-gray-200">{sub.email}</td>
                <td class="p-3 text-gray-400">{sub.subscribedAt}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}

    <p class="mt-6 text-sm text-gray-500">
      <a href="/admin" class="text-amber-400 hover:text-amber-300 transition-colors">Admin home</a>
    </p>
  </div>
</div>
