<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<section>
	<ul class="projects">
		{#each data.projects as post (post.slug)}
			<li class="projects">
				<a href={resolve(`/projects/${post.slug}`)} class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
