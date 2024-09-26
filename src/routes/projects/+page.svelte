<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import type { seoConfigType } from '$lib/types';
	const seoConfig: seoConfigType = {
		title: 'Johnson Macharia',
		description: 'list of my projects'
	};
</script>

<Seo {seoConfig} />
<div></div>
