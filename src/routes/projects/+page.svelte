<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { projectCardProps, seoConfigType } from '$lib/types';
	const seoConfig: seoConfigType = {
		title: 'Johnson Macharia',
		description: 'list of my projects'
	};
	let projectList: projectCardProps[] = [
		{
			imageUrl:
				'https://res.cloudinary.com/dupkisnya/image/upload/f_webp/Screenshot_from_2024-09-28_00-40-16_fthugj.jpg',
			title: 'My portfolio',
			description:
				'My portfolio/blog, built with Sveltekit and Tailwind.The blog is powered  by MDsveX.',
			githubUrl: 'https://github.com/leavedtrait/portfolio',
			liveUrl: 'https://leavedtrait.vercel.app'
		},
		{
			title: 'Promptopia',
			imageUrl:
				'https://res.cloudinary.com/dupkisnya/image/upload/f_webp/Screenshot_from_2024-09-28_00-03-07_g4syg9.jpg',
			description: 'Introducing Promptopia ,a website built for sharing Ai prompts.',
			githubUrl: 'https://github.com/leavedtrait/share-prompts',
			liveUrl: 'https://share-prompts-dusky.vercel.app/'
		}
	];
</script>

<Seo {seoConfig} />

<div class="flex flex-col items-center scroll-smooth">
	<div
		class="grid justify-center gap-6 space-x-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
	>
		{#each projectList as props}
			<div class="-z-[1] mx-auto">
				<ProjectCard {props} />
			</div>
		{/each}
	</div>
</div>
