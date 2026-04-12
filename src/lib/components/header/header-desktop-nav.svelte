<script lang="ts">
	let { isSticky = false } = $props();
</script>

<div
	class="mb-0 flex flex-1 px-10 {isSticky
		? 'mr-10 hidden flex-row items-center justify-end md:flex'
		: 'flex-col pt-10 md:justify-center md:pt-0'}"
>
	<a
		href="/#about"
		class="transition-all duration-700 hover:underline {isSticky
			? 'ml-5'
			: 'py-2 text-2xl md:ml-auto'}">About</a
	>
	<a
		href="/#projects"
		class="transition-all duration-700 hover:underline {isSticky
			? 'ml-5'
			: 'py-2 text-2xl md:ml-auto'}">Projects</a
	>
	<a
		href="/#blog"
		class="transition-all duration-700 hover:underline {isSticky
			? 'ml-5'
			: 'py-2 text-2xl md:ml-auto'}">Blog</a
	>
</div>
