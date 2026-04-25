<script lang="ts">
	import { formatDate } from '$lib/utils';
	import '$lib/styles/article.css';

	let { data } = $props();
</script>

<svelte:head>
	<title>Euan Deas - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<header class="pb-8">
		<h1 class="pb-2 text-3xl font-semibold">{data.meta.title}</h1>
		{#if data.meta.date}
			<p class="pb-4 text-sm text-muted-foreground">Released on {formatDate(data.meta.date)}</p>
		{/if}

		{#if data.meta.categories?.length}
			<div class="flex flex-wrap gap-3">
				{#each data.meta.categories as category (category)}
					<span
						class="rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
					>
						&num;{category}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose dark:prose-invert">
		<data.content />
	</div>
</article>
