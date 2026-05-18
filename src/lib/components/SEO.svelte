<script lang="ts">
  let { title = 'Digital Ascend Arts Production', description = 'Original one-act plays for the stage and the screen. Debut production: The Last Row.' } = $props();
  const fullTitle = title === 'Digital Ascend Arts Production' ? title : `${title} — Digital Ascend Arts Production`;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://digital-ascend.pages.dev" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
</svelte:head>
