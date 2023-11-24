<script lang="ts">
	import { logOut } from '$lib/auth/logOut';
	import GoBackLink from '$lib/books/goBackLink.svelte';
	import { me } from './meStore';
</script>

{#if $me}
	<div class="items-center gap-2 p-2 flex-1">
		<img src={$me.picture} alt="" class="aspect-square w-20 rounded-full" />
		<div>{$me.name}</div>

		<div class="flex-1 justify-center">
			<button class="main-button" on:click={logOut}>Log out</button>
		</div>
	</div>
{:else}
	<div class="top-bar p-2">
		<GoBackLink />
	</div>
	<div class="items-center gap-2 flex-1 justify-center">
		<div>Sign in to have a user page and comments</div>
		<a class="main-button" href="/sign-in"> Sign In</a>
	</div>
{/if}
