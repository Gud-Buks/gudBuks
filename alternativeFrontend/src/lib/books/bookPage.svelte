<script lang="ts">
	import type { Book } from '$lib/types/book';
	import type { Comment } from '$lib/types/comment';
	import TimeAgo from 'javascript-time-ago';
	import en from 'javascript-time-ago/locale/en';
	import pt from 'javascript-time-ago/locale/pt';
	import CommentForm from './comments/commentForm.svelte';
	import CommentList from './comments/commentList.svelte';

	TimeAgo.addDefaultLocale(en);
	TimeAgo.addLocale(pt);

	export let id: string;

	export let book: Book;
	export let comments: Comment[];

	let userComments: Comment[] = [];
</script>

<div class="flex-1 items-center">
	<div class="p-6 gap-6 items-center flex-1 w-full max-w-5xl">
		<h1 class="text-2xl font-semibold text-center">{book.title}</h1>
		<div class="md:flex-row gap-4">
			<div class="items-center">
				<img
					src={book.cover}
					alt={book.title}
					class="w-64 h-96 bg-black/10 shrink-0 md:sticky top-4"
				/>
			</div>
			<div class="gap-4 flex-1">
				<section>
					<h2>description</h2>
					<div>
						{book.description}
					</div>
				</section>
				<section>
					<h2>Release date</h2>
					<div>
						{new Date(book.publishedDate).toLocaleDateString()}
					</div>
				</section>
				<section class="gap-4">
					<h2>Comments</h2>
					{#await comments}
						<div>Loading...</div>
					{:then comments}
						<CommentForm bookId={book.id} bind:comments={userComments} />
						{#if userComments.length}
							<CommentList comments={userComments} />
						{/if}
						<CommentList {comments} />
					{/await}
				</section>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply text-lg font-medium;
	}
</style>
