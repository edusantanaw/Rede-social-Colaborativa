import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const {user} = prisma;

export {user};