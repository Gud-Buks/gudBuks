<script lang="ts">
	import { api } from '$lib/api';
	import type { Comment } from '$lib/types/comment';
	import { timeAgo } from '../timeAgo';

	export let comment: Comment;

	const date = new Date(comment.createdAt);
	const id = comment.id;

	async function deleteComment() {
		try {
			await api.delete(`/comments/${id}`);
			console.log('Comentário excluído com sucesso!');
		} catch (error) {
			console.error('Erro ao excluir o comentário', error);
		}
	}
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
		<button on:click={deleteComment}> Excluir Comentário </button>
	</div>
</div>
