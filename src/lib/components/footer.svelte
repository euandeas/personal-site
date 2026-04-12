<script lang="ts">
	import { GitHubIcon, LinkedInIcon } from '$lib/assets/icons';

	let { year = new Date().getFullYear() } = $props();
</script>

<footer class="py-4">
	<div class="relative flex items-center justify-center px-4">
		<span class="text-sm text-gray-700"
			>Euan Deas {year} -
			<a class="hover:underline" href="mailto:contact@euandeas.com">contact@euandeas.com</a></span
		>
		<div class="absolute right-4 flex md:pr-10">
			<a href="https://github.com/euandeas" target="_blank" class="ml-2">
				<GitHubIcon class="h-6 w-6 fill-gray-700" />
			</a>
			<a href="https://www.linkedin.com/in/euandeas" target="_blank" class="ml-2 pl-2">
				<LinkedInIcon class="h-6 w-6 fill-gray-700" />
			</a>
		</div>
	</div>
</footer>
