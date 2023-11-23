<script lang="ts">
	import { logOut } from '$lib/auth/logOut';
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
{/if}
