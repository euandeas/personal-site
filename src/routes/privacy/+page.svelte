<script lang="ts">
	import { Header } from '$lib/components/header';

	let y: number = $state(0);
	let isSticky = true;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>Euan Deas</title>
</svelte:head>

<div class="flex justify-center bg-background">
	<Header {isSticky} />

	<div class="mx-10 w-full max-w-240 pt-24">
		<h1 class="pb-6 text-3xl font-semibold">Privacy... Its Important</h1>

		<p class="pb-4">
			This Privacy Policy explains how your information is (or isn't) used on this website or any of
			my applications. In short, I don't collect, track, or sell any of your data unless it's
			absolutely necessary for a specific feature or application. I don't like my data being
			collected, so why would I collect yours!
		</p>

		<h2 class="pb-2">1. No Data Collection</h2>
		<p class="pb-2">
			Your privacy is important to me, so <strong>euandeas.com</strong> and any of my applications are
			built with that in mind:
		</p>
		<ul class="pb-4 pl-4">
			<li>
				<strong>No Cookies:</strong> This site doesn't use cookies or any other tracking technologies.
			</li>
			<li>
				<strong>No Analytics:</strong> I don't use any analytics services that collect or monitor your
				behavior.
			</li>
			<li>
				<strong>No Ads:</strong> There are no ads on this site, meaning no need for tracking your activity.
			</li>
		</ul>

		<h2 class="pb-2">2. Minimal Data Collection When Needed</h2>
		<p class="pb-2">
			While my goal is to avoid collecting any data, there may be instances where some information
			is required:
		</p>
		<ul class="pb-4 pl-4">
			<li>
				<strong>User Input:</strong> If you choose to provide information, such as filling out a form
				or using a specific tool, that data will only be used for the purpose you provided it.
			</li>
			<li>
				<strong>Application-Specific Data:</strong> Some features or applications may need certain data
				to function properly. Any data collected for this reason will be minimal and only retained as
				long as necessary.
			</li>
		</ul>

		<h2 class="pb-2">3. No Data Sharing or Selling</h2>
		<p class="pb-4">
			I'm committed to keeping your data safe. If any data is collected for functional purposes, it
			won't be shared, sold, or used beyond its intended purpose.
		</p>

		<h2 class="pb-2">4. Commitment to Open-Source</h2>
		<p class="pb-4">
			As an advocate for open-source software, I keep my work transparent. The code for this website
			and my applications is largely open-source and available for anyone to review, so you can
			verify that my privacy practices align with what I've outlined here.
		</p>

		<h2 class="pb-2">5. Contact Information</h2>
		<p class="pb-4">
			If you have any questions or concerns about your privacy on <strong>euandeas.com</strong>,
			feel free to reach out to me directly at
			<strong
				><a class="hover:underline" href="mailto:contact@euandeas.com">contact@euandeas.com</a
				></strong
			> with the subject line "Privacy: [Your Concern]".
		</p>
	</div>
</div>
