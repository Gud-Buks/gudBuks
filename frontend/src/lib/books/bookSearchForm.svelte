<script lang="ts">
	export let value: string;
</script>

<div class="items-center p-2 sticky top-0 bg-white">
	<form method="get" class="flex-row">
		<input
			id="q"
			name="q"
			bind:value
			type="text"
			class="bg-black/10 rounded p-2"
			placeholder="enter some title here"
		/>
		<button type="submit" class="main-button">
			<div>Search</div>
		</button>
	</form>
</div>
