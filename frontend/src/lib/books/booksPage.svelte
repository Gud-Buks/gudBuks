<script lang="ts">
	import type { Book } from '$lib/types/book';
	import BookItem from './bookItem.svelte';

	export let q: string | null;
	export let books: Book[];
</script>

<div class="items-center p-2">
	<form method="get" class="flex-row">
		<input
			id="q"
			name="q"
			type="text"
			class="bg-black/10 rounded p-2"
			placeholder="enter some title here"
		/>
		<button type="submit" class="main-button">
			<div>Search</div>
		</button>
	</form>
</div>

{#if !q}
	<div class="p-2 text-center">The books options will be shown here once you search</div>
{:else}
	<div class="items-center">
		<div class="flex-row gap-2 flex-wrap w-full max-w-4xl">
			{#each books as book (book.id)}
				<BookItem {book} />
			{/each}
		</div>
	</div>
{/if}
