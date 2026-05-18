<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="Shows — The Last Row" description="Our productions. Debut play: The Last Row, a 90-minute one-act play about a theatre critic forced to perform his own script." />

<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950 text-white">
  <div class="max-w-4xl mx-auto px-4 py-16">
    <p class="text-amber-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Our Productions</p>
    <h1 class="text-4xl md:text-5xl font-bold mb-12">Current Season</h1>

    <article class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <h2 class="text-3xl font-bold text-amber-400">The Last Row</h2>
          <p class="text-gray-400 text-sm mt-2">A new one‑act play · 90 minutes · World premiere</p>
        </div>
        <span class="bg-amber-400/20 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded-full self-start">
          In Development
        </span>
      </div>

      <blockquote class="border-l-4 border-amber-400/50 pl-5 italic text-gray-300 mb-8 text-lg leading-relaxed">
        "A disillusioned theatre critic, who has only ever watched from the back row, is forced to act in his own play after the entire cast walks out. As he stumbles through his words live on stage, he discovers the distance between spectator and performer is thinner than he thought."
      </blockquote>

      <div class="prose prose-invert prose-gray max-w-none mb-8">
        <h3 class="text-amber-400">Synopsis</h3>
        <p class="text-gray-300">
          Martin Vale has spent three decades judging theatre from the safety of the back row. When his debut script is accepted by a small company, he arrives on opening night to find the cast has quit — leaving him as the only person who knows every line. What follows is a 90‑minute collision of critic and creation, as Martin performs his own words for an audience that may prefer watching someone fail authentically than succeed perfectly.
        </p>
        <p class="text-gray-400">
          <em>The Last Row</em> explores themes of digital voyeurism, the collapsing fourth wall in the streaming age, and what we owe each other when the lights go down.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
        <div class="flex gap-2">
          <span class="text-gray-500">Playwright:</span>
          <span class="text-gray-300">Digital Ascend Arts Production</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-500">Genre:</span>
          <span class="text-gray-300">Drama / Dark Comedy</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-500">Runtime:</span>
          <span class="text-gray-300">90 minutes, no intermission</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-500">Cast size:</span>
          <span class="text-gray-300">4–6 actors</span>
        </div>
      </div>

      <div class="flex flex-wrap gap-4">
        <a href="/tickets" class="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors inline-block">
          Book Tickets
        </a>
        <a href="/stream" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg transition-colors inline-block">
          Stream Online
        </a>
        <a href="/blog" class="bg-transparent hover:bg-white/5 text-gray-300 border border-gray-600 px-6 py-3 rounded-lg transition-colors inline-block">
          Read Production Notes
        </a>
      </div>
    </article>
  </div>
</div>
