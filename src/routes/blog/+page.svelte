<script lang="ts">
  let { data } = $props();
  const posts = () => data.posts;
</script>

<svelte:head>
  <title>Blog — Production Notes — Digital Ascend Arts Production</title>
  <meta name="description" content="Behind the scenes, script excerpts, and production notes from Digital Ascend Arts Production." />
  <meta property="og:title" content="Blog — Production Notes — Digital Ascend Arts Production" />
  <meta property="og:description" content="Behind the scenes, script excerpts, and production notes from Digital Ascend Arts Production." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Blog — Production Notes — Digital Ascend Arts Production" />
  <meta name="twitter:description" content="Behind the scenes, script excerpts, and production notes from Digital Ascend Arts Production." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-4xl mx-auto px-4 py-16">
    <p class="text-amber-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Production Notes</p>
    <h1 class="text-4xl md:text-5xl font-bold mb-12">Blog</h1>

    {#if posts().length === 0}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <p class="text-gray-400">No posts yet. Check back soon.</p>
      </div>
    {:else}
      <div class="space-y-6">
        {#each posts() as post}
          <article class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <a href="/blog/{post.slug}" class="no-underline">
              <h2 class="text-xl font-semibold text-amber-400 hover:text-amber-300 mb-1">{post.title}</h2>
            </a>
            <p class="text-sm text-gray-500 mb-3">{post.date}</p>
            <p class="text-gray-400 leading-relaxed">{post.description}</p>
            <a href="/blog/{post.slug}" class="inline-block mt-3 text-amber-400 hover:text-amber-300 text-sm font-medium">Read more →</a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</div>
