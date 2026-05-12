<script lang="ts">
  import { enhance } from '$app/forms';

  let { data } = $props();
  const postsList = () => data.posts;
</script>

<div class="max-w-3xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Blog Posts ({postsList().length})</h1>

  <a href="/admin/blog/new" class="inline-block bg-indigo-600 text-white px-4 py-2 rounded text-sm mb-6 hover:bg-indigo-700 no-underline">
    + New Post
  </a>

  <table class="w-full border-collapse border border-gray-200 text-sm">
    <thead>
      <tr class="bg-gray-50">
        <th class="border border-gray-200 p-2 text-left">Title</th>
        <th class="border border-gray-200 p-2 text-left">Date</th>
        <th class="border border-gray-200 p-2 text-left">Slug</th>
        <th class="border border-gray-200 p-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each postsList() as post}
        <tr>
          <td class="border border-gray-200 p-2">{post.title}</td>
          <td class="border border-gray-200 p-2">{post.date}</td>
          <td class="border border-gray-200 p-2">{post.slug}</td>
          <td class="border border-gray-200 p-2">
            <a href="/admin/blog/{post.id}/edit" class="text-indigo-600 hover:text-indigo-800 mr-3">Edit</a>
            <form method="POST" action="?/delete" style="display:inline"
              use:enhance={({ event }) => {
                if (!confirm('Delete this post?')) {
                  event.preventDefault();
                  return;
                }
                return async ({ update }) => {
                  await update();
                };
              }}
            >
              <input type="hidden" name="id" value={post.id} />
              <button type="submit" class="text-red-600 hover:text-red-800">
                Delete
              </button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <p class="mt-6 text-sm text-gray-500">
    <a href="/admin" class="text-indigo-700 hover:underline">Admin home</a>
  </p>
</div>
