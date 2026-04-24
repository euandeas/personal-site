<script lang="ts">
	import { GitHubIcon, LinkedInIcon } from '$lib/assets/icons';
</script>

<footer class="pb-10">
	<div
		class="mx-10 flex max-w-240 flex-col items-center gap-4 border-t border-border pt-6 text-muted-foreground md:mx-auto"
	>
		<a class="text-lg transition-colors hover:text-foreground" href="mailto:contact@euandeas.com">
			contact@euandeas.com
		</a>
		<div class="flex items-center gap-4">
			<a
				href="https://github.com/euandeas"
				target="_blank"
				class="transition-colors hover:text-foreground"
			>
				<GitHubIcon class="h-6 w-6 fill-current" />
			</a>
			<a
				href="https://www.linkedin.com/in/euandeas"
				target="_blank"
				class="transition-colors hover:text-foreground"
			>
				<LinkedInIcon class="h-6 w-6 fill-current" />
			</a>
		</div>
	</div>
</footer>
