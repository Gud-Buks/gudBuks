<script lang="ts">
	import { api } from '$lib/api';
	import type { Book } from '$lib/types/book';
	import BookItem from './bookItem.svelte';

	async function getBooks() {
		const res = await api.get<Book[]>('/books');
		return res.data;
	}
</script>

{#await getBooks()}
	<div>Loading</div>
{:then books}
	<div class="flex-row gap-2 flex-wrap">
		{#each books as book}
			<BookItem {book} />
		{/each}
	</div>
{/await}
