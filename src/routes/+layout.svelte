<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<main class="py-10">
	<NavBar />
	<slot></slot>
</main>
