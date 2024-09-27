<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<main>
	<NavBar />
	<br /><br /><br /><br />
	<div>
		<slot />
	</div>
</main>
