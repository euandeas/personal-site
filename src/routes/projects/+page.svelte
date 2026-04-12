<script lang="ts">
	let { data } = $props();
</script>

<section>
	<ul class="projects">
		{#each data.projects as post (post.slug)}
			<li class="projects">
				<a href="projects/{post.slug}" class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
