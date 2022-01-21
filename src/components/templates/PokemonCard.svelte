<script lang="ts">
	import type { Pokemon } from '@prisma/client';
	export let pokemon: Pokemon;
</script>

<article>
	<header>
		<img src={pokemon.image} alt="pokemon" />
	</header>
	<main>
		<div>
			id: {pokemon.id}
		</div>
		<div>
			name: {pokemon.name}
		</div>
		<div>
			trainerId: {pokemon.trainerId}
		</div>
	</main>
</article>

<style>
	article {
		width: 220px;
	}
</style>
