<script lang="ts">
	import { me } from './meStore';
</script>

<div>
	<img src={$me.picture} alt="" />
	<div>{$me.name}</div>
</div>
