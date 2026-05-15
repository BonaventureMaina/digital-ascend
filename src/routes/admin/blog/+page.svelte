<script lang="ts">
  import { enhance } from '$app/forms';

  let { data } = $props();
  const postsList = () => data.posts;
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-4xl mx-auto px-4 py-16">
    <h1 class="text-2xl font-bold mb-4 text-white">Blog Posts ({postsList().length})</h1>

    <a href="/admin/blog/new" class="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm mb-6 transition-colors no-underline">
      + New Post
    </a>

    <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-white/10">
            <th class="p-3 text-left text-gray-300 font-medium">Title</th>
            <th class="p-3 text-left text-gray-300 font-medium">Date</th>
            <th class="p-3 text-left text-gray-300 font-medium">Slug</th>
            <th class="p-3 text-left text-gray-300 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each postsList() as post}
            <tr class="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td class="p-3 text-gray-200">{post.title}</td>
              <td class="p-3 text-gray-400">{post.date}</td>
              <td class="p-3 text-gray-500 text-xs">{post.slug}</td>
              <td class="p-3">
                <a href="/admin/blog/{post.id}/edit" class="text-amber-400 hover:text-amber-300 mr-3 transition-colors">Edit</a>
                <form method="POST" action="?/delete" style="display:inline"
                  use:enhance={({ event }) => {
                    if (!confirm('Delete this post?')) {
                      event.preventDefault();
                      return;
                    }
                    return async ({ update }) => { await update(); };
                  }}
                >
                  <input type="hidden" name="id" value={post.id} />
                  <button type="submit" class="text-red-400 hover:text-red-300 transition-colors">Delete</button>
                </form>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="mt-6 text-sm text-gray-500">
      <a href="/admin" class="text-amber-400 hover:text-amber-300 transition-colors">Admin home</a>
    </p>
  </div>
</div>
