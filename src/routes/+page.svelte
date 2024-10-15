<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import type {seoConfigType }from '$lib/types';
	import Seo from "$lib/components/Seo.svelte"

	const seoConfig: seoConfigType = {
	title: "Johnson Macharia",
	description: "view my portfolio"
	}
</script>

<Seo {seoConfig} />

<div class="h-full min-w-full">
	<div class="flex flex-col items-center space-y-2">
		<Hero />
	</div>
</div>
