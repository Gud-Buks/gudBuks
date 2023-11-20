<script lang="ts">
	import BookPage from '$lib/books/bookPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BookPage id={data.id} />
