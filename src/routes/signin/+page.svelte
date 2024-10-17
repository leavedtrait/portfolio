<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
</script>

<div>
	<img src="github.svg" alt="Company Logo" />
	<SignIn provider="github" signInPage="signin" />
</div>
