<script>
	import { api, useApi } from 'src/server/api';
	import NumberInput from './NumberInput.svelte';
	let a = 1;
	let b = 2;

	$: total = useApi({ network: 'if-needed' }).math.add(a, b);
</script>

<main>
	<NumberInput bind:value={a} />
	<NumberInput bind:value={b} />
	Total: {$total.isLoading ? '...' : $total.data}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
