<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PathnameWithSearchOrHash } from '$app/types';

	interface PostListEntry {
		title: string;
		slug: string;
		date: string;
	}

	interface Props {
		items: PostListEntry[];
		basePath: string;
		maxItems?: number;
		moreLink?: { href: string; text: string };
	}

	let { items, basePath, maxItems, moreLink }: Props = $props();

	function formatListDate(dateStr: string): string {
		const d = new Date(dateStr.replaceAll('-', '/'));
		const year = d.getFullYear();
		const month = String(d.getMonth() + 1).padStart(2, '0');
		return `${year} · ${month}`;
	}

	const displayed = $derived(maxItems ? items.slice(0, maxItems) : items);
</script>

{#if items.length === 0}
	<p class="py-4 text-lg text-muted-foreground">Coming Soon...</p>
{:else}
	<ul class="flex flex-col">
		{#each displayed as item (item.slug)}
			<li class="group py-2">
				<a
					href={resolve(`${basePath}/${item.slug}` as unknown as PathnameWithSearchOrHash)}
					class="flex items-baseline gap-3 transition-colors hover:text-foreground/70"
				>
					<span class="shrink-0 text-sm text-muted-foreground">
						{formatListDate(item.date)}
					</span>
					<span class="text-lg">{item.title}</span>
				</a>
			</li>
		{/each}
	</ul>

	{#if moreLink && items.length > (maxItems ?? 0)}
		<a
			href={resolve(moreLink.href as unknown as PathnameWithSearchOrHash)}
			class="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
		>
			{moreLink.text} →
		</a>
	{/if}
{/if}
