<script lang="ts">
  let { form } = $props();
  const error = () => form?.error ?? '';

  let slugValue = $state('');
  let titleValue = $state('');
  let submitting = $state(false);

  $effect(() => {
    if (titleValue && !slugValue) {
      slugValue = titleValue
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    submitting = true;

    try {
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: formData,
      });

      // If the server sends a redirect, follow it.
      // Otherwise, always navigate to the admin blog list.
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        window.location.href = '/admin/blog';
      }
    } catch (err) {
      // If the network fails, just go back to the blog list.
      window.location.href = '/admin/blog';
    }
  }
</script>

<div class="max-w-xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">New Blog Post</h1>

  {#if error()}
    <p class="text-red-600 bg-red-50 border border-red-200 p-3 rounded mb-4 text-sm">{error()}</p>
  {/if}

  <form method="POST" onsubmit={handleSubmit} class="space-y-4">
    <div>
      <label for="title" class="block text-sm font-medium">Title</label>
      <input type="text" id="title" name="title" required bind:value={titleValue} class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="slug" class="block text-sm font-medium">Slug <span class="text-gray-400">(auto‑generated from title)</span></label>
      <input type="text" id="slug" name="slug" bind:value={slugValue} placeholder="Will auto‑generate if left empty" class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="description" class="block text-sm font-medium">Description</label>
      <input type="text" id="description" name="description" class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="date" class="block text-sm font-medium">Date</label>
      <input type="date" id="date" name="date" class="mt-1 w-full rounded border-gray-300 shadow-sm p-2" />
    </div>
    <div>
      <label for="content" class="block text-sm font-medium">Content (Markdown)</label>
      <textarea id="content" name="content" rows="12" required class="mt-1 w-full rounded border-gray-300 shadow-sm p-2 font-mono text-sm"></textarea>
    </div>

    <div class="flex gap-3">
      <button type="submit" disabled={submitting} class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50">
        {submitting ? 'Saving...' : 'Save Post'}
      </button>
      <a href="/admin/blog" class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 no-underline">Cancel</a>
    </div>
  </form>
</div>
