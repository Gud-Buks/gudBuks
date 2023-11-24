<script lang="ts">
	import { api } from '$lib/api';
	import type { Comment } from '$lib/types/comment';
	import { comments } from './commentStore';

	export let comment: Comment;

	async function deleteComment() {
		comments.update((comments) => {
			return comments.filter((value) => {
				return value.id !== comment.id;
			});
		});
		await api.delete(`/comments/${comment.id}`);
	}
</script>

<button on:click={deleteComment}> Excluir Comentário </button>
