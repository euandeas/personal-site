<script lang="ts">
	import ThemeSwitch from '$lib/components/theme-switch.svelte';
	import { page } from '$app/state';
</script>

<div class="fixed top-0 right-0 z-20 p-3">
	<ThemeSwitch />
</div>

<div
	class="fixed z-0 flex h-screen w-full flex-col items-center justify-center bg-background text-center transition-all duration-700"
>
	<div
		class="mx-10 flex min-h-full w-full max-w-350 flex-col justify-center transition-all duration-700 md:flex-row"
	>
		<div class="flex flex-1 items-center justify-start px-10 md:text-left">
			<div class="flex-col">
				<h1 class="text-6xl font-bold transition-all duration-700"><a href="/">Euan Deas</a></h1>
				<h2 class="mt-2 text-2xl text-gray-600 transition-all duration-700">
					Student, Back-end Software Dev & Endurance Athlete
				</h2>
			</div>
		</div>
		<div class="mb-0 flex flex-1 flex-col px-10 pt-10 md:justify-center md:pt-0">
			<p class="text-3xl">
				{page.status} - {page.error?.message}
			</p>
		</div>
	</div>
</div>
