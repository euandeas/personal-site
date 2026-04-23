<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<section>
	<ul class="posts">
		{#each data.posts as post (post.slug)}
			<li class="post">
				<a href={resolve(`/blog/${post.slug}`)} class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
