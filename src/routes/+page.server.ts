import type { Project, Post } from '$lib/types';

export async function load({ fetch }) {
	const responseproj = await fetch('api/projects');
	const projects: Project[] = await responseproj.json();
	const responsepost = await fetch('api/posts');
	const posts: Post[] = await responsepost.json();
	return { projects, posts };
}
