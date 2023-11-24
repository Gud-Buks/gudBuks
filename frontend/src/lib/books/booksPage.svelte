<script lang="ts">
	import { api } from '$lib/api';
	import type { Book } from '$lib/types/book';
	import MeLink from '$lib/user/meLink.svelte';
	import BookItem from './bookItem.svelte';
	import BookSearchForm from './bookSearchForm.svelte';
	import LoadingSection from './loadingSection.svelte';

	export let q: string | null;

	let inputValue: string = q || '';

	async function getBooks(q: string) {
		const res = await api.get<Book[]>('/books?q=' + q);
		return res.data;
	}
</script>

<div class="top-bar">
	<div />
	<BookSearchForm value={inputValue} />
	<MeLink />
</div>
{#if !q}
	<div class="p-2 text-center">The books options will be shown here once you search</div>
{:else}
	{#await getBooks(q)}
		<LoadingSection />
	{:then books}
		<div class="items-center">
			<div class="flex-row gap-2 flex-wrap w-full max-w-4xl justify-center">
				{#each books as book (book.id)}
					<BookItem {book} />
				{/each}
			</div>
		</div>
	{/await}
{/if}
