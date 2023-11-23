<script>
	import { me } from './meStore';
</script>

{#if $me}
	<a href="/me" class="bg-black/10 rounded-full w-10 aspect-square overflow-hidden">
		<img
			src={$me.picture}
			alt={$me.name}
			class="bg-black/10 rounded-full w-10 aspect-square overflow-hidden"
		/>
	</a>
{:else}
	<a class="main-button" href="/sign-in"> Sign In</a>
{/if}
