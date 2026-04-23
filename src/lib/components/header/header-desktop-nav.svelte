<script lang="ts">
	import { resolve } from '$app/paths';
	import { NAV_ITEMS } from './header-nav-items';
</script>

<nav class="mr-6 hidden flex-1 items-center justify-end gap-5 md:flex">
	{#each NAV_ITEMS as item (item.label)}
		<a href={resolve(item.href)} class="text-lg transition-colors hover:underline">
			{item.label}
		</a>
	{/each}
</nav>
