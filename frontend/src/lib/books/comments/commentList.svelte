<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import CommentItem from './commentItem.svelte';
	import { comments as commentsStore } from './commentStore';

	export let comments: Comment[];
	$: commentsStore.set(comments);
</script>

{#if $commentsStore.length === 0}
	<div>No comments to show</div>
{:else}
	<div class="gap-2">
		{#each $commentsStore as comment (comment.id)}
			<CommentItem {comment} />
		{/each}
	</div>
{/if}
