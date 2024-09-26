<script lang="ts">
	import type { seoConfigType } from '$lib/types';

	export let seoConfig: seoConfigType;
</script>

<svelte:head>
	<title>{seoConfig.title}</title>
	<meta name="description" content={seoConfig.description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
