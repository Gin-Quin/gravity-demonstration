import prismaPackage from '@prisma/client';

const { PrismaClient } = prismaPackage;

const prisma = new PrismaClient();

async function readDatabase() {
	const trainers = await prisma.user.findMany();
	const pokemons = await prisma.pokemon.findMany();
	console.dir(trainers, { depth: null });
	console.dir(pokemons, { depth: null });
}

readDatabase();
