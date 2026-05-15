<script lang="ts">
  import { enhance } from '$app/forms';

  let { form } = $props();
  const error = () => form?.error ?? '';
  let submitting = $state(false);
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-xl mx-auto px-4 py-16">
    <h1 class="text-2xl font-bold mb-4 text-white">New Blog Post</h1>

    {#if error()}
      <p class="text-red-400 bg-red-400/10 border border-red-400/30 p-3 rounded-lg mb-4 text-sm">{error()}</p>
    {/if}

    <form
      method="POST"
      use:enhance={() => {
        submitting = true;
        return async ({ update }) => { await update(); submitting = false; };
      }}
      class="space-y-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
    >
      <div>
        <label for="title" class="block text-sm font-medium text-gray-300 mb-1">Title</label>
        <input type="text" id="title" name="title" required class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-300 mb-1">Description</label>
        <input type="text" id="description" name="description" class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
      </div>
      <div>
        <label for="date" class="block text-sm font-medium text-gray-300 mb-1">Date (leave blank for today)</label>
        <input type="date" id="date" name="date" class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50" />
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-300 mb-1">Content (Markdown)</label>
        <textarea id="content" name="content" rows="12" required class="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"></textarea>
      </div>

      <div class="flex gap-3 pt-2">
        <button type="submit" disabled={submitting} class="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors disabled:opacity-50">
          {submitting ? 'Saving...' : 'Save Post'}
        </button>
        <a href="/admin/blog" class="border border-white/20 text-gray-300 hover:bg-white/10 px-6 py-2.5 rounded-lg transition-colors no-underline">Cancel</a>
      </div>
    </form>
  </div>
</div>
