<script lang="ts">
	import type { Book } from '$lib/types/book';

	export let book: Book;
</script>

<a href="/books/{book.id}">
	{book.title}
</a>
