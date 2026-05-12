<script lang="ts">
	import './layout.css';
	import './layout.css';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/shows', label: 'Shows' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/tickets', label: 'Tickets' },
		{ href: '/stream', label: 'Stream' }
	];
</script>

<div
	class="min-h-screen flex flex-col bg-gray-50 text-gray-900"
>
	<!-- Header -->

	<header class="bg-white shadow-sm border-b">
		<div
			class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
		>
			<a
				href="/"
				class="text-xl font-bold tracking-tight text-indigo-700 no-underline"
			>Digital Ascend Arts</a>

			<nav class="hidden md:flex gap-6">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition-colors no-underline"
					>{link.label}</a>
				{/each}
			</nav>

			<button
				class="md:hidden p-2 rounded text-gray-600 hover:bg-gray-100"
				aria-label="Menu"
			>
				<svg
					class="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>
	</header>

	<!-- Page content injected here -->
	<main class="flex-1 max-w-6xl mx-auto px-4 py-8 w-full"><slot></slot></main>
	<!-- Footer -->

	<footer class="bg-white border-t mt-auto">
		<div
			class="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500"
		>© {new Date().getFullYear()} Digital Ascend Arts Production. All rights reserved.</div>
	</footer>
</div>
