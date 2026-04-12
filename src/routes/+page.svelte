<script lang="ts">
	let { data } = $props();

	import { Header } from '$lib/components/header';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { onMount } from 'svelte';

	let y: number = $state(0);
	let isSticky = $state(false);

	const events = [
		{ id: 0, year: 'Feb 03', description: 'Born in the UK.' },
		{
			id: 1,
			year: 'Sep 21 - Jul 25',
			description: 'Computer Science Msci at the University of Nottingham.'
		},
		{
			id: 2,
			year: 'May 24 - Jul 25',
			description: 'President of The University of Nottingham Boat Club.'
		},
		{ id: 3, year: 'Aug 25 - Pres.', description: 'Software Engineer @ iplicit' }
	];

	const technologies = [
		{ id: 0, name: 'C/C++', experience: '3' },
		{ id: 1, name: 'C#', experience: '3' },
		{ id: 2, name: 'Java', experience: '3' },
		{ id: 3, name: 'Rust', experience: '2' },
		{ id: 4, name: 'HTML/CSS/Typescript', experience: '2' },
		{ id: 5, name: 'Linux', experience: '2' },
		{ id: 6, name: 'Git', experience: '3' },
		{ id: 7, name: 'SQL', experience: '3' },
		{ id: 8, name: 'Android (Native & .Net)', experience: '2' },
		{ id: 9, name: 'Python', experience: '2' },
		{ id: 10, name: 'Haskell', experience: '1' },
		{ id: 11, name: 'Svelte', experience: '2' },
		{ id: 12, name: 'React', experience: '2' }
	];

	const badgeClass = (experience: string) =>
		experience === '1'
			? 'rounded-lg border-0 bg-linear-to-tl from-blue-400 to-blue-300 p-4 text-sm'
			: experience === '2'
				? 'rounded-lg border-0 bg-linear-to-tl from-blue-600 to-blue-400 p-4 text-sm'
				: 'rounded-lg border-0 bg-linear-to-tl from-blue-800 to-blue-600 p-4 text-sm';

	const handleWheel = (e: WheelEvent) => {
		if (window.scrollY === 0 && e.deltaY > 0) {
			const prevent = (ev: Event) => ev.preventDefault();
			window.addEventListener('wheel', prevent, { passive: false });
			window.addEventListener('touchmove', prevent, { passive: false });

			e.preventDefault();
			window.scrollTo({ top: 1, behavior: 'instant' });
			isSticky = true;

			setTimeout(() => {
				window.removeEventListener('wheel', prevent);
				window.removeEventListener('touchmove', prevent);
			}, 700);
		} else if (window.scrollY === 0) {
			isSticky = false;
		} else if (window.scrollY > 0) {
			isSticky = true;
		}
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			const touchNoop = () => {};
			window.addEventListener('wheel', handleWheel, { passive: false });
			window.addEventListener('touchmove', touchNoop, { passive: true });

			return () => {
				window.removeEventListener('wheel', handleWheel);
				window.removeEventListener('touchmove', touchNoop);
			};
		}
	});

	$effect(() => {
		if (!isSticky && y > 10) {
			isSticky = true;
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div class="flex justify-center bg-background">
	<Header {isSticky} />

	<div class="mx-10 w-full max-w-240 pt-24">
		<div>
			<span id="about" class="absolute -translate-y-16"></span>
			<div class="flex w-full flex-col pb-8 md:flex-row">
				<div class="flex pr-4 pb-8 md:pb-0">
					<img class="m-auto max-w-64 rounded object-cover" src="/assets/me.jpg" alt="Euan" />
				</div>
				<div class="flex-1 pl-4">
					<h1 class="pb-6 text-3xl font-semibold">About Me</h1>
					<p class="pb-4">
						Hey, I'm Euan! I'm a Software Engineer currently working at iplicit and a Computer
						Science Msci graduate from the University of Nottingham. I've been passionate about
						software development since 2016, starting out as a self-taught programmer and continuing
						to deepen my knowledge through my studies. I particularly have interests in privacy and
						enjoy tinkering with technology (particularly Linux!). Although my focus is primarily on
						back-end development, I do have limited experience with front-end development through
						creating websites, web apps and mobile apps.
					</p>
				</div>
			</div>

			<div class="flex w-full flex-col pb-8 md:flex-row">
				<div class="flex-1 pr-4">
					<h2 class="pb-6 text-2xl font-semibold">Biography</h2>
					<div class="relative flex flex-col pb-8 md:pb-0">
						{#each events as event, i (event.id)}
							<div class="relative flex items-stretch">
								<!-- Year -->
								<div class="w-1/3 text-right">
									<span class="text-lg font-semibold">{event.year}</span>
								</div>

								<!-- Dot and Line Container -->
								<div class="relative flex w-1/12 flex-col items-center px-8">
									{#if i !== events.length - 1}
										<div
											class="absolute mt-2 h-full bg-black dark:bg-white"
											style="width: 2px;"
										></div>
									{/if}
									<div class="z-0 mt-2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
								</div>

								<!-- Description -->
								<div class="w-7/12 pb-4">
									<p>{event.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex-1 pl-4">
					<h2 class="text-2xl font-semibold">Technologies & Languages Experience</h2>
					<h2 class="pb-6 text-sm text-gray-700">
						The more intense the blue, the higher the level of experience.
					</h2>
					<div class="flex w-full flex-wrap gap-3">
						{#each technologies as tech (tech.id)}
							<Badge class={badgeClass(tech.experience)}>{tech.name}</Badge>
						{/each}
					</div>
				</div>
			</div>

			<div class="flex w-full flex-col pb-8 md:flex-row">
				<div class="flex-1 pr-4 pb-8 md:pb-0">
					<h2 class="pb-6 text-2xl font-semibold">Sports</h2>
					<p class="pb-4">
						I have been rowing since 2014, starting as a junior at Reading Rowing Club. During my
						time at university, I continued to row, and in my fourth and final year, I stepped into
						the role of President of the boat club. I consistently competed nationally with the
						university at events such as BUCS and HORR. I have also had the opportunity to attend
						qualifiers for and race at Henley Royal Regatta.
					</p>
					<p class="pb-8">
						While at university, I took up road cycling as part of cross-training for rowing.
						Although I don't compete in cycling, I thoroughly enjoy the sport and make an effort to
						ride whenever I can. Road cycling has introduced me to a broader world of endurance
						sports, from following the professional peloton to developing an interest in Ironman
						events. I have the ambition to complete an Ironman within the next couple of years.
					</p>
				</div>
				<div class="flex pl-4">
					<img
						class="m-auto max-w-64 rounded object-cover"
						src="/assets/rowing.jpg"
						alt="Euan Rowing"
					/>
				</div>
			</div>
		</div>
		<div id="projects" class="pb-8">
			<h2 class="pb-6 text-2xl font-semibold">Projects</h2>
			{#if data.projects.length === 0}
				<h2 class="pb-6 text-center text-xl">Projects Coming Soon...</h2>
			{/if}
			<div class="flex flex-col md:flex-row">
				{#each data.projects.slice(0, 3) as project (project.slug)}
					<a href={'/projects/' + project.slug}>
						<Card.Root class="my-2 border py-0 shadow-lg hover:shadow-xl md:mx-2">
							<Card.Content class="flex-1 p-0">
								<img
									class="max-h-56 w-full rounded-t-lg object-cover pb-2"
									src={'/assets/projects/' + project.slug + '/thumbnail.jpg'}
									alt="thumbnail"
								/>
								<p class="pb-2 pl-2 text-xl font-semibold">{project.title}</p>
							</Card.Content>
						</Card.Root>
					</a>
				{/each}
			</div>
		</div>
		<div id="blog">
			<h2 class="pb-6 text-2xl font-semibold">Blog</h2>
			{#if data.posts.length === 0}
				<h2 class="pb-6 text-center text-xl">Posts Coming Soon...</h2>
			{/if}
		</div>
	</div>
</div>
