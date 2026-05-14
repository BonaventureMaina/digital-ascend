<script lang="ts">
  import './layout.css';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shows', label: 'Shows' },
    { href: '/blog', label: 'Blog' },
    { href: '/tickets', label: 'Tickets' },
    { href: '/stream', label: 'Stream' },
  ];

  let mobileOpen = $state(false);
</script>

<div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
  <header class="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="text-xl font-bold tracking-tight text-indigo-700 no-underline">
        Digital Ascend Arts
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6">
        {#each navLinks as link}
          <a href={link.href} class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition-colors no-underline">
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
        aria-label="Menu"
        onclick={() => mobileOpen = !mobileOpen}
      >
        {#if mobileOpen}
          <!-- X icon -->
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <!-- Hamburger icon -->
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    {#if mobileOpen}
      <nav class="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
        <div class="px-4 py-2 space-y-1">
          {#each navLinks as link}
            <a
              href={link.href}
              class="block px-3 py-2 rounded text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 transition-colors no-underline text-sm font-medium"
              onclick={() => mobileOpen = false}
            >
              {link.label}
            </a>
          {/each}
        </div>
      </nav>
    {/if}
  </header>

  <main class="flex-1">
    <slot />
  </main>

  <footer class="bg-gray-900 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Digital Ascend Arts Production. All rights reserved.
    </div>
  </footer>
</div>
