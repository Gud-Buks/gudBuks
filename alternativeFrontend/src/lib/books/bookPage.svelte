<script lang="ts">
	import { api } from '$lib/api';
	import type { Book } from '$lib/types/book';
	import type { Comment } from '$lib/types/comment';
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
	<div class="p-6 gap-6 items-center flex-1">
		<h1 class="text-2xl font-semibold text-center">{book.title}</h1>
		<div class="flex-row gap-4">
			<img src="" alt="book cover" class="w-64 h-96 bg-black/10" />
			<div class="gap-4">
				<section>
					<h2>Synopsis</h2>
					<div>
						{book.synopsis}
					</div>
				</section>
				<section>
					<h2>Comments</h2>
					{#await comments}
						<div>Loading...</div>
					{:then comments}
						<CommentList {comments} />
					{/await}
				</section>
			</div>
		</div>
	</div>
{/await}

<style lang="postcss">
	h2 {
		@apply text-lg font-medium;
	}
</style>
