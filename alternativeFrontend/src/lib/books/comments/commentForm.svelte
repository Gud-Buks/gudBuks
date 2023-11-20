<script lang="ts">
	import { api } from '$lib/api';

	export let bookId: string;

	let text: string;
	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		await api.post('/comments', { bookId, text });
	}
</script>

<form action="?/comments" class="gap-2" on:submit={handleSubmit}>
	<textarea
		id="text"
		bind:value={text}
		placeholder="what do you think?"
		class="bg-black/10 p-2 rounded"
	/>
	<div class="flex-row">
		<button
			type="submit"
			class="bg-blue-600 hover:bg-blue-500 text-white rounded p-2 px-4 group items-center justify-center"
		>
			<div class="group-active:scale-95">Publish</div>
		</button>
	</div>
</form>
