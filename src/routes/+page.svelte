<script>
	import Hero from '$lib/components/Hero.svelte';
	import MobileRedirectButtons from '$lib/components/MobileRedirectButtons.svelte';
</script>

<svelte:head>
	<title>Johnson Macharia</title>
	<meta name="description" content="View my portfolio" />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
<div class="h-screen min-w-full">
	<div class="flex flex-col items-center">
		<Hero />

		<a href="/projects">
			<button class="btn  btn-lg">
				<a href="/blog">Blog</a>
			</button>
		</a>

	</div>
</div>
