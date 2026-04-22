<script lang="ts">
	import HeaderControls from './header-controls.svelte';
	import DesktopNav from './header-desktop-nav.svelte';
	import MobileNav from './header-mobile-nav.svelte';
	import Footer from './header-footer.svelte';

	let { isSticky = false } = $props();

	let checked = $state(false);
</script>

<HeaderControls {isSticky} bind:checked />

<MobileNav {checked} />

<div
	class="fixed flex w-full flex-col items-center justify-center bg-background text-center transition-all duration-700
{isSticky ? 'h-16' : 'h-screen'} z-30"
>
	<div
		class="w-full transition-all duration-700 {isSticky
			? 'max-w-full'
			: 'max-w-350'} mx-10 flex min-h-full flex-col justify-center md:flex-row"
	>
		<div class="flex flex-1 items-center justify-start px-6 md:px-10 md:text-left">
			<div class="flex-col">
				<h1 class="font-bold transition-all duration-700 {isSticky ? 'text-2xl' : 'text-6xl'}">
					<a href="/">Euan Deas</a>
				</h1>
				<h2
					class="transition-all duration-700 {isSticky
						? 'mt-0 text-[0rem] text-transparent'
						: 'mt-2 text-2xl text-gray-600'}"
				>
					Student, Back-end Software Dev & Endurance Athlete
				</h2>
			</div>
		</div>
		<DesktopNav {isSticky} />
	</div>
	<Footer {isSticky} />
</div>
