<script lang="ts">
  let { data } = $props();
  const posts = data.posts;
</script>

<div class="prose prose-lg max-w-none">
  <h1 class="text-3xl font-bold mb-8">Blog</h1>

  <div class="space-y-6">
    {#each posts as post}
      <article class="border-b pb-6">
        <a href="/blog/{post.slug}" class="no-underline">
          <h2 class="text-xl font-semibold text-indigo-700 hover:text-indigo-500 mb-1">
            {post.title}
          </h2>
        </a>
        <p class="text-sm text-gray-500 mb-2">{post.date}</p>
        <p class="text-gray-600">{post.description}</p>
      </article>
    {/each}
  </div>
</div>
