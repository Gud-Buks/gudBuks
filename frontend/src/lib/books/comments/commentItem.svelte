<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import { me } from '$lib/user/meStore';
	import { timeAgo } from '../timeAgo';
	import DeleteCommentButton from './deleteCommentButton.svelte';

	export let comment: Comment;

	const date = new Date(comment.createdAt);
</script>

<div>
	<div>
		{comment.text}
	</div>
	<div class="opacity-50 flex-row gap-2">
		<div>
			{comment?.user?.name}
		</div>
		<div>
			{timeAgo(date)}
		</div>
		{#if comment.userId === $me?.id}
			<DeleteCommentButton {comment} />
		{/if}
	</div>
</div>
