<script lang="ts">
	import type { Book } from '$lib/types/book';

	export let book: Book;
</script>

<a href="/books/{book.id}" class="p-2 rounded-lg hover:bg-black/10 items-center w-32">
	<img
		srcset=""
		width="112"
		height="161.8"
		src={book.cover}
		alt="'{book.title}' cover"
		class="bg-black/10 rounded"
	/>
	<div>
		{book.title}
	</div>
</a>
