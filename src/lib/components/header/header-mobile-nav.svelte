<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';

	let { checked = $bindable(false) } = $props();

	function closeMenu() {
		checked = false;
	}
</script>

<div
	class="fixed top-0 z-40 w-full bg-background transition-all duration-700 md:hidden {checked
		? 'h-full'
		: 'h-0'}"
>
	<div
		class="mb-0 flex h-full w-full flex-col items-center justify-center px-10 transition-all duration-700 {checked
			? 'py-56 opacity-100'
			: 'py-0 opacity-0'}"
	>
		<a
			href="/#about"
			class="flex-1 transition-all duration-500 hover:underline {checked
				? 'text-2xl'
				: 'pointer-events-none'}"
			onclick={closeMenu}>About</a
		>
		<a
			href="/#projects"
			class="flex-1 transition-all duration-700 hover:underline {checked
				? 'text-2xl'
				: 'pointer-events-none'}"
			onclick={closeMenu}>Projects</a
		>
		<a
			href="/#blog"
			class="flex-1 transition-all duration-700 hover:underline {checked
				? 'text-2xl'
				: 'pointer-events-none'}"
			onclick={closeMenu}>Blog</a
		>

		<div class="flex-1 transition-all duration-500 {checked ? '' : 'pointer-events-none'}">
			<ThemeSwitch />
		</div>
	</div>
</div>
