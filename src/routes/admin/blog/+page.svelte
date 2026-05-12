<script lang="ts">
  let { data } = $props();
  const posts = () => data.posts;
</script>

<div class="max-w-3xl mx-auto">
  <h1 class="text-2xl font-bold mb-4">Blog Posts ({posts().length})</h1>

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
      {#each posts() as post}
        <tr>
          <td class="border border-gray-200 p-2">{post.title}</td>
          <td class="border border-gray-200 p-2">{post.date}</td>
          <td class="border border-gray-200 p-2">{post.slug}</td>
          <td class="border border-gray-200 p-2">
            <span class="text-gray-400 text-xs">edit/delete — soon</span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <p class="mt-6 text-sm text-gray-500">
    <a href="/admin" class="text-indigo-700 hover:underline">Admin home</a>
  </p>
</div>
