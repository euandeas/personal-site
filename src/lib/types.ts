export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Project = {
	title: string;
	slug: string;
	description: string;
	categories: Categories[];
	published: boolean;
	date: string;
};
