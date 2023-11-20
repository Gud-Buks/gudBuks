<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import TimeAgo from 'javascript-time-ago';

	export let comment: Comment;

	const timeAgo = new TimeAgo(['en', 'pt']);
	const date = new Date(comment.createdAt);
</script>

<div>
	<div>
		{comment.text}
	</div>
	<div class="opacity-50 flex-row gap-2">
		<div>
			{comment.user.name}
		</div>
		<div>
			{timeAgo.format(date)}
		</div>
	</div>
</div>
