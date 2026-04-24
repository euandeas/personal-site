<script lang="ts">
	import { Header } from '$lib/components/header';
	import { PostList } from '$lib/components/post-list';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects — Euan Deas</title>
	<meta name="description" content="Projects by Euan Deas." />
</svelte:head>

<div class="flex justify-center bg-background">
	<Header />

	<div class="mx-10 w-full max-w-240 pt-24">
		<h1 class="pb-6 text-3xl font-semibold">Projects</h1>
		<PostList items={data.projects} basePath="/projects" />
	</div>
</div>
