<script lang="ts">
  import { enhance } from '$app/forms';

  let { data, form } = $props();
  const post = data.post;
  const error = () => form?.error ?? '';
  let submitting = $state(false);
</script>

<div class="max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Edit Blog Post</h1>

  {#if error()}
    <p class="text-red-600 bg-red-50 border border-red-200 p-3 rounded mb-4 text-sm">{error()}</p>
  {/if}

  <form
    method="POST"
    use:enhance={() => {
      submitting = true;
      return async ({ update }) => {
        await update();
        submitting = false;
      };
    }}
    class="space-y-4"
  >
    <div>
      <label for="title" class="block text-sm font-medium">Title</label>
      <input type="text" id="title" name="title" required value={post.title} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="description" class="block text-sm font-medium">Description</label>
      <input type="text" id="description" name="description" value={post.description || ''} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="date" class="block text-sm font-medium">Date</label>
      <input type="date" id="date" name="date" value={post.date} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="content" class="block text-sm font-medium">Content (Markdown)</label>
      <textarea id="content" name="content" rows="12" required class="mt-1 w-full rounded border-gray-300 shadow-sm p-2 font-mono text-sm">{post.content}</textarea>
    </div>

    <div class="flex gap-3">
      <button type="submit" disabled={submitting} class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50">
        {submitting ? 'Saving...' : 'Update Post'}
      </button>
      <a href="/admin/blog" class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 no-underline">Cancel</a>
    </div>
  </form>
</div>
