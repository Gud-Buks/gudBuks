<script lang="ts">
	import { api } from '$lib/api';
	import type { Comment } from '$lib/types/comment';
	import CommentForm from './comments/commentForm.svelte';
	import CommentList from './comments/commentList.svelte';

	export let bookId: string;

	$: comments = getComments(bookId);

	async function getComments(bookId: string): Promise<Comment[]> {
		const res = await api.get<Comment[]>('/comments?bookId=' + bookId);
		return res.data;
	}
</script>

<section class="gap-4">
	<h2>Comments</h2>
	<CommentForm {bookId} />
	{#await comments}
		<div>Loading...</div>
	{:then comments}
		<CommentList {comments} />
	{/await}
</section>
