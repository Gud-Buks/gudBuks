<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import CommentForm from './comments/commentForm.svelte';
	import CommentList from './comments/commentList.svelte';

	export let bookId: string;
	export let comments: Comment[];
	export let userComments: Comment[] = [];
</script>

<section class="gap-4">
	<h2>Comments</h2>
	{#await comments}
		<div>Loading...</div>
	{:then comments}
		<CommentForm {bookId} bind:comments={userComments} />
		{#if userComments.length}
			<CommentList comments={userComments} />
		{/if}
		<CommentList {comments} />
	{/await}
</section>
