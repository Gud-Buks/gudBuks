<script lang="ts">
	import BooksPage from '$lib/books/booksPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BooksPage q={data.q} books={data.books} />
