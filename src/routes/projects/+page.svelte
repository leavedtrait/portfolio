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
            'https://res.cloudinary.com/dupkisnya/image/upload/v1727473244/Screenshot_from_2024-09-28_00-40-16_fthugj.png',
			title: 'My portfolio',
			description:
				'My portfolio/blog, built with Sveltekit and Tailwind.The blog is powered  by MDsveX.',
			githubUrl: 'https://github.com/leavedtrait/portfolio',
			liveUrl: 'https://leavedtrait.vercel.app'
		},
		{
			title: 'Promptopia',
			imageUrl:
				'https://res.cloudinary.com/dupkisnya/image/upload/v1727471321/Screenshot_from_2024-09-28_00-03-07_g4syg9.png',
			description: 'Introducing Promptopia ,a website built for sharing Ai prompts.',
			githubUrl: 'https://github.com/leavedtrait/share-prompts',
			liveUrl: 'https://share-prompts-dusky.vercel.app/'
		}
	];
</script>

<Seo {seoConfig} />

<div class="space-y-6 space-x-4 flex flex-col lg:flex lg:flex-row items-center p-4">
	{#each projectList as props}
    <div class=" -z-[1]">
        <ProjectCard {props} />
    </div>
		
	{/each}
</div>
