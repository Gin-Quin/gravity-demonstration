<script lang="ts">
	import type { Pokemon } from '@prisma/client';
	import PokemonCard from './PokemonCard.svelte';
	export let pokemons: Pokemon[];
</script>

<main>
	{#each pokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</main>

<style>
	main {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 16px;
	}
</style>
