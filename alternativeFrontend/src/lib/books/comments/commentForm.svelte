<script lang="ts">
	import { api } from '$lib/api';
	import type { Comment } from '$lib/types/comment';
	import { Moon } from 'svelte-loading-spinners';

	export let bookId: string;
	export let comments: Comment[];
	let loading = false;

	let text: string;
	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		loading = true;

		// This strange thing comes from the mock not returning the user in the POST response
		// Should not be necessary in the real backend.
		// Although it just causes performance issues
		const resFromPost = await api.post('/comments', { bookId, text });
		const resFromGet = await api.get('/comments/' + resFromPost.data.id);

		comments.unshift(resFromGet.data);
		// force refresh
		comments = comments;

		text = '';
		loading = false;
	}
</script>

<form action="?/comments" class="gap-2" on:submit={handleSubmit}>
	<textarea
		id="text"
		required
		bind:value={text}
		placeholder="what do you think?"
		class="bg-black/10 p-2 rounded"
	/>
	<div class="flex-row">
		<button type="submit" disabled={loading} class="main-button">
			{#if loading}
				<Moon color={'white'} size={20} />
			{/if}
			<div class="group-active:scale-95">Publish</div>
		</button>
	</div>
</form>
