<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import { timeAgo } from '../timeAgo';

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
	</div>
</div>
