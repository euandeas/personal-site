<script lang="ts">
	import { resolve } from '$app/paths';
	import DesktopNav from './header-desktop-nav.svelte';
	import MobileNav from './header-mobile-nav.svelte';
	import HamburgerButton from './hamburger-button.svelte';
	import ThemeSwitch from '$lib/components/theme-switch.svelte';

	let menuOpen = $state(false);
</script>

<MobileNav bind:checked={menuOpen} />

<header
	class="fixed inset-x-0 top-0 z-50 mx-auto flex h-16 w-full max-w-300 items-center justify-between bg-background px-10"
>
	<a href={resolve('/')} class="text-xl font-bold">Euan Deas</a>

	<DesktopNav />

	<div class="flex items-center gap-2">
		<div class="hidden md:block">
			<ThemeSwitch />
		</div>
		<div class="md:hidden">
			<HamburgerButton bind:checked={menuOpen} />
		</div>
	</div>
</header>
