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
			title: 'Promptopia',
			imageUrl: 'https://res.cloudinary.com/dupkisnya/image/upload/f_webp/Screenshot_from_2024-09-28_00-03-07_g4syg9.jpg',
			description: 'Introducing Promptopia, a website built for sharing AI prompts.',
			githubUrl: 'https://github.com/leavedtrait/share-prompts',
			liveUrl: 'https://share-prompts-dusky.vercel.app/',
			tags: ['Nextjs', 'MongoDB', 'Next-auth'],
			category: 'fullstack'
		},
		{
			imageUrl: 'https://res.cloudinary.com/dupkisnya/image/upload/f_webp/Screenshot_from_2024-09-28_00-40-16_fthugj.jpg',
			title: 'My portfolio',
			description: 'My portfolio/blog, built with SvelteKit and Tailwind. The blog is powered by Sanity CMS',
			githubUrl: 'https://github.com/leavedtrait/portfolio',
			liveUrl: 'https://leavedtrait.vercel.app',
			tags: ['SvelteKit', 'Tailwind', 'CMS'],
			category: 'frontend'
		},
		{
			title: 'Promptopia',
			imageUrl: 'https://res.cloudinary.com/dupkisnya/image/upload/f_webp/Screenshot_from_2024-09-28_00-03-07_g4syg9.jpg',
			description: 'Introducing Promptopia, a website built for sharing AI prompts.',
			githubUrl: 'https://github.com/leavedtrait/share-prompts',
			liveUrl: 'https://share-prompts-dusky.vercel.app/',
			tags: ['Nextjs', 'MongoDB', 'Next-auth'],
			category: 'fullstack'
		},

	];
</script>

<Seo {seoConfig} />

<div class="flex flex-col items-center">
	<!-- Grid layout for small and medium devices -->
	<div class="grid justify-center gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:hidden">
		{#each projectList as project}
			<div class="mx-auto">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>

	<!-- Flexbox layout for large devices and above -->
	<div class="m-auto hidden gap-10 p-6 lg:grid lg:grid-cols-2 xl:grid-cols-3">
		{#each projectList as project}
			<div class=" mx-auto">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
</div>
