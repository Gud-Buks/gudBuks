<script lang="ts">
	import { api } from '$lib/api';
	import type { Book } from '$lib/types/book';
	import type { Comment } from '$lib/types/comment';
	import CommentForm from './comments/commentForm.svelte';
	import CommentList from './comments/commentList.svelte';

	export let id: string;
	const comments = getComments();

	async function getBook() {
		const res = await api.get<Book>('/books/' + id);
		return res.data;
	}

	async function getComments() {
		const res = await api.get<Comment[]>('/comments?bookId=' + id);
		return res.data;
	}
</script>

{#await getBook()}
	<div>Loading {id}</div>
{:then book}
	<div class="flex-1 items-center">
		<div class="p-6 gap-6 items-center flex-1 w-full max-w-5xl">
			<h1 class="text-2xl font-semibold text-center">{book.title}</h1>
			<div class="md:flex-row gap-4">
				<div class="items-center">
					<img src="" alt="book cover" class="w-64 h-96 bg-black/10 shrink-0 md:sticky top-4" />
				</div>
				<div class="gap-4 flex-1">
					<section>
						<h2>Synopsis</h2>
						<div>
							{book.synopsis}
						</div>
					</section>
					<section class="gap-4">
						<h2>Comments</h2>
						<CommentForm bookId={book.id} />
						{#await comments}
							<div>Loading...</div>
						{:then comments}
							<CommentList {comments} />
						{/await}
					</section>
				</div>
			</div>
		</div>
	</div>
{/await}

<style lang="postcss">
	h2 {
		@apply text-lg font-medium;
	}
</style>
