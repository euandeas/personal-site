<script lang="ts">
	let { data } = $props();

	import { Header } from '$lib/components/header';
	import { Badge } from '$lib/components/ui/badge';
	import { PostList } from '$lib/components/post-list';

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
			? 'rounded-lg border-0 bg-linear-to-tl from-blue-400 to-blue-300 p-4 text-base'
			: experience === '2'
				? 'rounded-lg border-0 bg-linear-to-tl from-blue-600 to-blue-400 p-4 text-base'
				: 'rounded-lg border-0 bg-linear-to-tl from-blue-800 to-blue-600 p-4 text-base';
</script>

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div class="flex justify-center bg-background">
	<Header />

	<div class="mx-10 w-full max-w-240 pt-24">
		<div>
			<span id="about" class="absolute -translate-y-16"></span>
			<div class="flex w-full flex-col border-b border-border pb-8 md:flex-row">
				<div class="flex pr-4 pb-8 md:pb-0">
					<img class="m-auto max-w-64 rounded object-cover" src="/assets/me.jpg" alt="Euan" />
				</div>
				<div class="flex-1 pl-4">
					<h1 class="pb-6 text-2xl font-semibold">About Me</h1>
					<p class="pb-4 text-lg">
						Hey, I'm Euan! I'm a Software Engineer currently working as a full stack developer at
						iplicit building cloud-based financial management solutions for mid-market
						organisations. I've been passionate about software development from a young age,
						starting out as a self-taught programmer before going on to earn an MSci in Computer
						Science from the University of Nottingham. My focus is primarily on back-end
						development, but I also have strong experience building websites, web apps, and mobile
						apps. I also have a strong interest in privacy and enjoy tinkering with technologies
						such as Linux and homelabbing.
					</p>
				</div>
			</div>

			<div class="flex w-full flex-col border-b border-border py-8 md:flex-row">
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
									<p class="text-lg">{event.description}</p>
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

			<div class="flex w-full flex-col border-b border-border py-8 md:flex-row">
				<div class="flex-1 pr-4 pb-8 md:pb-0">
					<h2 class="pb-6 text-2xl font-semibold">Sports</h2>
					<p class="pb-4 text-lg">
						Inspired by the 2012 London Olympics I have been rowing since I was young. During
						university, I competed nationally at events like BUCS, HORR, and Henley Royal Regatta,
						and served as President of the boat club in my final year. Since leaving university I
						have continued to race and train with my local club. As a very demanding sport, it has
						taught me a lot about discipline and pushing my limits.
					</p>
					<p class="pb-8 text-lg">
						Rowing has also opened the door to a wider world of endurance sport. What started as
						cross-training quickly became a passion for road cycling, and following the professional
						peloton has further fueled my interest in the sport. This has also given me an interest
						in aiming to complete an Ironman within the next couple of years.
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
		<div class="flex w-full flex-col gap-8 py-8 md:flex-row">
			<div class="flex-1">
				<h2 class="pb-4 text-2xl font-semibold">Projects</h2>
				<PostList
					items={data.projects}
					basePath="/projects"
					maxItems={5}
					moreLink={{ href: '/projects', text: 'See all projects' }}
				/>
			</div>
			<div class="flex-1">
				<h2 class="pb-4 text-2xl font-semibold">Blog</h2>
				<PostList
					items={data.posts}
					basePath="/blog"
					maxItems={5}
					moreLink={{ href: '/blog', text: 'See all posts' }}
				/>
			</div>
		</div>
	</div>
</div>
