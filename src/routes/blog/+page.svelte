<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let d = JSON.stringify(data.user);
</script>

<h1>{d}</h1>
<h1>username: {data.user.name}</h1>
<h1>email: {data.user.email}</h1>
<img src={data.user.image} alt="" width="30" height="30" />
