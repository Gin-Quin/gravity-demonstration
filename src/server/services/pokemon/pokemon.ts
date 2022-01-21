import { prisma } from 'src/prisma/prisma';
import { PrismaService } from 'src/server/PrismaService';

export class pokemon extends PrismaService(prisma.pokemon, {
	where: {
		name: {
			endsWith: 'saur',
		},
	},
}) {}
