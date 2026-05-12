<script lang="ts">
  let { data } = $props();
</script>

<div class="prose prose-lg max-w-none">
  <h1 class="text-3xl font-bold mb-1">{data.title}</h1>
  <p class="text-sm text-gray-500 mb-6">
    {data.date} — {data.description}
  </p>

  {@html data.html}
</div>
