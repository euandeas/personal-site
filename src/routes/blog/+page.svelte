<script lang="ts">
	import { PostList } from '$lib/components/post-list';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Euan Deas</title>
	<meta name="description" content="Blog posts by Euan Deas." />
</svelte:head>

<h1 class="pb-6 text-3xl font-semibold">Blog</h1>
<PostList items={data.posts} basePath="/blog" />
