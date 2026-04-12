<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Header } from '$lib/components/header';

	let { data } = $props();
	let isSticky = true;
</script>

<svelte:head>
	<title>Euan Deas - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Header {isSticky} />

<article class="article-container">
	<header class="article-header">
		<h1 class="article-title">{data.meta.title}</h1>
		{#if data.meta.date}
			<p class="article-date">Release on {formatDate(data.meta.date)}</p>
		{/if}

		<div class="tags">
			{#each data.meta.categories as category (category)}
				<span class="tag">&num;{category}</span>
			{/each}
		</div>
	</header>

	<div class="prose dark:prose-invert">
		<data.content />
	</div>
</article>

<style>
	.article-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 8rem 2rem 4rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.article-header {
		text-align: center;
		margin-bottom: 2rem;
		width: 100%;
	}

	.article-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 1rem;
		text-transform: capitalize;
		color: var(--text-1);
	}

	.article-date {
		font-size: 1rem;
		color: var(--text-2);
		margin-bottom: 2rem;
		font-style: italic;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
	}

	.tag {
		background: var(--surface-4);
		color: var(--text-1);
		padding: 0.5rem 1rem;
		border-radius: 1.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		border: 1px solid var(--border-1);
		box-shadow: 0 2px 4px var(--shadow-1);
		transition: all 0.2s ease;
	}

	.tag:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 8px var(--shadow-2);
	}

	.prose {
		width: 100%;
		max-width: 70ch;
		line-height: 1.7;
		font-size: 1.125rem;
	}

	.prose :global(h2),
	.prose :global(h3),
	.prose :global(h4) {
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.prose :global(h2) {
		font-size: 1.75rem;
		font-weight: 600;
	}

	.prose :global(h3) {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.prose :global(p) {
		margin-bottom: 1.5rem;
	}

	.prose :global(ul),
	.prose :global(ol) {
		margin-bottom: 1rem;
		padding-left: 2rem;
		list-style-type: disc;
	}

	.prose :global(ol) {
		list-style-type: decimal;
	}

	.prose :global(li) {
		margin-bottom: 0.5rem;
		display: list-item;
	}

	.prose :global(blockquote) {
		border-left: 4px solid var(--accent);
		padding-left: 1.5rem;
		margin: 2rem 0;
		font-style: italic;
		color: var(--text-2);
	}

	.prose :global(code) {
		background: var(--surface-3);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.9em;
	}

	.prose :global(pre) {
		background: var(--surface-3);
		padding: 1.5rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 2rem 0;
	}

	@media (max-width: 768px) {
		.article-container {
			padding: 7rem 1rem 2rem;
		}

		.article-title {
			font-size: clamp(1.75rem, 8vw, 2.5rem);
		}

		.prose {
			font-size: 1rem;
		}

		.tags {
			gap: 0.5rem;
		}

		.tag {
			font-size: 0.8rem;
			padding: 0.4rem 0.8rem;
		}
	}
</style>
