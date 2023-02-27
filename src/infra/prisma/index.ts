import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const { user, collaborators, project } = prisma;

export { user , collaborators, project};
