<script lang="ts">
	import Calculator from 'src/components/Calculator.svelte';
	import Clock from 'src/components/Clock.svelte';
	import PokemonGrid from 'src/components/templates/PokemonGrid.svelte';
	import User from 'src/components/templates/User.svelte';
	import { api, useApi } from 'src/server/api';
	import '../global.css';

	const user = useApi().user.findFirst();
	const pokemons = useApi().pokemon.findMany();

	api.pokemon.update({
		where: { id: 5 },
		data: {
			image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
		},
	});
</script>

<main class="container">
	<h6>Unlock super-fast full-stack development 🚀</h6>
	<h2>🌍 Welcome to Gravity demonstration 🌛</h2>

	<Calculator />

	<Clock />

	{#if $user.data}
		<User user={$user.data} />
	{/if}

	<PokemonGrid pokemons={$pokemons.data ?? []} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
