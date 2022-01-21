import { prisma } from 'src/prisma/prisma';
import { PrismaService } from 'src/server/PrismaService';

export class user extends PrismaService(prisma.user) {}
