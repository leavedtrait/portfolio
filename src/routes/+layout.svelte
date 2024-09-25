<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>
<main class="py-10 sticky">
	<NavBar/>
	<div class="">
		<slot></slot>

	</div>
	
</main>

