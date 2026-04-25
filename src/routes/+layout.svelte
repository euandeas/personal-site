<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Header } from '$lib/components/header';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href="/assets/logo.png" /></svelte:head>
<ModeWatcher defaultMode="dark" />
<div class="flex min-h-screen flex-col">
	<div class="flex flex-1 justify-center bg-background">
		<Header />

		<div class="mx-10 w-full max-w-240 pt-24 pb-8">
			{@render children()}
		</div>
	</div>
	<Footer />
</div>
