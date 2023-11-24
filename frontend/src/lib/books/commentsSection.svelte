<script lang="ts">
	import type { Comment } from '$lib/types/comment';
	import CommentForm from './comments/commentForm.svelte';
	import CommentList from './comments/commentList.svelte';

	export let bookId: string;
	export let comments: Comment[];
</script>

<section class="gap-4">
	<h2>Comments</h2>
	<CommentForm {bookId} bind:comments />
	{#await comments}
		<div>Loading...</div>
	{:then comments}
		<CommentList {comments} />
	{/await}
</section>
