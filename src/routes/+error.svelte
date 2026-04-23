<script lang="ts">
	import { page } from '$app/state';
	import { Header } from '$lib/components/header';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
	<title>{page.status}</title>
</svelte:head>

<div class="fixed inset-0 z-40 flex flex-col items-center bg-background">
	<Header />

	<div class="flex w-full max-w-240 flex-1 flex-col items-center justify-center px-10">
		<h1 class="text-5xl font-bold">{page.status} - {page.error?.message}</h1>
	</div>

	<div class="w-full">
		<Footer />
	</div>
</div>
