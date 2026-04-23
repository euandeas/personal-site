<script lang="ts">
	import { resolve } from '$app/paths';
	import { NAV_ITEMS } from './header-nav-items';
	import ThemeSwitch from '$lib/components/theme-switch.svelte';

	let { checked = $bindable(false) } = $props();

	function closeMenu() {
		checked = false;
	}
</script>

<div
	class="fixed inset-0 z-40 flex items-center justify-center bg-background transition-all duration-300 md:hidden
		{checked ? 'opacity-100' : 'pointer-events-none opacity-0'}"
>
	<nav class="flex flex-col items-center gap-14">
		{#each NAV_ITEMS as item (item.label)}
			<a
				href={resolve(item.href)}
				class="text-3xl transition-colors hover:text-muted-foreground"
				onclick={closeMenu}
			>
				{item.label}
			</a>
		{/each}

		<div class="mt-8 scale-125">
			<ThemeSwitch />
		</div>
	</nav>
</div>
