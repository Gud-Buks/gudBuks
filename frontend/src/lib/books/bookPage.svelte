<script lang="ts">
	import { api } from '$lib/api';
	import type { Book } from '$lib/types/book';
	import type { Comment } from '$lib/types/comment';
	import MeLink from '$lib/user/meLink.svelte';
	import { me } from '$lib/user/meStore';
	import CommentsSection from './commentsSection.svelte';
	import GoBackLink from './goBackLink.svelte';
	import LoadingSection from './loadingSection.svelte';

	export let id: string;

	let userId = $me;
	let comments: Comment[] = [];

	async function getBook(): Promise<Book> {
		const res = await api.get<Book>('/books/' + id);
		return res.data;
	}

	async function getComments(): Promise<Comment[]> {
		const res = await api.get<Comment[]>('/comments?bookId=' + id);
		return res.data;
	}

	async function deleteComment(commentId: string): Promise<void> {
		try {
			const res = await api.delete(`/comments/${commentId}`);
			console.log(res.data);
			comments = await getComments();
		} catch (error) {
			console.error('Erro ao excluir comentário:', error);
		}
	}
</script>

{#await getBook()}
	<LoadingSection />
{:then book}
	<div class="top-bar p-2 z-10 bg-white items-start">
		<GoBackLink />
		<h1 class="text-2xl font-semibold text-center flex-1">{book.title}</h1>
		<MeLink />
	</div>
	<div class="flex-1 items-center">
		<div class="p-6 gap-6 items-center flex-1 w-full max-w-5xl">
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
						<div>{book.description}</div>
					</section>
					<section>
						<h2>Release date</h2>
						<div>{new Date(book.publishedDate).toLocaleDateString()}</div>
					</section>
					{#await getComments()}
						<LoadingSection />
					{:then comments}
						<CommentsSection {comments} bookId={id}>
							{#each comments as comment (comment.id)}
								{#if $me !== undefined && comment.user !== undefined && comment.user.id === $me.id}
									<button on:click={() => deleteComment(comment.id)}> Excluir Comentário </button>
								{/if}
							{/each}
						</CommentsSection>
					{/await}
				</div>
			</div>
		</div>
	</div>
{/await}

<style lang="postcss">
	:global(h2) {
		@apply text-lg font-medium;
	}
</style>
