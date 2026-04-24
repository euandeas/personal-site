<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="/assets/logo.png" /></svelte:head>
<ModeWatcher defaultMode="dark" />
<div class="flex min-h-screen flex-col">
	<div class="flex-1">
		{@render children()}
	</div>
	<Footer />
</div>
