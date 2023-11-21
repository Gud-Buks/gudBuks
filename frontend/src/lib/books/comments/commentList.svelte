<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import CommentItem from './commentItem.svelte';

	export let comments: Comment[];
</script>

{#if comments.length === 0}
	<div>No comments to show</div>
{:else}
	<div class="gap-2">
		{#each comments as comment}
			<CommentItem {comment} />
		{/each}
	</div>
{/if}
