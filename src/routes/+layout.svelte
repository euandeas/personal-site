<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="/assets/logo.png" /></svelte:head>
<ModeWatcher defaultMode="dark" />
{@render children()}
<Footer />
