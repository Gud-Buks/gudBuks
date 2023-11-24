<script lang="ts">
	import { api } from '$lib/api';
	import type { Comment } from '$lib/types/comment';

	export let comment: Comment;

	async function deleteComment() {
		await api.delete(`/comments/${comment.id}`);
	}
</script>

<button on:click={deleteComment}> Excluir Comentário </button>
