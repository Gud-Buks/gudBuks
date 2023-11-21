<script>
	import { onMount } from 'svelte';

	const clientId = import.meta.env.VITE_CLIENT_ID;

	onMount(async () => {
		const handleCredentialResponse = async (response) => {
			// use response.credential
		};
		google.accounts.id.initialize({
			client_id: '764935952135-pq9vunhl6j03lams42b2rroh4babii7r.apps.googleusercontent.com',
			callback: handleCredentialResponse
		});
		google.accounts.id.renderButton(
			document.getElementById('buttonDiv'),
			{ theme: 'outline', size: 'large' } // customization attributes
		);
		google.accounts.id.prompt();
	});
</script>

<div class="flex-1 items-center justify-between p-2">
	<div />
	<div class="gap-6 max-w-xl w-full items-center">
		<div class="flex-row items-center gap-2">
			<img src="/icon.svg" alt="logo" width="40" height="40" />
			<h1 class="text-2xl font-medium">Gudbuks</h1>
		</div>
		<div id="buttonDiv" class="h-10 min-w-[20rem]"></div>
	</div>
	<div class="block text-xs">
		By entering you agree with the
		<a href="/use-terms">Use Terms</a>
		and
		<a href="/privacy-policy">Privacy Policy</a>
	</div>
</div>

<style lang="postcss">
	a {
		@apply text-blue-500 underline;
	}
</style>
