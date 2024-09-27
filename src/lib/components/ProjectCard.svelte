<script lang="ts">
	import type { projectCardProps } from '$lib/types';

	export let props: projectCardProps;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<figure>
		<img src={props.imageUrl} alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{props.title}
			<div class="badge badge-secondary">NEW</div>
		</h2>
		<p>{props.description}</p>
		<div class="card-actions justify-end">
			<div class="badge badge-outline">Fashion</div>
			<div class="badge badge-outline">Products</div>
		</div>
	</div>
</div>
