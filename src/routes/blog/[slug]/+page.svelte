<script lang="ts">
  let { data } = $props();
  const title = $derived(data.title);
  const description = $derived(data.description);
</script>

<svelte:head>
  <title>{title} — Digital Ascend Arts Production</title>
  <meta name="description" content={description} />
  <meta property="og:title" content="{title} — Digital Ascend Arts Production" />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title} — Digital Ascend Arts Production" />
  <meta name="twitter:description" content={description} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <article class="max-w-3xl mx-auto px-4 py-16">
    <p class="text-amber-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Production Notes</p>
    <h1 class="text-3xl md:text-4xl font-bold mb-2">{data.title}</h1>
    <p class="text-gray-400 text-sm mb-8">{data.date} — {data.description}</p>

    <div class="prose prose-invert prose-gray max-w-none
      prose-headings:text-amber-400
      prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300
      prose-strong:text-gray-200
      prose-em:text-gray-300
      prose-blockquote:border-amber-400/50 prose-blockquote:text-gray-400
      bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      {@html data.html}
    </div>

    <div class="mt-12 text-center">
      <a href="/blog" class="text-amber-400 hover:text-amber-300 text-sm font-medium">← Back to Blog</a>
    </div>
  </article>
</div>
