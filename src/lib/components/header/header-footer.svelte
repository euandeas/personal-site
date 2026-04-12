<script lang="ts">
	import { GitHubIcon, LinkedInIcon } from '$lib/assets/icons';

	let { isSticky = false, year = new Date().getFullYear() } = $props();
</script>

<div class="w-full -translate-y-8 {isSticky ? 'hidden' : ''}">
	<div class="flex items-center justify-between px-4">
		<span
			class="transition-all duration-700 {isSticky
				? 'text-transparent'
				: 'text-gray-700'} text-sm md:mx-auto"
			>Euan Deas {year} -
			<a
				class="hover:underline {isSticky ? 'pointer-events-none' : ''}"
				href="mailto:contact@euandeas.com">contact@euandeas.com</a
			></span
		>
		<div class="flex justify-end md:pr-10">
			<a
				class="ml-2 {isSticky ? 'pointer-events-none' : ''}"
				href="https://github.com/euandeas"
				target="_blank"
			>
				<GitHubIcon
					class="h-6 w-6 transition-all duration-700 {isSticky
						? 'fill-transparent'
						: 'fill-gray-700'}"
				/>
			</a>
			<a
				class="ml-2 pl-2 {isSticky ? 'pointer-events-none' : ''}"
				href="https://www.linkedin.com/in/euandeas"
				target="_blank"
			>
				<LinkedInIcon
					class="h-6 w-6 transition-all duration-700 {isSticky
						? 'fill-transparent'
						: 'fill-gray-700'}"
				/>
			</a>
		</div>
	</div>
</div>
