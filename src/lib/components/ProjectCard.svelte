<script lang="ts">
	import type { projectCardProps } from '$lib/types';

	export let props: projectCardProps;
</script>

<div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
	<figure>
		<img src={props.imageUrl} alt={props.title} class="w-full h-48 object-cover"/>
	</figure>
	<div class="p-4 space-y-2">
		<h2 class="text-xl font-semibold flex items-center justify-between">
			{props.title}
			<span class="ml-2 text-xs bg-blue-100 text-blue-600 rounded-full px-2 py-1">NEW</span>
		</h2>
		<p class="text-gray-600 text-sm">
			{props.description}
		</p>
		<div class="flex justify-center space-x-2 py-2">
			{#each props.tags as tag}
			<div class="badge badge-outline">{tag}</div>
		  {/each}	
		</div>
		<div class="flex justify-center space-x-4 mt-4">
			<a href={props.githubUrl} class="flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition">
				View on
				<svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="24" height="24" viewBox="0 0 30 30" fill="currentColor">
					<path
						d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 
                c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 
                c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 
                c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 
                c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481 
                C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 
                c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 
                c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
					></path>
				</svg>
			</a>
			<a href={props.liveUrl} class="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition">
				Live URL
				<svg viewBox="0 0 30 30" class="ml-2" width="24" height="24" fill="currentColor">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M21 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.586l-2.11 2.11a6.007 6.007 0 0 1 1.415 1.413L19 6.414V9a1 1 0 1 0 2 0zm-5.523 3.11A5.973 5.973 0 0 0 12 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7c0-1.296-.41-2.496-1.11-3.477l-6.183 6.184a1 1 0 0 1-1.414-1.414z"
					></path>
				</svg>
			</a>
		</div>
	</div>
</div>
