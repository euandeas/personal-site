<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import HamburgerButton from './hamburger-button.svelte';

	let { isSticky = false, checked = $bindable(false) } = $props();
</script>

<div class="fixed top-0 right-0 z-50 p-4 {isSticky ? 'hidden md:inline' : ''}">
	<ThemeSwitch />
</div>

<div class="fixed top-0 right-16 z-50 {isSticky ? 'md:hidden' : 'hidden'}">
	<HamburgerButton bind:checked />
</div>
