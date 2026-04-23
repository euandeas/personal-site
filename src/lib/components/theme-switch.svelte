<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
</script>

<button
	class={buttonVariants({ variant: 'secondary', size: 'icon' })}
	onclick={toggleMode}
	aria-label="Toggle theme"
>
	<Sun
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
	/>
</button>
