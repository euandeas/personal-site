<script lang="ts">
	import { PostList } from '$lib/components/post-list';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects — Euan Deas</title>
	<meta name="description" content="Projects by Euan Deas." />
</svelte:head>

<h1 class="pb-6 text-3xl font-semibold">Projects</h1>
<PostList items={data.projects} basePath="/projects" />
