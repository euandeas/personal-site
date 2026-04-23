<script lang="ts">
	let { checked = $bindable(false) } = $props();
</script>

<button
	type="button"
	class="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
	onclick={() => (checked = !checked)}
	aria-label="Toggle menu"
>
	<span
		class="h-0.5 w-6 origin-center bg-foreground transition-all duration-300
			{checked ? 'translate-y-2 rotate-45' : ''}"
	></span>
	<span
		class="h-0.5 w-6 bg-foreground transition-all duration-300
			{checked ? 'opacity-0' : 'opacity-100'}"
	></span>
	<span
		class="h-0.5 w-6 origin-center bg-foreground transition-all duration-300
			{checked ? '-translate-y-2 -rotate-45' : ''}"
	></span>
</button>
