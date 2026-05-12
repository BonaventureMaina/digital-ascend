<script lang="ts">
  let { data } = $props();
  const subs = data.subscribers;
</script>

<div class="max-w-3xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Subscribers ({subs.length})</h1>

  {#if subs.length === 0}
    <p class="text-gray-500">No subscribers yet.</p>
  {:else}
    <div class="overflow-x-auto">
      <table class="w-full border-collapse border border-gray-200 text-sm">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-200 p-2 text-left">ID</th>
            <th class="border border-gray-200 p-2 text-left">Email</th>
            <th class="border border-gray-200 p-2 text-left">Subscribed At</th>
          </tr>
        </thead>
        <tbody>
          {#each subs as sub}
            <tr>
              <td class="border border-gray-200 p-2">{sub.id}</td>
              <td class="border border-gray-200 p-2">{sub.email}</td>
              <td class="border border-gray-200 p-2">{sub.subscribedAt}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}

  <p class="mt-6 text-sm text-gray-500">
    <a href="/admin" class="text-indigo-700 hover:underline">Admin home</a>
  </p>
</div>
