import prismaPackage from '@prisma/client';

const { PrismaClient } = prismaPackage;

const prisma = new PrismaClient();

async function seed() {
	await prisma.user.create({
		data: {
			name: 'Chacha',
			email: 'chacha@gravity.io',
			pokemons: {
				create: [
					{
						name: 'bulbasaur',
						image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
					},
					{
						name: 'ivysaur',
						image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
					},
				],
			},
		},
	});

	await prisma.pokemon.create({
		data: {
			name: 'venusaur',
			image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
		},
	});

	await prisma.pokemon.create({
		data: {
			name: 'charmander',
			image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
		},
	});

	await prisma.pokemon.create({
		data: {
			name: 'charmeleon',
			image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
		},
	});
}

seed();
